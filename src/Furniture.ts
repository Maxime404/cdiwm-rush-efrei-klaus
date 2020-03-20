import { PolyObject } from "./PolyObject";

export interface Furniture {

    take(index: number): any;
    put(PolyObject: PolyObject): any;
}