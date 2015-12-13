'use strict';

var Filter = require('./is-on');
var FlipperService = require('suite-flipper-js');

describe('is-on filter', function() {

  var filter;
  var flipperService;

  beforeEach(function() {
    flipperService = new FlipperService(['bi', 'dummy']);
    filter = new Filter(flipperService);
  });

  describe('#filter', function() {

    it('should return true if the given filter is on', function() {
      this.expect(filter.transform('bi')).to.be.true;
    });


    it('should return false if the given filter is off', function() {
      this.expect(filter.transform('not.in.the.given.list')).to.be.false;
    });

  });

});
