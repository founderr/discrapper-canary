"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var s = l("470079"),
  i = l("442837"),
  a = l("726542"),
  n = l("122021"),
  o = l("621853");
let r = [];

function u(e) {
  let t = (0, n.usePlatformAllowed)({
      forUserProfile: !0
    }),
    l = (0, i.useStateFromStores)([o.default], () => o.default.getUserProfile(e));
  return (0, s.useMemo)(() => (null == l ? void 0 : l.connectedAccounts) == null ? r : l.connectedAccounts.filter(e => {
    let {
      type: l
    } = e, s = a.default.get(l);
    return null != s && t(s)
  }), [null == l ? void 0 : l.connectedAccounts, t])
}