/*  
let contador = 0;

let botao = document.querySelector('#botao');

botao.onclick = function (){
    contador++;
    console.log(contador);
};



for(let i = 0; i < listaBotoes.length; i++){
    listaBotoes[3].onclick = function (){
        contador++;
        console.log(contador);
    };
}

let contador1 = 0;

while(contador1 < listaBotoes.length){
    listaBotoes[contador1].onclick = function (){
        contador1++;
        console.log(contador1);
    }
}*/
let contador = 0;
const listaBotoes = document.querySelectorAll('.botoes');
for(let i = 0; i < listaBotoes.length; i++){
    listaBotoes[i].onclick = function (){
        contador++;
        console.log(contador);
    };
}