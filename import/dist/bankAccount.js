'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// bankAccount.js

var BankAccount = function () {
  function BankAccount(balance, owner) {
    _classCallCheck(this, BankAccount);

    this.balance = balance;
    this.owner = owner;
    console.log('New account created.');
  }

  _createClass(BankAccount, [{
    key: 'deposit',
    value: function deposit(amount) {
      this.balance += amount;
      console.log('Deposit of ' + amount + '. New balance is ' + this.balance + '.');
      return this.balance;
    }
  }, {
    key: 'withdrawal',
    value: function withdrawal(amount) {
      this.balance -= amount;
      console.log('Withdrawal of ' + amount + '. New balance is ' + this.balance + '.');
      return this.balance;
    }
  }]);

  return BankAccount;
}();

exports.BankAccount = BankAccount;