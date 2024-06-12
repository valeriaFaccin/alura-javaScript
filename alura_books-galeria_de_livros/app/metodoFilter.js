//seleciona todos os botões do html
const buttons = document.querySelectorAll('.btn');
//para cada um adiciona um evento 'click'
buttons.forEach((btn) => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    //seleciona o botão clicado pelo seu id
    const elementoBtn = document.getElementById(this.id);
    //passa o valor do botão clicado para a variável categoria
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivros(livrosFiltrados);
    if(categoria == 'disponivel'){
        let valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveis(valorTotal);
    }
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {
    valorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;
}

function filtrarPorCategoria(categoria) {
    //retorna a lista de livros pertencentes a mesma categoria
    return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    //retorna a lista de livros cuja quantidade é maior de 0
    return livros.filter(livro => livro.quantidade > 0);
}
