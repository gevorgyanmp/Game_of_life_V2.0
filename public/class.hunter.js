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
