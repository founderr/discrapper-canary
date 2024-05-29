"use strict";
r.r(t), r.d(t, {
  default: function() {
    return i
  }
}), r("47120");
let n = new Set(["nvidia"]);

function i(e) {
  for (let t of Object.keys(e)) {
    let r = e[t];
    if (null != r && null == r.error && n.has(t)) return !0
  }
  return !1
}