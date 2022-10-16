const http = require("http");

const req = http.request(
    {
        method: "POST",
        host: "localhost",
        port: 30012,
        path: "/",
    },
    function (res) {
        console.log(res.statusCode);
        res.pipe(process.stdout);
    }
);

req.end("hello\n");
