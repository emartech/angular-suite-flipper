'use strict';

const MODULE_NAME = 'suiteFlipper';
const IsOffFilter = require('./filter/is-off');
const IsOnFilter = require('./filter/is-on');
const SuiteFlipper = require('suite-flipper-js');

module.exports = function(angular) {
  angular
    .module(MODULE_NAME, [])
    .filter('flipperIsOn', IsOnFilter.create())
    .filter('flipperIsOff', IsOffFilter.create())
    .provider('flipper', function() {
      let flippers = [];
      return {
        setFlippers: function(value) {
          flippers = value;
        },

        $get: [function() {
          return SuiteFlipper.create(flippers);
        }]
      };
    });

  return MODULE_NAME;
};
