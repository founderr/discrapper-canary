"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
}), a("47120");
var n = a("553813"),
  s = a.n(n),
  l = a("358085");
let i = {
  [l.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function r(e) {
  let t = i[(0, l.getPlatform)()];
  if (null == t) return !1;
  for (let a of Object.keys(e)) {
    let n = e[a],
      l = t[a];
    if (null == n || null == l || null != n.error) continue;
    let i = function(e) {
      var t, a;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (a = e.minor) && void 0 !== a ? a : 0, ".0")
    }(n);
    if (!s().satisfies(i, l)) return !0
  }
  return !1
}