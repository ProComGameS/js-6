

export class House {

constructor(maxFlats){
    this.maxFlats = maxFlats;
    this.flats = [];
}

addFlat(flat){

    if (this.flats.length < this.maxFlats){
        this.flats.push(flat);
    }
    else {
        console.log("Cannot add new flat")
    }
}
    toString(){
    return `House with flats: [${this.flats.map(flat => flat.toString()).join(', ')}]`;
    }

}