const html = document.querySelector('html');

const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');

const imgTopo = document.querySelector('.app__image');

const titulo = document.querySelector('.app__title');

const botoes = document.querySelectorAll('.app__card-button');

const iniciarPausarBtn = document.querySelector('#start-pause span');

const imgIniciarOuPausarBtn = document.querySelector('.app__card-primary-butto-icon');

const tempoTela = document.querySelector('#timer');
let tempoDecorridoEmSegundos = 1500;

focoBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBtn.classList.add('active');
});

curtoBtn.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active');
});

longoBtn.addEventListener('click', () => {
tempoDecorridoEmSegundos = 900;
   alterarContexto('descanso-longo');
   longoBtn.classList.add('active');
});

function alterarContexto(contexto){
    mostrarTempo();
    html.setAttribute('data-contexto', contexto);
    imgTopo.setAttribute('src', `./imagens/${contexto}.png`);
    switch(contexto){
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
        default:
            break;
    }

    botoes.forEach(function(contexto) {
        contexto.classList.remove('active');
    });
};

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;
//outra forma seria utilizar o readFile, que é pouco recomendado

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
});


let intervaloID = null;
const playBtn = document.querySelector('#start-pause');
const musicaPlay = new Audio('./sons/play.wav');
const musicaPause = new Audio('./sons/pause.mp3');
const musicaBeep = new Audio('./sons/beep.mp3');


const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        musicaBeep.play();  
        alert('Tempo finalizado');
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        //se a contagem estiver em 'foco', marca a tarefa em andamento como concluída
        if(focoAtivo){
            //cria um novo evento
            const evento = new CustomEvent('focoFinalizado');
            //envia um novo evento
            document.dispatchEvent(evento);
        }
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

playBtn.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloID){
        musicaPause.play(); 
        zerar();
        return;
    }
    musicaPlay.play(); 
    iniciarPausarBtn.textContent = "Pausar";
    imgIniciarOuPausarBtn.setAttribute('src', './imagens/pause.png');
    intervaloID = setInterval(contagemRegressiva, 1000);
}

function zerar(){
    iniciarPausarBtn.textContent = "Começar";
    imgIniciarOuPausarBtn.setAttribute('src', './imagens/play_arrow.png');
    clearInterval(intervaloID);
    intervaloID = null;
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
