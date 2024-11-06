n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(200651);
n(192379);
var i = n(97613),
    a = n.n(i),
    s = n(772848),
    o = n(481060),
    l = n(159351),
    u = n(667),
    c = n(138464),
    d = n(594174),
    f = n(626135),
    _ = n(585483),
    h = n(74538),
    p = n(981631),
    m = n(474936);
function g(e) {
    let { initialPlanId: t, followupSKUInfo: i, onClose: g, onComplete: E, onSubscriptionConfirmation: v, analyticsLocations: I, analyticsObject: S, analyticsLocation: T, analyticsSourceLocation: b, isGift: y = !1, giftMessage: A, giftStyle: N, giftingOrigin: C, subscriptionTier: R, trialId: O, postSuccessGuild: D, openInvoiceId: L, applicationId: x, referralTrialOfferId: w, giftRecipient: M, returnRef: P, subscription: k, skipConfirm: U, repeatPurchase: G } = null != e ? e : {},
        B = !1,
        Z = (0, s.Z)(),
        F = d.default.getCurrentUser(),
        V = (0, h.M5)(F, m.p9.TIER_2),
        H = a()('payment-modal');
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('8016'), n.e('52249'), n.e('99783'), n.e('31605'), n.e('26182'), n.e('17938'), n.e('95900'), n.e('32776'), n.e('54433'), n.e('24488')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: a, ...s } = n;
                return (0, r.jsx)(e, {
                    ...s,
                    loadId: Z,
                    subscriptionTier: R,
                    skuId: (0, h.Wz)(R),
                    isGift: y,
                    giftMessage: A,
                    giftStyle: N,
                    giftingOrigin: C,
                    giftRecipient: M,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e, t) => {
                        a(), null == g || g(e), e && (null == v || v(), !y && null != t && t === m.Si.TIER_2 && !V && _.S.dispatch(p.CkL.PREMIUM_SUBSCRIPTION_CREATED));
                    },
                    onComplete: () => {
                        (B = !0), null == E || E(), !y && (0, c.H)(!0);
                    },
                    onSubscriptionConfirmation: v,
                    analyticsLocations: I,
                    analyticsObject: S,
                    analyticsLocation: T,
                    analyticsSourceLocation: b,
                    trialId: O,
                    postSuccessGuild: D,
                    planGroup: m.Y1,
                    openInvoiceId: L,
                    applicationId: x,
                    referralTrialOfferId: w,
                    returnRef: P,
                    subscription: k,
                    skipConfirm: !!U,
                    repeatPurchase: G
                });
            };
        },
        {
            modalKey: H,
            onCloseCallback: () => {
                !B &&
                    f.default.track(p.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: Z,
                        payment_type: p.Zuq[p.GZQ.SUBSCRIPTION],
                        location: null != T ? T : S,
                        source: b,
                        subscription_type: p.NYc.PREMIUM,
                        is_gift: y,
                        eligible_for_trial: null != O,
                        application_id: x,
                        location_stack: I
                    }),
                    (0, l.fw)(),
                    (0, u.p)(),
                    null == g || g(B),
                    B && (null == v || v());
            }
        }
    );
}
