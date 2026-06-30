// Explaining the this keyword in a function
// Constructor function used to create Person objects
function Person(name, age) {

  // Store the value passed in as 'name' on the new object.
  // Example: this.name = "Alice"
  this.name = name;

  // ERROR: 'thia' is a typo.
  // It should be 'this.age = age;'
  this.age = age;

  // Create a method named 'introduce' for this object.
  // This method can be called like person.introduce().
  this.introduce = function () {

    // Print a greeting to the console.
    // `${}` inserts the values of this.name and this.age
    // into the string (template literal).
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
}
