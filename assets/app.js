import { loot } from "./loot.js";

// Global variables
let randLoot
let currentUserName;
// Load accounts from local storage or initialize as an empty object
let accounts = JSON.parse(localStorage.getItem('accounts')) || {};
let sellcounter = 0;

// On button click, run roll function
$("#roll").click(roll);

function roll() {
    let time = 1; // 15 minutes in seconds
    $("#roll").hide();
    $(".loot-container, #bank, .stash").show().empty();

    // Initial display of time
    $(".loot-container").html(`<p class="time">${formatTime(time)}</p>`);

    // Countdown function
    const countdown = setInterval(() => {
        time--;
        $(".loot-container").html(`<p class="time">${formatTime(time)}</p>`);

        if (time < 1) {
            clearInterval(countdown);
            $(".loot-container").empty();
            // Run the lootroll function 3 times
            for (let i = 0; i < 3; i++) setTimeout(lootroll, 1800 * i);
        }
    }, 1000);
}

// Helper function to format time as MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Lootroll function - determines rarity and runs postloot
function lootroll() {
    randLoot = loot[Math.floor(Math.random() * loot.length)];
    const chances = { medium: 5, rare: 10, insane: 25 };
    const rarity = chances[randLoot.rare];
    (!rarity || Math.random() * rarity < 1) ? postloot() : lootroll();
}

// Postloot function - appends loot to the page
function postloot() {
    var lootbox = $('<div>', {
        class: 'loot-box',
    });
    
    // Balance is displayed with comma separators
    var price = randLoot.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Create the sell button and store the price in a data attribute
    var sellButton = $('<button>', {
        id: 'sell',
        text: 'Sell',
        'data-price': randLoot.price // Store the price here
    });

    lootbox.append("<img src=" + randLoot.img + ">")
        .append("<br>")
        .append("<p class='randlootname'>" + randLoot.name + "</p>")
        .append("<br>")
        .append("<p class='randlootprice'>" + price + "₽" + "</p>")
        .append("<br>")
        .append(sellButton);

    $(".loot-container").append(lootbox);
}

// Quick sell functionality
$(document).on('click', '#sell', function () {
    sellcounter ++
    if (sellcounter == 3) {
        $('.loot-container').empty();
        $('#roll').show();
    }
    currentUserName = localStorage.getItem('currentUserName');
    if (!currentUserName) {
        console.error("No user is currently logged in.");
        return; // Exit if no user is logged in
    }

    let price = parseInt($(this).data('price')); // Get price from the button's data attribute

    // Check if the account exists
    if (accounts.hasOwnProperty(currentUserName)) {
        let lootBox = $(this).closest('.loot-box'); // Get the closest loot box
        lootBox.addClass('dim'); // Dim the loot box
        $(this).remove(); // Remove the sell button
        // Update the balance in memory
        accounts[currentUserName].balance += price;
        // Update the display balance
        $(".balance").html(accounts[currentUserName].balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₽");
        // Save updated accounts to local storage
        saveAccounts();
    } else {
        console.error("Account not found for user:", currentUserName);
    }
});


//Account Creation


// Function to save accounts to local storage
function saveAccounts() {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

// Event listener for account creation
$(document).on('click', '#create', function () {
    let userName = $("#username").val().trim(); // Get the value from the username input
    let passWord = $("#password").val().trim(); // Get the value from the password input

    // Check if either the username or password is empty
    if (!userName || !passWord) {
        alert("Please fill in both fields.");
        return; // Stop further execution
    }

    // Check if the username already exists
    if (accounts.hasOwnProperty(userName)) {
        alert("Sorry, this account already exists.");
    } else {
        // Store user data as an object
        accounts[userName] = {
            password: passWord,
            balance: 0,
            stash: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
        };
        saveAccounts(); // Save updated accounts to local storage
        alert("Account created successfully!");
        window.location.href = 'assets/raid.html';
    }
});

$(document).on('click', '#login', function () {
    let userName = $("#username").val().trim();
    let passWord = $("#password").val().trim();

    if (!userName || !passWord) {
        alert("Please fill in both fields.");
        return;
    }
    if (accounts.hasOwnProperty(userName)) {
        if (accounts[userName].password === passWord) {
            currentUserName = userName; // Set the current user name
            localStorage.setItem('currentUserName', currentUserName); // Save to local storage
            
            // Retrieve and display user's balance
            let userBalance = accounts[currentUserName].balance || 0;
            $(".balance").html(userBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₽");

            window.location.href = 'assets/raid.html';
        } else {
            $("#password").val("").attr("placeholder", "Wrong Password").addClass("placeholder-red");
        }
    } else {
        $("#username").val("").attr("placeholder", "Username not found").addClass("placeholder-red");
        $("#password").val("");
    }
});

$(document).ready(function() {
    currentUserName = localStorage.getItem('currentUserName');
    
    // Check if the user is logged in
        let userBalance = accounts[currentUserName].balance || 0;
        $(".balance").html(userBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₽");

});