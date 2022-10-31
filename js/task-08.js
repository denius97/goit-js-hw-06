const loginFormEl = document.querySelector('.login-form');


loginFormEl.addEventListener('submit', evt => {
    evt.preventDefault();
    const { elements: {
        email,
        password, } } = evt.currentTarget;
    
        if (!email.value || !password.value) {
        alert('Потрібно заповнити всі поля вводу')
        return;
        }
    
    const values = {
        email: email.value,
        password: password.value,
    };
    console.log(values)

evt.currentTarget.reset()
});
