const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the number: ", (number)=> {
    squareOfNumber(Number(number));
    r1.close();
});

function squareOfNumber(number) {
    for(let i=1;i<=number;i++){
        for(let j=1;j<=number;j++){
            process.stdout.write(j+' ')
        }
        console.log()
    }
}

// const n = 3;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//         row += j + " ";
//     }
//     console.log(row.trim());
// }
