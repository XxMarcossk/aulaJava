//Criando Função para calcular IMC
function calcImc() {
    /* Declarando variaveis*/
    let altura = document.getElementById("al").value / 100;
    let peso = document.getElementById("ps").value;

    altura = parseFloat(altura);
    peso = parseFloat(peso);

    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    let imc = peso / (altura * altura);
    window.alert("Seu IMC é: " + imc.toFixed(2));
}
function alternarTemas() {
    const corpo = document.body;
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}