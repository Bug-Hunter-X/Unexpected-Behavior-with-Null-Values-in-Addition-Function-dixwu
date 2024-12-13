function foo(a, b) {
  if (a === null || b === null) {
    return;
  }
  console.log(a + b);
}

foo(null, 1); // undefined
foo(1, null); // undefined
foo(1, 2);    // 3