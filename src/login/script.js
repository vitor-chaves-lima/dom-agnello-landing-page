const INPUT_TEST_VALUE = '1234'

var usernameInput =  document.getElementById('username');
var passwordInput = document.getElementById("password")

function login() {
    var username = usernameInput.value;
    var password = passwordInput.value;

    if(username == INPUT_TEST_VALUE && password == INPUT_TEST_VALUE){
        alert('Login finalizado, seja bem-vindo');
    } else {
        alert('Nome de usuário ou senha incorreta. Tente novamente');
    }
}