"use strict";
n.r(t), n.d(t, {
  getClass: function() {
    return l
  }
}), n("724458");
var s = n("468194");

function l(e, t) {
  for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) l[i - 2] = arguments[i];
  let a = l.reduce((e, t) => e + (0, s.upperCaseFirstChar)(t), ""),
    r = e["".concat(t).concat(a)];
  return null == r ? "" : r
}