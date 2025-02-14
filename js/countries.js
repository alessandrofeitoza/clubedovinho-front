const TABLE = document.getElementById('table-countries');

let dados = [
    {
        id: 42,
        bandeira: '🇧🇷',
        nome: 'Brasil',
    },
    {
        id: 56,
        bandeira: '🇦🇷',
        nome: 'Argentina',
    },
    {
        id: 57,
        bandeira: '🇦🇪',
        nome: 'Emirados Arabes',
    },
    {
        id: 81,
        bandeira: '🇺🇾',
        nome: 'Uruguai',
    },
];

dados.forEach((country) => {
    TABLE.innerHTML += `
        <tr>
            <td>${country.id}</td>
            <td>${country.bandeira} ${country.nome}</td>
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

