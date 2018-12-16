// Simple demonstration that ES6 has three forms of for loop.

// Normal C-style loop.
for (let i = 0; i < 10; i++) {
  console.log(`i = ${i}`);
}

// Iteration over the keys in an object.
let obj = {cat: 1, dog: 2, bunny: 3};
for (let k in obj) {
  console.log(`${k} = ${obj[k]}`);
}

// Iteration over any sort of iterable thing.
let arr = ['cat', 3.14, 'quux'];
for (let x of arr) {
  console.log(`Found a ${x}`);
}
