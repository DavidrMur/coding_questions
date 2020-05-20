// Recursion Question

// U
// Given an array of words, return them all capitalized
// Input: array of strings
// Output: array of strings
// Important Labels: newArr?

// E
// Simple Case: ['apple'] - ['APPLE']
// Complex Case: ['i','b','c'] - ['I','B','C']
// Empty Input Case: [] - [], [''] - []
// Invalid Input Case: [1,2,3] - no

// 1. Base Case: if array is empty, return
// 2. take first element, capitalize, push onto array, recursively call

function capitalizeWords(arr) {
    
    let newArr = [];

    helperFunction(arr,newArr);

    return newArr;
}

function helperFunction(arr, newArr) {
    if (!arr.length) return;
    newArr.push(arr[0].toUpperCase());
    helperFunction(arr.slice(1), newArr);
}

console.log(capitalizeWords(['apple','bee']));