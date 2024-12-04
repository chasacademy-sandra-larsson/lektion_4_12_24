// Default parameters är värden som tilldelas till en parameter om den inte har ett värde.
// D.v.s om man inte skickar med ett värde till funktionen så kommer det default värdet att användas.
// ************************ Exempel 1 ************************//

function add(a, b = 1) {
    return a + b;
}

console.log(add(2,3));
console.log(add(10));

// ************************ Exempel 2 ************************//

const greet = (greeting = "Hi again", name ="John Doe") => `${greeting}${name}`;


console.log(greet("Hallo ", "Stephanie"));
console.log(greet());


const test = (a,b) => {
    console.log(a,b);
   return  a + b;
}
const result = test(1);
console.log(result)
