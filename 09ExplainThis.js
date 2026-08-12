class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  class LinkedList (data) {
    constructor(data) {
      // explain this
      this.head = null;
    }
    insertAtBeginning(data){
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    }
  }
}
