"use strict";
n.r(t), n.d(t, {
  useIsEligibleSenderForReferralProgram: function() {
    return p
  },
  useIsEligibleSenderForReferralProgramTabBadge: function() {
    return f
  }
});
var r = n("442837"),
  i = n("524437"),
  s = n("605236"),
  a = n("594174"),
  l = n("74538"),
  u = n("140465"),
  o = n("775412"),
  d = n("520540"),
  c = n("474936");
let f = e => {
    let t = p(e),
      n = (0, s.useIsDismissibleContentDismissed)(i.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !n
  },
  p = e => {
    let t = (0, r.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
      n = (0, u.useHasDiscountApplied)(),
      i = (0, o.useHasActiveTrial)(),
      s = null != t && l.default.isPremiumAtLeast(t.premiumType, c.PremiumTypes.TIER_2),
      {
        enabled: f
      } = d.ReferralProgramSender.useExperiment({
        location: e
      }, {
        autoTrackExposure: !1
      });
    return f && s && !n && !i
  }