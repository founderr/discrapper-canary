"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var i = s("470079"),
  n = s("442837"),
  r = s("594174"),
  d = s("823162"),
  a = s("355298");
let u = new Set(["GB"]);

function l() {
  let e = (0, n.useStateFromStores)([a.default], () => a.default.getUserCountryCode()),
    t = !1 === (0, n.useStateFromStores)([r.default], () => {
      var e;
      return null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    });
  return i.useEffect(() => {
    null == e && (0, d.fetchUserCountryCode)()
  }, [e]), !!(null != e && u.has(e.alpha2)) && !!t || !1
}