'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckingAccount = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bankAccount = require('./bankAccount.js');

var _bankAccount2 = _interopRequireDefault(_bankAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // checkingAccount.js

var CheckingAccount = function (_BankAccount) {
  _inherits(CheckingAccount, _BankAccount);

  function CheckingAccount(balance, owner, nsf) {
    _classCallCheck(this, CheckingAccount);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckingAccount).call(this, balance, owner));

    _this.insufficientFundsFee = nsf;
    console.log('Owner: ' + _this.owner);
    console.log('Opening balance: ' + _this.balance);
    return _this;
  }

  _createClass(CheckingAccount, [{
    key: 'processCheck',
    value: function processCheck() {
      console.log('Process check');
    }
  }, {
    key: 'withdrawal',
    value: function withdrawal(amount) {
      var nsfFee = 0;
      if (this.balance <= amount) {
        console.log('Insufficient funds, adding fee of ' + this.insufficientFundsFee);
        nsfFee = this.insufficientFundsFee;
      }
      _get(Object.getPrototypeOf(CheckingAccount.prototype), 'withdrawal', this).call(this, amount + nsfFee);
      return this.balance;
    }
  }]);

  return CheckingAccount;
}(_bankAccount2.default);

exports.CheckingAccount = CheckingAccount;