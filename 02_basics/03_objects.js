// Singleton
// object.create

//Object Literals
const mySym = Symbol("key1")
const JsUser ={
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    [mySym]:"mykey1",
    age:20,
    location:"jaipur",
    isLoggedIn:false,
    email:"hitesh@gmail.com",
    lastLoginDays:["Monday","Saturday"]
}
/*
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
*/

JsUser.email="shivani@gmail.com"
//Object.freeze(JsUser);
JsUser.email="Shivani@chatgpt.com"
//console.log(JsUser);
JsUser.greeting = function() {
    console.log("hyy js user");
    
}
JsUser.greetingTwo = function() {
    console.log(`hyy js user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

