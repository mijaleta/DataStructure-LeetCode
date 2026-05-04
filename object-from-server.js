// object returned from server
const products = {
  id1: { name: "Apple", price: "$1" },
  id2: { name: "Spinach", price: "$2" },
};

// Object.entries() converts to array of arrays
// [
//   ["id1", { name: "Apple", price: "$1" }],
//   ["id2", { name: "Spinach", price: "$2" }],
// ]

Object.entries(products).map(([id, product]) => {
  console.log(id);           // id1, id2
  console.log(product);      // { name: "Apple" }, { name: "Spinach" }
  console.log(product.name); // Apple, Spinach
});