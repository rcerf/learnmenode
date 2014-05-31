var net = require('net');

var server = net.createServer(function(socket) {
  var writeDate = function(){
    var date = new Date();
    return date.getFullYear() + '-'
         + (date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) + '-'
         + date.getDate() + ' '
         + date.getHours() + ':'
         + (date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes())
         + '\n';
  }
  socket.end(writeDate());
})
server.listen(process.argv[2]);
