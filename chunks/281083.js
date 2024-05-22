"use strict";
r.r(t), r.d(t, {
  default: function() {
    return a
  }
}), r("47120");
var n = r("553813"),
  i = r.n(n),
  l = r("358085");
let u = {
  [l.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function a(e) {
  let t = u[(0, l.getPlatform)()];
  if (null == t) return !1;
  for (let r of Object.keys(e)) {
    let n = e[r],
      l = t[r];
    if (null == n || null == l || null != n.error) continue;
    let u = function(e) {
      var t, r;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (r = e.minor) && void 0 !== r ? r : 0, ".0")
    }(n);
    if (!i().satisfies(u, l)) return !0
  }
  return !1
}