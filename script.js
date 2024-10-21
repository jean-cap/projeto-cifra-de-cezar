const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const seletor = document.getElementById("deslocamento");
const texto = document.getElementById("para-criptografar");
const botao = document.getElementById("botao");
const resposta = document.getElementById("resposta");

alfabeto.forEach((item, index) => {
    seletor.innerHTML += `<option value="${index}">${item}</option>`;
});

function letraPorIndice(indice) {
    let indiceFinal;
    if (indice >= 0) {
        indiceFinal = indice % alfabeto.length;
    } else {
        indiceFinal = alfabeto.length + indice % alfabeto.length;
    }
    return alfabeto[indiceFinal];
}

function cifrar(texto, deslocamento) {
    let textoMaiusculo = texto.toUpperCase().split("");
    let textoCriptografado = [];

    for (let i = 0; i < textoMaiusculo.length; i++) {
        let indiceDaLetra = alfabeto.indexOf(textoMaiusculo[i])
        if (indiceDaLetra !== -1) {
            textoCriptografado.push(letraPorIndice(indiceDaLetra + deslocamento));
        } else {
            textoCriptografado.push(textoMaiusculo[i]);
        }
    }

    return textoCriptografado.join("");
}

botao.addEventListener("click", () => {
    let textoParaCriptografar = texto.value;
    let deslocamento = +seletor.value;

    resposta.innerHTML = cifrar(textoParaCriptografar, deslocamento);
    resposta.classList.remove("invisivel");
});