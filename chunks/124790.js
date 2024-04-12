"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("735250");
n("470079");
var r = n("803997"),
  l = n.n(r),
  s = n("797717"),
  u = n("471885"),
  o = n("981631"),
  a = n("53509");
let d = {
    [o.BoostedGuildTiers.NONE]: a.iconBackgroundTierNone,
    [o.BoostedGuildTiers.TIER_1]: a.iconBackgroundTierOne,
    [o.BoostedGuildTiers.TIER_2]: a.iconBackgroundTierTwo,
    [o.BoostedGuildTiers.TIER_3]: a.iconBackgroundTierThree
  },
  c = {
    [o.BoostedGuildTiers.NONE]: a.iconTierNone,
    [o.BoostedGuildTiers.TIER_1]: a.iconTierOne,
    [o.BoostedGuildTiers.TIER_2]: a.iconTierTwo,
    [o.BoostedGuildTiers.TIER_3]: a.iconTierThree
  };

function f(e) {
  let {
    premiumTier: t,
    iconBackgroundClassName: n,
    iconClassName: r,
    size: o
  } = e;
  return (0, i.jsx)(s.default, {
    className: l()(n, d[t]),
    size: o,
    children: (0, i.jsx)(u.default, {
      tier: t,
      className: l()(r, a.boostedGuildIconGem, c[t])
    })
  })
}