//Fibonachi

let num = 5;

fibo(num);

function fibo(num){
    let preValue = 0;
    let currValue = 1;
    for (let i = 0; i < num; i++){
        let result = preValue + currValue;
        preValue = currValue;
        currValue = result;
        console.log(result);
    }
}

//factorial_____________________________________________________________________-
console.log("empty");

let a = 2;
let b = 6;
let h = 2;
let sumOfFactorial = 0;

for(let i = a; i<=b; i += h){
    sumOfFactorial += factorial(i);
}

console.log(sumOfFactorial);

function factorial(number){
    let fact = 1;
    for (let i = number; i >= 1; i--){
        fact *= i;
    }

    return fact;
}


console.log("empty");

//if-else________________________________________________________

for(i = 0; i<=100; i++){
    if(i%2==0){
        document.write(`${i} <br>`);
    }
}

//squareOfNum___________________________________________________________
console.log("empty");

let firstNum = 1;
let secondNum = 100;
let sumOfSquare = 0;

for (let i = firstNum; i<=secondNum; i++){
    if(i%2 == 0){
        sumOfSquare += Math.pow(i, 2);
    } else{
        continue;
    }
    console.log(sumOfSquare);
}



