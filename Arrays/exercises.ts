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

// fin min and max
function findMinMax(arr: number[]): { min: number; max: number } {
  let min: number = 0;
  let max: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]! < arr[0]!) {
      min = arr[i] ?? 0;
    }
    if (arr[i]! > arr[0]!) {
      max = arr[i] ?? 0;
    }
  }

  return { min, max };
}

function findMinMax2(arr: number[]): { min: number; max: number } {
  let min: number = Math.min(...arr);
  let max: number = Math.max(...arr);

  return { min, max };
}

console.log(findMinMax([3, 5, 7, 2, 8]));

// sum of array
function sumArray(arr: number[]): number {
  let sum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]!;
  }

  return sum;
}

function sumArra2(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([5, 10, 15]));
