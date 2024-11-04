n.d(t, {
    H: function () {
        return l;
    }
});
var i = n(544891),
    r = n(960048),
    a = n(981631);
async function l(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: l } = e;
    try {
        let e = await i.tn.post({
            url: a.ANM.PREMIUM_MARKETING,
            body: {
                user_trial_offer: t,
                user_discount: n,
                user_discount_offer: l
            }
        });
        if (e.ok) return e.body;
        return r.Z.captureMessage('fetchPremiumMarketingContentWithUserOffer failed'), [];
    } catch (e) {
        return [];
    }
}
