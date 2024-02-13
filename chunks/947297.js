"use strict";
s.r(t), s.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return r
  },
  default: function() {
    return a
  }
});
var a, n = s("376556"),
  i = s("653047");
let r = "xbox:";
a = class extends i.default {
  getIconURL() {
    return n.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(r).concat(e.name), this.name = e.name
  }
}