// Recursion Question

// U
// Given an object, find all the integers are stringify them
// Input: objects of objects with varying data types
// Output: objects of objects with only numbers as strings
// Important Labels: none?

// E
// Simple Case: {a: 2} - {a:'2'}
// Complex Case: {a: 2, b: {a: 2, b: 2}} - {a: '2', b: {a: '2', b: '2'}}
// Empty Input Case: {} - {}
// Invalid Input Case: newObj;

// For every actual element, check if integer, if it is change to string
// For every object, iterate through its keys

// 1. Base case: keys is empty, return
// 2. Look at current key, is value a number or an object?
//  2.5 Number: change to string
//      Object: recursively call with this object and it's keys
// 3. Recursively call with obj and keys, but first index of key sliced out

function stringifyNumbers(obj) {

    let newObj = Object.assign({}, obj);
    let keys = Object.keys(obj);
    helperFunction(newObj, keys);
    return newObj;
}

// Could also have done: for(var key in obj)

function helperFunction(obj, keys) {
    if(!keys || !keys.length) return;
    let temp = obj[keys[0]];
    if (typeof(temp) === 'number') obj[keys[0]] = temp.toString();
    if (typeof(temp) === 'object') helperFunction(temp, Object.keys(temp));
    helperFunction(obj, keys.slice(1));
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));