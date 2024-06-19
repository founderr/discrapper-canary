n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(470079),
  s = n(442837),
  l = n(592125),
  a = n(594174),
  r = n(900255),
  o = n(333984);

function c() {
  let e = (0, s.e7)([l.Z], () => l.Z.getPrivateChannelsVersion()),
    t = (0, s.Wu)([l.Z, o.Z], () => {
      let e = l.Z.getMutablePrivateChannels(),
        t = Array.from(o.Z.getSpamChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, r.x)(t)
    }, [e]),
    n = (0, s.cj)([a.default], () => {
      let e = {};
      return t.forEach(t => {
        let n = a.default.getUser(t.recipients[0]);
        null != n && (e[t.id] = n)
      }), e
    }, [t]);
  return i.useMemo(() => t.map(e => ({
    channel: e,
    user: n[e.id]
  })), [t, n])
}