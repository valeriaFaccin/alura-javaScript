import Admin from './Admin.js';
import Docente from './Docente.js';
import User from './User.js';

const newUser = new User('Ada Lovelace', 'ada.lovelace@example.com', '10-12-1815', 'estudante');
console.log(newUser.exibirInfos());

const newAdmin = new Admin('Edgar Codd', 'edgar.codd@example.com', '19-08-1923');
console.log(newAdmin.exibirInfos());
console.log(newAdmin.nome);
newAdmin.nome = 'Alan Turing';
console.log(newAdmin.nome);

const newDocente = new Docente('Alan Turing', 'alan.turing@example.com', '12-10-1914');
console.log(newDocente.exibirInfos());
console.log(newDocente.nome);
