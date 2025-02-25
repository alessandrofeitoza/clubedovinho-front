const TABLE = document.getElementById('table-customers');

fetch('https://feitoza.tec.br/api/index.php')
    .then(res => res.json())
    .then(json => carregarTabela(json));

function carregarTabela(clientes) {
    clientes.forEach(cada => {
        TABLE.innerHTML += `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.nome}</td>
                <td>${cada.email}</td>
                <td>${cada.telefone}</td>
                <td><img class="rounded" src="${cada.foto}" width="50px"></td>

                <td>${cada.data_cadastro}</td>
                <td>${cada.data_ultimo_pedido}</td>

                <td>
                    <button>Editar</button>

                    <button>Excluir</button>
                </td>
            </tr>
        `;
    });
}