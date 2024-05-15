const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);
//it does not read bumps into the microphone, sadly
function onSpeak(e){
    chute = e.result[0][0].transcript;
    exibeElementoNaTela(chute);
    verificaValorValidoChute(chute);
}

function exibeElementoNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());
