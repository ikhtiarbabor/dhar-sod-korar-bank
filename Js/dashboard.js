//deposit part
document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountValue = depositAmount.value;
    if (depositAmountValue == '') {
      alert('Enter Any  Amount');
    } else if (parseFloat(depositAmountValue) <= 0) {
      alert('Enter correct  Amount');
    } else {
      const depositShowAmountElement = document.getElementById(
        'deposit-show-amount'
      );
      const depositShowAmountValue = depositShowAmountElement.innerText;
      const currentTotalValue =
        parseFloat(depositShowAmountValue) + parseFloat(depositAmountValue);
      depositShowAmountElement.innerText = currentTotalValue;
      const balanceStr = document.getElementById('main-balance');
      balanceStr.innerText =
        parseFloat(balanceStr.innerText) + parseFloat(depositAmountValue);
      depositAmount.value = '';
      const transitionStr = document.getElementById('comment');
      const historyTransitionElement = document.createElement('h1');
      historyTransitionElement.style.padding = '10px';
      historyTransitionElement.style.backgroundColor = ' #16a34a';
      historyTransitionElement.style.color = ' white';
      historyTransitionElement.style.marginTop = ' 15px';
      historyTransitionElement.innerText = 'You Deposit Amount';
      transitionStr.appendChild(historyTransitionElement);
      const transitionValue = document.getElementById(
        'deposit-transition-history'
      );
      const historyTransition = document.createElement('h1');
      historyTransition.style.padding = '10px';
      historyTransition.style.backgroundColor = ' #16a34a';
      historyTransition.style.color = ' white';
      historyTransition.style.marginTop = ' 15px';
      historyTransition.innerText = depositAmountValue + ' $';
      transitionValue.appendChild(historyTransition);
    }
  });
// withdraw part
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw-field');
  const withdrawFieldValue = withdrawField.value;
  const transitionComment = document.getElementById('comment');
  const depositTransitionHistory = document.getElementById(
    'deposit-transition-history'
  );

  if (withdrawFieldValue === '') {
    withdrawFieldValue = 0;
  } else if (parseFloat(withdrawFieldValue) <= 0) {
    alert('Enter Correct amount');
  } else {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const mainBalance = document.getElementById('main-balance');
    withdrawAmount.innerText =
      parseFloat(withdrawAmount.innerText) + parseFloat(withdrawField.value);
    const totalBalance =
      parseFloat(mainBalance.innerText) - parseFloat(withdrawField.value);
    mainBalance.innerText = totalBalance;
    withdrawField.value = '';
    const WithdrawHistoryTransitionElement = document.createElement('h1');
    WithdrawHistoryTransitionElement.innerText = 'Your Withdraw Amount ';
    WithdrawHistoryTransitionElement.style.padding = '10px';
    WithdrawHistoryTransitionElement.style.backgroundColor = ' #ee6b6e';
    WithdrawHistoryTransitionElement.style.color = ' white';
    WithdrawHistoryTransitionElement.style.marginTop = ' 15px';
    transitionComment.appendChild(WithdrawHistoryTransitionElement);

    const withdrawHistoryTransition = document.createElement('h1');
    withdrawHistoryTransition.style.padding = '10px';
    withdrawHistoryTransition.style.backgroundColor = ' #ee6b6e';
    withdrawHistoryTransition.style.color = ' white';
    withdrawHistoryTransition.style.marginTop = ' 15px';
    withdrawHistoryTransition.innerText = withdrawFieldValue + ' $';
    depositTransitionHistory.appendChild(withdrawHistoryTransition);
  }
});
