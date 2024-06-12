function aplicarDesconto(livros) {
    const desconto = 0.2;
    livrosDesconto = livros.map (livro => {
        // '...' irá trazer todos os elementos de livro
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
    return livrosDesconto;
}