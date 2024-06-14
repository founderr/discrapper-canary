"use strict";

function n(e) {
  let t;
  let s = !1;
  return function() {
    for (var n = arguments.length, a = Array(n), l = 0; l < n; l++) a[l] = arguments[l];
    return !s && (s = !0, t = e(...a)), t
  }
}
s.r(t), s.d(t, {
  callOnce: function() {
    return n
  }
}), s("47120")