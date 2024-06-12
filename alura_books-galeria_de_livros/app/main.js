let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarNomesApi();

async function getBuscarNomesApi() {
    const res = await fetch(endPointApi);
    livros = await res.json();
    let livrosDesconto = aplicarDesconto(livros);
    exibirLivros(livrosDesconto);
}
