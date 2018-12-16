// This is a Node (server-side) JS program.

'use strict';

const _ = require('underscore')

const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' },
];

// ES6 feature: object destructuring
function say({ subject, verb, object }) {
  // ES6 feature: template strings
  // Note that quotes below are backticks (`), not single quotes (').
  console.log(`${subject} ${verb} ${object}`);
}

// ES6 feature: for..of
for (let s of sentences) {
  say(s);
}

// Actually use the Underscore pacakge, which has been bound to |_|.
const verbs = _.pluck(sentences, 'verb')
for (let verb of verbs) {
  console.log(`found verb: ${verb}`)
}