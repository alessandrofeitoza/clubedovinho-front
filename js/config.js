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
