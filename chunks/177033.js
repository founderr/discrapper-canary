"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("470079"),
  a = n("442837"),
  s = n("592125"),
  i = n("594174"),
  r = n("355298"),
  o = n("900255");

function u() {
  let e = (0, a.useStateFromStores)([s.default], () => s.default.getPrivateChannelsVersion()),
    t = (0, a.useStateFromStoresArray)([s.default, r.default], () => {
      let e = s.default.getMutablePrivateChannels(),
        t = Array.from(r.default.getMessageRequestChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, o.sortChannelIds)(t)
    }, [e]),
    n = (0, a.useStateFromStoresObject)([i.default], () => {
      let e = {};
      return t.forEach(t => {
        let n = i.default.getUser(t.recipients[0]);
        null != n && (e[t.id] = n)
      }), e
    }, [t]);
  return l.useMemo(() => t.map(e => ({
    channel: e,
    user: n[e.id]
  })), [t, n])
}