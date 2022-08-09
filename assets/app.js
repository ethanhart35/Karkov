import { loot } from "./loot.js";

    //Global variables
    var randLoot;
    var balance = 0;
    var armor = [];
    var boost = [];

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
                
                //Shows the roll button after 4 seconds
                setTimeout(function(){
                    $("#roll").show();
                }, 4000);

                //Runs the lootroll function 3 times
                for (let i = 0; i < 3; i++) {
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
        //balance is displayed with comma spearator
        balance += randLoot.price;
        $(".balance").html(balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₽");
        
        //the loot price is displayed with comma separators
        var price = randLoot.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        lootbox.append("<img src=" + randLoot.img + ">").append("<br>").append("<p class = randlootname>" + randLoot.name + "</p>").append("<br>").append("<p class = randlootprice>" + price + "₽" + "</p>");
        $(".loot-container").append(lootbox);
    }

    $("#bank").click(function () {
        let bank_balance = 0;
        let cookie = parseInt(document.cookie);
        if (cookie > 0) {
            bank_balance = balance + cookie;
        }
        else {
            bank_balance = bank_balance + balance;
        }
        document.cookie = bank_balance;
        $(".balance").html(0 + "₽");
        balance = 0;
    });

    //when get-balance is clicked, the balance element is updated with the bank_balance
    $(".get-balance").click(function () {

        $(".get-balance").hide();
        if(document.cookie < 1){
            $(".bank-balance").html("0₽");
        }
        else {
            $(".bank-balance").html(document.cookie.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₽");
        }
    });


    //when the booster or armor image is clicked the boost or armor value is increased by 1
    //The amount is taken off the balance
    $(".imgholder").click(buy);


    function buy() {
        if (document.cookie >= this.dataset.value){
            $(".bank-balance").html(document.cookie.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₽");
            
        }
        else {
            alert("You don't have enough money");
        }    
    }