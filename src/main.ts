import { Toy } from "./Toy";
import { Pony } from "./Pony";
import { DragonBall } from "./DragonBall";
import { Packaging } from "./Packaging";
import { Box } from "./Box";
import { GiftWrap } from "./GiftWrap";
import { Elf } from "./Elf";
import { Table } from "./Table";
import { ConveyorBelt } from "./ConveyorBelt";

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

// Step #3
console.log("\n")
console.log("--- STEP #3 ---")

const table: Table = new Table();
const conveyor: ConveyorBelt = new ConveyorBelt();

majdi.put(table, paper);
try {
    majdi.take(conveyor);
} catch (e) {
    console.log(e.message);
}
majdi.put(conveyor, pony);
try {
    majdi.put(conveyor, pony);
} catch (e) {
    console.log(e.message);
}
majdi.take(conveyor);
try {
    majdi.take(conveyor);
} catch (e) {
    console.log(e.message);
}
const pony2: Pony = new Pony();
const pony3: Pony = new Pony();
const pony4: Pony = new Pony();
const pony5: Pony = new Pony();
const pony6: Pony = new Pony();
const pony7: Pony = new Pony();
const pony8: Pony = new Pony();
const pony9: Pony = new Pony();
const pony10: Pony = new Pony();
const pony11: Pony = new Pony();
majdi.put(table, pony2);
majdi.put(table, pony3);
majdi.put(table, pony4);
majdi.put(table, pony5);
majdi.put(table, pony6);
majdi.put(table, pony7);
majdi.put(table, pony8);
majdi.put(table, pony9);
majdi.put(table, pony10);
try {
    majdi.put(table, pony11);
} catch (e) {
    console.log(e.message);
}
majdi.take(table);
majdi.take(table, 1);
