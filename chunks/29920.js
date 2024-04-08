"use strict";
n.r(t), n.d(t, {
  fetchPremiumMarketingContent: function() {
    return i
  },
  fetchPremiumMarketingContentWithUserOffer: function() {
    return r
  }
});
var a = n("544891"),
  s = n("960048"),
  l = n("981631");
async function i() {
  try {
    let e = await a.HTTP.get({
      url: l.Endpoints.PREMIUM_MARKETING
    });
    if (e.ok) return e.body;
    return s.default.captureMessage("fetchPremiumMarketingContent failed"), null
  } catch (e) {
    return s.default.captureException(e), null
  }
}
async function r(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: i
  } = e;
  try {
    let e = await a.HTTP.post({
      url: l.Endpoints.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: n,
        user_discount_offer: i
      }
    });
    if (e.ok) return e.body;
    return s.default.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), null
  } catch (e) {
    return s.default.captureException(e), null
  }
}