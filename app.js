$(document).ready(function () {
    // Handler for .ready() called.



    const loot = [{
            name: "Bitcoin",
            img: "/images/physical_bitcoin.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "GPU",
            img: "/images/graphics_card.png",
            rare: "insane",
            price: 500000
        },
        {
            name: "Tetriz",
            img: "/images/tetriz.png",
            rare: "rare",
            price: 70000
        },
        {
            name: "GP Coin",
            img: "/images/GP_coin.png",
            rare: "rare",
            price: 25000
        },
        {
            name: "Skullring",
            img: "/images/skullring.png",
            rare: "rare",
            price: 65000
        },
        {
            name: "Roler",
            img: "/images/roler.png",
            rare: "rare",
            price: 100000
        },
        {
            name: "Prokill Medallion",
            img: "/images/prokill.png",
            rare: "medium",
            price: 45000
        },
        {
            name: "Bolts",
            img: "/images/bolts.png",
            rare: "common",
            price: 20000
        },
        {
            name: "Nuts",
            img: "/images/nuts.png",
            rare: "common",
            price: 12000
        },
        {
            name: "Toothpaste",
            img: "/images/toothpaste.png",
            rare: "common",
            price: 8000
        },
        {
            name: "Bleach",
            img: "/images/bleach.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Matches",
            img: "/images/matches.png",
            rare: "common",
            price: 5000
        },
        {
            name: "Lighter",
            img: "/images/lighter.png",
            rare: "common",
            price: 8000
        },
        {
            name: "Pliers",
            img: "/images/pliers.png",
            rare: "common",
            price: 8000
        },
        {
            name: "Metal Scissors",
            img: "/images/mscissors.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Wrench",
            img: "/images/wrench.png",
            rare: "common",
            price: 6000
        },
        {
            name: "Capacitors",
            img: "/images/capacitors.png",
            rare: "common",
            price: 4000
        },
        {
            name: "T-Plug",
            img: "/images/tplug.png",
            rare: "common",
            price: 3000
        },
        {
            name: "Crackers",
            img: "/images/crackers.png",
            rare: "common",
            price: 3000
        },
        {
            name: "Bloodset",
            img: "/images/bloodset.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "Box of Nails",
            img: "/images/nails.png",
            rare: "medium",
            price: 13000
        },
        {
            name: "TNT Brick",
            img: "/images/tnt.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Alkaline",
            img: "/images/alkaline.png",
            rare: "common",
            price: 12000
        },
        {
            name: "NIXXOR",
            img: "/images/nixxor.png",
            rare: "rare",
            price: 25000
        },
        {
            name: "USB-A",
            img: "/images/usb.png",
            rare: "common",
            price: 2500
        },
        {
            name: "Flashdrive",
            img: "/images/flashdrive.png",
            rare: "insane",
            price: 70000
        },
        {
            name: "CPU",
            img: "/images/cpu.png",
            rare: "medium",
            price: 25000
        },
        {
            name: "CPU Fan",
            img: "/images/cpufan.png",
            rare: "medium",
            price: 13000
        },
        {
            name: "Screwdriver",
            img: "/images/screwdriver.png",
            rare: "common",
            price: 2500
        },
        {
            name: "Plexiglass",
            img: "/images/plex.png",
            rare: "medium",
            price: 9000
        },
        {
            name: "Morphine",
            img: "/images/morphine.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Paid Bug Spray",
            img: "/images/paid.png",
            rare: "common",
            price: 6000
        },
        {
            name: "Paracord",
            img: "/images/paracord.png",
            rare: "rare",
            price: 25000
        },
        {
            name: "Ophthalmoscope",
            img: "/images/ophthalmoscope.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Coffee",
            img: "/images/coffee.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "R-Pliers",
            img: "/images/rpliers.png",
            rare: "common",
            price: 3000
        },
        {
            name: "Circuitboard",
            img: "/images/circuitboard.png",
            rare: "common",
            price: 8000
        },
        {
            name: "Chainlet",
            img: "/images/chainlet.png",
            rare: "common",
            price: 8000
        },
        {
            name: "WD-40",
            img: "/images/wd40.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "Toolset",
            img: "/images/toolset.png",
            rare: "medium",
            price: 25000
        },
        {
            name: "Alyonka",
            img: "/images/alyonka.png",
            rare: "medium",
            price: 25000
        },
        {
            name: "Saury",
            img: "/images/saury.png",
            rare: "common",
            price: 6000
        },
        {
            name: "Shush Sealing Foam",
            img: "/images/shush.png",
            rare: "common",
            price: 14000
        },
        {
            name: "Sodium",
            img: "/images/sodium.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Thermite",
            img: "/images/thermite.png",
            rare: "rare",
            price: 50000
        },
        {
            name: "Gunpowder Eagle",
            img: "/images/gpeagle.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Military Cable",
            img: "/images/militarycable.png",
            rare: "insane",
            price: 120000
        },
        {
            name: "Defibrillator",
            img: "/images/defibrillator.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "Whiskey",
            img: "/images/whiskey.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "AESA",
            img: "/images/aesa.png",
            rare: "insane",
            price: 1150000
        },
        {
            name: "Vodka",
            img: "/images/vodka.png",
            rare: "medium",
            price: 20000
        },
        {
            name: "Greenbat",
            img: "/images/greenbat.png",
            rare: "medium",
            price: 18000
        },
        {
            name: "Gunpowder Kite",
            img: "/images/gpkite.png",
            rare: "rare",
            price: 15000
        },
        {
            name: "Corrugated Hose",
            img: "/images/corrugatedhose.png",
            rare: "rare",
            price: 34000
        },
        {
            name: "Surv-L",
            img: "/images/survl.png",
            rare: "rare",
            price: 40000
        },
        {
            name: "Magnet",
            img: "/images/magnet.png",
            rare: "rare",
            price: 17000
        },
        {
            name: "Sprats",
            img: "/images/sprats.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Goldenstar",
            img: "/images/goldenstar.png",
            rare: "rare",
            price: 50000
        },
        {
            name: "Military Power Filter",
            img: "/images/milpowerfilter.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "Thermometer",
            img: "/images/thermometer.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Water Filter",
            img: "/images/waterfilter.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Tape Measure",
            img: "/images/tapemeasure.png",
            rare: "common",
            price: 2500
        },
        {
            name: "Golden Rooster",
            img: "/images/goldenrooster.png",
            rare: "insane",
            price: 90000
        },
        {
            name: "NRG Drink",
            img: "/images/nrgdrink.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Moonshine",
            img: "/images/moonshine.png",
            rare: "insane",
            price: 300000
        },
        {
            name: "Fuel Conditioner",
            img: "/images/fcon.png",
            rare: "rare",
            price: 40000
        },
        {
            name: "Silver Badge",
            img: "/images/badge.png",
            rare: "rare",
            price: 35000
        },
        {
            name: "Shampoo",
            img: "/images/shampoo.png",
            rare: "common",
            price: 12000
        },
        {
            name: "Propane",
            img: "/images/propane.png",
            rare: "rare",
            price: 30000
        },
        {
            name: "Slickers",
            img: "/images/slickers.png",
            rare: "common",
            price: 9000
        },
        {
            name: "Vase",
            img: "/images/vase.png",
            rare: "insane",
            price: 45000
        },
        {
            name: "Bronze Lion",
            img: "/images/bronzelion.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "Car Battery",
            img: "/images/carbattery.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "UV Lamp",
            img: "/images/uvlamp.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Condensed Milk",
            img: "/images/conmilk.png",
            rare: "medium",
            price: 20000
        },
        {
            name: "Iridium",
            img: "/images/iridium.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Bulbex",
            img: "/images/bulbex.png",
            rare: "rare",
            price: 65000
        },
        {
            name: "Firesteel",
            img: "/images/firesteel.png",
            rare: "rare",
            price: 60000
        },
        {
            name: "Raven Statue",
            img: "/images/raven.png",
            rare: "rare",
            price: 40000
        },
        {
            name: "KEK-Tape",
            img: "/images/kektape.png",
            rare: "medium",
            price: 13000
        },
        {
            name: "Intelligence Folder",
            img: "/images/intel.png",
            rare: "insane",
            price: 250000
        },
        {
            name: "Broken LCD",
            img: "/images/brokenlcd.png",
            rare: "common",
            price: 14000
        },
        {
            name: "Tech Manual",
            img: "/images/techmanual.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "Cat Statue",
            img: "/images/catstatue.png",
            rare: "rare",
            price: 22000
        },
        {
            name: "Rechargable Battery",
            img: "/images/recbat.png",
            rare: "medium",
            price: 14000
        },
        {
            name: "Working LCD",
            img: "/images/workinglcd.png",
            rare: "medium",
            price: 19000
        },
        {
            name: "Gunpowder Hawk",
            img: "/images/gphawk.png",
            rare: "rare",
            price: 65000
        },
        {
            name: "Gold Chain",
            img: "/images/goldchain.png",
            rare: "rare",
            price: 20000
        },
        {
            name: "Wires",
            img: "/images/wires.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Soap",
            img: "/images/soap.png",
            rare: "common",
            price: 5000
        },
        {
            name: "Clin Window Cleaner",
            img: "/images/clin.png",
            rare: "common",
            price: 15000
        },
        {
            name: "Insulating Tape",
            img: "/images/tape.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Stick of Ram",
            img: "/images/ram.png",
            rare: "medium",
            price: 17000
        },
        {
            name: "Broken Gphone",
            img: "/images/gphone.png",
            rare: "common",
            price: 15000
        },
        {
            name: "Pressure Gauge",
            img: "/images/pressuregauge.png",
            rare: "rare",
            price: 50000
        },
        {
            name: "Powerbank",
            img: "/images/powerbank.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Light Bulb",
            img: "/images/lightbulb.png",
            rare: "common",
            price: 12000
        },
        {
            name: "SAS Drive",
            img: "/images/sasdrive.png",
            rare: "rare",
            price: 45000
        },
        {
            name: "Military Circuit Board",
            img: "/images/milcircuitboard.png",
            rare: "insane",
            price: 70000
        },
        {
            name: "Power Relay",
            img: "/images/relay.png",
            rare: "medium",
            price: 20000
        },
        {
            name: "Cyclon",
            img: "/images/cyclon.png",
            rare: "insane",
            price: 65000
        },
        {
            name: "Teapot",
            img: "/images/teapot.png",
            rare: "insane",
            price: 50000
        },
        {
            name: "Helix",
            img: "/images/helix.png",
            rare: "rare",
            price: 35000
        },
        {
            name: "Wooden Clock",
            img: "/images/clock.png",
            rare: "rare",
            price: 65000
        },
        {
            name: "Silicone Tube",
            img: "/images/tube.png",
            rare: "common",
            price: 10000
        },
        {
            name: "Dry Fuel",
            img: "/images/dfuel.png",
            rare: "rare",
            price: 35000
        },
        {
            name: "Pack of Screws",
            img: "/images/screws.png",
            rare: "common",
            price: 12000
        },
        {
            name: "Military Gyrotachometer",
            img: "/images/gyro.png",
            rare: "insane",
            price: 40000
        },
        {
            name: "LEDX",
            img: "/images/ledx.png",
            rare: "insane",
            price: 1100000
        },
        {
            name: "AA Battery",
            img: "/images/aabat.png",
            rare: "common",
            price: 5000
        },
        {
            name: "Spark Plug",
            img: "/images/splug.png",
            rare: "common",
            price: 10000
        },
        {
            name: "GPX",
            img: "/images/gpx.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Virtex",
            img: "/images/virtex.png",
            rare: "insane",
            price: 65000
        },
        {
            name: "DVD Drive",
            img: "/images/dvd.png",
            rare: "common",
            price: 6000
        },
        {
            name: "RFID",
            img: "/images/rfid.png",
            rare: "insane",
            price: 65000
        },
        {
            name: "Weapon Parts",
            img: "/images/weaponparts.png",
            rare: "medium",
            price: 12000
        },
        {
            name: "Powercord",
            img: "/images/powercord.png",
            rare: "medium",
            price: 15000
        },
        {
            name: "Duct Tape",
            img: "/images/ductape.png",
            rare: "common",
            price: 5000
        },
        {
            name: "Pack of Chlorine",
            img: "/images/chlorine.png",
            rare: "common",
            price: 3000
        }
    ]

    var randLoot
    var balance = 0

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

    function roll() {
        $(".loot-container").empty();
        for (let i = 0; i < 3; i++) {
            task(i);
        }

        function task(i) {
            setTimeout(function () {
                lootroll()
            }, 1500 * i);
        }
    }











    document.getElementById("roll").addEventListener("click", roll)
});
