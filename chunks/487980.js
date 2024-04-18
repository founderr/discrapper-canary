"use strict";
i.r(t), i.d(t, {
  useIsEligibleSenderForReferralProgram: function() {
    return c
  },
  useIsEligibleSenderForReferralProgramTabBadge: function() {
    return u
  }
});
var n = i("442837"),
  r = i("524437"),
  s = i("605236"),
  a = i("276444"),
  l = i("520540"),
  o = i("898997");
let u = e => {
    let t = c(e),
      i = (0, s.useIsDismissibleContentDismissed)(r.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !i
  },
  c = e => {
    let {
      enabled: t
    } = l.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    });
    (0, o.useMaybeFetchReferralsRemaining)(e, !t);
    let i = (0, n.useStateFromStores)([a.default], () => a.default.getIsEligibleToSendReferrals());
    return t && i
  }