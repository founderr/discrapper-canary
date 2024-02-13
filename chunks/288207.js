"use strict";
l.r(t), l.d(t, {
  default: function() {
    return n
  }
}), l("222007");
let a = new Set(["nvidia"]);

function n(e) {
  for (let t of Object.keys(e)) {
    let l = e[t];
    if (null != l && null == l.error && a.has(t)) return !0
  }
  return !1
}