//codigo que faz o  boton de slide funcionar 01
const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
    'click', 
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').
        appendChild(items[0]);
            
        },
);

$prev.addEventListener(
    'click', 
    () => {
        const items = document.
        querySelectorAll('.item');
        document.querySelector('.slide').
        prepend(items[items.length - 1]);
    },
);

//codigo que faz o  botoes do menu da pagina principal funcionarem 02
const meuBotao = document.getElementById("meuLaele");
const urlDestino = "../html/principal.html";

meuBotao.addEventListener("click", function() {
  window.location.href = urlDestino;
});

const meuBotaoo = document.getElementById("meuLaelee");
const urlDestinoo = "../html/sobre.html";

meuBotaoo.addEventListener("click", function() {
  window.location.href = urlDestinoo;
});

const meu_botao = document.getElementById("meuLa_ele");
const url_Destino = "../html/registrar.html";

meu_botao.addEventListener("click", function() {
  window.location.href = url_Destino;
});
//fim 02

// codigo que faz o botao de rolarem para o topo funcionar 03
const btnTop = document.getElementById("btnTop");

// Configurar o estilo fixo do botão
btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.display = "none"; // Inicialmente oculto


// Mostrar o botão apenas quando o usuário rolar para baixo
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

// Ao clicar, rola suavemente para o topo
btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// fim 03

function mudar() {
    let msg = document.getElementById("mensage");
    let texto = "Olá! Meu nome é Davison Foxx, tenho 18 anos e sou um entusiasta de tecnologia e desenvolvimento web. Atualmente, estou cursando o ensino médio, onde descobri minha paixão por programação e design de sites. Além dos estudos, gosto de explorar novas tecnologias, aprender sobre tendências digitais e trabalhar em projetos pessoais que me desafiam a crescer como desenvolvedor. Estou sempre em busca de oportunidades para aprimorar minhas habilidades e contribuir para a criação de experiências web inovadoras.";
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

/*//codigo que faz o  botoes do menu da pagina principal funcionarem 02
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

const meu_botao = document.getElementById("meuLa_ele");
const url_Destino = "../html/registrar.html";

meu_botao.addEventListener("click", function() {
  window.location.href = url_Destino;
});*/
//fim 02