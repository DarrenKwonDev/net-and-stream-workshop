const http = require("http");
const concat = require("concat-stream");
const qs = require("querystring");
const through2 = require("through2");

const server = http.createServer((req, res) => {
    const counter = () => {
        let size = 0;

        return through2((buf, enc, next) => {
            size += buf.length;
            if (size > 20) {
                next(new Error("too big"), null);
            }
            next(null, buf);
        });
    };

    const onBody = (buf) => {
        const params = qs.parse(buf);
        console.log(params);
        res.end("ok\n");
    };

    req.pipe(counter()).pipe(
        concat({ encoding: "string" }, onBody)
    );
});

server.listen(30012);
