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

//Driver's Ed

const age = 22;
const driversEd = (age) => {
   return age >= 16 ? "Here are the keys!" : "Sorry, you're too young.";
}
console.log(driversEd(age));

//LOOPS

//The Basics
for (let i = 0; i <= 10; i++) {
   console.log(i);
}

for (let i = 10; i <= 400; i++) {
   console.log(i);
}

for (let i = 12; i <= 4000; i+=3) {
   console.log(i);
}

//Get Even

for (i = 1; i <= 100; i++) {
   if (i % 2 == 0) {
      console.log(`${i} <-- is an even number`);
   } else {
       console.log(i)
   }
}

//Give Me 5

for (i = 1; i <= 100; i++) {
   switch(true) {
    case (i % 3 == 0 && i % 5 == 0):
       console.log(`I found a ${i}, Three is a crowd. I found a ${i}. High five!`);        
       break;
    case (i % 3 == 0): 
       console.log(`I found a ${i}. Three is a crowd.`);
       break;
    case (i % 5 == 0):
       console.log(`I found a ${i}. High five.`);        
       break;
    default:
       console.log(i); 
   }
 }

//Savings Account

const bank_account = function() {
   let sum = 0;
   for (let i = 1; i <=10; i++) {
      sum+= i;
   }
   return `$${sum}`;
}
console.log(bank_account());

const bank_account_bonus = function() {
   let sum = 0;
   for (let i = 1; i <= 100; i++) {
      sum+= i * 2;
   }
   return `$${sum}`;
}
console.log(bank_account_bonus());


//ARRAYS & CONTROL FLOW

//A. Talk About It
// - Items in an array are referred to as elements. 
// - Arrays guarantee that each element can be accessed sequentially. 
// - Real life array examples inclue an alphabetical set of encyclopedias, chapters of a book, recipe ingredients, etc.

//B. Easy Does It
const quotes = ["All's Well That Ends Well", "Semper Fi", "Slow And Steady Wins The Race"];

//C. Accessing Elements
const randomThings = [1, 10, "Hello", true];
// randomThings[0]; - access first element

randomThings[2] = "World";
console.log(randomThings);

//D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// ourClass[2] - access third element

ourclass[4] = "Octocat";
ourClass.push("Cloud City");

//E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "another string");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
// Array.prototype.reverse() mutates the array and returns a reference. 

//F. Biggie Smalls

const num = 275;
if (num < 100) {
   console.log("litte number");
} else {
   console.log("big number");
}

//G. Monkey in the Middle
if (num < 5) {
   console.log("little number");
} else if (num > 10) {
   console.log("big number");
} else {
   console.log("monkey");
}

//H. What's in Your Closet?

const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];

 const person = {
   "firstName": "John",
   "lastName": "Smith",
   "age": 25
 }

 const thomsCloset = [
   [
     // These are Thom's shirts
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],[
     // These are Thom's pants
     "grey jeans",
     "jeans",
     "PJs"
   ],[
     // Thom's accessories
     "wool mittens",
     "wool scarf",
     "raybans"
   ]
 ];

 console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
 kristynsCloset.splice(6, 0, "raybans");
 kristynsCloset[5] = "stained knit hat";
 
 const shirt = thomsCloset[0][0];
 const pants = thomsCloset[1][1];
 const accessory = thomsCloset[2][2];
 console.log(`Today, Thom's wardrobe consisted of a ${shirt} coupled with ${pants} and a pair of ${accessory}.`);
 thomsCloset[1][2] = "Footie Pajamas";

 //IV. Functions
 //A.
 const printGreeting = (arg) => {
   console.log(`Hello there, ${arg}!`);
}
printGreeting("Ariel");

 //B.
 const printCool = (name) => {
   console.log(`${name} is cool`);
}
printCool("Iya");

//C.
const calculateCube = (num) => {
   num = (num * num * num);
   console.log(num);
}
calculateCube();

//D.
const isVowel = (letter) => {
   switch(String(letter).toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
         return true;
      default:
         return false;
   }
}
console.log(isVowel('A'));
console.log(isVowel('g'));
console.log(isVowel('Q'));
console.log(isVowel('e'));
console.log(isVowel('u'));

//E.
const getTwoLengths = (string1, string2) => {
   return [String(string1).length, String(string2).length];
}
console.log(getTwoLengths("applesauce", "geodude"));

//F.
const getMultipleLengths = (arr) => {
   const numberArray = [];
   for (let i = 0; i < arr.length; i++) {
      numberArray.push(arr[i].length);
   }
   return numberArray;
}

//G.
const maxOfThree = (num1, num2, num3) => {
   const array = [num1, num2, num3];
   array.sort((a, b) => a - b);  
}
console.log(maxOfThree(22, 84, 5));

//H.
const printLongestWord = (strArray) => {
   const strArraySorted = strArray.sort((a, b) => a.length - b.length);
   const strArraySortedLastWord = strArraySorted[strArraySorted.length - 1];
   const largestWordCount = strArraySortedLastWord.length;
   for (let i = 0; i < strArraySorted.length; i++) {
      if (strArraySorted[i].length == largestWordCount) {
         return strArraySorted[i];
     }
   }   
   return strArraySortedLastWord;
}
const arr = ['these', 'are', 'aaaaaaaaaaaaaaaa', 'words', 'different3', 'different2', 'lengths', 'diff'];
console.log(printLongestWord(arr));

//OBJECTS

//A.
const user = {
   name: "Darrell",
   email: "test@email.com",
   age: 9000,
   purchased: []
};

//B. 
user.email = "newEmail@email.com";
user.age = user.age++;

//C.
user.location = "Geneva";

//D.
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
console.log(user.purchased[2]);

//E.
user.friend = {
   name: "Son Gohan",
   age: 9001,
   location: "Kame House",
   purchased: []
};

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring", "A latte");
console.log(user.friend.purchased[1]);

//F.
for (let i = 0; i < user.purchased.length; i++) {
   console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i++) {
   console.log(user.friend.purchased[i]);
}

//G.

const updateUser = () => {
   user.age++;
   user.name.toUpperCase();   
}

const oldAndLoud = (obj) => {
   obj.age++;
   obj.name.toUpperCase;
}


