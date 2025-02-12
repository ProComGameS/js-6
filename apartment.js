import { Human } from "./human.js";

export class Apartment {
    constructor() {
        this.citizens = [];
    }

    addCitizen(human){
        if (human instanceof Human) {
            this.citizens.push(human);
        }
    else{
        console.log("Cannot add this type of object. Sorry =()");
        }
    }

    toString(){
        return `Apartment with citizens: [${this.citizens.map(citizen => citizen.toString()).join(', ')}]`;
    }
}