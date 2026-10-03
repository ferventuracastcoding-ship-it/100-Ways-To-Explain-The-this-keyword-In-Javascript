// A Node is one "box" in our linked list.
// Each Node stores:
// 1. Some data
// 2. A reference to the next Node
class Node {
    constructor(data) {
        // Store the value inside this Node.
        // "this" refers to the current Node object.
        this.data = data;

        // At first, this Node doesn't point to anything.
        // null means "nothing" or "no next Node".
        this.next = null;
    }
}


// The LinkedList class manages all of our Nodes.
class LinkedList {
    constructor() {
        // "head" is the first Node in the list.
        //
        // When the list is empty, there is no first Node,
        // so we set head to null.
        this.head = null;
    }


    // Add a new value to the END of the linked list.
    add(data) {

        // Create a new Node containing the data.
        const newNode = new Node(data);

        // If the list is empty...
        if (this.head === null) {

            // Make the new Node the first Node.
            this.head = newNode;

            // We are finished, so leave the method.
            return;
        }

        // Start at the first Node.
        let current = this.head;

        // Keep moving through the list until
        // we reach the last Node.
        //
        // The last Node has next === null.
        while (current.next !== null) {
            current = current.next;
        }

        // We found the last Node.
        // Connect it to our new Node.
        current.next = newNode;
    }


    // Print every value in the linked list.
    print() {

        // Start at the first Node.
        let current = this.head;

        // Keep going until there are no more Nodes.
        while (current !== null) {

            // Print the data stored in the current Node.
            console.log(current.data);

            // Move to the next Node.
            current = current.next;
        }
    }
}


// Create a new empty LinkedList.
const fleet = new LinkedList();

// Add three Starships to our list.
fleet.add("Starship-1");
fleet.add("Starship-2");
fleet.add("Starship-3");

// Print the contents of the linked list.
fleet.print();

How it works

When you start with:

const fleet = new LinkedList();


you have an empty list:

fleet
  |
  v
head → null


Then:

fleet.add("Starship-1");


creates a Node:

head
 |
 v
┌────────────────────┐
│ data: "Starship-1" │
│ next: null         │
└────────────────────┘


Then you add another:

fleet.add("Starship-2");


Now the first Node points to the second:

head
 |
 v
┌───────────────┐       ┌───────────────┐
│ "Starship-1"  │       │ "Starship-2"  │
│ next ─────────┼──────→│ next: null    │
└───────────────┘       └───────────────┘


After adding the third:

fleet.add("Starship-3");


the list looks like:

head
 |
 v
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│ "Starship-1"  │       │ "Starship-2"  │       │ "Starship-3"  │
│ next ─────────┼──────→│ next ─────────┼──────→│ next: null    │
└───────────────┘       └───────────────┘       └───────────────┘

The important part: this

This can initially look strange:

this.data = data;
this.next = null;


Suppose we do:

const ship = new Node("Starship-1");


Inside the constructor:

constructor(data) {
    this.data = data;
    this.next = null;
}


data is:

"Starship-1"


and this refers to the new Node we're creating.

So:

this.data = data;


basically means:

"Put the value I received into this Node's data property."

The resulting object is essentially:

{
    data: "Starship-1",
    next: null
}

The important part: next

This:

this.next = null;


means the Node doesn't have a following Node yet.

Later, this:

current.next = newNode;


changes that.

For example:

Before:

Node 1
  |
  v
next → null


After:

Node 1                 Node 2
  |                       |
  v                       v
next ─────────────────→ next → null

Why do we use current?

This line:

let current = this.head;


starts us at the beginning of the list.

Then:

current = current.next;


moves us to the next Node.

So this loop:

while (current !== null) {
    console.log(current.data);
    current = current.next;
}


basically says:

"While there is still a Node, print its data and move to the next Node."

That's how print() walks through the entire linked list.
