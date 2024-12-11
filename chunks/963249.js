n.d(t, {
    Z: function () {
        return v;
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
    f = n(619067),
    _ = n(594174),
    p = n(626135),
    h = n(585483),
    m = n(74538),
    g = n(981631),
    E = n(474936);
function v(e) {
    let { initialPlanId: t, followupSKUInfo: i, onClose: v, onComplete: I, onSubscriptionConfirmation: T, analyticsLocations: b, analyticsObject: S, analyticsLocation: y, analyticsSourceLocation: A, isGift: N = !1, giftMessage: C, giftStyle: R, giftingOrigin: O, subscriptionTier: D, trialId: L, postSuccessGuild: x, openInvoiceId: w, applicationId: P, referralTrialOfferId: M, giftRecipient: k, returnRef: U, subscription: B, skipConfirm: G, repeatPurchase: Z } = null != e ? e : {},
        F = !1,
        V = (0, s.Z)(),
        j = _.default.getCurrentUser(),
        H = (0, m.M5)(j, E.p9.TIER_2),
        Y = a()('payment-modal');
    return (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('77298'), n.e('23357'), n.e('8016'), n.e('12013'), n.e('52249'), n.e('68956'), n.e('73503'), n.e('26182'), n.e('17938'), n.e('95900'), n.e('32776'), n.e('74421'), n.e('54433'), n.e('65994')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: a, ...s } = n;
                return (0, r.jsx)(e, {
                    ...s,
                    loadId: V,
                    subscriptionTier: D,
                    skuId: (0, m.Wz)(D),
                    isGift: N,
                    giftMessage: C,
                    giftStyle: R,
                    giftingOrigin: O,
                    giftRecipient: k,
                    initialPlanId: t,
                    followupSKUInfo: i,
                    onClose: (e, t) => {
                        a(),
                            null == v || v(e),
                            e && (null == T || T(), (0, f.I)(N, H, t) && h.S.dispatch(g.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                            l.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                    },
                    onComplete: (e) => {
                        (F = !0), null == I || I(), (0, f.I)(N, H, (0, m.k5)(null == e ? void 0 : e.subscription)) && (0, d.H)(!0);
                    },
                    onSubscriptionConfirmation: T,
                    analyticsLocations: b,
                    analyticsObject: S,
                    analyticsLocation: y,
                    analyticsSourceLocation: A,
                    trialId: L,
                    postSuccessGuild: x,
                    planGroup: E.Y1,
                    openInvoiceId: w,
                    applicationId: P,
                    referralTrialOfferId: M,
                    returnRef: U,
                    subscription: B,
                    skipConfirm: !!G,
                    repeatPurchase: Z
                });
            };
        },
        {
            modalKey: Y,
            onCloseCallback: () => {
                !F &&
                    p.default.track(g.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: V,
                        payment_type: g.Zuq[g.GZQ.SUBSCRIPTION],
                        location: null != y ? y : S,
                        source: A,
                        subscription_type: g.NYc.PREMIUM,
                        is_gift: N,
                        eligible_for_trial: null != L,
                        application_id: P,
                        location_stack: b
                    }),
                    (0, u.fw)(),
                    (0, c.p)(),
                    null == v || v(F),
                    F && (null == T || T());
            }
        }
    );
}
