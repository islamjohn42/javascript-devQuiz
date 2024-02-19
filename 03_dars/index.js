// Type changing
const age = 23;
const bool = false;
const boolString = String(bool) // === "false"
const ageString = String(age); // "23"
const ageTemplateString = `${age}`
console.log(typeof ageString, typeof boolString,ageString, boolString);
console.log(typeof ageTemplateString);
