/**
 * Write an arrow function where it will do the following:
 * 1. It will take an array where the array elements will be the name of your friends
 * 2. check if the length of each element is even, push elements with even length to a new array and return the result.
*/
const friends = ['zihad', 'shoron', 'nupun', 'sakib', 'sajon', 'susil', 'sidratul']
const evenName = (array) => {
    const even = [];
    for (const friend of array) {
        const nameLength = friend.split('').length;
        if (nameLength % 2 === 0) {
            even.push(friend);
        }
    }
    return even;
}
const evenNames = evenName(friends);
console.log(evenNames);