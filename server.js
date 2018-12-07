let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let Rx = require('rxjs/Rx');

io.on('connection', (socket) => {

 let randomvalue = Rx.Observable.interval(10000).map(x => Math.random() * 1000);

   randomvalue.subscribe(value => socket.emit('message', value));

  // Log whenever a user connects
  console.log('user connected');


  // Log whenever a client disconnects from our websocket server
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  // When we receive a 'message' event from our client, print out
  // the contents of that message and then echo it back to our client
  // using `io.emit()`
  socket.on('message', (message) => {
    console.log("Message Received: " + message);
    io.emit('message', "lel");
  });
});


// Initialize our websocket server on port 5000
http.listen(5000, () => {
  console.log('started on port 5000');
});
