"use strict";
i.r(t), i.d(t, {
  useMaybeFetchReferralsRemaining: function() {
    return f
  }
});
var n = i("470079"),
  r = i("442837"),
  s = i("594174"),
  a = i("74538"),
  l = i("140465"),
  o = i("775412"),
  u = i("276444"),
  c = i("520540"),
  d = i("474936");
let f = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = (0, r.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
    f = (0, l.useHasDiscountApplied)(),
    p = (0, o.useHasActiveTrial)(),
    {
      enabled: C
    } = c.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }),
    m = C && null != i && i.verified && (0, a.isPremiumExactly)(i, d.PremiumTypes.TIER_2) && !f && !p;
  n.useEffect(() => {
    m && !t && u.default.checkAndFetchReferralsRemaining()
  }, [m, t])
}