// odd numbers
const oddNumbers: number[] = [];
function createOddNumbersArray(n: number[]) {
  for (let i = 0; i < n.length; i++) {
    const value = n[i];
    if (value !== undefined && value % 2 !== 0) {
      oddNumbers.push(value);
    }
  }
}

const result = createOddNumbersArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(oddNumbers);

// reverse array
function reverseArray(n: number[]) {
  const result = [...n].slice().reverse();
  return result;
}

console.log(reverseArray([1, 2, 3, 4]));

function reverseArray2(n: number[]) {
  const reversed = [];
  for (let i = n.length - 1; i >= 0; i--) {
    reversed.push(n[i]);
  }
  return reversed;
}

console.log(reverseArray2([1, 2, 3, 4]));

// modified array
function modifyArray(arr: number[], index: number, value: number) {
  if (index >= 0 && index > arr.length) {
    arr.push(value);
  } else {
    arr.splice(index, 0, value);
  }
  return arr;
}

console.log(modifyArray([10, 20, 30], 1, 15));
