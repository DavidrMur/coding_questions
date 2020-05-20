// Multiple Pointers Questions

// U
// Given two inputs, check if the sequence of characters in the first are a subsequence of the second
// Input: two strings, where the second string should be longer than the first. Upper and lower case?
// Output: boolean, true is subsequence
// Important Labels: result

// E
// Simple Case: 'hello', 'hello world' - T
// Complex Case: 'sing', 'sting' - T
// Empty Input Case: '', '' - F
// Invalid Input Case: '1','2' - F

// EDGE: empty input

// Step 1: Initialize two pointers starting at the beginning of each word, i and j
// Step 2: Iterate j through second word until finding the character located at i, increment i
// Step 3: Continue to iterate through j and as characters consequtively match increment i
// Step 4: If element at j and i do not match, set i back to position 0
//  4.5: if i reaches full length, return true. Otherwise false

function isSubsequence(str1,str2) {

    
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    if (arr1.length === 0 || arr2.length === 0 ) {
        return false;
    }

    let i = 0;

    for (let j =0; j<arr2.length; j++) {
        arr1[i] === arr2[j] ? i++ : null;

        if (i === arr1.length) {
            return true;
        }
    }
    return false;
}

console.log(isSubsequence('','hello world'));