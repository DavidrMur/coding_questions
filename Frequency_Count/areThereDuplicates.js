// Frequency Type Question || Multiple Pointers Questions

// U:
// Given inputs, detect if there are any duplicates
// Inputs: Variable amount, can be letters or numbers / strings or integers
// Output: Boolean. Can be generated from input
// Important label: Result

// E:
// Simple Case: (1,2,3) - F; (1,2,2) - T
// Complex Case: ('a','b','c','a') - T
// Empty Input Case: False
// Invalid Input Case: False

// Edge: empty input

// Frequency Approach

// 1: Create object denoting the frequencies of elements' frequencies
// 2: If any frequency is 2, return true

// function areThereDuplicates() {
//     if (arguments.length === 0) {
//         return false;
//     }

//     let freqObj = {};
//     let value;

//     // Step 1

//     for(let key in arguments) {
//         value = arguments[key];
//         freqObj[value] = (freqObj[value] || 0) + 1;

//         // Step 2
//         if (freqObj[value] > 1) {
//             return true;
//         }
//     }

//     return false;
// }


// Multiple Pointers Approach

// 1: Start with pointers i,j at positions 0 and 1
// 2: Move j forward, when values at both postions don't match, swap 

function areThereDuplicates() {
    if (arguments.length === 0) {
        return false;
    }

    let n = arguments.length;

    let i = 0;

   // ! Convert to array and sort
   // Will give nlogn time

    for (let j=1;j<n;j++) {
        if(arguments[i] !== arguments[j]) {
            arguments[++i] = arguments[j];
        } else {
            return true;
        }
    }

    console.log(n);
    return (++i === n ? true : false)


}

console.log(areThereDuplicates('a','b','a'));