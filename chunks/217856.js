"use strict";
var n = e("859514"),
  i = e("383053").right,
  o = e("528151"),
  u = e("693523"),
  a = e("106106");
n({
  target: "Array",
  proto: !0,
  forced: !a && u > 79 && u < 83 || !o("reduceRight")
}, {
  reduceRight: function(t) {
    return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
  }
})