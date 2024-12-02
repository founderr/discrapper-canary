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
        { selectedSkuId: eA, selectedPlan: eN, setSelectedSkuId: eC, setSelectedPlanId: eR } = (0, b.Z)(),
        [eO, eD] = (0, l.Wu)([h.Z], () => [h.Z.purchaseTokenAuthState, h.Z.purchaseTokenHash]),
        [eL, ex] = (0, l.Wu)([w.Z], () => [w.Z.browserCheckoutState, w.Z.loadId]),
        [ew, eP] = i.useState(null),
        [eM, ek] = i.useState(null),
        [eU, eB] = i.useState(null),
        [eG, eZ] = i.useState(null),
        [eF, eV] = i.useState(null),
        [ej, eH] = i.useState(void 0),
        [eY, eW] = i.useState([]),
        eK = i.useMemo(() => null == eN || (0, I.PV)(eN.id), [eN]),
        ez = i.useRef(null != B ? B.planId : null);
    i.useEffect(() => {
        null == ez.current && null != B && (ez.current = B.planId);
    }, [B]);
    let {
            skusById: eq,
            hasFetchedSkus: eQ,
            skuPricePreviewsById: eX,
            previewErrorsById: eJ
        } = (0, D.Z)({
            applicationId: null != W ? W : M.CL,
            skuIDs: F,
            currentPaymentSourceId: ee,
            isGift: V
        }),
        e$ = null != eA ? eJ[eA] : null,
        e0 = i.useMemo(() => {
            if (null == eA) return null;
            let e = eX[eA];
            return null == e ? null : e[null != ee ? ee : m.c];
        }, [eA, eX, ee]),
        { data: e1 } = (0, f.IX)(W),
        e2 = p.Sb.useSetting(),
        e3 = (0, l.e7)([u.Z], () => u.Z.getFetchState());
    i.useEffect(() => {
        null != e1 && (0, v.yE)(e1.flags, P.udG.EMBEDDED) && e2 && null == e3 && (0, c.$h)();
    }, [e1, e2, e3]);
    let e4 = (0, v.yE)(null !== (t = null == e1 ? void 0 : e1.flags) && void 0 !== t ? t : 0, P.udG.EMBEDDED) && (0, v.yE)(null !== (n = null == e1 ? void 0 : e1.flags) && void 0 !== n ? n : 0, P.udG.EMBEDDED_IAP),
        e6 = (0, l.e7)([d.ZP], () =>
            Array.from(d.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === W;
            })
        ),
        e5 = null == e6 ? void 0 : e6.compositeInstanceId,
        e7 = (0, l.e7)([g.Z], () => (null != eA ? g.Z.getForSKU(eA) : null), [eA]),
        e8 = eq[null != eA ? eA : ''],
        [e9, te] = i.useState(null),
        tt = null !== (E = null == B ? void 0 : B.inReverseTrial) && void 0 !== E && E && !V;
    return (0, r.jsx)(k.Provider, {
        value: {
            stripe: q,
            contextMetadata: ey,
            blockedPayments: Q,
            activeSubscription: B,
            hasFetchedSubscriptions: X,
            hasFetchedSubscriptionPlans: ei,
            updatedSubscription: eG,
            setUpdatedSubscription: eZ,
            subscriptionMetadataRequest: eF,
            setSubscriptionMetadataRequest: eV,
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
            purchasePreviewError: e$,
            purchaseErrorBlockRef: eb,
            purchaseTokenAuthState: eO,
            purchaseTokenHash: eD,
            browserCheckoutState: eL,
            browserCheckoutStateLoadId: ex,
            bodyNode: ew,
            setBodyNode: eP,
            footerNode: eM,
            setFooterNode: ek,
            modalOverlayNode: eU,
            setModalOverlayNode: eB,
            selectedSkuId: eA,
            selectedSku: e8,
            selectedStoreListing: e7,
            selectedPlan: eN,
            setSelectedSkuId: eC,
            setSelectedPlanId: eR,
            readySlideId: ej,
            setReadySlideId: eH,
            defaultPlanId: H,
            isPremium: eK,
            startedPaymentFlowWithPaymentSourcesRef: er,
            startingPremiumSubscriptionPlanIdRef: ez,
            hasFetchedSkus: eQ,
            skusById: eq,
            skuPricePreviewsById: eX,
            selectedSkuPricePreview: e0,
            application: e1,
            purchaseType: Y,
            isEmbeddedIAP: e4,
            activitySessionId: e5,
            devShelfFetchState: e3,
            entitlementsGranted: eY,
            setEntitlementsGranted: eW,
            referralCode: K,
            invoicePreview: e9,
            setInvoicePreview: te,
            repeatPurchase: z,
            inReverseTrial: tt
        },
        children: (0, r.jsx)(a.Elements, {
            options: P.OBo,
            stripe: q,
            children: j
        })
    });
}
