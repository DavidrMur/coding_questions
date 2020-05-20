// Recursion Questions

// U
// Given an object various data types, return an array with all the strings
// Input: Object of various data types
// Output: Array of all the string values
// Important Labels: arr - holds the strings

// E
// Simple Case:  {a: 'hello'} - ['hello']
// Complex Case: {a: 'hello', b: {a: 'hello',b: 1}} - ['hello','hello'] 
// Empty Input Case: {} - []
// Invalid Input Case: ??

// Check the current key, if type string push onto array, otherwise move on
// if it's an object, recursively call with its object and keys

// 1. Base Case: if keys are 0 or undefined, return
// 2. Check if the value at key[0] is a string or an object
//  2.5 String - push it onto the array
//      Object - recursively call with itself and its keys
// 3. recursively call with the obj and sliced keys

function collectStrings(obj) {
    let arr = [];
    let keys = Object.keys(obj);
    
    helperFunction(obj, keys, arr);
    return arr;
}

function helperFunction(obj, keys, arr) {
    if (!keys || !keys.length) return;
    let temp = obj[keys[0]];
    if (typeof(temp) === 'string') arr.push(temp);
    if (typeof(temp) === 'object') helperFunction(temp, Object.keys(temp), arr);
    helperFunction(obj, keys.slice(1), arr);
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))