// array literal syntax | time complexity: O(1) | space complexity: O(1) if array is empty, otherwise O(n)
const arr: number[] = [1, 2, 3, 4, 5];

// console.log(arr);

// array constructor syntax | time complexity: O(1) | space complexity: O(n)
const arr2 = new Array(10);

// console.log(arr2);

const arr3: number[] = [1, 2, 3, 4, 5];

arr3.push(6);
arr3.unshift(0); // time complexity: O(n) | space complexity: O(1)
arr3.splice(2, 0, 9); // time complexity: O(n) | space complexity: O(1)

console.log(arr3);
