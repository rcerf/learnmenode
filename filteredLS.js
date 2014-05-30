var fs = require('fs');
var path = require('path');
var dirPath = path.normalize(process.argv[2]);
var filterBy = "." + process.argv[3];
fs.readdir(dirPath, function(err, files){
  if(err) throw err;
  for(var i=0; i<files.length; i++){
    var fileString = path.extname(files[i]);
    if( fileString === filterBy){
      console.log(files[i]);
    }
  }
});
