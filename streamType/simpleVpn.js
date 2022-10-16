const net = require("net");
const crypto = require("crypto");

const PASSWORD = "123";

// should run `node duplex.js&` first
const server = net.createServer((socket) => {
    socket
        .pipe(net.connect(30012, "localhost", () => {})) // net.connect return stream.Duplex
        .pipe(socket); // echo
});

server.listen(30015);
