import { Personagem } from "./Personagem.js";
import { Mago } from "./Mago.js";
import { Arqueiro } from "./Arqueiro.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro; ladoMago; static tipo = 'ArqueiroMago';
    static descr = 'A hybrid of precision and deadly power, the ArcherMage blends spellcraft with mortal aim';
    // Detentor de lanças e flechas mágicas

    constructor(nome, elementoMagico, levelMagico, inteligencia, destreza) {
        super(nome);
        this.ladoArqueiro = new Arqueiro(nome, destreza);
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} and ${this.ladoMago.obterInsignia()}`;
    }
}
