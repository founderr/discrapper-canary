"use strict";
t.d(n, {
  Z: function() {
    return l
  }
}), t(47120);
var r = t(553813),
  o = t.n(r),
  i = t(358085);
let s = {
  [i.PlatformTypes.WINDOWS]: {
    nvidia: ">=397.93.0"
  }
};

function l(e) {
  let n = s[(0, i.getPlatform)()];
  if (null == n) return !1;
  for (let t of Object.keys(e)) {
    let r = e[t],
      i = n[t];
    if (null == r || null == i || null != r.error) continue;
    let s = function(e) {
      var n, t;
      return "".concat(null !== (n = e.major) && void 0 !== n ? n : 0, ".").concat(null !== (t = e.minor) && void 0 !== t ? t : 0, ".0")
    }(r);
    if (!o().satisfies(s, i)) return !0
  }
  return !1
}