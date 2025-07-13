const marvel_heroes = ["thor","IronMan","Spiderman"];
const dc_heroes =["SuperMan","Flash","Batman"];

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

//const allHeroes =  marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);
 
const all_new_Heroes =[...marvel_heroes,...dc_heroes]
//console.log(all_new_Heroes);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anoterArr = anotherArr.flat(Infinity);
//console.log(real_anoterArr);
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));   //intresting
let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


