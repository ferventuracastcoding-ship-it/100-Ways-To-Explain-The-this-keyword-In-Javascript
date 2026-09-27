/*
==========================================================
 SPACE JAVASCRIPT LABORATORY
50 Examples for Understanding the `this` Keyword
==========================================================

Run with:
node this-space-laboratory.js

Or paste into a browser console.
*/

// ==========================================================
// 1. Understanding what the this keyword refers to
// ==========================================================
// Best cases to understand the this keyword
const Earth = {
    name: "Earth",

    showPlanet() {
        console.log("1.", this.name);
    }
};

Earth.showPlanet();


// ==========================================================
// 2. How JavaScript determines the value of this
// ==========================================================

const Moon = {
    name: "Moon",

    identify() {
        console.log("2. this refers to:", this.name);
    }
};

Moon.identify();


// ==========================================================
// 3. this changes depending on how a function is called
// ==========================================================

const Mars = {
    name: "Mars",

    launch() {
        console.log("3. Mission launched from", this.name);
    }
};

Mars.launch();


// ==========================================================
// 4. Exploring the calling context behind this
// ==========================================================
// space station this keyword example
const SpaceStation = {
    name: "International Space Station",

    report() {
        console.log("4. Calling context:", this.name);
    }
};

SpaceStation.report();


// ==========================================================
// 5. this inside regular functions
// ==========================================================
// earth mission this keyword example
function earthMission() {
    console.log("5. Regular function executed for Earth");
}

earthMission();


// ==========================================================
// 6. this inside arrow functions
// ==========================================================

const moonArrow = () => {
    console.log("6. Arrow function studying the Moon");
};

moonArrow();


// ==========================================================
// 7. Regular functions vs arrow functions
// ==========================================================

const MarsBase = {
    name: "Mars Base Alpha",

    regular() {
        console.log("7A. Regular function:", this.name);
    },

    arrow: () => {
        console.log("7B. Arrow function does not create its own this");
    }
};

MarsBase.regular();
MarsBase.arrow();


// ==========================================================
// 8. Object method calls determine this
// ==========================================================

const EarthStation = {
    name: "Earth Station",

    status() {
        console.log("8. Station:", this.name);
    }
};

EarthStation.status();


// ==========================================================
// 9. JavaScript binds this at runtime
// ==========================================================

const MoonStation = {
    name: "Moon Station",

    activate() {
        console.log("9. Runtime this:", this.name);
    }
};

MoonStation.activate();


// ==========================================================
// 10. this and the calling object
// ==========================================================

const MarsRover = {
    name: "Mars Rover",

    scan() {
        console.log("10. Rover scanning:", this.name);
    }
};

MarsRover.scan();


// ==========================================================
// 11. this is determined by invocation
// ==========================================================

const EarthRover = {
    name: "Earth Rover",

    drive() {
        console.log("11. Driving:", this.name);
    }
};

EarthRover.drive();


// ==========================================================
// 12. Dynamic this binding
// ==========================================================

const PlanetA = {
    name: "Earth",

    identify() {
        console.log("12.", this.name);
    }
};

const PlanetB = {
    name: "Mars",

    identify: PlanetA.identify
};

PlanetA.identify();
PlanetB.identify();


// ==========================================================
// 13. Implicit this binding
// ==========================================================

const LunarModule = {
    name: "Lunar Module",

    land() {
        console.log("13. Implicit binding:", this.name);
    }
};

LunarModule.land();


// ==========================================================
// 14. Explicit this binding
// ==========================================================

function spaceReport() {
    console.log("14. Explicit binding:", this.name);
}

spaceReport.call({
    name: "Earth Mission"
});


// ==========================================================
// 15. call() controls this
// ==========================================================

function launchMission() {
    console.log("15. call() selected:", this.name);
}

launchMission.call({
    name: "Mars Mission"
});


// ==========================================================
// 16. apply() controls this
// ==========================================================

function calculateOrbit(distance, speed) {
    console.log(
        "16. apply() -",
        this.name,
        "Distance:",
        distance,
        "Speed:",
        speed
    );
}

calculateOrbit.apply(
    {
        name: "Moon Orbit"
    },
    [384400, 1022]
);


// ==========================================================
// 17. bind() controls this
// ==========================================================

function identifyShip() {
    console.log("17. bind() selected:", this.name);
}

const marsShip = identifyShip.bind({
    name: "Mars Explorer"
});

marsShip();


// ==========================================================
// 18. this inside constructor functions
// ==========================================================

function Planet(name) {
    this.name = name;
}

const earthPlanet = new Planet("Earth");

console.log("18. Constructor this:", earthPlanet.name);


// ==========================================================
// 19. this with JavaScript classes
// ==========================================================

class SpaceVehicle {
    constructor(name) {
        this.name = name;
    }

    launch() {
        console.log("19. Class this:", this.name);
    }
}

const moonVehicle = new SpaceVehicle("Moon Lander");

moonVehicle.launch();


// ==========================================================
// 20. this inside class methods
// ==========================================================

class MarsColony {
    constructor(name) {
        this.name = name;
    }

    activate() {
        console.log("20. Mars colony:", this.name);
    }
}

const colony = new MarsColony("New Mars");

colony.activate();


// ==========================================================
// 21. How new changes this
// ==========================================================

function SpaceRobot(name) {
    this.name = name;

    console.log(
        "21. new created robot:",
        this.name
    );
}

new SpaceRobot("Mars Robot");


// ==========================================================
// 22. this when creating objects
// ==========================================================

function MoonRobot(name) {
    this.name = name;

    this.scan = function () {
        console.log(
            "22. Moon robot scanning:",
            this.name
        );
    };
}

const lunarRobot = new MoonRobot("Lunar Explorer");

lunarRobot.scan();


// ==========================================================
// 23. Arrow functions do not create their own this
// ==========================================================

const earthCommand = {
    name: "Earth Command",

    start() {
        const arrow = () => {
            console.log(
                "23. Arrow inherited this:",
                this.name
            );
        };

        arrow();
    }
};

earthCommand.start();


// ==========================================================
// 24. Arrow functions inherit this
// ==========================================================

const marsCommand = {
    name: "Mars Command",

    start() {
        const report = () => {
            console.log(
                "24. Inherited this:",
                this.name
            );
        };

        report();
    }
};

marsCommand.start();


// ==========================================================
// 25. Lexical this binding
// ==========================================================

const moonCommand = {
    name: "Moon Command",

    execute() {
        const report = () => {
            console.log(
                "25. Lexical this:",
                this.name
            );
        };

        report();
    }
};

moonCommand.execute();


// ==========================================================
// 26. this in nested functions
// ==========================================================

const earthControl = {
    name: "Earth Control",

    start() {
        function nestedFunction() {
            console.log(
                "26. Nested regular function executed"
            );
        }

        nestedFunction();
    }
};

earthControl.start();


// ==========================================================
// 27. Tracking this step by step
// ==========================================================

const marsControl = {
    name: "Mars Control",

    start() {
        console.log("27A. First:", this.name);

        const nextStep = () => {
            console.log("27B. Second:", this.name);
        };

        nextStep();
    }
};

marsControl.start();


// ==========================================================
// 28. Finding which object this refers to
// ==========================================================

const lunarControl = {
    name: "Lunar Control",

    identify() {
        console.log(
            "28. this refers to object:",
            this.name
        );
    }
};

lunarControl.identify();


// ==========================================================
// 29. this in event-style callbacks
// ==========================================================

const earthButton = {
    name: "Earth Launch Button",

    click() {
        console.log(
            "29. Event-style callback:",
            this.name
        );
    }
};

earthButton.click();


// ==========================================================
// 30. Browser-style event handling
// ==========================================================

const moonButton = {
    name: "Moon Launch Button",

    handleClick() {
        console.log(
            "30. Event handler example:",
            this.name
        );
    }
};

moonButton.handleClick();


// ==========================================================
// 31. this in strict mode
// ==========================================================

"use strict";

function strictMission() {
    console.log(
        "31. Strict-mode function this:",
        this
    );
}

strictMission();


// ==========================================================
// 32. Strict mode and method calls
// ==========================================================

const marsStrict = {
    name: "Mars Strict Mission",

    execute() {
        console.log(
            "32. Strict-mode method:",
            this.name
        );
    }
};

marsStrict.execute();


// ==========================================================
// 33. Detaching a method from an object
// ==========================================================

const earthDatabase = {
    name: "Earth Database",

    show() {
        console.log(
            "33. Database:",
            this?.name
        );
    }
};

const detachedEarthMethod = earthDatabase.show;

detachedEarthMethod();


// ==========================================================
// 34. Storing a method in a variable
// ==========================================================

const moonDatabase = {
    name: "Moon Database",

    display() {
        console.log(
            "34. Stored method:",
            this?.name
        );
    }
};

const moonDisplay = moonDatabase.display;

moonDisplay();


// ==========================================================
// 35. Method borrowing
// ==========================================================

const earthBase = {
    name: "Earth Base",

    report() {
        console.log(
            "35. Method borrowed by:",
            this.name
        );
    }
};

const marsBase = {
    name: "Mars Base"
};

earthBase.report.call(marsBase);


// ==========================================================
// 36. Reusing a method with another this value
// ==========================================================

const moonBase = {
    name: "Moon Base",

    status() {
        console.log(
            "36. Reused method for:",
            this.name
        );
    }
};

const asteroidBase = {
    name: "Asteroid Base"
};

moonBase.status.call(asteroidBase);


// ==========================================================
// 37. call(), apply(), and bind()
// ==========================================================

function missionStatus() {
    console.log(
        "37. Mission:",
        this.name
    );
}

missionStatus.call({
    name: "Earth Mission"
});

missionStatus.apply({
    name: "Moon Mission"
});

const boundMarsMission =
    missionStatus.bind({
        name: "Mars Mission"
    });

boundMarsMission();


// ==========================================================
// 38. this and object-oriented JavaScript
// ==========================================================

class SpaceCommand {
    constructor(planet) {
        this.planet = planet;
    }

    status() {
        console.log(
            "38. Space command:",
            this.planet
        );
    }
}

const command = new SpaceCommand("Earth");

command.status();


// ==========================================================
// 39. Accessing object properties with this
// ==========================================================

const MarsSatellite = {
    name: "Mars Satellite",
    altitude: 250,

    report() {
        console.log(
            "39.",
            this.name,
            "Altitude:",
            this.altitude,
            "km"
        );
    }
};

MarsSatellite.report();


// ==========================================================
// 40. this as execution context
// ==========================================================

const EarthMission = {
    name: "Earth Mission",

    context() {
        console.log(
            "40. Current execution context:",
            this.name
        );
    }
};

EarthMission.context();


// ==========================================================
// 41. Predicting this before execution
// ==========================================================

const MoonMission = {
    name: "Moon Mission",

    predict() {
        console.log(
            "41. Prediction:",
            this.name
        );
    }
};

MoonMission.predict();


// ==========================================================
// 42. Four main this-binding rules
// ==========================================================

const bindingRules = {

    name: "Earth",

    implicit() {
        console.log(
            "42A. Implicit:",
            this.name
        );
    },

    explicit() {
        console.log(
            "42B. Explicit:",
            this.name
        );
    }
};

bindingRules.implicit();

bindingRules.explicit.call({
    name: "Mars"
});


// ==========================================================
// 43. Function invocation determines this
// ==========================================================

const invocationExample = {
    name: "Moon",

    launch() {
        console.log(
            "43. Invocation determines:",
            this.name
        );
    }
};

invocationExample.launch();


// ==========================================================
// 44. Debugging unexpected this values
// ==========================================================

const debuggingStation = {
    name: "Mars Debug Station",

    debug() {
        console.log(
            "44. Debug this:",
            this
        );
    }
};

debuggingStation.debug();


// ==========================================================
// 45. this depends on invocation pattern
// ==========================================================

const patternA = {
    name: "Earth",

    show() {
        console.log(
            "45A. Object invocation:",
            this.name
        );
    }
};

const patternB = {
    name: "Mars"
};

patternA.show();

patternA.show.call(patternB);


// ==========================================================
// 46. this and function calls
// ==========================================================

const SpaceProbe = {
    name: "Deep Space Probe",

    send() {
        console.log(
            "46. Function call:",
            this.name
        );
    }
};

SpaceProbe.send();


// ==========================================================
// 47. Practical this example
// ==========================================================

const MarsRoverMission = {

    name: "Mars Rover Opportunity",

    battery: 87,

    report() {
        console.log(
            "47. Rover:",
            this.name
        );

        console.log(
            "Battery:",
            this.battery + "%"
        );
    }
};

MarsRoverMission.report();


// ==========================================================
// 48. Breaking down this binding one call at a time
// ==========================================================

const SpaceFleet = {

    name: "Space Fleet",

    deploy() {
        console.log(
            "48A. this.name:",
            this.name
        );

        this.status();
    },

    status() {
        console.log(
            "48B. Fleet status:",
            this.name
        );
    }
};

SpaceFleet.deploy();


// ==========================================================
// 49. Mastering the rules behind this
// ==========================================================

class InterplanetaryShip {

    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
    }

    launch() {
        console.log(
            "49. Ship:",
            this.name
        );

        console.log(
            "Destination:",
            this.destination
        );
    }
}

const starship = new InterplanetaryShip(
    "Starship 001",
    "Mars"
);

starship.launch();


// ==========================================================
// 50. Final this keyword challenge
// ==========================================================

const SolarSystemCommand = {

    name: "Solar System Command",

    planets: [
        "Earth",
        "Moon",
        "Mars"
    ],

    mission() {

        console.log(
            "50. Command Center:",
            this.name
        );

        this.planets.forEach(
            (planet) => {

                console.log(
                    "🚀 Destination:",
                    planet
                );

            }
        );
    }
};

SolarSystemCommand.mission();


// ==========================================================
// 🌍🌙🔴 FINAL SUMMARY
// ==========================================================

console.log("");
console.log("==============================================");
console.log("🌍🌙🔴 THIS KEYWORD LABORATORY COMPLETE");
console.log("==============================================");
console.log("50 JavaScript examples executed.");
console.log("");
console.log("Core concepts explored:");
console.log("• Object method binding");
console.log("• Regular functions");
console.log("• Arrow functions");
console.log("• Constructor functions");
console.log("• Classes");
console.log("• new");
console.log("• call()");
console.log("• apply()");
console.log("• bind()");
console.log("• Method borrowing");
console.log("• Lexical this");
console.log("• Strict mode");
console.log("• Event-style callbacks");
console.log("• Method detachment");
console.log("• Dynamic binding");
console.log("");
console.log("🌍 Earth → Home Planet");
console.log("🌙 Moon → Lunar Mission");
console.log("🔴 Mars → Mars Colony");
console.log("🚀 Space → JavaScript Laboratory");
console.log("==============================================");
