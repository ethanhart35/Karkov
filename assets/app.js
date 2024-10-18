import { loot } from "./loot.js";

// Global variables
let balance = 0, randLoot, cookie = parseInt(document.cookie);

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
            
            // Show the roll button again after 4 seconds
            setTimeout(() => $("#roll").show(), 4000);

            // Run the lootroll function 3 times
            for (let i = 0; i < 3; i++) setTimeout(lootroll, 1500 * i);
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
    let price = parseInt($(this).data('price')); // Get price from the button's data attribute
        balance += price;
        $(".balance").html(balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₽");
        $(this).remove();
});

// Stash functionality - dims the item and shows "Sent to stash"
$(document).on('click', '#stash', function () {
    const lootBox = $(this).closest('.loot-box');
    lootBox.addClass('dim');
    $(this).remove();
    // Optional: Remove the stash button after it's clicked
});

// Bank balance management
$("#bank").click(function () {
    let bank_balance = balance + Math.max(cookie, 0);
    document.cookie = bank_balance;
    $(".balance").html("0₽");
    balance = 0;
});

// Display bank balance on button click
$(".get-balance").click(function () {
    $(this).hide();
    $(".bank-balance").html(parseInt(document.cookie || 0).toLocaleString() + "₽");
});

// Buying booster/armor
$(".imgholder").click(function () {
    let price = this.dataset.value, cookie = parseInt(document.cookie);
    if (cookie >= price) {
        cookie -= price;
        $(".bank-balance").html(cookie.toLocaleString() + "₽");
    } else {
        alert("You don't have enough money");
    }
});

//Account Creation
// Load accounts from local storage or initialize as an empty object
let accounts = JSON.parse(localStorage.getItem('accounts')) || {};

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
    let userName = $("#username").val().trim(); // Get the value from the username input
    let passWord = $("#password").val().trim(); // Get the value from the password input

    // Check if either the username or password is empty
    if (!userName || !passWord) {
        alert("Please fill in both fields.");
        return; // Stop further execution
    }

    // Check if the username exists and if the password matches
    if (accounts.hasOwnProperty(userName)) {
        if (accounts[userName].password === passWord) {
            // Redirect to raid.html
            window.location.href = 'assets/raid.html'; // Change this to your desired page
        } else {
            $("#password").val("");
            $("#password").attr("placeholder", "Wrong Password").addClass("placeholder-red");
        }
    } else {
        $("#username").val("").attr("placeholder", "Username not found").addClass("placeholder-red");
        $("#password").val("");
    }
});

