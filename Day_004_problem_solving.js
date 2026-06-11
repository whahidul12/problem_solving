// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.

function countProperties(obj) {
    return Object.keys(obj).length;
}

// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}



// Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.

function fizzBuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    console.log(result.join(','));
}




// Problem 19: Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().

function invertObject(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
}



// Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.


function findDuplicateNames(arr) {
    const counts = {};
    const duplicates = [];

    for (const item of arr) {
        const name = item.name;
        counts[name] = (counts[name] || 0) + 1;
        if (counts[name] === 2) {
            duplicates.push(name);
        }
    }

    return duplicates;
}
