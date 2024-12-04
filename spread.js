// Med spread kan man sprida värden från en array eller objekt till en ny array eller objekt.

// ************************ Exempel 1 ************************//
// Spread "sprider" värden från en array till en ny array.



// ************************ Exempel 2 ************************//
// Spread kopierar hela objektet.

const person = {
    name: 'Sandra',
    age: 30
}


console.log(newPerson);

// eller array
const original = [1, 2, 3];



console.log(original); // Output: [1, 2, 3] (Oförändrad)
console.log(copy);     // Output: [1, 2, 3, 4]




// ************************ Exempel 3 ************************//
// Spread kopierar värden från en array till en funktion.


const numbers3 = [1, 2, 3];




// ************************ Exempel 4 ************************//
// Med spread kan man merga flera arrayer eller objekt. Istället för att använda concat.

const numbers4 = [1, 2, 3];
const numbers5 = [4, 5, 6];
const numbers6 = [7, 8, 9];


console.log(mergedNumbers);

// ************************ Exempel 5 ************************//
// Använd spread istället för slice.

  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);