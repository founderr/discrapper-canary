"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var r = n("470079"),
  s = n("442837"),
  a = n("592125"),
  E = n("9156");

function u(e) {
  let t = (0, s.useStateFromStores)([a.default], () => a.default.getPrivateChannelsVersion()),
    n = (0, s.useStateFromStores)([a.default], () => a.default.getMutableDMsByUserIds(), [t]),
    u = (0, s.useStateFromStores)([E.default], () => E.default.getMutedChannels(null)),
    T = r.useMemo(() => {
      let e = new Set;
      for (let t in n) {
        let r = n[t];
        null != r && u.has(r) && e.add(t)
      }
      return e
    }, [n, u]);
  return r.useMemo(() => null == e ? void 0 : e.filter(e => {
    for (let t of e.participants)
      if (T.has(t)) return !1;
    return !0
  }), [e, T])
}