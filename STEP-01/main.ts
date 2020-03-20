import { Toy } from "./Toy";
import { Pony } from "./Pony";
import { Figurine } from "./Figurine";
import { DragonBall } from "./DragonBall";

enum DBHeroes {
    SANGOKU,
    BEJITA,
    BEERUS,
    KAMESENNIN
}

// Step #1
console.log("--- STEP #1 ---");

const pony: Pony = new Pony();
const goku: DragonBall = new DragonBall(DBHeroes.SANGOKU);

pony.isMoved();
goku.isMoved();
pony.getType();
goku.getType();