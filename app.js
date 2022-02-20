

const loot = [
    {"name": "Bitcoin",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/physical_bitcoin.png",
     "rare": "insane",
     "price": 250000+"₽"
    },
    {"name": "GPU",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/graphics_card.png",
     "rare": "insane",
     "price": 500000+"₽"
    },
    {"name": "Tetriz",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/tetriz.png",
     "rare": "rare",
     "price": 70000+"₽"
    },
    {"name": "GP Coin",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/GP_coin.png",
     "rare": "rare",
     "price": 250000+"₽"
    },
    {"name": "Skullring",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/skullring.png",
     "rare": "rare",
     "price": 65000+"₽"
    },
    {"name": "Roler",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/roler.png",
     "rare": "rare",
     "price": 100000+"₽"
    },
    {"name": "Prokill Medallion",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/prokill.png",
     "rare": "medium",
     "price": 45000+"₽"
    },
    {"name": "Bolts",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/bolts.png",
     "rare": "common",
     "price": 20000+"₽"
    },
    {"name": "Nuts",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/nuts.png",
     "rare": "common",
     "price": 12000+"₽"
    },
    {"name": "Toothpaste",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/toothpaste.png",
     "rare": "common",
     "price": 8000+"₽"
    },
    {"name": "Bleach",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/bleach.png",
     "rare": "common",
     "price": 10000+"₽"
    },
    {"name": "Matches",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/matches.png",
     "rare": "common",
     "price": 5000+"₽"
    },
    {"name": "Lighter",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/lighter.png",
     "rare": "common",
     "price": 8000+"₽"
    },
    {"name": "Pliers",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/pliers.png",
     "rare": "common",
     "price": 8000+"₽"
    },
    {"name": "Metal Scissors",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/mscissors.png",
     "rare": "rare",
     "price": 45000+"₽"
    },
    {"name": "Wrench",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/wrench.png",
     "rare": "common",
     "price": 6000+"₽"
    },
    {"name": "Capacitors",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/capacitors.png",
     "rare": "common",
     "price": 4000+"₽"
    },
    {"name": "T-Plug",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/tplug.png",
     "rare": "common",
     "price": 3000+"₽"
    },
    {"name": "Crackers",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/crackers.png",
     "rare": "common",
     "price": 3000+"₽"
    },
    {"name": "Bloodset",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/bloodset.png",
     "rare": "medium",
     "price": 12000+"₽"
    },
    {"name": "Box of Nails",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/nails.png",
     "rare": "medium",
     "price": 13000+"₽"
    },
    {"name": "TNT Brick",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/tnt.png",
     "rare": "rare",
     "price": 45000+"₽"
    },
    {"name": "Alkaline",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/alkaline.png",
     "rare": "common",
     "price": 12000+"₽"
    },
    {"name": "NIXXOR",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/nixxor.png",
     "rare": "rare",
     "price": 25000+"₽"
    },
    {"name": "USB-A",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/usb.png",
     "rare": "common",
     "price": 2500+"₽"
    },
    {"name": "Flashdrive",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/flashdrive.png",
     "rare": "insane",
     "price": 70000+"₽"
    },
    {"name": "CPU",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/cpu.png",
     "rare": "medium",
     "price": 25000+"₽"
    },
    {"name": "CPU Fan",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/cpufan.png",
     "rare": "medium",
     "price": 13000+"₽"
    },
    {"name": "Screwdriver",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/screwdriver.png",
     "rare": "common",
     "price": 2500+"₽"
    },
    {"name": "Plexiglass",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/plex.png",
     "rare": "medium",
     "price": 9000+"₽"
    },
    {"name": "Morphine",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/morphine.png",
     "rare": "medium",
     "price": 15000+"₽"
    },
    {"name": "Paid Bug Spray",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/paid.png",
     "rare": "common",
     "price": 6000+"₽"
    },
    {"name": "Paracord",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/paracord.png",
     "rare": "rare",
     "price": 25000+"₽"
    },
    {"name": "Ophthalmoscope",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/ophthalmoscope.png",
     "rare": "rare",
     "price": 60000+"₽"
    },
    {"name": "Coffee",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/coffee.png",
     "rare": "medium",
     "price": 12000+"₽"
    },
    {"name": "R-Pliers",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/rpliers.png",
     "rare": "common",
     "price": 3000+"₽"
    },
    {"name": "Circuitboard",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/circuitboard.png",
     "rare": "common",
     "price": 3000+"₽"
    },
    {"name": "Chainlet",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/chainlet.png",
     "rare": "common",
     "price": 8000+"₽"
    },
    {"name": "WD-40",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/wd40.png",
     "rare": "medium",
     "price": 12000+"₽"
    },
    {"name": "Toolset",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/toolset.png",
     "rare": "medium",
     "price": 25000+"₽"
    },
    {"name": "Alyonka",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/alyonka.png",
     "rare": "medium",
     "price": 25000+"₽"
    },
    {"name": "Saury",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/saury.png",
     "rare": "common",
     "price": 6000+"₽"
    },
    {"name": "Shush Sealing Foam",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/shush.png",
     "rare": "common",
     "price": 14000+"₽"
    },
    {"name": "Sodium",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/sodium.png",
     "rare": "medium",
     "price": 15000+"₽"
    },
    {"name": "Thermite",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/thermite.png",
     "rare": "rare",
     "price": 50000+"₽"
    },
    {"name": "Gunpowder Eagle",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/gpeagle.png",
     "rare": "rare",
     "price": 60000+"₽"
    },
    {"name": "Military Cable",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/militarycable.png",
     "rare": "insane",
     "price": 120000+"₽"
    },
    {"name": "Defibrillator",
    "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/defibrillator.png",
     "rare": "insane",
     "price": 250000+"₽"
    },
    {"name": "Whiskey",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/whiskey.png",
     "rare": "medium",
     "price": 15000+"₽"
    },
    {"name": "AESA",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/aesa.png",
     "rare": "insane",
     "price": 1150000+"₽"
    },
    {"name": "Vodka",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/vodka.png",
     "rare": "medium",
     "price": 20000+"₽"
    },
    {"name": "Greenbat",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/greenbat.png",
     "rare": "medium",
     "price": 18000+"₽"
    },
    {"name": "Gunpowder Kite",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/gpkite.png",
     "rare": "rare",
     "price": 15000+"₽"
    },
    {"name": "Corrugated Hose",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/corrugatedhose.png",
     "rare": "rare",
     "price": 34000+"₽"
    },
    {"name": "Surv-L",
     "img": "https://ethanhart35.github.io/TarkovMarketSimulator/images/survl.png",
     "rare": "rare",
     "price": 40000+"₽"
    },
    {name: "Magnet",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/magnet.png",
     rare: "rare",
     price: 17000+"₽"
    },
    {name: "Sprats",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/sprats.png",
     rare: "common",
     price: 10000+"₽"
    },
    {name: "Goldenstar",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/goldenstar.png",
     rare: "rare",
     price: 50000+"₽"
    },
    {name: "Military Power Filter",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/milpowerfilter.png",
     rare: "insane",
     price: 250000+"₽"
    },
    {name: "Thermometer",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/thermometer.png",
     rare: "rare",
     price: 45000+"₽"
    },
    {name: "Water Filter",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/waterfilter.png",
     rare: "rare",
     price: 60000+"₽"
    },
    {name: "Tape Measure",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/tapemeasure.png",
     rare: "common",
     price: 2500+"₽"
    },
    {name: "Golden Rooster",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/goldenrooster.png",
     rare: "insane",
     price: 90000+"₽"
    },
    {name: "NRG Drink",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/nrgdrink.png",
     rare: "medium",
     price: 15000+"₽"
    },
    {name: "Moonshine",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/moonshine.png",
     rare: "insane",
     price: 300000+"₽"
    },
    {name: "Fuel Conditioner",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/fcon.png",
     rare: "rare",
     price: 40000+"₽"
    },
    {name: "Silver Badge",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/badge.png",
     rare: "rare",
     price: 35000+"₽"
    },
    {name: "Shampoo",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/shampoo.png",
     rare: "common",
     price: 12000+"₽"
    },
    {name: "Propane",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/propane.png",
     rare: "rare",
     price: 30000+"₽"
    },
    {name: "Slickers",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/slickers.png",
     rare: "common",
     price: 9000+"₽"
    },
    {name: "Vase",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/vase.png",
     rare: "insane",
     price: 45000+"₽"
    },
    {name: "Bronze Lion",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/bronzelion.png",
     rare: "insane",
     price: 250000+"₽"
    },
    {name: "Car Battery",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/carbattery.png",
     rare: "rare",
     price: 60000+"₽"
    },
    {name: "UV Lamp",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/uvlamp.png",
     rare: "common",
     price: 10000+"₽"
    },
    {name: "Condensed Milk",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/conmilk.png",
     rare: "medium",
     price: 20000+"₽"
    },
    {name: "Iridium",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/iridium.png",
     rare: "rare",
     price: 60000+"₽"
    },
    {name: "Bulbex",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/bulbex.png",
     rare: "rare",
     price: 65000+"₽"
    },
    {name: "Firesteel",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/firesteel.png",
     rare: "rare",
     price: 60000+"₽"
    },
    {name: "Raven Statue",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/raven.png",
     rare: "rare",
     price: 40000+"₽"
    },
    {name: "KEK-Tape",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/kektape.png",
     rare: "medium",
     price: 13000+"₽"
    },
    {name: "Intelligence Folder",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/intel.png",
     rare: "insane",
     price: 250000+"₽"
    },
    {name: "Broken LCD",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/brokenlcd.png",
     rare: "common",
     price: 14000+"₽"
    },
    {name: "Tech Manual",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/techmanual.png",
     rare: "medium",
     price: 12000+"₽"
    },
    {name: "Cat Statue",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/catstatue.png",
     rare: "rare",
     price: 22000+"₽"
    },
    {name: "Rechargable Battery",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/recbat.png",
     rare: "medium",
     price: 14000+"₽"
    },
    {name: "Working LCD",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/workinglcd.png",
     rare: "medium",
     price: 19000+"₽"
    },
    {name: "Gunpowder Hawk",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/gphawk.png",
     rare: "rare",
     price: 65000+"₽"
    },
    {name: "Gold Chain",
     img: "https://ethanhart35.github.io/TarkovMarketSimulator/images/goldchain.png",
     rare: "rare",
     price: 20000+"₽"
    }
]

var randLoot = []

function randomizeloot() {
    const randLoot = loot[Math.floor(Math.random()*loot.length)]
    document.getElementById("lootimage").innerHTML = "<img src='"+randLoot.img+"' alt='my image'>";
    document.getElementById("lootname").innerHTML = randLoot.name
    document.getElementById("lootprice").innerHTML = randLoot.price
}

document.getElementById("roll").addEventListener("click", randomizeloot);

