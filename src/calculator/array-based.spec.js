'use strict';

import Calculator from './array-based';
import tests from './shared-tests';

describe('Array based Calculator', function() {

  beforeEach(function() {
    this.subject = Calculator.create();
  });

  tests();
});
