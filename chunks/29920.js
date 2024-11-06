n.d(t, {
    H: function () {
        return a;
    }
});
var i = n(544891),
    r = n(960048),
    l = n(981631);
async function a(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: a } = e;
    try {
        let e = await i.tn.post({
            url: l.ANM.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: a
            }
        });
        if (e.ok) return e.body;
        return r.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
    } catch (e) {
        return [];
    }
}
