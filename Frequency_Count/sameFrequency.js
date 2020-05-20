// sameFrequency.js

// Frequency type questions
// EGDE: mismatching lengths, no input, non numeric input

// 1: Construct an object denoting the frequencies of the first integer
// 2: Iterate over the second integer to count down frequencies
    // 2.5: If ever get -1, return false
// 3: If final object has all values set to 0, return true

function sameFrequency(int1, int2) {


    let freqObj = {};
    let arr1 = int1.toString().split('');
    let arr2 = int2.toString().split('');
    let value;

  
    if (!arr1 || !arr2) {
      return false;
    }
    else if (arr1.length !== arr2.length) {
        return false;
    }
    
    // Step 1
    for( let key in arr1) {
        value = arr1[key];
        freqObj[value] = (freqObj[value] || 0) + 1;
    }

    // console.log(freqObj);

    // Step 2
    for (let key in arr2) {
        value = arr2[key];
        freqObj[value]--;
        if (freqObj === -1) {
            return false;
        } 
    }

    console.log(freqObj);

    // Step 3
    for (let key in freqObj) {
        if (freqObj[key] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(22,222));