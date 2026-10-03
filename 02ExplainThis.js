class Starship {
    constructor(name, crew, destination) {
        this.name = name;
        this.crew = crew;
        this.destination = destination;
    }

    toString() {
        return `${this.name} | Crew: ${this.crew} | Destination: ${this.destination}`;
    }
}

function main() {
    const fleet = [];

    fleet.push(new Starship("Starship-1", 20, "Mars"));
    fleet.push(new Starship("Starship-2", 15, "Moon"));
    fleet.push(new Starship("Starship-3", 30, "Europa"));

    console.log(fleet.map(ship => ship.toString()).join("\n"));
}

main();
