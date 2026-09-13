const temp = this.data;
// store object
const store = {
  // action property or key and value
  action: "Buy Laptop",
  // showAction key
  showAction: function() {
    const temp = this.action;
    // this is equal to this
    console.log("this =", this);
    // this.action is equal to, this.action
    console.log("this.action =", this.action);
    // temp equals temp
    console.log("temp =", temp);
  }
};

store.showAction();
