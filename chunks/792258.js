"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("468194"),
  r = s("399606"),
  u = s("481060"),
  o = s("940627"),
  d = s("914788"),
  c = s("981631"),
  E = s("689938"),
  _ = s("125640");
let f = [18, 18, 16, 16, 14, 12, 10];
t.default = e => {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(t));
  if (void 0 === s) return null;
  let n = s.hasFeature(c.GuildFeatures.VERIFIED) || s.hasFeature(c.GuildFeatures.PARTNERED),
    h = s.toString(),
    m = s.getIconURL(40, !0),
    T = null,
    C = f[f.length - 1];
  if (null == s.icon && null != h) {
    var g;
    C = null !== (g = f[(T = (0, i.getAcronym)(h)).length - 1]) && void 0 !== g ? g : f[f.length - 1]
  }
  return (0, a.jsxs)("div", {
    className: _.container,
    children: [(0, a.jsxs)("div", {
      style: {
        fontSize: C
      },
      children: [null != T ? (0, a.jsx)("div", {
        className: l()(_.childWrapper, _.acronym),
        "aria-hidden": !0,
        children: T
      }) : null, null != m ? (0, a.jsx)(u.Avatar, {
        src: s.getIconURL(40, !0),
        size: u.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }) : null]
    }), (0, a.jsxs)("div", {
      className: _.descriptors,
      children: [(0, a.jsxs)("div", {
        className: _.header,
        children: [n ? (0, a.jsx)(o.default, {
          guild: s,
          tooltipPosition: "bottom",
          tooltipColor: u.Tooltip.Colors.PRIMARY,
          className: _.guildBadge
        }) : null, (0, a.jsx)(u.Text, {
          variant: "text-md/semibold",
          children: s.toString()
        })]
      }), void 0 !== s.approximateMemberCount ? (0, a.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: E.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: s.approximateMemberCount
        })
      }) : null]
    })]
  })
}