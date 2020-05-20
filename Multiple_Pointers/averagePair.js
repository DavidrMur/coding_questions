// Multiple Pointers Question

// U
// Given a set or ordered integers, find pair whose average matches the input
// Input: avg can be a double, sorted integers
// Output: boolean if pair exists
// Important label: result

// E
// Simple Case: [1,2,3], 2.5 - T
// Complex Case: [-1,0,3,4,5,6], 4.1 - F
// Empty Input Case: [],4.3 - F
// Invalid Input Case: ['a'], 3.0 - F

// EDGE: empty input or a letters

// Step 1: Initialize i and j to start at opposite ends
// Step 2: Calculate sum of elements at i and j. If average meets criteria, return true
//  2.5: if average is too small, increment i, otherwise decrement j
// Step 3: If i and j reach the centre, return false

function averagePair(arr, avg) {

    let n = arr.length;
    let i = 0;
    for (let j = n-1; j>i;j--) {
        let tempAvg = (arr[i] + arr[j])/2;
        if (tempAvg === avg){
            return true;
        } else if (tempAvg < avg) {
            i++;
            j++;
        }
    }

    return false;

}

console.log(averagePair([-1,0,3,4,5,6], 4.1));