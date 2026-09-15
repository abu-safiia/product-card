const formSubscribe = document.getElementById('form-subscribe');
const subscribeEmailInput = document.getElementById('email-subscribe');

formSubscribe.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formSubscribe.checkValidity()) {
        formSubscribe.reportValidity();
        return;
    }   
    console.log({ email: subscribeEmailInput.value });
    formSubscribe.reset();
});

//модальное окно регистрации
const registrationButton = document.getElementById('registration-button');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const overlay = modal.querySelector('.overlay');
const registrationForm = document.getElementById('registration-form');
const passwordInput = document.getElementById('password');
const passwordRepeatInput = document.getElementById('password-repeat');

let user;

function openModal() {
    modal.classList.add('modal-showed');
}
function closeModal() {
    modal.classList.remove('modal-showed');
}

registrationButton.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!registrationForm.checkValidity()) {
        registrationForm.reportValidity();
        return;
    }
    if (passwordInput.value !== passwordRepeatInput.value) {
        alert('Пароли не совпадают');
        return;
    }

    const formData = new FormData(registrationForm);

    user = {
        ...Object.fromEntries(formData),
        createdOn: new Date(),
    };

    console.log(user);
    registrationForm.reset();
    closeModal();
});