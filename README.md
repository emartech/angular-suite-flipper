# angular-suite-flipper

Install
---------

```bash
npm install --save angular-suite-flipper
```

Usage
---------

```javascript
require('angular-suite-flipper')(angular);

var myApp = angular
  .module('your-app', ['suiteFlipper'])
  .config(['flipperProvider', (flipperProvider) => {
    flipperProvider.setFlippers(['dummy', 'otherDummy']);
  }]);
```

Service
---------

```javascript
myApp.controller('GreetingController', ['$scope', 'flipper', function($scope, flipper) {
  $scope.reload = function() {
    if (flipper.isOn('yourFlipperName')) {
      // do something
    } else {
      // do something else
    }
  };

  $scope.someThing = function() {
    if (flipper.isOff('yourFlipperName')) {
      // do something
    } else {
      // do something else
    }
  };
}]);
```

Filter
---------

```javascript
.div(ng-show="{{ 'self_service_dashboard_ignore_revenue' | flipperIsOn }}")
  | flipper is On

.div(ng-show="{{ 'self_service_dashboard_ignore_revenue' | flipperIsOff }}")
  | flipper is Off
```
