var fs = require('fs');
var path = require('path');

var filterFunction = function(directoryName, fileNameExt, callback){
  fs.readdir(directoryName, function(err, files){
    if(err) return callback(err);
    var result = files.filter(function(file){
      return path.extname(file) === "." + fileNameExt;
    });
    return callback(null, result);
  })
}

module.exports = filterFunction;

