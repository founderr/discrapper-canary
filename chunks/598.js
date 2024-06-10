"use strict";
n.r(t), n.d(t, {
  PaymentContext: function() {
    return D
  },
  PaymentContextProvider: function() {
    return H
  },
  useForwardedPaymentContext: function() {
    return K
  },
  usePaymentContext: function() {
    return g
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
  T = n("975104"),
  f = n("630388"),
  I = n("74538"),
  C = n("960048"),
  P = n("735521"),
  R = n("583046"),
  N = n("897829"),
  M = n("74179"),
  U = n("896246"),
  h = n("320317"),
  p = n("994427"),
  L = n("814076"),
  O = n("712297"),
  m = n("585686"),
  F = n("771206"),
  G = n("362755"),
  y = n("981631"),
  B = n("474936");
let [D, g, K] = (0, T.default)();

function H(e) {
  var t, n;
  let {
    loadId: T,
    activeSubscription: g,
    stepConfigs: K,
    breadcrumbs: H = [],
    skuIDs: v,
    isGift: b = !1,
    children: Y,
    defaultPlanId: w,
    purchaseType: W = y.PurchaseTypes.SUBSCRIPTION,
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
    activeSubscription: g
  }), $ = u.useRef(X), {
    hasFetchedSubscriptionPlans: ee,
    priceOptions: et,
    setCurrency: en,
    currencyLoading: er,
    currencies: eu
  } = (0, R.default)({
    activeSubscription: g,
    skuIDs: v,
    paymentSourceId: j,
    isGift: b
  }), ei = (0, L.default)(), [el, ea] = u.useState(!1), {
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
    purchaseError: eT,
    purchaseErrorBlockRef: ef,
    setPurchaseError: eI
  } = (0, h.default)(), eC = (0, l.useLazyValue)(() => {
    let e = null != T ? T : (0, a.v4)();
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
  } = (0, P.default)(), [eU, eh] = (0, o.useStateFromStoresArray)([d.default], () => [d.default.purchaseTokenAuthState, d.default.purchaseTokenHash]), [ep, eL] = (0, o.useStateFromStoresArray)([G.default], () => [G.default.browserCheckoutState, G.default.loadId]), [eO, em] = u.useState(null), [eF, eG] = u.useState(null), [ey, eB] = u.useState(null), [eD, eg] = u.useState(null), [eK, eH] = u.useState(null), [ev, eb] = u.useState(void 0), [eY, ew] = u.useState([]), eW = u.useMemo(() => null == eR || (0, I.isPremiumSubscriptionPlan)(eR.id), [eR]), eV = u.useRef(null != g ? g.planId : null);
  u.useEffect(() => {
    null == eV.current && null != g && (eV.current = g.planId)
  }, [g]);
  let {
    skusById: ek,
    hasFetchedSkus: eZ,
    skuPricePreviewsById: ex,
    previewErrorsById: eJ
  } = (0, O.default)({
    applicationId: null != V ? V : B.PREMIUM_SUBSCRIPTION_APPLICATION,
    skuIDs: v,
    currentPaymentSourceId: j,
    isGift: b
  }), eQ = null != eP ? eJ[eP] : null, eX = u.useMemo(() => {
    if (null == eP) return null;
    let e = ex[eP];
    return null == e ? null : e[null != j ? j : c.NO_PAYMENT_SOURCE]
  }, [eP, ex, j]), ej = (0, _.useApplication)(V), ez = (0, f.hasFlag)(null !== (t = null == ej ? void 0 : ej.flags) && void 0 !== t ? t : 0, y.ApplicationFlags.EMBEDDED) && (0, f.hasFlag)(null !== (n = null == ej ? void 0 : ej.flags) && void 0 !== n ? n : 0, y.ApplicationFlags.EMBEDDED_IAP), eq = (0, o.useStateFromStores)([s.default], () => Array.from(s.default.getSelfEmbeddedActivities().values()).find(e => {
    let {
      applicationId: t
    } = e;
    return t === V
  })), e$ = (0, E.default)(eq), e0 = (0, o.useStateFromStores)([A.default], () => null != eP ? A.default.getForSKU(eP) : null, [eP]), e1 = ek[null != eP ? eP : ""], [e4, e7] = u.useState(null), [e2, e5] = u.useState(null);
  return (0, r.jsx)(D.Provider, {
    value: {
      stripe: Z,
      contextMetadata: eC,
      blockedPayments: x,
      activeSubscription: g,
      hasFetchedSubscriptions: J,
      hasFetchedSubscriptionPlans: ee,
      updatedSubscription: eD,
      setUpdatedSubscription: eg,
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
      purchaseError: eT,
      setPurchaseError: eI,
      purchasePreviewError: eQ,
      purchaseErrorBlockRef: ef,
      purchaseTokenAuthState: eU,
      purchaseTokenHash: eh,
      browserCheckoutState: ep,
      browserCheckoutStateLoadId: eL,
      bodyNode: eO,
      setBodyNode: em,
      footerNode: eF,
      setFooterNode: eG,
      modalOverlayNode: ey,
      setModalOverlayNode: eB,
      selectedSkuId: eP,
      selectedSku: e1,
      selectedStoreListing: e0,
      selectedPlan: eR,
      setSelectedSkuId: eN,
      setSelectedPlanId: eM,
      readySlideId: ev,
      setReadySlideId: eb,
      defaultPlanId: w,
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
      entitlementsGranted: eY,
      setEntitlementsGranted: ew,
      referralCode: k,
      invoicePreview: e4,
      setInvoicePreview: e7,
      setAnnualDiscountInvoicePreview: e5,
      annualDiscountInvoicePreview: e2
    },
    children: (0, r.jsx)(i.Elements, {
      options: y.StripeElementsOptions,
      stripe: Z,
      children: Y
    })
  })
}