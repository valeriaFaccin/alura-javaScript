import { clientService } from "../Service/client-service.js";

function createNewLine(name, email, id) {
    const newLineClient = document.createElement('tr');

    newLineClient.innerHTML = `
        <td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `;

    newLineClient.dataset.id = id;
    return newLineClient;
}

const tableClients = document.querySelector('[data-tabela]');

tableClients.addEventListener('click', async (event) => {
    let deleteBtn = event.target.className === 'botao-simples botao-simples--excluir';

    if(deleteBtn) {
        const clientLine = event.target.closest('[data-id]');
        let id = clientLine.dataset.id;
        await clientService.removeClient(id);
        clientLine.remove();
        /*clientService.removeClient(id).then(() => {
            clientLine.remove();
        });*/
    }
});

async function rendering() {
    let promise = clientService.listClients();
    let result = await promise;
    //const ablabla = await clientService.listClients()
    result.forEach(element => {
        tableClients.appendChild(createNewLine(element.name, element.email, element.id));
    });
}

rendering().then(); // escuta uma coisa meu filho, não tem then pq eu já estou esperando a resposta da promise na função, sabe o que significa o await??

// clientService.listClients().then(data => {
//     data.forEach(element => {
//         tableClients.appendChild(createNewLine(element.name, element.email, element.id));
//     });
// });
