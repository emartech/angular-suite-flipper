'use strict';

class IsOnFilter {

  constructor(flipperService) {
    this._flipperService = flipperService;
    this.filter = this.filter.bind(this);
  }


  filter(flipperName) {
    return this._flipperService.isOff(flipperName);
  }

}

module.exports = IsOnFilter;
