var Mother = require("./class.mother");
var Squib = require("./class.squib");

module.exports = class Hunter extends Mother {
    constructor(x, y) {
       super(x,y);
        this.life = 3;
        this.multiply = 0;
        this.huntmulti = 0;
        this.squibmulti = 0;
    }

    hunt() {
        this.huntmulti++;
        var asd =Math.floor(Math.random()*this.yntrelVandak2(3).length);
        var gishPoint = this.yntrelVandak2(3)[asd]
        if (this.huntmulti >= 3 && gishPoint) {
            matrix[gishPoint[1]][gishPoint[0]] = 0;
            for (var i in gisharr) {
                if (gisharr[i].x == gishPoint[0] && gisharr[i].y == gishPoint[1]) {
                    gisharr.splice(i, 1)
                    break;
                }
            }
            for (var i in grassArr) {
                if (grassArr[i].x == gishPoint[0] && grassArr[i].y == gishPoint[1]) {
                    matrix[this.y][this.x] = 1;
                    break;
                }
            }
            this.huntmulti = 0;
        }
        else {
            this.sharjvel();
        }
        if (squibarr.length < 5) {
            this.squibbing();
        }
        if (this.life <= 0) {
            this.mernel();
        }
    }
    squibbing() {
        this.squibmulti++;
        var asd =Math.floor(Math.random()*this.yntrelVandak(2).length);
        var  randxotkr = this.yntrelVandak(2)[asd]
   
        if (this.squibmulti >= 10 && randxotkr) {
            matrix[randxotkr[1]][randxotkr[0]] = 5
            for (var i in xotakerarr) {
                if (xotakerarr[i].x == randxotkr[0] && xotakerarr[i].y == randxotkr[1]) {
                    xotakerarr.splice(i, 1)
                    break;
                }
                for (var i in grassArr) {
                    if (grassArr[i].x == randxotkr[0] && grassArr[i].y == randxotkr[1]) {
                        grassArr.splice(i, 1)
                        break;
                    }
                }
            }
            squibarr.push(new Squib(randxotkr[0], randxotkr[1]))
            this.squibmulti = 0;
        }

    }
    sharjvel() {
        this.multiply++;
        var asd =Math.floor(Math.random()*this.yntrelVandak(1).length);
        var norVandak = this.yntrelVandak(1)[asd]
        var aso =Math.floor(Math.random()*this.yntrelVandak(0).length);
        var norVandak2 = this.yntrelVandak(0)[aso]
        if (norVandak && this.multiply >= 2) {
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    matrix[this.y][this.x] = 1;
                    break;
                }
            }
            this.x = norVandak[0]; this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.multiply = 0;
        }
        else if (norVandak2 && this.multiply >= 4) {
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    matrix[this.y][this.x] = 1;
                    break;
                }
            }
            this.x = norVandak2[0]; this.y = norVandak2[1];
            matrix[this.y][this.x] = 4;
            this.multiply = 0;
        }
    }
    mernel() {
        matrix[this.y][this.x] = 0;
        for (var i in grassArr) {
            if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                matrix[this.y][this.x] = 1;
                break;
            }
        }
        for (var i in hunterarr) {
            if (hunterarr[i].x == this.x && hunterarr[i].y == this.y) {
                hunterarr.splice(i, 1);
                break;
            }
        }
       
    }


}
