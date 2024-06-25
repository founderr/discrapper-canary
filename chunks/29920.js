n.d(t, {
  H: function() {
    return a
  }
});
var s = n(544891),
  i = n(960048),
  l = n(981631);
async function a(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: a
  } = e;
  try {
    let e = await s.tn.post({
      url: l.ANM.PREMIUM_MARKETING,
      body: {
        user_trial_offer: t,
        user_discount: n,
        user_discount_offer: a
      }
    });
    if (e.ok) return e.body;
    return i.Z.captureMessage("fetchPremiumMarketingContentWithUserOffer failed"), []
  } catch (e) {
    return i.Z.captureException(e), []
  }
}