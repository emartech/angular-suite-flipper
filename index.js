'use strict';

const MODULE_NAME = 'suiteFlipper';
const IsOffFilter = require('./filter/is-off');
const IsOnFilter = require('./filter/is-on');
const SuiteFlipper = require('suite-flipper-js');

module.exports = function(angular) {
  angular
    .module(MODULE_NAME, [])
    .filter('isOn', IsOnFilter.create())
    .filter('isOff', IsOffFilter.create())
    .provider('flipperService', function() {
      let flippers = [];
      this.setFlippers = function(value) { flippers = value; };
      this.$get = [function() {
        return new SuiteFlipper(flippers);
      }];
    });

  return MODULE_NAME;
};
