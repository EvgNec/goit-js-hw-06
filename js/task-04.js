let counterValue = 0;

const incrementEl = document.querySelector('#counter button[data-action="increment"]');
const decrementEl = document.querySelector('#counter button[data-action="decrement"]');
const value = document.getElementById('value');

incrementEl.addEventListener('click', increment);
decrementEl.addEventListener('click', decrement);

function increment  () {
   counterValue += 1;
    updateValue();
};
function decrement  () {
   counterValue -= 1;
    updateValue();
};
function updateValue() {
    value.textContent = counterValue;
}

