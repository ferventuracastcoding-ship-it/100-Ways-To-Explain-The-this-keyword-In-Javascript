const spacecraft = [
    { name: "Starship", fuel: 95 },
    { name: "Orion", fuel: 72 },
    { name: "Apollo", fuel: 45 },
    { name: "Dragon", fuel: 88 }
];

const missionControl = {
    minimumFuel: 80,

    getReadyShips() {
        return spacecraft.filter(function (ship) {
            return ship.fuel >= this.minimumFuel;
        }, this);
    }
};

console.log(missionControl.getReadyShips());
