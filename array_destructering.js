
// ************************ Exempel 1 ************************//
// Istället för detta

const week = ['monday', 'tuesday', 'wednesday', 'thuresday', 'friday'];

// const day1 = week[0];
// const day2 = week[1];
// const day3 = week[2];
// const day4 = week[3];
// const day5 = week[4];

// console.log(day1);
// console.log(day2);
// console.log(day3);
// console.log(day4);
// console.log(day5);

// Med array detructering
const [day1, day2, day3, day4, day5] = week;
console.log(day1, day2, day3, day4, day5);


// ************************ Exempel 2 ************************//
// Byta plats på värden

let a = 1;
let b = 2;

[b, a] = [a, b]
console.log(a, b);

// ************************ Exempel 3 ************************//

const fullname = "Sandra Larsson";


 //const [first, last] =  fullname.split(" ");
 //console.log(first, last);


// ************************ Exempel 4 ************************//
// Destructurering av arrayer med rest

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;
console.log(first)
console.log(second);
console.log(rest);
console.log(rest[0], rest[1], rest[2])
