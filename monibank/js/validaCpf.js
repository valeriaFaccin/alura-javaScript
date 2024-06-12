export default function confirmaSeCpf(campo){
    //retira os eventuais '.' ou '-' digitados no campo CPF
    const cpf = campo.value.replace(/\.|-/g, '');
    
    //realiza as validações, caso não passarem envia uma mensagem de aviso no campo
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        campo.setCustomValidity('CPF inválido');
    }
}

function validaNumerosRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    //retorna verdadeiro se cpf for igual a qualquer valor da lista numerosRepetidos
    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    //multiplica os 9 primeiros caracteres do cpf, do último até o primeiro multiplicados pelos valores de 2 até 10
    for(let i = 0; i < 9; i++){
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    //multiplica a soma por 10 e faz o modulo da sua divisão
    soma = (soma * 10) % 11;

    //se a soma for equivalente a 10 ou 11, o penúltimo caractere de cpf precisa ser 0, se não será equivalente a soma
    if(soma == 10 || soma == 11){
        soma = 0;
    }

    //retorna verdadeiro de a soma for diferente do penúltimo caractere do cpf
    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let i = 0; i < 10; i++){
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;
    if(soma == 10 || soma == 1){
        soma = 0;
    }

    //retorna verdadeiro de a soma for diferente do último caractere do cpf
    return soma != cpf[10];
}
