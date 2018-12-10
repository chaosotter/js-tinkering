// ES6 introduced "let" for variable declarations.
let cat, dog = "Beagle";
console.log(`cat = ${cat}`);
console.log(`dog = ${dog}`);

// ES6 also introduced real constant definitions.
const DAYS_PER_FORTNIGHT = 14;
console.log(`${DAYS_PER_FORTNIGHT} days per fortnight.`);

// All numbers are doubles, so integer ranges are a little weird.
const MIN_INT = Number.MIN_SAFE_INTEGER;
const MAX_INT = Number.MAX_SAFE_INTEGER;
console.log(`Integer range: [${MIN_INT}, ${MAX_INT}]`);

// All strings are Unicode.
console.log("De Morgan’s law: \u2310(P \u22c0 Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)");

// ES6 introduces the Symbol data type.
const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
console.log("Symbol comparison: " + (RED === ORANGE));

// Objects can have strings or symbols as keys.  The member notation always
// refers to string keys.
let obj = {'dog': 'Valentine', 'cats': 2};
console.log(`The dog's name was ${obj.dog} and we have ${obj.cats} cats.`);

// Arrays are non-homogeneous and work about as expected.
let arr = ['fe', 'fu', 'fo', 'fum'];
arr[1] = 'fi';
console.log(`The array has ${arr.length} elements; arr[1] = "${arr[1]}".`);
