"use strict";
n.r(e), n.d(e, {
  default: function() {
    return a
  }
}), n("47120");
var r = n("470079"),
  i = n("442837"),
  u = n("592125"),
  o = n("9156");

function a(t) {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.getPrivateChannelsVersion()),
    n = (0, i.useStateFromStores)([u.default], () => u.default.getMutableDMsByUserIds(), [e]),
    a = (0, i.useStateFromStores)([o.default], () => o.default.getMutedChannels(null)),
    l = r.useMemo(() => {
      let t = new Set;
      for (let e in n) {
        let r = n[e];
        null != r && a.has(r) && t.add(e)
      }
      return t
    }, [n, a]);
  return r.useMemo(() => null == t ? void 0 : t.filter(t => {
    for (let e of t.participants)
      if (l.has(e)) return !1;
    return !0
  }), [t, l])
}