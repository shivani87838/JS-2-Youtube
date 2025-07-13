const marvel_heroes = ["thor","IronMan","Spiderman"];
const dc_heroes =["SuperMan","Flash","Batman"];

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

//const allHeroes =  marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);
 
const all_new_Heroes =[...marvel_heroes,...dc_heroes]
console.log(all_new_Heroes);
