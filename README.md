# angular-suite-flipper

Install
---------

    npm install --save angular-suite-flipper
    
    
Usage
---------

    require('angular-suite-flipper')(angular);
    angular.module('your-app', [
      'suiteFlipper'
    ]);


Service
---------
  
    myApp.controller('GreetingController', ['$scope', 'flipper', function($scope, flipper) {
      $scope.reload = function() {
        if (flipper.isOn('yourFlipperName')) {
          // do something
        } else {
          // do something else
        }
      };
    }]);

Filter
---------

    .div(ng-show="{{ 'self_service_dashboard_ignore_revenue' | flipperIsOn }}")
      | flipper is On
      
    .div(ng-show="{{ 'self_service_dashboard_ignore_revenue' | flipperIsOff }}")
      | flipper is Off
