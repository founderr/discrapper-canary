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
    let { initialPlanId: t, followupSKUInfo: i, onClose: g, onComplete: E, onSubscriptionConfirmation: v, analyticsLocations: I, analyticsObject: S, analyticsLocation: T, analyticsSourceLocation: b, isGift: y = !1, giftMessage: A, giftStyle: N, subscriptionTier: C, trialId: R, postSuccessGuild: O, openInvoiceId: D, applicationId: L, referralTrialOfferId: x, giftRecipient: w, returnRef: M, subscription: P, skipConfirm: k, repeatPurchase: U } = null != e ? e : {},
        G = !1,
        B = (0, s.Z)(),
        Z = d.default.getCurrentUser(),
        F = (0, h.M5)(Z, m.p9.TIER_2),
        V = a()('payment-modal');
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('8016'), n.e('52249'), n.e('99783'), n.e('31605'), n.e('26182'), n.e('17938'), n.e('95900'), n.e('32776'), n.e('54433'), n.e('24488')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: a, ...s } = n;
                return (0, r.jsx)(e, {
                    ...s,
                    loadId: B,
                    subscriptionTier: C,
                    skuId: (0, h.Wz)(C),
                    isGift: y,
                    giftMessage: A,
                    giftStyle: N,
                    giftRecipient: w,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e, t) => {
                        a(), null == g || g(e), e && (null == v || v(), !y && null != t && t === m.Si.TIER_2 && !F && _.S.dispatch(p.CkL.PREMIUM_SUBSCRIPTION_CREATED));
                    },
                    onComplete: () => {
                        (G = !0), null == E || E(), !y && (0, c.H)(!0);
                    },
                    onSubscriptionConfirmation: v,
                    analyticsLocations: I,
                    analyticsObject: S,
                    analyticsLocation: T,
                    analyticsSourceLocation: b,
                    trialId: R,
                    postSuccessGuild: O,
                    planGroup: m.Y1,
                    openInvoiceId: D,
                    applicationId: L,
                    referralTrialOfferId: x,
                    returnRef: M,
                    subscription: P,
                    skipConfirm: !!k,
                    repeatPurchase: U
                });
            };
        },
        {
            modalKey: V,
            onCloseCallback: () => {
                !G &&
                    f.default.track(p.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: B,
                        payment_type: p.Zuq[p.GZQ.SUBSCRIPTION],
                        location: null != T ? T : S,
                        source: b,
                        subscription_type: p.NYc.PREMIUM,
                        is_gift: y,
                        eligible_for_trial: null != R,
                        application_id: L,
                        location_stack: I
                    }),
                    (0, l.fw)(),
                    (0, u.p)(),
                    null == g || g(G),
                    G && (null == v || v());
            }
        }
    );
}
