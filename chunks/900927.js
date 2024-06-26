"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(399606),
  s = n(481060),
  o = n(275759),
  a = n(706454),
  l = n(271383),
  u = n(430824),
  _ = n(346656),
  c = n(709054),
  d = n(689938),
  E = n(949846);

function I(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: I,
    tooltipDelay: T
  } = e, h = (0, r.e7)([a.default], () => a.default.locale), f = (0, r.e7)([u.Z], () => null != n ? u.Z.getGuild(n) : null), S = (0, r.e7)([l.ZP], () => null != n ? l.ZP.getMember(n, t) : null), N = (0, o.FI)(c.default.extractTimestamp(t), h), A = (0, o.FI)(null == S ? void 0 : S.joinedAt, h);
  return null == f || null == S ? (0, i.jsx)(s.Text, {
    variant: "text-sm/normal",
    className: I,
    children: N
  }) : (0, i.jsxs)("div", {
    className: E.memberSinceWrapper,
    children: [(0, i.jsxs)("div", {
      className: E.memberSince,
      children: [(0, i.jsx)(s.Tooltip, {
        text: d.Z.Messages.DISCORD_NAME,
        delay: T,
        children: e => (0, i.jsx)(s.ClydeIcon, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          ...e,
          className: E.discordIcon
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: I,
        children: N
      })]
    }), (0, i.jsx)("div", {
      className: E.divider
    }), (0, i.jsxs)("div", {
      className: E.memberSince,
      children: [(0, i.jsx)(s.Tooltip, {
        text: f.name,
        delay: T,
        children: e => (0, i.jsx)(_.Z, {
          ...e,
          guild: f,
          size: _.Z.Sizes.SMOL
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: I,
        children: A
      })]
    })]
  })
}