document.getElementById('submit').addEventListener('click', createTable);

function createTable() {
    let selection = document.getElementById('select').value;
    let desc = document.getElementById('description').value;
    let amount = document.getElementById('amount').value;

    let incomeTable = document.getElementById('income-table');
    let expenseTable = document.getElementById('expense-table');

    let row = document.createElement('tr');
    let rowItem1 = document.createElement('td')
    let rowItem2 = document.createElement('td');;
    let rowItemText1 = document.createTextNode(desc);
    let rowItemText2 = document.createTextNode(amount);

    rowItem1.appendChild(rowItemText1);
    rowItem2.appendChild(rowItemText2);
    row.appendChild(rowItem1);
    row.appendChild(rowItem2);

    if (selection === 'plus') {
        rowItem2.textContent = '+ ' + amount;
        rowItem2.className = 'income-number';
        incomeTable.appendChild(row);
    } else if (selection === 'minus') {
        rowItem2.textContent = '- ' + amount;
        rowItem2.className = 'expense-number';
        expenseTable.appendChild(row);
    }
    else {
        alert('Please select from the dropdown first')
    }
    clearInputs();
    calculateAvailableBudget();
}

function clearInputs() {
    document.getElementById('select').value = 'defualt';
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function calculateAvailableBudget(){
    document.getElementById('available-budget').textContent = 'gabi';
}
