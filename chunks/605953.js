n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(479313),
  r = n(765104),
  o = n(502568),
  c = n(626135),
  u = n(981631),
  d = n(814249),
  h = n(689938);

function m(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([r.Z], () => r.Z.shouldShowTopicsBar());
  return (0, l.jsx)(o.ZP.Icon, {
    icon: s.TopicsIcon,
    onClick: () => {
      c.default.track(u.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
        summaries_sidebar_open: !n,
        source: d.Dc.TOOLBAR_BUTTON,
        guild_id: t.guild_id,
        channel_id: t.id,
        channel_type: t.type
      }), (0, a.e7)()
    },
    tooltip: n ? h.Z.Messages.SUMMARIES_SHOWN : h.Z.Messages.SUMMARIES_HIDDEN,
    selected: n,
    "aria-expanded": n
  })
}