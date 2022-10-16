const { createHash } = require("crypto");

// should exit with Ctrl + D
process.stdin
    .pipe(createHash("sha512", { encoding: "hex" }))
    .pipe(process.stdout);
