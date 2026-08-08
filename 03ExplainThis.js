const marsRover = {
    name: "Perseverance",
    planet: "Mars",
    speed: 158000000000000,
    battery: 87,

    report() {
        console.log(this.name);
        console.log(this.planet);
        console.log(this.speed);
        console.log(this.battery);
    }
};

marsRover.report();
marsRover.report();
marsRover.report();
marsRover.report();
