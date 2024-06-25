n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(442837),
  i = n(358221),
  s = n(430824),
  a = n(496675),
  r = n(431328),
  o = n(501655),
  c = n(146085),
  u = n(71275),
  d = n(981631);

function h(e) {
  var t;
  let n = (0, l.e7)([i.Z], () => i.Z.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
    h = (0, r.Io)(e.id),
    m = (0, r.Rk)(e.id, o.pV.AUDIENCE),
    E = (0, u.PK)(e.id),
    p = (0, l.e7)([s.Z], () => s.Z.getGuild(e.guild_id), [e.guild_id]),
    g = (0, l.e7)([a.Z], () => a.Z.can(c.yP, e), [e]),
    f = null !== (t = null == p ? void 0 : p.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
    C = !(null == p ? void 0 : p.isCommunity()) && f > d.RcX;
  return E && !n && g && !C && h + m >= f
}