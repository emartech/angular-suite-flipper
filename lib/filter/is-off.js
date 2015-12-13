'use strict';

let Filter = require('ng1-decorators').Filter;

@Filter
class IsOffFilter {

  constructor(flipper) {
    this._flipperService = flipper;
  }


  transform(flipperName) {
    return this._flipperService.isOff(flipperName);
  }

}

module.exports = IsOffFilter;
