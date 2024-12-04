// Med spread kan man sprida värden från en array eller objekt till en ny array eller objekt.

// ************************ Exempel 1 ************************//
// Spread "sprider" värden från en array till en ny array.


  // const numbers = [1, 2, 3, 4, 5];

  // const newNumbers = [...numbers, 6, 7, 8, 9, 10]

  // console.log(newNumbers);


// ************************ Exempel 2 ************************//
// Spread kopierar hela objektet.

const person = {
    name: 'Sandra',
    age: 30
}


const newPerson = {
      ...person,
      city: "Stockholm"
}

//console.log(newPerson);

// ************************ Exempel 3 ************************//
  // Kopiera en array eller objekt


const original = [1, 2, 3];

const copy = [...original];  // Shallow copy

console.log("original", original); // Output: [1, 2, 3] (Oförändrad)
console.log("copy", copy);     // Output: [1, 2, 3, 4]



// ************************ Exempel 4 ************************//
// Spread kopierar värden från en array till en funktion.


const numbers3 = [1, 2, 3];
const add = (a, b, c) => a + b + c;

const result = add(...numbers3);
console.log(result);




// ************************ Exempel 5 ************************//
// Med spread kan man merga flera arrayer eller objekt. Istället för att använda concat.

const numbers4 = [1, 2, 3];
const numbers5 = [4, 5, 6];
const numbers6 = [7, 8, 9];

const mergedNumbers = [...numbers4, ...numbers5, ...numbers6];

console.log(mergedNumbers);

// ************************ Exempel 6 ************************//
// Använd .. rest istället för slice.

   const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   const [, , ...shorterList] = source;
   console.log(shorterList);

  //const sourceWithoutFirstTwoSlice = source.slice(2);
  //console.log(sourceWithoutFirstTwoSlice);