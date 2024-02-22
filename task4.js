/**
 * Write an arrow function where it will do the following:
 * a. It will take two array inputs
 * b. Combine the two arrays and assign them in a new array
 * c. Find the maximum number from the new array and return the result.
*/
const numbs1 = [9, 34, 54, 65, 97, 34];
const numbs2 = [35, 56, 67, 23, 67, 76];
const getMax = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2];
    const maxNum = Math.max(...newArr);
    return maxNum;
    console.log(newArr);
}
const maxNum = getMax(numbs1, numbs2);
console.log(maxNum);