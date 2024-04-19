"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("470079"),
  s = a("442837"),
  l = a("592125"),
  i = a("594174"),
  r = a("355298"),
  o = a("900255");

function u() {
  let e = (0, s.useStateFromStores)([l.default], () => l.default.getPrivateChannelsVersion()),
    t = (0, s.useStateFromStoresArray)([l.default, r.default], () => {
      let e = l.default.getMutablePrivateChannels(),
        t = Array.from(r.default.getMessageRequestChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, o.sortChannelIds)(t)
    }, [e]),
    a = (0, s.useStateFromStoresObject)([i.default], () => {
      let e = {};
      return t.forEach(t => {
        let a = i.default.getUser(t.recipients[0]);
        null != a && (e[t.id] = a)
      }), e
    }, [t]);
  return n.useMemo(() => t.map(e => ({
    channel: e,
    user: a[e.id]
  })), [t, a])
}