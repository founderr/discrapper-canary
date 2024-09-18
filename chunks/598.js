n.r(t),
    n.d(t, {
        PaymentContext: function () {
            return K;
        },
        PaymentContextProvider: function () {
            return m;
        },
        useForwardedPaymentContext: function () {
            return y;
        },
        usePaymentContext: function () {
            return H;
        }
    }),
    n(47120),
    n(789020);
var E = n(735250),
    r = n(470079),
    i = n(160612),
    u = n(77866),
    S = n(772848),
    _ = n(442837),
    o = n(317381),
    A = n(728345),
    l = n(211242),
    a = n(882712),
    T = n(855775),
    I = n(551428),
    c = n(975104),
    R = n(630388),
    C = n(74538),
    N = n(960048),
    s = n(735521),
    M = n(583046),
    P = n(897829),
    U = n(74179),
    d = n(896246),
    O = n(320317),
    f = n(994427),
    L = n(814076),
    p = n(712297),
    G = n(585686),
    Z = n(771206),
    D = n(362755),
    B = n(981631),
    F = n(474936);
let [K, H, y] = (0, c.Z)();
function m(e) {
    var t, n, c;
    let { loadId: H, activeSubscription: y, stepConfigs: m, breadcrumbs: Y = [], skuIDs: h, isGift: w = !1, children: W, defaultPlanId: g, purchaseType: V = B.GZQ.SUBSCRIPTION, applicationId: v, referralCode: b, repeatPurchase: k = !1 } = e,
        J = (0, Z.Z)(),
        X = (0, l.Q)(),
        Q = (0, P.Z)(),
        {
            paymentSources: x,
            hasPaymentSources: j,
            paymentSourceId: q,
            setPaymentSourceId: z,
            hasFetchedPaymentSources: $
        } = (0, U.Z)({
            isGift: w,
            activeSubscription: y
        }),
        ee = r.useRef(j),
        {
            hasFetchedSubscriptionPlans: et,
            priceOptions: en,
            setCurrency: eE,
            currencyLoading: er,
            currencies: ei
        } = (0, M.Z)({
            activeSubscription: y,
            skuIDs: h,
            paymentSourceId: q,
            isGift: w
        }),
        eu = (0, L.Z)(),
        [eS, e_] = r.useState(!1),
        {
            step: eo,
            setStep: eA,
            steps: el,
            breadcrumbsData: ea,
            previousStepRef: eT
        } = (0, G.Z)({
            stepConfigs: m,
            breadcrumbs: Y
        }),
        [eI, ec] = (0, f.Z)(eo),
        { paymentError: eR, paymentAuthenticationState: eC } = (0, d.Z)(),
        { purchaseError: eN, purchaseErrorBlockRef: es, setPurchaseError: eM } = (0, O.Z)(),
        eP = (0, u.Z)(() => {
            let e = null != H ? H : (0, S.Z)();
            return (
                N.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eU, selectedPlan: ed, setSelectedSkuId: eO, setSelectedPlanId: ef } = (0, s.Z)(),
        [eL, ep] = (0, _.Wu)([a.Z], () => [a.Z.purchaseTokenAuthState, a.Z.purchaseTokenHash]),
        [eG, eZ] = (0, _.Wu)([D.Z], () => [D.Z.browserCheckoutState, D.Z.loadId]),
        [eD, eB] = r.useState(null),
        [eF, eK] = r.useState(null),
        [eH, ey] = r.useState(null),
        [em, eY] = r.useState(null),
        [eh, ew] = r.useState(null),
        [eW, eg] = r.useState(void 0),
        [eV, ev] = r.useState([]),
        eb = r.useMemo(() => null == ed || (0, C.PV)(ed.id), [ed]),
        ek = r.useRef(null != y ? y.planId : null);
    r.useEffect(() => {
        null == ek.current && null != y && (ek.current = y.planId);
    }, [y]);
    let {
            skusById: eJ,
            hasFetchedSkus: eX,
            skuPricePreviewsById: eQ,
            previewErrorsById: ex
        } = (0, p.Z)({
            applicationId: null != v ? v : F.CL,
            skuIDs: h,
            currentPaymentSourceId: q,
            isGift: w
        }),
        ej = null != eU ? ex[eU] : null,
        eq = r.useMemo(() => {
            if (null == eU) return null;
            let e = eQ[eU];
            return null == e ? null : e[null != q ? q : T.c];
        }, [eU, eQ, q]),
        { data: ez } = (0, A.I)(v),
        e$ = (0, R.yE)(null !== (t = null == ez ? void 0 : ez.flags) && void 0 !== t ? t : 0, B.udG.EMBEDDED) && (0, R.yE)(null !== (n = null == ez ? void 0 : ez.flags) && void 0 !== n ? n : 0, B.udG.EMBEDDED_IAP),
        e0 = (0, _.e7)([o.ZP], () =>
            Array.from(o.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === v;
            })
        ),
        e1 = null == e0 ? void 0 : e0.compositeInstanceId,
        e7 = (0, _.e7)([I.Z], () => (null != eU ? I.Z.getForSKU(eU) : null), [eU]),
        e4 = eJ[null != eU ? eU : ''],
        [e2, e8] = r.useState(null),
        e5 = null !== (c = null == y ? void 0 : y.inReverseTrial) && void 0 !== c && c && !w;
    return (0, E.jsx)(K.Provider, {
        value: {
            stripe: J,
            contextMetadata: eP,
            blockedPayments: X,
            activeSubscription: y,
            hasFetchedSubscriptions: Q,
            hasFetchedSubscriptionPlans: et,
            updatedSubscription: em,
            setUpdatedSubscription: eY,
            subscriptionMetadataRequest: eh,
            setSubscriptionMetadataRequest: ew,
            hasFetchedPaymentSources: $,
            paymentSources: x,
            hasPaymentSources: j,
            paymentSourceId: q,
            setPaymentSourceId: z,
            priceOptions: en,
            setCurrency: eE,
            currencyLoading: er,
            currencies: ei,
            ...eu,
            hasAcceptedTerms: eS,
            setHasAcceptedTerms: e_,
            step: eo,
            setStep: eA,
            steps: el,
            stepConfigs: m,
            breadcrumbs: ea,
            previousStepRef: eT,
            purchaseState: eI,
            setPurchaseState: ec,
            paymentAuthenticationState: eC,
            paymentError: eR,
            purchaseError: eN,
            setPurchaseError: eM,
            purchasePreviewError: ej,
            purchaseErrorBlockRef: es,
            purchaseTokenAuthState: eL,
            purchaseTokenHash: ep,
            browserCheckoutState: eG,
            browserCheckoutStateLoadId: eZ,
            bodyNode: eD,
            setBodyNode: eB,
            footerNode: eF,
            setFooterNode: eK,
            modalOverlayNode: eH,
            setModalOverlayNode: ey,
            selectedSkuId: eU,
            selectedSku: e4,
            selectedStoreListing: e7,
            selectedPlan: ed,
            setSelectedSkuId: eO,
            setSelectedPlanId: ef,
            readySlideId: eW,
            setReadySlideId: eg,
            defaultPlanId: g,
            isPremium: eb,
            startedPaymentFlowWithPaymentSourcesRef: ee,
            startingPremiumSubscriptionPlanIdRef: ek,
            hasFetchedSkus: eX,
            skusById: eJ,
            skuPricePreviewsById: eQ,
            selectedSkuPricePreview: eq,
            application: ez,
            purchaseType: V,
            isEmbeddedIAP: e$,
            activitySessionId: e1,
            entitlementsGranted: eV,
            setEntitlementsGranted: ev,
            referralCode: b,
            invoicePreview: e2,
            setInvoicePreview: e8,
            repeatPurchase: k,
            inReverseTrial: e5
        },
        children: (0, E.jsx)(i.Elements, {
            options: B.OBo,
            stripe: J,
            children: W
        })
    });
}
