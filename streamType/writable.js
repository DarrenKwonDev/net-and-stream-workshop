const fs = require("fs");

const w = fs.createWriteStream("test.txt");

w.on("finish", () => {
    console.log("finish");
});

w.write("hello world\n");
w.write("hello world\n");
w.end();
