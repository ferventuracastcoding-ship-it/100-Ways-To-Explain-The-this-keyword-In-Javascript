const numbers = [8, 3, 15, 1, 9];

numbers.sort((a, b) => a - b);

console.log(numbers);
console.log(this);
function app(param1, param2) {
  name = this.name;
  calling = this.calling;
}
// [1, 3, 8, 9, 15]

const nums = [8, 3, 15, 1, 9];

nums.sort((a, b) => b - a);

console.log(nums);
