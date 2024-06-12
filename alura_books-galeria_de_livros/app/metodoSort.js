const ordenarPorPrecoBtn = document.getElementById('btnOrdenarPorPreco');
ordenarPorPrecoBtn.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco(){
    let livrosOrdenadosPorPreco = livros.sort((a, b) => a.preco - b.preco);
    exibirLivros(livrosOrdenadosPorPreco);
}