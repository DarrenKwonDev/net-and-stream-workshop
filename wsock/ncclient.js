const wsock = require("websocket-stream");
const stream = wsock("ws://localhost:30012");
process.stdin.pipe(stream).pipe(process.stdout);
