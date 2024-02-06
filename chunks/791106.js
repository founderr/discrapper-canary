"use strict";
n.r(t), n.d(t, {
  Gradients: function() {
    return u
  },
  GradientCssUrls: function() {
    return a
  },
  default: function() {
    return E
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("748820"),
  l = n("669491");
let u = Object.freeze({
    PREMIUM_TIER_0: (0, s.v4)(),
    PREMIUM_TIER_1: (0, s.v4)(),
    PREMIUM_TIER_2: (0, s.v4)(),
    PREMIUM_GUILD: (0, s.v4)(),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, s.v4)()
  }),
  a = {
    PREMIUM_TIER_0: "url(#".concat(u.PREMIUM_TIER_0, ")"),
    PREMIUM_TIER_1: "url(#".concat(u.PREMIUM_TIER_1, ")"),
    PREMIUM_TIER_2: "url(#".concat(u.PREMIUM_TIER_2, ")"),
    PREMIUM_GUILD: "url(#".concat(u.PREMIUM_GUILD, ")"),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(u.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
  },
  o = () => (0, r.jsxs)("linearGradient", {
    id: u.PREMIUM_TIER_0,
    children: [(0, r.jsx)("stop", {
      offset: ".1762",
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
    }), (0, r.jsx)("stop", {
      offset: "0.5351",
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
    })]
  }),
  c = () => (0, r.jsxs)("linearGradient", {
    id: u.PREMIUM_TIER_1,
    children: [(0, r.jsx)("stop", {
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
    })]
  }),
  d = () => (0, r.jsxs)("linearGradient", {
    id: u.PREMIUM_TIER_2,
    children: [(0, r.jsx)("stop", {
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
    }), (0, r.jsx)("stop", {
      offset: "0.502368",
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
    })]
  }),
  f = () => (0, r.jsxs)("linearGradient", {
    id: u.PREMIUM_GUILD,
    children: [(0, r.jsx)("stop", {
      stopColor: l.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: l.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
    })]
  }),
  I = () => (0, r.jsxs)("linearGradient", {
    id: u.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    gradientTransform: "rotate(45)",
    children: [(0, r.jsx)("stop", {
      offset: "0",
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: l.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
    })]
  }),
  _ = i.memo(function() {
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 1 1",
      style: {
        position: "absolute",
        pointerEvents: "none",
        top: -1,
        left: -1,
        width: 1,
        height: 1
      },
      "aria-hidden": !0,
      children: [o(), c(), d(), f(), I()]
    })
  }, () => !0);
var E = _