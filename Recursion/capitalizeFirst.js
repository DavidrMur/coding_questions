// Recursion Question

// U
// Given an array of strings, capitalize the first character of each
// Input: array of strings
// Output: array of strings with each word capitalized

// E
// Simple Case: ['apple'] - ['Apple']
// Complex Case: ['car','taco', ''] - ['Car','Taco', ''];
// Empty Input Case: [''] - []
// Invalid Input Case: [1,2,3] - []?

// 1. Edge Case: array length is 0, return
// 2. Take first element, capitalize first letter
// 3. Slice it out, push onto new array
// 4. Recursively call

function capitalizeFirst(arr) {
   let newArr = []

   helperFunction(arr, newArr);

   return newArr;
}

function helperFunction(arr, newArr) {
    if (!arr.length || !arr[0].length) return;
    let temp = arr[0][0].toUpperCase() + arr[0].substring(1);
    newArr.push(temp);
    helperFunction(arr.slice(1), newArr);
}

console.log(capitalizeFirst(['apple','taco']))