// Recursion Question

// U
// Given an array of arrays, flatten it such that a single array with all values is returned
// Input: array of arrays (no specified data type)
// Output: array with only values

// E
// Simple Case: [1,2,3,4] - [1,2,3,4]
// Complex Case: [1,2,[3,4]] - [1,2,3,4]
// Empty Input Case: [] - []
// Invalid Input Case: 'abcd' - ? string kinda is an array

// Recursively call array and push onto new array

// 1. Edge Case: Array is empty?
// 2. Recursively call such that all values in array are pushed onto new array

function flatten(arr) {

    let newArr = [];
    helperFunction(arr, newArr);
    return newArr;
}

function helperFunction (arr, newArr) {

    if (!arr.length) return;
    if (arr[0].length) helperFunction(arr[0], newArr);
    else newArr.push(arr[0]);
    helperFunction(arr.slice(1), newArr);
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));