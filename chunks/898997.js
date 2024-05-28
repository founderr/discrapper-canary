"use strict";
s.r(t), s.d(t, {
  useMaybeFetchReferralsRemaining: function() {
    return _
  }
});
var a = s("470079"),
  r = s("442837"),
  i = s("594174"),
  n = s("74538"),
  l = s("140465"),
  o = s("775412"),
  u = s("276444"),
  c = s("520540"),
  d = s("474936");
let _ = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    s = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
    _ = (0, l.useHasDiscountApplied)(),
    E = (0, o.useHasActiveTrial)(),
    {
      eligibleToFetch: R
    } = c.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }),
    T = R && null != s && s.verified && (0, n.isPremiumExactly)(s, d.PremiumTypes.TIER_2) && !_ && !E;
  a.useEffect(() => {
    T && !t && u.default.checkAndFetchReferralsRemaining()
  }, [T, t])
}