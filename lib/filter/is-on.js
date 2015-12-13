'use strict';

let Pipe = require('ng1-decorators').Pipe;

@Pipe
class IsOnFilter {

  constructor(flipper) {
    this._flipperService = flipper;
  }


  transform(flipperName) {
    return this._flipperService.isOn(flipperName);
  }

}

module.exports = IsOnFilter;
