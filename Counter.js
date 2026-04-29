function createCounter(initialValue) {
  let count = initialValue;
  return function () {
    return count++;
  };
}
const counter = createCounter(1);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
