// Recursive Questions

// U
// Given an array of integers, find the product of them
// Input: array of integers, positive or negative, not sorted
// Output: integer
// Important Labels: none

// E
// Simple Case: [2,1] - 2
// Complex Case: [3,0] -  0
// Empty Input Case: [] - 0? null
// Invalid Input Case: ['a'] - 0? null

// Take first element, cut down array from first and recursively call with remaining array

// 1. Edge Case: array is empty - return * 1
// 2. Take first element, recursively call on sliced array

function productOfArray(arr) {

    if (arr.length === 0) return 0;
    return helperFunction(arr);
}

function helperFunction(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * helperFunction(arr.slice(1));
}

console.log(productOfArray([1,2,3]));