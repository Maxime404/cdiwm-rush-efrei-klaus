import { Toy } from "./Toy";
import { Pony } from "./Pony";
import { DragonBall } from "./DragonBall";
import { Packaging } from "./Packaging";
import { Box } from "./Box";
import { GiftWrap } from "./GiftWrap";
import { Elf } from "./Elf";

enum DBHeroes {
    SANGOKU,
    BEJITA,
    BEERUS,
    KAMESENNIN
};

// Step #1
console.log("--- STEP #1 ---");

const pony: Pony = new Pony();
const goku: DragonBall = new DragonBall(DBHeroes.SANGOKU);

pony.isMoved();
goku.isMoved();
// Step #2
console.log("\n")
console.log("--- STEP #2 ---")

const majdi: Elf = new Elf("makiboto");
const box: Packaging = new Box();
try {
    majdi.pack(box, goku);
} catch (e) {
    console.log(e.message);
}
box.open();
try {
    majdi.pack(box, goku);
} catch (e) {
    console.log(e.message);
}

const paper: Packaging = new GiftWrap();
try {
    majdi.pack(paper, pony);
} catch (e) {
    console.log(e.message);
}
try {
    majdi.pack(paper, pony);
} catch (e) {
    console.log(e.message);
}

const toy: Toy = majdi.unpack(paper);
console.log(toy === pony);
try {
    majdi.unpack(paper);
} catch (e) {
    console.log(e.message);
}