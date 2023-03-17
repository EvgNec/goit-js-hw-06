const inputSize = document.getElementById("font-size-control");
const sizeText = document.getElementById("text");


inputSize.addEventListener('input',
    (event) => {
sizeText.style.fontSize = event.target.value + 'px';
    }
)