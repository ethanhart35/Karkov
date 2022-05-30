$(document).ready(function () {
    // Handler for .ready() called.



    const loot = [{
            name: "Bitcoin",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/physical_bitcoin.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "GPU",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/graphics_card.png",
            rare: "insane",
            price: 500000
        },
        {
            name: "Tetriz",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/tetriz.png",
            rare: "rare",
            price: 70000
        },
        {
            name: "GP Coin",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/GP_coin.png",
            rare: "rare",
            price: 25000
        },
        {
            name: "Skullring",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/skullring.png",
            rare: "rare",
            price: 65000
        },
        {
            name: "Roler",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/roler.png",
            rare: "rare",
            price: 100000
        },
        {
            name: "Prokill Medallion",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/prokill.png",
            rare: "medium",
            price: 45000
        },
        {
            name: "Bolts",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/bolts.png",
            rare: "common",
            price: 20000
        },
        {
            name: "Nuts",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/nuts.png",
            rare: "common",
            price: 12000
        },
        {
            name: "Toothpaste",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/toothpaste.png",
            rare: "common",
            price: 8000
        },
        {
            name: "Bleach",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/bleach.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Matches",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/matches.png",
            rare: "common",
            price: 5000
        },
        {
            name: "Lighter",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/lighter.png",
            rare: "common",
            price: 8000
        },
        {
            name: "Pliers",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/pliers.png",
            rare: "common",
            price: 8000
        },
        {
            name: "Metal Scissors",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/mscissors.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Wrench",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/wrench.png",
            rare: "common",
            price: 6000
        },
        {
            name: "Capacitors",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/capacitors.png",
            rare: "common",
            price: 4000
        },
        {
            name: "T-Plug",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/tplug.png",
            rare: "common",
            price: 3000
        },
        {
            name: "Crackers",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/crackers.png",
            rare: "common",
            price: 3000
        },
        {
            name: "Bloodset",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/bloodset.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "Box of Nails",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/nails.png",
            rare: "medium",
            price: 13000
        },
        {
            name: "TNT Brick",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/tnt.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Alkaline",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/alkaline.png",
            rare: "common",
            price: 12000
        },
        {
            name: "NIXXOR",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/nixxor.png",
            rare: "rare",
            price: 25000
        },
        {
            name: "USB-A",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/usb.png",
            rare: "common",
            price: 2500
        },
        {
            name: "Flashdrive",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/flashdrive.png",
            rare: "insane",
            price: 70000
        },
        {
            name: "CPU",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/cpu.png",
            rare: "medium",
            price: 25000
        },
        {
            name: "CPU Fan",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/cpufan.png",
            rare: "medium",
            price: 13000
        },
        {
            name: "Screwdriver",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/screwdriver.png",
            rare: "common",
            price: 2500
        },
        {
            name: "Plexiglass",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/plex.png",
            rare: "medium",
            price: 9000
        },
        {
            name: "Morphine",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/morphine.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Paid Bug Spray",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/paid.png",
            rare: "common",
            price: 6000
        },
        {
            name: "Paracord",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/paracord.png",
            rare: "rare",
            price: 25000
        },
        {
            name: "Ophthalmoscope",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/ophthalmoscope.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Coffee",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/coffee.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "R-Pliers",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/rpliers.png",
            rare: "common",
            price: 3000
        },
        {
            name: "Circuitboard",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/circuitboard.png",
            rare: "common",
            price: 8000
        },
        {
            name: "Chainlet",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/chainlet.png",
            rare: "common",
            price: 8000
        },
        {
            name: "WD-40",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/wd40.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "Toolset",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/toolset.png",
            rare: "medium",
            price: 25000
        },
        {
            name: "Alyonka",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/alyonka.png",
            rare: "medium",
            price: 25000
        },
        {
            name: "Saury",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/saury.png",
            rare: "common",
            price: 6000
        },
        {
            name: "Shush Sealing Foam",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/shush.png",
            rare: "common",
            price: 14000
        },
        {
            name: "Sodium",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/sodium.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Thermite",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/thermite.png",
            rare: "rare",
            price: 50000
        },
        {
            name: "Gunpowder Eagle",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/gpeagle.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Military Cable",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/militarycable.png",
            rare: "insane",
            price: 120000
        },
        {
            name: "Defibrillator",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/defibrillator.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "Whiskey",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/whiskey.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "AESA",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/aesa.png",
            rare: "insane",
            price: 1150000
        },
        {
            name: "Vodka",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/vodka.png",
            rare: "medium",
            price: 20000
        },
        {
            name: "Greenbat",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/greenbat.png",
            rare: "medium",
            price: 18000
        },
        {
            name: "Gunpowder Kite",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/gpkite.png",
            rare: "rare",
            price: 15000
        },
        {
            name: "Corrugated Hose",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/corrugatedhose.png",
            rare: "rare",
            price: 34000
        },
        {
            name: "Surv-L",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/survl.png",
            rare: "rare",
            price: 40000
        },
        {
            name: "Magnet",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/magnet.png",
            rare: "rare",
            price: 17000
        },
        {
            name: "Sprats",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/sprats.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Goldenstar",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/goldenstar.png",
            rare: "rare",
            price: 50000
        },
        {
            name: "Military Power Filter",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/milpowerfilter.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "Thermometer",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/thermometer.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Water Filter",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/waterfilter.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Tape Measure",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/tapemeasure.png",
            rare: "common",
            price: 2500
        },
        {
            name: "Golden Rooster",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/goldenrooster.png",
            rare: "insane",
            price: 90000
        },
        {
            name: "NRG Drink",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/nrgdrink.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Moonshine",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/moonshine.png",
            rare: "insane",
            price: 300000
        },
        {
            name: "Fuel Conditioner",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/fcon.png",
            rare: "rare",
            price: 40000
        },
        {
            name: "Silver Badge",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/badge.png",
            rare: "rare",
            price: 35000
        },
        {
            name: "Shampoo",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/shampoo.png",
            rare: "common",
            price: 12000
        },
        {
            name: "Propane",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/propane.png",
            rare: "rare",
            price: 30000
        },
        {
            name: "Slickers",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/slickers.png",
            rare: "common",
            price: 9000
        },
        {
            name: "Vase",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/vase.png",
            rare: "insane",
            price: 45000
        },
        {
            name: "Bronze Lion",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/bronzelion.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "Car Battery",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/carbattery.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "UV Lamp",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/uvlamp.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Condensed Milk",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/conmilk.png",
            rare: "medium",
            price: 20000
        },
        {
            name: "Iridium",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/iridium.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Bulbex",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/bulbex.png",
            rare: "rare",
            price: 65000
        },
        {
            name: "Firesteel",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/firesteel.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Raven Statue",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/raven.png",
            rare: "rare",
            price: 40000
        },
        {
            name: "KEK-Tape",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/kektape.png",
            rare: "medium",
            price: 13000
        },
        {
            name: "Intelligence Folder",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/intel.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "Broken LCD",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/brokenlcd.png",
            rare: "common",
            price: 14000
        },
        {
            name: "Tech Manual",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/techmanual.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "Cat Statue",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/catstatue.png",
            rare: "rare",
            price: 22000
        },
        {
            name: "Rechargable Battery",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/recbat.png",
            rare: "medium",
            price: 14000
        },
        {
            name: "Working LCD",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/workinglcd.png",
            rare: "medium",
            price: 19000
        },
        {
            name: "Gunpowder Hawk",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/gphawk.png",
            rare: "rare",
            price: 65000
        },
        {
            name: "Gold Chain",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/goldchain.png",
            rare: "rare",
            price: 20000
        },
        {
            name: "Wires",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/wires.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Soap",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/soap.png",
            rare: "common",
            price: 5000
        },
        {
            name: "Clin Window Cleaner",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/clin.png",
            rare: "common",
            price: 15000
        },
        {
            name: "Insulating Tape",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/tape.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Stick of Ram",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/ram.png",
            rare: "medium",
            price: 17000
        },
        {
            name: "Broken Gphone",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/gphone.png",
            rare: "common",
            price: 15000
        },
        {
            name: "Pressure Gauge",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/pressuregauge.png",
            rare: "rare",
            price: 50000
        },
        {
            name: "Powerbank",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/powerbank.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Light Bulb",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/lightbulb.png",
            rare: "common",
            price: 12000
        },
        {
            name: "SAS Drive",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/sasdrive.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Military Circuit Board",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/milcircuitboard.png",
            rare: "insane",
            price: 70000
        },
        {
            name: "Power Relay",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/relay.png",
            rare: "medium",
            price: 20000
        },
        {
            name: "Cyclon",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/cyclon.png",
            rare: "insane",
            price: 65000
        },
        {
            name: "Teapot",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/teapot.png",
            rare: "insane",
            price: 50000
        },
        {
            name: "Helix",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/helix.png",
            rare: "rare",
            price: 35000
        },
        {
            name: "Wooden Clock",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/clock.png",
            rare: "rare",
            price: 65000
        },
        {
            name: "Silicone Tube",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/tube.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Dry Fuel",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/dfuel.png",
            rare: "rare",
            price: 35000
        },
        {
            name: "Pack of Screws",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/screws.png",
            rare: "common",
            price: 12000
        },
        {
            name: "Military Gyrotachometer",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/gyro.png",
            rare: "insane",
            price: 40000
        },
        {
            name: "LEDX",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/ledx.png",
            rare: "insane",
            price: 1100000
        },
        {
            name: "AA Battery",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/aabat.png",
            rare: "common",
            price: 5000
        },
        {
            name: "Spark Plug",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/splug.png",
            rare: "common",
            price: 10000
        },
        {
            name: "GPX",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/gpx.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Virtex",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/virtex.png",
            rare: "insane",
            price: 65000
        },
        {
            name: "DVD Drive",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/dvd.png",
            rare: "common",
            price: 6000
        },
        {
            name: "RFID",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/rfid.png",
            rare: "insane",
            price: 65000
        },
        {
            name: "Weapon Parts",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/weaponparts.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "Powercord",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/powercord.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Duct Tape",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/ductape.png",
            rare: "common",
            price: 5000
        },
        {
            name: "Pack of Chlorine",
            img: "https://ethanhart35.github.io/KarkovMarketSimulator/images/chlorine.png",
            rare: "common",
            price: 3000
        }
    ]

    var randLoot
    var balance = 0

    //On button click run the roll function
    $("#roll").click(roll);

    function roll() {
        $(".loot-container").empty();
        $("#clear").show();
        $(".stash").show();
        $(".balance").show();

        setTimeout(function () {
            for (let i = 0; i < 3; i++) {
                task(i);
            }

            function task(i) {
                setTimeout(function () {
                    lootroll()
                }, 900 * i);
            }
        }, 5000);
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