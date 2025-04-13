const { stdin, stdout } = require('process')
const readline = require('readline')

const r1 = readline.createInterface({
    input: stdin,
    output: stdout
});

r1.question("Enter number: ", (number) => {
    squarePattren(Number(number));
    r1.close();
});

function squarePattren(number){
    for(let i=1;i<=number;i++){
        for(j=1;j<=number;j++){
            if(i===1 || i === number || j === 1 || j === number){
                process.stdout.write('* ');
            } else {
                process.stdout.write('  ');
            }
        }
        console.log();
    }
}