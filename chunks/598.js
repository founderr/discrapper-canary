n.r(t),
    n.d(t, {
        PaymentContext: function () {
            return F;
        },
        PaymentContextProvider: function () {
            return y;
        },
        useForwardedPaymentContext: function () {
            return K;
        },
        usePaymentContext: function () {
            return B;
        }
    }),
    n(47120),
    n(789020);
var r = n(735250),
    i = n(470079),
    u = n(160612),
    l = n(77866),
    o = n(772848),
    E = n(442837),
    a = n(317381),
    _ = n(211242),
    S = n(270144),
    s = n(882712),
    A = n(855775),
    c = n(551428),
    T = n(975104),
    I = n(630388),
    d = n(74538),
    C = n(960048),
    R = n(735521),
    N = n(583046),
    M = n(897829),
    P = n(74179),
    U = n(896246),
    f = n(320317),
    L = n(994427),
    O = n(814076),
    h = n(712297),
    p = n(585686),
    m = n(771206),
    Z = n(362755),
    D = n(981631),
    G = n(474936);
let [F, B, K] = (0, T.Z)();
function y(e) {
    var t, n, T;
    let { loadId: B, activeSubscription: K, stepConfigs: y, breadcrumbs: H = [], skuIDs: g, isGift: v = !1, children: Y, defaultPlanId: w, purchaseType: b = D.GZQ.SUBSCRIPTION, applicationId: W, referralCode: V, repeatPurchase: k = !1 } = e,
        x = (0, m.Z)(),
        X = (0, _.Q)(),
        J = (0, M.Z)(),
        {
            paymentSources: Q,
            hasPaymentSources: j,
            paymentSourceId: q,
            setPaymentSourceId: z,
            hasFetchedPaymentSources: $
        } = (0, P.Z)({
            isGift: v,
            activeSubscription: K
        }),
        ee = i.useRef(j),
        {
            hasFetchedSubscriptionPlans: et,
            priceOptions: en,
            setCurrency: er,
            currencyLoading: ei,
            currencies: eu
        } = (0, N.Z)({
            activeSubscription: K,
            skuIDs: g,
            paymentSourceId: q,
            isGift: v
        }),
        el = (0, O.Z)(),
        [eo, eE] = i.useState(!1),
        {
            step: ea,
            setStep: e_,
            steps: eS,
            breadcrumbsData: es,
            previousStepRef: eA
        } = (0, p.Z)({
            stepConfigs: y,
            breadcrumbs: H
        }),
        [ec, eT] = (0, L.Z)(ea),
        { paymentError: eI, paymentAuthenticationState: ed } = (0, U.Z)(),
        { purchaseError: eC, purchaseErrorBlockRef: eR, setPurchaseError: eN } = (0, f.Z)(),
        eM = (0, l.Z)(() => {
            let e = null != B ? B : (0, o.Z)();
            return (
                C.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eP, selectedPlan: eU, setSelectedSkuId: ef, setSelectedPlanId: eL } = (0, R.Z)(),
        [eO, eh] = (0, E.Wu)([s.Z], () => [s.Z.purchaseTokenAuthState, s.Z.purchaseTokenHash]),
        [ep, em] = (0, E.Wu)([Z.Z], () => [Z.Z.browserCheckoutState, Z.Z.loadId]),
        [eZ, eD] = i.useState(null),
        [eG, eF] = i.useState(null),
        [eB, eK] = i.useState(null),
        [ey, eH] = i.useState(null),
        [eg, ev] = i.useState(null),
        [eY, ew] = i.useState(void 0),
        [eb, eW] = i.useState([]),
        eV = i.useMemo(() => null == eU || (0, d.PV)(eU.id), [eU]),
        ek = i.useRef(null != K ? K.planId : null);
    i.useEffect(() => {
        null == ek.current && null != K && (ek.current = K.planId);
    }, [K]);
    let {
            skusById: ex,
            hasFetchedSkus: eX,
            skuPricePreviewsById: eJ,
            previewErrorsById: eQ
        } = (0, h.Z)({
            applicationId: null != W ? W : G.RQ,
            skuIDs: g,
            currentPaymentSourceId: q,
            isGift: v
        }),
        ej = null != eP ? eQ[eP] : null,
        eq = i.useMemo(() => {
            if (null == eP) return null;
            let e = eJ[eP];
            return null == e ? null : e[null != q ? q : A.c];
        }, [eP, eJ, q]),
        ez = (0, S.IX)(W),
        e$ = (0, I.yE)(null !== (t = null == ez ? void 0 : ez.flags) && void 0 !== t ? t : 0, D.udG.EMBEDDED) && (0, I.yE)(null !== (n = null == ez ? void 0 : ez.flags) && void 0 !== n ? n : 0, D.udG.EMBEDDED_IAP),
        e0 = (0, E.e7)([a.ZP], () =>
            Array.from(a.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === W;
            })
        ),
        e1 = null == e0 ? void 0 : e0.compositeInstanceId,
        e7 = (0, E.e7)([c.Z], () => (null != eP ? c.Z.getForSKU(eP) : null), [eP]),
        e4 = ex[null != eP ? eP : ''],
        [e2, e8] = i.useState(null),
        e5 = null !== (T = null == K ? void 0 : K.inReverseTrial) && void 0 !== T && T && !v;
    return (0, r.jsx)(F.Provider, {
        value: {
            stripe: x,
            contextMetadata: eM,
            blockedPayments: X,
            activeSubscription: K,
            hasFetchedSubscriptions: J,
            hasFetchedSubscriptionPlans: et,
            updatedSubscription: ey,
            setUpdatedSubscription: eH,
            subscriptionMetadataRequest: eg,
            setSubscriptionMetadataRequest: ev,
            hasFetchedPaymentSources: $,
            paymentSources: Q,
            hasPaymentSources: j,
            paymentSourceId: q,
            setPaymentSourceId: z,
            priceOptions: en,
            setCurrency: er,
            currencyLoading: ei,
            currencies: eu,
            ...el,
            hasAcceptedTerms: eo,
            setHasAcceptedTerms: eE,
            step: ea,
            setStep: e_,
            steps: eS,
            stepConfigs: y,
            breadcrumbs: es,
            previousStepRef: eA,
            purchaseState: ec,
            setPurchaseState: eT,
            paymentAuthenticationState: ed,
            paymentError: eI,
            purchaseError: eC,
            setPurchaseError: eN,
            purchasePreviewError: ej,
            purchaseErrorBlockRef: eR,
            purchaseTokenAuthState: eO,
            purchaseTokenHash: eh,
            browserCheckoutState: ep,
            browserCheckoutStateLoadId: em,
            bodyNode: eZ,
            setBodyNode: eD,
            footerNode: eG,
            setFooterNode: eF,
            modalOverlayNode: eB,
            setModalOverlayNode: eK,
            selectedSkuId: eP,
            selectedSku: e4,
            selectedStoreListing: e7,
            selectedPlan: eU,
            setSelectedSkuId: ef,
            setSelectedPlanId: eL,
            readySlideId: eY,
            setReadySlideId: ew,
            defaultPlanId: w,
            isPremium: eV,
            startedPaymentFlowWithPaymentSourcesRef: ee,
            startingPremiumSubscriptionPlanIdRef: ek,
            hasFetchedSkus: eX,
            skusById: ex,
            skuPricePreviewsById: eJ,
            selectedSkuPricePreview: eq,
            application: ez,
            purchaseType: b,
            isEmbeddedIAP: e$,
            activitySessionId: e1,
            entitlementsGranted: eb,
            setEntitlementsGranted: eW,
            referralCode: V,
            invoicePreview: e2,
            setInvoicePreview: e8,
            repeatPurchase: k,
            inReverseTrial: e5
        },
        children: (0, r.jsx)(u.Elements, {
            options: D.OBo,
            stripe: x,
            children: Y
        })
    });
}
