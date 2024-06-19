var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  l = n(468194),
  r = n(399606),
  o = n(481060),
  c = n(940627),
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
  let a = n.hasFeature(u.oNc.VERIFIED) || n.hasFeature(u.oNc.PARTNERED),
    m = n.toString(),
    T = n.getIconURL(40, !0),
    C = null,
    g = h[h.length - 1];
  if (null == n.icon && null != m) {
    var p;
    g = null !== (p = h[(C = (0, l.Zg)(m)).length - 1]) && void 0 !== p ? p : h[h.length - 1]
  }
  return (0, s.jsxs)("div", {
    className: _.container,
    children: [(0, s.jsxs)("div", {
      style: {
        fontSize: g
      },
      children: [null != C ? (0, s.jsx)("div", {
        className: i()(_.childWrapper, _.acronym),
        "aria-hidden": !0,
        children: C
      }) : null, null != T ? (0, s.jsx)(o.Avatar, {
        src: n.getIconURL(40, !0),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }) : null]
    }), (0, s.jsxs)("div", {
      className: _.descriptors,
      children: [(0, s.jsxs)("div", {
        className: _.header,
        children: [a ? (0, s.jsx)(c.Z, {
          guild: n,
          tooltipPosition: "bottom",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          className: _.guildBadge
        }) : null, (0, s.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: n.toString()
        })]
      }), void 0 !== n.approximateMemberCount ? (0, s.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: E.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: n.approximateMemberCount
        })
      }) : null]
    })]
  })
}