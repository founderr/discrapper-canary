"use strict";
n.r(t), n.d(t, {
  getClass: function() {
    return i
  }
}), n("808653");
var l = n("159885");

function i(e, t) {
  for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) i[s - 2] = arguments[s];
  let r = i.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
    o = "".concat(t).concat(r),
    a = e[o];
  if (null != a) return a
}