n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(200651);
n(192379);
var i = n(97613),
    a = n.n(i),
    s = n(772848),
    o = n(481060),
    l = n(570140),
    u = n(159351),
    c = n(667),
    d = n(138464),
    f = n(594174),
    _ = n(626135),
    p = n(585483),
    h = n(74538),
    m = n(981631),
    g = n(474936);
function E(e) {
    let { initialPlanId: t, followupSKUInfo: i, onClose: E, onComplete: v, onSubscriptionConfirmation: b, analyticsLocations: I, analyticsObject: S, analyticsLocation: T, analyticsSourceLocation: y, isGift: A = !1, giftMessage: N, giftStyle: C, giftingOrigin: R, subscriptionTier: O, trialId: D, postSuccessGuild: L, openInvoiceId: x, applicationId: w, referralTrialOfferId: M, giftRecipient: P, returnRef: k, subscription: U, skipConfirm: G, repeatPurchase: B } = null != e ? e : {},
        Z = !1,
        F = (0, s.Z)(),
        V = f.default.getCurrentUser(),
        j = (0, h.M5)(V, g.p9.TIER_2),
        H = a()('payment-modal');
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('52249'), n.e('14627'), n.e('31605'), n.e('26182'), n.e('95900'), n.e('32776'), n.e('8016'), n.e('17938'), n.e('88449'), n.e('54433'), n.e('97347')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: a, ...s } = n;
                return (0, r.jsx)(e, {
                    ...s,
                    loadId: F,
                    subscriptionTier: O,
                    skuId: (0, h.Wz)(O),
                    isGift: A,
                    giftMessage: N,
                    giftStyle: C,
                    giftingOrigin: R,
                    giftRecipient: P,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e, t) => {
                        a(),
                            null == E || E(e),
                            e && (null == b || b(), !A && null != t && t === g.Si.TIER_2 && !j && p.S.dispatch(m.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                            l.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                    },
                    onComplete: () => {
                        (Z = !0), null == v || v(), !A && (0, d.H)(!0);
                    },
                    onSubscriptionConfirmation: b,
                    analyticsLocations: I,
                    analyticsObject: S,
                    analyticsLocation: T,
                    analyticsSourceLocation: y,
                    trialId: D,
                    postSuccessGuild: L,
                    planGroup: g.Y1,
                    openInvoiceId: x,
                    applicationId: w,
                    referralTrialOfferId: M,
                    returnRef: k,
                    subscription: U,
                    skipConfirm: !!G,
                    repeatPurchase: B
                });
            };
        },
        {
            modalKey: H,
            onCloseCallback: () => {
                !Z &&
                    _.default.track(m.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: F,
                        payment_type: m.Zuq[m.GZQ.SUBSCRIPTION],
                        location: null != T ? T : S,
                        source: y,
                        subscription_type: m.NYc.PREMIUM,
                        is_gift: A,
                        eligible_for_trial: null != D,
                        application_id: w,
                        location_stack: I
                    }),
                    (0, u.fw)(),
                    (0, c.p)(),
                    null == E || E(Z),
                    Z && (null == b || b());
            }
        }
    );
}
