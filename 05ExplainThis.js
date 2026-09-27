// the this keyword in this example.is referencing minimumFuel
filter(ship => ship.fuel >= this.minimumFuel)
// referencing cargoMultiplier
reduce((total, ship) => total + ship.cargo * this.cargoMultiplier, 0)
