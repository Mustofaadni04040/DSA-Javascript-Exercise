// O(1)/Constant: One time complexity
function multiplyNumber(n: number): number {
  return n * n;
}
console.log(multiplyNumber(10));

// O(n)/Linear: Linear time complexity
// whenever the number is increased, the time complexity is increased
function printItems(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
console.log(printItems(10));
