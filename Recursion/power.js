// Recursion problem

// U
// Given two integers, a base and an exponent, calculate the value of num^exp
// Input: two positive integers,
// Output: integer
// Important labels: none?

// E
// Simple Case: (2,2) - 4
// Complex Case: (1,100) - 1
// Empty Input Case: (,) - 0
// Invalid Input Case: ('a',1) - 0

// Want to recursively call the function exp number of times, each time multiplying the num by itself

// 1. Base Case: if exp === 1: return num
// 2. return num * power(num,exp-1)

function power(num,exp) {

    if (!exp) {
        return 1;
    }

    if (exp === 1) return num;
    return num * power(num,exp-1);
}

console.log(power(3,0));