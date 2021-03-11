const fs = require('fs');
const arg = process.argv.slice(2);
const request = require('request');
const URL = arg[0];
const localFilePath = arg[1];

request(URL, (error, response, body) => {
  if (error) {
    return console.log(error.message);
  } else if (response.statusCode !== 200) {
    return console.log(response.statusCode);
  }
  fs.writeFile(localFilePath, body, () => {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    
    });
});



