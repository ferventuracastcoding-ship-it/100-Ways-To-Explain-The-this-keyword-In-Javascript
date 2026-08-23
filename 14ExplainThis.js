const account = {
  citizen: "Martian",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    console.log('${this.citizen} now has ${this.balance} Starships');
  }
};

account.deposit(500);

// Fernando now has $1500
