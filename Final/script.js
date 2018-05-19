var socket = io();
var weather = "Winter";
var side = 800 / 30;
function setup() {
    createCanvas(800, 800);
    background("#acacac");

    socket.on("matrix", function (matrix) {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
              

                // if (weather == "Winter") {

                // }
                // else if (weather == "Spring") {
        
        
                // }
                // else if (weather == "Summer") {
        
        
                // }
                // else if (weather == "Autmn") {
        
        
                // }


                if (matrix[y][x] == 1 ) {
                    if(weather=="Winter")
                    {
                        fill("white");
                        rect(x * side, y * side, side, side);
                    }
                    else if(weather=="Spring")
                    {
                        fill("green");
                        rect(x * side, y * side, side, side);
                    }
                    else if(weather=="Summer")
                    {
                        fill("#016600");
                        rect(x * side, y * side, side, side);
                    }
                    else if(weather=="Autmn")
                    {
                        fill("#f16600")
                        rect(x * side, y * side, side, side);
                    }


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
                    fill("orange");
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
    });

    socket.on('Weather', function(data) {
        weather = data;
    })

}

