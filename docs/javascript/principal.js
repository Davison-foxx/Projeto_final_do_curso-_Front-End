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

//codigo que faz o  botoes do menu funcionarem 02
const meuBotao = document.getElementById("meuLaele");
const urlDestino = "../html/login.html";

meuBotao.addEventListener("click", function() {
  window.location.href = urlDestino;
});

const meuBotaoo = document.getElementById("meuLaelee");
const urlDestinoo = "../html/registrar.html";

meuBotaoo.addEventListener("click", function() {
  window.location.href = urlDestinoo;
});

const meuLa_ele = document.getElementById("meuLa_ele");
const url_Destino = "../html/registrar.html";

meuLa_ele.addEventListener("click", function() {
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