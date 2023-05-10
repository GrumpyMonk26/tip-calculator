const buttonEl = document.getElementById('btn');
const billAmountEl = document.getElementById('bill-amount');
const tipAmountEl = document.getElementById('tip-percentage');
const totalEl = document.getElementById('total');
const errorEl = document.querySelector('.total');

// function calculateBill() {
//   const billAmount = Number(billAmountEl.value);
//   const tipAmount = Number(tipAmountEl.value);

//   if (!billAmount || !tipAmount) {
//     errorEl.textContent = 'There has been an error, enter bill and tip amount!';
//     errorEl.style.color = 'red';
//     setTimeout(() => {
//       errorEl.textContent = '';
//     }, 2000);
//     return;
//   } else {
//     const bill = (tipAmount * billAmount) / 100 + billAmount;
//     totalEl.textContent = `£ ${bill}`;
//     errorEl.textContent = 'Total';

//     // Clear inputs after 3 seconds
//     setTimeout(() => {
//       billAmountEl.value = '';
//       tipAmountEl.value = '';
//       totalEl.textContent = '';
//     }, 3000);
//   }
// }

function calculateBill() {
  const billAmount = Number(billAmountEl.value);
  const tipAmount = Number(tipAmountEl.value);

  const bill = (tipAmount * billAmount) / 100 + billAmount;
  totalEl.textContent = bill.toFixed(2);

  // Clear inputs after 3 seconds
  setTimeout(() => {
    billAmountEl.value = '';
    tipAmountEl.value = '';
    totalEl.textContent = '';
  }, 3000);
}

buttonEl.addEventListener('click', calculateBill);
