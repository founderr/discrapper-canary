"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("77078"),
  r = s("118503"),
  o = s("427459"),
  d = s("782340"),
  u = s("355635"),
  c = e => {
    let t, s, l, {
        guildFeature: c,
        guild: E,
        className: _,
        hideTooltip: I = !1,
        tooltipPosition: T = "left",
        onClick: f
      } = e,
      S = E.hasFeature(c),
      m = (0, o.minimumRequiredTierForGuildFeature)(c);
    return (S ? (null != m && (l = d.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.default, {
        className: u.unlockedIcon
      }), (0, a.jsx)(i.Heading, {
        variant: "eyebrow",
        className: u.description,
        children: d.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
      })]
    })) : (null != m && (l = d.default.Messages.CLICK_TO_LEARN_MORE), t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.default, {
        className: u.icon
      }), (0, a.jsx)(i.Heading, {
        variant: "eyebrow",
        className: u.description,
        children: null != m && (0, o.getShortenedTierName)(m)
      })]
    })), s = I || null == l ? (0, a.jsx)("div", {
      className: n(u.availabilityIndicator, _),
      children: t
    }) : (0, a.jsx)(i.Tooltip, {
      position: T,
      text: l,
      children: e => (0, a.jsx)("div", {
        ...e,
        className: n(u.availabilityIndicator, _),
        children: t
      })
    }), null == f || S) ? s : (0, a.jsx)(i.Clickable, {
      onClick: f,
      className: u.clickable,
      children: s
    })
  }