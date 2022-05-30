import { loot } from "./loot.js";

console.log(loot)

$(document).ready(function () {
    // Handler for .ready() called.

    var randLoot
    var balance = 0

    //On button click run the roll function
    $("#roll").click(roll);

    function roll() {
        $(".loot-container").empty();
        $("#clear").show();
        $(".stash").show();
        $(".balance").show();

        var time = 16;      //  create a loop function
       

        function myLoop() {   
            setTimeout(function() {   //  call a 3s setTimeout when the loop is called
                 //  your code here
              time--;
              console.log(time);
              $(".loot-container").html(time)
              if (time > 0) {           //  if the counter < 10, call the loop function
                myLoop();             //  ..  again which will trigger another 
              }                       //  ..  setTimeout()
            }, 1000)
          }
          
          myLoop();   





        // setTimeout(function () {
        //     var time = 6;
        //     for (var y = 6; y > 0; y--) {
        //         task(y);
        //         time--
        //         console.log(time)
        //     }


            // function task(y) {
            //     setTimeout(function () {
            //         $(".loot-container").html(y)
            //     }, 1000 * y);
            // }
        // }, 0);

        setTimeout(function () {
            for (let i = 0; i < 3; i++) {
                task(i);
            }

            function task(i) {
                setTimeout(function () {
                    lootroll()
                }, 1500 * i);
            }
        }, 17000);
    }

    //lootroll function decides the rarity of an item
    function lootroll() {
        console.log("lootroll function run")
        randLoot = loot[Math.floor(Math.random() * loot.length)]

        if (randLoot.rare === "common") {
            console.log("common")
            postloot()
        } else if (randLoot.rare === "medium") {
            console.log("medium")
            let chance = Math.floor(Math.random() * 5) + 1
            if (chance === 1) {
                console.log("MEDIUM")
                postloot()
            } else {
                console.log('bad luck')
                lootroll()
            }
        } else if (randLoot.rare === "rare") {
            console.log("rare")
            let chance = Math.floor(Math.random() * 25) + 1
            if (chance === 1) {
                console.log("RARE")
                postloot()
            } else {
                console.log('bad luck')
                lootroll()
            }
        } else if (randLoot.rare === "insane") {
            console.log("insane")
            let chance = Math.floor(Math.random() * 75) + 1
            if (chance === 1) {
                console.log("INSANE")
                postloot()
            } else {
                console.log('bad luck')
                lootroll()
            }

        }
    }

    //postloot function appends the chosen loot to the page
    function postloot() {
        var lootbox = $('<div>', {
            class: 'loot-box',
        })
        balance = balance + randLoot.price
        console.log(balance)
        $(".balance").html(balance + "₽")
        lootbox.append("<img src=" + randLoot.img + ">").append("<br>").append(randLoot.name).append("<br>").append("<p>" + randLoot.price + "₽" + "</p>")
        $(".loot-container").append(lootbox)
    }


    //on button click run the clear function
    $("#clear").click(clear);

    function clear() {
        $(".balance").html(0 + "₽")
        balance = 0
    }


});