//seleciona o elemento html que mostrará na tela o chute do usuário
const elementoChute = document.getElementById('chute');

//inicia a função Speech recognition no navegador
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
//configura a língua para postuguês Brasil
recognition.lang = 'pt-Br';

//inicia o reconhecimento de voz
recognition.start();

recognition.addEventListener('result', onSpeak);

//seleciona a palavra identificada pelo reconhecimento de voz realiza as verificações e exibe na tela
function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeElementoNaTela(chute);
    verificaValorValidoChute(chute);
}

function exibeElementoNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

//faz um loop para continuar o reconhecimento de voz até o final do jogo
recognition.addEventListener('end', () => recognition.start());
