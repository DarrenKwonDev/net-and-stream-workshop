const http = require('http');

var server = http.createServer(function(req, res) {
    console.log(req.method, req.url, req.headers);
    const chunks = [];
    req.on("data", (chunk) => {
        chunks.push(chunk);
    });
    req.on("end", () => {
        console.log("all parts/chunks have arrived");
        const data = Buffer.concat(chunks);
        console.log("Data: ", data);
        console.log(JSON.parse(data.toString()));
    });
    res.end("ok")
})

server.listen(30012);