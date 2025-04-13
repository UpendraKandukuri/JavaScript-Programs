const { stdin, stdout } = require('process');
const readline = require('readline');

const r1 = readline.createInterface({
    input: stdin,
    output: stdout
});

r1.question("Enter start number: ", (start) => {
    r1.question("Enter end number: ",(end)=> {
        sumOfEvenNumbers(Number(start),Number(end));
        r1.close();
    })

})

function sumOfEvenNumbers(start, end){
    let sum =0;
    for(let i=start;i<=end;i++){
        if(i % 2 === 0){
            sum += i;
        }
    }
    console.log(sum);

}