'use strict';

class IsOnFilter {

  constructor(flipperService) {
    this._flipperService = flipperService;
    this.filter = this.filter.bind(this);
  }


  filter(flipperName) {
    return this._flipperService.isOn(flipperName);
  }


  static create() {
    return ['flipper', function(flipper) {
      return (new IsOnFilter(flipper)).filter;
    }];
  }

}

module.exports = IsOnFilter;
