// checkingAccount.js

import BankAccount from './bankAccount.js';

class CheckingAccount extends BankAccount {
  constructor(balance, owner, nsf) {
    super(balance, owner);
    this.insufficientFundsFee = nsf;
    console.log(`Owner: ${this.owner}`);
    console.log(`Opening balance: ${this.balance}`);
  }

  processCheck() {
    console.log('Process check');
  }

  withdrawal(amount) {
    let nsfFee = 0;
    if (this.balance <= amount) {
      console.log(`Insufficient funds, adding fee of ${this.insufficientFundsFee}`);
      nsfFee = this.insufficientFundsFee;
    }
    super.withdrawal(amount + nsfFee);
    return this.balance;
  }
}

export { CheckingAccount };
