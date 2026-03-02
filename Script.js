const explinationOne = this;
console.log(this);
console.log("In the begining was the word and the word was with God and the word was God");

// Examples & Explaination of the this keyword

// this in the global context. In the global scope, this refers to the global object. In browsers, that in windows. In Node.js, it is global

console.log(this);

// Javascript in the browser
console.log(this == window); // true

// Outside any function or object, this refers to the execution contect.

// this inside of a regulat function

In a normal function non strict mode, this defaults to the global object.

function show() {
console.log(this);
}
show():

// However in strict more
"use strict"
function show() {
console.log(this);
}
show()

// strict mode prevents accidental global bindings
// this inside an object method
// when a function is called as a method of an object, this refers to the object that calls it.

const user = {
  name: 'John',
  green: function() {
  console.log(this.name)
}
user.greet(); // John