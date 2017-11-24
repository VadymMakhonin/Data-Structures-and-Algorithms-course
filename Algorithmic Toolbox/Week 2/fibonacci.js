let readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    let n = parseInt(line.toString(), 10);
    console.log(fibonacci(n));
    process.exit();
  }
}

function fibonacci(n) {
    const arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
}