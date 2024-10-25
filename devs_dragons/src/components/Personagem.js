export class Personagem {
    nome; #level; tipo; vida; #mana; descr;

    constructor (nome, level, tipo, vida, mana, descr) {
        this.nome = nome;
        this.#level = 1;
        this.tipo = tipo;
        this.vida = vida || 100;
        this.#mana = mana || 100;
        this.descr = descr;
    }

    get level() {
        return this.#level;
    }

    get mana() {
        return this.#mana;
    }

    set level(novoLevel) {
        if(novoLevel >= 1 && novoLevel <= 12) {
            this.#level = novoLevel;
        }
    }

    levelUp() {
        this.level += 1;
    }

    levelDown() {
        this.level -= 1;
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`;
        }

        return `${this.constructor.tipo} iniciante`;
    }

    static duelo(duelista1, duelista2) {
        if (duelista1.#level > duelista2.#level) {
            return `${duelista1.constructor.tipo} ${duelista1.nome} vence o Duelo!`;
        }
        if (duelista2.#level > duelista1.#level) {
            return `${duelista2.constructor.tipo} ${duelista2.nome} vence o Duelo!`;
        }
        return `Empate`;
    }
}
