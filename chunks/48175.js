"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  },
  isInTrialRedemption: function() {
    return l
  }
});
var u = n("639119"),
  i = n("474936");

function l(e) {
  let {
    userTrialOffer: t,
    isGift: n,
    skuId: u
  } = e;
  return !n && null != t && null != u && (0, i.SubscriptionTrials)[t.trial_id].skus.includes(u)
}

function s(e) {
  let {
    isGift: t,
    skuId: n,
    referralTrialOfferId: l
  } = e, s = (0, u.usePremiumTrialOffer)(l);
  return !t && null != s && null != n && (0, i.SubscriptionTrials)[s.trial_id].skus.includes(n)
}