class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];


    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak && this.multiply >= 8) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0]; this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.multiply = 0;
            this.energy--;
        }
        if (this.energy <= -20) {
            this.mahanal();
        }
    }
    utel() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak && this.multiply >= 7) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0]; this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
            this.multiply = 0;
        }
        else {
            this.sharjvel();
        }
        if (this.energy >= 10) {
            this.bazmanal();
        }
    }

    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        var norVandak2 = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 2;
            xotakerarr.push(new Xotaker(norVandak[0], norVandak[1]))
            this.energy = 5;
        }
        else if (norVandak2) {
            for (var i in grassArr) {
                if (grassArr[i].x == norVandak2[0] && grassArr[i].y == norVandak2[1]) {
                    grassArr.splice(i, 1)
                }
            }
            matrix[norVandak2[1]][norVandak2[0]] = 2;
            xotakerarr.push(new Xotaker(norVandak2[0], norVandak2[1]))
            this.energy = 5;

        }
    }
    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerarr) {
            if (xotakerarr[i].x == this.x && xotakerarr[i].y == this.y) {
                xotakerarr.splice(i, 1);
                break;
            }
        }
    }
}

class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.eatCount = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

        this.multiply = 0;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    manhunt() {
        var norVandak = random(this.yntrelVandak(4));
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
        var norVandak = random(this.yntrelVandak(0));
        var norVandak2 = random(this.yntrelVandak(1));
        if (norVandak && this.multiply >= 5) {
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
        else if (norVandak2 && this.multiply >= 5) {
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
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak && this.multiply >= 4) {
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

        var norVandak = random(this.yntrelVandak(0));
        var norVandak2 = random(this.yntrelVandak(2));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 3;
            gisharr.push(new Gishatich(norVandak[0], norVandak[1]))
            this.eatCount = 0;
        }
        else if (norVandak2) {

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

class Hunter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 3;
        this.multiply = 0;
        this.huntmulti = 0;
        this.squibmulti = 0;
        this.huntDirections = [
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
        ];
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalVorsiKordinatner() {
        this.huntDirections = [
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    yntrelVorsiVandak(ch) {
        this.stanalVorsiKordinatner();
        var found = [];
        for (var i in this.huntDirections) {
            var x = this.huntDirections[i][0];
            var y = this.huntDirections[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.huntDirections[i]);
                }
            }
        }
        return found;
    }
    hunt() {
        this.huntmulti++;
        var gishPoint = random(this.yntrelVorsiVandak(3));
        if (this.huntmulti >= 5 && gishPoint) {
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
        var randxotkr = random(this.yntrelVorsiVandak(2));
        if (this.squibmulti >= 20 && randxotkr) {
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
        var norVandak = random(this.yntrelVandak(0));
        var norVandak2 = random(this.yntrelVandak(1));
        if (norVandak && this.multiply >= 4) {
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

class Squib {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
    }
    inkubation() {
        this.multiply++
        var randnum = round(random())
        if (this.multiply >= 30) {

            if (randnum == 0) {
                matrix[this.y][this.x] = 3;
                gisharr.push(new Gishatich(this.x, this.y))
            }
            else if (randnum == 1) {
                matrix[this.y][this.x] = 6;
                creatorarr.push(new Creator(this.x, this.y))
            }
            for (var i in squibarr) {
                if (squibarr[i].x == this.x && squibarr[i].y == this.y) {
                    squibarr.splice(i, 1)
                }
            }
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1)
                }
            }
            this.multiply = 0;
        }

    }
}

class Creator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.multiply = 0;
        this.createDirections = [
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
        ];

    }
    stanalStexcmaniKordinatner() {
        this.huntDirections = [
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
        ];

    }
    yntrelStexcmanVandak(ch) {
        this.stanalStexcmaniKordinatner();
        var found = [];
        for (var i in this.createDirections) {
            var x = this.createDirections[i][0];
            var y = this.createDirections[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.createDirections[i]);
                }
            }
        }
        return found;
    }
    stexcel() {
        this.multiply++;
        var datarkvandak = random(this.yntrelStexcmanVandak(0))
        var datarkvandak1 = random(this.yntrelStexcmanVandak(1))
        if (this.multiply >= 30) {
            if (this.energy > 1 && datarkvandak) {
                matrix[datarkvandak[1]][datarkvandak[0]] = 1
                grassArr.push(new Grass(datarkvandak[0], datarkvandak[1]))
                this.energy--;
            }
            else {
                this.energy--;
            }
            if (this.energy == 1 && datarkvandak) {
                matrix[datarkvandak[1]][datarkvandak[0]] = 2;
                xotakerarr.push(new Xotaker(datarkvandak[0], datarkvandak[1]))
                this.energy--;
            }
            else if (this.energy == 1 && datarkvandak1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == datarkvandak1[0] && grassArr[i].y == datarkvandak1[1]) {
                        grassArr.splice(i, 1);
                    }
                }
                matrix[datarkvandak1[1]][datarkvandak1[0]] = 2;
                xotakerarr.push(new Xotaker(datarkvandak1[0], datarkvandak1[1]))
                this.energy--;
            }

            this.multiply = 0;
        }
        if (this.energy <= 0) {
            this.mernel();
        }
    }
    mernel() {
        matrix[this.y][this.x] = 0;
        for (var i in creatorarr) {
            if (creatorarr[i].x == this.x && creatorarr[i].y == this.y) {
                creatorarr.splice(i, 1)
            }
        }
        for (var i in grassArr) {
            if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                grassArr.splice(i, 1)
            }
        }

    }
}

