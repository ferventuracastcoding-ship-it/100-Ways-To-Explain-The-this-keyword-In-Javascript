
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JavaScript This Keyword Lab</title>
<style>
:root{
  --bg:#090d14;--panel:#111a26;--panel2:#172333;
  --cyan:#42e8d5;--blue:#70a7ff;--gold:#ffd166;
  --text:#eaf2ff;--muted:#9aabc0;--green:#83f28f;
}
*{box-sizing:border-box}
body{
 margin:0;background:var(--bg);color:var(--text);
 font-family:Consolas,Monaco,monospace;line-height:1.6
}
header{
 padding:28px 18px;background:linear-gradient(120deg,#101c2c,#153b4a);
 border-bottom:2px solid var(--cyan);text-align:center
}
header h1{color:var(--cyan);font-size:clamp(24px,4vw,40px);margin:0}
header p{color:var(--muted);max-width:850px;margin:12px auto}
main{max-width:1400px;margin:auto;padding:18px}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px}
.stat,.panel{background:var(--panel);border:1px solid #29394c;border-radius:12px;padding:16px}
.stat strong{display:block;color:var(--gold);font-size:25px}
.stat span{color:var(--muted);font-size:12px}
.layout{display:grid;grid-template-columns:290px minmax(0,1fr);gap:18px}
.sidebar,.workspace{min-width:0}
h2,h3{color:var(--cyan)}
.sidebar h2{font-size:17px;margin-top:0}
#search{
 width:100%;padding:11px;background:#080d14;color:white;
 border:1px solid #34465c;border-radius:8px;margin-bottom:12px
}
#examples{display:grid;gap:6px;max-height:690px;overflow:auto}
.example-btn{
 text-align:left;background:#121e2c;color:var(--text);
 border:1px solid #2b3b50;border-radius:7px;padding:10px;cursor:pointer
}
.example-btn:hover,.example-btn.active{border-color:var(--cyan);background:#17353d}
.example-btn small{display:block;color:var(--muted);margin-top:3px}
button{font:inherit}
.controls{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}
.action{
 background:var(--cyan);color:#061312;border:0;border-radius:7px;
 padding:10px 15px;font-weight:bold;cursor:pointer
}
.action.secondary{background:#243449;color:var(--text);border:1px solid #42536a}
.action:hover{filter:brightness(1.13)}
.tag{display:inline-block;color:var(--gold);border:1px solid #66552c;
 border-radius:5px;padding:3px 8px;font-size:12px;margin:2px}
#description{color:#d5e2f3}
.code{
 background:#070b11;border:1px solid #27374a;border-radius:8px;
 padding:16px;overflow:auto;white-space:pre;min-height:150px;
 color:#b6e6ff;font-size:13px
}
#output{color:var(--green);min-height:100px;white-space:pre-wrap;overflow-wrap:anywhere}
#visual{display:flex;gap:9px;flex-wrap:wrap;align-items:center;min-height:55px}
.node{
 padding:12px;background:#173e48;border:1px solid var(--cyan);
 border-radius:8px;color:white;text-align:center
}
.node small{display:block;color:#a9e8e4}
#lesson{color:var(--muted)}
#lesson strong{color:var(--gold)}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.footer{color:var(--muted);font-size:12px;text-align:center;padding:25px}
@media(max-width:850px){
 .layout{grid-template-columns:1fr}
 #examples{grid-template-columns:repeat(2,minmax(0,1fr));max-height:380px}
 .stats{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:480px){
 main{padding:10px}
 #examples{grid-template-columns:1fr}
 .grid2{grid-template-columns:1fr}
 .stat,.panel{padding:12px}
}
</style>
</head>
<body>
<header>
 <h1>THIS KEYWORD // LAB</h1>
 <p>20 interactive JavaScript examples · Objects · Algorithms · Data Structures · Games</p>
 <span class="tag">JAVASCRIPT</span>
 <span class="tag">20 LESSONS</span>
 <span class="tag">LIVE OUTPUT</span>
</header>

<main>
 <section class="stats">
  <div class="stat"><strong>20</strong><span>CODE EXAMPLES</span></div>
  <div class="stat"><strong id="runs">0</strong><span>EXECUTIONS</span></div>
  <div class="stat"><strong id="currentNum">01</strong><span>CURRENT LESSON</span></div>
  <div class="stat"><strong id="progress">0%</strong><span>LESSONS EXPLORED</span></div>
 </section>

 <div class="layout">
  <aside class="sidebar panel">
   <h2>EXAMPLE DATABASE</h2>
   <input id="search" placeholder="Search examples..." aria-label="Search examples">
   <div id="examples"></div>
  </aside>

  <section class="workspace">
   <div class="panel">
    <span class="tag" id="category">OBJECT BASICS</span>
    <h2 id="title">01. Object Method</h2>
    <p id="description"></p>
    <div id="lesson"></div>
    <div class="controls">
     <button class="action" id="run">▶ Run Example</button>
     <button class="action secondary" id="prev">← Previous</button>
     <button class="action secondary" id="next">Next →</button>
     <button class="action secondary" id="reset">Reset Output</button>
    </div>
   </div>

   <div class="panel" style="margin-top:14px">
    <h3>01 / SOURCE CODE</h3>
    <pre class="code"><code id="code"></code></pre>
   </div>

   <div class="grid2" style="margin-top:14px">
    <div class="panel">
     <h3>02 / CONSOLE OUTPUT</h3>
     <pre class="code" id="output">Click Run Example to execute.</pre>
    </div>
    <div class="panel">
     <h3>03 / VISUALIZATION</h3>
     <div id="visual"></div>
     <p id="visualNote" style="color:var(--muted);font-size:13px">
      Run an example to explore its behavior.
     </p>
    </div>
   </div>
   // panel in html
   <div class="panel" style="margin-top:14px">
    <h3>04 / BIG-O & KEY TAKEAWAY</h3>
    <p id="complexity"></p>
    <p id="takeaway"></p>
   </div>
  </section>
 </div>
 <div class="footer">THIS KEYWORD LAB · Learn by reading, running, and experimenting</div>
</main>

<script>
"use strict";

const examples = [
{
 title:"Object Method",
 category:"OBJECT BASICS",
 description:"Inside a normal object method, this refers to the object used to call the method.",
 code:`const astronaut = {
  name: "Alex",
  mission: "Mars",
  introduce: function() {
    return this.name + " is traveling to " + this.mission;
  }
};

console.log(astronaut.introduce());`,
 lesson:`<strong>Why?</strong> The call astronaut.introduce() makes astronaut the receiver. Therefore, this.name is "Alex".`,
 complexity:"O(1) — reading two properties and building a short string.",
 takeaway:"In a normal method call, look at the object immediately before the dot.",
 run(){
  const astronaut={name:"Alex",mission:"Mars",introduce(){return this.name+" is traveling to "+this.mission}};
  return {out:astronaut.introduce(),nodes:[["Alex","name"],["Mars","mission"]],note:"The astronaut object supplies the method's this value."};
 }
},
{
 title:"Change Object State",
 category:"OBJECT BASICS",
 description:"A method can use this to read and update the current object's properties.",
 code:`const rover = {
  battery: 50,
  recharge(amount) {
    this.battery += amount;
    return this.battery;
  }
};

console.log(rover.recharge(20));
console.log(rover.battery);`,
 lesson:`<strong>Why?</strong> this.battery refers to rover.battery during the method call. The property is updated in place.`,
 complexity:"O(1) time and O(1) extra space.",
 takeaway:"Use this.property when a method should work with its object's own state.",
 run(){
  const rover={battery:50,recharge(amount){this.battery+=amount;return this.battery}};
  const before=rover.battery,after=rover.recharge(20);
  return {out:`Battery before: ${before}%\nAfter recharge: ${after}%\nStored battery: ${rover.battery}%`,nodes:[["50%","Before"],["70%","After"]],note:"The same rover object changes from 50 to 70."};
 }
},
{
 title:"Constructor Function",
 category:"OBJECT CREATION",
 description:"When a function is called with new, this refers to the newly created instance.",
 code:`function Starship(name, speed) {
  this.name = name;
  this.speed = speed;
}

const ship = new Starship("Voyager", 25000);

console.log(ship.name);
console.log(ship.speed);`,
 lesson:`<strong>Why?</strong> new creates an object, binds this to it, and returns that object unless the constructor explicitly returns another object.`,
 complexity:"O(1) time and space for this fixed number of fields.",
 takeaway:"Constructor functions commonly initialize instance properties with this.",
 run(){
  function Starship(name,speed){this.name=name;this.speed=speed}
  const ship=new Starship("Voyager",25000);
  return {out:`Name: ${ship.name}\nSpeed: ${ship.speed} km/h`,nodes:[[ship.name,"ship.name"],[ship.speed,"ship.speed"]],note:"new creates the ship instance."};
 }
},
{
 title:"ES6 Class",
 category:"CLASSES",
 description:"Class methods use this to access fields on the particular instance calling them.",
 code:`class Planet {
  constructor(name, moons) {
    this.name = name;
    this.moons = moons;
  }
  describe() {
    return this.name + " has " + this.moons + " moons.";
  }
}

const saturn = new Planet("Saturn", 146);
console.log(saturn.describe());`,
 lesson:`<strong>Why?</strong> The constructor assigns instance properties. Calling saturn.describe() binds this to saturn.`,
 complexity:"O(1) for this example's fixed field access.",
 takeaway:"Class syntax provides a convenient structure for objects that share methods.",
 run(){
  class Planet{constructor(name,moons){this.name=name;this.moons=moons}describe(){return this.name+" has "+this.moons+" moons."}}
  const saturn=new Planet("Saturn",146);
  return {out:saturn.describe(),nodes:[["Saturn","name"],["146","moons"]],note:"The method reads fields from one Planet instance."};
 }
},
{
 title:"Method Shorthand",
 category:"OBJECT BASICS",
 description:"Object method shorthand is concise syntax for defining a normal method.",
 code:`const computer = {
  brand: "OrbitTech",
  boot() {
    return this.brand + " is booting.";
  }
};

console.log(computer.boot());`,
 lesson:`<strong>Why?</strong> boot() is a normal method, not an arrow function. The call computer.boot() sets this to computer.`,
 complexity:"O(1).",
 takeaway:"Method shorthand changes syntax, not the normal method-call binding rule.",
 run(){
  const computer={brand:"OrbitTech",boot(){return this.brand+" is booting."}};
  return {out:computer.boot(),nodes:[["OrbitTech","brand"],["boot()","method"]],note:"The method resolves this.brand on computer."};
 }
},
{
 title:"Explicit call()",
 category:"THIS BINDING",
 description:"call() invokes a function immediately with a chosen this value and optional arguments.",
 code:`function greet(greeting) {
  return greeting + ", " + this.name + "!";
}

const pilot = { name: "Maya" };

console.log(greet.call(pilot, "Welcome"));`,
 lesson:`<strong>Why?</strong> call(pilot, ...) explicitly makes pilot the function's this value.`,
 complexity:"O(1) for this greeting.",
 takeaway:"Use call() when you want to choose this for a single invocation.",
 run(){
  function greet(greeting){return greeting+", "+this.name+"!"}
  const pilot={name:"Maya"};
  return {out:greet.call(pilot,"Welcome"),nodes:[["pilot","chosen this"],["Maya","this.name"]],note:"call() chooses the receiver explicitly."};
 }
},
{
 title:"apply() With Arguments",
 category:"THIS BINDING",
 description:"apply() works like call(), but passes arguments in an array or array-like object.",
 code:`function report(task, destination) {
  return this.name + " will " + task + " at " + destination;
}

const rover = { name: "Curiosity" };

console.log(
  report.apply(rover, ["scan", "Gale Crater"])
);`,
 lesson:`<strong>Why?</strong> apply() sets this to rover and supplies the two parameters from an array.`,
 complexity:"O(1) for the fixed arguments here.",
 takeaway:"call(obj, a, b) and apply(obj, [a, b]) differ in how arguments are supplied.",
 run(){
  function report(task,destination){return this.name+" will "+task+" at "+destination}
  const rover={name:"Curiosity"};
  return {out:report.apply(rover,["scan","Gale Crater"]),nodes:[["Curiosity","this"],["scan","task"],["Gale Crater","destination"]],note:"apply() spreads an argument list into the function call."};
 }
},
{
 title:"bind() Creates a Function",
 category:"THIS BINDING",
 description:"bind() returns a new function whose this value is fixed to the supplied object.",
 code:`function identify() {
  return "Pilot: " + this.name;
}

const pilot = { name: "Jordan" };
const boundIdentify = identify.bind(pilot);

console.log(boundIdentify());`,
 lesson:`<strong>Why?</strong> bind() does not run identify immediately. It creates a function that remembers pilot as this.`,
 complexity:"O(1) for this example.",
 takeaway:"Use bind() when a callback needs a stable this value later.",
 run(){
  function identify(){return "Pilot: "+this.name}
  const pilot={name:"Jordan"},boundIdentify=identify.bind(pilot);
  return {out:boundIdentify()+"\nOriginal function preserved: yes",nodes:[["pilot","bound receiver"],["boundIdentify","new function"]],note:"The new function retains its bound receiver when called later."};
 }
},
{
 title:"Arrow Function Trap",
 category:"ARROW FUNCTIONS",
 description:"Arrow functions do not create their own this. They capture this from the surrounding scope.",
 code:`const station = {
  name: "ISS",
  regular() {
    return this.name;
  },
  arrow: () => {
    return this.name;
  }
};

console.log(station.regular());
// station.arrow() does not use station as this.`,
 lesson:`<strong>Why?</strong> regular() gets this from its call. arrow captures the surrounding this instead, so station.arrow() does not automatically bind this to station. In this script, its result is typically undefined.`,
 complexity:"O(1).",
 takeaway:"Avoid arrow functions for object methods that need their own this.",
 run(){
  const station={name:"ISS",regular(){return this.name},arrow:()=>this.name};
  return {out:`regular(): ${station.regular()}\narrow(): ${String(station.arrow())}\n\nArrow functions capture outer this.`,nodes:[["ISS","regular()"],["outer this","arrow()"]],note:"Only regular() receives station through method-call binding."};
 }
},
{
 title:"Callback and bind()",
 category:"CALLBACKS",
 description:"Passing a method as a callback can lose its original receiver. bind() preserves it.",
 code:`const player = {
  name: "Nova",
  score: 0,
  win() {
    this.score += 10;
    return this.name + ": " + this.score;
  }
};

const callback = player.win.bind(player);
console.log(callback());`,
 lesson:`<strong>Why?</strong> A detached method called as callback() no longer has player as its receiver. bind(player) fixes the receiver.`,
 complexity:"O(1) for one score update.",
 takeaway:"When passing object methods to callbacks, check whether their this binding will be preserved.",
 run(){
  const player={name:"Nova",score:0,win(){this.score+=10;return this.name+": "+this.score}};
  const callback=player.win.bind(player);
  return {out:callback()+" points\nStored score: "+player.score,nodes:[["Nova","player"],["+10","score update"]],note:"The bound callback updates the original player object."};
 }
},
{
 title:"Event Handler",
 category:"DOM & EVENTS",
 description:"In a traditional DOM event listener, this usually refers to the element receiving the event.",
 code:`// Browser example:
const button = document.querySelector("button");

button.addEventListener("click", function(event) {
  console.log(this === event.currentTarget);
  console.log(this.textContent);
});`,
 lesson:`<strong>Why?</strong> For a normal function used as a DOM listener, this is the current target element. An arrow listener instead captures outer this. Run this snippet on a page with a button.`,
 complexity:"O(1) for the shown property checks.",
 takeaway:"DOM listener this is different from the this used by your own application objects.",
 run(){
  return {out:"This example needs a real DOM click event.\n\nExpected:\ntrue\n[the clicked button's text]",nodes:[["button","event.currentTarget"],["this","same element"]],note:"This is a browser demonstration. Add a button and run the snippet in the browser console."};
 }
},
{
 title:"Nested Function",
 category:"SCOPE & CONTEXT",
 description:"A regular nested function gets its own this binding when called; it does not automatically inherit the outer method's this.",
 code:`const mission = {
  name: "Europa",
  launch() {
    function inner() {
      return this?.name;
    }
    return inner();
  }
};

console.log(mission.launch());`,
 lesson:`<strong>Why?</strong> inner() is called as a standalone function. In strict mode, its this is undefined. Optional chaining prevents an error and returns undefined.`,
 complexity:"O(1).",
 takeaway:"A nested regular function does not inherit this from its enclosing method.",
 run(){
  const mission={name:"Europa",launch(){function inner(){return this?.name}return inner()}};
  return {out:`Outer this.name: ${mission.name}\nInner function result: ${String(mission.launch())}\nReason: inner() is a standalone call.`,nodes:[["Europa","outer method"],["undefined","inner this.name"]],note:"The inner function has its own call context."};
 }
},
{
 title:"Save this With a Variable",
 category:"SCOPE & CONTEXT",
 description:"A common older pattern is to save the outer this in a variable so nested functions can access it.",
 code:`const ship = {
  name: "Odyssey",
  launch() {
    const self = this;
    function report() {
      return self.name + " launched!";
    }
    return report();
  }
};

console.log(ship.launch());`,
 lesson:`<strong>Why?</strong> self points to the same object as this inside launch(). The nested function can access self even though its own this differs.`,
 complexity:"O(1).",
 takeaway:"Modern code can often use an arrow function instead: const report = () => this.name.",
 run(){
  const ship={name:"Odyssey",launch(){const self=this;function report(){return self.name+" launched!"}return report()}};
  return {out:ship.launch(),nodes:[["ship","object"],["self","saved reference"],["report()","nested function"]],note:"self keeps a reference to the outer method's object."};
 }
},
{
 title:"Fibonacci Recursion",
 category:"ALGORITHMS",
 description:"Use this in an object method that recursively calculates Fibonacci numbers. The recursive call uses this.fib().",
 code:`const fibonacci = {
  fib(n) {
    if (n < 2) return n;
    return this.fib(n - 1) + this.fib(n - 2);
  }
};

console.log(fibonacci.fib(7)); // 13`,
 lesson:`<strong>Why?</strong> this.fib refers to the method on the receiver. The recursive calls work while this remains fibonacci. Naive recursion repeats many calculations.`,
 complexity:"O(2ⁿ) time for naive recursion; O(n) maximum call-stack depth.",
 takeaway:"Recursive methods using this can be fragile if detached from their receiver. Memoization can improve performance.",
 run(){
  const fibonacci={fib(n){if(n<2)return n;return this.fib(n-1)+this.fib(n-2)}};
  const n=7,result=fibonacci.fib(n);
  return {out:`fib(${n}) = ${result}\nSequence: ${Array.from({length:11},(_,i)=>fibonacci.fib(i)).join(", ")}\nRecursive calls repeat subproblems.`,nodes:Array.from({length:8},(_,i)=>[fibonacci.fib(i),"fib("+i+")"]),note:"Each node shows the Fibonacci result for one input."};
 }
},
{
 title:"Hash Table Class",
 category:"DATA STRUCTURES",
 description:"A hash table class uses this to access its buckets and perform insert and lookup operations.",
 code:`class HashTable {
  constructor(size = 7) {
    this.buckets = Array.from({length:size}, () => []);
  }
  hash(key) {
    return [...key].reduce((sum, ch) =>
      sum + ch.charCodeAt(0), 0) % this.buckets.length;
  }
  set(key, value) {
    this.buckets[this.hash(key)].push([key, value]);
  }
}

const table = new HashTable();
table.set("Mars", 4);
console.log(table.buckets);`,
 lesson:`<strong>Why?</strong> this.buckets and this.hash() refer to the current HashTable instance. This educational version demonstrates hashing and collisions; it does not replace existing keys.`,
 complexity:"Average insert O(1) with a good hash and low load; worst case O(n) for a bucket scan.",
 takeaway:"this lets each data-structure instance manage its own internal state.",
 run(){
  class HashTable{constructor(size=7){this.buckets=Array.from({length:size},()=>[])}hash(key){return [...key].reduce((s,ch)=>s+ch.charCodeAt(0),0)%this.buckets.length}set(key,value){this.buckets[this.hash(key)].push([key,value])}}
  const table=new HashTable();table.set("Mars",4);table.set("Saturn",146);table.set("Earth",1);
  return {out:table.buckets.map((b,i)=>`${i}: ${JSON.stringify(b)}`).join("\n"),nodes:table.buckets.map((b,i)=>[b.length?JSON.stringify(b):"empty","Bucket "+i]),note:"Keys are assigned to buckets by this.hash(key). Different keys can collide."};
 }
},
{
 title:"Linked List",
 category:"DATA STRUCTURES",
 description:"A linked list stores its head and tail on the list instance. Methods use this to update its pointers.",
 code:`class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const node = { value, next: null };
    if (!this.head) this.head = node;
    else this.tail.next = node;
    this.tail = node;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
console.log(list.head.value, list.tail.value);`,
 lesson:`<strong>Why?</strong> this.head and this.tail point to the current list's first and last nodes. append() updates the correct instance.`,
 complexity:"O(1) append when a tail pointer is maintained; O(n) traversal to find an arbitrary node.",
 takeaway:"Linked-list methods use this to maintain the relationships between nodes.",
 run(){
  class LinkedList{constructor(){this.head=null;this.tail=null}append(value){const node={value,next:null};if(!this.head)this.head=node;else this.tail.next=node;this.tail=node}}
  const list=new LinkedList();[10,20,30,40].forEach(v=>list.append(v));
  let node=list.head,items=[];while(node){items.push(node.value);node=node.next}
  return {out:`Head: ${list.head.value}\nTail: ${list.tail.value}\nTraversal: ${items.join(" → ")}`,nodes:items.map((v,i)=>[v,i===0?"head":i===items.length-1?"tail":"next"]),note:"Arrows represent each node's next pointer. The list tracks both head and tail."};
 }
},
{
 title:"Stack push() and pop()",
 category:"DATA STRUCTURES",
 description:"A stack object's methods use this.items to access and update the same array.",
 code:`class Stack {
  constructor() { this.items = []; }
  push(value) { this.items.push(value); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
console.log(stack.pop()); // B`,
 lesson:`<strong>Why?</strong> Each method uses this.items, so the operations affect the stack instance on which the method is called.`,
 complexity:"O(1) amortized push and O(1) pop for a typical array stack.",
 takeaway:"A stack follows LIFO: last in, first out.",
 run(){
  class Stack{constructor(){this.items=[]}push(v){this.items.push(v)}pop(){return this.items.pop()}peek(){return this.items[this.items.length-1]}}
  const s=new Stack();["A","B","C"].forEach(v=>s.push(v));const popped=s.pop();
  return {out:`Popped: ${popped}\nTop now: ${s.peek()}\nRemaining: ${s.items.join(", ")}`,nodes:s.items.map((v,i)=>[v,i===s.items.length-1?"TOP":"stack"]),note:"The most recently pushed value is removed first."};
 }
},
{
 title:"Queue enqueue()",
 category:"DATA STRUCTURES",
 description:"A queue class uses this.items to manage elements in first-in, first-out order.",
 code:`class Queue {
  constructor() { this.items = []; }
  enqueue(value) { this.items.push(value); }
  dequeue() { return this.items.shift(); }
}

const queue = new Queue();
queue.enqueue("Launch");
queue.enqueue("Orbit");
console.log(queue.dequeue()); // Launch`,
 lesson:`<strong>Why?</strong> Both methods access this.items on the queue instance. The first item added is the first removed.`,
 complexity:"enqueue O(1) amortized; array shift() is O(n) because elements may need to move.",
 takeaway:"A queue follows FIFO. A head-index queue can avoid repeated array shifting.",
 run(){
  class Queue{constructor(){this.items=[]}enqueue(v){this.items.push(v)}dequeue(){return this.items.shift()}}
  const q=new Queue();["Launch","Orbit","Dock"].forEach(v=>q.enqueue(v));const first=q.dequeue();
  return {out:`Dequeued: ${first}\nQueue remaining: ${q.items.join(" → ")}`,nodes:q.items.map((v,i)=>[v,i===0?"FRONT":"waiting"]),note:"The queue removes the oldest item first."};
 }
},
{
 title:"Game Player Health",
 category:"GAMES",
 description:"A game character uses this to update its own health when taking damage.",
 code:`class Player {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    return this.name + " health: " + this.health;
  }
}

const hero = new Player("Nova");
console.log(hero.takeDamage(25));`,
 lesson:`<strong>Why?</strong> this.health is the health belonging to the specific player instance. Math.max() prevents health from falling below zero.`,
 complexity:"O(1) per damage event.",
 takeaway:"The same method can update many different player instances independently.",
 run(){
  class Player{constructor(name,health=100){this.name=name;this.health=health}takeDamage(n){this.health=Math.max(0,this.health-n);return this.name+" health: "+this.health}}
  const p=new Player("Nova");const events=[25,30,60].map(d=>p.takeDamage(d));
  return {out:events.join("\n"),nodes:[["100","start"],["75","-25"],["45","-30"],["0","-60"]],note:"The character's health is updated after each damage event."};
 }
},
{
 title:"Game Scoreboard",
 category:"GAMES",
 description:"A scoreboard method uses this to add points to one player's score.",
 code:`const game = {
  player: "Nova",
  score: 0,
  award(points) {
    this.score += points;
    return this.player + " scored! Total: " + this.score;
  }
};

console.log(game.award(100));
console.log(game.award(50));`,
 lesson:`<strong>Why?</strong> this.score is updated each time award() is called on game. The second call uses the existing score.`,
 complexity:"O(1) per award.",
 takeaway:"Object state is useful for scores, inventory, timers, and player statistics.",
 run(){
  const game={player:"Nova",score:0,award(points){this.score+=points;return this.player+" scored! Total: "+this.score}};
  const a=game.award(100),b=game.award(50);
  return {out:a+"\n"+b,nodes:[["100","first award"],["150","total score"]],note:"The score accumulates on the same game object."};
 }
},
{
 title:"Method Borrowing",
 category:"ADVANCED",
 description:"call() lets one object use a method defined on another object, with a different this value.",
 code:`const person = {
  describe() {
    return this.name + " is ready.";
  }
};

const robot = { name: "R2" };

console.log(person.describe.call(robot));`,
 lesson:`<strong>Why?</strong> The method comes from person, but call(robot) makes this refer to robot during that invocation.`,
 complexity:"O(1).",
 takeaway:"A method's definition location does not permanently determine its this value.",
 run(){
  const person={describe(){return this.name+" is ready."}};
  const robot={name:"R2"};
  return {out:person.describe.call(robot),nodes:[["person.describe","method source"],["robot","chosen this"]],note:"The function is borrowed without copying it onto robot."};
 }
},
{
 title:"Getter and Setter",
 category:"ADVANCED",
 description:"Getters and setters can use this to compute values or validate updates to an object's properties.",
 code:`const temperature = {
  _celsius: 20,
  get fahrenheit() {
    return this._celsius * 9 / 5 + 32;
  },
  set celsius(value) {
    this._celsius = value;
  }
};

temperature.celsius = 30;
console.log(temperature.fahrenheit); // 86`,
 lesson:`<strong>Why?</strong> Reading fahrenheit runs the getter. Assigning celsius runs the setter. Both access _celsius using this.`,
 complexity:"O(1) for each getter or setter operation.",
 takeaway:"Getters and setters make property access behave like a controlled interface.",
 run(){
  const temperature={_celsius:20,get fahrenheit(){return this._celsius*9/5+32},set celsius(v){this._celsius=v}};
  const before=temperature.fahrenheit;temperature.celsius=30;const after=temperature.fahrenheit;
  return {out:`Before: ${before}°F\nAfter setting 30°C: ${after}°F\nStored Celsius: ${temperature._celsius}°C`,nodes:[["30°C","this._celsius"],["86°F","computed getter"]],note:"The getter calculates Fahrenheit from the current Celsius value."};
 }
},
{
 title:"Static Class Method",
 category:"ADVANCED",
 description:"A static method belongs to the class itself. In a static method, this is the class when invoked through the class name.",
 code:`class MathTools {
  static double(n) {
    return n * 2;
  }
  static describe() {
    return this.name + " is ready.";
  }
}

console.log(MathTools.double(21));
console.log(MathTools.describe());`,
 lesson:`<strong>Why?</strong> MathTools.double() calls the method through the class, so this in describe() refers to MathTools. Static methods are not instance methods.`,
 complexity:"O(1).",
 takeaway:"Use static methods for functionality associated with a class rather than one particular instance.",
 run(){
  class MathTools{static double(n){return n*2}static describe(){return this.name+" is ready."}}
  return {out:`double(21): ${MathTools.double(21)}\n${MathTools.describe()}`,nodes:[["MathTools","class receiver"],["42","result"]],note:"No MathTools instance is needed to call a static method."};
 }
}
];

let current=0;
let runCount=0;
const explored=new Set();

const $=id=>document.getElementById(id);

function renderList(){
 const query=$("search").value.toLowerCase();
 $("examples").innerHTML="";
 examples.forEach((e,i)=>{
  if(!(e.title+" "+e.category+" "+e.description).toLowerCase().includes(query))return;
  const btn=document.createElement("button");
  btn.className="example-btn"+(i===current?" active":"");
  btn.innerHTML=`${String(i+1).padStart(2,"0")}. ${e.title}<small>${e.category}</small>`;
  btn.onclick=()=>selectExample(i);
  $("examples").appendChild(btn);
 });
}

function selectExample(i){
 current=(i+examples.length)%examples.length;
 renderList();
 const e=examples[current];
 $("title").textContent=String(current+1).padStart(2,"0")+". "+e.title;
 $("category").textContent=e.category;
 $("description").textContent=e.description;
 $("lesson").innerHTML=e.lesson;
 $("code").textContent=e.code;
 $("complexity").textContent=e.complexity;
 $("takeaway").textContent=e.takeaway;
 $("currentNum").textContent=String(current+1).padStart(2,"0");
 $("output").textContent="Click Run Example to execute.";
 $("visual").innerHTML="";
 $("visualNote").textContent="Run the example to see its visualization.";
}

function runExample(){
 const e=examples[current];
 try{
  const result=e.run();
  $("output").textContent=result.out;
  $("visual").innerHTML="";
  result.nodes.forEach(([value,label])=>{
   const node=document.createElement("div");
   node.className="node";
   const main=document.createElement("div");
   main.textContent=String(value);
   const small=document.createElement("small");
   small.textContent=String(label);
   node.append(main,small);
   $("visual").appendChild(node);
  });
  $("visualNote").textContent=result.note;
  runCount++;
  explored.add(current);
  $("runs").textContent=runCount;
  $("progress").textContent=Math.round(explored.size/examples.length*100)+"%";
 }catch(error){
  $("output").textContent="Error: "+error.message;
 }
}

$("run").addEventListener("click",runExample);
$("prev").addEventListener("click",()=>selectExample(current-1));
$("next").addEventListener("click",()=>selectExample(current+1));
$("reset").addEventListener("click",()=>{
 $("output").textContent="Output reset. Click Run Example.";
 $("visual").innerHTML="";
 $("visualNote").textContent="Ready for another run.";
});
$("search").addEventListener("input",renderList);

document.addEventListener("keydown",event=>{
 if(event.key==="ArrowRight" && event.target.tagName!=="INPUT")selectExample(current+1);
 if(event.key==="ArrowLeft" && event.target.tagName!=="INPUT")selectExample(current-1);
});

selectExample(0);
</script>
</body>
</html>
