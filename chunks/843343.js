n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  r = n(299379),
  a = n(486472),
  o = n(430824),
  u = n(682662),
  c = n(662146),
  d = n(981631),
  h = n(689938),
  g = n(72766);

function p() {
  let e = (0, i.e7)([a.Z, o.Z], () => a.Z.unavailableGuilds.filter(e => null == o.Z.getGuild(e)).length);
  return e <= 0 ? null : (0, l.jsx)(u.H, {
    children: (0, l.jsx)(c.Z, {
      text: h.Z.Messages.PARTIAL_OUTAGE.format({
        count: e
      }),
      color: s.Tooltip.Colors.RED,
      children: (0, l.jsx)(s.Anchor, {
        href: (0, r.Z)(d.RK.TWITTER),
        target: "_blank",
        className: g.guildsError,
        "aria-label": h.Z.Messages.PARTIAL_OUTAGE_A11Y.format({
          count: e
        }),
        children: (0, l.jsx)("span", {
          "aria-hidden": !0,
          className: g.errorInner,
          children: "!"
        })
      })
    })
  })
}