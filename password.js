
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Hello, What is your password?", function (password) {
    console.log(`${password}, is this correct?`)
    function getCharacterLength (str) {
     
        return [...str].length;
    
      } 
      
      console.log(getCharacterLength('A\uD87E\uDC04Z')); // 3
       if (password.length < 10 ){
           console.log("success")
       } else {
           console.log("failure")
       }
    
      
      
    
    rl.close()
})

rl.on("close", function() {process.exit(0)})

// console.log('the rest of the code')