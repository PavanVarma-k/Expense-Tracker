// Select elements
const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

let expenses = [];
let total = 0;

// Add expense
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if(name && amount){
        const expense = { name, amount };
        expenses.push(expense);
        total += amount;
        updateUI();
        form.reset();
    }
});

// Update UI
function updateUI(){
    // Update list
    expenseList.innerHTML = '';
    expenses.forEach((exp, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${exp.name} - $${exp.amount.toFixed(2)} <button onclick="removeExpense(${index})">x</button>`;
        expenseList.appendChild(li);
    });

    // Update total
    totalAmount.textContent = total.toFixed(2);
}

// Remove expense
function removeExpense(index){
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    updateUI();
}
