//import de funções de arquivos externos
import confirmaSeCpf from "./validaCpf.js";
import maiorDeIdade from "./validaIdade.js";

//seleciona todos os campos required
const camposForm = document.querySelectorAll('[required]');
const formularios = document.querySelector('[data-formulario]');

//ao tentar submeter o formulario:
formularios.addEventListener('submit', (e) => {
    e.preventDefault();

    //armazena o valor digitado em cada campo em objetos da lista
    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    }

    //armazena a lista com os valores transformando os objetos em string
    localStorage.setItem('cadastro', JSON.stringify(listaRespostas));

    //redireciona para outra página
    window.location.href = '../pages/abrir-conta-form-2.html';
})

//para cada campo do formulario faz as verificações
camposForm.forEach((campo) => {
    campo.addEventListener('blur',() => verificaCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
});

//lista com os possíveis erros (validity)
const tiposErros = [
    'valueMissing',
    'patternMismatch',
    'tooShort',
    'customError'
];

//lista de objetos com a mensagem de retorno específica para cada erro
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
};

//validações
function verificaCampo(campo) {
    let mensagem = '';

    //deixa o campo sem nenhuma mensagem de validação
    campo.setCustomValidity('');

    //verifica o campo cpf e se o valor possui o mínimo de caracteres
    if(campo.name == 'cpf' && campo.value.length >=11){
        confirmaSeCpf(campo);
    }

    //verifica o campo data de nascimento e se seu valor não é nulo
    if(campo.name == 'aniversario' && campo.value != ''){
        maiorDeIdade(campo);
    }

    //para cada erro listado:
    tiposErros.forEach(erro => {
        //verifica se a validação do campo possui valor true para algum dos erros listados em tiposErros
        if(campo.validity[erro]){
            //retorna a mensagem de erro correspondente ao campo da lista mensagens
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
        
        //seleciona a tag do html que tem a função de trazer ou não a mensagem de erro
        const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
        const validityInput = campo.checkValidity();

        //se a validação for negativa
        if(!validityInput){
            //muda o conteúdo para a mensagem de erro
            mensagemErro.textContent = mensagem;
            campo.classList.add('campo__escrita--erro');
        } else {
            //muda o conteúdo para nulo
            mensagemErro.textContent = '';
        }
    });
}
