import { Furniture } from "./Furniture";
import { PolyObject } from "./PolyObject";

export class Table implements Furniture {
    content: PolyObject[] = [];
    private static _nb: number = 0;
    constructor() {
    }

    take(index: number = this.content.length - 1) {
        if (this.content.length > 0) {
            if(index <= this.content.length - 1) {
                this.content.splice(index, 1);
                console.log(`Hop! Take this ${this.content[index].constructor.name} on the table`);
            } else {
                throw new Error('Sorry this is an imaginary object');
            }            
        } else {
            throw new Error('Sorry the table is empty');
        }
    }

    put(PolyObject: PolyObject) {
        if (Table._nb < 10) {
            this.content.push(PolyObject);
            Table._nb++;
            console.log(`Hop! Put this ${PolyObject.constructor.name} on the table`);
        } else {
            throw new Error('Sorry the table is full');
        }
    }
}