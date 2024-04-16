"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
}), a("47120");
let n = new Set(["nvidia"]);

function s(e) {
  for (let t of Object.keys(e)) {
    let a = e[t];
    if (null != a && null == a.error && n.has(t)) return !0
  }
  return !1
}