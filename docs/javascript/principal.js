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