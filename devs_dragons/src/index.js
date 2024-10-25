import { Personagem } from "./components/Personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./components/Mago.js";
import { Arqueiro } from "./components/Arqueiro.js";
import { ArqueiroMago } from "./components/ArqueiroMago.js";
import { Guerreiro } from "./components/Guerreiro.js";

const magoBabbage = new Mago('Charles Babbage', 2, 'Lightning', 5);

const magaLiskov = new Mago('Barbara Liskov', 6, 'Fire', 9);

const arqueiroVonNeumann = new Arqueiro('John Von Neumann', 4);

const guerreiroCodd = new Guerreiro('Edgar Codd', 10);

const arqueiroMagoAda = new ArqueiroMago('Ada Lovelace', 10, 'Wind', 10, 10);

const guerreiroTuring = new Guerreiro('Alan Turing', 10);

const arqueiroMagoPascal = new ArqueiroMago('Pascal', 3, 6, 5, 2);

const arqueiraLispector = new Arqueiro('Clasice Lispector', 10);

const personagens = [magaLiskov, arqueiroVonNeumann, arqueiroMagoPascal, guerreiroCodd, magoBabbage, arqueiroMagoAda, guerreiroTuring, arqueiraLispector];

new PersonagemView(personagens).render();
