// Recursion Question

// U
// Return a boolean depending on whether the given string is a palindrome
// Input: String
// Output: boolean
// Important Labels:

// E
// Simple Case: 'tacocat' - t
// Complex Case: 'awesome' - f
// Empty Input Case: '' - f
// Invalid Input Case: 1234 - f

// Recursively compare each element to it's counterpart, eventually honing in on the center
// 1. Edge Case: if right at the center, or if cannot divide further
// 2. Compare element i (at 0) and it's mirror part 
// 3. Recursively call with i++ and mirror part

function isPalindrome(str) {

    // Check if initial string is 0 and if it really is a string

    if (str.length === 0 || str.length === 1) return true;
    if (str[0] !== str[str.length-1]) return false;
    return isPalindrome(str.substring(1,str.length-1));
}

console.log(isPalindrome(''));