const http = require("http");
const ecstatic = require("ecstatic");
const wsock = require("websocket-stream");
const through2 = require("through2");

const server = http.createServer(
    ecstatic(__dirname + "/public")
);
server.listen(30012);

function loud() {
    return through2(function (buffer, encoding, next) {
        next(null, buffer.toString().toUpperCase());
    });
}

wsock.createServer({ server }, function (stream) {
    stream.pipe(loud()).pipe(stream);
});
