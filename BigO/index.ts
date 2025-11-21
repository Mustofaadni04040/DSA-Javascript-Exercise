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
// console.log("Quadratic", printItems3(4));

// Non dominant term
function printItems4(n: number) {
  // O(n2)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("i", i);
      console.log("j", j);
    }
  }

  // O(n)
  for (let k = 0; k < n; k++) {
    console.log("k", k);
  }

  // result: O(n2 + n) = O(n2)
}

// console.log("Non dominant term", printItems4(4));

// Different term input - Add vs Multiply
// multiply: if your algorithm is in the form "do this for each time you do that" then you multiply the runtime
function printItems5(a: number, b: number) {
  // O(a * b)
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log("i", i);
      console.log("j", j);
    }
  }
}

// add: if your algorithm is in the form "do this, the when you are all done, do that" then you add the runtime
function printItems6(a: number, b: number) {
  // O(a + b)
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  for (let j = 0; j < b; j++) {
    console.log(j);
  }
}
