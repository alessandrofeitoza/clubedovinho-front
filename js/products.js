const TABLE = document.getElementById('table-products');

let dados = [
    {
        id: 1,
        nome: 'Quinta do Morgado',
        categoria: 'Vinho Tinto Suave',
        imagem: 'https://cdn.dooca.store/197/products/vinho-quinta-do-morgado-tinto-suave-750-ml-rotulo_640x640+fill_ffffff.jpg',
        quantidade: 10,
        valor: 10.90,
    },
    {
        id: 2,
        nome: 'Vale Dom Bento',
        categoria: 'Vinho Tinto Suave',
        imagem: 'https://cdn.awsli.com.br/800x800/1958/1958204/produto/203245775/screenshot_20230223_190651_instagram-pamtvr.jpg',
        quantidade: 24,
        valor: 8.90,
    },
    {
        id: 3,
        nome: 'Salton',
        categoria: 'Espumante',
        imagem: 'https://cdn.dooca.store/102310/products/5ijrjngk1vbcyx1rlvjlbnk6tddgcxir515l_620x620+fill_ffffff.jpg?v=1676290611&webp=0',
        quantidade: 12,
        valor: 42.50,
    },
];

dados.forEach((product) => {
    TABLE.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td>${product.nome}</td>
            <td>${product.categoria}</td>
            <td> <img onclick="abrirModal('${product.nome}', '${product.imagem}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${product.imagem}" width="100px"> </td>
            <td>${product.quantidade}</td>
            <td>${product.valor}</td>
            <td>
                <a href="#" class="btn btn-outline-warning btn-sm">
                    Editar
                </a>
                <a href="#" class="btn btn-outline-danger btn-sm">
                    Excluir
                </a>
            </td>
        </tr>
    `;
});

function abrirModal(nome, imagem) {
    document.getElementById('modal_produto_nome').innerHTML = nome;
    document.getElementById('modal_produto_body').innerHTML = `
        <img src="${imagem}" width="100%">
    `;
}
