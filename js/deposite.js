

document.getElementById('btn-deposite').addEventListener('click', function(){
    // get input field value 
    const newDepositeAmmount = getInputFieldValueById('user-deposite');

    // get previous deposite total
    const previousDepositeTotal = getElementValueById('deposite-total');

    // calculate new deposite total
    const currentDepositeTotal = newDepositeAmmount + previousDepositeTotal;

    // set deposite total value
    setTextElementValueById('deposite-total', currentDepositeTotal);

    // get previous balance total
    const previousBalanceTotal = getElementValueById('balance-total');

    // get current balance total
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmmount;

    // set balance total value
    setTextElementValueById('balance-total', currentBalanceTotal);

   
})