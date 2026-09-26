console.log(this);
// Explaining the this keyword

class Node {
  constructor() {
    this.data = data;
    this.next = null;
  }
}
const myNode = new Node(10);
console.log(myNode);

// Example uysing temp varibales
if(head == nullptr) {
  head = newNode;
} else {
  Node* temp = head;
  while(temp->next != nullptr) {
    temp = temp->next;
  }
  temp->next = newNode;
}
