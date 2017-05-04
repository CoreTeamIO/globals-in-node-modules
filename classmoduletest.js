const FunctionRunner = require('./classmodule.js');

const fn1 = new FunctionRunner();
const fn2 = new FunctionRunner();


setInterval(function () {
  fn1.fn('a');
},200);

setInterval(function () {
  fn2.fn('b');
},50 );
