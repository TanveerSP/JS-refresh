// Another Methods in Array
const marvel_heros = ["thor", "Ironman","sipderman"];
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// ****** Concatinat Two array ****** //
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

// ****** spred *******
const allNewHeros =  [...marvel_heros, ...dc_heros]
console.log(allNewHeros);

const num_Array = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]
const real_num_Array = num_Array.flat(Infinity);
console.log(real_num_Array);

console.log(Array.isArray("Tanveer"))

console.log(Array.from("Tanveer"))

// console.log(Array.from({name: "Tanveer"}))  // Intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
