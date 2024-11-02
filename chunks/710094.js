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
    o = t(104494),
    u = t(639119),
    d = t(716534),
    m = t(664891),
    p = t(911367),
    x = t(669079),
    h = t(987209),
    f = t(598),
    v = t(409813),
    g = t(809144),
    S = t(698708),
    j = t(614223),
    E = t(481595),
    I = t(51499),
    y = t(678334),
    P = t(614277),
    T = t(474936),
    N = t(231338),
    b = t(388032);
function _(e) {
    var n, t;
    let r,
        { handleStepChange: _, trialId: C, trialFooterMessageOverride: A, reviewWarningMessage: R, planGroup: O, openInvoiceId: Z, analyticsData: M, analyticsLocation: w, referralTrialOfferId: D, initialPlanId: L, subscriptionTier: F, handleClose: k } = e,
        { activeSubscription: B, setUpdatedSubscription: U, contextMetadata: G, currencies: H, paymentSourceId: W, paymentSources: V, priceOptions: Y, purchaseError: z, purchaseTokenAuthState: K, selectedPlan: X, selectedSkuId: q, setCurrency: J, setPaymentSourceId: Q, setPurchaseState: $, setPurchaseError: ee, step: en, purchaseState: et, isPremium: ei, setHasAcceptedTerms: el, purchaseType: er, setEntitlementsGranted: es, startedPaymentFlowWithPaymentSourcesRef: ea, invoicePreview: ec, inReverseTrial: eo } = (0, f.usePaymentContext)(),
        { isGift: eu, giftMessage: ed, giftRecipient: em } = (0, h.wD)();
    s()(null != en, 'Step should be set');
    let ep = l.useRef(null),
        [ex, eh] = (0, a.Z)(!1, 500);
    (0, p.t)();
    let ef = null !== (t = null != C ? C : D) && void 0 !== t ? t : null,
        ev = null != ef && (!ei || T.nG[ef].skus.includes(q)) ? ef : null,
        eg = (0, u.N)(D),
        eS = (0, o.Ng)(),
        ej = { user_trial_offer_id: null == eg ? void 0 : eg.id };
    l.useEffect(() => {
        null != z && null != ep.current && ep.current.scrollIntoView({ behavior: 'smooth' });
    }, [z]);
    let eE = l.useCallback(
            (e, n) => {
                U(e),
                    null != n && es(n),
                    _(v.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [_, U, es]
        ),
        eI = null != W ? V[W] : null,
        ey = null != X && T.o4.has(X.id) && null != eI && !(0, c.aQ)(eI) ? Error(b.intl.string(b.t['2ik8io'])) : null,
        eP = l.useRef(null),
        [eT, eN] = l.useState(null),
        eb = !eu && null != eg && null != q && T.nG[eg.trial_id].skus.includes(q),
        e_ = null == eS ? void 0 : null === (n = eS.discount) || void 0 === n ? void 0 : n.plan_ids,
        eC = !eu && null != eS && null != e_ && null != X && e_.includes(X.id),
        eA = eu && (0, x.pO)(em),
        eR = null == L && null == F && er === N.GZ.SUBSCRIPTION,
        eO = (0, j.Kp)({
            isTrial: eb,
            isGift: eu,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: ea.current
        }),
        eZ = eu && er === N.GZ.ONE_TIME,
        eM = eZ || (eO ? eR && ei : ei),
        ew = l.useCallback(() => {
            if (eO) {
                _(v.h8.SKU_SELECT);
                return;
            }
            return eZ ? _(v.h8.GIFT_CUSTOMIZATION) : _(v.h8.PLAN_SELECT);
        }, [_, eO, eZ]),
        eD = !1;
    return (
        er === N.GZ.ONE_TIME
            ? (r = (0, i.jsx)(E.Z, {
                  hasLegalTermsFlash: ex,
                  legalTermsNodeRef: eP,
                  onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => _(v.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eD = eu ? null == ec : null != eI && er === N.GZ.SUBSCRIPTION && eb && !eI.canRedeemTrial()),
              null == B || eo || eu
                  ? (s()(null != X, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(d.Z, {
                        selectedPlanId: X.id,
                        paymentSources: V,
                        onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                        priceOptions: Y,
                        currencies: H,
                        onCurrencyChange: (e) => J(e),
                        handlePaymentSourceAdd: () => _(v.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eP,
                        hasLegalTermsFlash: ex,
                        trialId: ev,
                        trialFooterMessageOverride: A,
                        reviewWarningMessage: R,
                        purchaseState: et,
                        referralTrialOfferId: D,
                        isTrial: eb || (null != C && null != A),
                        isDiscount: eC,
                        handleClose: k
                    })))
                  : (s()(null != X, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(m.Z, {
                        premiumSubscription: B,
                        paymentSources: V,
                        priceOptions: Y,
                        onPaymentSourceChange: (e) => {
                            Q(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            _(v.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: X.id,
                        setHasAcceptedTerms: el,
                        legalTermsNodeRef: eP,
                        hasLegalTermsFlash: ex,
                        onInvoiceError: (e) => eN(e),
                        planGroup: O,
                        currencies: H,
                        onCurrencyChange: (e) => J(e),
                        hasOpenInvoice: null != Z,
                        purchaseState: et,
                        handleClose: k
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.P, { giftMessage: ed }),
                !eA && (0, i.jsx)(I.Z, { isEligibleForTrial: eb }),
                (0, i.jsxs)(P.C3, {
                    children: [(0, i.jsx)(S.Z, {}), r]
                }),
                (0, i.jsx)(P.O3, {
                    children: (0, i.jsx)(y.Z, {
                        premiumSubscription: null != B ? B : null,
                        setPurchaseState: $,
                        onBack: ew,
                        onNext: eE,
                        onPurchaseError: (e) => ee(e),
                        legalTermsNodeRef: eP,
                        flashLegalTerms: () => eh(!0),
                        invoiceError: eT,
                        planError: ey,
                        analyticsLocation: w,
                        baseAnalyticsData: M,
                        flowStartTime: G.startTime,
                        trialId: ev,
                        planGroup: O,
                        purchaseTokenAuthState: K,
                        openInvoiceId: Z,
                        backButtonEligible: eM,
                        metadata: ej,
                        isTrial: eb,
                        disablePurchase: eD
                    })
                })
            ]
        })
    );
}
