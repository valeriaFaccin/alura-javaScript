export default function maiorDeIdade(campo){
    //seleciona o valor do campo data nascimento e transforma em objeto data
    const dtNascimento = new Date(campo.value);

    //verifica de passou pela validação de idade, se não lança o aviso de erro
    if(!validaIdade(dtNascimento)){
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data){
    //seleciona a data atual
    const dataAtual = new Date();
    
    //soma a data do campo mais 18
    const data18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    //caso a dataAtual seja maior ou igual a data18, retorna verdadeiro, a idade é maior ou igual a 18
    return dataAtual >= data18;
}
