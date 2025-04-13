
const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question( "Enter Number: ", (number)=> {
    multiplication(Number(number));
    r1.close();
});

function multiplication(number) {
    console.log(`multiplication table of ${number}`);
    for(let i=1;i<=number;i++){
        console.log(`${number} x ${i} = ${number * i}`);
    }
}