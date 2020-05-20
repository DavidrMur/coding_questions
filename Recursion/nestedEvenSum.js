// Recursion Queston

// !!! THIS QUESTION HURT !!!

// U
// Given an object of objects, sum values which are even
// Input: objects of objects with random keys and other fluff
// Output:  integer sum
// Important Label: none?

// E
// Simple Case: {a: 2, b: 2, c: 3} - 4
// Complex Case: {a: 2, b: { beep: 2, bop: 'bloop'}} - 4
// Empty Input Case: {} - 0
// Invalid Input Case: nada !check to make sure it is an integer and even

// Recursively call object and flush out all values, if stumble on another object, flush that out first

// 1. Edge Case: object is empty
// 2. Check the first element of the object
//      2.5 if is an object, recursively call on that subset, otherwise continue
// 3. If even value, add to sum
// 4. Slice out of object
// 5. Recursively call

// POST: wanted to treat the obj like an array but that felt too messy, instead I worked with the keys,
//  so that way I wouldn't have to copy the object. Just a lot easier to handle an array as opposed to
// an object

function nestedEvenSum(obj) {
    let keys = Object.keys(obj);

    return helperFunction(obj, keys);
}

function helperFunction(obj, keys) {
    if (!keys.length) return 0;
    let temp = obj[keys[0]]
    let temp2;
    let temp3;
    if (Object.keys(temp) && typeof(temp) === 'object') temp3 = (helperFunction(temp, Object.keys(temp)) + helperFunction(obj, keys.slice(1)));
    //else return (temp % 2 === 0 ? temp : 0) + helperFunction(obj, keys.slice(1))
    else temp3 = helperFunction(obj, keys.slice(1));
    temp2 = (temp % 2 === 0 ? temp : 0) + temp3;
    return temp2;
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

console.log(nestedEvenSum(obj2));

