//Budget Tracker

//Balance
let balance = [
    {amount: 0, description: 'Initial Balance', type: 'income'},
]
//Add Income
let addIncome = (function (amount, description, type){
    balance.push({amount: amount, description: description, type: type});
}); 

addIncome(5, 'Cash Deposit', 'income')

//Add Expense
let addExpense = (function (amount, description, type){
    balance.push({amount: amount, description: description, type: type})
})

addExpense(-5, 'cards', 'expense');

//View Balance 
let viewBalance = (function (){
    return balance.reduce(function (accumulator, currentValue){
        return accumulator + currentValue.amount;
    }, 0);
})

console.log(viewBalance());

//View Tranactions
console.log(balance);

//Remove Transaction
let removeTransaction = function(description){
    balance = balance.filter(function(balance){
        return balance.description !== description;
    })
};

removeTransaction('cards');
console.log(balance)