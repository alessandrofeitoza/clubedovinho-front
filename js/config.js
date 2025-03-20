const SPAN_QUANTIDADE = document.getElementById('quantidade_modulos');

let qtd = 0; 

function alterarQuantidade(evento) {
    if (evento.checked === true) {
        qtd += 1;
    } else {
        qtd -= 1;
    }

    SPAN_QUANTIDADE.innerHTML = qtd;
}

function habilitarDarkmode(event) {
    if (event.checked === false) {
        localStorage.setItem('darkmode', 'nao');
        location.href = "";
        return;
    }

    localStorage.setItem('darkmode', 'sim');

    document.getElementsByTagName("head")[0].innerHTML += `
        <link rel="stylesheet" href="../css/darkmode.css">
    `;
}


if (localStorage.getItem('darkmode') === 'sim') {
    document.getElementById('darkmode').checked = true; 
}