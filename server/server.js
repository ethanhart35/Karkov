const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { connectToDatabase } = require('./mongo'); // Import the database connection
const bcrypt = require('bcrypt');
const saltRounds = 10;  // Number of salt rounds for password hashing
require('dotenv').config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "assets" directory
app.use(express.static(path.join(__dirname, '../javascript')));

// Serve homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../javascript/index.html'));
});

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Route for user signup
app.post('/addUser', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const users = db.collection('Users');

        // Check if the username already exists
        const existingUser = await users.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(400).send('Username already exists');
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        
        const userData = {
            username: req.body.username,
            password: hashedPassword,
            balance: 0,
            stash: [],
            time: 10,
        };
        res.json({ success: true });
        // Insert the new user into the database
        await users.insertOne(userData);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
});

// Route for user login
app.post('/login', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const users = db.collection('Users');
        const user = await users.findOne({ username: req.body.username });
        console.log(req.body.username)
        console.log(user.username)
        if (!req.body.username, !req.body.password){
            console.log("NO")
            return
        }
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            console.log("success login")
            res.json({ success: true });
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Error logging in');
    }
});

app.use((err, req, res, next) => {
    const defaultErr = 
      {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred, global handler' }, 
      }
    const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log)
  res.status(errorObj.status).send(JSON.stringify(errorObj.message))
    })

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});