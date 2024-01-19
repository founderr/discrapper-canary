"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
}), l("222007");
var n = l("570277"),
  s = l.n(n),
  a = l("773336");
let r = {
  [a.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function i(e) {
  let t = r[(0, a.getPlatform)()];
  if (null == t) return !1;
  for (let l of Object.keys(e)) {
    let n = e[l],
      a = t[l];
    if (null == n || null == a || null != n.error) continue;
    let r = function(e) {
      var t, l;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
    }(n);
    if (!s.satisfies(r, a)) return !0
  }
  return !1
}