/*Primitive
    7types: string
            number 
            boolean
            null
            undefined 
            symbol
            bigInt
            */
     const score =100 //number
     const scoreValue = 100.3// number

     const isIdLogin = false//boolean
     const outsideTemp = null//object
     let userEmail;//undefined

     const id = Symbol('123')//symbol
     const anotherId = Symbol('123')//symbol
     console.log(id === anotherId)

    const bigNumber = 244759602024875n //bigInt


/* Reference (Non-Primitive):Array
                             object
                             function
*/
const heroes =["shaktiman","naagraj","dooga"]  //object

let myObj = {
     name : "Shivani",
     age :20,
}         // object                  

 let myFunction = function(){     //function object
     console.log("Hello Hitesh")
}

console.log(typeof myFunction)


//+++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) , Heap(Non-primitive)

let myYoutubeName ="Hiteshchoudharydotcom"

let anotherName = myYoutubeName;
anotherName="chaiaurCode"
console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email:"user@ggogle.com",
    upi:"user@ybl"
}

let userTwo = userOne
//userTwo.email = "hitesh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
