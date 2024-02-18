console.log("Hello world")

// var age = 25;
let name = "John";
const PI = 3.14;

/*
Harflar sonlar $ and _ кирил is allowed
reserved keywords: return, var, let, breal and etc is not allowed
Cannot start with number but end with number
camelCase 
*/

//! Data types
// Number
// +/- 2/53
let num = -2;
let age = 25;
let hour = 5.3
let billion = 1_000_000
console.log(num, age, hour);
console.log(billion);

// BigInt
let bigInt = 100n
console.log(bigInt);

// String
let str1 = 'String';
let str2 = "String 1";
let str3 = `String 3 with ${str1}`;

// Boolean // true or false
let isMarried = false;
let hasParents = true;

// Object {ключ: значение}
// keylar only string | number | symbol

let address = "Moscow"
const user = {
  name: "Islom",
  age: 25,
  "city": address
}
console.log(user["city"]);

// Symbol
const key = Symbol("kalit");
console.log(Symbol("kalit") === Symbol("kalit")) // false

// null - bo'm-bosh, hech narsa yo'q // xotiradan joy ajratiladi
let color = null;
console.log(color);

// undefined - Biriktirilmagan ham value ham data type
let exampleUndefined; // === let exampleUndefined = undefined
console.log(exampleUndefined)

console.log(typeof null)// Object
console.log(typeof undefined)// undefined



