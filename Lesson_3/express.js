var express = require("express");
var app = express();

// app.get("/", function(req, res){
//   // res.send("<h1>Hello world</h1>");
//   res.redirect('http://google.com');
// });
// app.get("/search/:request", function(req, res){
//    var rqst = req.params.request;
//    res.redirect('http://google.com/search?q='+rqst);
//   // res.send("<h1>Hello " + name +"</h1>");
// });
// app.get("/*", function(req, res){
//     res.send("<h1>ERROR 404</h1>");
//  });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


app.use(express.static("./"))


app.get("/", function(req,res)
{
    res.redirect("index.js")
});

app.listen(3000, function(){
       console.log("Example is running on port 3000");
    });