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

// console.log(arr3);

// Accessing array elements and array traversal
const arr4: number[] = [1, 2, 3, 4, 5];

let value = arr4[3];
// console.log(value);

for (let i = 0; i < arr4.length; i++) {
  // console.log(arr4[i]); // time complexity: O(n) | space complexity: O(1)
}
for (const item of arr4) {
  // console.log(item);
}
arr4.forEach((item) => {
  // console.log(item);
});

// Searching in array
const arr5: number[] = [1, 2, 3, 4, 5, 6];

let target = 3;

function searchNumber(arr: number[], target: number) {
  // time complexity: O(n) | space complexity: O(1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return "Number not found";
}

// console.log(searchNumber(arr5, target));

// indexOf | return index
// time complexity: O(n) | space complexity: O(1)
const index = arr5.indexOf(target); // if not found, it'l return -1

// console.log(index);

// find method | return value
// time complexity: O(n) | space complexity: O(1)
const arr6 = [1, 2, 3, 4, 5, 6];
const find = arr6.find((item) => item === target); // if not found, it'll return undefined
// console.log(find);
const find2 = arr6.find((item, index) => {
  if (item > 5) {
    // console.log(`The element was found at index ${index}`);
    return true;
  } else {
    // console.log(`The element was not found`);
    return false;
  }
});
// console.log(find2);

// delete in array
const arr7 = [1, 2, 3, 4, 5, 6, 7];
// arr7.splice(2, 1, 10); //time complexity: O(n) | space complexity: O(1)
// arr7.pop(); //time complexity: O(1) | space complexity: O(1)
// arr7.shift(); // time complexity: O(n) | space complexity: O(1) | because it has to shift all elements to the left
delete arr7[2];
// console.log(arr7);

const filter = arr7.filter((item) => item > 5); // time complexity: O(n) | space complexity: O(n)
console.log(filter);
