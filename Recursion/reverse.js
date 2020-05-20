// Recursion Question

// U
// Given a string, reverse it's order
// Input: single string
// Ouput: single string
// Important Label: None

// E
// Simple Case: 'abcd' - dcba
// Complex Case: 'aaaa' - aaaa
// Empty Input Case: '' - ''
// Invalid Input Case: 1234 - ''

// 1. Edge Case: array is empty
// 2. return the last element and the string sliced without the last element

function reverse(str) {

    // Check that it is a string

    if (str.length === 0) return '';
    return str[str.length-1] + reverse(str.substring(0,str.length-1));
}

console.log(reverse(''));