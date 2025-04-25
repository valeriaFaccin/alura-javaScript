import { clientService } from "../Service/client-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = event.target.querySelector('[data-nome]').value;
    const email = event.target.querySelector('[data-email]').value;

    await clientService.createClient(name, email);
    window.location.href = '../telas/edicao_concluida.html';

    // clientService.createClient(name, email).then(() => {
    //     window.location.href = '../telas/cadastro_concluido.html';
    // });
});

//browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
//npx json-server --watch db.json
