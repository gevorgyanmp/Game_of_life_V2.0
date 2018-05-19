var Mother = require("./class.mother");

module.exports = class Grass extends Mother {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0;

    }


    bazmanal() {
        if (weather == "Winter") {

        }
        else if (weather == "Spring") {
            this.multiply += 2;

        }
        else if (weather == "Summer") {

            this.multiply += 4;
        }
        else if (weather == "Autmn") {
            this.multiply++;

        }


        var aso = Math.floor(Math.random() * this.yntrelVandak(0).length);
        var norVandak = this.yntrelVandak(0)[aso]
        if (this.multiply >= 60 && norVandak) {
            grassArr.push(new Grass(norVandak[0], norVandak[1]));
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }

    }

}
