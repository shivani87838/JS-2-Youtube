function sayMyName() {
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("i");
}
//sayMyName()

/*function addTwoNumbers(number1,number2){
          console.log (number1+number2);
}
 */
function addTwoNumbers(number1,number2){
         // let result = number1+number2
         // return result
         return number1 + number2 
      
}
const result = addTwoNumbers(3,5)
//console.log("Result:",result);
function loginUserMessage(username = "sam") {
    if(!username){
                console.log("Please enter a username");
                return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Shivani"));
console.log(loginUserMessage("Shivani"));