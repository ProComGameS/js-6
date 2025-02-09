
export class Apartment {
    constructor() {
        this.citizens = [];
    }

    addCitizen(human){
    this.citizens.push(human);
    }
    toString(){
        return `Apartment with citizens: [${this.citizens.map(citizen => citizen.toString()).join(', ')}]`;
    }
}