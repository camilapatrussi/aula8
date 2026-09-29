const ventilador = document.getElementById("ventilador");
const botao = document.getElementById("botao");

const velocidade1 = document.getElementById("velocidade1");
const velocidade2 = document.getElementById("velocidade2");
const velocidade3 = document.getElementById("velocidade3");


botao.addEventListener("click", function(){

    ventilador.classList.toggle("ligado");

    if (ventilador.classList.contains("ligado")){
        botao.textContent = "Desligar";
    } else {
        botao.textContent = "Ligar";
    }

});


velocidade1.addEventListener("click", function(){

    ventilador.style.setProperty("--velocidade", "1s");

});


velocidade2.addEventListener("click", function(){

    ventilador.style.setProperty("--velocidade", "2s");

});


velocidade3.addEventListener("click", function(){

    ventilador.style.setProperty("--velocidade", "3s");

});