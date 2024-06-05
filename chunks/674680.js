"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("735250");
s("470079");
var n = s("780384"),
  l = s("481060"),
  i = s("410030"),
  r = s("44315"),
  o = s("889901"),
  u = s("630641"),
  d = s("783539"),
  c = s("955204"),
  E = s("231338"),
  _ = s("140160");
let f = {
    trophy: E.Color.PRIMARY_400,
    locked: E.Color.PRIMARY_400,
    unlocked: E.Color.GREEN_330
  },
  h = {
    trophy: E.Color.PRIMARY_400,
    locked: E.Color.PRIMARY_400,
    unlocked: E.Color.GREEN_330
  };

function T(e) {
  var t;
  let {
    achievementId: s,
    unlocked: E,
    size: T = l.AvatarSizes.SIZE_40
  } = e, m = (0, i.default)(), C = (0, c.getPoggermodeAchievementData)(s);
  if (null == C) return null;
  let g = (0, l.getAvatarSpecs)(T),
    {
      name: A,
      rarity: p
    } = C,
    {
      color: N
    } = (0, c.getAchievementStyles)(p),
    I = (0, n.isThemeDark)(m) ? f : h,
    S = (g.size - g.offset - 2 * g.stroke) * .8,
    R = g.size - g.stroke,
    v = {
      width: .4 * S,
      height: .4 * S
    },
    x = {
      width: v.width + 1,
      height: v.height + 1,
      right: g.stroke + 1,
      bottom: g.stroke + 1,
      padding: 0
    };
  return (0, a.jsxs)("div", {
    className: _.container,
    style: {
      width: R,
      height: R,
      padding: g.stroke
    },
    "aria-label": "".concat(null !== (t = A()) && void 0 !== t ? t : ""),
    children: [(0, a.jsx)("div", {
      className: _.trophyIconContainer,
      children: (0, a.jsx)(d.default, {
        color: E ? N : (0, r.getColor)(I.trophy),
        width: S,
        height: S
      })
    }), !E && (0, a.jsx)("div", {
      className: _.lockContainer,
      style: x,
      children: (0, a.jsx)(u.default, {
        color: (0, r.getColor)(I.locked),
        ...v
      })
    }), E && p === c.PoggermodeAchievementRarity.LEGENDARY && (0, a.jsx)("div", {
      className: _.lockContainer,
      style: x,
      children: (0, a.jsx)(o.default, {
        className: _.confettiIcon,
        ...v
      })
    })]
  })
}
T.Sizes = l.AvatarSizes