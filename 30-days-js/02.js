/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let c = n;

  return function () {
    let count = [];
    count.push(n);
    n++;
    return count;
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
console.log(counter());
