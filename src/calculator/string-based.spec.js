'use strict';

const Calculator = require('./string-based');
const tests = require('./shared-tests');

describe('String based Calculator', function() {

  beforeEach(function() {
    this.subject = Calculator.create();
  });

  tests();
});
