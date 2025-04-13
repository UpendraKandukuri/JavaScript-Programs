
const readline = require('readline');

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter Number: ",(number) => {
    checkPrimeNumber(Number(number));
    r1.close();
});


function checkPrimeNumber(number) {
    let count = 0;
    for(let i=2;i<number/2;i++){
        if(number % i === 0){
            count++;
            break;
        }
    }
    if(count == 0){
        console.log(number + " is prime number");
    } else {
        console.log(number +" is not prime number");
    }
}

// checkPrimeNumber(number);