export {};

// Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

interface SwappedValues {
  a: number;
  b: number;
}

const swap = (a: number = 0, b: number = 0): SwappedValues => {
  let temp = a;
  a = b;
  b = temp;
  return { a, b };
};
console.log(swap(5, 11));

// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

const checkEven = (num: number): string => {
  if (num % 2 === 0) return "trueInput";
  return "false";
};
console.log(checkEven(5));

// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

const largest = (arr: number[]): number => {
  let large = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
};
console.log(largest([33, 7, 5]));

// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

const toFahrenheit = (num: number): number => {
  return num * (9 / 5) + 32;
};
console.log(toFahrenheit(0));

// Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

type SignResult = "positive" | "negative" | "zero";

const checkNumber = (n: number): SignResult => {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
};
console.log(checkNumber(8));
