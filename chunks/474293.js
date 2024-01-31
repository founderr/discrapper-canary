"use strict";
n.r(t), n.d(t, {
  getClass: function() {
    return s
  }
}), n("808653");
var l = n("159885");

function s(e, t) {
  for (var n = arguments.length, s = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) s[i - 2] = arguments[i];
  let r = s.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
    o = "".concat(t).concat(r),
    a = e[o];
  if (null != a) return a
}