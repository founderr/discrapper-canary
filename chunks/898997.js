"use strict";
s.r(t), s.d(t, {
  useMaybeFetchReferralsRemaining: function() {
    return _
  }
});
var a = s("470079"),
  i = s("442837"),
  r = s("594174"),
  l = s("74538"),
  n = s("140465"),
  o = s("775412"),
  u = s("276444"),
  d = s("520540"),
  c = s("474936");
let _ = e => {
  let t = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    s = (0, n.useHasDiscountApplied)(),
    _ = (0, o.useHasActiveTrial)(),
    {
      enabled: E
    } = d.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }),
    C = E && null != t && t.verified && (0, l.isPremiumExactly)(t, c.PremiumTypes.TIER_2) && !s && !_;
  a.useEffect(() => {
    C && u.default.checkAndFetchReferralsRemaining()
  }, [C])
}