// Start with an array of pairs
const pairs = [["name", "John"], ["age", 25], ["city", "NYC"]];

// Convert array of pairs back to object
const obj = Object.fromEntries(pairs);

console.log(obj);
// { name: "John", age: 25, city: "NYC" }