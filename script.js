function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == 'caio' && senha == '1234'){
        alert('Você foi logado');
    } else {
        alert('usuário ou senha incorretos. Digite novamente');
    }
}