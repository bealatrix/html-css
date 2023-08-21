document.addEventListener("DOMContentLoaded", function() {
  const botaoLogin = document.querySelector(".botao-branco");
  const botaoCadastro = document.querySelector(".botao-cinza");
  const telaLogin = document.getElementById("tela-login");
  const telaCadastro = document.getElementById("tela-cadastro");

  botaoLogin.addEventListener("click", function() {
    telaCadastro.style.display = "none";
    telaLogin.style.display = "block";
  });

  botaoCadastro.addEventListener("click", function() {
    telaLogin.style.display = "none";
    telaCadastro.style.display = "block";
  });
});
