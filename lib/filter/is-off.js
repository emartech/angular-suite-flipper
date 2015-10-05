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
    return ['flipper', (flipper) => {
      return (new IsOffFilter(flipper)).filter;
    }];
  }

}

module.exports = IsOffFilter;
