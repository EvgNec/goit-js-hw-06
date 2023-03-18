const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     if (event.currentTarget.elements.email.value === "")
//         alert("Input login");
//     else if (event.currentTarget.elements.password.value === "")
//         alert("Input passwords");
//     else {
//         elements.email = event.currentTarget.elements.email.value;
//         elements.password = event.currentTarget.elements.password.value;
//     }
// };


function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === "")
        alert("Input login");
    else if (event.currentTarget.elements.password.value === "")
        alert("Input passwords");
    else {
        const formData = new FormData(event.currentTarget);   
         formData.forEach((x, y) => { 
     console.log("name: ", y);
     console.log("value: ", x);        
         }) 
        resetForm();
    }
};

function resetForm() { 
form.reset(); 
}


