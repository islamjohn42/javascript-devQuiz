// Type changing
const age = 23;
const bool = false;
const boolString = String(bool) // === "false"
const ageString = String(age); // "23"
const ageTemplateString = `${age}`
console.log(typeof ageString, typeof boolString,ageString, boolString);
console.log(typeof ageTemplateString);

const none = null;
const noneString = `${none}` // === "null"


//! Number

const currentYear = "2024";
const numberYear = Number(currentYear)
console.log(typeof currentYear, typeof numberYear);
const parseNumber = Number.parseInt(currentYear); // === Number.parseFloat()
console.log(typeof parseNumber);
const unaryNumber = +currentYear;
console.log(typeof unaryNumber);
