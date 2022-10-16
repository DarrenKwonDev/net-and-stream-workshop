const { spawn } = require("child_process");

const proc = spawn("grep", ["potato"]);

proc.stdin.write("cheese\n");
proc.stdin.write("carrots\n");
proc.stdin.write("carrot potato\n");
proc.stdin.write("potato chips\n");
proc.stdin.write("carrot\n");
proc.stdin.end();

proc.stdout.pipe(process.stdout); // 현 프로세스의 stdout으로 piping
