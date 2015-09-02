'use strict';

class IsOffFilter {

  constructor(flipperService) {
    this._flipperService = flipperService;
    this.filter = this.filter.bind(this);
  }


  filter(flipperName) {
    return this._flipperService.isOff(flipperName);
  }


  static create() {
    return ['flipperService', IsOffFilter];
  }

}

module.exports = IsOffFilter;
