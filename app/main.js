const menorValor = 1;
const maiorValor = 1000;
const numeroAleatorio = gerarNumAleatorio();

function gerarNumAleatorio() {
    //Math.random() = retorna um número float aleatório
    //parseInt converte para o inteiro mais próximo
    return parseInt(Math.random() * (maiorValor + 1));
}

console.log('Número aleatório: ', numeroAleatorio);

//seleciona os elementos html para menor e maior valor e imprime seus valores na tela
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
