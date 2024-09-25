n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(97613),
    a = n.n(i),
    o = n(772848),
    s = n(481060),
    l = n(976255),
    u = n(667),
    c = n(138464),
    d = n(594174),
    _ = n(626135),
    E = n(585483),
    f = n(74538),
    h = n(981631),
    p = n(474936);
function m(e) {
    let { initialPlanId: t, followupSKUInfo: i, onClose: m, onComplete: I, onSubscriptionConfirmation: T, analyticsLocations: g, analyticsObject: S, analyticsLocation: A, analyticsSourceLocation: v, isGift: N = !1, giftMessage: O, giftStyle: R, subscriptionTier: C, trialId: y, postSuccessGuild: b, openInvoiceId: L, applicationId: D, referralTrialOfferId: M, giftRecipient: P, returnRef: U, subscription: w, skipConfirm: x, repeatPurchase: G } = null != e ? e : {},
        k = !1,
        B = (0, o.Z)(),
        F = d.default.getCurrentUser(),
        Z = (0, f.M5)(F, p.p9.TIER_2),
        V = a()('payment-modal');
    return (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('96427'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('8016'), n.e('68136'), n.e('51199'), n.e('19780')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: a, ...o } = n;
                return (0, r.jsx)(e, {
                    ...o,
                    loadId: B,
                    subscriptionTier: C,
                    skuId: (0, f.Wz)(C),
                    isGift: N,
                    giftMessage: O,
                    giftStyle: R,
                    giftRecipient: P,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e, t) => {
                        a(), null == m || m(e), e && (null == T || T(), !N && null != t && t === p.Si.TIER_2 && !Z && E.S.dispatch(h.CkL.PREMIUM_SUBSCRIPTION_CREATED));
                    },
                    onComplete: () => {
                        (k = !0), null == I || I(), !N && (0, c.H)(!0);
                    },
                    onSubscriptionConfirmation: T,
                    analyticsLocations: g,
                    analyticsObject: S,
                    analyticsLocation: A,
                    analyticsSourceLocation: v,
                    trialId: y,
                    postSuccessGuild: b,
                    planGroup: p.Y1,
                    openInvoiceId: L,
                    applicationId: D,
                    referralTrialOfferId: M,
                    returnRef: U,
                    subscription: w,
                    skipConfirm: !!x,
                    repeatPurchase: G
                });
            };
        },
        {
            modalKey: V,
            onCloseCallback: () => {
                !k &&
                    _.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: B,
                        payment_type: h.Zuq[h.GZQ.SUBSCRIPTION],
                        location: null != A ? A : S,
                        source: v,
                        subscription_type: h.NYc.PREMIUM,
                        is_gift: N,
                        eligible_for_trial: null != y,
                        application_id: D,
                        location_stack: g
                    }),
                    (0, l.fw)(),
                    (0, u.p)(),
                    null == m || m(k),
                    k && (null == T || T());
            }
        }
    );
}
