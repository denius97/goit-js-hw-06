const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const valueCounterEl = document.querySelector('#value');

let counterValue = 0;

decrementEl.addEventListener('click', () => {
  counterValue -= 1;
  valueCounterEl.textContent = counterValue;
});
incrementEl.addEventListener('click', () => {
  counterValue += 1;
  valueCounterEl.textContent = counterValue;
});
