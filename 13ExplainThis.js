function Rocket(name, fuel) {
    this.name = name;
    this.fuel = fuel;

    this.launch = function() {
    console.log('${this.name} is launching');
    console.log('Fuel remaining: ${this.fuel}%')
  }
}

const falcon9 = new Rocket("Falcon 9", 100);
const starship = new Rocket("Starahip", 100);

falcon9.launch();
starship.launch();
