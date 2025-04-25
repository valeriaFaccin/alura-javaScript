async function listClients() {
    return fetch(`http://localhost:3000/profile`).then(response => {
        if(!response.ok) {
            throw new Error('Não foi possível listar Clientes');
        }
        response.json()
    });
}

function createClient(name, email) {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(response => {
        return response.body
    });
}

function removeClient(id) {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    });
}

function clientDescription(id) {
    return fetch(`http://localhost:3000/profile/${id}`).then(response => response.json());
}

function updateClient(id, name, email) {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(response => {
        return response.body;
    });
}

export const clientService = {
    listClients,
    createClient,
    removeClient,
    clientDescription,
    updateClient
}
