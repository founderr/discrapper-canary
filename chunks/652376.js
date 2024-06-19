n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(470079),
  i = n(442837),
  s = n(623633),
  r = n(199902),
  a = n(19780),
  o = n(979651);

function u(e) {
  var t;
  let n = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
    u = e.children.map(e => e.id),
    c = null != n && u.includes(n),
    d = !1,
    h = !1,
    g = !1,
    p = (0, i.e7)([a.Z], () => a.Z.getChannelId()),
    m = null === (t = (0, s.Z)()) || void 0 === t ? void 0 : t.guild_id,
    C = null != m && u.includes(m),
    E = (0, i.e7)([o.Z], () => null != p && o.Z.hasVideo(p), [p]),
    f = (0, i.e7)([r.Z], () => r.Z.getCurrentUserActiveStream());
  return c && (d = !E, h = E, g = null != f && null != f.guildId && u.includes(f.guildId)), l.useMemo(() => ({
    audio: d,
    video: h,
    screenshare: g,
    liveStage: C,
    isCurrentUserConnected: c
  }), [d, h, g, C, c])
}