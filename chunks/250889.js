"use strict";
r.r(t), r.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return n
  },
  default: function() {
    return l
  }
});
var s = r("726542"),
  i = r("973616");
let n = "xbox:";
class l extends i.default {
  getIconURL() {
    return s.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(n).concat(e.name), this.name = e.name
  }
}