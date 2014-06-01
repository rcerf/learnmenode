var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  var respond = function(formatedDate){
    formatedDate = JSON.stringify(formatedDate);
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(formatedDate);
  }

  if(req.method === "GET"){
    var currentUrl = url.parse(req.url, true)
    var date = new Date(currentUrl.query.iso);
    if(currentUrl.pathname === '/api/parsetime'){
      var dateObj = {};
      dateObj.hour = date.getHours();
      dateObj.minute = date.getMinutes();
      dateObj.second = date.getSeconds()
      respond(dateObj);
    }
    if(currentUrl.pathname === '/api/unixtime'){
      date = {"unixtime": date.getTime()};
      respond(date);
    }
  }else{
    res.writeHead(404);
    res.end();
  }
});

server.listen(process.argv[2]);
