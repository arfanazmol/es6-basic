// for of use on array or string not in object
// for in use on object
const nobab = 'arfan azmol';
for(const char of nobab){
    console.log(char);
}
//----------------------------
const glass = {
    name: 'glass',
    color: 'golden',
    price:12,
    isCleaned: true

};

for(const key in glass){
    const value = glass[key];
    console.log(key, value)
}


const multiplyThreeNumbers  = (num1, num2, num3) => {
    return num1 * num2 * num3;
};
const result = multiplyThreeNumbers (23, 56, 65);
console.log(result)