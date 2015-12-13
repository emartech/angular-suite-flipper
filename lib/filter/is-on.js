'use strict';

let Filter = require('ng1-decorators').Filter;

@Filter
class IsOnFilter {

  constructor(flipper) {
    this._flipperService = flipper;
  }


  transform(flipperName) {
    return this._flipperService.isOn(flipperName);
  }

}

module.exports = IsOnFilter;
