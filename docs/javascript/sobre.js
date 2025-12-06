//codigo que faz o  botoes do menu da pagina principal funcionarem 02
const meuBot = document.getElementById("lanele");
const urlD = "../html/principal.html";

meuBot.addEventListener("click", function() {
  window.location.href = urlD;
});

const meuBott = document.getElementById("lanelee");
const urlDe = "../html/sobre.html";

meuBott.addEventListener("click", function() {
  window.location.href = urlDe;
});

/*const meu_botao = document.getElementById("meuLa_ele");
const url_Destino = "../html/registrar.html";

meu_botao.addEventListener("click", function() {
  window.location.href = url_Destino;
});*/
//fim 02