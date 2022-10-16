const fs = require("fs");

const r = fs.createReadStream("test.txt");
r.pipe(process.stdout);
