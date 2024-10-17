s.d(n, {
    l: function () {
        return R;
    }
}),
    s(47120),
    s(411104);
var t = s(735250),
    l = s(470079),
    i = s(512722),
    r = s.n(i),
    a = s(330726),
    c = s(711459),
    o = s(104494),
    u = s(639119),
    d = s(716534),
    _ = s(664891),
    m = s(911367),
    I = s(669079),
    E = s(987209),
    p = s(598),
    N = s(409813),
    T = s(809144),
    S = s(698708),
    x = s(614223),
    h = s(481595),
    P = s(51499),
    f = s(678334),
    A = s(614277),
    v = s(474936),
    M = s(231338),
    g = s(689938);
function R(e) {
    var n, s;
    let i,
        { handleStepChange: R, trialId: L, trialFooterMessageOverride: O, reviewWarningMessage: C, planGroup: j, openInvoiceId: Z, analyticsData: y, analyticsLocation: b, referralTrialOfferId: D, initialPlanId: G, subscriptionTier: U, handleClose: F } = e,
        { activeSubscription: B, setUpdatedSubscription: w, contextMetadata: H, currencies: k, paymentSourceId: W, paymentSources: Y, priceOptions: V, purchaseError: K, purchaseTokenAuthState: z, selectedPlan: X, selectedSkuId: J, setCurrency: q, setPaymentSourceId: Q, setPurchaseState: $, setPurchaseError: ee, step: en, purchaseState: es, isPremium: et, setHasAcceptedTerms: el, purchaseType: ei, setEntitlementsGranted: er, startedPaymentFlowWithPaymentSourcesRef: ea, invoicePreview: ec, inReverseTrial: eo } = (0, p.usePaymentContext)(),
        { isGift: eu, giftMessage: ed, giftRecipient: e_ } = (0, E.wD)();
    r()(null != en, 'Step should be set');
    let em = l.useRef(null),
        [eI, eE] = (0, a.Z)(!1, 500);
    (0, m.t)();
    let ep = null !== (s = null != L ? L : D) && void 0 !== s ? s : null,
        eN = null != ep && (!et || v.nG[ep].skus.includes(J)) ? ep : null,
        eT = (0, u.N)(D),
        eS = (0, o.Ng)(),
        ex = { user_trial_offer_id: null == eT ? void 0 : eT.id };
    l.useEffect(() => {
        null != K && null != em.current && em.current.scrollIntoView({ behavior: 'smooth' });
    }, [K]);
    let eh = l.useCallback(
            (e, n) => {
                w(e),
                    null != n && er(n),
                    R(N.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [R, w, er]
        ),
        eP = null != W ? Y[W] : null,
        ef = null != X && v.o4.has(X.id) && null != eP && !(0, c.aQ)(eP) ? Error(g.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
        eA = l.useRef(null),
        [ev, eM] = l.useState(null),
        eg = !eu && null != eT && null != J && v.nG[eT.trial_id].skus.includes(J),
        eR = null == eS ? void 0 : null === (n = eS.discount) || void 0 === n ? void 0 : n.plan_ids,
        eL = !eu && null != eS && null != eR && null != X && eR.includes(X.id),
        eO = eu && (0, I.pO)(e_),
        eC = null == G && null == U && ei === M.GZ.SUBSCRIPTION,
        ej = (0, x.Kp)({
            isTrial: eg,
            isGift: eu,
            selectedSkuId: J,
            startedPaymentFlowWithPaymentSources: ea.current
        }),
        eZ = eu && ei === M.GZ.ONE_TIME,
        ey = eZ || (ej ? eC && et : et),
        eb = l.useCallback(() => {
            if (ej) {
                R(N.h8.SKU_SELECT);
                return;
            }
            return eZ ? R(N.h8.GIFT_CUSTOMIZATION) : R(N.h8.PLAN_SELECT);
        }, [R, ej, eZ]),
        eD = !1;
    return (
        ei === M.GZ.ONE_TIME
            ? (i = (0, t.jsx)(h.Z, {
                  hasLegalTermsFlash: eI,
                  legalTermsNodeRef: eA,
                  onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => R(N.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eD = eu ? null == ec : null != eP && ei === M.GZ.SUBSCRIPTION && eg && !eP.canRedeemTrial()),
              null == B || eo || eu
                  ? (r()(null != X, 'Expected plan to be selected'),
                    (i = (0, t.jsx)(d.Z, {
                        selectedPlanId: X.id,
                        paymentSources: Y,
                        onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                        priceOptions: V,
                        currencies: k,
                        onCurrencyChange: (e) => q(e),
                        handlePaymentSourceAdd: () => R(N.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eA,
                        hasLegalTermsFlash: eI,
                        trialId: eN,
                        trialFooterMessageOverride: O,
                        reviewWarningMessage: C,
                        purchaseState: es,
                        referralTrialOfferId: D,
                        isTrial: eg || (null != L && null != O),
                        isDiscount: eL,
                        handleClose: F
                    })))
                  : (r()(null != X, 'Expected plan to be selected'),
                    (i = (0, t.jsx)(_.Z, {
                        premiumSubscription: B,
                        paymentSources: Y,
                        priceOptions: V,
                        onPaymentSourceChange: (e) => {
                            Q(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            R(N.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: X.id,
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eA,
                        hasLegalTermsFlash: eI,
                        onInvoiceError: (e) => eM(e),
                        planGroup: j,
                        currencies: k,
                        onCurrencyChange: (e) => q(e),
                        hasOpenInvoice: null != Z,
                        purchaseState: es,
                        handleClose: F
                    })))),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(T.P, { giftMessage: ed }),
                !eO && (0, t.jsx)(P.Z, { isEligibleForTrial: eg }),
                (0, t.jsxs)(A.C3, {
                    children: [(0, t.jsx)(S.Z, {}), i]
                }),
                (0, t.jsx)(A.O3, {
                    children: (0, t.jsx)(f.Z, {
                        premiumSubscription: null != B ? B : null,
                        setPurchaseState: $,
                        onBack: eb,
                        onNext: eh,
                        onPurchaseError: (e) => ee(e),
                        legalTermsNodeRef: eA,
                        flashLegalTerms: () => eE(!0),
                        invoiceError: ev,
                        planError: ef,
                        analyticsLocation: b,
                        baseAnalyticsData: y,
                        flowStartTime: H.startTime,
                        trialId: eN,
                        planGroup: j,
                        purchaseTokenAuthState: z,
                        openInvoiceId: Z,
                        backButtonEligible: ey,
                        metadata: ex,
                        isTrial: eg,
                        disablePurchase: eD
                    })
                })
            ]
        })
    );
}
