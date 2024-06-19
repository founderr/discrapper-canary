t.d(n, {
  Z: function() {
    return f
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  o = t(797717),
  u = t(471885),
  s = t(981631),
  a = t(841821);
let c = {
    [s.Eu4.NONE]: a.iconBackgroundTierNone,
    [s.Eu4.TIER_1]: a.iconBackgroundTierOne,
    [s.Eu4.TIER_2]: a.iconBackgroundTierTwo,
    [s.Eu4.TIER_3]: a.iconBackgroundTierThree
  },
  d = {
    [s.Eu4.NONE]: a.iconTierNone,
    [s.Eu4.TIER_1]: a.iconTierOne,
    [s.Eu4.TIER_2]: a.iconTierTwo,
    [s.Eu4.TIER_3]: a.iconTierThree
  };

function f(e) {
  let {
    premiumTier: n,
    iconBackgroundClassName: t,
    iconClassName: i,
    size: s
  } = e;
  return (0, r.jsx)(o.Z, {
    className: l()(t, c[n]),
    size: s,
    children: (0, r.jsx)(u.Z, {
      tier: n,
      className: l()(i, a.boostedGuildIconGem, d[n])
    })
  })
}