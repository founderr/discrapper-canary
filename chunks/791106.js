"use strict";
n.r(t), n.d(t, {
  Gradients: function() {
    return l
  },
  GradientCssUrls: function() {
    return o
  },
  default: function() {
    return C
  }
});
var r = n("37983"),
  s = n("884691"),
  i = n("748820"),
  a = n("669491");
let l = Object.freeze({
    PREMIUM_TIER_0: (0, i.v4)(),
    PREMIUM_TIER_1: (0, i.v4)(),
    PREMIUM_TIER_2: (0, i.v4)(),
    PREMIUM_GUILD: (0, i.v4)(),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, i.v4)()
  }),
  o = {
    PREMIUM_TIER_0: "url(#".concat(l.PREMIUM_TIER_0, ")"),
    PREMIUM_TIER_1: "url(#".concat(l.PREMIUM_TIER_1, ")"),
    PREMIUM_TIER_2: "url(#".concat(l.PREMIUM_TIER_2, ")"),
    PREMIUM_GUILD: "url(#".concat(l.PREMIUM_GUILD, ")"),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
  },
  u = () => (0, r.jsxs)("linearGradient", {
    id: l.PREMIUM_TIER_0,
    children: [(0, r.jsx)("stop", {
      offset: ".1762",
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
    }), (0, r.jsx)("stop", {
      offset: "0.5351",
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
    })]
  }),
  c = () => (0, r.jsxs)("linearGradient", {
    id: l.PREMIUM_TIER_1,
    children: [(0, r.jsx)("stop", {
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
    })]
  }),
  d = () => (0, r.jsxs)("linearGradient", {
    id: l.PREMIUM_TIER_2,
    children: [(0, r.jsx)("stop", {
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
    }), (0, r.jsx)("stop", {
      offset: "0.502368",
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
    })]
  }),
  _ = () => (0, r.jsxs)("linearGradient", {
    id: l.PREMIUM_GUILD,
    children: [(0, r.jsx)("stop", {
      stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: a.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
    })]
  }),
  f = () => (0, r.jsxs)("linearGradient", {
    id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    gradientTransform: "rotate(45)",
    children: [(0, r.jsx)("stop", {
      offset: "0",
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
    })]
  }),
  E = s.memo(function() {
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
      children: [u(), c(), d(), _(), f()]
    })
  }, () => !0);
var C = E