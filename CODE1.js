/**
 *   @author Page, Marshall (mpage@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 3 || created: 10.14.2018
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');


let continueResponse;
let pinNumber, customerName, savingsBalance, amount, checkingBalance, transferToChecking, transferToSavings, transactionType, counter;

    function main() {
        if (continueResponse !== 0 && continueResponse !== 1) {
            setPin();
            setCustomerName();
            setCounter();
            setContinueResponse();
            setCheckingBalance();
            setSavingsBalance();
        }
        while (continueResponse === 1) {
            setAmount();
            setTransactionType();
            setContinueResponse();
        }
        printTotalBalance();
        printGoodbye();
    }




main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc customerName mutator
 * @returns {null}
 */
function setCustomerName() {
    customerName = PROMPT.question(`\nPlease enter cardholder name: `);
}

/**
 * @method
 * @desc customerPin mutator
 * @returns {null}
 */
function setPin() {
    const PIN_NUMBER = 2525;
    pinNumber = Number(PROMPT.question('\nPlease enter your PIN number: (teacher hint:2525) '));
    if (pinNumber !== PIN_NUMBER) {
        console.log(`I'm Sorry, the PIN you have entered is incorrect. Please try again.`);
        return setPin();
    }
}

function setCounter() {
    if (counter != null) {
        counter++;
    } else {
        counter = 1;
    }
}

function setSavingsBalance() {
    savingsBalance = 1000.00;
}

function setCheckingBalance() {
    checkingBalance = 1000.00;
}

/**
 * @method
 * @desc customerPin mutator
 * @returns {null}
 */
function setAmount() {
    amount = Number(PROMPT.question('\nPlease enter the amount you wish to withdraw/deposit/transfer:'));
    if (amount < 1 || amount > 1000) {
        console.log(`Incorrect amount. Please enter a value greater than $0 and less than $1,000.`);
        return setAmount();
    }

}

function setTransactionType() {
    transactionType = Number(PROMPT.question(`\nPlease select a method: 
     1 = Transfer funds to checking:
     2 = Transfer funds to savings:
     3 = Transfer funds from checking to savings: 
     4 = Transfer funds from savings to checking: 
     5 = Inquire savings account balance:
     6 = Inquire checking account balance: 
     7 = Cancel Transaction:
     
     `));
    switch (transactionType) {
        case 1: checkingBalance = amount + checkingBalance;
            console.log(`\nTransaction Complete. Final balance will display at end of program`);
            break;
        case 2: savingsBalance = amount + savingsBalance;
            console.log(`\nTransaction Complete. Final balance will display at end of program`);
            break;
        case 3: transferToSavings = checkingBalance - amount;
            console.log(`\nTransaction Complete. Final balance will display at end of program`);
            break;
        case 4: transferToChecking = amount + checkingBalance;
            console.log(`\nTransaction Complete. Final balance will display at end of program`);
            break;
        case 5: console.log(`\nYour current balance in your savings account is $${savingsBalance}!`);
            break;
        case 6: console.log(`\nYour current balance in your Checking account is $${checkingBalance}!`);
            break;
        case 7: console.log(`\nThank you for visiting our bank!`);
            return continueResponse;
    }
}


function printTotalBalance() {
    console.log(`The current balance for your accounts is: Checking $${checkingBalance}, Savings $${savingsBalance}. Have a good day!`)
}

    /**
     * @method
     * @desc Utility: Output goodbye
     * @returns {null}
     */
    function printGoodbye() {
        console.log(`\n\tGoodbye.`);
}

/*
Write a program that simulates an automatic teller machine (ATM).
Assume an initial balance of $1,000.00 in both a checking and savings
account. A user may withdraw, deposit, transfer funds, or inquire as
many times as she desires. The program will only end when the user
chooses to quit, otherwise the program should loop and prompt the
users for actions.
For security, include an authentication routine that will prompt the user
to enter a card holder name, number, and pin. The user is only allowed
three attempts to enter the correct pin which should authenticate to
the correct card number (you should have card number/pin combos
already in your program that the user tests against. After the third
attempt the program should terminate.
 */