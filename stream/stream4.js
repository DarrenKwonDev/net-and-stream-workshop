const concat = require("concat-stream");

// not efficient, but it works
// after `node stream4.js` type in some text and press Ctrl + D
// Ctrl + C is just killing process. it's has different signal
process.stdin.pipe(
    concat((buf) => {
        console.log(buf);
        console.log(buf.length); // bytes
        const src = buf.toString().toUpperCase();
        console.log(src);
    })
);
