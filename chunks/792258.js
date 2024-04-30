"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  i = a("468194"),
  r = a("399606"),
  o = a("481060"),
  u = a("940627"),
  d = a("914788"),
  c = a("981631"),
  f = a("689938"),
  E = a("234093");
let h = [18, 18, 16, 16, 14, 12, 10];
t.default = e => {
  let {
    guildId: t
  } = e, a = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(t));
  if (void 0 === a) return null;
  let s = a.hasFeature(c.GuildFeatures.VERIFIED) || a.hasFeature(c.GuildFeatures.PARTNERED),
    _ = a.toString(),
    C = a.getIconURL(40, !0),
    m = null,
    S = h[h.length - 1];
  if (null == a.icon && null != _) {
    var p;
    S = null !== (p = h[(m = (0, i.getAcronym)(_)).length - 1]) && void 0 !== p ? p : h[h.length - 1]
  }
  return (0, n.jsxs)("div", {
    className: E.container,
    children: [(0, n.jsxs)("div", {
      style: {
        fontSize: S
      },
      children: [null != m ? (0, n.jsx)("div", {
        className: l()(E.childWrapper, E.acronym),
        "aria-hidden": !0,
        children: m
      }) : null, null != C ? (0, n.jsx)(o.Avatar, {
        src: a.getIconURL(40, !0),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }) : null]
    }), (0, n.jsxs)("div", {
      className: E.descriptors,
      children: [(0, n.jsxs)("div", {
        className: E.header,
        children: [s ? (0, n.jsx)(u.default, {
          guild: a,
          tooltipPosition: "bottom",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          className: E.guildBadge
        }) : null, (0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: a.toString()
        })]
      }), void 0 !== a.approximateMemberCount ? (0, n.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: f.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: a.approximateMemberCount
        })
      }) : null]
    })]
  })
}