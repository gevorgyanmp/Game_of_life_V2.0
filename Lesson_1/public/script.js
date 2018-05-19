var matrix = [];

var grassArr = [];
var xotakerarr = [];
var gisharr = [];
var hunterarr = [];
var squibarr = [];
var creatorarr = [];
var side = 20;
for (var i = 0; i <= 30; i++) {
    matrix[i] = []
    for (var j = 0; j <= 30; j++) {

        matrix[i][j] = Math.round(Math.random())

    }

}
for (var i = 0; i < 3; i++) {
    matrix[Math.round(Math.random() * 30)][Math.round(Math.random() * 30)] = 2
    matrix[Math.round(Math.random() * 30)][Math.round(Math.random() * 30)] = 4
    matrix[Math.round(Math.random() * 30)][Math.round(Math.random() * 30)] = 3
    matrix[Math.round(Math.random() * 30)][Math.round(Math.random() * 30)] = 2

}

function setup() {

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    noStroke()
    frameRate(300);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {

                grassArr.push(new Grass(x, y))
            }
            else if (matrix[y][x] == 2) {
                xotakerarr.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gisharr.push(new Gishatich(x, y))
            }
            else if (matrix[y][x] == 4) {
                hunterarr.push(new Hunter(x, y))
            }
        }
    }

    

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("White");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("Black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("Purple");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerarr) {
        xotakerarr[i].utel();
    }
    for (var i in gisharr) {
        gisharr[i].manhunt();
    }
    for (var i in hunterarr) {
        hunterarr[i].hunt();
    }
    for (var i in squibarr) {
        squibarr[i].inkubation();
    }
    for (var i in creatorarr) {
        creatorarr[i].stexcel();
    }
}
