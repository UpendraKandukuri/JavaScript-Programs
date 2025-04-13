const { stdin, stdout } = require('process')
const readline = require('readline')

const r1 = readline.createInterface({
    input: stdin,
    output: stdout
});

r1.question("Enter number: ", (number) => {
    pattren(Number(number));
    r1.close();
});

function pattren(number) {
    let n=1;
    for(let i=1;i<=number;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(n+' ');
            n++;
        }
        console.log();
    }
}