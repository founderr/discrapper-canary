"use strict";
n.r(t), n.d(t, {
  useIsEligibleSenderForReferralProgram: function() {
    return o
  },
  useIsEligibleSenderForReferralProgramTabBadge: function() {
    return u
  }
});
var r = n("442837"),
  i = n("524437"),
  a = n("605236"),
  s = n("276444"),
  l = n("520540");
let u = e => {
    let t = o(e),
      n = (0, a.useIsDismissibleContentDismissed)(i.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !n
  },
  o = e => {
    let {
      enabled: t
    } = l.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }), n = (0, r.useStateFromStores)([s.default], () => s.default.getIsEligibleToSendReferrals());
    return t && n
  }