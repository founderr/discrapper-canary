t.d(n, {
    l: function () {
        return _;
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
    o = t(717401),
    u = t(104494),
    d = t(639119),
    m = t(716534),
    p = t(664891),
    x = t(911367),
    h = t(669079),
    f = t(987209),
    v = t(563132),
    S = t(409813),
    g = t(809144),
    E = t(698708),
    j = t(614223),
    y = t(481595),
    I = t(51499),
    P = t(678334),
    T = t(614277),
    N = t(474936),
    b = t(231338),
    C = t(388032);
function _(e) {
    var n, t;
    let r,
        { handleStepChange: _, trialId: O, trialFooterMessageOverride: A, reviewWarningMessage: R, planGroup: Z, openInvoiceId: M, analyticsData: w, analyticsLocation: L, referralTrialOfferId: k, initialPlanId: F, subscriptionTier: D, handleClose: U } = e,
        { activeSubscription: B, setUpdatedSubscription: G, contextMetadata: H, currencies: W, paymentSourceId: V, paymentSources: K, priceOptions: z, purchaseError: Y, purchaseTokenAuthState: X, selectedPlan: q, selectedSkuId: J, setCurrency: Q, setPaymentSourceId: $, setPurchaseState: ee, setPurchaseError: en, step: et, purchaseState: ei, isPremium: el, setHasAcceptedTerms: er, purchaseType: es, setEntitlementsGranted: ea, startedPaymentFlowWithPaymentSourcesRef: ec, invoicePreview: eo, inReverseTrial: eu } = (0, v.usePaymentContext)(),
        { isGift: ed, giftMessage: em, giftRecipient: ep, claimableRewards: ex } = (0, f.wD)();
    s()(null != et, 'Step should be set');
    let eh = l.useRef(null),
        [ef, ev] = (0, a.Z)(!1, 500);
    (0, x.t)();
    let eS = null !== (t = null != O ? O : k) && void 0 !== t ? t : null,
        eg = null != eS && (!el || N.nG[eS].skus.includes(J)) ? eS : null,
        eE = (0, d.N)(k),
        ej = (0, u.Ng)(),
        ey = { user_trial_offer_id: null == eE ? void 0 : eE.id };
    l.useEffect(() => {
        null != Y && null != eh.current && eh.current.scrollIntoView({ behavior: 'smooth' });
    }, [Y]);
    let eI = l.useCallback(
            (e, n) => {
                G(e),
                    null != n && ea(n),
                    _(S.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [_, G, ea]
        ),
        eP = null != V ? K[V] : null,
        eT = null != q && N.o4.has(q.id) && null != eP && !(0, c.aQ)(eP) ? Error(C.intl.string(C.t['2ik8io'])) : null,
        eN = l.useRef(null),
        [eb, eC] = l.useState(null),
        e_ = !ed && null != eE && null != J && N.nG[eE.trial_id].skus.includes(J),
        eO = null == ej ? void 0 : null === (n = ej.discount) || void 0 === n ? void 0 : n.plan_ids,
        eA = !ed && null != ej && null != eO && null != q && eO.includes(q.id),
        eR = ed && (0, h.pO)(ep),
        eZ = null == F && null == D && es === b.GZ.SUBSCRIPTION,
        eM = (0, j.Kp)({
            isTrial: e_,
            isGift: ed,
            selectedSkuId: J,
            startedPaymentFlowWithPaymentSources: ec.current
        }),
        ew = ed && es === b.GZ.ONE_TIME,
        eL = ew || (eM ? eZ && el : el),
        ek = (0, o.id)(q, ed, ex),
        eF = l.useCallback(() => {
            if (eM) {
                _(S.h8.SKU_SELECT);
                return;
            }
            if (ek) {
                _(S.h8.SELECT_FREE_SKU);
                return;
            }
            return ew ? _(S.h8.GIFT_CUSTOMIZATION) : _(S.h8.PLAN_SELECT);
        }, [_, eM, ew, ek]),
        eD = !1;
    return (
        es === b.GZ.ONE_TIME
            ? (r = (0, i.jsx)(y.Z, {
                  hasLegalTermsFlash: ef,
                  legalTermsNodeRef: eN,
                  onPaymentSourceChange: (e) => $(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => _(S.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eD = ed ? null == eo : null != eP && es === b.GZ.SUBSCRIPTION && e_ && !eP.canRedeemTrial()),
              null == B || eu || ed
                  ? (s()(null != q, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(m.Z, {
                        selectedPlanId: q.id,
                        paymentSources: K,
                        onPaymentSourceChange: (e) => $(null != e ? e.id : null),
                        priceOptions: z,
                        currencies: W,
                        onCurrencyChange: (e) => Q(e),
                        handlePaymentSourceAdd: () => _(S.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: er,
                        legalTermsNodeRef: eN,
                        hasLegalTermsFlash: ef,
                        trialId: eg,
                        trialFooterMessageOverride: A,
                        reviewWarningMessage: R,
                        purchaseState: ei,
                        referralTrialOfferId: k,
                        isTrial: e_ || (null != O && null != A),
                        isDiscount: eA,
                        handleClose: U
                    })))
                  : (s()(null != q, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(p.Z, {
                        premiumSubscription: B,
                        paymentSources: K,
                        priceOptions: z,
                        onPaymentSourceChange: (e) => {
                            $(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            _(S.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: q.id,
                        setHasAcceptedTerms: er,
                        legalTermsNodeRef: eN,
                        hasLegalTermsFlash: ef,
                        onInvoiceError: (e) => eC(e),
                        planGroup: Z,
                        currencies: W,
                        onCurrencyChange: (e) => Q(e),
                        hasOpenInvoice: null != M,
                        purchaseState: ei,
                        handleClose: U
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.P, { giftMessage: em }),
                !eR && (0, i.jsx)(I.Z, { isEligibleForTrial: e_ }),
                (0, i.jsxs)(T.C3, {
                    children: [(0, i.jsx)(E.Z, {}), r]
                }),
                (0, i.jsx)(T.O3, {
                    children: (0, i.jsx)(P.Z, {
                        premiumSubscription: null != B ? B : null,
                        setPurchaseState: ee,
                        onBack: eF,
                        onNext: eI,
                        onPurchaseError: (e) => en(e),
                        legalTermsNodeRef: eN,
                        flashLegalTerms: () => ev(!0),
                        invoiceError: eb,
                        planError: eT,
                        analyticsLocation: L,
                        baseAnalyticsData: w,
                        flowStartTime: H.startTime,
                        trialId: eg,
                        planGroup: Z,
                        purchaseTokenAuthState: X,
                        openInvoiceId: M,
                        backButtonEligible: eL,
                        metadata: ey,
                        isTrial: e_,
                        disablePurchase: eD
                    })
                })
            ]
        })
    );
}
