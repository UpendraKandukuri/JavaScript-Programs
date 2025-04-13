const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the number: ", (number)=> {
    reverseNumber(Number(number));
    r1.close();
});

function reverseNumber(number){
    let number1 = number;
    let reverse = 0;

    while(number > 0){
    let r = number % 10;
    reverse = (reverse * 10) + r;
    number = Math.floor(number / 10);

    }
    console.log(`The reverse number of ${number1} is ${reverse}`);
}