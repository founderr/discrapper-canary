n.r(t),
    n.d(t, {
        PaymentContext: function () {
            return m;
        },
        PaymentContextProvider: function () {
            return w;
        },
        useForwardedPaymentContext: function () {
            return Y;
        },
        usePaymentContext: function () {
            return h;
        }
    }),
    n(47120),
    n(789020);
var E = n(200651),
    r = n(192379),
    u = n(734530),
    i = n(75124),
    S = n(772848),
    _ = n(442837),
    o = n(115130),
    A = n(566620),
    l = n(317381),
    a = n(728345),
    T = n(211242),
    I = n(695346),
    c = n(882712),
    R = n(855775),
    C = n(551428),
    N = n(975104),
    s = n(630388),
    M = n(74538),
    P = n(960048),
    U = n(735521),
    d = n(583046),
    O = n(897829),
    f = n(74179),
    L = n(896246),
    p = n(320317),
    G = n(994427),
    Z = n(814076),
    D = n(712297),
    B = n(585686),
    F = n(771206),
    K = n(362755),
    H = n(981631),
    y = n(474936);
let [m, h, Y] = (0, N.Z)();
function w(e) {
    var t, n, N;
    let { loadId: h, activeSubscription: Y, stepConfigs: w, breadcrumbs: W = [], skuIDs: g, isGift: V = !1, children: v, defaultPlanId: b, purchaseType: k = H.GZQ.SUBSCRIPTION, applicationId: Q, referralCode: X, repeatPurchase: J = !1 } = e,
        x = (0, F.Z)(),
        j = (0, T.Q)(),
        q = (0, O.Z)(),
        {
            paymentSources: z,
            hasPaymentSources: $,
            paymentSourceId: ee,
            setPaymentSourceId: et,
            hasFetchedPaymentSources: en
        } = (0, f.Z)({
            isGift: V,
            activeSubscription: Y
        }),
        eE = r.useRef($),
        {
            hasFetchedSubscriptionPlans: er,
            priceOptions: eu,
            setCurrency: ei,
            currencyLoading: eS,
            currencies: e_
        } = (0, d.Z)({
            activeSubscription: Y,
            skuIDs: g,
            paymentSourceId: ee,
            isGift: V
        }),
        eo = (0, Z.Z)(),
        [eA, el] = r.useState(!1),
        {
            step: ea,
            setStep: eT,
            steps: eI,
            breadcrumbsData: ec,
            previousStepRef: eR
        } = (0, B.Z)({
            stepConfigs: w,
            breadcrumbs: W
        }),
        [eC, eN] = (0, G.Z)(ea),
        { paymentError: es, paymentAuthenticationState: eM } = (0, L.Z)(),
        { purchaseError: eP, purchaseErrorBlockRef: eU, setPurchaseError: ed } = (0, p.Z)(),
        eO = (0, i.Z)(() => {
            let e = null != h ? h : (0, S.Z)();
            return (
                P.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: ef, selectedPlan: eL, setSelectedSkuId: ep, setSelectedPlanId: eG } = (0, U.Z)(),
        [eZ, eD] = (0, _.Wu)([c.Z], () => [c.Z.purchaseTokenAuthState, c.Z.purchaseTokenHash]),
        [eB, eF] = (0, _.Wu)([K.Z], () => [K.Z.browserCheckoutState, K.Z.loadId]),
        [eK, eH] = r.useState(null),
        [ey, em] = r.useState(null),
        [eh, eY] = r.useState(null),
        [ew, eW] = r.useState(null),
        [eg, eV] = r.useState(null),
        [ev, eb] = r.useState(void 0),
        [ek, eQ] = r.useState([]),
        eX = r.useMemo(() => null == eL || (0, M.PV)(eL.id), [eL]),
        eJ = r.useRef(null != Y ? Y.planId : null);
    r.useEffect(() => {
        null == eJ.current && null != Y && (eJ.current = Y.planId);
    }, [Y]);
    let {
            skusById: ex,
            hasFetchedSkus: ej,
            skuPricePreviewsById: eq,
            previewErrorsById: ez
        } = (0, D.Z)({
            applicationId: null != Q ? Q : y.CL,
            skuIDs: g,
            currentPaymentSourceId: ee,
            isGift: V
        }),
        e$ = null != ef ? ez[ef] : null,
        e0 = r.useMemo(() => {
            if (null == ef) return null;
            let e = eq[ef];
            return null == e ? null : e[null != ee ? ee : R.c];
        }, [ef, eq, ee]),
        { data: e1 } = (0, a.IX)(Q),
        e2 = I.Sb.useSetting(),
        e7 = (0, _.e7)([o.Z], () => o.Z.getFetchState());
    r.useEffect(() => {
        null != e1 && (0, s.yE)(e1.flags, H.udG.EMBEDDED) && e2 && null == e7 && (0, A.$h)();
    }, [e1, e2, e7]);
    let e4 = (0, s.yE)(null !== (t = null == e1 ? void 0 : e1.flags) && void 0 !== t ? t : 0, H.udG.EMBEDDED) && (0, s.yE)(null !== (n = null == e1 ? void 0 : e1.flags) && void 0 !== n ? n : 0, H.udG.EMBEDDED_IAP),
        e9 = (0, _.e7)([l.ZP], () =>
            Array.from(l.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === Q;
            })
        ),
        e5 = null == e9 ? void 0 : e9.compositeInstanceId,
        e8 = (0, _.e7)([C.Z], () => (null != ef ? C.Z.getForSKU(ef) : null), [ef]),
        e3 = ex[null != ef ? ef : ''],
        [e6, te] = r.useState(null),
        tt = null !== (N = null == Y ? void 0 : Y.inReverseTrial) && void 0 !== N && N && !V;
    return (0, E.jsx)(m.Provider, {
        value: {
            stripe: x,
            contextMetadata: eO,
            blockedPayments: j,
            activeSubscription: Y,
            hasFetchedSubscriptions: q,
            hasFetchedSubscriptionPlans: er,
            updatedSubscription: ew,
            setUpdatedSubscription: eW,
            subscriptionMetadataRequest: eg,
            setSubscriptionMetadataRequest: eV,
            hasFetchedPaymentSources: en,
            paymentSources: z,
            hasPaymentSources: $,
            paymentSourceId: ee,
            setPaymentSourceId: et,
            priceOptions: eu,
            setCurrency: ei,
            currencyLoading: eS,
            currencies: e_,
            ...eo,
            hasAcceptedTerms: eA,
            setHasAcceptedTerms: el,
            step: ea,
            setStep: eT,
            steps: eI,
            stepConfigs: w,
            breadcrumbs: ec,
            previousStepRef: eR,
            purchaseState: eC,
            setPurchaseState: eN,
            paymentAuthenticationState: eM,
            paymentError: es,
            purchaseError: eP,
            setPurchaseError: ed,
            purchasePreviewError: e$,
            purchaseErrorBlockRef: eU,
            purchaseTokenAuthState: eZ,
            purchaseTokenHash: eD,
            browserCheckoutState: eB,
            browserCheckoutStateLoadId: eF,
            bodyNode: eK,
            setBodyNode: eH,
            footerNode: ey,
            setFooterNode: em,
            modalOverlayNode: eh,
            setModalOverlayNode: eY,
            selectedSkuId: ef,
            selectedSku: e3,
            selectedStoreListing: e8,
            selectedPlan: eL,
            setSelectedSkuId: ep,
            setSelectedPlanId: eG,
            readySlideId: ev,
            setReadySlideId: eb,
            defaultPlanId: b,
            isPremium: eX,
            startedPaymentFlowWithPaymentSourcesRef: eE,
            startingPremiumSubscriptionPlanIdRef: eJ,
            hasFetchedSkus: ej,
            skusById: ex,
            skuPricePreviewsById: eq,
            selectedSkuPricePreview: e0,
            application: e1,
            purchaseType: k,
            isEmbeddedIAP: e4,
            activitySessionId: e5,
            devShelfFetchState: e7,
            entitlementsGranted: ek,
            setEntitlementsGranted: eQ,
            referralCode: X,
            invoicePreview: e6,
            setInvoicePreview: te,
            repeatPurchase: J,
            inReverseTrial: tt
        },
        children: (0, E.jsx)(u.Elements, {
            options: H.OBo,
            stripe: x,
            children: v
        })
    });
}
