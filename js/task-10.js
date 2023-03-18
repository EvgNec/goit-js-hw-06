const colectionsEl = [];
const numberInput = document.querySelector('#controls input');
const createEl = document.querySelector('#controls button[data-create]');
const destroyEl = document.querySelector('#controls button[data-destroy]');
const divEl = document.getElementById('boxes');
let countEl = 0;
const fragment = document.createDocumentFragment();

numberInput.addEventListener('input', (event) => {
    countEl = event.currentTarget.value;
});

createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  for (let i = 0; i < countEl; ++i){
    const addEl = document.createElement('div');
    addEl.style.height = 30 + (10 * i) + 'px';
    addEl.style.width = 30 + (10 * i) + 'px';
    addEl.style.backgroundColor = getRandomHexColor();
  fragment.appendChild(addEl);
};
divEl.appendChild(fragment);
};
  

function destroyBoxes(){
  numberInput.value = 0;
  divEl.innerHTML = "";
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
