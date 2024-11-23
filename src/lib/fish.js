import { randomnumber } from "./helpers.js"
import { Terminal } from "./terminal.js"

export class fish {
    constructor(name, desc, price, chance) {
        this.name = name
        this.desc = desc
        this.price = price
        this.chance = chance //Out of 100
    }
        catchafish() {
            let didyacatchit = randomnumber(1, 100)
            if (didyacatchit >= 0 && didyacatchit <= this.chance) {
                terminal.log("log", "You caught a" + this.name + "!");
                terminal.log("log", "''" + this.desc + "''");
                game.points += this.price
            }
        }
    

}



