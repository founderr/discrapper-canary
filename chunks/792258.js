var s = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  l = n(468194),
  r = n(399606),
  c = n(481060),
  o = n(940627),
  d = n(914788),
  u = n(981631),
  E = n(689938),
  _ = n(57283);
let h = [18, 18, 16, 16, 14, 12, 10];
t.Z = e => {
  let {
    guildId: t
  } = e, n = (0, r.e7)([d.Z], () => d.Z.getGuild(t));
  if (void 0 === n) return null;
  let i = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
    T = n.toString(),
    I = n.getIconURL(40, !0),
    C = null,
    N = h[h.length - 1];
  if (null == n.icon && null != T) {
    var g;
    N = null !== (g = h[(C = (0, l.Zg)(T)).length - 1]) && void 0 !== g ? g : h[h.length - 1]
  }
  return (0, s.jsxs)("div", {
    className: _.container,
    children: [(0, s.jsxs)("div", {
      style: {
        fontSize: N
      },
      children: [null != C ? (0, s.jsx)("div", {
        className: a()(_.childWrapper, _.acronym),
        "aria-hidden": !0,
        children: C
      }) : null, null != I ? (0, s.jsx)(c.Avatar, {
        src: n.getIconURL(40, !0),
        size: c.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }) : null]
    }), (0, s.jsxs)("div", {
      className: _.descriptors,
      children: [(0, s.jsxs)("div", {
        className: _.header,
        children: [i ? (0, s.jsx)(o.Z, {
          guild: n,
          tooltipPosition: "bottom",
          tooltipColor: c.Tooltip.Colors.PRIMARY,
          className: _.guildBadge
        }) : null, (0, s.jsx)(c.Text, {
          variant: "text-md/semibold",
          children: n.toString()
        })]
      }), void 0 !== n.approximateMemberCount ? (0, s.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: E.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: n.approximateMemberCount
        })
      }) : null]
    })]
  })
}