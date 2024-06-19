t.d(n, {
  Z: function() {
    return d
  }
});
var i = t(442837),
  l = t(201895),
  s = t(557135),
  r = t(703656),
  a = t(592125),
  o = t(979651),
  u = t(66999),
  c = t(981631);

function d(e, n) {
  let t = (0, i.e7)([a.Z], () => a.Z.getChannel(n)),
    {
      needSubscriptionToAccess: d
    } = (0, u.Z)(null == t ? void 0 : t.id);
  if (null == t || d) return null;
  let _ = t.isGuildVocal(),
    I = (0, l.ZP)({
      channel: t
    });
  return {
    navigateToChannel: () => {
      _ ? s.Z.handleVoiceConnect({
        channel: t,
        connected: o.Z.isInChannel(t.id),
        needSubscriptionToAccess: !1,
        routeDirectlyToChannel: !0
      }) : (0, r.uL)(c.Z5c.CHANNEL(e, t.id))
    },
    ariaLabel: I
  }
}