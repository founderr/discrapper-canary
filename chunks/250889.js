"use strict";
n.r(t), n.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return s
  },
  default: function() {
    return i
  }
});
var a = n("726542"),
  l = n("973616");
let s = "xbox:";
class i extends l.default {
  getIconURL() {
    return a.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(s).concat(e.name), this.name = e.name
  }
}