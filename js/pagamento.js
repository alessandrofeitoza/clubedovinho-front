const INPUT_NUMERO = document.getElementById('card_numero');
const INPUT_CVV = document.getElementById('card_cvv');
const INPUT_TITULAR = document.getElementById('card_titular');
const SELECT_MES = document.getElementById('card_mes');
const SELECT_ANO = document.getElementById('card_ano');

let hoje = new Date();
let anoFim = hoje.getFullYear() + 10;

for (let ano = hoje.getFullYear(); ano <= anoFim; ano++) {
    SELECT_ANO.innerHTML += `<option>${ano}</option>`;
}

const MESES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];

for (let mes = 0; mes <= 11; mes++) {
    SELECT_MES.innerHTML += `<option>${MESES[mes]}</option>`;
}

const SPAN_NUMERO = document.getElementById('resultado_numero');
const SPAN_TITULAR = document.getElementById('resultado_titular');

const SPAN_ANO = document.getElementById('resultado_ano');
const SPAN_MES = document.getElementById('resultado_mes');


function preencherNumero() {
    SPAN_NUMERO.innerHTML = INPUT_NUMERO.value;
}

function preencherTitular() {
    SPAN_TITULAR.innerHTML = INPUT_TITULAR.value;
}

function selecionarAno() {
    SPAN_ANO.innerHTML = SELECT_ANO.value
}

function selecionarMes() {
    let m = SELECT_MES.selectedIndex;

    if (m < 10) {
        SPAN_MES.innerHTML = "0"+m;
    } else {
        SPAN_MES.innerHTML = m;
    }
}