console.log("Olá visitante do inspecionar!");

const menorNum = 0;
const maiorNum = 100;
const rodadas = 5;
const numSorteado = sortearNumero();

function sortearNumero() {
    return Math.floor(Math.random() * (maiorNum - menorNum + 1)) + menorNum;
}

const elementoMenorNum = document.getElementById('menor-valor');
elementoMenorNum.innerHTML = menorNum;
const elementoMaiorNum = document.getElementById('maior-valor');
elementoMaiorNum.innerHTML = maiorNum;

console.log('Número Aleatório:', numSorteado);

const divDica = document.querySelector('.dica');
const enviarPalpiteBtn = document.querySelector('.mensagem__button');
const numeroPalpite = document.getElementById('numero');
const avisoRodadas = document.querySelector('.aviso');

let tentativas = 1;
//arrumar a exibição das rodadas
enviarPalpiteBtn.onclick = function () {
    avisoRodadas.textContent = `Rodadas: ${rodadas - tentativas}`;
    if (tentativas < rodadas) {
        tentativas++;
        if (numeroPalpite.value == numSorteado) {
            document.body.innerHTML = `
                <h1 class="titulo">Você acertou!</h1>
                <h3>O número secreto era ${numSorteado}</h3>
                <button id="jogar-novamente" class="mensagem__button" type="submit">Jogar Novamente</button>
            `;
        } else if (numeroPalpite.value < numSorteado && numeroPalpite.value > menorNum) {
            avisoRodadas.textContent = `Rodadas: ${rodadas - tentativas}`;
            divDica.innerHTML = `
                <h3>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></h3>
            `;
        } else if (numeroPalpite.value > numSorteado && numeroPalpite.value < maiorNum) {
            avisoRodadas.textContent = `Rodadas: ${rodadas - tentativas}`;
            divDica.innerHTML = `
                <h3>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></h3>
            `;
        } else {
            avisoRodadas.textContent = `Rodadas: ${rodadas - tentativas}`;
            divDica.innerHTML = `
                <h3>Entrada Inválida</h3>
            `;
        }
    } else {
        document.body.innerHTML = `
            <h1 class="titulo">Game Over</h1>
            <h3>O número secreto era ${numSorteado}</h3>
            <button id="jogar-novamente" class="mensagem__button" type="submit">Jogar Novamente</button>
        `;
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
});
