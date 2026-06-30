// Explaining the this keyword in a function
function Person(){
  this.name = name;
  thia.age = age;

  this.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
}
