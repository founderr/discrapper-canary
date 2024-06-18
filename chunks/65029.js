"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(28531),
  l = n(819758),
  u = n(149203),
  _ = n(689938),
  c = n(181710);
let d = e => {
  let {
    emojiSubCategory: t
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(c.badgeLabel, t === u.t0.TOP_GUILD_EMOJI ? c.topGuildEmojiBadge : c.newlyAddedBadge),
    children: [t === u.t0.TOP_GUILD_EMOJI ? (0, i.jsx)(a.Z, {
      foreground: c.newlyAddedBadgeIcon
    }) : (0, i.jsx)(l.Z, {
      foreground: c.newlyAddedBadgeIcon
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: t === u.t0.TOP_GUILD_EMOJI ? _.Z.Messages.TOP_GUILD_EMOJI_BADGE : _.Z.Messages.NEWLY_ADDED_GUILD_EMOJI_BADGE
    })]
  })
};
t.Z = e => {
  let {
    className: t,
    graphicPrimary: n,
    graphicSecondary: r,
    titlePrimary: a,
    titleSecondary: l,
    isFavorite: E = !1,
    emojiSubCategory: I = u.t0.NONE
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(c.inspector, t),
    children: [(0, i.jsx)("div", {
      className: c.graphicPrimary,
      "aria-hidden": !0,
      children: n
    }), (0, i.jsxs)("div", {
      className: c.textWrapper,
      children: [(0, i.jsxs)(o.Text, {
        className: c.titlePrimary,
        variant: "text-md/semibold",
        children: [E ? (0, i.jsx)(o.StarIcon, {
          size: "custom",
          color: "currentColor",
          "aria-label": E ? _.Z.Messages.EMOJI_IS_FAVORITE_ARIA_LABEL.format({
            names: a
          }) : void 0,
          width: 15,
          height: 15,
          className: c.favorite
        }) : null, a]
      }), null != l && (0, i.jsx)(o.Text, {
        className: c.titleSecondary,
        variant: "text-xs/normal",
        children: l
      })]
    }), I === u.t0.NONE ? null != r && (0, i.jsx)("div", {
      className: c.graphicSecondary,
      "aria-hidden": !0,
      children: r
    }) : (0, i.jsx)(d, {
      emojiSubCategory: I
    })]
  })
}