"use strict";
r.r(t), r.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return l
  },
  default: function() {
    return i
  }
});
var i, n = r("376556"),
  s = r("653047");
let l = "xbox:";
i = class extends s.default {
  getIconURL() {
    return n.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(l).concat(e.name), this.name = e.name
  }
}