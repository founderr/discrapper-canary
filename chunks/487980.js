"use strict";
n.r(t), n.d(t, {
  useIsEligibleSenderForReferralProgram: function() {
    return d
  },
  useIsEligibleSenderForReferralProgramTabBadge: function() {
    return o
  }
});
var r = n("442837"),
  i = n("524437"),
  s = n("605236"),
  a = n("276444"),
  l = n("520540"),
  u = n("898997");
let o = e => {
    let t = d(e),
      n = (0, s.useIsDismissibleContentDismissed)(i.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !n
  },
  d = e => {
    let {
      enabled: t
    } = l.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    });
    (0, u.useMaybeFetchReferralsRemaining)(e, !t);
    let n = (0, r.useStateFromStores)([a.default], () => a.default.getIsEligibleToSendReferrals());
    return t && n
  }