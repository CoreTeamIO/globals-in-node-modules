'use strict';
module.exports = (function() {
  let x = 0;

  return function (val) {
    console.log(`val : ${val}, x: ${x}`);
    if (val !== x && x !== 0) throw new Error(`failure!!! ${x} != ${val}`);
    x = val;
  }
});