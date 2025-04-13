const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the number: ", (number)=> {
    CountDigitsInNumber(Number(number));
    r1.close();
});

function CountDigitsInNumber(number){
    //let str = number.toString();
    let str = String(number)
    let length = str.length
    console.log(`The number of digits in ${number} is ${length}`);
}