"use strict";
n.r(t), n.d(t, {
  XBOX_APPLICATION_ID_PREFIX: function() {
    return a
  },
  default: function() {
    return s
  }
});
var r = n("726542"),
  i = n("973616");
let a = "xbox:";
class s extends i.default {
  getIconURL() {
    return r.default.get("xbox").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(a).concat(e.name), this.name = e.name
  }
}