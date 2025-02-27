const INPUT_CEP        = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_NUMERO     = document.getElementById('numero');
const INPUT_BAIRRO     = document.getElementById('bairro');
const INPUT_CIDADE     = document.getElementById('cidade');
const INPUT_UF         = document.getElementById('uf');

INPUT_CEP.addEventListener('blur', () => {
    if (INPUT_CEP.value.length !== 8) {
        return;
    }

    let url = `https://viacep.com.br/ws/${INPUT_CEP.value}/json`;

    fetch(url)                    // busca
        .then(res => res.json())  // trata o resultado
        .then(endereco => {       // usa o resultado
            INPUT_LOGRADOURO.value = endereco.logradouro;
            INPUT_BAIRRO.value = endereco.bairro;
            INPUT_CIDADE.value = endereco.localidade;
            INPUT_UF.value = endereco.uf;

            INPUT_NUMERO.focus();
        });
});

