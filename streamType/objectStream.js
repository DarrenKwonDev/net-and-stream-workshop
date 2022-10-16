const through2 = require("through2");
let size = 0;

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next(null, {
        length: buffer.length,
        total: (size += buffer.length),
    });
}

function write2(buffer, encoding, next) {
    console.log("obj=", buffer);
    next();
}

process.stdin
    .pipe(through2.obj(write))
    .pipe(through2.obj(write2))
    .pipe(process.stdout);
