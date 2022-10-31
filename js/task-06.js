const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validation);

function validation(evt) {
    if (evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)) {
       
        if (evt.currentTarget.classList.contains('invalid')) {
            evt.currentTarget.classList.replace('invalid', 'valid'); 
            return;
        };
        evt.currentTarget.classList.add('valid');
        return;
    }
    if (evt.currentTarget.classList.contains('valid')) {
            evt.currentTarget.classList.replace('valid', 'invalid'); 
        return;
    };
        evt.currentTarget.classList.add('invalid');
 }; 