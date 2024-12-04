// Destructurering av objekt är en bra sätt att hämta värden från ett objekt och tilldela dem till en variabel.
// Det bli mer cleant och enklare att läsa koden.
// D.v.s ett alternativ till att skriva invoice.id, invoice.paymentDue osv.

// ************************ Exempel 1 ************************//
const person = {
    first: 'Sandra',
    last: 'Larsson',
    country: 'Sweden',
    city: 'Stockholm',
    twitter: '@sandra_larsson',
    adress: {
        street: 'Kungsgatan',
        number: 10
    }
  };
  // Istället för detta
//  const first = person.first;
//  const last = person.last;

// är detta object destructering
//  const {first, last} = person;
//  console.log(first);
//  console.log(last);

  // Destructurering med nästlat objekt
 //const { first, last, adress: {street, number} } = person;


// ************************ Exempel 2 ************************//
const ul = document.getElementById('invoice-list');

const getInvoices = async () => {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const renderInvoices = async () => {

    const invoices = await getInvoices();

    // Använda object destructering i funktion
    const invoiceList = invoices.map(({id, paymentDue, clientName, status, total}) => {
        return `<li>${id} - ${paymentDue} - ${clientName} - ${status} - ${total}</li>`;
    }).join('');

    // Utan objekt destrcutering
    // const invoiceList = invoices.map((invoice) => {
    //     return `<li>${invoice.id} - ${invoice.paymentDue} - ${invoice.clientName} - ${invoice-status} - ${total}</li>`;
    // }).join('');

    ul.innerHTML = invoiceList;

}

renderInvoices();


// ************************ Exempel 3 ************************//
// Rest i objekt destructering

const studentDetails = {
    firstName: 'John',
    lastName: 'Mary',
    age: 20,
    country: 'Sri Lanka',
    hobbies: ["soccer", "basketball"]
}

const {firstName, lastName, ...rest} = studentDetails;

console.log(firstName);
console.log(lastName);
console.log(rest);