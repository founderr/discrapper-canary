t.d(n, {
  Z: function() {
return _;
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  o = t.n(i),
  l = t(797717),
  u = t(471885),
  a = t(981631),
  s = t(534457);
let c = {
[a.Eu4.NONE]: s.iconBackgroundTierNone,
[a.Eu4.TIER_1]: s.iconBackgroundTierOne,
[a.Eu4.TIER_2]: s.iconBackgroundTierTwo,
[a.Eu4.TIER_3]: s.iconBackgroundTierThree
  },
  d = {
[a.Eu4.NONE]: s.iconTierNone,
[a.Eu4.TIER_1]: s.iconTierOne,
[a.Eu4.TIER_2]: s.iconTierTwo,
[a.Eu4.TIER_3]: s.iconTierThree
  };

function _(e) {
  let {
premiumTier: n,
iconBackgroundClassName: t,
iconClassName: i,
size: a
  } = e;
  return (0, r.jsx)(l.Z, {
className: o()(t, c[n]),
size: a,
children: (0, r.jsx)(u.Z, {
  tier: n,
  className: o()(i, s.boostedGuildIconGem, d[n])
})
  });
}