s.d(t, {
  Z: function() {
    return T
  }
});
var n = s(735250);
s(470079);
var a = s(780384),
  i = s(481060),
  r = s(410030),
  l = s(44315),
  o = s(889901),
  c = s(955204),
  E = s(231338),
  _ = s(958557);
let u = {
    trophy: E.Il.PRIMARY_400,
    locked: E.Il.PRIMARY_400,
    unlocked: E.Il.GREEN_330
  },
  d = {
    trophy: E.Il.PRIMARY_400,
    locked: E.Il.PRIMARY_400,
    unlocked: E.Il.GREEN_330
  };

function T(e) {
  var t;
  let {
    achievementId: s,
    unlocked: E,
    size: T = i.AvatarSizes.SIZE_40
  } = e, I = (0, r.ZP)(), R = (0, c.oX)(s);
  if (null == R) return null;
  let A = (0, i.getAvatarSpecs)(T),
    {
      name: N,
      rarity: C
    } = R,
    {
      color: g
    } = (0, c.F7)(C),
    m = (0, a.wj)(I) ? u : d,
    M = (A.size - A.offset - 2 * A.stroke) * .8,
    S = A.size - A.stroke,
    p = {
      width: .4 * M,
      height: .4 * M
    },
    h = {
      width: p.width + 1,
      height: p.height + 1,
      right: A.stroke + 1,
      bottom: A.stroke + 1,
      padding: 0
    };
  return (0, n.jsxs)("div", {
    className: _.container,
    style: {
      width: S,
      height: S,
      padding: A.stroke
    },
    "aria-label": "".concat(null !== (t = N()) && void 0 !== t ? t : ""),
    children: [(0, n.jsx)("div", {
      className: _.trophyIconContainer,
      children: (0, n.jsx)(i.TrophyIcon, {
        size: "custom",
        color: E ? g : (0, l.Lq)(m.trophy),
        width: M,
        height: M
      })
    }), !E && (0, n.jsx)("div", {
      className: _.lockContainer,
      style: h,
      children: (0, n.jsx)(i.LockIcon, {
        size: "custom",
        color: (0, l.Lq)(m.locked),
        ...p
      })
    }), E && C === c.EP.LEGENDARY && (0, n.jsx)("div", {
      className: _.lockContainer,
      style: h,
      children: (0, n.jsx)(o.Z, {
        className: _.confettiIcon,
        ...p
      })
    })]
  })
}
T.Sizes = i.AvatarSizes