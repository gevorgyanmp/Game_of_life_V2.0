var Mother = require("./class.mother");

module.exports= class Gishatich extends Mother {
    constructor(x, y) {
       super(x,y)
        this.energy = 30;
        this.eatCount = 0;
        this.multiply = 0;
    }

    
    manhunt() {
        var asd =Math.floor(Math.random()*this.yntrelVandak(4).length);
        var norVandak = this.yntrelVandak(4)[asd]
        if (norVandak) {
            for (var i in hunterarr) {
                if (hunterarr[i].x == norVandak[0] && hunterarr[i].y == norVandak[1]) {
                    hunterarr[i].life--;
                    console.log("beat")
                }
            }
        }
        else {
            this.utel();
        }
    }
    sharjvel() {
        this.multiply++;
        var asd =Math.floor(Math.random()*this.yntrelVandak(0).length);
        var norVandak = this.yntrelVandak(0)[asd]
        var aso =Math.floor(Math.random()*this.yntrelVandak(1).length);
        var norVandak2 = this.yntrelVandak(1)[asd]
        
        if (norVandak && this.multiply >= 5 && weather!="Winter") {
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    matrix[this.y][this.x] = 1;
                    break;
                }
            }
            this.x = norVandak[0]; this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.multiply = 0;
            this.energy--;
        }
        else if (norVandak2 && this.multiply >= 5 && weather!="Winter") {
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    matrix[this.y][this.x] = 1;
                    break;
                }
            }
            this.x = norVandak2[0]; this.y = norVandak2[1];
            matrix[this.y][this.x] = 3;
            this.multiply = 0;
            this.energy--;
        }
        if (this.energy <= 0) {
            this.mahanal();
        }
    }
    utel() {
        this.multiply++;
        var asd =Math.floor(Math.random()*this.yntrelVandak(2).length);
        var norVandak = this.yntrelVandak(2)[asd]
        if (norVandak && this.multiply >= 4 && weather!="Winter") {
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    matrix[this.y][this.x] = 1;
                    break;
                }
            }
            this.x = norVandak[0]; this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerarr) {
                if (xotakerarr[i].x == this.x && xotakerarr[i].y == this.y) {
                    xotakerarr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.energy = 30
            this.eatCount++;
            this.multiply = 0;
        }
        else {
            this.sharjvel();
        }
        if (this.eatCount >= 5) {
            this.bazmanal();
        }
    }

    bazmanal() {


        var asd =Math.floor(Math.random()*this.yntrelVandak(0).length);
        var norVandak = this.yntrelVandak(0)[asd]
        var asp =Math.floor(Math.random()*this.yntrelVandak(1).length);
        var norVandak2 = this.yntrelVandak(1)[asp]
        if (norVandak  && weather=="Spring") {
            matrix[norVandak[1]][norVandak[0]] = 3;
            gisharr.push(new Gishatich(norVandak[0], norVandak[1]))
            this.eatCount = 0;
        }
        else if (norVandak2 && weather=="Spring") {

            matrix[norVandak2[1]][norVandak2[0]] = 3;
            for (var i in xotakerarr) {
                if (xotakerarr[i].x == norVandak2[0] && xotakerarr[i].y == norVandak2[1]) {
                    xotakerarr.splice(i, 1)
                    break;
                }
            }
            for (var i in grassArr) {
                if (grassArr[i].x == norVandak2[0] && grassArr[i].y == norVandak2[1]) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            gisharr.push(new Gishatich(norVandak2[0], norVandak2[1]))
            this.eatCount = 0;
        }

    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in gisharr) {
            if (gisharr[i].x == this.x && gisharr[i].y == this.y) {
                gisharr.splice(i, 1);
                break;
            }
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    matrix[this.y][this.x]==1;
                    break;
                }
            }
        }
    }

}

