const http = require("http");
const fs = require("fs");

// req is extended from stream.Readable
// res is extended from stream.Writable
const server = http.createServer((req, res) => {
    if (req.method === "POST") {
        req.pipe(process.stdout);
        req.once("end", function () {
            res.end("ok\n");
        });
    } else {
        //
    }
});

server.listen(30012);
