n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(470079),
  i = n(442837),
  s = n(592125),
  r = n(594174),
  a = n(355298),
  o = n(900255);

function u() {
  let e = (0, i.e7)([s.Z], () => s.Z.getPrivateChannelsVersion()),
    t = (0, i.Wu)([s.Z, a.Z], () => {
      let e = s.Z.getMutablePrivateChannels(),
        t = Array.from(a.Z.getMessageRequestChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, o.x)(t)
    }, [e]),
    n = (0, i.cj)([r.default], () => {
      let e = {};
      return t.forEach(t => {
        let n = r.default.getUser(t.recipients[0]);
        null != n && (e[t.id] = n)
      }), e
    }, [t]);
  return l.useMemo(() => t.map(e => ({
    channel: e,
    user: n[e.id]
  })), [t, n])
}