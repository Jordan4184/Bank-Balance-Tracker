//Budget Tracker

//Balance
let balance = [
    {amount: 0, description: 'Initial Balance', type: 'income'},
]
//Add Income
let addIncome = (function (amount, description, type){
    balance.push({amount: amount, description: description, type: type});
}); 

//Add Expense
let addExpense = (function (amount, description, type){
    balance.push({amount: amount, description: description, type: type})
})

//View Balance 
let viewBalance = (function (){
    return balance.reduce(function (accumulator, currentValue){
       return accumulator + currentValue.amount;
    }, 0);
})

//Remove Transaction
let removeTransaction = function(description){
    balance = balance.filter(function(balance){
        return balance.description !== description;
    })
};

addIncome(5, 'Cash Deposit', 'income')

addExpense(-5, 'cards', 'expense');

removeTransaction('cards');

console.log(balance)
let balanceTotal = viewBalance();
console.log(`Your balance is $${balanceTotal}`);
