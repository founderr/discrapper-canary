"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var s = l("470079"),
  a = l("442837"),
  i = l("726542"),
  n = l("122021"),
  r = l("621853");
let o = [];

function u(e) {
  let t = (0, n.usePlatformAllowed)({
      forUserProfile: !0
    }),
    l = (0, a.useStateFromStores)([r.default], () => r.default.getUserProfile(e));
  return (0, s.useMemo)(() => (null == l ? void 0 : l.connectedAccounts) == null ? o : l.connectedAccounts.filter(e => {
    let {
      type: l
    } = e, s = i.default.get(l);
    return null != s && t(s)
  }), [null == l ? void 0 : l.connectedAccounts, t])
}