// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

const reverse = (input) => {
    let Output = input.split("").reverse("").join("");
    return Output;
}
console.log(reverse("12345"));


// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.


const vowelCount = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        switch (str[i].toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                count++
                break;
            default:
                break;
        }
    }
    return count;
}
console.log(vowelCount("javascript"));


// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.


const palindrome = (input) => {
    let reverse = input.split("").reverse("").join("");
    if (input === reverse) return true
    return false
}
console.log(palindrome("racecar"));


// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

const CapitalizeFirstLetter = (str) => {
    return str.split("").map((element, index) => {
        if (index === 0) {
            return element.toUpperCase();
        }
        return element;
    }).join("")
}
console.log(CapitalizeFirstLetter("hello"));

// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.



const countOccurrences = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a") {
            count++
        }
    }
    return count;
}
console.log(vowelCount("banaana"));


