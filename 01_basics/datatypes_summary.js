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
