
const fn1 = require('./badmodule');

const fn2 = require('./badmodule');


setInterval(function () {
  fn1('a');
},200);

setInterval(function () {
  fn2('b');
},50 );
