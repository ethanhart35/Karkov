const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGODB_URI
console.log(uri)
// Create a MongoClient with options
const client = new MongoClient(uri, {
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true,
    }
});

let dbConnection;

async function connectToDatabase() {
    try {
        if (!dbConnection) {
            await client.connect();
            console.log('Connected to MongoDB');
            dbConnection = client.db('Kharkov'); // Specify your DB name here
        }
        return dbConnection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Pass the error up for better error handling
    }
}

module.exports = { connectToDatabase };