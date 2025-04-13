const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for start number
rl.question("Enter start number (n): ", (n) => {
  rl.question("Enter end number (m): ", (m) => {
    fizzBuzz(Number(n), Number(m));
    rl.close();
  });
});

function fizzBuzz(n,m) {
    for(let i=n;i<=m;i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
           console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    }
    
    // fizzBuzz(1,100);