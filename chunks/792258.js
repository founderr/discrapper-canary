"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("120356"),
  l = s.n(a),
  i = s("468194"),
  r = s("399606"),
  o = s("481060"),
  u = s("940627"),
  d = s("914788"),
  c = s("981631"),
  E = s("689938"),
  f = s("125640");
let _ = [18, 18, 16, 16, 14, 12, 10];
t.default = e => {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(t));
  if (void 0 === s) return null;
  let a = s.hasFeature(c.GuildFeatures.VERIFIED) || s.hasFeature(c.GuildFeatures.PARTNERED),
    h = s.toString(),
    C = s.getIconURL(40, !0),
    m = null,
    T = _[_.length - 1];
  if (null == s.icon && null != h) {
    var g;
    T = null !== (g = _[(m = (0, i.getAcronym)(h)).length - 1]) && void 0 !== g ? g : _[_.length - 1]
  }
  return (0, n.jsxs)("div", {
    className: f.container,
    children: [(0, n.jsxs)("div", {
      style: {
        fontSize: T
      },
      children: [null != m ? (0, n.jsx)("div", {
        className: l()(f.childWrapper, f.acronym),
        "aria-hidden": !0,
        children: m
      }) : null, null != C ? (0, n.jsx)(o.Avatar, {
        src: s.getIconURL(40, !0),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }) : null]
    }), (0, n.jsxs)("div", {
      className: f.descriptors,
      children: [(0, n.jsxs)("div", {
        className: f.header,
        children: [a ? (0, n.jsx)(u.default, {
          guild: s,
          tooltipPosition: "bottom",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          className: f.guildBadge
        }) : null, (0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: s.toString()
        })]
      }), void 0 !== s.approximateMemberCount ? (0, n.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: E.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: s.approximateMemberCount
        })
      }) : null]
    })]
  })
}