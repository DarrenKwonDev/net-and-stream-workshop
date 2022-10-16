const fs = require("fs");
const through = require("through2");

// process.stdin 자체가 readable stream임.
process.stdin.pipe(through(toUpper)).pipe(process.stdout);

function toUpper(buffer, encoding, next) {
    next(null, buffer.toString().toUpperCase());
}
