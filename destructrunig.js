const actor = {
    name : 'lalon fokir',
    age: 50,
    phone: '01776445166',
    money: 758672522897
}
// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
const {money, age: boyos, name, phone} = actor
// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age; 

console.log(money,  name, phone)
console.log(boyos)
// console.log(name)
// console.log(phone)


// array destructuring.
const numbers = [45, 99]
const [first, secend] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}
const [ prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo)