"use strict";
n.r(t), n.d(t, {
  useMaybeFetchReferralsRemaining: function() {
    return f
  }
});
var r = n("470079"),
  i = n("442837"),
  s = n("594174"),
  a = n("74538"),
  l = n("140465"),
  u = n("775412"),
  o = n("276444"),
  d = n("520540"),
  c = n("474936");
let f = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
    f = (0, l.useHasDiscountApplied)(),
    E = (0, u.useHasActiveTrial)(),
    {
      enabled: _
    } = d.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }),
    p = _ && null != n && n.verified && (0, a.isPremiumExactly)(n, c.PremiumTypes.TIER_2) && !f && !E;
  r.useEffect(() => {
    p && !t && o.default.checkAndFetchReferralsRemaining()
  }, [p, t])
}