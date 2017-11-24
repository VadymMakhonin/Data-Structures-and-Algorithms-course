let readline = require('readline');

process.stdin.setEncoding('utf8');
let rl = readline.createInterface({
  input: process.stdin
});
let isFirstLine = true;

rl.on('line', readLine);

function readLine (line) {
    if (!isFirstLine) {
        let bigestNumbers = [0, 0];
        line.toString()
            .split(' ')
            .forEach(number => {
                number = parseInt(number, 10);
                if (number >= bigestNumbers[0]) {
                    bigestNumbers[1] = bigestNumbers[0];
                    bigestNumbers[0] = number;
                } else if (number > bigestNumbers[1]) {
                    bigestNumbers[1] = number;
                }
            });
        console.log(bigestNumbers[0] * bigestNumbers[1]);
        process.exit();
    }
    isFirstLine = false;
}