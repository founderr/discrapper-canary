"use strict";
n.r(t), n.d(t, {
  usePremiumTrialOffer: function() {
    return o
  }
});
var i = n("65597"),
  r = n("340412"),
  l = n("540692"),
  s = n("833516"),
  a = n("646718");

function o(e) {
  var t, n, o;
  let u = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID),
    c = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_REACTIVATION_TRIAL_ID),
    d = (0, s.useTrialOffer)(r.default.getAnyOfUserTrialOfferId([a.PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, a.PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, a.PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID])),
    f = (0, s.useTrialOffer)(a.PREMIUM_TIER_2_AUTH3_TRIAL_ID),
    E = (0, i.default)([l.default], () => void 0 === e ? null : l.default.getRelevantUserTrialOffer(e));
  return null !== (o = null !== (n = null !== (t = null != E ? E : u) && void 0 !== t ? t : c) && void 0 !== n ? n : d) && void 0 !== o ? o : f
}