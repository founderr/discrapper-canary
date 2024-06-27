n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250);
n(470079);
var a = n(780384),
  i = n(481060),
  r = n(410030),
  l = n(44315),
  o = n(889901),
  c = n(955204),
  d = n(231338),
  _ = n(958557);
let E = {
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  },
  u = {
    trophy: d.Il.PRIMARY_400,
    locked: d.Il.PRIMARY_400,
    unlocked: d.Il.GREEN_330
  };

function T(e) {
  var t;
  let {
    achievementId: n,
    unlocked: d,
    size: T = i.AvatarSizes.SIZE_40
  } = e, I = (0, r.ZP)(), R = (0, c.oX)(n);
  if (null == R) return null;
  let C = (0, i.getAvatarSpecs)(T),
    {
      name: g,
      rarity: p
    } = R,
    {
      color: A
    } = (0, c.F7)(p),
    N = (0, a.wj)(I) ? E : u,
    m = (C.size - C.offset - 2 * C.stroke) * .8,
    S = C.size - C.stroke,
    f = {
      width: .4 * m,
      height: .4 * m
    },
    M = {
      width: f.width + 1,
      height: f.height + 1,
      right: C.stroke + 1,
      bottom: C.stroke + 1,
      padding: 0
    };
  return (0, s.jsxs)("div", {
    className: _.container,
    style: {
      width: S,
      height: S,
      padding: C.stroke
    },
    "aria-label": "".concat(null !== (t = g()) && void 0 !== t ? t : ""),
    children: [(0, s.jsx)("div", {
      className: _.trophyIconContainer,
      children: (0, s.jsx)(i.TrophyIcon, {
        size: "custom",
        color: d ? A : (0, l.Lq)(N.trophy),
        width: m,
        height: m
      })
    }), !d && (0, s.jsx)("div", {
      className: _.lockContainer,
      style: M,
      children: (0, s.jsx)(i.LockIcon, {
        size: "custom",
        color: (0, l.Lq)(N.locked),
        ...f
      })
    }), d && p === c.EP.LEGENDARY && (0, s.jsx)("div", {
      className: _.lockContainer,
      style: M,
      children: (0, s.jsx)(o.Z, {
        className: _.confettiIcon,
        ...f
      })
    })]
  })
}
T.Sizes = i.AvatarSizes