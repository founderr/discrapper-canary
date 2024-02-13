"use strict";
i.r(t), i.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return l
  },
  default: function() {
    return r
  }
});
var r, s = i("376556"),
  n = i("653047");
let l = "xbox:";
r = class extends n.default {
  getIconURL() {
    return s.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(l).concat(e.name), this.name = e.name
  }
}