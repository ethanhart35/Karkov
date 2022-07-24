import { loot } from "./loot.js";

    var randLoot;
    var balance = 0;
    var bank_balance = 0;

    //On button click run the roll function
    $("#roll").click(roll);

    //Clears loot container and runs countdown function and then runs the lootroll function 3 times
    function roll() {
        let time = 10;
        $("#roll").hide();
        $(".loot-container").empty();
        $("#bank").show();
        $(".stash").show();
        $(".balance").show();
        $(".loot-container").html("<p class = time>" + time + "s" + "</p>");

        const countdown = setInterval(() => {
            time--;
            $(".loot-container").html("<p class = time>" + time + "s" + "</p>")
            if(time<1){
                clearInterval(countdown);
                $(".loot-container").html("");
            $("#roll").show();
            for (let i = 0; i < 3; i++) {
                task(i);
            }

            function task(i) {
                setTimeout(function () {
                    lootroll()
                }, 1500 * i);
            }
            }
        }, 1000);
    };

    //lootroll function decides the rarity of an item and then runs postloot function
    function lootroll() {
        randLoot = loot[Math.floor(Math.random() * loot.length)]

        if (randLoot.rare === "common") {
            postloot();
        } else if (randLoot.rare === "medium") {
            let chance = Math.floor(Math.random() * 5) + 1
            if (chance === 1) {
                postloot();
            } else {
                lootroll();
            }
        } else if (randLoot.rare === "rare") {
            let chance = Math.floor(Math.random() * 25) + 1
            if (chance === 1) {
                postloot();
            } else {
                lootroll();
            }
        } else if (randLoot.rare === "insane") {
            let chance = Math.floor(Math.random() * 75) + 1
            if (chance === 1) {
                postloot();
            } else {
                lootroll();
            }
        }
    }

    //postloot function appends the chosen loot to the page
    function postloot() {
        var lootbox = $('<div>', {
            class: 'loot-box',
        })
        balance = balance + randLoot.price;
        $(".balance").html(balance + "₽");
        lootbox.append("<img src=" + randLoot.img + ">").append("<br>").append(randLoot.name).append("<br>").append("<p>" + randLoot.price + "₽" + "</p>");
        $(".loot-container").append(lootbox);
    }

    $("#bank").click(sell)

    //Resets balance element to 0
    function sell() {
        var cookie = parseInt(document.cookie);
        if (cookie > 0) {
            bank_balance = bank_balance + balance + cookie;
        }
        else {
            bank_balance = bank_balance + balance;
        }
        document.cookie = bank_balance;
        $(".balance").html(0 + "₽");
        balance = 0;
    }

    $(".get-balance").click(getbal);

    function getbal() {
        $(".bank-balance").html(document.cookie + "₽");
        $(".get-balance").hide();
    }