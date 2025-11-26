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
