const TABLE = document.getElementById('table-categories');

let dados = [
    {
        id: 1,
        nome: 'Espumante',
        descricao: 'Desc do espumante',
    },
    {
        id: 2,
        nome: 'Branco',
        descricao: 'Vinho de uvas brancas',
    },
    {
        id: 3,
        nome: 'Verde',
        descricao: 'Vinho de uvas verdes, exclusivamente de Portugal',
    },
    {
        id: 4,
        nome: 'Tinto',
        descricao: 'Feito de uvas roxas',
    },
];


// for (let n = 0; n <= dados.length; n++) {
//     TABLE.innerHTML += `
//         <tr>
//             <td>${dados[n].id}</td>
//             <td>${dados[n].nome}</td>
//             <td>${dados[n].descricao}</td>
//             <td>
//                 <a href="#" class="btn btn-outline-warning btn-sm">
//                     Editar
//                 </a>
//                 <a href="#" class="btn btn-outline-danger btn-sm">
//                     Excluir
//                 </a>
//             </td>
//         </tr>
//     `;
// }




// Orientado Objetos 
// Funcional Elixir, Javascript
//


dados.forEach(addLinha);

function addLinha(categoria) {
    TABLE.innerHTML += `
        <tr>
            <td>${categoria.id}</td>
            <td>${categoria.nome}</td>
            <td>${categoria.descricao}</td>
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
}