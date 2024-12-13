function foo(a, b) {
  // Handle null values explicitly
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b; // Or throw an error if preferred
}

console.log(foo(null, 1)); // 1
console.log(foo(1, null)); // 1
console.log(foo(1, 2));    // 3