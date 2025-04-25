import { clientService } from "../Service/client-service.js";

// async function updates() {
//     const pageUrl = new URL(window.location);
//     const id = pageUrl.searchParams.get('id');
//     console.log(pageUrl, id);
//     const inputName = document.querySelector('[data-nome]');
//     const inputEmail = document.querySelector('[data-email]');
//     console.log(inputName.value, inputEmail.value);
//     console.log(inputName, inputEmail);
//
//     const data = await clientService.clientDescription(id);
//     inputName.value = data.name;
//     inputEmail.value = data.email;
//
//     // clientService.clientDescription(id).then((data) => {
//     //     inputName.value = data.name;
//     //     inputEmail.value = data.email;
//     // });
//
//     const form = document.querySelector('[data-form]');
//
//     form.addEventListener('submit', async (event) => {
//         event.preventDefault();
//
//         await clientService.updateClient(id, inputName, inputEmail);
//         window.location.href = '../telas/edicao_concluida.html';
//         // clientService.updateClient(id, inputName.value, inputEmail.value).then(() => {
//         //     window.location.href = '../telas/edicao_concluida.html';
//         // });
//     });
// }



( async() => {
    const pageUrl = new URL(window.location);
    const id = pageUrl.searchParams.get('id');
    console.log(id);

    const inputName = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');
    console.log(inputName.value, inputEmail.value);

    const data = await clientService.clientDescription(id);
    inputName.value = data.name;
    inputEmail.value = data.email;
    console.log(inputName.value, inputEmail.value);

    const form = document.querySelector('[data-form]');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        await clientService.updateClient(id, inputName, inputEmail);
        window.location.href = '../telas/edicao_concluida.html';
    });
} )()
