// Sliding Window Question

// U
// Given an array of integers and an integer (sum), find the length of contiguous elements whose sum is greater or equal to the sum integer
// Inputs: one positive array of integers, a positive integer. Not sorted
// Outputs: a positive integer. 0 if unable to find. The MINIMAL length
// Important Labels: minLength - hold the return value

// E
// Simple Case: [1,2],3 - 2
// Complex Case: [0,1],1 - 1
// Empty Input Case: [], 1 -0, [1,2,3], - 0
// Invalid Input Case: ['a',b','c'],2 - 0

// 1. Start at index i (0), if less than sum, increment window
// 2. Once exceed sum, look to remove beginning or end (whichever will keep us above the sum)
// 3. Once minimized, save value. Increment i and try to find smaller

function minSubArrayLen(arr, sum) {

    if (!arr.length || !sum) {
        return 0;
    }

    // Check if the exact value or greater can be found (does not affect complexity but would cut down time, i think)
    
    let minLength;

    let i = 0;
    let windowSize = 0;
    let differenceSum, difference1, difference2;
    let windowSum = arr[i];
    let startFlag = true;

    while (i < arr.length && (i + windowSize < arr.length)) {
        
        if (arr[i] >= sum) {
            return 1;
        }

        if (windowSum < sum) {
            windowSum += arr[i + ++windowSize];
        } else {
            differenceSum = windowSum - sum;
            difference1 = differenceSum - arr[i];
            difference2 = differenceSum - arr[i + windowSize];

            if ((difference1 < difference2 || difference2 < 0 ) && difference1 >= 0) {
                windowSum -= arr[i++];
                windowSize--;
            } else if (difference2 >= 0) {
                windowSum -= arr[i + windowSize--];
            } else {
                minLength = (windowSize < minLength ? windowSize : startFlag ? windowSize : minLength);
                startFlag = false;
                windowSum = windowSum - arr[i++] + arr[i + windowSize];
            }
        }

    }

    return (startFlag ? 0 : minLength + 1);
}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));
console.log(minSubArrayLen([2,3,1,2,4,3],7));
console.log(minSubArrayLen([],7));