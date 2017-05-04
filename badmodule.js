'use strict';
var x = 0;

module.exports = function (val) {
  console.log(`val : ${val}, x: ${x}`);
  if (val !== x && x !== 0) throw new Error(`failure!!! ${x} != ${val}`);
  x = val;
}


