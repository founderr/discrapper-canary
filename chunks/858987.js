t.d(n, {
    K: function () {
        return M;
    },
    Z: function () {
        return R;
    }
}),
    t(789020);
var a = t(735250);
t(470079);
var s = t(512722),
    r = t.n(s),
    i = t(481060),
    l = t(115130),
    o = t(906732),
    c = t(598),
    u = t(630388),
    d = t(74538),
    _ = t(296848),
    I = t(244923),
    E = t(981631),
    T = t(231338),
    A = t(689938),
    N = t(423654),
    P = t(74316);
function M(e) {
    let { purchaseType: n, plan: t, premiumSubscription: a, isGift: s, planGroup: i, isPrepaidPaymentSource: l, inReverseTrial: o } = e;
    if (n === T.GZ.ONE_TIME) return s ? A.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : A.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
    if ((r()(null != t, 'Subscription plan must be selected to render SubscriptionReviewButton'), s)) return A.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
    if (o) return A.Z.Messages.BILLING_SELECT_PLAN_PREMIUM_MONTH_TIER_2;
    if ((0, d.PV)(t.id)) {
        if (l) return A.Z.Messages.BILLING_SELECT_PLAN;
        if (null != a) return a.isPaused ? A.Z.Messages.RESUME : (0, _.R4)(a, t.id, i) ? A.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : A.Z.Messages.BILLING_SWITCH_PLAN_CHANGE;
        return (0, d.W_)(null, t);
    }
    return A.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN;
}
function p(e, n) {
    null != e.current && (e.current.scrollIntoView({ behavior: 'smooth' }), n());
}
function R(e) {
    var n;
    let { legalTermsNodeRef: t, invoiceError: s, planError: r, disablePurchase: d, flashLegalTerms: _, isSubmitting: T, premiumSubscription: R, isGift: L, planGroup: f, isPrepaid: S, isTrial: C, makePurchase: m, needsPaymentSource: b, inReverseTrial: v, onNext: g } = e,
        { application: O, selectedPlan: h, hasAcceptedTerms: U, purchaseType: y, paymentSourceId: B, activeSubscription: x, devShelfFetchState: Z } = (0, c.usePaymentContext)(),
        G = M({
            purchaseType: y,
            plan: h,
            premiumSubscription: R,
            isGift: L,
            planGroup: f,
            isPrepaidPaymentSource: S,
            inReverseTrial: v
        }),
        { analyticsLocations: D } = (0, o.ZP)();
    if (null != s || null != r || d)
        return (0, a.jsx)(i.Button, {
            color: i.Button.Colors.GREEN,
            disabled: !0,
            children: G
        });
    if (b)
        return (0, a.jsx)(i.Tooltip, {
            text: A.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
            children: (e) =>
                (0, a.jsx)(i.Button, {
                    ...e,
                    color: i.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: G
                })
        });
    if ((0, u.yE)(null !== (n = null == O ? void 0 : O.flags) && void 0 !== n ? n : 0, E.udG.EMBEDDED) && Z === l.O.LOADING)
        return (0, a.jsx)(i.Tooltip, {
            text: A.Z.Messages.BILLING_LOADING_DEVELOPER_ACTIVITY_SHELF,
            children: (e) =>
                (0, a.jsx)(i.Button, {
                    ...e,
                    color: i.Button.Colors.GREEN,
                    type: 'submit',
                    'data-testid': 'submitButton',
                    disabled: !0,
                    children: G
                })
        });
    else if (C)
        return (0, a.jsxs)(i.ShinyButton, {
            innerClassName: N.innerButton,
            'data-testid': U ? 'purchase' : 'submitButton',
            onClick: U ? m : () => p(t, _),
            color: i.Button.Colors.GREEN,
            submitting: T,
            children: [
                (0, a.jsx)('img', {
                    alt: '',
                    className: N.nitroIcon,
                    src: P
                }),
                G
            ]
        });
    else if (!U)
        return (0, a.jsx)(i.Tooltip, {
            text: A.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
            children: (e) =>
                (0, a.jsx)(i.Button, {
                    ...e,
                    color: i.Button.Colors.GREEN,
                    type: 'submit',
                    onClick: () => p(t, _),
                    'data-testid': 'submitButton',
                    children: G
                })
        });
    else if (v && null != x && null != B)
        return (0, a.jsx)(I.Z, {
            activeSubscription: x,
            onNext: g,
            isSubmitting: T,
            paymentSourceId: B,
            buttonLabel: G,
            analyticsLocations: D
        });
    else
        return (0, a.jsx)(i.Button, {
            'data-testid': 'purchase',
            onClick: m,
            color: i.Button.Colors.GREEN,
            submitting: T,
            children: G
        });
}
