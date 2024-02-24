//function declaration

function add (a, b){
    const result = a + b ;
    return result;
}

// function expression

const add2 = function(a, b){
    return a + b;
}

//arow function a shudhu change hobe return ta  tasara shob kisu thik thak thakbe ..........

const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4, num5) => num1 + num2 + num3 + num4 + num4 + num5;


const sum1 = add4(10, 20, 30, 40, 50)
// const sum = multiply(23, 43)
console.log(sum1)
