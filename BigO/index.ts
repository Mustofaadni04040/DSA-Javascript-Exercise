// O(1)/Constant: One time complexity
function multiplyNumber(n: number): number {
  return n * n;
}
// console.log(multiplyNumber(10));

// O(n)/Linear: Linear time complexity
// whenever the number is increased, the time complexity is increased
function printItems(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
// console.log(printItems(10));

// Drop Constant: n + n = 2n/O(2n)
function printItems2(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
// console.log(printItems2(4));

// O(n2)/Quadratic: Quadratic time complexity
function printItems3(n: number) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("i", i);
      console.log("j", j);
    }
  }
}
console.log("Quadratic", printItems3(4));
