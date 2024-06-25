n.d(t, {
  Z: function() {
    return h
  }
}), n(733860);
var i = n(735250),
  l = n(470079),
  r = n(442837),
  a = n(215569),
  s = n(762914),
  o = n(592125),
  c = n(358652),
  u = n(19780),
  d = n(919436);

function h() {
  (0, r.e7)([o.Z], () => o.Z.getPrivateChannelsVersion());
  let e = o.Z.getMutablePrivateChannels(),
    t = (0, r.Wu)([c.Z], () => c.Z.getUnreadPrivateChannelIds()),
    {
      selectedVoiceGuildId: n,
      selectedVoiceChannelId: h
    } = (0, r.cj)([u.Z], () => ({
      selectedVoiceGuildId: u.Z.getGuildId(),
      selectedVoiceChannelId: u.Z.getChannelId()
    })),
    p = t.map(t => {
      let n = e[t];
      return null == n || n.id === h || n.isBroadcastChannel() ? null : (0, i.jsx)(d.Z, {
        channel: n
      }, n.id)
    }),
    f = null == n && null != h ? e[h] : null,
    _ = (0, s.Dd)(null == f ? void 0 : f.id);
  return null != f && !_ && p.unshift((0, i.jsx)(d.Z, {
    channel: f
  }, f.id)), (0, i.jsx)(a.W, {
    component: l.Fragment,
    children: p
  })
}