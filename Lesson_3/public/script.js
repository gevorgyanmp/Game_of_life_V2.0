

global.matrix = [];
global.grassArr = [];
global.xotakerarr = [];
global.gisharr = [];
global.hunterarr = [];
global.squibarr = [];
global.creatorarr = [];

var Grass = require("./class.grass");
var Xotaker = require("./class.grasseater");
var Gishatich = require("./class.predator");
var Hunter = require("./class.hunter");

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

    



setInterval(function(){

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
             
                process.stdout.write("1 ");
            }
            else if (matrix[y][x] == 0) {
              
                process.stdout.write("0 ");
            }
            else if (matrix[y][x] == 2) {
                process.stdout.write('2 ');
            }
            else if (matrix[y][x] == 3) {
                process.stdout.write("3 ");
            }
            else if (matrix[y][x] == 4) {
                process.stdout.write('4 ');
            }
            else if (matrix[y][x] == 5) {
                process.stdout.write('5 ');
            }
            else if (matrix[y][x] == 6) {
                process.stdout.write('6 ');
            }

        }
        process.stdout.write("\n");
    }

    process.stdout.write("\n\n\n");

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
   
}, 2000);


