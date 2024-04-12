"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("47120");
var i = s("470079"),
  d = s("442837"),
  n = s("594174"),
  a = s("823162"),
  r = s("355298");
let l = new Set(["GB"]);

function u() {
  let e = (0, d.useStateFromStores)([r.default], () => r.default.getUserCountryCode()),
    t = !1 === (0, d.useStateFromStores)([n.default], () => {
      var e;
      return null === (e = n.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    });
  return i.useEffect(() => {
    null == e && (0, a.fetchUserCountryCode)()
  }, [e]), !!(null != e && l.has(e.alpha2)) && !!t || !1
}