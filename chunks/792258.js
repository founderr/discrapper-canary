var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(468194),
  l = s(399606),
  o = s(481060),
  c = s(940627),
  E = s(914788),
  _ = s(981631),
  u = s(689938),
  d = s(57283);
let T = [18, 18, 16, 16, 14, 12, 10];
t.Z = e => {
  let {
    guildId: t
  } = e, s = (0, l.e7)([E.Z], () => E.Z.getGuild(t));
  if (void 0 === s) return null;
  let a = s.hasFeature(_.oNc.VERIFIED) || s.hasFeature(_.oNc.PARTNERED),
    I = s.toString(),
    R = s.getIconURL(40, !0),
    A = null,
    N = T[T.length - 1];
  if (null == s.icon && null != I) {
    var C;
    N = null !== (C = T[(A = (0, r.Zg)(I)).length - 1]) && void 0 !== C ? C : T[T.length - 1]
  }
  return (0, n.jsxs)("div", {
    className: d.container,
    children: [(0, n.jsxs)("div", {
      style: {
        fontSize: N
      },
      children: [null != A ? (0, n.jsx)("div", {
        className: i()(d.childWrapper, d.acronym),
        "aria-hidden": !0,
        children: A
      }) : null, null != R ? (0, n.jsx)(o.Avatar, {
        src: s.getIconURL(40, !0),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }) : null]
    }), (0, n.jsxs)("div", {
      className: d.descriptors,
      children: [(0, n.jsxs)("div", {
        className: d.header,
        children: [a ? (0, n.jsx)(c.Z, {
          guild: s,
          tooltipPosition: "bottom",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          className: d.guildBadge
        }) : null, (0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: s.toString()
        })]
      }), void 0 !== s.approximateMemberCount ? (0, n.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: u.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: s.approximateMemberCount
        })
      }) : null]
    })]
  })
}