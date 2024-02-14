"use strict";
var n = e("859514"),
  i = e("427191").findLastIndex,
  o = e("505713");
n({
  target: "Array",
  proto: !0
}, {
  findLastIndex: function(t) {
    return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
  }
}), o("findLastIndex")