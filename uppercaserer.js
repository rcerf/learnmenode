var http = require('http');
var stream = require('stream');
var util = require('util');
var Transform = stream.Transform;

function Upper(options){
  Transform.call(this, options);
}
util.inherits(Upper, Transform);
Upper.prototype._transform = function(chunk, enc, cb){
  var upperChunk = chunk.toString().toUpperCase();
  this.push(upperChunk, 'utf8');
  cb();
}

var server = http.createServer(function(req, res){
  var upper = new Upper();
  if(req.method === 'POST'){
    req.pipe(upper).pipe(res);
  }
})

server.listen(process.argv[2]);
