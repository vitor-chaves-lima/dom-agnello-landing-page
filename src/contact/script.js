const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function submitForm() {
    let nameValue = nameInput.value;
    let phoneValue = phoneInput.value;
    let emailValue = emailInput.value;
    let messageValue = messageInput.value;

    const values = {
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        message: messageValue
    }

    console.log(values)

    if (nameValue === '' || phoneValue === '' || emailValue === '' || messageValue === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    alert('Mensagem enviada com sucesso!');
}