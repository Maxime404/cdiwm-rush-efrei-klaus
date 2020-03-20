import { Furniture } from "./Furniture";
import { PolyObject } from "./PolyObject";

export class ConveyorBelt implements Furniture {
    isBusy: boolean = false;
    polyObject: PolyObject = {};
    constructor() {
    }

    take() {
        if (this.isBusy) {
            console.log(`Hop! Take this ${this.polyObject.constructor.name} on the conveyor belt`);
            this.polyObject = {};
            this.isBusy = false;
        } else {
            throw new Error(`Sorry, the conveyor belt is empty`);
        }
    }

    put(PolyObject: PolyObject) {
        if (!this.isBusy) {
            this.polyObject = PolyObject;
            this.isBusy = true;
            console.log(`Hop! Put this ${PolyObject.constructor.name} on the conveyor belt`);
        } else {
            throw new Error('Sorry the conveyor belt is Busy');
        }
    }
}