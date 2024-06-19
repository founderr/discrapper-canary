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
  o = n(889901),
  c = n(955204),
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
  } = e, m = (0, l.ZP)(), T = (0, c.oX)(n);
  if (null == T) return null;
  let C = (0, i.getAvatarSpecs)(h),
    {
      name: g,
      rarity: p
    } = T,
    {
      color: N
    } = (0, c.F7)(p),
    I = (0, a.wj)(m) ? E : _,
    A = (C.size - C.offset - 2 * C.stroke) * .8,
    f = C.size - C.stroke,
    x = {
      width: .4 * A,
      height: .4 * A
    },
    S = {
      width: x.width + 1,
      height: x.height + 1,
      right: C.stroke + 1,
      bottom: C.stroke + 1,
      padding: 0
    };
  return (0, s.jsxs)("div", {
    className: u.container,
    style: {
      width: f,
      height: f,
      padding: C.stroke
    },
    "aria-label": "".concat(null !== (t = g()) && void 0 !== t ? t : ""),
    children: [(0, s.jsx)("div", {
      className: u.trophyIconContainer,
      children: (0, s.jsx)(i.TrophyIcon, {
        size: "custom",
        color: d ? N : (0, r.Lq)(I.trophy),
        width: A,
        height: A
      })
    }), !d && (0, s.jsx)("div", {
      className: u.lockContainer,
      style: S,
      children: (0, s.jsx)(i.LockIcon, {
        size: "custom",
        color: (0, r.Lq)(I.locked),
        ...x
      })
    }), d && p === c.EP.LEGENDARY && (0, s.jsx)("div", {
      className: u.lockContainer,
      style: S,
      children: (0, s.jsx)(o.Z, {
        className: u.confettiIcon,
        ...x
      })
    })]
  })
}
h.Sizes = i.AvatarSizes