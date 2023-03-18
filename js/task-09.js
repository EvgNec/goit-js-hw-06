
const changeEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const textEl = document.querySelector('.color');

changeEl.addEventListener('click', changeElClick);

function changeElClick(event) {
  let backgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = backgroundColor;
  textEl.textContent = backgroundColor;

};



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
