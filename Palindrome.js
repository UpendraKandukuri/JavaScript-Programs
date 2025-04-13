const readline = require('readline');

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter Number: ",(number) => {
    checkPalindrome(Number(number));
    r1.close();
});

function checkPalindrome(number) {
    let number1 =number;
    let sum = 0;

    while(number>0){
        let r = number % 10;
        sum = (sum*10) + r;
        number = Math.floor(number / 10);
    }
    if(sum === number1){
        console.log(`${number1} is palindrome`);
    } else {
        console.log(`${number1} is not palindrome`);
    }
}