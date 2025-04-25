/*document.addEventListener('DOMContentLoaded', () => {
    listClients().then(data => {
        data.forEach(element => {
            tableClients.appendChild(createNewLine(element.name, element.email));
        });
    });
});

function createNewLine(name, email) {
    const newLineClient = document.createElement('tr');

    newLineClient.innerHTML = `
        <td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `;

    return newLineClient;
}

const tableClients = document.querySelector('[data-tabela]');

function listClients() {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();

        http.open('GET', 'http://localhost:3000/profile');
        http.onload = () => {
            if(http.status >= 400) {
                reject(JSON.parse(http.response));
            }
            resolve(JSON.parse(http.response));
        }
        http.send();
    });

    return promise;
}
*/