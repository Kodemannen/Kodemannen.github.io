var fs = require('fs');   
      
var path = __filename.slice(0,-7) + "Comics";
console.log(path);

var filenames = fs.readdirSync(path, function(err, items) {
    //console.log(items);
});
console.log(filenames);