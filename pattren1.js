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

function pattren(number){
    for(let i=0;i<number;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write('* ');
        }
        console.log();
    }
}