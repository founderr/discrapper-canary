"use strict";
n.r(t), n.d(t, {
  fetchPremiumMarketingContentWithUserOffer: function() {
    return l
  }
});
var a = n("544891"),
  s = n("960048"),
  i = n("981631");
async function l(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: l
  } = e;
  try {
    let e = await a.HTTP.post({
      url: i.Endpoints.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: n,
        user_discount_offer: l
      }
    });
    if (e.ok) return e.body;
    return s.default.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), []
  } catch (e) {
    return s.default.captureException(e), []
  }
}