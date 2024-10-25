import { Personagem } from "./Personagem.js";

export class Arqueiro extends Personagem{
    destreza; static tipo = 'Arqueiro';
    static descr = 'Silent as shadows and deadly as nightfall, the Archer masters the art of precision from afar';
    // Você tem o meu arco

    constructor(nome, destreza) {
        super(nome);
        this.destreza = destreza;
    }

    obterInsignia() {
        if(this.destreza >= 5) {
            return `Master of the Nightfall`;
            // Dominador de Flexas
        }

        return super.obterInsignia();
    }
}
