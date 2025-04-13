const { stdin, stdout } = require('process')
const readline = require('readline')

const r1 = readline.createInterface({
    input: stdin,
    output: stdout
});

r1.question("Enter number: ", (number) => {
    pyramid(Number(number));
    r1.close();
});

function pyramid(number){
    for(let i=1;i<=number;i++){
        for(let j=number-i;j>=1;j--){
            process.stdout.write(' ');
        }
        for(let j=1;j<=i;j++){
            process.stdout.write('* ');
        }
        console.log();
    }
}