function armazenarCredenciais(email, senha) {
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
}

document.addEventListener("DOMContentLoaded", function () {
    const buttonCadastro = document.getElementById("buttonCadastro");

    buttonCadastro.addEventListener("click", function () {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senhaCadastro = document.getElementById("senhaCadastro").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        if (nome === "" || email === "" || senhaCadastro === "" || confirmarSenha === "") {
            alert("Erro! Preencha todos os campos para se cadastrar.");
        } else if (senhaCadastro === confirmarSenha) {
            armazenarCredenciais(email, senhaCadastro);
            alert("Cadastro efetuado com sucesso!");
        } else {
            alert("Erro! As senhas não coincidem. Verifique seu cadastro.");
        }
    });
});