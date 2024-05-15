console.log("Olá visitante do inspecionar!");

const nomes = ['Kaladin', 'Shallan', 'Adolin', 'Talenel', 'Jasnah', 'Stick', 'Lift', 'Wit', 'Dalinar', 'Renarin', 'Amaram', 'Elhokar', 'Navani', 'Darkness', 'Jezrien', 'Teft', 'Rock', 'Moash', 'Siberial', 'Sadeas'];
const nomesDica = [
    'I will protect those I hate, as long as it is right', 
    'Words are where most change begins', 
    'I might have told this Chasmfiend story a hundred times already', 
    'Might have gone mad because his friends abandoned his to eternal torture', 
    'I will explain and teach you everything you need with time -> proceds to die',
    'I am a stick',
    'I will remember those who have been forgotten',
    'You lost my flute?',
    'Source: I saw it in a dream',
    'Glasses and uselessness (could have told us sonner you were a knight radiant!)',
    'I got this Shardblade and ShardPlate fair and square in battlefield - catch the lie',
    'Needs to ask his servants if he is a good King - what do you think that tells you?',
    'Suspecially not so sad her husband died',
    'The lil bitch who abandoned human kind and is stupidtly working against it',
    'The leader of the lil bitches, who probably gave the idea of abandoning one of their own, and also the final word',
    'He believes in Kaladin (some of this gotta be hard, sorry not sorry kkk)',
    'He cooks, he sings, he is everything you wanna be',
    'The new generation lil bitch',
    'Nicer than he looks, and one of the best BrightLords there are',
    'The worst, thank god you died, lets all take a moment to apreciate Adolin'
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
            <h3>O personagem era ${nomes[nomeSorteado]}</h3>
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
