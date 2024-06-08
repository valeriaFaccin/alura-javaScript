console.log("Olá visitante do inspecionar!");

const nomes = ['Lygia Fagundes Telles', 'Fiódor Dostoiévski', 'Maria José Dupré', 'Clarice Lispector', 'Graciliano Ramos', 'Machado de Assis', 'Liev Tolstoi', 'Ray Bradbury', 'Erico Verissimo', 'Robert Stevenson', 'Rachel de Queiroz'];

const livro = ['Ciranda de Pedra', 'Noites Brancas', 'Éramos Seis', 'Hora da Estrela', 'Vidas Secas', 'Memórias Póstumas de Brás Cubas', 'Ana Karenina', 'Fahrenheit 451', 'Ana Terra', 'O médico e o monstro', 'O Quinze'];

const nomesDica = [
    'Pois é preciso amar o inútil porque no inútil está a Beleza. No inútil também está Deus.',
    'Há quem diga que ainda terei muito tempo para dormir depois da morte, mas quem disse que não estou vivendo enquanto sonho?',
    'Ele não me pertencia mais, pertencia ao mundo que o reclamava',
    'Que se há de fazer com a verdade de que todo mundo é um pouco triste e um pouco só',
    'Tinha o coração grosso, queria responsabilizar alguém pela sua desgraça',
    'Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria',
    'Todas as famílias felizes se parecem, cada família infeliz é infeliz a sua maneira',
    'Talvez os livros possam nos tirar um pouco dessas trevas. Ao menos poderiam nos impedir de cometer os mesmo malditos erros malucos',
    'Sempre que me acontece alguma coisa importante, está ventando',
    'Essa breve condescendência com a maldade acabou destruindo o equilíbrio da minha alma',
    'E se não fosse uma raiz de mucunã arrancada aqui e além, ou alguma batata-branca que a seca ensina a comer, teriam ficado todos pelo caminho'
];
const nomeSorteado = sortearNome();

function sortearNome() {
    return parseInt(Math.random() * (nomesDica.length));
}

const descricaoDica = document.getElementById('descricao__personagem');

descricaoDica.textContent = `
    ${nomesDica[nomeSorteado]}
`;

console.log('Nome aleatório:', nomes[nomeSorteado]);

const divDica = document.querySelector('.dica');
const enviarPalpiteBtn = document.querySelector('.mensagem__button');
const nomePalpite = document.getElementById('numero');

enviarPalpiteBtn.onclick = function () {
    if(nomePalpite.value == nomes[nomeSorteado]){
        document.body.innerHTML = `
            <h1 class="titulo">Você acertou!</h1>
            <h3>O autor era ${nomes[nomeSorteado]}, frase do livro ${livro}</h3>
            <button id="jogar-novamente" class="mensagem__button" type="submit">Jogar Novamente</button>
        `;
    } else {
        divDica.innerHTML = `
            <h3>Errado, tente novamente!</h3>
            <p class="aviso">Ou confira a soletração do nome kkk</p>
        `;
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});
