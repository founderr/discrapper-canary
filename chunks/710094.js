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
        { handleStepChange: _, trialId: O, trialFooterMessageOverride: A, reviewWarningMessage: Z, planGroup: R, openInvoiceId: M, analyticsData: w, analyticsLocation: L, referralTrialOfferId: k, initialPlanId: F, subscriptionTier: D, handleClose: U } = e,
        { activeSubscription: B, setUpdatedSubscription: G, contextMetadata: H, currencies: W, paymentSourceId: V, paymentSources: K, priceOptions: z, purchaseError: Y, purchaseTokenAuthState: X, selectedPlan: q, selectedSkuId: J, setCurrency: Q, setPaymentSourceId: $, setPurchaseState: ee, setPurchaseError: en, step: et, purchaseState: ei, isPremium: el, setHasAcceptedTerms: er, purchaseType: es, setEntitlementsGranted: ea, startedPaymentFlowWithPaymentSourcesRef: ec, invoicePreview: eo, inReverseTrial: eu } = (0, v.usePaymentContext)(),
        { isGift: ed, giftMessage: em, giftRecipient: ep } = (0, f.wD)();
    s()(null != et, 'Step should be set');
    let ex = l.useRef(null),
        [eh, ef] = (0, a.Z)(!1, 500);
    (0, x.t)();
    let ev = null !== (t = null != O ? O : k) && void 0 !== t ? t : null,
        eS = null != ev && (!el || N.nG[ev].skus.includes(J)) ? ev : null,
        eg = (0, d.N)(k),
        eE = (0, u.Ng)(),
        ej = { user_trial_offer_id: null == eg ? void 0 : eg.id };
    l.useEffect(() => {
        null != Y && null != ex.current && ex.current.scrollIntoView({ behavior: 'smooth' });
    }, [Y]);
    let ey = l.useCallback(
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
        eI = null != V ? K[V] : null,
        eP = null != q && N.o4.has(q.id) && null != eI && !(0, c.aQ)(eI) ? Error(C.intl.string(C.t['2ik8io'])) : null,
        eT = l.useRef(null),
        [eN, eb] = l.useState(null),
        eC = !ed && null != eg && null != J && N.nG[eg.trial_id].skus.includes(J),
        e_ = null == eE ? void 0 : null === (n = eE.discount) || void 0 === n ? void 0 : n.plan_ids,
        eO = !ed && null != eE && null != e_ && null != q && e_.includes(q.id),
        eA = ed && (0, h.pO)(ep),
        eZ = null == F && null == D && es === b.GZ.SUBSCRIPTION,
        eR = (0, j.Kp)({
            isTrial: eC,
            isGift: ed,
            selectedSkuId: J,
            startedPaymentFlowWithPaymentSources: ec.current
        }),
        eM = ed && es === b.GZ.ONE_TIME,
        ew = eM || (eR ? eZ && el : el),
        eL = (0, o.id)(q, ed),
        ek = l.useCallback(() => {
            if (eR) {
                _(S.h8.SKU_SELECT);
                return;
            }
            if (eL) {
                _(S.h8.SELECT_FREE_SKU);
                return;
            }
            return eM ? _(S.h8.GIFT_CUSTOMIZATION) : _(S.h8.PLAN_SELECT);
        }, [_, eR, eM, eL]),
        eF = !1;
    return (
        es === b.GZ.ONE_TIME
            ? (r = (0, i.jsx)(y.Z, {
                  hasLegalTermsFlash: eh,
                  legalTermsNodeRef: eT,
                  onPaymentSourceChange: (e) => $(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => _(S.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eF = ed ? null == eo : null != eI && es === b.GZ.SUBSCRIPTION && eC && !eI.canRedeemTrial()),
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
                        legalTermsNodeRef: eT,
                        hasLegalTermsFlash: eh,
                        trialId: eS,
                        trialFooterMessageOverride: A,
                        reviewWarningMessage: Z,
                        purchaseState: ei,
                        referralTrialOfferId: k,
                        isTrial: eC || (null != O && null != A),
                        isDiscount: eO,
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
                        legalTermsNodeRef: eT,
                        hasLegalTermsFlash: eh,
                        onInvoiceError: (e) => eb(e),
                        planGroup: R,
                        currencies: W,
                        onCurrencyChange: (e) => Q(e),
                        hasOpenInvoice: null != M,
                        purchaseState: ei,
                        handleClose: U
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.P, { giftMessage: em }),
                !eA && (0, i.jsx)(I.Z, { isEligibleForTrial: eC }),
                (0, i.jsxs)(T.C3, {
                    children: [(0, i.jsx)(E.Z, {}), r]
                }),
                (0, i.jsx)(T.O3, {
                    children: (0, i.jsx)(P.Z, {
                        premiumSubscription: null != B ? B : null,
                        setPurchaseState: ee,
                        onBack: ek,
                        onNext: ey,
                        onPurchaseError: (e) => en(e),
                        legalTermsNodeRef: eT,
                        flashLegalTerms: () => ef(!0),
                        invoiceError: eN,
                        planError: eP,
                        analyticsLocation: L,
                        baseAnalyticsData: w,
                        flowStartTime: H.startTime,
                        trialId: eS,
                        planGroup: R,
                        purchaseTokenAuthState: X,
                        openInvoiceId: M,
                        backButtonEligible: ew,
                        metadata: ej,
                        isTrial: eC,
                        disablePurchase: eF
                    })
                })
            ]
        })
    );
}
