"use strict";
s.r(t), s.d(t, {
  useShouldShowReferralProgressBar: function() {
    return d
  }
});
var a = s("442837"),
  i = s("594174"),
  r = s("74538"),
  l = s("140465"),
  n = s("775412"),
  o = s("520540"),
  u = s("474936");
let d = e => {
  let t = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
    s = (0, l.useHasDiscountApplied)(),
    d = (0, n.useHasActiveTrial)(),
    c = null != t && r.default.isPremiumAtLeast(t.premiumType, u.PremiumTypes.TIER_2) && !s && !d,
    {
      enabled: _
    } = o.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: c
    });
  return _ && c
}