r.r(n),
    r.d(n, {
        PaymentContext: function () {
            return G;
        },
        PaymentContextProvider: function () {
            return V;
        },
        useForwardedPaymentContext: function () {
            return F;
        },
        usePaymentContext: function () {
            return Z;
        }
    });
var i = r(47120);
var a = r(789020);
var s = r(200651),
    o = r(192379),
    l = r(734530);
var u = r(75124),
    c = r(772848),
    d = r(442837),
    f = r(115130),
    _ = r(566620),
    h = r(317381),
    p = r(728345),
    m = r(211242),
    g = r(695346),
    E = r(882712),
    v = r(855775),
    I = r(551428),
    T = r(975104),
    b = r(630388),
    y = r(74538),
    S = r(960048),
    A = r(735521),
    N = r(583046),
    C = r(897829),
    R = r(74179),
    O = r(896246),
    D = r(320317),
    L = r(994427),
    x = r(814076),
    w = r(712297),
    P = r(585686),
    M = r(771206),
    k = r(362755),
    U = r(981631),
    B = r(474936);
let [G, Z, F] = (0, T.Z)();
function V(e) {
    var n, r, i;
    let { loadId: a, activeSubscription: T, stepConfigs: Z, breadcrumbs: F = [], skuIDs: V, isGift: j = !1, children: H, defaultPlanId: Y, purchaseType: W = U.GZQ.SUBSCRIPTION, applicationId: K, referralCode: z, repeatPurchase: q = !1 } = e,
        Q = (0, M.Z)(),
        X = (0, m.Q)(),
        J = (0, C.Z)(),
        {
            paymentSources: $,
            hasPaymentSources: ee,
            paymentSourceId: et,
            setPaymentSourceId: en,
            hasFetchedPaymentSources: er
        } = (0, R.Z)({
            isGift: j,
            activeSubscription: T
        }),
        ei = o.useRef(ee),
        {
            hasFetchedSubscriptionPlans: ea,
            priceOptions: es,
            setCurrency: eo,
            currencyLoading: el,
            currencies: eu
        } = (0, N.Z)({
            activeSubscription: T,
            skuIDs: V,
            paymentSourceId: et,
            isGift: j
        }),
        ec = (0, x.Z)(),
        [ed, ef] = o.useState(!1),
        {
            step: e_,
            setStep: eh,
            steps: ep,
            breadcrumbsData: em,
            previousStepRef: eg
        } = (0, P.Z)({
            stepConfigs: Z,
            breadcrumbs: F
        }),
        [eE, ev] = (0, L.Z)(e_),
        { paymentError: eI, paymentAuthenticationState: eT } = (0, O.Z)(),
        { purchaseError: eb, purchaseErrorBlockRef: ey, setPurchaseError: eS } = (0, D.Z)(),
        eA = (0, u.Z)(() => {
            let e = null != a ? a : (0, c.Z)();
            return (
                S.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eN, selectedPlan: eC, selectedPlanNotification: eR, setSelectedSkuId: eO, setSelectedPlanId: eD, setSelectedPlanNotification: eL } = (0, A.Z)(),
        [ex, ew] = (0, d.Wu)([E.Z], () => [E.Z.purchaseTokenAuthState, E.Z.purchaseTokenHash]),
        [eP, eM] = (0, d.Wu)([k.Z], () => [k.Z.browserCheckoutState, k.Z.loadId]),
        [ek, eU] = o.useState(null),
        [eB, eG] = o.useState(null),
        [eZ, eF] = o.useState(null),
        [eV, ej] = o.useState(null),
        [eH, eY] = o.useState(null),
        [eW, eK] = o.useState(void 0),
        [ez, eq] = o.useState([]),
        eQ = o.useMemo(() => null == eC || (0, y.PV)(eC.id), [eC]),
        eX = o.useRef(null != T ? T.planId : null);
    o.useEffect(() => {
        null == eX.current && null != T && (eX.current = T.planId);
    }, [T]);
    let {
            skusById: eJ,
            hasFetchedSkus: e$,
            skuPricePreviewsById: e0,
            previewErrorsById: e1
        } = (0, w.Z)({
            applicationId: null != K ? K : B.CL,
            skuIDs: V,
            currentPaymentSourceId: et,
            isGift: j
        }),
        e2 = null != eN ? e1[eN] : null,
        e3 = o.useMemo(() => {
            if (null == eN) return null;
            let e = e0[eN];
            return null == e ? null : e[null != et ? et : v.c];
        }, [eN, e0, et]),
        { data: e4 } = (0, p.IX)(K),
        e6 = g.Sb.useSetting(),
        e5 = (0, d.e7)([f.Z], () => f.Z.getFetchState());
    o.useEffect(() => {
        null != e4 && (0, b.yE)(e4.flags, U.udG.EMBEDDED) && e6 && null == e5 && (0, _.$h)();
    }, [e4, e6, e5]);
    let e7 = (0, b.yE)(null !== (n = null == e4 ? void 0 : e4.flags) && void 0 !== n ? n : 0, U.udG.EMBEDDED) && (0, b.yE)(null !== (r = null == e4 ? void 0 : e4.flags) && void 0 !== r ? r : 0, U.udG.EMBEDDED_IAP),
        e8 = (0, d.e7)([h.ZP], () =>
            Array.from(h.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: n } = e;
                return n === K;
            })
        ),
        e9 = null == e8 ? void 0 : e8.compositeInstanceId,
        te = (0, d.e7)([I.Z], () => (null != eN ? I.Z.getForSKU(eN) : null), [eN]),
        tt = eJ[null != eN ? eN : ''],
        [tn, tr] = o.useState(null),
        ti = null !== (i = null == T ? void 0 : T.inReverseTrial) && void 0 !== i && i && !j;
    return (0, s.jsx)(G.Provider, {
        value: {
            stripe: Q,
            contextMetadata: eA,
            blockedPayments: X,
            activeSubscription: T,
            hasFetchedSubscriptions: J,
            hasFetchedSubscriptionPlans: ea,
            updatedSubscription: eV,
            setUpdatedSubscription: ej,
            subscriptionMetadataRequest: eH,
            setSubscriptionMetadataRequest: eY,
            hasFetchedPaymentSources: er,
            paymentSources: $,
            hasPaymentSources: ee,
            paymentSourceId: et,
            setPaymentSourceId: en,
            priceOptions: es,
            setCurrency: eo,
            currencyLoading: el,
            currencies: eu,
            ...ec,
            hasAcceptedTerms: ed,
            setHasAcceptedTerms: ef,
            step: e_,
            setStep: eh,
            steps: ep,
            stepConfigs: Z,
            breadcrumbs: em,
            previousStepRef: eg,
            purchaseState: eE,
            setPurchaseState: ev,
            paymentAuthenticationState: eT,
            paymentError: eI,
            purchaseError: eb,
            setPurchaseError: eS,
            purchasePreviewError: e2,
            purchaseErrorBlockRef: ey,
            purchaseTokenAuthState: ex,
            purchaseTokenHash: ew,
            browserCheckoutState: eP,
            browserCheckoutStateLoadId: eM,
            bodyNode: ek,
            setBodyNode: eU,
            footerNode: eB,
            setFooterNode: eG,
            modalOverlayNode: eZ,
            setModalOverlayNode: eF,
            selectedSkuId: eN,
            selectedSku: tt,
            selectedStoreListing: te,
            selectedPlan: eC,
            setSelectedSkuId: eO,
            setSelectedPlanId: eD,
            selectedPlanNotification: eR,
            setSelectedPlanNotification: eL,
            readySlideId: eW,
            setReadySlideId: eK,
            defaultPlanId: Y,
            isPremium: eQ,
            startedPaymentFlowWithPaymentSourcesRef: ei,
            startingPremiumSubscriptionPlanIdRef: eX,
            hasFetchedSkus: e$,
            skusById: eJ,
            skuPricePreviewsById: e0,
            selectedSkuPricePreview: e3,
            application: e4,
            purchaseType: W,
            isEmbeddedIAP: e7,
            activitySessionId: e9,
            devShelfFetchState: e5,
            entitlementsGranted: ez,
            setEntitlementsGranted: eq,
            referralCode: z,
            invoicePreview: tn,
            setInvoicePreview: tr,
            repeatPurchase: q,
            inReverseTrial: ti
        },
        children: (0, s.jsx)(l.Elements, {
            options: U.OBo,
            stripe: Q,
            children: H
        })
    });
}
