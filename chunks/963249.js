n.d(t, {
    Z: function () {
        return I;
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
    c = n(366939),
    d = n(667),
    f = n(138464),
    _ = n(619067),
    p = n(594174),
    h = n(626135),
    m = n(585483),
    g = n(74538),
    E = n(981631),
    v = n(474936);
function I(e) {
    let { initialPlanId: t, followupSKUInfo: i, onClose: I, onComplete: T, onSubscriptionConfirmation: b, analyticsLocations: S, analyticsObject: y, analyticsLocation: A, analyticsSourceLocation: N, isGift: C = !1, giftMessage: R, giftStyle: O, giftingOrigin: D, subscriptionTier: L, trialId: x, postSuccessGuild: w, openInvoiceId: P, applicationId: M, referralTrialOfferId: k, giftRecipient: U, returnRef: B, subscription: G, skipConfirm: Z, repeatPurchase: F } = null != e ? e : {},
        V = !1,
        j = (0, s.Z)(),
        H = p.default.getCurrentUser(),
        Y = (0, g.M5)(H, v.p9.TIER_2),
        W = a()('payment-modal');
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('77298'), n.e('23357'), n.e('8016'), n.e('12013'), n.e('52249'), n.e('68956'), n.e('73503'), n.e('26182'), n.e('17938'), n.e('95900'), n.e('32776'), n.e('74421'), n.e('54433'), n.e('65994')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: a, ...s } = n;
                return (0, r.jsx)(e, {
                    ...s,
                    loadId: j,
                    subscriptionTier: L,
                    skuId: (0, g.Wz)(L),
                    isGift: C,
                    giftMessage: R,
                    giftStyle: O,
                    giftingOrigin: D,
                    giftRecipient: U,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e, t) => {
                        a(),
                            null == I || I(e),
                            e && (null == b || b(), (0, _.I)(C, Y, t) && m.S.dispatch(E.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                            l.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                    },
                    onComplete: (e) => {
                        (V = !0), null == T || T(), (0, _.I)(C, Y, (0, g.k5)(null == e ? void 0 : e.subscription)) && (0, f.H)(!0);
                    },
                    onSubscriptionConfirmation: b,
                    analyticsLocations: S,
                    analyticsObject: y,
                    analyticsLocation: A,
                    analyticsSourceLocation: N,
                    trialId: x,
                    postSuccessGuild: w,
                    planGroup: v.Y1,
                    openInvoiceId: P,
                    applicationId: M,
                    referralTrialOfferId: k,
                    returnRef: B,
                    subscription: G,
                    skipConfirm: !!Z,
                    repeatPurchase: F
                });
            };
        },
        {
            modalKey: W,
            onCloseCallback: () => {
                !V &&
                    h.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: j,
                        payment_type: E.Zuq[E.GZQ.SUBSCRIPTION],
                        location: null != A ? A : y,
                        source: N,
                        subscription_type: E.NYc.PREMIUM,
                        is_gift: C,
                        eligible_for_trial: null != x,
                        application_id: M,
                        location_stack: S
                    }),
                    (0, c.fw)(),
                    (0, u.fw)(),
                    (0, d.p)(),
                    null == I || I(V),
                    V && (null == b || b());
            }
        }
    );
}
