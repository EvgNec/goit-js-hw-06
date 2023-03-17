const textInput = document.getElementById('validation-input');

textInput.addEventListener('blur', (event) => {
    if (event.target.value.length === ~~textInput.getAttribute("data-length")) {
        textInput.classList.add('valid');        
        textInput.classList.remove('invalid');
    }
    else {
        textInput.classList.add('invalid');
                textInput.classList.remove('valid');
    }
}
);
