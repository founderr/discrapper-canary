"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("468194"),
  r = n("399606"),
  o = n("481060"),
  u = n("940627"),
  d = n("914788"),
  c = n("981631"),
  f = n("689938"),
  E = n("250728");
let _ = [18, 18, 16, 16, 14, 12, 10];
t.default = e => {
  let {
    guildId: t
  } = e, n = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(t));
  if (void 0 === n) return null;
  let s = n.hasFeature(c.GuildFeatures.VERIFIED) || n.hasFeature(c.GuildFeatures.PARTNERED),
    h = n.toString(),
    C = n.getIconURL(40, !0),
    S = null,
    m = _[_.length - 1];
  if (null == n.icon && null != h) {
    var I;
    m = null !== (I = _[(S = (0, i.getAcronym)(h)).length - 1]) && void 0 !== I ? I : _[_.length - 1]
  }
  return (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsxs)("div", {
      style: {
        fontSize: m
      },
      children: [null != S ? (0, a.jsx)("div", {
        className: l()(E.childWrapper, E.acronym),
        "aria-hidden": !0,
        children: S
      }) : null, null != C ? (0, a.jsx)(o.Avatar, {
        src: n.getIconURL(40, !0),
        size: o.AvatarSizes.SIZE_40,
        "aria-hidden": !0
      }) : null]
    }), (0, a.jsxs)("div", {
      className: E.descriptors,
      children: [(0, a.jsxs)("div", {
        className: E.header,
        children: [s ? (0, a.jsx)(u.default, {
          guild: n,
          tooltipPosition: "bottom",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          className: E.guildBadge
        }) : null, (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: n.toString()
        })]
      }), void 0 !== n.approximateMemberCount ? (0, a.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: f.default.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: n.approximateMemberCount
        })
      }) : null]
    })]
  })
}