n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var s = n(100527),
  l = n(906732),
  a = n(82950),
  r = n(26323),
  o = n(267642),
  c = n(981631),
  u = n(921944),
  d = n(30513),
  E = n(689938),
  h = n(420569);

function _(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e, _ = (0, o.KK)(t, c.Eu4.TIER_2), {
    analyticsLocations: I
  } = (0, l.ZP)(s.Z.GUILD_BANNER_NOTICE);
  return (0, i.jsx)(a.Z, {
    guild: t,
    onDismissed: () => n(u.L.UNKNOWN),
    cta: E.Z.Messages.GUILD_BANNER_NOTICE_CTA,
    message: E.Z.Messages.GUILD_BANNER_NOTICE.format({
      boostsNeeded: _
    }),
    type: c.vID.GUILD_BANNER,
    image: h,
    onClick: () => (0, r.Z)({
      analyticsLocations: I,
      analyticsSourceLocation: {
        section: c.jXE.CHANNEL_NOTICE,
        object: c.qAy.SERVER_BANNER_TOOLTIP
      },
      guild: t,
      perks: (0, d.XO)()
    }),
    imageMarginTop: 15,
    imageMarginX: 22
  })
}