const user = {
  init: function(nome, email) {
    this.nome = nome;
    this.email = email;
  },

  exibirInfos: function() {
    return this.nome;
  }
}

const novoUser = Object.create(user);
novoUser.init('Ada Lovelace', 'ada.lovelace@example.com');
console.log(novoUser.exibirInfos());

console.log(user.isPrototypeOf(novoUser));
