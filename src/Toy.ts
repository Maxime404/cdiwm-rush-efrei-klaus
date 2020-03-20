export class Toy {
    type: string = "";
    scream: string = "";

    constructor() {
    }

    isMoved() {
        console.log(this.scream);
    }

    getType() {
        console.log(`My type is ${this.type}`);
    }
}