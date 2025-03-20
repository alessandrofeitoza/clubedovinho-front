const TABLE = document.getElementById('table-products');

fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(dados => {
        dados.forEach((product) => {
            TABLE.innerHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td> <img onclick="abrirModal('${product.name}', '${product.image}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${product.image}" width="100px"> </td>
                    <td>${product.quantity}</td>
                    <td>${product.price}</td>
                    <td>
                        <a href="#" class="btn btn-outline-warning btn-sm">
                            Editar
                        </a>
                        <a href="#" onclick="excluir(${product.id})" class="btn btn-outline-danger btn-sm">
                            Excluir
                        </a>
                    </td>
                </tr>
            `;
        });
    });


function excluir(id) {
    if (false === confirm('Confirma ou sem firma?')) {
        return;
    }

    fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });

    location.href = "";
}


function abrirModal(nome, imagem) {
    document.getElementById('modal_produto_nome').innerHTML = nome;
    document.getElementById('modal_produto_body').innerHTML = `
        <img src="${imagem}" width="100%">
    `;
}
