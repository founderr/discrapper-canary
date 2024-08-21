n.r(t),
    n.d(t, {
        PaymentContext: function () {
            return F;
        },
        PaymentContextProvider: function () {
            return H;
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
    R = n(960048),
    C = n(735521),
    N = n(583046),
    M = n(897829),
    P = n(74179),
    f = n(896246),
    U = n(320317),
    L = n(994427),
    O = n(814076),
    h = n(712297),
    p = n(585686),
    m = n(771206),
    G = n(362755),
    D = n(981631),
    Z = n(474936);
let [F, B, K] = (0, T.Z)();
function H(e) {
    var t, n, T;
    let { loadId: B, activeSubscription: K, stepConfigs: H, breadcrumbs: g = [], skuIDs: y, isGift: v = !1, children: Y, defaultPlanId: w, purchaseType: b = D.GZQ.SUBSCRIPTION, applicationId: W, referralCode: V, repeatPurchase: k = !1 } = e,
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
            skuIDs: y,
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
            stepConfigs: H,
            breadcrumbs: g
        }),
        [ec, eT] = (0, L.Z)(ea),
        { paymentError: eI, paymentAuthenticationState: ed } = (0, f.Z)(),
        { purchaseError: eR, purchaseErrorBlockRef: eC, setPurchaseError: eN } = (0, U.Z)(),
        eM = (0, l.Z)(() => {
            let e = null != B ? B : (0, o.Z)();
            return (
                R.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eP, selectedPlan: ef, setSelectedSkuId: eU, setSelectedPlanId: eL } = (0, C.Z)(),
        [eO, eh] = (0, E.Wu)([s.Z], () => [s.Z.purchaseTokenAuthState, s.Z.purchaseTokenHash]),
        [ep, em] = (0, E.Wu)([G.Z], () => [G.Z.browserCheckoutState, G.Z.loadId]),
        [eG, eD] = i.useState(null),
        [eZ, eF] = i.useState(null),
        [eB, eK] = i.useState(null),
        [eH, eg] = i.useState(null),
        [ey, ev] = i.useState(null),
        [eY, ew] = i.useState(void 0),
        [eb, eW] = i.useState([]),
        eV = i.useMemo(() => null == ef || (0, d.PV)(ef.id), [ef]),
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
            applicationId: null != W ? W : Z.RQ,
            skuIDs: y,
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
            updatedSubscription: eH,
            setUpdatedSubscription: eg,
            subscriptionMetadataRequest: ey,
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
            stepConfigs: H,
            breadcrumbs: es,
            previousStepRef: eA,
            purchaseState: ec,
            setPurchaseState: eT,
            paymentAuthenticationState: ed,
            paymentError: eI,
            purchaseError: eR,
            setPurchaseError: eN,
            purchasePreviewError: ej,
            purchaseErrorBlockRef: eC,
            purchaseTokenAuthState: eO,
            purchaseTokenHash: eh,
            browserCheckoutState: ep,
            browserCheckoutStateLoadId: em,
            bodyNode: eG,
            setBodyNode: eD,
            footerNode: eZ,
            setFooterNode: eF,
            modalOverlayNode: eB,
            setModalOverlayNode: eK,
            selectedSkuId: eP,
            selectedSku: e4,
            selectedStoreListing: e7,
            selectedPlan: ef,
            setSelectedSkuId: eU,
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
