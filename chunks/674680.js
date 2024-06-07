"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
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

function m(e) {
  var t;
  let {
    achievementId: s,
    unlocked: E,
    size: m = l.AvatarSizes.SIZE_40
  } = e, C = (0, i.default)(), T = (0, c.getPoggermodeAchievementData)(s);
  if (null == T) return null;
  let g = (0, l.getAvatarSpecs)(m),
    {
      name: A,
      rarity: p
    } = T,
    {
      color: N
    } = (0, c.getAchievementStyles)(p),
    S = (0, n.isThemeDark)(C) ? f : h,
    I = (g.size - g.offset - 2 * g.stroke) * .8,
    R = g.size - g.stroke,
    v = {
      width: .4 * I,
      height: .4 * I
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
        color: E ? N : (0, r.getColor)(S.trophy),
        width: I,
        height: I
      })
    }), !E && (0, a.jsx)("div", {
      className: _.lockContainer,
      style: x,
      children: (0, a.jsx)(u.default, {
        color: (0, r.getColor)(S.locked),
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
m.Sizes = l.AvatarSizes