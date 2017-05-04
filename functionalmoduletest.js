
const fn1 = require('./functionalmodule')();

const fn2 = require('./functionalmodule')();


setInterval(function () {
  fn1('a');
},200);

setInterval(function () {
  fn2('b');
},50 );
