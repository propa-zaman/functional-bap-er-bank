document.getElementById('btn-withdraw').addEventListener('click', function(){

    // get input field value 
    const newWithdrawAmmount = getInputFieldValueById('user-withdraw');

    // get previous withdraw total
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    // calculate new withdraw  total
    const currentWithdrawTotal = newWithdrawAmmount + previousWithdrawTotal;

    // set withdraw  total value
    setTextElementValueById('withdraw-total', currentWithdrawTotal);

    // get previous balance total
    const previousBalanceTotal = getElementValueById('balance-total');

    // get current balance total
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmmount;

    // set balance total value
    setTextElementValueById('balance-total', currentBalanceTotal);
})