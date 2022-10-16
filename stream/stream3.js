const Transfrom = require("stream").Transform;
const toUpper = new Transfrom({
    transform(buffer, encoding, next) {
        next(null, buffer.toString().toUpperCase());
    },
});

process.stdin.pipe(toUpper).pipe(process.stdout);
