"use strict";
s.r(t), s.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return a
  },
  default: function() {
    return u
  }
});
var n = s("726542"),
  r = s("973616");
let a = "xbox:";
class u extends r.default {
  getIconURL() {
    return n.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(a).concat(e.name), this.name = e.name
  }
}