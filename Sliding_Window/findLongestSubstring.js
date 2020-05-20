// Sliding Window Question

// U
// Find the longest substring of consecutive unique characters
// Input: string of any length
// Output: integer representing the length of longest substring
// Important Labels: substringLen

// E
// Simple Case: 'abcd' - 4 'aaaa' - 1
// Complex Case: 'thecatinthehat' - 7
// Empty Input Case: '' - 0
// Invalid Input Case: 1 - 0

// 1. Start index i at 0. Increase window size 
// 2. Check array to see if incoming character exists in the string already
//  2.5 if it has then save the length, wipe clean and start from this new character's position
// 3. Return length

function findLongestSubstring(str) {

    if (!str) {
        return 0;
    }

    let arr = str.split('');
    console.log(arr);

    let i = 0;
    let windowSize = 0;
    let substringLen = 0;
    let freqCount = {};
    let value;
    let startFlag = true;

    while (i < arr.length -1 && (i + windowSize) < arr.length) {

        value = arr[i + windowSize];
        freqCount[value] = (freqCount[value] ? freqCount[value] : 0) + 1;

        if (freqCount[value] > 1 || ((i + windowSize) === arr.length - 1)) {
            substringLen = (windowSize > substringLen ? windowSize: startFlag ? windowSize : substringLen);
            startFlag = false;
            //substringLen = windowSize - i;
            edgeValue = arr[i];

            if (value === edgeValue) {
                i++;
                freqCount[edgeValue]--;
            } else {
                i += windowSize;
                freqCount = {};
                windowSize = 0;
            }
        } else {
            windowSize++;
        }

    }

    return (startFlag ? windowSize : substringLen);
    

}

console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('thisisawesome'));