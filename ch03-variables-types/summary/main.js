//------------------------------------------------------------------------------
// VARIABLES AND IDENTIFIERS

// Note that "let" is new in ES6.
let currentTempC = 22;  // degrees Celsius
currentTempC = 22.5;    // value is not fixed

// Equivalent to "let targetTempC = undefined";
let targetTempC;

// Multiple definitions per line are okay:
let targetTempF, room1 = "conference_room_a", room2 = "lobby";

// Constants are new in ES6.
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

// Identifiers must start with a letter, dollar sign ($), or underscore (_).
// Identifiers consist of letters, numbers, the dollar sign ($), and underscore (_).
// Unicode characters are allowed (for example, π or ö).
// Identifiers cannot be a reserved word (see Appendix C).

// These are the only primitive types:
//   Number, String, Boolean, Null, Undefined, Symbol

// These are the built-in object types:
//   Array, Date, RegExp, Map and WeakMap, Set and WeakSet

//------------------------------------------------------------------------------
// NUMBERS

// Literals demonstrating various formats.
let count = 10;           // integer literal; count is still a double
const blue = 0x0000ff;    // hexadecimal (hex ff = decimal 255)
const umask = 0o0022;     // octal (octal 22 = decimal 18)
const roomTemp = 21.5;    // decimal
const cc = 3.0e6;         // exponential (3.0 × 10^6 = 3,000,000)
const e = -1.6e-19;       // exponential (-1.6 × 10^-19 = 0.00000000000000000016)

// Standard constants for number bounds.
const small = Number.EPSILON;            // the smallest value that can be
                                         // added to 1 to get a distinct number
                                         // larger than 1, approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER;  // the largest representable integer
const max = Number.MAX_VALUE;            // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER;  // the smallest representable integer
const min = Number.MIN_VALUE;            // the smallest representable number
const nInf = Number.NEGATIVE_INFINITY;   // the same as -Infinity
const nan = Number.NaN;                  // the same as NaN
const inf = Number.POSITIVE_INFINITY;    // the same as Infinity

//------------------------------------------------------------------------------
// STRINGS

// Pre-ES6 (no template strings)
let currentTemp = 19.5;
const message1 = "The current temperature is " + currentTemp + "\u00b0C";

// ES6 (template strings)
const message2 = `The current temperature is ${currentTemp}\u00b0C`;

// Multiline Strings
//   With "", you need to include the "\n" characters yourself.
//   With ``, you do not.

// Number/String Conversion
const result1 = 3 + '30';  // 3 is converted to a string; result is string '330'
const result2 = 3 * '30';  // '30' is converted to a number; result is numeric 90

//------------------------------------------------------------------------------
// SYMBOLS

// Symbols are new in ES6.
const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!");
const comp = (RED === ORANGE);  // false: every symbol is unique

//------------------------------------------------------------------------------
// NULL AND UNDEFINED

// |null| is for the programmer ("not yet known").
// |undefined| is for the language itself ("can't be known").

//------------------------------------------------------------------------------
// OBJECTS

// Using member access with objects.
const obj = {};
obj.color = "yellow";

// Using computed member access with objects.
obj["not an identifier"] = 3;
obj["not an identifier"];         // 3
obj["color"];                     // "yellow"

// Symbols are valid keys, but only with computed member access.
const SIZE = Symbol();
obj[SIZE] = 8;

// Functions are members like any other:
let sam3 = {};
sam3.speak = function() { return "Meow!"; };
sam3.speak();           // "Meow!"

// Property deletion.
delete sam3.speak;

//------------------------------------------------------------------------------
// ARRAYS

// Array definitions.
const a1 = [1, 2, 3, 4];                     // array containing numbers
const a2 = [1, 'two', 3, null];              // array containing mixed types
const a3 = [                                 // array on multiple lines
    "What the hammer?  What the chain?",
    "In what furnace was thy brain?",
    "What the anvil?  What dread grasp",
    "Dare its deadly terrors clasp?",
];
const a4 = [                                 // array containing objects
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];
const a5 = [                                 // array containing arrays
    [1, 3, 5],
    [2, 4, 6],
];

// Array access.
const arr = ['a', 'b', 'c'];
arr.length;                                // 3
arr[0];                                    // 'a'
arr[arr.length - 1];                       // 'c'

//------------------------------------------------------------------------------
// DATES

// Dates are sort of complicated and ugly.
const now = new Date();
now;   // example: Thu Aug 20 2015 18:31:26 GMT-0700 (Pacific Daylight Time)

const halloween = new Date(2016, 9, 31);  // note that months are
                                          // zero-based: 9=October

const halloweenParty = new Date(2016, 9, 31, 19, 0);   // 19:00 = 7:00 pm

halloweenParty.getFullYear();       // 2016
halloweenParty.getMonth();          // 9
halloweenParty.getDate();           // 31
halloweenParty.getDay();            // 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours();          // 19
halloweenParty.getMinutes();        // 0
halloweenParty.getSeconds();        // 0
halloweenParty.getMilliseconds();   // 0

//------------------------------------------------------------------------------
// REGULAR EXPRESSIONS

// Extremely simple email recognizer.
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;

// US phone number recognizer.
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;

//------------------------------------------------------------------------------
// CONVERSIONS

// Converting to Numbers
const numStr = "33.3";
const num = Number(numStr);   // this creates a number value, *not*
                              // an instance of the Number object

// If the string can’t be converted to a number, NaN will be returned.

// parseInt and parseFloat can take a radix and ignore trailing input.
const a = parseInt("16 volts", 10);  // the " volts" is ignored, 16 is
                                     // parsed in base 10
const b = parseInt("3a", 16);        // parse hexadecimal 3a; result is 58
const c = parseFloat("15.5 kph");    // the " kph" is ignored; parseFloat
                                     // always assumes base 10

// Dates convert to numbers at millisecond granularity,
const d = new Date();         // current date
const ts = d.valueOf();       // numeric value: milliseconds since
                              // midnight, January 1, 1970 UTC

// Everything has at least a default toString() method.
const n = 33.5;
n;                      // 33.5 - a number
const s = n.toString();
s;                      // "33.5" - a string

const arr2 = [1, true, "hello"];
arr2.toString();                 // "1,true,hello"
