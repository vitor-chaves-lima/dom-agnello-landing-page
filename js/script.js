document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    console.log('nome: ',name,'telefone:', phone,'email: ', email,"menssagem: ", message);

    if (name === '' || phone === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    alert('Mensagem enviada com sucesso!');
});