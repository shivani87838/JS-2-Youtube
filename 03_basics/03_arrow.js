const user ={
    userName:"Hitesh",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.userName} , Welcome to the website`);
        //console.log(this);
        
    }
}
/*
user.welcomeMessage()
user.userName ="Shivani"
user.welcomeMessage()
*/
//console.log(this);
/*
function chai(){
    let userName="Hitesh"
    console.log(this.userName);
}
chai()
*/

/*
const  chai = function() {
    let userName ="Hitesh"
    console.log(this.userName);
}
    chai()
*/
/*
const  chai = () => {
    let userName ="Hitesh"
    console.log(this);
}
chai()
*/

//const addTwo = (num1,num2) => {
//   return num1+num2;
//}


//const addTwo = (num1,num2) => num1+num2;
//const addTwo = (num1,num2) => (num1+num2);
const addTwo = (num1,num2) => ({userName:"Hitesh"});

 
console.log(addTwo(3,4));

const myArray =[2,3,4,5]

myArray.forEach()