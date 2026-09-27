import { Modal } from './Modal.js';
import { Form } from './Form.js';

const subscribeForm = new Form('form-subscribe');

subscribeForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!subscribeForm.isValid()) {
        subscribeForm.form.reportValidity();
        return;
    }
    console.log(subscribeForm.getValues());
    subscribeForm.reset();
});

//модальное окно регистрации
const registrationModal = new Modal('modal');
const registrationButton = document.getElementById('registration-button');
const overlay = registrationModal.modal.querySelector('.overlay');
const registrationFormObj = new Form('registration-form');
const passwordInput = document.getElementById('password');
const passwordRepeatInput = document.getElementById('password-repeat');

let user;

registrationButton.addEventListener('click', () => registrationModal.open());
overlay.addEventListener('click', () => registrationModal.close());

registrationFormObj.form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!registrationFormObj.isValid()) {
        registrationFormObj.form.reportValidity();
        return;
    }
    if (passwordInput.value !== passwordRepeatInput.value) {
        alert('Пароли не совпадают');
        return;
    }

    user = {
        ...registrationFormObj.getValues(),
        createdOn: new Date(),
    };

    console.log(user);
    registrationFormObj.reset();
    registrationModal.close();
});