"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var n = a("735250");
a("470079");
var s = a("780384"),
  l = a("481060"),
  i = a("410030"),
  r = a("44315"),
  o = a("889901"),
  u = a("630641"),
  d = a("783539"),
  c = a("955204"),
  f = a("231338"),
  E = a("546271");
let h = {
    trophy: f.Color.PRIMARY_400,
    locked: f.Color.PRIMARY_400,
    unlocked: f.Color.GREEN_330
  },
  _ = {
    trophy: f.Color.PRIMARY_400,
    locked: f.Color.PRIMARY_400,
    unlocked: f.Color.GREEN_330
  };

function C(e) {
  var t;
  let {
    achievementId: a,
    unlocked: f,
    size: C = l.AvatarSizes.SIZE_40
  } = e, m = (0, i.default)(), S = (0, c.getPoggermodeAchievementData)(a);
  if (null == S) return null;
  let I = (0, l.getAvatarSpecs)(C),
    {
      name: p,
      rarity: T
    } = S,
    {
      color: g
    } = (0, c.getAchievementStyles)(T),
    A = (0, s.isThemeDark)(m) ? h : _,
    N = (I.size - I.offset - 2 * I.stroke) * .8,
    v = I.size - I.stroke,
    R = {
      width: .4 * N,
      height: .4 * N
    },
    O = {
      width: R.width + 1,
      height: R.height + 1,
      right: I.stroke + 1,
      bottom: I.stroke + 1,
      padding: 0
    };
  return (0, n.jsxs)("div", {
    className: E.container,
    style: {
      width: v,
      height: v,
      padding: I.stroke
    },
    "aria-label": "".concat(null !== (t = p()) && void 0 !== t ? t : ""),
    children: [(0, n.jsx)("div", {
      className: E.trophyIconContainer,
      children: (0, n.jsx)(d.default, {
        color: f ? g : (0, r.getColor)(A.trophy),
        width: N,
        height: N
      })
    }), !f && (0, n.jsx)("div", {
      className: E.lockContainer,
      style: O,
      children: (0, n.jsx)(u.default, {
        color: (0, r.getColor)(A.locked),
        ...R
      })
    }), f && T === c.PoggermodeAchievementRarity.LEGENDARY && (0, n.jsx)("div", {
      className: E.lockContainer,
      style: O,
      children: (0, n.jsx)(o.default, {
        className: E.confettiIcon,
        ...R
      })
    })]
  })
}
C.Sizes = l.AvatarSizes