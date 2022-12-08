const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (!email || !password) {
        alert('Всі поля повинні бути заповнені!');
    }

    const formData = {
        email,
        password
    };
    console.log(formData);

    form.reset(event);
}




    

