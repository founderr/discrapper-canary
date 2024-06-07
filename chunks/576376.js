"use strict";

function a(e) {
  let t;
  let s = !1;
  return function() {
    for (var a = arguments.length, n = Array(a), l = 0; l < a; l++) n[l] = arguments[l];
    return !s && (s = !0, t = e(...n)), t
  }
}
s.r(t), s.d(t, {
  callOnce: function() {
    return a
  }
}), s("47120")