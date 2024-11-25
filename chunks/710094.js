t.d(n, {
    l: function () {
        return C;
    }
}),
    t(47120),
    t(411104);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(330726),
    c = t(711459),
    o = t(104494),
    u = t(639119),
    d = t(716534),
    m = t(664891),
    p = t(911367),
    x = t(669079),
    h = t(987209),
    f = t(563132),
    v = t(409813),
    g = t(809144),
    S = t(698708),
    j = t(614223),
    E = t(481595),
    y = t(51499),
    I = t(678334),
    P = t(614277),
    T = t(474936),
    N = t(231338),
    b = t(388032);
function C(e) {
    var n, t;
    let r,
        { handleStepChange: C, trialId: _, trialFooterMessageOverride: O, reviewWarningMessage: A, planGroup: Z, openInvoiceId: R, analyticsData: M, analyticsLocation: w, referralTrialOfferId: L, initialPlanId: k, subscriptionTier: D, handleClose: F } = e,
        { activeSubscription: U, setUpdatedSubscription: B, contextMetadata: G, currencies: H, paymentSourceId: W, paymentSources: V, priceOptions: z, purchaseError: Y, purchaseTokenAuthState: K, selectedPlan: X, selectedSkuId: q, setCurrency: J, setPaymentSourceId: Q, setPurchaseState: $, setPurchaseError: ee, step: en, purchaseState: et, isPremium: ei, setHasAcceptedTerms: el, purchaseType: er, setEntitlementsGranted: es, startedPaymentFlowWithPaymentSourcesRef: ea, invoicePreview: ec, inReverseTrial: eo } = (0, f.usePaymentContext)(),
        { isGift: eu, giftMessage: ed, giftRecipient: em } = (0, h.wD)();
    s()(null != en, 'Step should be set');
    let ep = l.useRef(null),
        [ex, eh] = (0, a.Z)(!1, 500);
    (0, p.t)();
    let ef = null !== (t = null != _ ? _ : L) && void 0 !== t ? t : null,
        ev = null != ef && (!ei || T.nG[ef].skus.includes(q)) ? ef : null,
        eg = (0, u.N)(L),
        eS = (0, o.Ng)(),
        ej = { user_trial_offer_id: null == eg ? void 0 : eg.id };
    l.useEffect(() => {
        null != Y && null != ep.current && ep.current.scrollIntoView({ behavior: 'smooth' });
    }, [Y]);
    let eE = l.useCallback(
            (e, n) => {
                B(e),
                    null != n && es(n),
                    C(v.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [C, B, es]
        ),
        ey = null != W ? V[W] : null,
        eI = null != X && T.o4.has(X.id) && null != ey && !(0, c.aQ)(ey) ? Error(b.intl.string(b.t['2ik8io'])) : null,
        eP = l.useRef(null),
        [eT, eN] = l.useState(null),
        eb = !eu && null != eg && null != q && T.nG[eg.trial_id].skus.includes(q),
        eC = null == eS ? void 0 : null === (n = eS.discount) || void 0 === n ? void 0 : n.plan_ids,
        e_ = !eu && null != eS && null != eC && null != X && eC.includes(X.id),
        eO = eu && (0, x.pO)(em),
        eA = null == k && null == D && er === N.GZ.SUBSCRIPTION,
        eZ = (0, j.Kp)({
            isTrial: eb,
            isGift: eu,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: ea.current
        }),
        eR = eu && er === N.GZ.ONE_TIME,
        eM = eR || (eZ ? eA && ei : ei),
        ew = l.useCallback(() => {
            if (eZ) {
                C(v.h8.SKU_SELECT);
                return;
            }
            return eR ? C(v.h8.GIFT_CUSTOMIZATION) : C(v.h8.PLAN_SELECT);
        }, [C, eZ, eR]),
        eL = !1;
    return (
        er === N.GZ.ONE_TIME
            ? (r = (0, i.jsx)(E.Z, {
                  hasLegalTermsFlash: ex,
                  legalTermsNodeRef: eP,
                  onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => C(v.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eL = eu ? null == ec : null != ey && er === N.GZ.SUBSCRIPTION && eb && !ey.canRedeemTrial()),
              null == U || eo || eu
                  ? (s()(null != X, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(d.Z, {
                        selectedPlanId: X.id,
                        paymentSources: V,
                        onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                        priceOptions: z,
                        currencies: H,
                        onCurrencyChange: (e) => J(e),
                        handlePaymentSourceAdd: () => C(v.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eP,
                        hasLegalTermsFlash: ex,
                        trialId: ev,
                        trialFooterMessageOverride: O,
                        reviewWarningMessage: A,
                        purchaseState: et,
                        referralTrialOfferId: L,
                        isTrial: eb || (null != _ && null != O),
                        isDiscount: e_,
                        handleClose: F
                    })))
                  : (s()(null != X, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(m.Z, {
                        premiumSubscription: U,
                        paymentSources: V,
                        priceOptions: z,
                        onPaymentSourceChange: (e) => {
                            Q(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            C(v.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: X.id,
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eP,
                        hasLegalTermsFlash: ex,
                        onInvoiceError: (e) => eN(e),
                        planGroup: Z,
                        currencies: H,
                        onCurrencyChange: (e) => J(e),
                        hasOpenInvoice: null != R,
                        purchaseState: et,
                        handleClose: F
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.P, { giftMessage: ed }),
                !eO && (0, i.jsx)(y.Z, { isEligibleForTrial: eb }),
                (0, i.jsxs)(P.C3, {
                    children: [(0, i.jsx)(S.Z, {}), r]
                }),
                (0, i.jsx)(P.O3, {
                    children: (0, i.jsx)(I.Z, {
                        premiumSubscription: null != U ? U : null,
                        setPurchaseState: $,
                        onBack: ew,
                        onNext: eE,
                        onPurchaseError: (e) => ee(e),
                        legalTermsNodeRef: eP,
                        flashLegalTerms: () => eh(!0),
                        invoiceError: eT,
                        planError: eI,
                        analyticsLocation: w,
                        baseAnalyticsData: M,
                        flowStartTime: G.startTime,
                        trialId: ev,
                        planGroup: Z,
                        purchaseTokenAuthState: K,
                        openInvoiceId: R,
                        backButtonEligible: eM,
                        metadata: ej,
                        isTrial: eb,
                        disablePurchase: eL
                    })
                })
            ]
        })
    );
}
