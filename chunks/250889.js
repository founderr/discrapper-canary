"use strict";
n.r(t), n.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return s
  },
  default: function() {
    return o
  }
});
var i = n("726542"),
  r = n("973616");
let s = "xbox:";
class o extends r.default {
  getIconURL() {
    return i.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(s).concat(e.name), this.name = e.name
  }
}