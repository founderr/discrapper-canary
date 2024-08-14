n.r(t), n.d(t, {
  PaymentContext: function() {
return B;
  },
  PaymentContextProvider: function() {
return g;
  },
  useForwardedPaymentContext: function() {
return y;
  },
  usePaymentContext: function() {
return K;
  }
}), n(47120), n(789020);
var r = n(735250),
  i = n(470079),
  u = n(160612),
  l = n(77866),
  o = n(772848),
  E = n(442837),
  a = n(317381),
  _ = n(964517),
  S = n(211242),
  s = n(270144),
  A = n(882712),
  c = n(855775),
  T = n(551428),
  I = n(975104),
  d = n(630388),
  R = n(74538),
  C = n(960048),
  N = n(735521),
  P = n(583046),
  M = n(897829),
  f = n(74179),
  U = n(896246),
  L = n(320317),
  O = n(994427),
  h = n(814076),
  p = n(712297),
  m = n(585686),
  Z = n(771206),
  G = n(362755),
  D = n(981631),
  F = n(474936);
let [B, K, y] = (0, I.Z)();

function g(e) {
  var t, n, I;
  let {
loadId: K,
activeSubscription: y,
stepConfigs: g,
breadcrumbs: H = [],
skuIDs: v,
isGift: w = !1,
children: Y,
defaultPlanId: b,
purchaseType: W = D.GZQ.SUBSCRIPTION,
applicationId: V,
referralCode: k,
repeatPurchase: x = !1
  } = e, Q = (0, Z.Z)(), X = (0, S.Q)(), J = (0, M.Z)(), {
paymentSources: j,
hasPaymentSources: q,
paymentSourceId: z,
setPaymentSourceId: $,
hasFetchedPaymentSources: ee
  } = (0, f.Z)({
isGift: w,
activeSubscription: y
  }), et = i.useRef(q), {
hasFetchedSubscriptionPlans: en,
priceOptions: er,
setCurrency: ei,
currencyLoading: eu,
currencies: el
  } = (0, P.Z)({
activeSubscription: y,
skuIDs: v,
paymentSourceId: z,
isGift: w
  }), eo = (0, h.Z)(), [eE, ea] = i.useState(!1), {
step: e_,
setStep: eS,
steps: es,
breadcrumbsData: eA,
previousStepRef: ec
  } = (0, m.Z)({
stepConfigs: g,
breadcrumbs: H
  }), [eT, eI] = (0, O.Z)(e_), {
paymentError: ed,
paymentAuthenticationState: eR
  } = (0, U.Z)(), {
purchaseError: eC,
purchaseErrorBlockRef: eN,
setPurchaseError: eP
  } = (0, L.Z)(), eM = (0, l.Z)(() => {
let e = null != K ? K : (0, o.Z)();
return C.Z.addBreadcrumb({
  message: 'Checkout session ID: '.concat(e)
}), {
  loadId: e,
  startTime: Date.now()
};
  }), {
selectedSkuId: ef,
selectedPlan: eU,
setSelectedSkuId: eL,
setSelectedPlanId: eO
  } = (0, N.Z)(), [eh, ep] = (0, E.Wu)([A.Z], () => [
A.Z.purchaseTokenAuthState,
A.Z.purchaseTokenHash
  ]), [em, eZ] = (0, E.Wu)([G.Z], () => [
G.Z.browserCheckoutState,
G.Z.loadId
  ]), [eG, eD] = i.useState(null), [eF, eB] = i.useState(null), [eK, ey] = i.useState(null), [eg, eH] = i.useState(null), [ev, ew] = i.useState(null), [eY, eb] = i.useState(void 0), [eW, eV] = i.useState([]), ek = i.useMemo(() => null == eU || (0, R.PV)(eU.id), [eU]), ex = i.useRef(null != y ? y.planId : null);
  i.useEffect(() => {
null == ex.current && null != y && (ex.current = y.planId);
  }, [y]);
  let {
skusById: eQ,
hasFetchedSkus: eX,
skuPricePreviewsById: eJ,
previewErrorsById: ej
  } = (0, p.Z)({
applicationId: null != V ? V : F.RQ,
skuIDs: v,
currentPaymentSourceId: z,
isGift: w
  }), eq = null != ef ? ej[ef] : null, ez = i.useMemo(() => {
if (null == ef)
  return null;
let e = eJ[ef];
return null == e ? null : e[null != z ? z : c.c];
  }, [
ef,
eJ,
z
  ]), e$ = (0, s.IX)(V), e0 = (0, d.yE)(null !== (t = null == e$ ? void 0 : e$.flags) && void 0 !== t ? t : 0, D.udG.EMBEDDED) && (0, d.yE)(null !== (n = null == e$ ? void 0 : e$.flags) && void 0 !== n ? n : 0, D.udG.EMBEDDED_IAP), e1 = (0, E.e7)([a.ZP], () => Array.from(a.ZP.getSelfEmbeddedActivities().values()).find(e => {
let {
  applicationId: t
} = e;
return t === V;
  })), e7 = (0, _.Z)(e1), e4 = (0, E.e7)([T.Z], () => null != ef ? T.Z.getForSKU(ef) : null, [ef]), e2 = eQ[null != ef ? ef : ''], [e5, e8] = i.useState(null), e9 = null !== (I = null == y ? void 0 : y.inReverseTrial) && void 0 !== I && I && !w;
  return (0, r.jsx)(B.Provider, {
value: {
  stripe: Q,
  contextMetadata: eM,
  blockedPayments: X,
  activeSubscription: y,
  hasFetchedSubscriptions: J,
  hasFetchedSubscriptionPlans: en,
  updatedSubscription: eg,
  setUpdatedSubscription: eH,
  subscriptionMetadataRequest: ev,
  setSubscriptionMetadataRequest: ew,
  hasFetchedPaymentSources: ee,
  paymentSources: j,
  hasPaymentSources: q,
  paymentSourceId: z,
  setPaymentSourceId: $,
  priceOptions: er,
  setCurrency: ei,
  currencyLoading: eu,
  currencies: el,
  ...eo,
  hasAcceptedTerms: eE,
  setHasAcceptedTerms: ea,
  step: e_,
  setStep: eS,
  steps: es,
  stepConfigs: g,
  breadcrumbs: eA,
  previousStepRef: ec,
  purchaseState: eT,
  setPurchaseState: eI,
  paymentAuthenticationState: eR,
  paymentError: ed,
  purchaseError: eC,
  setPurchaseError: eP,
  purchasePreviewError: eq,
  purchaseErrorBlockRef: eN,
  purchaseTokenAuthState: eh,
  purchaseTokenHash: ep,
  browserCheckoutState: em,
  browserCheckoutStateLoadId: eZ,
  bodyNode: eG,
  setBodyNode: eD,
  footerNode: eF,
  setFooterNode: eB,
  modalOverlayNode: eK,
  setModalOverlayNode: ey,
  selectedSkuId: ef,
  selectedSku: e2,
  selectedStoreListing: e4,
  selectedPlan: eU,
  setSelectedSkuId: eL,
  setSelectedPlanId: eO,
  readySlideId: eY,
  setReadySlideId: eb,
  defaultPlanId: b,
  isPremium: ek,
  startedPaymentFlowWithPaymentSourcesRef: et,
  startingPremiumSubscriptionPlanIdRef: ex,
  hasFetchedSkus: eX,
  skusById: eQ,
  skuPricePreviewsById: eJ,
  selectedSkuPricePreview: ez,
  application: e$,
  purchaseType: W,
  isEmbeddedIAP: e0,
  activitySessionId: e7,
  entitlementsGranted: eW,
  setEntitlementsGranted: eV,
  referralCode: k,
  invoicePreview: e5,
  setInvoicePreview: e8,
  repeatPurchase: x,
  inReverseTrial: e9
},
children: (0, r.jsx)(u.Elements, {
  options: D.OBo,
  stripe: Q,
  children: Y
})
  });
}