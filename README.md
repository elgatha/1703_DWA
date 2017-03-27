# utility-debug aka sumo-debug<br>
created by Elgatha Lee for WDD program at Full Sail University.<br>

# Debug Tool<br>

This tool debugs through console logs to the log file<br>

# Installation<br>
Install into the project application using <br>
 1. npm install nx-debugtool --save<br>

# Use<br>
In order to use the debug tool with your project you must<br>
 1. Always require it at the top of each file you are going to use the debug tool in<br>
 2. Also create a logs folder in the root directory<br>
          example: const debug = require('nx-debugtool');<br>

#Debug Messages<br>
In order to get your debug messages you must add:<br>

-- Success --<br>
  1. debug.debug('Success Message', 'Success');<br>

--- Error ---<br>
debug.debug('Error Message: ' + err, 'Error! ');<br>

# Errors<br>
Date and Time must be included in each log <br>

*success* will be shown in green <br>
*error* will be shown in red <br>

# Debug Mode <br>
After setting up the files add:<br>
 1. DEBUG=true<br>

# Unit Test<br>
  1. Mocha must be installed globally<br>
  2. Then type -- mocha<br>
  3. A successful test should look like:<br>
          example: NX-Utility-Tool<br>
                   2 passing (14ms)<br>

# Version Bumper
  1. Version bumper increases by 1
  2. To utilize use: <br>
        -- gulp bumpVersion { --major | --minor | --patch }
