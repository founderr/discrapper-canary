"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
}), l("222007");
var a = l("570277"),
  n = l.n(a),
  s = l("773336");
let r = {
  [s.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function i(e) {
  let t = r[(0, s.getPlatform)()];
  if (null == t) return !1;
  for (let l of Object.keys(e)) {
    let a = e[l],
      s = t[l];
    if (null == a || null == s || null != a.error) continue;
    let r = function(e) {
      var t, l;
      return "".concat(null !== (t = e.major) && void 0 !== t ? t : 0, ".").concat(null !== (l = e.minor) && void 0 !== l ? l : 0, ".0")
    }(a);
    if (!n.satisfies(r, s)) return !0
  }
  return !1
}