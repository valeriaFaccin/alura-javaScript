function verificaValorValidoChute (chute){
    const numero =+ chute;

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML = `
            <div>Valor inválido</div>
        `;
        return;
    }

    if(numeroValorMaiorMenorRange(numero)){
        elementoChute.innerHTML = `
            <div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>
        `;
        return;
    }

    //caso o chute seja o número aleatório
    if(numero === numeroAleatorio){
        //altera o html da página para exibir a mensagem de vitória
        document.body.innerHTML = `
            <h2 class="titulo">Você acertou!</h2>
            <h3 class="subtitulo">O número secreto era ${numeroAleatorio}</h3>
            <button id="jogar-novamente" class="jogar-novamente-btn">Jogar Novamente</button>
        `;
        //se não exibe a dica se o chute é maior ou menor que o número aleatório
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
   
}

//verifica se a palavra reconhecida é um número
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

//verifica se o número está entre os valores para adivinhar do jogo
function numeroValorMaiorMenorRange(numero) {
    return numero > maiorValor || numero < menorValor;
}

//reinicia a tela quando clicar no botão
document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});