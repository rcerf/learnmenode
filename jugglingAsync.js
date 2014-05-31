var http = require('http');
var arg = 2;
var total = [];
var getResult = function(arg){
  http.get(process.argv[arg], function(response){
    var result = '';
    response.setEncoding('utf8');
    response.on('data', function(data){
      result += data;
    });

    response.on('end', function(){
      total.push(result);
      arg++;
      if(arg === process.argv.length){
        total.forEach(function(data){
          console.log(data);
        });
        return;
      }
      getResult(arg);
    });
  });
};
getResult(arg);
