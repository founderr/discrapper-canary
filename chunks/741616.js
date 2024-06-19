n.d(t, {
  Z: function() {
    return h
  }
}), n(733860);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(215569),
  a = n(762914),
  o = n(592125),
  u = n(358652),
  c = n(19780),
  d = n(919436);

function h() {
  (0, s.e7)([o.Z], () => o.Z.getPrivateChannelsVersion());
  let e = o.Z.getMutablePrivateChannels(),
    t = (0, s.Wu)([u.Z], () => u.Z.getUnreadPrivateChannelIds()),
    {
      selectedVoiceGuildId: n,
      selectedVoiceChannelId: h
    } = (0, s.cj)([c.Z], () => ({
      selectedVoiceGuildId: c.Z.getGuildId(),
      selectedVoiceChannelId: c.Z.getChannelId()
    })),
    g = t.map(t => {
      let n = e[t];
      return null == n || n.id === h || n.isBroadcastChannel() ? null : (0, l.jsx)(d.Z, {
        channel: n
      }, n.id)
    }),
    p = null == n && null != h ? e[h] : null,
    m = (0, a.Dd)(null == p ? void 0 : p.id);
  return null != p && !m && g.unshift((0, l.jsx)(d.Z, {
    channel: p
  }, p.id)), (0, l.jsx)(r.W, {
    component: i.Fragment,
    children: g
  })
}