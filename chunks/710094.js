t.d(n, {
    l: function () {
        return M;
    }
}),
    t(47120),
    t(411104);
var i = t(735250),
    a = t(470079),
    r = t(512722),
    s = t.n(r),
    l = t(330726),
    o = t(711459),
    c = t(104494),
    u = t(639119),
    d = t(716534),
    _ = t(664891),
    p = t(911367),
    m = t(669079),
    I = t(987209),
    f = t(598),
    E = t(409813),
    x = t(809144),
    N = t(698708),
    S = t(614223),
    T = t(481595),
    h = t(51499),
    b = t(678334),
    g = t(614277),
    P = t(474936),
    v = t(231338),
    A = t(689938);
function M(e) {
    var n, t;
    let r,
        { handleStepChange: M, trialId: C, trialFooterMessageOverride: y, reviewWarningMessage: R, planGroup: O, openInvoiceId: L, analyticsData: j, analyticsLocation: Z, referralTrialOfferId: D, initialPlanId: w, subscriptionTier: B, handleClose: G } = e,
        { activeSubscription: U, setUpdatedSubscription: F, contextMetadata: k, currencies: H, paymentSourceId: W, paymentSources: Y, priceOptions: V, purchaseError: K, purchaseTokenAuthState: z, selectedPlan: X, selectedSkuId: q, setCurrency: J, setPaymentSourceId: Q, setPurchaseState: $, setPurchaseError: ee, step: en, purchaseState: et, isPremium: ei, setHasAcceptedTerms: ea, purchaseType: er, setEntitlementsGranted: es, startedPaymentFlowWithPaymentSourcesRef: el, invoicePreview: eo, inReverseTrial: ec } = (0, f.usePaymentContext)(),
        { isGift: eu, giftMessage: ed, giftRecipient: e_ } = (0, I.wD)();
    s()(null != en, 'Step should be set');
    let ep = a.useRef(null),
        [em, eI] = (0, l.Z)(!1, 500);
    (0, p.t)();
    let ef = null !== (t = null != C ? C : D) && void 0 !== t ? t : null,
        eE = null != ef && (!ei || P.nG[ef].skus.includes(q)) ? ef : null,
        ex = (0, u.N)(D),
        eN = (0, c.Ng)(),
        eS = { user_trial_offer_id: null == ex ? void 0 : ex.id };
    a.useEffect(() => {
        null != K && null != ep.current && ep.current.scrollIntoView({ behavior: 'smooth' });
    }, [K]);
    let eT = a.useCallback(
            (e, n) => {
                F(e),
                    null != n && es(n),
                    M(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [M, F, es]
        ),
        eh = null != W ? Y[W] : null,
        eb = null != X && P.o4.has(X.id) && null != eh && !(0, o.aQ)(eh) ? Error(A.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
        eg = a.useRef(null),
        [eP, ev] = a.useState(null),
        eA = !eu && null != ex && null != q && P.nG[ex.trial_id].skus.includes(q),
        eM = null == eN ? void 0 : null === (n = eN.discount) || void 0 === n ? void 0 : n.plan_ids,
        eC = !eu && null != eN && null != eM && null != X && eM.includes(X.id),
        ey = eu && (0, m.pO)(e_),
        eR = null == w && null == B && er === v.GZ.SUBSCRIPTION,
        eO = (0, S.Kp)({
            isTrial: eA,
            isGift: eu,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: el.current
        }),
        eL = eu && er === v.GZ.ONE_TIME,
        ej = eL || (eO ? eR && ei : ei),
        eZ = a.useCallback(() => {
            if (eO) {
                M(E.h8.SKU_SELECT);
                return;
            }
            return eL ? M(E.h8.GIFT_CUSTOMIZATION) : M(E.h8.PLAN_SELECT);
        }, [M, eO, eL]),
        eD = !1;
    return (
        er === v.GZ.ONE_TIME
            ? (r = (0, i.jsx)(T.Z, {
                  hasLegalTermsFlash: em,
                  legalTermsNodeRef: eg,
                  onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eD = eu ? null == eo : null != eh && er === v.GZ.SUBSCRIPTION && eA && !eh.canRedeemTrial()),
              null == U || ec || eu
                  ? (s()(null != X, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(d.Z, {
                        selectedPlanId: X.id,
                        paymentSources: Y,
                        onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                        priceOptions: V,
                        currencies: H,
                        onCurrencyChange: (e) => J(e),
                        handlePaymentSourceAdd: () => M(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ea,
                        legalTermsNodeRef: eg,
                        hasLegalTermsFlash: em,
                        trialId: eE,
                        trialFooterMessageOverride: y,
                        reviewWarningMessage: R,
                        purchaseState: et,
                        referralTrialOfferId: D,
                        isTrial: eA || (null != C && null != y),
                        isDiscount: eC,
                        handleClose: G
                    })))
                  : (s()(null != X, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(_.Z, {
                        premiumSubscription: U,
                        paymentSources: Y,
                        priceOptions: V,
                        onPaymentSourceChange: (e) => {
                            Q(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            M(E.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: X.id,
                        setHasAcceptedTerms: ea,
                        legalTermsNodeRef: eg,
                        hasLegalTermsFlash: em,
                        onInvoiceError: (e) => ev(e),
                        planGroup: O,
                        currencies: H,
                        onCurrencyChange: (e) => J(e),
                        hasOpenInvoice: null != L,
                        purchaseState: et,
                        handleClose: G
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.P, { giftMessage: ed }),
                !ey && (0, i.jsx)(h.Z, { isEligibleForTrial: eA }),
                (0, i.jsxs)(g.C3, {
                    children: [(0, i.jsx)(N.Z, {}), r]
                }),
                (0, i.jsx)(g.O3, {
                    children: (0, i.jsx)(b.Z, {
                        premiumSubscription: null != U ? U : null,
                        setPurchaseState: $,
                        onBack: eZ,
                        onNext: eT,
                        onPurchaseError: (e) => ee(e),
                        legalTermsNodeRef: eg,
                        flashLegalTerms: () => eI(!0),
                        invoiceError: eP,
                        planError: eb,
                        analyticsLocation: Z,
                        baseAnalyticsData: j,
                        flowStartTime: k.startTime,
                        trialId: eE,
                        planGroup: O,
                        purchaseTokenAuthState: z,
                        openInvoiceId: L,
                        backButtonEligible: ej,
                        metadata: eS,
                        isTrial: eA,
                        disablePurchase: eD
                    })
                })
            ]
        })
    );
}
