"use strict";
i.r(t), i.d(t, {
  useIsEligibleSenderForReferralProgram: function() {
    return p
  },
  useIsEligibleSenderForReferralProgramTabBadge: function() {
    return f
  }
});
var n = i("442837"),
  r = i("524437"),
  s = i("605236"),
  a = i("594174"),
  l = i("74538"),
  o = i("140465"),
  u = i("775412"),
  c = i("520540"),
  d = i("474936");
let f = e => {
    let t = p(e),
      i = (0, s.useIsDismissibleContentDismissed)(r.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !i
  },
  p = e => {
    let t = (0, n.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
      i = (0, o.useHasDiscountApplied)(),
      r = (0, u.useHasActiveTrial)(),
      s = null != t && l.default.isPremiumAtLeast(t.premiumType, d.PremiumTypes.TIER_2),
      {
        enabled: f
      } = c.ReferralProgramSender.useExperiment({
        location: e
      }, {
        autoTrackExposure: !1
      });
    return f && s && !i && !r
  }