const toggleEL = document.querySelector('.slider');
const priceChkBoxEL = document.getElementById('price-chbox');
const priceArr = document.querySelectorAll('.price');
const monthlyArr = ['19.99', '24.99', '39.99'];
const annualArr = ['199.99', '249.99', '399.99'];

priceChkBoxEL.checked = true;
toggleEL.addEventListener('click', priceSwitch);

function priceSwitch() {
  if (!priceChkBoxEL.checked) {
    priceArr.forEach((offer, idx) => {
      offer.textContent = monthlyArr[idx];
    });
  } else {
    priceArr.forEach((offer, idx) => {
      offer.textContent = annualArr[idx];
    });
  }
};