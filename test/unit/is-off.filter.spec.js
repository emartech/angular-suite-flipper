'use strict';

var Filter = require('../../filter/is-off');
var FlipperService = require('suite-flipper-js');

describe('is-off filter', function() {

  var filter;
  var flipperService;

  beforeEach(function() {
    flipperService = new FlipperService(['bi', 'dummy']);
    filter = new Filter(flipperService);
  });

  describe('#filter', function() {

    it('should return true if the given filter is off', function() {
      this.expect(filter.filter('not.in.the.list')).to.be.true;
    });


    it('should return false if the given filter is on', function() {
      this.expect(filter.filter('bi')).to.be.false;
    });

  });

});
