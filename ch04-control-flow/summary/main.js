// Returns a random integer in the range [m, n] (inclusive).
function rand(m, n) {
  return m + Math.floor((n - m + 1) * Math.random());
}

//------------------------------------------------------------------------------
// WHILE

let i = 150;     // starting conditions
while (i > 0 && i < 100) {
  // do something
}

//------------------------------------------------------------------------------
// BLOCK STATEMENTS

{   // start block statement
  console.log("statement 1");
  console.log("statement 2");
}   // end block statement

//------------------------------------------------------------------------------
// IF/ELSE

let bet = rand(1, 10), total = 25;
if (bet === 7) {
  bet *= 2;
} else if (total < bet) {
  bet = total;
}

//------------------------------------------------------------------------------
// DO/WHILE

let remaining = 10;
do {
  let bet = rand(1, remaining);
  remaining = remaining - bet;
} while (remaining > 0);

//------------------------------------------------------------------------------
// FOR

const hand = [];
for (let roll = 0; roll < 3; roll++) {
  hand.push(rand(1, 6));
}

for (let temp, i=0, j=1; j<30; temp = i, i = j, j = i + temp)
  console.log(j);

//------------------------------------------------------------------------------
// CONTROL FLOW EXCEPTIONS

// break:    Breaks out of loop early.
// continue: Skip to the next step in the loop.
// return:   Exits the current function.
// throw:    Indicates an exception that must be caught by an exception handler.

//------------------------------------------------------------------------------
// SWITCH

switch (bet) {
  case 7:
    bet = total;
    break;
  case 11:
  case 13:
    bet = 0;
    break;
  case 21:
    bet = 21;
    break;
  default:
    console.log("Everything else.");
}

//------------------------------------------------------------------------------
// FOR/IN

const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for (let prop in player) {
  // Not required, but addresses a common source of errors.
  if (!player.hasOwnProperty(prop)) continue;
  console.log(prop + ': ' + player[prop]);
}

//------------------------------------------------------------------------------
// FOR/OF

// New in ES6 and works on any iterable type.

const hand2 = [1, 5, 3, 6];
for (let face of hand2)
  console.log(`You rolled...${face}!`);
