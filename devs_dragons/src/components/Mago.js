import { Personagem } from "./Personagem.js";

export class Mago extends Personagem {
    elementoMagico; levelMagico; inteligencia; static tipo = 'Mago';
    static descr = 'Wielding arcane forces beyond mortal ken, the Mage bends reality to his will';
    // O mago é implacável

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome);
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    }

    obterInsignia() {
        if (this.level >= 5 && this.levelMagico >= 5) {
            return `Arcane Master of ${this.elementoMagico}`;
            // Mestre do elemento tal
        }

        return super.obterInsignia();
    }
}
