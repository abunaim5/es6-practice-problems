/**
 * 1. write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
 * 
 * 2. write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.
 * 
 * 3. write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
*/
// 1.
const numbers = (num1, num2, num3) => num1 * num2 * num3;
const multiply = numbers(5, 6, 9);
console.log(multiply);

// 2.
const mySelf = `
I am a web developer.
I love to code.
I love to eat biryani`
console.log(mySelf);

// 3.
const addNum = (num1 = 0, num2 = 10) => num1 + num2;
const result = addNum(75);
console.log(result);