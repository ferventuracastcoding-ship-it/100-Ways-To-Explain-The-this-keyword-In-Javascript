// Explaining the 'this' keyword in a constructor function
// Constructor function used to create Car objects
function Car(brand, model) {

  // Store the car's brand on the new object.
  // Example: this.brand = "Toyota"
  this.brand = brand;

  // Store the car's model on the new object.
  // Example: this.model = "Camry"
  this.model = model;

  // Create a method named 'displayInfo' for this object.
  // This method can be called like car.displayInfo().
  this.displayInfo = function () {

    // Print information about the car.
    // `${}` inserts the values of this.brand and this.model
    // into the template literal.
    console.log(`This car is a ${this.brand} ${this.model}.`);
  };
}

// Create a new Car object
const myCar = new Car("Toyota", "Camry");

// Call the object's method
myCar.displayInfo();
