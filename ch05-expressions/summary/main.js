//------------------------------------------------------------------------------
// ARITHMETIC OPERATORS

3 + 2;  // 5
3 - 2;  // 1
3 / 2;  // 1.5
3 * 2;  // 6
3 % 2;  // 1

let x = 5;
-x;   // -5
+x;   // if x is not a number, this will attempt conversion
++x;  // increments x by one, and evaluates to the new value
x++;  // increments x by one, and evaluates to value of x before the increment
--x;  // decrements x by one, and evaluates to the new value
x--;  // decrements x by one, and evaluates to value of x before the decrement

// Unary plus enforces conversion.
const s = "5";
const y = 3 + +s;   // y is 8; without the unary plus,
                    // it would be the result of string
                    // concatenation: "35"

//------------------------------------------------------------------------------
// COMPARISON OPERATORS

{
  const n = 5;
  const s = "5";
  n === s;          // false -- different types
  n !== s;          // true
  n === Number(s);  // true -- "5" converted to numeric 5
  n !== Number(s);  // false
  n == s;           // true; not recommended
  n != s;           // false; not recommended
}

{
  const a = { name: "an object" };
  const b = { name: "an object" };
  a === b;          // false -- distinct objects
  a !== b;          // true
  a == b;           // false; not recommended
  a != b;           // true; not recommended
}

//------------------------------------------------------------------------------
// RELATIONAL OPERATORS

{
  3 > 5;   // false
  3 >= 5;  // false
  3 < 5;   // true
  3 <= 5;  // true
}

// For integer comparisons, the safe range is:
//   [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]

//------------------------------------------------------------------------------
// STRING CONCATENATION

3 + 5 + "8";  // evaluates to string "88"
"3" + 5 + 8;  // evaluates to string "358"

//------------------------------------------------------------------------------
// LOGICAL OPERATORS

// The only false values: undefined, null, false, 0, NaN, ''
// Everything else is truthy.

{
  let x = true, y = false;
  x && y;  // AND, false
  x || y;  // OR, true
  !x;      // NOT, false
}

//------------------------------------------------------------------------------
// CONDITIONAL OPERATOR

const doIt = false;
const result = doIt ? "Did it!" : "Didn't do it.";

//------------------------------------------------------------------------------
// BITWISE OPERATORS

// These operate on *32 bits* of the numbers involved.
0b1010 & 0b1100;  // AND, result: 0b1000
0b1010 | 0b1100;  // OR, result: 0b1110
0b1010 ^ 0b1100;  // XOR, result: 0b0110
~0b1010;          // NOT, result: 0b0101
0b1010 << 1;      // left shift, result: 0b10100
0b1010 << 2;      // left shift, result: 0b101000

// Sign-propagating (>>) vs. zero-fill (>>>) right shift.
{
  let n = 22;  // 32-bit binary:    00000000000000000000000000010110
  n >> 1;      //                   00000000000000000000000000001011
  n >>> 1;     //                   00000000000000000000000000001011
  n = ~n;      // one's complement: 11111111111111111111111111101001
  n++;         // two's complement: 11111111111111111111111111101010
  n >> 1;      //                   11111111111111111111111111110101
  n >>> 1;     //                   01111111111111111111111111110101
}

//------------------------------------------------------------------------------
// TYPEOF OPERATOR

// Weirdnesses:
//   null is an object.
//   Arrays and objects can't be distinguished.

typeof undefined;     // "undefined"
typeof null;          // "object"
typeof {};            // "object"
typeof true;          // "boolean"
typeof 1;             // "number"
typeof "";            // "string"
typeof Symbol();      // "symbol"
typeof function() {}  // "function"

//------------------------------------------------------------------------------
// VOID OPERATOR

// Just evaluates its operand and returns |undefined|.
// <a href="javascript:void 0">Do nothing.</a>

//------------------------------------------------------------------------------
// ASSIGNMENT OPERATORS

let v, v0;
v = v0 = 9.8;  // chained assignment; first v0 gets
               // the value 9.8, and then v gets the value 9.8

{
  let x = 5, y = 10;
  x += y;
  x -= y;
  x *= y;
  x /= y;
  x %= y;
  x <<= y;
  x >>= y;
  x >>>= y;
  x &= y;
  x |= y;
  x ^= y;
}

//------------------------------------------------------------------------------
// DESTRUCTURING ASSIGNMENT

// New in ES6 and works with objects and arrays.
{
  const obj = {b: 2, c: 3, d: 4};
  const {a, b, c} = obj;
  a;  // undefined: there was no property "a" in obj
  b;  // 2
  c;  // 3
}

// Parentheses are required in assignment statements with destructuring.
{
  const obj = { b: 2, c: 3, d: 4 };
  let a, b, c;
  // ERROR: {a, b, c} = obj;
  ({a, b, c} = obj);
}

{
  const arr = [1, 2, 3];
  let [x, y] = arr;
  x;  // 1
  y;  // 2
}

// Use of ... in destructuring.
{
  const arr = [1, 2, 3, 4, 5];
  let [x, y, ...rest] = arr;
  x;     // 1
  y;     // 2
  rest;  // [3, 4, 5]
}

// Swaps with destructuring.
{
  let a = 5, b = 10;
  [a, b] = [b, a];
  a;  // 10
  b;  // 5
}
