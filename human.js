
export class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    toString() {
        return `Human: ${this.name} (${this.sex})\``;
    }
}
