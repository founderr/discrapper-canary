n.r(t),
    n.d(t, {
        PaymentContext: function () {
            return k;
        },
        PaymentContextProvider: function () {
            return G;
        },
        useForwardedPaymentContext: function () {
            return B;
        },
        usePaymentContext: function () {
            return U;
        }
    }),
    n(47120),
    n(789020);
var r = n(200651),
    i = n(192379),
    a = n(734530),
    s = n(75124),
    o = n(772848),
    l = n(442837),
    u = n(115130),
    c = n(566620),
    d = n(317381),
    f = n(728345),
    _ = n(211242),
    p = n(695346),
    h = n(882712),
    m = n(855775),
    g = n(551428),
    E = n(975104),
    v = n(630388),
    I = n(74538),
    T = n(960048),
    b = n(735521),
    S = n(583046),
    y = n(897829),
    A = n(74179),
    N = n(896246),
    C = n(320317),
    R = n(994427),
    O = n(814076),
    D = n(712297),
    L = n(585686),
    x = n(771206),
    w = n(362755),
    P = n(981631),
    M = n(474936);
let [k, U, B] = (0, E.Z)();
function G(e) {
    var t, n, E;
    let { loadId: U, activeSubscription: B, stepConfigs: G, breadcrumbs: Z = [], skuIDs: F, isGift: V = !1, children: j, defaultPlanId: H, purchaseType: Y = P.GZQ.SUBSCRIPTION, applicationId: W, referralCode: K, repeatPurchase: z = !1 } = e,
        q = (0, x.Z)(),
        Q = (0, _.Q)(),
        X = (0, y.Z)(),
        {
            paymentSources: J,
            hasPaymentSources: $,
            paymentSourceId: ee,
            setPaymentSourceId: et,
            hasFetchedPaymentSources: en
        } = (0, A.Z)({
            isGift: V,
            activeSubscription: B
        }),
        er = i.useRef($),
        {
            hasFetchedSubscriptionPlans: ei,
            priceOptions: ea,
            setCurrency: es,
            currencyLoading: eo,
            currencies: el
        } = (0, S.Z)({
            activeSubscription: B,
            skuIDs: F,
            paymentSourceId: ee,
            isGift: V
        }),
        eu = (0, O.Z)(),
        [ec, ed] = i.useState(!1),
        {
            step: ef,
            setStep: e_,
            steps: ep,
            breadcrumbsData: eh,
            previousStepRef: em
        } = (0, L.Z)({
            stepConfigs: G,
            breadcrumbs: Z
        }),
        [eg, eE] = (0, R.Z)(ef),
        { paymentError: ev, paymentAuthenticationState: eI } = (0, N.Z)(),
        { purchaseError: eT, purchaseErrorBlockRef: eb, setPurchaseError: eS } = (0, C.Z)(),
        ey = (0, s.Z)(() => {
            let e = null != U ? U : (0, o.Z)();
            return (
                T.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eA, selectedPlan: eN, selectedPlanNotification: eC, setSelectedSkuId: eR, setSelectedPlanId: eO, setSelectedPlanNotification: eD } = (0, b.Z)(),
        [eL, ex] = (0, l.Wu)([h.Z], () => [h.Z.purchaseTokenAuthState, h.Z.purchaseTokenHash]),
        [ew, eP] = (0, l.Wu)([w.Z], () => [w.Z.browserCheckoutState, w.Z.loadId]),
        [eM, ek] = i.useState(null),
        [eU, eB] = i.useState(null),
        [eG, eZ] = i.useState(null),
        [eF, eV] = i.useState(null),
        [ej, eH] = i.useState(null),
        [eY, eW] = i.useState(void 0),
        [eK, ez] = i.useState([]),
        eq = i.useMemo(() => null == eN || (0, I.PV)(eN.id), [eN]),
        eQ = i.useRef(null != B ? B.planId : null);
    i.useEffect(() => {
        null == eQ.current && null != B && (eQ.current = B.planId);
    }, [B]);
    let {
            skusById: eX,
            hasFetchedSkus: eJ,
            skuPricePreviewsById: e$,
            previewErrorsById: e0
        } = (0, D.Z)({
            applicationId: null != W ? W : M.CL,
            skuIDs: F,
            currentPaymentSourceId: ee,
            isGift: V
        }),
        e1 = null != eA ? e0[eA] : null,
        e2 = i.useMemo(() => {
            if (null == eA) return null;
            let e = e$[eA];
            return null == e ? null : e[null != ee ? ee : m.c];
        }, [eA, e$, ee]),
        { data: e3 } = (0, f.IX)(W),
        e4 = p.Sb.useSetting(),
        e6 = (0, l.e7)([u.Z], () => u.Z.getFetchState());
    i.useEffect(() => {
        null != e3 && (0, v.yE)(e3.flags, P.udG.EMBEDDED) && e4 && null == e6 && (0, c.$h)();
    }, [e3, e4, e6]);
    let e5 = (0, v.yE)(null !== (t = null == e3 ? void 0 : e3.flags) && void 0 !== t ? t : 0, P.udG.EMBEDDED) && (0, v.yE)(null !== (n = null == e3 ? void 0 : e3.flags) && void 0 !== n ? n : 0, P.udG.EMBEDDED_IAP),
        e7 = (0, l.e7)([d.ZP], () =>
            Array.from(d.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === W;
            })
        ),
        e8 = null == e7 ? void 0 : e7.compositeInstanceId,
        e9 = (0, l.e7)([g.Z], () => (null != eA ? g.Z.getForSKU(eA) : null), [eA]),
        te = eX[null != eA ? eA : ''],
        [tt, tn] = i.useState(null),
        tr = null !== (E = null == B ? void 0 : B.inReverseTrial) && void 0 !== E && E && !V;
    return (0, r.jsx)(k.Provider, {
        value: {
            stripe: q,
            contextMetadata: ey,
            blockedPayments: Q,
            activeSubscription: B,
            hasFetchedSubscriptions: X,
            hasFetchedSubscriptionPlans: ei,
            updatedSubscription: eF,
            setUpdatedSubscription: eV,
            subscriptionMetadataRequest: ej,
            setSubscriptionMetadataRequest: eH,
            hasFetchedPaymentSources: en,
            paymentSources: J,
            hasPaymentSources: $,
            paymentSourceId: ee,
            setPaymentSourceId: et,
            priceOptions: ea,
            setCurrency: es,
            currencyLoading: eo,
            currencies: el,
            ...eu,
            hasAcceptedTerms: ec,
            setHasAcceptedTerms: ed,
            step: ef,
            setStep: e_,
            steps: ep,
            stepConfigs: G,
            breadcrumbs: eh,
            previousStepRef: em,
            purchaseState: eg,
            setPurchaseState: eE,
            paymentAuthenticationState: eI,
            paymentError: ev,
            purchaseError: eT,
            setPurchaseError: eS,
            purchasePreviewError: e1,
            purchaseErrorBlockRef: eb,
            purchaseTokenAuthState: eL,
            purchaseTokenHash: ex,
            browserCheckoutState: ew,
            browserCheckoutStateLoadId: eP,
            bodyNode: eM,
            setBodyNode: ek,
            footerNode: eU,
            setFooterNode: eB,
            modalOverlayNode: eG,
            setModalOverlayNode: eZ,
            selectedSkuId: eA,
            selectedSku: te,
            selectedStoreListing: e9,
            selectedPlan: eN,
            setSelectedSkuId: eR,
            setSelectedPlanId: eO,
            selectedPlanNotification: eC,
            setSelectedPlanNotification: eD,
            readySlideId: eY,
            setReadySlideId: eW,
            defaultPlanId: H,
            isPremium: eq,
            startedPaymentFlowWithPaymentSourcesRef: er,
            startingPremiumSubscriptionPlanIdRef: eQ,
            hasFetchedSkus: eJ,
            skusById: eX,
            skuPricePreviewsById: e$,
            selectedSkuPricePreview: e2,
            application: e3,
            purchaseType: Y,
            isEmbeddedIAP: e5,
            activitySessionId: e8,
            devShelfFetchState: e6,
            entitlementsGranted: eK,
            setEntitlementsGranted: ez,
            referralCode: K,
            invoicePreview: tt,
            setInvoicePreview: tn,
            repeatPurchase: z,
            inReverseTrial: tr
        },
        children: (0, r.jsx)(a.Elements, {
            options: P.OBo,
            stripe: q,
            children: j
        })
    });
}
