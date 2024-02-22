/**
 * Write an arrow function where it will do the following:
 * a. Square each array element
 * b. Calculate the sum of the squared elements
 * c. Return the average of the sum of the squared elements
*/
const numbers = [3, 5, 6, 8, 4, 2];
const squareSumAvgNumbers = (array) => {
    let sumOfSquareNum = 0;
    for (const number of array) {
        const squareNum = Math.pow(number, 2);
        sumOfSquareNum = sumOfSquareNum + squareNum;
    }
    const sumAvgNumbers = sumOfSquareNum / array.length;
    return sumAvgNumbers;
}
const result = squareSumAvgNumbers(numbers);
console.log(result);