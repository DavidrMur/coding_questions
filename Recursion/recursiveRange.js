// Recursion Question

// U
// factorial but adding numbers instead
// Input: integer
// Output: integer
// Important Labels: none

// E
// Simple Case: 4 - 10
// Complex Case: 0 - 0
// Empty Input Case:  - 0
// Invalid Input Case: 'a' - 0

// Take first element and add with recursively called sliced array

// 1. Edge Case: if array is empty, return 0
// 2. Return first element being added with recursively called function with sliced array

// I made an oop but same idea

function recursiveRange(num) {

    if (num === 0 || !num) return 0;
    return num + recursiveRange(num-1);

}

console.log(recursiveRange());