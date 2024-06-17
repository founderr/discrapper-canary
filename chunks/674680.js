"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var n = s("735250");
s("470079");
var a = s("780384"),
  l = s("481060"),
  i = s("410030"),
  r = s("44315"),
  o = s("889901"),
  u = s("630641"),
  d = s("783539"),
  c = s("955204"),
  E = s("231338"),
  f = s("140160");
let _ = {
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
      name: p,
      rarity: A
    } = T,
    {
      color: N
    } = (0, c.getAchievementStyles)(A),
    S = (0, a.isThemeDark)(C) ? _ : h,
    I = (g.size - g.offset - 2 * g.stroke) * .8,
    x = g.size - g.stroke,
    R = {
      width: .4 * I,
      height: .4 * I
    },
    v = {
      width: R.width + 1,
      height: R.height + 1,
      right: g.stroke + 1,
      bottom: g.stroke + 1,
      padding: 0
    };
  return (0, n.jsxs)("div", {
    className: f.container,
    style: {
      width: x,
      height: x,
      padding: g.stroke
    },
    "aria-label": "".concat(null !== (t = p()) && void 0 !== t ? t : ""),
    children: [(0, n.jsx)("div", {
      className: f.trophyIconContainer,
      children: (0, n.jsx)(d.default, {
        color: E ? N : (0, r.getColor)(S.trophy),
        width: I,
        height: I
      })
    }), !E && (0, n.jsx)("div", {
      className: f.lockContainer,
      style: v,
      children: (0, n.jsx)(u.default, {
        color: (0, r.getColor)(S.locked),
        ...R
      })
    }), E && A === c.PoggermodeAchievementRarity.LEGENDARY && (0, n.jsx)("div", {
      className: f.lockContainer,
      style: v,
      children: (0, n.jsx)(o.default, {
        className: f.confettiIcon,
        ...R
      })
    })]
  })
}
m.Sizes = l.AvatarSizes