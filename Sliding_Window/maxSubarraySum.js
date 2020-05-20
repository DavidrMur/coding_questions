// Sliding Window Problem

// U
// Given array of integers, find a group of consecutive integers (given by input) which produces the highest sum
// Input: pos and neg integers, not infinity, not sorted. window size given as input
// Output: return the highest sum 
// Important Label: maxSum

// E
// Simple Case: [1,2,3],2 - 5
// Complex Case: [-3,4,0,-2,6,-1],2 - 5
// Empty Input Case: [1,2,3] - 0, [],1 - null
// Invalid Input Case: ['a','b','c'], 2 - null, [1,2], 5 - null (length too much)

// EDGE: letters or empty input
// Step 2: initialize i (at 1), the center of the window. Evaluate sum
//  2.5: if sum is greater than maxSum then replace
// Step 3: Move window to the right until i reaches the end

function maxSubarraySum(arr, length) {

    if (arr.length === 0 || !length || arr.length < length) {
        return null;
    }
    
    let maxSum;
    let sum =0;
    let startFlag = true;
    let endPos = arr.length-length+1;

    for(let j=0;j<length;j++) {
        sum += arr[j];
    }

    for(let i=length;i<arr.length;i++) {

        // check if both elements are integers using: Number.isInteger()

        sum += (arr[i] - arr[i-length]);

        if(startFlag || sum > maxSum ) {
            startFlag = false;
            maxSum = sum;
        }
    }

    return maxSum;

}

console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4));