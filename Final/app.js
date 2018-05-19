const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

http.listen(port, function () {
    console.log("Application is rnning on port " + port);
})

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

global.matrix = [];
global.grassArr = [];
global.xotakerarr = [];
global.gisharr = [];
global.hunterarr = [];
global.squibarr = [];
global.creatorarr = [];
global.weather = "Winter";

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
        } else if (matrix[y][x] == 2) {
            xotakerarr.push(new Xotaker(x, y));
        } else if (matrix[y][x] == 3) {
            gisharr.push(new Gishatich(x, y))
        } else if (matrix[y][x] == 4) {
            hunterarr.push(new Hunter(x, y))
        }
    }
}



setInterval(function () {


    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerarr) {
        xotakerarr[i].utel();
    }
    for (var i in gisharr) {
        if (weather != "Winter") {
            gisharr[i].manhunt();
        }
    }
    for (var i in hunterarr) {
        hunterarr[i].hunt();
    }
    for (var i in squibarr) {
        if (weather != "Winter") {
            squibarr[i].inkubation();
        }
    }
    for (var i in creatorarr) {
        if (weather != "Winter") {
            creatorarr[i].stexcel();
        }
    }

    io.sockets.emit("matrix", matrix);

}, 400);

setInterval(function () {

    if (weather == "Winter")
        weather = "Spring";
    else if (weather == "Spring")
        weather = "Summer";
    else if (weather == "Summer")
        weather = "Autmn";
    else if (weather == "Autmn")
        weather = "Winter";

    io.sockets.emit("Weather", weather)
}, 10000)


io.on('connection', function (socket) {

});