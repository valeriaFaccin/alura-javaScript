import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    exibirInfos() {
        return `${this.email}, ${this.role}, ${this.ativo}`;
    }
  
    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}.`;
    }
}

const novoDocente = new Docente('Alan Turing', 'alan.turing@example.com', '23-06-1912');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Charles Babbage', "Turing's Machine"));
