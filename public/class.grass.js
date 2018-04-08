class Grass extends Mother {
    constructor(x, y) {
       super(x,y)
        this.multiply = 0;
       
    }


    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 60 && norVandak) {
            grassArr.push(new Grass(norVandak[0], norVandak[1]));
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }

    }

}
