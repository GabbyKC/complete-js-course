document.getElementById('submit').addEventListener('click', createTable);

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
        rowItem2.setAttribute('name', 'credit');
        incomeTable.appendChild(row);
    } else if (selection === 'minus' && desc !== '' && amount !== '') {
        // rowItem2.textContent = '- ' + amount;
        rowItem2.className = 'expense-number';
        rowItem2.setAttribute('name', 'debit');
        expenseTable.appendChild(row);
    }
    else {
        alert('Please select from the dropdown and fill in your data')
    }
    // start here tomorrow

    let myList = getCellTextList($('#example'));
    console.log(myList);

    x = 0
    for (var i = 0; i < myList.length; i++) {
        y = parseInt(myList[i]);
        x = x +y;
    }
    console.log(x);








    clearInputs();
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
    })
}






//
function getCellTextList(tableElement) {
      // Create an array
      var textList = [];

      // Iterate over each table row
      tableElement.find('tbody tr').each(function() {
          var row = $(this);
          if (row.children('td').length > 0) {
             textList.push(row.children('td').eq(1).text());
          }
      });
      return textList;
}
