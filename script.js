document.addEventListener("DOMContentLoaded", function () {
    const buttonEntrar = document.getElementById("buttonEntrar");

    buttonEntrar.addEventListener("click", function () {
        const login = document.getElementById("login").value;
        const senha = document.getElementById("senha").value;

        if (login === "" || senha === "") {
            alert("Erro! Preencha todos os campos para entrar.");
        } else {
            const storedEmail = localStorage.getItem("email");
            const storedSenha = localStorage.getItem("senha");

            if (login === storedEmail && senha === storedSenha) {
                alert("Login efetuado com sucesso!");
            } else {
                alert("Erro! Verifique suas credenciais de login ou Faça seu cadastro!");
            }
        }
    });
});