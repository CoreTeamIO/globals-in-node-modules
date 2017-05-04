'use strict';

class FunctionRunner {
  constructor() {
    this.x = 0;
  }

  fn(val) {
    console.log(`val : ${val}, x: ${this.x}`);
    if (val !== this.x && this.x !== 0) throw new Error(`failure!!! ${this.x} != ${val}`);
    this.x = val;
  }
}

module.exports = FunctionRunner;

