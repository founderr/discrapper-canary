n.r(t),
    n.d(t, {
        PaymentContext: function () {
            return k;
        },
        PaymentContextProvider: function () {
            return Z;
        },
        useForwardedPaymentContext: function () {
            return F;
        },
        usePaymentContext: function () {
            return B;
        }
    });
var r = n(47120);
var i = n(789020);
var a = n(735250),
    o = n(470079),
    s = n(160612);
var l = n(77866),
    u = n(772848),
    c = n(442837),
    d = n(115130),
    _ = n(566620),
    E = n(317381),
    f = n(728345),
    h = n(211242),
    p = n(695346),
    m = n(882712),
    I = n(855775),
    T = n(551428),
    g = n(975104),
    S = n(630388),
    A = n(74538),
    v = n(960048),
    N = n(735521),
    O = n(583046),
    R = n(897829),
    C = n(74179),
    y = n(896246),
    L = n(320317),
    b = n(994427),
    D = n(814076),
    M = n(712297),
    P = n(585686),
    U = n(771206),
    w = n(362755),
    x = n(981631),
    G = n(474936);
let [k, B, F] = (0, g.Z)();
function Z(e) {
    var t, n, r;
    let { loadId: i, activeSubscription: g, stepConfigs: B, breadcrumbs: F = [], skuIDs: Z, isGift: V = !1, children: H, defaultPlanId: Y, purchaseType: j = x.GZQ.SUBSCRIPTION, applicationId: W, referralCode: K, repeatPurchase: z = !1 } = e,
        q = (0, U.Z)(),
        Q = (0, h.Q)(),
        X = (0, R.Z)(),
        {
            paymentSources: $,
            hasPaymentSources: J,
            paymentSourceId: ee,
            setPaymentSourceId: et,
            hasFetchedPaymentSources: en
        } = (0, C.Z)({
            isGift: V,
            activeSubscription: g
        }),
        er = o.useRef(J),
        {
            hasFetchedSubscriptionPlans: ei,
            priceOptions: ea,
            setCurrency: eo,
            currencyLoading: es,
            currencies: el
        } = (0, O.Z)({
            activeSubscription: g,
            skuIDs: Z,
            paymentSourceId: ee,
            isGift: V
        }),
        eu = (0, D.Z)(),
        [ec, ed] = o.useState(!1),
        {
            step: e_,
            setStep: eE,
            steps: ef,
            breadcrumbsData: eh,
            previousStepRef: ep
        } = (0, P.Z)({
            stepConfigs: B,
            breadcrumbs: F
        }),
        [em, eI] = (0, b.Z)(e_),
        { paymentError: eT, paymentAuthenticationState: eg } = (0, y.Z)(),
        { purchaseError: eS, purchaseErrorBlockRef: eA, setPurchaseError: ev } = (0, L.Z)(),
        eN = (0, l.Z)(() => {
            let e = null != i ? i : (0, u.Z)();
            return (
                v.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }),
                {
                    loadId: e,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: eO, selectedPlan: eR, setSelectedSkuId: eC, setSelectedPlanId: ey } = (0, N.Z)(),
        [eL, eb] = (0, c.Wu)([m.Z], () => [m.Z.purchaseTokenAuthState, m.Z.purchaseTokenHash]),
        [eD, eM] = (0, c.Wu)([w.Z], () => [w.Z.browserCheckoutState, w.Z.loadId]),
        [eP, eU] = o.useState(null),
        [ew, ex] = o.useState(null),
        [eG, ek] = o.useState(null),
        [eB, eF] = o.useState(null),
        [eZ, eV] = o.useState(null),
        [eH, eY] = o.useState(void 0),
        [ej, eW] = o.useState([]),
        eK = o.useMemo(() => null == eR || (0, A.PV)(eR.id), [eR]),
        ez = o.useRef(null != g ? g.planId : null);
    o.useEffect(() => {
        null == ez.current && null != g && (ez.current = g.planId);
    }, [g]);
    let {
            skusById: eq,
            hasFetchedSkus: eQ,
            skuPricePreviewsById: eX,
            previewErrorsById: e$
        } = (0, M.Z)({
            applicationId: null != W ? W : G.CL,
            skuIDs: Z,
            currentPaymentSourceId: ee,
            isGift: V
        }),
        eJ = null != eO ? e$[eO] : null,
        e0 = o.useMemo(() => {
            if (null == eO) return null;
            let e = eX[eO];
            return null == e ? null : e[null != ee ? ee : I.c];
        }, [eO, eX, ee]),
        { data: e1 } = (0, f.IX)(W),
        e2 = p.Sb.useSetting(),
        e3 = (0, c.e7)([d.Z], () => d.Z.getFetchState());
    o.useEffect(() => {
        null != e1 && (0, S.yE)(e1.flags, x.udG.EMBEDDED) && e2 && null == e3 && (0, _.$h)();
    }, [e1, e2, e3]);
    let e4 = (0, S.yE)(null !== (t = null == e1 ? void 0 : e1.flags) && void 0 !== t ? t : 0, x.udG.EMBEDDED) && (0, S.yE)(null !== (n = null == e1 ? void 0 : e1.flags) && void 0 !== n ? n : 0, x.udG.EMBEDDED_IAP),
        e5 = (0, c.e7)([E.ZP], () =>
            Array.from(E.ZP.getSelfEmbeddedActivities().values()).find((e) => {
                let { applicationId: t } = e;
                return t === W;
            })
        ),
        e6 = null == e5 ? void 0 : e5.compositeInstanceId,
        e7 = (0, c.e7)([T.Z], () => (null != eO ? T.Z.getForSKU(eO) : null), [eO]),
        e8 = eq[null != eO ? eO : ''],
        [e9, te] = o.useState(null),
        tt = null !== (r = null == g ? void 0 : g.inReverseTrial) && void 0 !== r && r && !V;
    return (0, a.jsx)(k.Provider, {
        value: {
            stripe: q,
            contextMetadata: eN,
            blockedPayments: Q,
            activeSubscription: g,
            hasFetchedSubscriptions: X,
            hasFetchedSubscriptionPlans: ei,
            updatedSubscription: eB,
            setUpdatedSubscription: eF,
            subscriptionMetadataRequest: eZ,
            setSubscriptionMetadataRequest: eV,
            hasFetchedPaymentSources: en,
            paymentSources: $,
            hasPaymentSources: J,
            paymentSourceId: ee,
            setPaymentSourceId: et,
            priceOptions: ea,
            setCurrency: eo,
            currencyLoading: es,
            currencies: el,
            ...eu,
            hasAcceptedTerms: ec,
            setHasAcceptedTerms: ed,
            step: e_,
            setStep: eE,
            steps: ef,
            stepConfigs: B,
            breadcrumbs: eh,
            previousStepRef: ep,
            purchaseState: em,
            setPurchaseState: eI,
            paymentAuthenticationState: eg,
            paymentError: eT,
            purchaseError: eS,
            setPurchaseError: ev,
            purchasePreviewError: eJ,
            purchaseErrorBlockRef: eA,
            purchaseTokenAuthState: eL,
            purchaseTokenHash: eb,
            browserCheckoutState: eD,
            browserCheckoutStateLoadId: eM,
            bodyNode: eP,
            setBodyNode: eU,
            footerNode: ew,
            setFooterNode: ex,
            modalOverlayNode: eG,
            setModalOverlayNode: ek,
            selectedSkuId: eO,
            selectedSku: e8,
            selectedStoreListing: e7,
            selectedPlan: eR,
            setSelectedSkuId: eC,
            setSelectedPlanId: ey,
            readySlideId: eH,
            setReadySlideId: eY,
            defaultPlanId: Y,
            isPremium: eK,
            startedPaymentFlowWithPaymentSourcesRef: er,
            startingPremiumSubscriptionPlanIdRef: ez,
            hasFetchedSkus: eQ,
            skusById: eq,
            skuPricePreviewsById: eX,
            selectedSkuPricePreview: e0,
            application: e1,
            purchaseType: j,
            isEmbeddedIAP: e4,
            activitySessionId: e6,
            devShelfFetchState: e3,
            entitlementsGranted: ej,
            setEntitlementsGranted: eW,
            referralCode: K,
            invoicePreview: e9,
            setInvoicePreview: te,
            repeatPurchase: z,
            inReverseTrial: tt
        },
        children: (0, a.jsx)(s.Elements, {
            options: x.OBo,
            stripe: q,
            children: H
        })
    });
}
