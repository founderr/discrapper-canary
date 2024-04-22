"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var l = s("470079"),
  a = s("442837"),
  i = s("726542"),
  r = s("122021"),
  n = s("621853");
let o = [];

function u(e) {
  let t = (0, r.usePlatformAllowed)({
      forUserProfile: !0
    }),
    s = (0, a.useStateFromStores)([n.default], () => n.default.getUserProfile(e));
  return (0, l.useMemo)(() => (null == s ? void 0 : s.connectedAccounts) == null ? o : s.connectedAccounts.filter(e => {
    let {
      type: s
    } = e, l = i.default.get(s);
    return null != l && t(l)
  }), [null == s ? void 0 : s.connectedAccounts, t])
}