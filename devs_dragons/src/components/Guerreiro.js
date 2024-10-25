import { Personagem } from "./Personagem.js";

export class Guerreiro extends Personagem {
    forca; static tipo = 'Guerreiro';
    static descr = 'A battle-hardened juggernaut, the Warrior charges into the fray, wielding steel and fury';
    // Você será esmagado pela fúria do Guerreiro

    constructor(nome, forca) {
        super(nome);
        this.forca = forca;
    }

    obterInsignia() {
        if(this.forca >= 5 && this.level >= 7) {
            return `Wielder of Strength and Fury`;
            // Portador da Força || Guerreiro Furioso
        }

        return super.obterInsignia();
    }
}
