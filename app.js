// STRINGS

let firstVariable = "Hello World";
firstVariable = 17;
let secondVariable = firstVariable;
secondVariable = "this is a string";
console.log(firstVariable); //17

const yourName = "Darrell";
let greeting = `Hello, my name is ${yourName}`
console.log(greeting);

BOOLEANS

const a = 4; 
const b = 53; 
const c = 57; 
const d = 16; 
const e = 'Kevin';

console.log(a < b); 
console.log(c > d); 
console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false); 
console.log(false && false && false && false && false || true); 
console.log(false === false); 
console.log(e == 'Kevin'); 
console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" 
console.log(48 == '48');


//the Farm
let animal = "cow";
const moo = (animal) => {
   return String(animal).toLowerCase() === "cow" ? "mooooo" : "Hey! You're not a cow.";
} 
console.log(moo(animal));