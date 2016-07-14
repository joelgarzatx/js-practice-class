'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SavingsAccount = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bankAccount = require('./bankAccount.js');

var _bankAccount2 = _interopRequireDefault(_bankAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // savingsAccount.js

var SavingsAccount = function (_BankAccount) {
  _inherits(SavingsAccount, _BankAccount);

  function SavingsAccount(balance, owner, intRate) {
    _classCallCheck(this, SavingsAccount);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SavingsAccount).call(this, balance, owner));

    _this.annualInterestRate = intRate;
    console.log('Owner: ' + _this.owner);
    console.log('Opening balance: ' + _this.balance);
    return _this;
  }

  _createClass(SavingsAccount, [{
    key: 'depositMonthlyInterest',
    value: function depositMonthlyInterest() {
      _get(Object.getPrototypeOf(SavingsAccount.prototype), 'deposit', this).call(this, this.balance * this.annualInterestRate);
    }
  }, {
    key: 'withdrawal',
    value: function withdrawal(amount) {
      if (this.balance <= amount) {
        throw new Error('There are insufficient funds to withdraw.');
      }
      _get(Object.getPrototypeOf(SavingsAccount.prototype), 'withdrawal', this).call(this, amount);
      return this.balance;
    }
  }]);

  return SavingsAccount;
}(_bankAccount2.default);

exports.SavingsAccount = SavingsAccount;