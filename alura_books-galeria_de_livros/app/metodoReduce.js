function calcularValorTotalLivrosDisponiveis(livros){
    //retorna o acumulador somado do preço (em até duas casas decimais) de cada livro individual da lista de livros, a partir da posição 0
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}