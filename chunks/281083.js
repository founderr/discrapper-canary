"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var a = n("553813"),
  s = n.n(a),
  i = n("358085");
let l = {
  [i.PlatformTypes.WINDOWS]: {
    nvidia: "<=537.58.0 || >=546.31"
  }
};

function r(e) {
  let t = l[(0, i.getPlatform)()];
  if (null == t) return !1;
  for (let n of Object.keys(e)) {
    let a = e[n],
      i = t[n];
    if (null == a || null == i || null != a.error) continue;
    let l = function(e) {
      var t, n;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (n = e.minor) && void 0 !== n ? n : 0, ".0")
    }(a);
    if (!s().satisfies(l, i)) return !0
  }
  return !1
}