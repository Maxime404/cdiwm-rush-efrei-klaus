import { Toy } from "./Toy";
import { Packaging } from "./Packaging";
import { GiftWrap } from "./GiftWrap";
import { PolyObject } from "./PolyObject";
import { Furniture } from "./Furniture";

export class Elf {
    _nickname: string;
    constructor(nickname: string) {
        this._nickname = nickname;
    }

    get_Nickname() {

    }

    set_Nickname(nickname: string) {
        this._nickname = nickname;
    }

    pack(Packaging: Packaging, toy: Toy) {
        if (Packaging.isOpen || Packaging instanceof GiftWrap) {
            if(!Packaging.toy) {
                Packaging.toy = toy;
                console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`)
            } else {
                throw new Error("Sorry this package already filled");
            }
        } else {
            throw new Error('Sorry this package is not open');
        }
    }

    unpack(Packaging: Packaging): Toy {
        if(Packaging.toy) {
            const toy = Packaging.toy
            Packaging.toy = undefined;
            console.log(`Ooooooh! Just unpacking the toy ~~ ${toy.type} ~~`);
            return toy;
        } else {
            throw new Error('Sorry this package is already empty');
        }
    }

    take(Furniture: Furniture, index: number = 0) {
        Furniture.take(index);
    }

    put(Furniture: Furniture, PolyObject: PolyObject) {
        Furniture.put(PolyObject);
    }
}