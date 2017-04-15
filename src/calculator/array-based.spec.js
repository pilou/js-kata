'use strict';

const Calculator = require('./array-based');
const tests = require('./shared-tests');

describe('Array based Calculator', function() {

  beforeEach(function() {
    this.subject = Calculator.create();
  });

  tests();
});
