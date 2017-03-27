const colors = require('colors');

exports.debug = (data, type) => {

const time = new Date() + '\n';

// I set my colours for RGB
colors.setTheme({
  error: 'red',
  warn: 'blue',
  success: 'green',
});

if (process.env.DEBUG === 'true') {
   // colours
   if (type == 'warn') {
        // Warnings
          console.warn(colors.warn(data));
      } else if (type == 'error') {
        // Errors
          console.error(colors.error(data));
      } else {
        // Success
          console.log(colors.success(data));
      }
  }
};

exports.verBump = (currVer, bump) => {
  // Major index is verArr [0]
  // Minor index is verArr[1]
  // Patch index is verArr[2]
  const verArr = currVer.split('.');

  for (const i in verArr) {
    verArr[i] = parseInt(verArr[i], 10);
  }

  if (bump === 'patch') {
     // patch
    verArr[2] += 1;
    console.log('A Patch update has been created, version: ', verArr[0], '.', verArr[1], '.', verArr[2]);
  } else if (bump === 'minor') {
     // patch
    verArr[2] = 0;
     // minor
    verArr[1] += 1;
    console.log('A Minor update has been created, version: ', verArr[0], '.', verArr[1], '.', verArr[2]);
  } else if (bump === 'major') {
     // patch
    verArr[2] = 0;
    // minor
    verArr[1] = 0;
    verArr[0] += 1;
    console.log('A Major update has been created, version: ', verArr[0], '.', verArr[1], '.', verArr[2]);
  }

  return verArr.join('.');
};
