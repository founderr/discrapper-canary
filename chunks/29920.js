"use strict";
a.r(t), a.d(t, {
  fetchPremiumMarketingContent: function() {
    return i
  },
  fetchPremiumMarketingContentWithUserOffer: function() {
    return r
  }
});
var n = a("544891"),
  s = a("960048"),
  l = a("981631");
async function i() {
  try {
    let e = await n.HTTP.get({
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
    userDiscount: a,
    userDiscountOffer: i
  } = e;
  try {
    let e = await n.HTTP.post({
      url: l.Endpoints.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: a,
        user_discount_offer: i
      }
    });
    if (e.ok) return e.body;
    return s.default.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), null
  } catch (e) {
    return s.default.captureException(e), null
  }
}