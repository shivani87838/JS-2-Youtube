const coding = ["Js","ruby","python","cpp","java"];
//coding.forEach( function (val) {
 //   console.log(val);  
// })

//coding.forEach((item)=>{
 //   console.log(item);
// })

//function printMe(item) {
   // console.log(item); 
//}

//coding.forEach(printMe)

//coding.forEach( (item,index ,arr)=>{
  //console.log(item,index,arr); 
//})

const myCoding = [{
    languageName:"Javsript",
    languageFileName:"js"
         },
    {
    languageName:"python",
    languageFileName:"py"
    },
    {
    languageName:"Java",
    languageFileName:"java"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageFileName);
    
})