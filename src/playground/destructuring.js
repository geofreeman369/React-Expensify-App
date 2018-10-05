//
// Object Destrucering
//

// const person = {
//   name: "Joshua",
//   age: 30,
//   location: {
//     city: "Essex",
//     temp: 90
//   }
// };

// const { name: firstName = "Anonoymous", age } = person;
// // const name = persone.name
// // const age = person.age

// console.log(`${firstName} is ${age} years old.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// Challenge

// const book = {
//   title: "ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// Array Destructoring  ///////////////////////////////////////////////////
//

// const address = ["8 Ardleigh", "Basildon", "Essex", "SS16 5RA"];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

// Challenge

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , medium] = item;

console.log(`A medium ${coffee}, costs ${medium}.`);
