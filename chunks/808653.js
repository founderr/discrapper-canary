"use strict";
var r = n("859514"),
  a = n("383053").left,
  o = n("528151"),
  i = n("693523"),
  u = n("106106");
r({
  target: "Array",
  proto: !0,
  forced: !u && i > 79 && i < 83 || !o("reduce")
}, {
  reduce: function(e) {
    var t = arguments.length;
    return a(this, e, t, t > 1 ? arguments[1] : void 0)
  }
})