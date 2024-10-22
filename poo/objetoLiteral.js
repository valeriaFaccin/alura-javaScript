const user = {
    nome: "Charles Babbage",
    email: "charles.babbage@example.com",
    nascimento: "26-12-1791",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Edgar Codd",
    email: "edgar.codd@example.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
