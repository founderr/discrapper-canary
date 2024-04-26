"use strict";
n.r(t), n.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return s
  },
  default: function() {
    return i
  }
});
var l = n("726542"),
  a = n("973616");
let s = "xbox:";
class i extends a.default {
  getIconURL() {
    return l.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(s).concat(e.name), this.name = e.name
  }
}