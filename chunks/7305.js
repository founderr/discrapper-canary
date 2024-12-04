n.r(t),
    n.d(t, {
        PremiumPaymentModal: function () {
            return b;
        },
        STEPS: function () {
            return O;
        },
        default: function () {
            return w;
        }
    }),
    n(411104),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(442837),
    r = n(570140),
    a = n(821849),
    o = n(100527),
    C = n(906732),
    d = n(717401),
    u = n(509545),
    c = n(78839),
    p = n(669079),
    x = n(987209),
    h = n(563132),
    f = n(409813),
    _ = n(791785),
    j = n(276442),
    L = n(793541),
    m = n(380898),
    g = n(710094),
    E = n(293858),
    S = n(183813),
    y = n(614223),
    M = n(174827),
    Z = n(846464),
    I = n(184160),
    v = n(48175),
    P = n(981631),
    T = n(474936),
    N = n(388032),
    A = n(809186);
let U = [f.h8.PLAN_SELECT, f.h8.ADD_PAYMENT_STEPS, f.h8.REVIEW, f.h8.CONFIRM];
function b(e) {
    let { analyticsLocation: t, analyticsObject: n, analyticsSourceLocation: s, onComplete: o, transitionState: d, initialPlanId: c, subscriptionTier: j, onClose: L, trialId: m, trialFooterMessageOverride: g, reviewWarningMessage: E, openInvoiceId: S, onSubscriptionConfirmation: y, renderPurchaseConfirmation: M, postSuccessGuild: Z, followupSKUInfo: I, renderHeader: v, applicationId: N, guildId: A, referralTrialOfferId: U, skuId: b, returnRef: k, skipConfirm: R = !1, continueSession: O = !1, continueSessionInitialStep: w } = e,
        { analyticsLocations: H } = (0, C.ZP)();
    l.useEffect(() => {
        !u.Z.isLoadedForPremiumSKUs() && r.Z.wait(() => (0, a.Y2)());
    }, []);
    let { step: B } = (0, h.usePaymentContext)(),
        { isGift: F, giftMessage: G, giftRecipient: W } = (0, x.wD)(),
        D = F && (0, p.pO)(W) && B === f.h8.PLAN_SELECT;
    return (0, i.jsx)(_.PaymentModal, {
        analyticsLocations: H,
        analyticsLocation: t,
        analyticsObject: n,
        analyticsSourceLocation: s,
        analyticsSubscriptionType: P.NYc.PREMIUM,
        onComplete: o,
        transitionState: d,
        initialPlanId: c,
        giftMessage: G,
        subscriptionTier: j,
        onClose: L,
        trialId: m,
        isGift: F,
        trialFooterMessageOverride: g,
        reviewWarningMessage: E,
        planGroup: T.Y1,
        openInvoiceId: S,
        onSubscriptionConfirmation: y,
        renderPurchaseConfirmation: M,
        postSuccessGuild: Z,
        followupSKUInfo: I,
        renderHeader: v,
        applicationId: N,
        guildId: A,
        referralTrialOfferId: U,
        skuId: b,
        shakeWhilePurchasing: !0,
        isLargeModal: D,
        returnRef: k,
        skipConfirm: R,
        continueSession: O,
        continueSessionInitialStep: w
    });
}
function k(e) {
    let { startedPaymentFlowWithPaymentSourcesRef: t, selectedSkuId: n } = (0, h.usePaymentContext)(),
        { isGift: i } = (0, x.wD)();
    return (0, y.Kp)({
        isTrial: null != e && e,
        isGift: i,
        selectedSkuId: n,
        startedPaymentFlowWithPaymentSources: t.current
    });
}
function R(e) {
    let { initialPlanId: t, handleStepChange: n, referralTrialOfferId: l } = e,
        { paymentSources: s, selectedSkuId: r, selectedPlan: a } = (0, h.usePaymentContext)(),
        { isGift: o, claimableRewards: C } = (0, x.wD)(),
        u = k(
            (0, v.Z)({
                isGift: o,
                skuId: r,
                referralTrialOfferId: l
            })
        ),
        c = (0, d.id)(a, o, C);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(j.J, {
            ...e,
            breadcrumbSteps: U,
            onReturn: () => {
                let e = Object.values(s),
                    i = e.length < 1 && null == t ? f.h8.PLAN_SELECT : f.h8.REVIEW;
                u && (i = f.h8.REVIEW), c && e.length < 1 && (i = f.h8.SELECT_FREE_SKU), n(i, { trackedFromStep: f.h8.PAYMENT_TYPE });
            }
        })
    });
}
let O = [
    {
        key: null,
        renderStep: (e) => (0, i.jsx)(_.PaymentPredicateStep, { ...e })
    },
    {
        key: f.h8.SKU_SELECT,
        renderStep: (e) => (0, i.jsx)(Z.q, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.WHAT_YOU_LOSE,
        renderStep: (e) => (0, i.jsx)(I.x, { ...e }),
        options: {
            renderHeader: !1,
            hideSlider: !0
        }
    },
    {
        key: f.h8.PLAN_SELECT,
        renderStep: (e) => (0, i.jsx)(M.x, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (k(e) ? null : N.intl.string(N.t['r+SebW']))
        }
    },
    {
        key: f.h8.ADD_PAYMENT_STEPS,
        renderStep: (e) => (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(R, { ...e }) }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (k(e) ? null : N.intl.string(N.t.Sb6wIy))
        }
    },
    {
        key: f.h8.AWAITING_PURCHASE_TOKEN_AUTH,
        renderStep: () => (0, i.jsx)(m.Z, {})
    },
    {
        key: f.h8.AWAITING_AUTHENTICATION,
        renderStep: () => (0, i.jsx)(L.Z, {})
    },
    {
        key: f.h8.REVIEW,
        renderStep: (e) => (0, i.jsx)(g.l, { ...e }),
        options: {
            renderHeader: !0,
            useBreadcrumbLabel: (e) => (k(e) ? N.intl.string(N.t.UKbp1N) : N.intl.string(N.t.QBnNHh))
        }
    },
    {
        key: f.h8.CONFIRM,
        renderStep: (e) => (0, i.jsx)(E.b, { ...e })
    },
    {
        key: f.h8.SELECT_FREE_SKU,
        renderStep: (e) => (0, i.jsx)(S.S, { ...e }),
        options: {
            bodyClassName: A.selectFreeSku,
            isDynamicModal: !0
        }
    }
];
function w(e) {
    let t = (0, s.e7)([c.ZP], () => c.ZP.getPremiumTypeSubscription()),
        { analyticsLocations: n } = (0, C.ZP)(e.analyticsLocations, o.Z.PREMIUM_PAYMENT_MODAL),
        { subscriptionTier: l, isGift: r, giftRecipient: a, giftMessage: d, giftStyle: u, giftingOrigin: p, loadId: f, defaultPlanId: _, referralCode: j, repeatPurchase: L } = e;
    if (null != l && !Object.values(T.Si).includes(l)) throw Error('subscriptionTier must be a premium subscription');
    return (0, i.jsx)(C.Gt, {
        value: n,
        children: (0, i.jsx)(h.PaymentContextProvider, {
            loadId: f,
            activeSubscription: null != e.subscription ? e.subscription : t,
            stepConfigs: O,
            skuIDs: [...T.YQ],
            isGift: r,
            defaultPlanId: _,
            referralCode: j,
            repeatPurchase: L,
            children: (0, i.jsx)(x.KB, {
                isGift: r,
                giftRecipient: null == a ? void 0 : a,
                giftMessage: d,
                giftStyle: u,
                giftingOrigin: p,
                children: (0, i.jsx)(b, { ...e })
            })
        })
    });
}
