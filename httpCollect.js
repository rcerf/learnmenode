var http  = require('http');
http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  var result = "";
  response.on('data',function(data){
    result += data;
  });
  response.on('end', function(){
    console.log(result.length);
    console.log(result);
  });
})
