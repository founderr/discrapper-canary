"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var r = n(553813),
  o = n.n(r),
  a = n(358085);
let i = {
  [a.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function c(e) {
  let t = i[(0, a.getPlatform)()];
  if (null == t) return !1;
  for (let n of Object.keys(e)) {
    let r = e[n],
      a = t[n];
    if (null == r || null == a || null != r.error) continue;
    let i = function(e) {
      var t, n;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0")
    }(r);
    if (!o().satisfies(i, a)) return !0
  }
  return !1
}