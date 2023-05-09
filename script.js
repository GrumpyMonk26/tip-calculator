const buttonEl = document.getElementById('btn');
let billAmountEl = document.getElementById('bill-amount');
let tipAmountEl = document.getElementById('tip-percentage');
const totalEl = document.getElementById('total');

buttonEl.addEventListener('click', () => {
  billAmountEl = Number(billAmountEl.value);
  tipAmountEl = Number(tipAmountEl.value);
  console.log('clicked');
  console.log(typeof billAmountEl);
  console.log(typeof tipAmountEl);
  bill = (tipAmountEl * billAmountEl) / 100 + billAmountEl;
  console.log(bill);
  totalEl.textContent = `£${bill}`;
});
