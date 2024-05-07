"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("470079"),
  s = n("442837"),
  i = n("592125"),
  l = n("594174"),
  r = n("355298"),
  o = n("900255");

function u() {
  let e = (0, s.useStateFromStores)([i.default], () => i.default.getPrivateChannelsVersion()),
    t = (0, s.useStateFromStoresArray)([i.default, r.default], () => {
      let e = i.default.getMutablePrivateChannels(),
        t = Array.from(r.default.getMessageRequestChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, o.sortChannelIds)(t)
    }, [e]),
    n = (0, s.useStateFromStoresObject)([l.default], () => {
      let e = {};
      return t.forEach(t => {
        let n = l.default.getUser(t.recipients[0]);
        null != n && (e[t.id] = n)
      }), e
    }, [t]);
  return a.useMemo(() => t.map(e => ({
    channel: e,
    user: n[e.id]
  })), [t, n])
}