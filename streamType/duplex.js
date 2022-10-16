const { Writable } = require("stream");
const net = require("net");

// open tcp server
// use nc for request
const server = net.createServer((socket) => {
    // socket extends stream.Duplex
    socket.pipe(socket); // not making infinite loop. it's duplex, input & output decoupled. so, just echo
});
server.listen(30012);
