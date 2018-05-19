var fs = require('fs');
var obj = {
            "first_name":"Martin",
            "last_name":"Gevorgyan",
            "age":22,
            "tumo_coach":true
        }

function main() {
    
   fs.writeFileSync("obj.json",JSON.stringify(obj));
}
main();