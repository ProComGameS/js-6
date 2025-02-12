
export class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    toString() {
        return `Human: ${this.name} (${this.gender})`;
    }
}
