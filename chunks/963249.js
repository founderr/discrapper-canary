n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(97613),
    a = n.n(i),
    s = n(772848),
    o = n(481060),
    l = n(976255),
    u = n(667),
    c = n(138464),
    d = n(594174),
    _ = n(626135),
    E = n(585483),
    f = n(74538),
    h = n(981631),
    p = n(474936);
function I(e) {
    let { initialPlanId: t, followupSKUInfo: i, onClose: I, onComplete: m, onSubscriptionConfirmation: T, analyticsLocations: S, analyticsObject: g, analyticsLocation: A, analyticsSourceLocation: N, isGift: R = !1, giftMessage: O, giftStyle: v, subscriptionTier: C, trialId: L, postSuccessGuild: y, openInvoiceId: D, applicationId: b, referralTrialOfferId: M, giftRecipient: P, returnRef: U, subscription: w, skipConfirm: x, repeatPurchase: G } = null != e ? e : {},
        k = !1,
        B = (0, s.Z)(),
        F = d.default.getCurrentUser(),
        V = (0, f.M5)(F, p.p9.TIER_2),
        H = a()('payment-modal');
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('96427'), n.e('77298'), n.e('23357'), n.e('52249'), n.e('54803'), n.e('29549'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('8016'), n.e('68136'), n.e('31605'), n.e('30671'), n.e('52774'), n.e('51199'), n.e('24482')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: a, ...s } = n;
                return (0, r.jsx)(e, {
                    ...s,
                    loadId: B,
                    subscriptionTier: C,
                    skuId: (0, f.Wz)(C),
                    isGift: R,
                    giftMessage: O,
                    giftStyle: v,
                    giftRecipient: P,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e, t) => {
                        a(), null == I || I(e), e && (null == T || T(), !R && null != t && t === p.Si.TIER_2 && !V && E.S.dispatch(h.CkL.PREMIUM_SUBSCRIPTION_CREATED));
                    },
                    onComplete: () => {
                        (k = !0), null == m || m(), !R && (0, c.H)(!0);
                    },
                    onSubscriptionConfirmation: T,
                    analyticsLocations: S,
                    analyticsObject: g,
                    analyticsLocation: A,
                    analyticsSourceLocation: N,
                    trialId: L,
                    postSuccessGuild: y,
                    planGroup: p.Y1,
                    openInvoiceId: D,
                    applicationId: b,
                    referralTrialOfferId: M,
                    returnRef: U,
                    subscription: w,
                    skipConfirm: !!x,
                    repeatPurchase: G
                });
            };
        },
        {
            modalKey: H,
            onCloseCallback: () => {
                !k &&
                    _.default.track(h.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: B,
                        payment_type: h.Zuq[h.GZQ.SUBSCRIPTION],
                        location: null != A ? A : g,
                        source: N,
                        subscription_type: h.NYc.PREMIUM,
                        is_gift: R,
                        eligible_for_trial: null != L,
                        application_id: b,
                        location_stack: S
                    }),
                    (0, l.fw)(),
                    (0, u.p)(),
                    null == I || I(k),
                    k && (null == T || T());
            }
        }
    );
}
