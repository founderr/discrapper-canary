"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var s = n("780384"),
  l = n("481060"),
  i = n("410030"),
  r = n("44315"),
  o = n("889901"),
  u = n("630641"),
  d = n("783539"),
  c = n("955204"),
  f = n("231338"),
  E = n("698844");
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
    achievementId: n,
    unlocked: f,
    size: C = l.AvatarSizes.SIZE_40
  } = e, S = (0, i.default)(), m = (0, c.getPoggermodeAchievementData)(n);
  if (null == m) return null;
  let p = (0, l.getAvatarSpecs)(C),
    {
      name: I,
      rarity: T
    } = m,
    {
      color: g
    } = (0, c.getAchievementStyles)(T),
    A = (0, s.isThemeDark)(S) ? h : _,
    N = (p.size - p.offset - 2 * p.stroke) * .8,
    v = p.size - p.stroke,
    R = {
      width: .4 * N,
      height: .4 * N
    },
    L = {
      width: R.width + 1,
      height: R.height + 1,
      right: p.stroke + 1,
      bottom: p.stroke + 1,
      padding: 0
    };
  return (0, a.jsxs)("div", {
    className: E.container,
    style: {
      width: v,
      height: v,
      padding: p.stroke
    },
    "aria-label": "".concat(null !== (t = I()) && void 0 !== t ? t : ""),
    children: [(0, a.jsx)("div", {
      className: E.trophyIconContainer,
      children: (0, a.jsx)(d.default, {
        color: f ? g : (0, r.getColor)(A.trophy),
        width: N,
        height: N
      })
    }), !f && (0, a.jsx)("div", {
      className: E.lockContainer,
      style: L,
      children: (0, a.jsx)(u.default, {
        color: (0, r.getColor)(A.locked),
        ...R
      })
    }), f && T === c.PoggermodeAchievementRarity.LEGENDARY && (0, a.jsx)("div", {
      className: E.lockContainer,
      style: L,
      children: (0, a.jsx)(o.default, {
        className: E.confettiIcon,
        ...R
      })
    })]
  })
}
C.Sizes = l.AvatarSizes