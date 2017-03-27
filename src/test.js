const debug = require('./debug.js');

// bump versions (patch, minor, major)
const patch = debug.bump('3.3.3', 'patch');
const minor = debug.bump('3.3.3', 'minor');
const major = debug.bump('3.3.3', 'major');


console.log('patch', patch);
console.log('minor', minor);
console.log('major', major);
