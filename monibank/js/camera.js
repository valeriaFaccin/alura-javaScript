//seleciona os elementos html
const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const camera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviaFoto = document.querySelector('[data-enviar]');

let imagemURL = '';

//quando o botão for clicado
botaoIniciarCamera.addEventListener('click', async function (){
    //inicia a camera do navegador, apenas o vídeo, não o áudio
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    //retira o botão de iniciar a camera
    botaoIniciarCamera.style.display = 'none';
    
    //apresenta a seção com a camera de vídeo
    camera.style.display = 'block'

    //inicia a tag html representada por vídeo como objeto para receber iniciarVideo
    video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener('click', () => {
    //desenha a imagem apresentada pelo video no instante do click no botao
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    //retorna uma representação da imagem no formato jpeg
    imagemURL = canvas.toDataURL('image/jpeg'); 

    //remove a seção da camera
    camera.style.display = 'none';

    //apresenta a mensagem de confirmação e adição da conta
    mensagem.style.display = 'block';
});

botaoEnviaFoto.addEventListener('click', () => {
    //retornou o objeto que possuia a chave cadastro
    const receberDados = localStorage.getItem('cadastro');

    //converte o json para visualizar os dados em objeto no JavaScript
    const converteRetorno = JSON.parse(receberDados);

    //cria novo atributo imagem que recebe a url da imagem criada
    converteRetorno.imagem = imagemURL;

    //recebe novas informações no cadastro, a imagem, convertendo para string
    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    //redireciona para outra página de confirmação de cadastro
    window.location.href = '../pages/abrir-conta-form-3.html';
});
