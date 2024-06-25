n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(442837),
  i = n(201895),
  l = n(557135),
  a = n(703656),
  r = n(592125),
  o = n(979651),
  c = n(66999),
  u = n(981631);

function d(e, t) {
  let n = (0, s.e7)([r.Z], () => r.Z.getChannel(t)),
    {
      needSubscriptionToAccess: d
    } = (0, c.Z)(null == n ? void 0 : n.id);
  if (null == n || d) return null;
  let E = n.isGuildVocal(),
    _ = (0, i.ZP)({
      channel: n
    });
  return {
    navigateToChannel: () => {
      E ? l.Z.handleVoiceConnect({
        channel: n,
        connected: o.Z.isInChannel(n.id),
        needSubscriptionToAccess: !1,
        routeDirectlyToChannel: !0
      }) : (0, a.uL)(u.Z5c.CHANNEL(e, n.id))
    },
    ariaLabel: _
  }
}