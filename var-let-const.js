// var : no reason to use var
// let: allow it to reassign
// const: do not allow it to reassing

/*1---------let------------*/
// let count = 30;
// count = count + 500;
// console.log(count)
//------------------------//
// let document = 150;
// let score = 100;
// let run = 70;
// total = document + score * run
// console.log(total)
//----------------------------//

/*2---------const----------------*/
// const exam = 500;
// const math = 500;
// const english = 900;
//  total = exam + math + english
// console.log(total)

// const numbers = [23, 45, 54, 76, 98];
// numbers [1] = 500;
// numbers.push(121,443,546)
// console.log(numbers);
//-------------------------------//

//object.....

let student ={
    name: 'arfan azmol',
    class:14
}
student.name = "shalisele";
console.log(student)

//loop

let sum = 0;
for(let i = 0; i <10; i++){
    sum = sum + i;
}

console.log(sum);