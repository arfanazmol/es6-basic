// default ---> if value is not provided, take this as a default.
function add(num1,num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2,result);
    return result;
}

const sum = add(2);

function fullName(first, last =''){
    const full = first + ' ' + last;
    return full;
}

function friend(numbs = []){

}

function person(human = {}){

}

// default peramiter......................
function add(num1, num2){
    let result = 0;
     result = num1 + num2;
     console.log(result);
}

add(20)