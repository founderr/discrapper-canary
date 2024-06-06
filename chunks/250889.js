"use strict";
n.r(t), n.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return a
  },
  default: function() {
    return r
  }
});
var i = n("726542"),
  s = n("973616");
let a = "xbox:";
class r extends s.default {
  getIconURL() {
    return i.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(a).concat(e.name), this.name = e.name
  }
}