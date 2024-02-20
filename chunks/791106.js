"use strict";
n.r(t), n.d(t, {
  Gradients: function() {
    return l
  },
  GradientCssUrls: function() {
    return o
  },
  default: function() {
    return h
  }
});
var s = n("37983"),
  a = n("884691"),
  r = n("748820"),
  i = n("669491");
let l = Object.freeze({
    PREMIUM_TIER_0: (0, r.v4)(),
    PREMIUM_TIER_1: (0, r.v4)(),
    PREMIUM_TIER_2: (0, r.v4)(),
    PREMIUM_GUILD: (0, r.v4)(),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, r.v4)()
  }),
  o = {
    PREMIUM_TIER_0: "url(#".concat(l.PREMIUM_TIER_0, ")"),
    PREMIUM_TIER_1: "url(#".concat(l.PREMIUM_TIER_1, ")"),
    PREMIUM_TIER_2: "url(#".concat(l.PREMIUM_TIER_2, ")"),
    PREMIUM_GUILD: "url(#".concat(l.PREMIUM_GUILD, ")"),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
  },
  u = () => (0, s.jsxs)("linearGradient", {
    id: l.PREMIUM_TIER_0,
    children: [(0, s.jsx)("stop", {
      offset: ".1762",
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
    }), (0, s.jsx)("stop", {
      offset: "0.5351",
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
    }), (0, s.jsx)("stop", {
      offset: "1",
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
    })]
  }),
  d = () => (0, s.jsxs)("linearGradient", {
    id: l.PREMIUM_TIER_1,
    children: [(0, s.jsx)("stop", {
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
    }), (0, s.jsx)("stop", {
      offset: "1",
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
    })]
  }),
  c = () => (0, s.jsxs)("linearGradient", {
    id: l.PREMIUM_TIER_2,
    children: [(0, s.jsx)("stop", {
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
    }), (0, s.jsx)("stop", {
      offset: "0.502368",
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
    }), (0, s.jsx)("stop", {
      offset: "1",
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
    })]
  }),
  f = () => (0, s.jsxs)("linearGradient", {
    id: l.PREMIUM_GUILD,
    children: [(0, s.jsx)("stop", {
      stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
    }), (0, s.jsx)("stop", {
      offset: "1",
      stopColor: i.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
    })]
  }),
  _ = () => (0, s.jsxs)("linearGradient", {
    id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    gradientTransform: "rotate(45)",
    children: [(0, s.jsx)("stop", {
      offset: "0",
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
    }), (0, s.jsx)("stop", {
      offset: "1",
      stopColor: i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
    })]
  }),
  E = a.memo(function() {
    return (0, s.jsxs)("svg", {
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
      children: [u(), d(), c(), f(), _()]
    })
  }, () => !0);
var h = E