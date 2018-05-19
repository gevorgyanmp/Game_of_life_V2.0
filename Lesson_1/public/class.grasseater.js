
class Xotaker extends Mother {
    constructor(x, y) {
      super(x,y)
        this.energy = 5;
        this.multiply = 0;
        

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
