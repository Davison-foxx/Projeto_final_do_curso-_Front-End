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

function mudar() {
    let msg = document.getElementById("mensage");
    let texto = "Olá! Meu nome é Davison Foxx, tenho 25 anos e sou um entusiasta de tecnologia e desenvolvimento web. Atualmente, estou trabalhando em outra área, onde descobri minha paixão por programação e design de sites. Gosto de explorar novas tecnologias, aprender sobre tendências digitais e trabalhar em projetos pessoais que me desafiam a crescer como desenvolvedor. Estou sempre em busca de oportunidades para aprimorar minhas habilidades e contribuir para a criação de experiências web inovadoras.";
    let info = document.getElementById("info")
    let btnInfo = document.querySelector(".bot1")


if (msg.innerText === "") {
        msg.innerText = texto;
        msg.style.color="black"
        //info.style.backgroundImage = "url(../javascript/image/image.jpg)"
        btnInfo.style.border = "none"
        btnInfo.style.color = "black"
        

    } else {
        //info.style.background = "#fff";
        msg.innerText = "";
        
    }
}