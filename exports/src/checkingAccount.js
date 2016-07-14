// checkingAccount.js

var BankAccount = require('./bankAccount.js');

CheckingAccount = function(balance, owner, nsf){
    this.balance = balance;
    this.owner = owner;
    this.insufficientFundsFee = nsf;
    console.log('Owner: ' + this.owner);
    console.log('Opening balance: ' + this.balance);
};

CheckingAccount.prototype = new BankAccount();

CheckingAccount.prototype.processCheck = function(){
  console.log('Process check');
};

CheckingAccount.prototype.withdrawal = function(amount) {
  if(this.balance <= amount) {
    console.log('Insufficient funds, adding fee of ' + this.insufficientFundsFee);
    amount += this.insufficientFundsFee;
  };
  BankAccount.prototype.withdrawal.call(this, amount);
  return this.balance;
};

module.exports = CheckingAccount;
