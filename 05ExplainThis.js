filter(ship => ship.fuel >= this.minimumFuel)

reduce((total, ship) => total + ship.cargo * this.cargoMultiplier, 0)
