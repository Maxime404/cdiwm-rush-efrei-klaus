import { PolyObject } from "./PolyObject";

export class Toy extends PolyObject{
    type: string = "";
    scream: string = "";

    constructor() {
        super();
    }

    isMoved() {
        console.log(this.scream);
    }

    getType() {
        console.log(`My type is ${this.type}`);
    }
}