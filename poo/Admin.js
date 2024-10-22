import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.role}`;
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin('Edgar Codd', 'edgar.codd@example.com', '19-08-1923');
console.log(novoAdmin.criarCurso('Banco de Dados Relacional', 40));
