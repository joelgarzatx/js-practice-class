// bankAccount.js

BankAccount = function() {
  this.balance = 0;
  this.owner = 'Unassigned';

  console.log("New account created.")
};

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  console.log('Deposit of ' + amount + '. New balance is ' + this.balance);
  return this.balance;
};

BankAccount.prototype.withdrawal = function(amount) {
  this.balance -= amount;
  console.log('Withdrawal of ' + amount + '. New balance is ' + this.balance);
  return this.balance;
}

module.exports = BankAccount;
