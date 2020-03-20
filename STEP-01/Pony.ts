import { Toy } from "./Toy";

export class Pony extends Toy {
    private static _nb: number = 0;
    id: number;
    type: string;

    constructor() {
        super();
        Pony._nb++;
        this.id = Pony._nb;
        this.type = `Pony #${this.id}`
        this.scream = "Huuuuuuhu!";

        console.log(`Pony #${this.id} is singing -->`);
        console.log("Dou-double poney, j’fais izi money");
        console.log("D’où tu m’connais ? Parle moi en billets violets");
        console.log("Dou-double poney, j’fais izi money");
    }

    displayNbInstance() {
        console.log(Pony._nb);
    }
}