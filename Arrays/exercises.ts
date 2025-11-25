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
