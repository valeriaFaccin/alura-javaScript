function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    } else {
        alert('Seletor inválido');
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i]
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;

    listaTeclas[i].onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento){
        console.log(evento.code === 'Space');

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
