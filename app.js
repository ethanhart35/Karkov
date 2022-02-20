

const loot = ['bitcoin', 'GPU', 'tetriz', 'gpcoin', 'skullring', 'roler', 'prokill', 'bolts', 'nuts', 'toothpaste', 'bleach', 'matches', 'lighter', 'pliers', 'metal-scissors', 'wrench', 'capacitors', 't-plug', 'crackers', 'bloodset', 'nails', 'tnt', 'alkaline', 'nixxor', 'usb-a', 'cpu', 'cpu-fan', 'screwdriver', 'plexiglass', 'morphine', 'paid', 'paracord', 'ophthalmoscope', 'coffee', 'r-pliers', 'chainlet', 'wd-40', 'toolset', 'alyonka', 'suary', 'shush', 'sodium', 'thermite', 'gunpowder-eagle', 'military-cable', 'defibrillator', 'whiskey', 'AESA', 'vodka', 'greenbat', 'gunpowder-kite', 'corrugated-hose', 'surv-l', 'magnet', 'mayo', 'sprats', 'goldenstar', 'kotton-beanie', 'military-power-filter', 'thermometer', 'water-filter', 'tape-measure', 'golden-rooster', 'nrg-drink', 'moonshine', 'fuel-conditioner', 'silver-badge', 'ratcola', 'shampoo', 'propane', 'fireklean-gunlube', 'slickers', 'vase', 'bronze-lion', 'car-battery', 'uv-lamp', 'condensed-milk', 'iridium', 'bulbex', 'firesteel', 'raven', 'KEK-tape', 'beard-oil', 'intelligence', 'broken-lcd', 'tech-manual', 'rat-poison', 'cat-statue', 'rechargable-battery', 'working-lcd', 'gunpowder-hawk', 'gold-chain']

var randLoot = []

function randomizeloot() {
    const randomloot = Math.floor(Math.random()*loot.length)
    console.log(randomloot, loot[randomloot])
    document.getElementById("lootlist").innerHTML = loot[randomloot]
}

document.getElementById("roll").addEventListener("click", randomizeloot);




