"use strict";
n.r(t), n.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return s
  },
  default: function() {
    return a
  }
});
var r = n("726542"),
  i = n("973616");
let s = "xbox:";
class a extends i.default {
  getIconURL() {
    return r.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(s).concat(e.name), this.name = e.name
  }
}