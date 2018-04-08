
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
