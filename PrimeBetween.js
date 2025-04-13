
const { stdin, stdout } = require('process');
const readline = require('readline');

const r1 = readline.createInterface({
    input: stdin,
    output: stdout
});

r1.question("Enter start number: ", (start) => {
    r1.question("Enter end number: ",(end)=> {
        primeNumberBetween(Number(start),Number(end));
        r1.close();
    })

})

function primeNumberBetween(start, end){

    if(start === 0 || start === 1){
        console.log(start+" is not prime number");
        console.log("Enter correct start number");
    }

    for(let i=start;i<=end;i++){
        let count = 0;
        for(let j=2;j<i/2;j++){
        if(i % j === 0){
            count++;
            break;
        }
        }
        if(count === 0){
            console.log(i);
        } 
    }
}