let readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    let n = parseInt(line.toString(), 10);
    console.log(fibonacciLastDigit(n));
    process.exit();
  }
}

function fibonacciLastDigit(n) {
    let n1 = 0,
        n2 = 1,
        n3;
    for (let i = 2; i <= n; i++) {
        n3 = (n1 + n2) % 10;
        n1 = n2;
        n2 = n3;
    }
    return n2;
}