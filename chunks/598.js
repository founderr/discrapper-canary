"use strict";
n.r(t), n.d(t, {
  PaymentContext: function() {
    return g
  },
  PaymentContextProvider: function() {
    return H
  },
  useForwardedPaymentContext: function() {
    return K
  },
  usePaymentContext: function() {
    return D
  }
}), n("47120"), n("789020");
var r = n("735250"),
  u = n("470079"),
  i = n("160612"),
  l = n("207561"),
  a = n("153832"),
  o = n("442837"),
  s = n("317381"),
  E = n("964517"),
  S = n("211242"),
  _ = n("270144"),
  d = n("882712"),
  c = n("855775"),
  A = n("551428"),
  f = n("975104"),
  T = n("630388"),
  I = n("74538"),
  C = n("960048"),
  P = n("735521"),
  R = n("583046"),
  N = n("897829"),
  M = n("74179"),
  U = n("896246"),
  h = n("320317"),
  p = n("994427"),
  O = n("814076"),
  L = n("712297"),
  m = n("585686"),
  F = n("771206"),
  y = n("362755"),
  G = n("981631"),
  B = n("474936");
let [g, D, K] = (0, f.default)();

function H(e) {
  var t, n;
  let {
    loadId: f,
    activeSubscription: D,
    stepConfigs: K,
    breadcrumbs: H = [],
    skuIDs: v,
    isGift: b = !1,
    children: w,
    defaultPlanId: Y,
    purchaseType: W = G.PurchaseTypes.SUBSCRIPTION,
    applicationId: V,
    referralCode: k
  } = e, Z = (0, F.default)(), x = (0, S.useBlockedPaymentsConfig)(), J = (0, N.default)(), {
    paymentSources: Q,
    hasPaymentSources: X,
    paymentSourceId: j,
    setPaymentSourceId: z,
    hasFetchedPaymentSources: q
  } = (0, M.default)({
    isGift: b,
    activeSubscription: D
  }), $ = u.useRef(X), {
    hasFetchedSubscriptionPlans: ee,
    priceOptions: et,
    setCurrency: en,
    currencyLoading: er,
    currencies: eu
  } = (0, R.default)({
    activeSubscription: D,
    skuIDs: v,
    paymentSourceId: j,
    isGift: b
  }), ei = (0, O.default)(), [el, ea] = u.useState(!1), {
    step: eo,
    setStep: es,
    steps: eE,
    breadcrumbsData: eS
  } = (0, m.default)({
    stepConfigs: K,
    breadcrumbs: H
  }), [e_, ed] = (0, p.default)(eo), {
    paymentError: ec,
    paymentAuthenticationState: eA
  } = (0, U.default)(), {
    purchaseError: ef,
    purchaseErrorBlockRef: eT,
    setPurchaseError: eI
  } = (0, h.default)(), eC = (0, l.useLazyValue)(() => {
    let e = null != f ? f : (0, a.v4)();
    return C.default.addBreadcrumb({
      message: "Checkout session ID: ".concat(e)
    }), {
      loadId: e,
      startTime: Date.now()
    }
  }), {
    selectedSkuId: eP,
    selectedPlan: eR,
    setSelectedSkuId: eN,
    setSelectedPlanId: eM
  } = (0, P.default)(), [eU, eh] = (0, o.useStateFromStoresArray)([d.default], () => [d.default.purchaseTokenAuthState, d.default.purchaseTokenHash]), [ep, eO] = (0, o.useStateFromStoresArray)([y.default], () => [y.default.browserCheckoutState, y.default.loadId]), [eL, em] = u.useState(null), [eF, ey] = u.useState(null), [eG, eB] = u.useState(null), [eg, eD] = u.useState(null), [eK, eH] = u.useState(null), [ev, eb] = u.useState(void 0), [ew, eY] = u.useState([]), eW = u.useMemo(() => null == eR || (0, I.isPremiumSubscriptionPlan)(eR.id), [eR]), eV = u.useRef(null != D ? D.planId : null);
  u.useEffect(() => {
    null == eV.current && null != D && (eV.current = D.planId)
  }, [D]);
  let {
    skusById: ek,
    hasFetchedSkus: eZ,
    skuPricePreviewsById: ex,
    previewErrorsById: eJ
  } = (0, L.default)({
    applicationId: null != V ? V : B.PREMIUM_SUBSCRIPTION_APPLICATION,
    skuIDs: v,
    currentPaymentSourceId: j,
    isGift: b
  }), eQ = null != eP ? eJ[eP] : null, eX = u.useMemo(() => {
    if (null == eP) return null;
    let e = ex[eP];
    return null == e ? null : e[null != j ? j : c.NO_PAYMENT_SOURCE]
  }, [eP, ex, j]), ej = (0, _.useApplication)(V), ez = (0, T.hasFlag)(null !== (t = null == ej ? void 0 : ej.flags) && void 0 !== t ? t : 0, G.ApplicationFlags.EMBEDDED) && (0, T.hasFlag)(null !== (n = null == ej ? void 0 : ej.flags) && void 0 !== n ? n : 0, G.ApplicationFlags.EMBEDDED_IAP), eq = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(e => {
    let {
      applicationId: t
    } = e;
    return t === V
  })), e$ = (0, E.default)(eq), e0 = (0, o.useStateFromStores)([A.default], () => null != eP ? A.default.getForSKU(eP) : null, [eP]), e1 = ek[null != eP ? eP : ""], [e4, e7] = u.useState(null), [e2, e5] = u.useState(null);
  return (0, r.jsx)(g.Provider, {
    value: {
      stripe: Z,
      contextMetadata: eC,
      blockedPayments: x,
      activeSubscription: D,
      hasFetchedSubscriptions: J,
      hasFetchedSubscriptionPlans: ee,
      updatedSubscription: eg,
      setUpdatedSubscription: eD,
      subscriptionMetadataRequest: eK,
      setSubscriptionMetadataRequest: eH,
      hasFetchedPaymentSources: q,
      paymentSources: Q,
      hasPaymentSources: X,
      paymentSourceId: j,
      setPaymentSourceId: z,
      priceOptions: et,
      setCurrency: en,
      currencyLoading: er,
      currencies: eu,
      ...ei,
      hasAcceptedTerms: el,
      setHasAcceptedTerms: ea,
      step: eo,
      setStep: es,
      steps: eE,
      stepConfigs: K,
      breadcrumbs: eS,
      purchaseState: e_,
      setPurchaseState: ed,
      paymentAuthenticationState: eA,
      paymentError: ec,
      purchaseError: ef,
      setPurchaseError: eI,
      purchasePreviewError: eQ,
      purchaseErrorBlockRef: eT,
      purchaseTokenAuthState: eU,
      purchaseTokenHash: eh,
      browserCheckoutState: ep,
      browserCheckoutStateLoadId: eO,
      bodyNode: eL,
      setBodyNode: em,
      footerNode: eF,
      setFooterNode: ey,
      modalOverlayNode: eG,
      setModalOverlayNode: eB,
      selectedSkuId: eP,
      selectedSku: e1,
      selectedStoreListing: e0,
      selectedPlan: eR,
      setSelectedSkuId: eN,
      setSelectedPlanId: eM,
      readySlideId: ev,
      setReadySlideId: eb,
      defaultPlanId: Y,
      isPremium: eW,
      startedPaymentFlowWithPaymentSourcesRef: $,
      startingPremiumSubscriptionPlanIdRef: eV,
      hasFetchedSkus: eZ,
      skusById: ek,
      skuPricePreviewsById: ex,
      selectedSkuPricePreview: eX,
      application: ej,
      purchaseType: W,
      isEmbeddedIAP: ez,
      activitySessionId: e$,
      entitlementsGranted: ew,
      setEntitlementsGranted: eY,
      referralCode: k,
      invoicePreview: e4,
      setInvoicePreview: e7,
      setAnnualDiscountInvoicePreview: e5,
      annualDiscountInvoicePreview: e2
    },
    children: (0, r.jsx)(i.Elements, {
      options: G.StripeElementsOptions,
      stripe: Z,
      children: w
    })
  })
}