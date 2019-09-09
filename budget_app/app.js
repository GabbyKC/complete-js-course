document.getElementById('submit').addEventListener('click', createTable);

getMonth();

function createTable() {
    let selection = document.getElementById('select').value;
    let desc = document.getElementById('description').value;
    let amount = document.getElementById('amount').value;
    let incomeTable = document.getElementById('income-table');
    let expenseTable = document.getElementById('expense-table');

    let row = document.createElement('tr');
    let rowItem1 = document.createElement('td');
    let rowItem2 = document.createElement('td');
    let rowItem3 = document.createElement('td');
    let rowItemText1 = document.createTextNode(desc);
    let rowItemText2 = document.createTextNode(amount);
    let rowItemText3 = document.createElement('input');
    rowItemText3.setAttribute('type', 'button');
    rowItemText3.setAttribute('value', 'X');
    rowItemText3.className = "remove";

    rowItem1.appendChild(rowItemText1);
    rowItem2.appendChild(rowItemText2);
    rowItem3.appendChild(rowItemText3);
    row.appendChild(rowItem1);
    row.appendChild(rowItem2);
    row.appendChild(rowItem3);

    if (selection === 'plus' && desc !== '' && amount !== '') {
        // rowItem2.textContent = '+ ' + amount;
        rowItem2.className = 'income-number';
        // rowItem2.setAttribute('name', 'credit');
        incomeTable.appendChild(row);
    } else if (selection === 'minus' && desc !== '' && amount !== '') {
        // rowItem2.textContent = '- ' + amount;
        rowItem2.className = 'expense-number';
        // rowItem2.setAttribute('name', 'debit');
        expenseTable.appendChild(row);
    }
    else {
        alert('Please select from the dropdown and fill in your data')
    }
    clearInputs();
    calculateTotals();
    removeRow();
}

function clearInputs() {
    document.getElementById('select').value = 'defualt';
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function removeRow() {
    $('table').on('click', 'input[type="button"]', function(e){
       $(this).closest('tr').remove()
       calculateTotals();
    })
}

function getCellTextList(tableElement) {
      let textList = [];
      // Iterate over each table row
      tableElement.find('tbody tr').each(function() {
          let row = $(this);
          if (row.children('td').length > 0) {
             textList.push(row.children('td').eq(1).text());
          }
      });
      return textList;
}

function calculateArrayElements(array) {
    let x = 0;
    let result;

    for (let i = 0; i < array.length; i++) {
        y = parseFloat(array[i]);
        x = x + y;
    }
    return x;
}

function calculateTotals() {
    let incomeList = getCellTextList($('#positive'));
    let expenseList = getCellTextList($('#negative'));

    let pos = calculateArrayElements(incomeList);
    let neg = calculateArrayElements(expenseList);

    let totalIncome = document.getElementById('total-income');
    totalIncome.textContent = pos;
    totalIncome.classList.add('budget-good');

    let totalExpenses = document.getElementById('total-expenses');
    totalExpenses.textContent = neg;
    totalExpenses.classList.add('budget-bad');

    let budget = pos - neg;

    let available = document.getElementById('available-budget');
    available.textContent = budget;

    if (budget > 0) {
        available.classList.add('budget-good');
    }
}

function getMonth() {
    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let d = new Date();
    let n = month[d.getMonth()];
    let y = d.getFullYear();
    document.getElementById('time').innerHTML = n + ' ' + y;
}
