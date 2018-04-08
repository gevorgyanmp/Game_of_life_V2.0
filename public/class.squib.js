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
