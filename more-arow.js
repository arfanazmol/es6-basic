const differene = (x, y) => x - y;
const multiply = (first, secend, third) => first * secend * third;


//single parameter or one parameter
const property = (person) => person.name;
const student = {
    name: 'arfan azmol',
    age: 50
}
const name = property(student)
console.log(name)

// no parametaer
const get = () => Math.PI
console.log(get())

// large arrow function.large arrow function if you want to get anything returned from this function then you have to use the return keyword 
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}

// single parameter
const doubleIt = num => num * 2;
//-----------------------------

const getthird = number => number[2];
const third = getthird([223, 43, 33, 83, 23, 54])
console.log(third)