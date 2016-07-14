// bankAccount.js

class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
    console.log('New account created.');
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposit of ${amount}. New balance is ${this.balance}.`);
    return this.balance;
  }

  withdrawal(amount) {
    this.balance -= amount;
    console.log(`Withdrawal of ${amount}. New balance is ${this.balance}.`);
    return this.balance;
  }
}

export { BankAccount };
