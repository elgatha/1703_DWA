const fs = require('fs');

exports.debug = (data, status, date)=>{
  // time stamp
  const time = new Date() + '\n';

  // RGB colours
  const red = '\x1B[31m';
  const green = '\x1b[32m';
  const blue = '\x1b[34m';

  //if it is not successful
  if(status !== "Success") {

  var data = blue + time + red + status + data;

  }else{

     data = blue + time + data + ': ' + green + status;
  }

  if(process.env.DEBUG === "true"){
    // creates a log file
    fs.appendFile('./logs/debuglog.log', data, (err) =>{
      if(err){
        return console.log(err);
      }

    });
    console.log(data);
  }

};
