import { Toy } from "./Toy";

export class Packaging {
    isOpen: boolean = false;
    toy: Toy | undefined = undefined;

    constructor() {
    }

    open() {
        this.isOpen = true;
    }

    insert(Toy: Toy) {
        this.toy = Toy;
        this.isOpen = false;
    }
}