const formElement = document.getElementById("form_id");
formElement.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formElement);
    console.log(Object.fromEntries(formData))
})