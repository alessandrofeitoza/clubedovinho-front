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
const SPAN_CVV = document.getElementById('resultado_cvv');

const SPAN_ANO = document.getElementById('resultado_ano');
const SPAN_MES = document.getElementById('resultado_mes');


function removerUltimoDigito(numero) {
    return numero.substr(0, numero.length - 1);
}

function preencherNumero() {
    let digitos = INPUT_NUMERO.value; 

    if (isNaN(digitos)) {
        //substituindo tudo que não for numero, por nada
        digitos = digitos.replace(/\D/g, ''); 
    }

    //isso aqui adiciona um espaço vazio a cada 04 digitos
    digitos = digitos.replace(/(\d{4})(?=\d)/g, '$1 ');

    INPUT_NUMERO.value = digitos; 
    SPAN_NUMERO.innerHTML = digitos; 

    alterarBandeira();
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

function alterarBandeira() {
    // esse IF serve apenas para melhorar a performance da aplicacao
    if (INPUT_NUMERO.value.length > 1) {
        return;
    } 

    // TODO: melhorar esse codigo pra evitar ficar muito grande
    document.getElementById('bandeira_visa').style.display = 'none';
    document.getElementById('bandeira_mastercard').style.display = 'none';

    if (INPUT_NUMERO.value === '4') {
        document.getElementById('bandeira_visa').style.display = 'block';
    } 

    if (INPUT_NUMERO.value === '5') {
        document.getElementById('bandeira_mastercard').style.display = 'block';
    }
}

function preencherCVV() {
    SPAN_CVV.innerHTML = INPUT_CVV.value;
}


function mostrarFrente() {
    document.getElementById('cartao_frente').classList.add('animate__slideInRight');

    document.getElementById('cartao_frente').style.display = 'block';
    document.getElementById('cartao_verso').style.display = 'none';
}

function mostrarVerso() {
    document.getElementById('cartao_verso').classList.add('animate__slideInRight');

    document.getElementById('cartao_verso').style.display = 'block';
    document.getElementById('cartao_frente').style.display = 'none';
}