// Recursive Question

// U 
// Given a number, find it's factorial 
// Input: integer
// Output: integer
// Important Label: none

// E
// Simple Case: 2 - 2
// Complex Case: 0 - 0
// Empty Input Case: - 0
// Invalid Input Case: 'a' - 0

// Recursively call the function with an ever decreasing num until it is 1

//  1. Edge Case: if 1 return 1, if 0 return 0;
//  2. Multiply current num with result of recursively called function with the num decremented

function factorial(num) {

    if (num === 0) {
        return 1;
    }

    if (num === 1) return 1;
    return num * factorial(num-1);

}

console.log(factorial(1));