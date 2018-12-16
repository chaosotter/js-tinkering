// Object destructuring.
{
  const obj = {b: 2, c: 3, d: 4};
  const {a, b, c} = obj;
  console.log(a);  // undefined
  console.log(b);  // 2
  console.log(c);  // 3
}

// Object destructuring with assignment.
{
  const obj = {b: 2, c: 3, d: 4};
  let a, b, c;
  ({a, b, c} = obj);  // () are necessary here!
  console.log(a);  // undefined
  console.log(b);  // 2
  console.log(c);  // 3
}

// Array destructuring.
{
  const arr = [1, 2, 3];
  let [x, y] = arr;
  console.log(x);  // 1
  console.log(y);  // 2
}

// Array destructuring with spread operator.
{
  const arr = [1, 2, 3, 4, 5];
  let [x, y, ...rest] = arr;
  console.log(x);  // 1
  console.log(y);  // 2
  console.log(rest);  // [3, 4, 5]
}

// Using destructuring to swap values.
{
  let a = 5, b = 10;
  console.log(`a=${a}, b=${b}`);
  [a, b] = [b, a];
  console.log(`a=${a}, b=${b}`);
}
