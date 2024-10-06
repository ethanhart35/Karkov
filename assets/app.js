import { loot } from "./loot.js";

// Global variables
let balance = 0, randLoot, cookie = parseInt(document.cookie);

// On button click, run roll function
$("#roll").click(roll);

// Roll function - runs countdown, lootroll, and displays results
function roll() {
    let time = 1;
    $("#roll").hide();
    $(".loot-container, #bank, .stash, .balance").show().empty();
    $(".loot-container").html(`<p class="time">${time}s</p>`);

    const countdown = setInterval(() => {
        $(".loot-container").html(`<p class="time">${--time}s</p>`);
        if (time < 1) {
            clearInterval(countdown);
            $(".loot-container").empty();
            setTimeout(() => $("#roll").show(), 4000);
            for (let i = 0; i < 3; i++) setTimeout(lootroll, 1500 * i);
        }
    }, 1000);
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
    const price = randLoot.price.toLocaleString();
    const lootbox = $(`<div class="loot-box">
        <img src="${randLoot.img}"><br>
        <p class="randlootname">${randLoot.name}</p><br>
        <p class="randlootprice">${price}₽</p><br>
        <button id="sell">Quick Sell</button><button id="stash">Stash</button>
    </div>`);
    $(".loot-container").append(lootbox);
}

// Quick sell functionality
$(document).on('click', '#sell', function () {
    balance += randLoot.price;
    $(".balance").html(balance.toLocaleString() + "₽");
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

// Logging logo element lengths
['rect', 'ellipse', 'path'].forEach(tag => 
    $(`#logoname ${tag}`).each((i, el) => console.log(`${tag} ${i} is ${el.getTotalLength()}`))
);
