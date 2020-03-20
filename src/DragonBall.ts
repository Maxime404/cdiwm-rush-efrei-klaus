import { Figurine } from "./Figurine";

enum DBHeroes {
    SANGOKU,
    BEJITA,
    BEERUS,
    KAMESENNIN
}

export class DragonBall extends Figurine {
    private _character: DBHeroes;
    type: string;

    constructor(character: DBHeroes) {
        super();
        this._character = character;
        this.type = `Dragon Ball figurine ${DBHeroes[this._character]}`;
        this.scream = "Kamé Hamé Ha!";

        console.log(`${DBHeroes[this._character]} is singing -->`);
        console.log("CHA-LA HEAD CHA-LA");
        console.log("Nani ga okite mo kibun wa heno-heno kappa");
        console.log("CHA-LA HEAD CHA-LA");
        console.log("Mune ga pachi-pachi suru hodo");
        console.log("Sawagu Genki-Dama --Sparking !");
    }
}