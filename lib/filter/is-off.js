'use strict';

let Pipe = require('ng1-decorators').Pipe;

@Pipe
class IsOffFilter {

  constructor(flipper) {
    this._flipperService = flipper;
  }


  transform(flipperName) {
    return this._flipperService.isOff(flipperName);
  }

}

module.exports = IsOffFilter;
