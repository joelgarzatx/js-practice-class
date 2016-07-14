// savingsAccount.js

import BankAccount from './bankAccount.js';

class SavingsAccount extends BankAccount {
  constructor(balance, owner, intRate) {
    super(balance, owner);
    this.annualInterestRate = intRate;
    console.log(`Owner: ${this.owner}`);
    console.log(`Opening balance: ${this.balance}`);
  }

  depositMonthlyInterest() {
    super.deposit(this.balance * this.annualInterestRate);
  }

  withdrawal(amount) {
    if (this.balance <= amount) {
      throw new Error('There are insufficient funds to withdraw.');
    }
    super.withdrawal(amount);
    return this.balance;
  }
}


export { SavingsAccount };
