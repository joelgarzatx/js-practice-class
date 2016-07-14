'use strict';

// main.js

var savings = require('./savingsAccount.js');
var checking = require('./checkingAccount.js');

var checkingAccount = new CheckingAccount(100.00, 'John Smith', 25.00);
checkingAccount.owner = 'John Smith';
checkingAccount.deposit(555.00);
checkingAccount.withdrawal(100.00);
checkingAccount.withdrawal(200.00);
checkingAccount.withdrawal(300.00);

var savingsAccount = new SavingsAccount(200.00, 'Jane Smith', 0.05);
savingsAccount.owner = 'Jane Smith';
savingsAccount.deposit(333.00);
savingsAccount.withdrawal(300.00);
savingsAccount.depositMonthlyInterest();