const adicionarTarefaBtn = document.querySelector('.app__button--add-task');
const adicionarTarefaForm = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const cancelaBtn = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');
const removerConcluidasBtn = document.querySelector('#btn-remover-concluidas');
const removerTodasBtn = document.querySelector('#btn-remover-todas');

//converte de string para objeto
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function cancelaTarefa() {
    textArea.value = '';
    adicionarTarefaForm.classList.add('hidden');
}

function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `
    const pg = document.createElement('p');
    pg.textContent = tarefa.descricao;
    pg.classList.add('app__section-task-list-item-description');

    const btn = document.createElement('button');
    btn.classList.add('app_button-edit');
    btn.onclick = () => {
        //debugger;
        const novaDescription = prompt('Nome da tarefa: ');
        //console.log('Nova tarefa: ' + novaDescription);
        if(novaDescription){
            pg.textContent = novaDescription;
            tarefa.descricao = novaDescription;
            atualizarTarefas();
        }
    }

    const imgBtn = document.createElement('img');
    imgBtn.setAttribute('src', './imagens/edit.png');
    btn.append(imgBtn);

    li.append(svg);
    li.append(pg);
    li.append(btn);

    if(tarefa.completa){
        li.classList.add('app__section-task-list-item-complete');
        btn.setAttribute('disabled', 'disabled');
    } else {
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active').forEach(elemento => {
                elemento.classList.remove('app__section-task-list-item-active');
            });
            if (tarefaSelecionada == tarefa) {
                paragrafoDescricaoTarefa.textContent = '';
                tarefaSelecionada = null;
                liTarefaSelecionada = null;
                return;
            }
            tarefaSelecionada = tarefa;
            liTarefaSelecionada = li;
            paragrafoDescricaoTarefa.textContent = tarefa.descricao;
            
            const blabla = document.querySelectorAll('.app__section-task-list-item-active');
            blabla.forEach(blabla => {
                blabla.classList.remove('.app__section-task-list-item-active');
            });
            li.classList.add('app__section-task-list-item-active');
        }
    }
    return li;
}

adicionarTarefaBtn.addEventListener('click', () => {
    adicionarTarefaForm.classList.toggle('hidden');

});

adicionarTarefaForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    //tarefa individual cadastrada
    const tarefa = {
        descricao: textArea.value
    };
    //adicionando a tarefa individual para a lista de tarefas
    tarefas.push(tarefa);

    const elementoTarefas = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefas);

    //converte de objeto para string e armazena no localStorage
    atualizarTarefas();
    textArea.value = '';
    adicionarTarefaForm.classList.add('hidden');
});

tarefas.forEach(tarefa => {
    const elementoTarefas = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefas);
});

cancelaBtn.addEventListener('click', cancelaTarefa);

//novo evento criado em script.js (contagemRegressiva)
document.addEventListener('focoFinalizado', () => {
    //verifiva a tarefa selecionada tanto no localStorage quanto no HTML (li) - para alterar em ambas
    if(tarefaSelecionada && liTarefaSelecionada){
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled');
        tarefaSelecionada.completa = true;
        atualizarTarefas();
    }
})

const removerTarefas = (somenteConcluidas) => {
    //se for somente tarefas concluídas o seletor terá apenas as concluídas, se não pega todas
    const seletor = somenteConcluidas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item";

    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove();
    });
    //se for somente tarefas concluídas, filtra a lista inteira para somente tarefas concluídas, se não retorna uma lista vazia, removendo todos as tarefas
    tarefas = somenteConcluidas ? tarefas.filter(tarefa => !tarefa.completa) : [];
    atualizarTarefas();
}

//chamando uma função anônima que determinará a chamada da função removerTarefas com seus parâmetros
removerConcluidasBtn.onclick = () => removerTarefas(true);
removerTodasBtn.onclick = () => removerTarefas(false);
