var Mother = require("./class.mother");

module.exports = class Grass extends Mother {
    constructor(x, y) {
       super(x,y)
        this.multiply = 0;
       
    }


    bazmanal() {
        this.multiply++;

        var aso =Math.floor(Math.random()*this.yntrelVandak(0).length);
        var norVandak = this.yntrelVandak(0)[aso]
        if (this.multiply >= 5 && norVandak) {
            grassArr.push(new Grass(norVandak[0], norVandak[1]));
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }

    }

}
