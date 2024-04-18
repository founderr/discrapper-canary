"use strict";

function n(e) {
  let t;
  let a = !1;
  return function() {
    for (var n = arguments.length, s = Array(n), l = 0; l < n; l++) s[l] = arguments[l];
    return !a && (a = !0, t = e(...s)), t
  }
}
a.r(t), a.d(t, {
  callOnce: function() {
    return n
  }
}), a("47120")