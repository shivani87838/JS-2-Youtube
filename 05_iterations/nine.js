const myNums =[1,2,3]

/*const myTotal = myNums.reduce(function (acc,currval) {
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval;
},3)
*/
//const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)
//console.log(myTotal);

const myShopingCart =[{
    itemName:"Js course",
    price:2999 },
    {itemName:"py course",
    price:999},
    {itemName:"mobile dev course",
    price:5999},
    {itemName:"Data Science course",
    price:12999}
]
const totalPrice = myShopingCart.reduce((acc,item)=>acc+item.price,0)
 console.log(totalPrice);
 