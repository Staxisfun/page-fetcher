const args = process.argv;
let newArgs = args.slice(2);

const Url = newArgs[0]
const filePath = newArgs[1]

const request = require('request');

const fs = require('fs');

// console.log(newArgs)




request(Url, (error, response, body) => {
  console.log('error:', error);
  if (error) {
    console.log(error)
  } else {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  }
  
  const content = Url;
  
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error(err);
    }
    
    console.log(`downloaded and saved ${Url.length} bytes to ${filePath}`)
  });
  


});


