"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("399606"),
  a = n("481060"),
  s = n("275759"),
  o = n("706454"),
  l = n("271383"),
  u = n("430824"),
  d = n("346656"),
  _ = n("68972"),
  c = n("709054"),
  E = n("689938"),
  I = n("811930");

function T(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: T
  } = e, f = (0, r.useStateFromStores)([o.default], () => o.default.locale), S = (0, r.useStateFromStores)([u.default], () => null != n ? u.default.getGuild(n) : null), h = (0, r.useStateFromStores)([l.default], () => null != n ? l.default.getMember(n, t) : null), A = (0, s.getCreatedAtDate)(c.default.extractTimestamp(t), f), m = (0, s.getCreatedAtDate)(null == h ? void 0 : h.joinedAt, f);
  return null == S || null == h ? (0, i.jsx)(a.Text, {
    variant: "text-sm/normal",
    className: T,
    children: A
  }) : (0, i.jsxs)("div", {
    className: I.memberSinceWrapper,
    children: [(0, i.jsxs)("div", {
      className: I.memberSince,
      children: [(0, i.jsx)(a.Tooltip, {
        text: E.default.Messages.DISCORD_NAME,
        color: a.TooltipColors.NESTED,
        children: e => (0, i.jsx)(_.default, {
          ...e,
          className: I.discordIcon
        })
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: T,
        children: A
      })]
    }), (0, i.jsx)("div", {
      className: I.divider
    }), (0, i.jsxs)("div", {
      className: I.memberSince,
      children: [(0, i.jsx)(a.Tooltip, {
        text: S.name,
        color: a.TooltipColors.NESTED,
        children: e => (0, i.jsx)(d.default, {
          ...e,
          guild: S,
          size: d.default.Sizes.SMOL
        })
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: T,
        children: m
      })]
    })]
  })
}