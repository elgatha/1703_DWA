// These are the requires

const pjson = require('./package.json');
const fs = require('fs');

// Arguments
const argv = require('yargs').argv;
const version = pjson.version.split('.');
const number = arg.n;

// This evaluates arguments to see if they pass and are correct
if ((argv.v === 'major' || argv.v === 'minor' || argv.v === 'patch') && typeof argv.n === 'number')
{
  if (argv.v === 'major') {
    version[0] = number;
  } else if (argv.v === 'minor') {
    version[1] = number;
  } else if (argv.v === 'patch') {
    version[2] = number;
  }

// This writes a new version
pjson.version = version.join('.');
  fs.writeFile('./package.json', JSON.stringify(pjson, null, 4), (err) => {
    if (err) {
      return console.log(err);
    }
    // This prints Success
    console.log(argv.v + ' has been updated to ' + argv.n);
  });
} else {
  // This prints Error
  console.log('Please verify your arguments.')
}
