const elementosLivros = document.getElementById('livros');
const valorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivros(livros) {
    elementosLivros.innerHTML = '';
    valorTotalLivrosDisponiveis.innerHTML = '';
    //para cada livro individual da lista livros
    livros.forEach(livro => {
        //verifica de a quantidade de exemplares do livro é maior que 0, se for exibe como disponível, se não for exibe com nova classe indisponível
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagem' : 'livro__imagem indisponivel';
        elementosLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
                <h2 class="livro__titulo">${livro.titulo}</h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `;
    });
}
