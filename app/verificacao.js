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

    if(numero === numeroAleatorio){
        document.body.innerHTML = `
            <h2 class="titulo">Você acertou!</h2>
            <h3 class="subtitulo">O número secreto era ${numeroAleatorio}</h3>
            <button id="jogar-novamente" class="jogar-novamente-btn">Jogar Novamente</button>
        `;
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

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroValorMaiorMenorRange(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});