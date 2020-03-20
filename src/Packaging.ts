import { Toy } from "./Toy";
import { PolyObject } from "./PolyObject";

export class Packaging extends PolyObject {
    isOpen: boolean = false;
    toy: Toy | undefined = undefined;

    constructor() {
        super();
    }

    open() {
        this.isOpen = true;
    }

    insert(Toy: Toy) {
        this.toy = Toy;
        this.isOpen = false;
    }
}