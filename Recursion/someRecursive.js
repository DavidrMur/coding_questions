// Recursion Question

// U
// Given an array and a callback, return true if a single element when passed into the callback returns true
// Input: an array (any data type) and a function / callback
// Output: boolean
// Important Label: nada

// E
// Simple Case: ([1,2],cb) - t
// Complex Case: ?
// Empty Input Case: [], cb - t/f (could still return t), [1,2], - f
// Invalid Input Case: [1,2], [1,2]

// Recursively call the function, if ever true then just return true

// 1. Edge Case: cb(value) return true, return true for all
// 2. Call cb on next value in array

function someRecursive(arr, cb) {

    // Check that cb is actually a function

    if (cb(arr.length === 0)) return false;
    if (cb(arr[0])) return true;
    return someRecursive(arr.slice(1),cb)
}

