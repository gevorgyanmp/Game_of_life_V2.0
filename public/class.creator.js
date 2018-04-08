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

