n.r(t), n.d(t, {
  PaymentContext: function() {
return B;
  },
  PaymentContextProvider: function() {
return H;
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
  C = n(74538),
  R = n(960048),
  N = n(735521),
  M = n(583046),
  P = n(897829),
  U = n(74179),
  f = n(896246),
  L = n(320317),
  O = n(994427),
  h = n(814076),
  p = n(712297),
  m = n(585686),
  Z = n(771206),
  D = n(362755),
  G = n(981631),
  F = n(474936);
let [B, K, y] = (0, I.Z)();

function H(e) {
  var t, n, I;
  let {
loadId: K,
activeSubscription: y,
stepConfigs: H,
breadcrumbs: g = [],
skuIDs: v,
isGift: Y = !1,
children: w,
defaultPlanId: b,
purchaseType: W = G.GZQ.SUBSCRIPTION,
applicationId: V,
referralCode: k,
repeatPurchase: x = !1
  } = e, X = (0, Z.Z)(), J = (0, S.Q)(), Q = (0, P.Z)(), {
paymentSources: j,
hasPaymentSources: q,
paymentSourceId: z,
setPaymentSourceId: $,
hasFetchedPaymentSources: ee
  } = (0, U.Z)({
isGift: Y,
activeSubscription: y
  }), et = i.useRef(q), {
hasFetchedSubscriptionPlans: en,
priceOptions: er,
setCurrency: ei,
currencyLoading: eu,
currencies: el
  } = (0, M.Z)({
activeSubscription: y,
skuIDs: v,
paymentSourceId: z,
isGift: Y
  }), eo = (0, h.Z)(), [eE, ea] = i.useState(!1), {
step: e_,
setStep: eS,
steps: es,
breadcrumbsData: eA,
previousStepRef: ec
  } = (0, m.Z)({
stepConfigs: H,
breadcrumbs: g
  }), [eT, eI] = (0, O.Z)(e_), {
paymentError: ed,
paymentAuthenticationState: eC
  } = (0, f.Z)(), {
purchaseError: eR,
purchaseErrorBlockRef: eN,
setPurchaseError: eM
  } = (0, L.Z)(), eP = (0, l.Z)(() => {
let e = null != K ? K : (0, o.Z)();
return R.Z.addBreadcrumb({
  message: 'Checkout session ID: '.concat(e)
}), {
  loadId: e,
  startTime: Date.now()
};
  }), {
selectedSkuId: eU,
selectedPlan: ef,
setSelectedSkuId: eL,
setSelectedPlanId: eO
  } = (0, N.Z)(), [eh, ep] = (0, E.Wu)([A.Z], () => [
A.Z.purchaseTokenAuthState,
A.Z.purchaseTokenHash
  ]), [em, eZ] = (0, E.Wu)([D.Z], () => [
D.Z.browserCheckoutState,
D.Z.loadId
  ]), [eD, eG] = i.useState(null), [eF, eB] = i.useState(null), [eK, ey] = i.useState(null), [eH, eg] = i.useState(null), [ev, eY] = i.useState(null), [ew, eb] = i.useState(void 0), [eW, eV] = i.useState([]), ek = i.useMemo(() => null == ef || (0, C.PV)(ef.id), [ef]), ex = i.useRef(null != y ? y.planId : null);
  i.useEffect(() => {
null == ex.current && null != y && (ex.current = y.planId);
  }, [y]);
  let {
skusById: eX,
hasFetchedSkus: eJ,
skuPricePreviewsById: eQ,
previewErrorsById: ej
  } = (0, p.Z)({
applicationId: null != V ? V : F.RQ,
skuIDs: v,
currentPaymentSourceId: z,
isGift: Y
  }), eq = null != eU ? ej[eU] : null, ez = i.useMemo(() => {
if (null == eU)
  return null;
let e = eQ[eU];
return null == e ? null : e[null != z ? z : c.c];
  }, [
eU,
eQ,
z
  ]), e$ = (0, s.IX)(V), e0 = (0, d.yE)(null !== (t = null == e$ ? void 0 : e$.flags) && void 0 !== t ? t : 0, G.udG.EMBEDDED) && (0, d.yE)(null !== (n = null == e$ ? void 0 : e$.flags) && void 0 !== n ? n : 0, G.udG.EMBEDDED_IAP), e1 = (0, E.e7)([a.ZP], () => Array.from(a.ZP.getSelfEmbeddedActivities().values()).find(e => {
let {
  applicationId: t
} = e;
return t === V;
  })), e7 = (0, _.Z)(e1), e4 = (0, E.e7)([T.Z], () => null != eU ? T.Z.getForSKU(eU) : null, [eU]), e2 = eX[null != eU ? eU : ''], [e5, e8] = i.useState(null), e9 = null !== (I = null == y ? void 0 : y.inReverseTrial) && void 0 !== I && I && !Y;
  return (0, r.jsx)(B.Provider, {
value: {
  stripe: X,
  contextMetadata: eP,
  blockedPayments: J,
  activeSubscription: y,
  hasFetchedSubscriptions: Q,
  hasFetchedSubscriptionPlans: en,
  updatedSubscription: eH,
  setUpdatedSubscription: eg,
  subscriptionMetadataRequest: ev,
  setSubscriptionMetadataRequest: eY,
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
  stepConfigs: H,
  breadcrumbs: eA,
  previousStepRef: ec,
  purchaseState: eT,
  setPurchaseState: eI,
  paymentAuthenticationState: eC,
  paymentError: ed,
  purchaseError: eR,
  setPurchaseError: eM,
  purchasePreviewError: eq,
  purchaseErrorBlockRef: eN,
  purchaseTokenAuthState: eh,
  purchaseTokenHash: ep,
  browserCheckoutState: em,
  browserCheckoutStateLoadId: eZ,
  bodyNode: eD,
  setBodyNode: eG,
  footerNode: eF,
  setFooterNode: eB,
  modalOverlayNode: eK,
  setModalOverlayNode: ey,
  selectedSkuId: eU,
  selectedSku: e2,
  selectedStoreListing: e4,
  selectedPlan: ef,
  setSelectedSkuId: eL,
  setSelectedPlanId: eO,
  readySlideId: ew,
  setReadySlideId: eb,
  defaultPlanId: b,
  isPremium: ek,
  startedPaymentFlowWithPaymentSourcesRef: et,
  startingPremiumSubscriptionPlanIdRef: ex,
  hasFetchedSkus: eJ,
  skusById: eX,
  skuPricePreviewsById: eQ,
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
  options: G.OBo,
  stripe: X,
  children: w
})
  });
}