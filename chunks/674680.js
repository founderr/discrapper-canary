n.d(t, {
  Z: function() {
    return h
  }
});
var s = n(735250);
n(470079);
var a = n(780384),
  i = n(481060),
  l = n(410030),
  r = n(44315),
  c = n(889901),
  o = n(955204),
  d = n(231338),
  u = n(958557);
let E = {
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  },
  _ = {
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  };

function h(e) {
  var t;
  let {
    achievementId: n,
    unlocked: d,
    size: h = i.AvatarSizes.SIZE_40
  } = e, T = (0, l.ZP)(), I = (0, o.oX)(n);
  if (null == I) return null;
  let C = (0, i.getAvatarSpecs)(h),
    {
      name: N,
      rarity: g
    } = I,
    {
      color: A
    } = (0, o.F7)(g),
    m = (0, a.wj)(T) ? E : _,
    f = (C.size - C.offset - 2 * C.stroke) * .8,
    p = C.size - C.stroke,
    R = {
      width: .4 * f,
      height: .4 * f
    },
    M = {
      width: R.width + 1,
      height: R.height + 1,
      right: C.stroke + 1,
      bottom: C.stroke + 1,
      padding: 0
    };
  return (0, s.jsxs)("div", {
    className: u.container,
    style: {
      width: p,
      height: p,
      padding: C.stroke
    },
    "aria-label": "".concat(null !== (t = N()) && void 0 !== t ? t : ""),
    children: [(0, s.jsx)("div", {
      className: u.trophyIconContainer,
      children: (0, s.jsx)(i.TrophyIcon, {
        size: "custom",
        color: d ? A : (0, r.Lq)(m.trophy),
        width: f,
        height: f
      })
    }), !d && (0, s.jsx)("div", {
      className: u.lockContainer,
      style: M,
      children: (0, s.jsx)(i.LockIcon, {
        size: "custom",
        color: (0, r.Lq)(m.locked),
        ...R
      })
    }), d && g === o.EP.LEGENDARY && (0, s.jsx)("div", {
      className: u.lockContainer,
      style: M,
      children: (0, s.jsx)(c.Z, {
        className: u.confettiIcon,
        ...R
      })
    })]
  })
}
h.Sizes = i.AvatarSizes