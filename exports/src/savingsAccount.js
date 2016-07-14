// savingsAccount.js

var BankAccount = require('./bankAccount.js');

SavingsAccount = function(balance, owner, intRate){
  this.balance = balance;
  this.owner = owner;
  this.annualInterestRate = intRate;
  console.log('Owner: ' + this.owner);
  console.log('Opening balance: ' + this.balance);
};
SavingsAccount.prototype = new BankAccount();

SavingsAccount.prototype.depositMonthlyInterest = function(){
  console.log('Deposit monthy interest.');
  BankAccount.prototype.deposit.call(this, this.balance * this.annualInterestRate);
};

SavingsAccount.prototype.withdrawal = function(amount) {
  if(this.balance <= amount) {
    throw new Error('There are insufficient funds to withdraw.');
  };
  BankAccount.prototype.withdrawal.call(this, amount);
  return this.balance;
}

module.exports = SavingsAccount;
