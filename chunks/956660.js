"use strict";
var r = n("814026"),
  a = n("64980"),
  o = n("18563"),
  i = URLSearchParams.prototype,
  u = a(i.forEach);
r && !("size" in i) && o(i, "size", {
  get: function() {
    var e = 0;
    return u(this, function() {
      e++
    }), e
  },
  configurable: !0,
  enumerable: !0
})