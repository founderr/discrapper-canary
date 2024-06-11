"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var i = n("470079"),
  a = n("442837"),
  s = n("592125"),
  r = n("9156");

function l(e) {
  let t = (0, a.useStateFromStores)([s.default], () => s.default.getPrivateChannelsVersion()),
    n = (0, a.useStateFromStores)([s.default], () => s.default.getMutableDMsByUserIds(), [t]),
    l = (0, a.useStateFromStores)([r.default], () => r.default.getMutedChannels(null)),
    u = i.useMemo(() => {
      let e = new Set;
      for (let t in n) {
        let i = n[t];
        null != i && l.has(i) && e.add(t)
      }
      return e
    }, [n, l]);
  return i.useMemo(() => null == e ? void 0 : e.filter(e => {
    for (let t of e.participants)
      if (u.has(t)) return !1;
    return !0
  }), [e, u])
}