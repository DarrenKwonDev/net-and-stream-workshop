const { Writable } = require("stream");

const w = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },
});

process.stdin.pipe(w);
