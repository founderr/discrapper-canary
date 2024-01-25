"use strict";
s.r(t), s.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return i
  },
  default: function() {
    return a
  }
});
var a, n = s("376556"),
  r = s("653047");
let i = "xbox:";
a = class extends r.default {
  getIconURL() {
    return n.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(i).concat(e.name), this.name = e.name
  }
}