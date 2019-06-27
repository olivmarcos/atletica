var usuarios = [
    {"login": "daniel", "senha": "daniel"},
    {"login": "marcos", "senha": "marcos"},
    {"login": "anamelia", "senha": "anamelia"},
];

function Login() {
    var usuario = document.getElementsByName('usuario')[0].value.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "adm.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}