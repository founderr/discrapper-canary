t.d(n, {
  Z: function() {
return M;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(512722),
  s = t.n(r),
  l = t(442837),
  o = t(481060),
  c = t(355467),
  u = t(906732),
  d = t(600164),
  _ = t(160913),
  p = t(311821),
  m = t(459965),
  I = t(858987),
  f = t(975060),
  E = t(882712),
  x = t(855775),
  N = t(626135),
  S = t(669079),
  T = t(74538),
  h = t(987209),
  b = t(598),
  g = t(632580),
  P = t(45572),
  v = t(919778),
  A = t(612853),
  y = t(981631),
  C = t(181729);

function M(e) {
  let {
premiumSubscription: n,
setPurchaseState: t,
onBack: r,
onNext: M,
legalTermsNodeRef: O,
flashLegalTerms: R,
invoiceError: L,
planError: j,
onPurchaseError: Z,
baseAnalyticsData: D,
flowStartTime: w,
trialId: G,
planGroup: B,
analyticsLocation: U,
purchaseTokenAuthState: k,
openInvoiceId: F,
metadata: W,
backButtonEligible: H,
disablePurchase: Y,
isTrial: K = !1
  } = e, {
selectedPlan: V,
priceOptions: z,
setHasAcceptedTerms: X,
setPurchaseError: q,
purchaseType: J,
paymentSourceId: Q,
paymentSources: $,
selectedSkuId: ee,
skusById: en,
skuPricePreviewsById: et,
referralCode: ei,
contextMetadata: ea,
invoicePreview: er
  } = (0, b.usePaymentContext)(), {
isGift: es,
selectedGiftStyle: el,
customGiftMessage: eo,
emojiConfetti: ec,
soundEffect: eu,
giftRecipient: ed
  } = (0, h.wD)(), e_ = (0, S.MY)(ed), ep = {};
  ep.gift_style = el, e_ === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (s()(null != ed, 'Gift recipient must be set at purchase review step for these gift options.'), ep.recipient_id = ed.id, ep.custom_message = eo, ep.emoji_id = null == ec ? void 0 : ec.id, ep.emoji_name = (null == ec ? void 0 : ec.id) == null ? null == ec ? void 0 : ec.surrogates : void 0, ep.sound_id = null == eu ? void 0 : eu.soundId);
  let em = null == V ? void 0 : V.id,
eI = (0, v.sE)(G, z.paymentSourceId, em),
ef = (0, l.e7)([f.Z], () => f.Z.popupCallbackCalled),
{
  analyticsLocations: eE
} = (0, u.ZP)(),
ex = null != Q ? $[Q] : null,
[eN, eS] = a.useState(eI),
[eT, eh] = a.useState(!1),
{
  hasEntitlements: eb
} = (0, m.H)(em, es),
eg = (0, T.Ap)(z.paymentSourceId),
eP = eb || eI,
ev = (0, _.U)(),
eA = null,
ey = null;
  if (J === y.GZQ.ONE_TIME) {
var eC;
s()(null != ee, 'SKU must be selected for one-time purchases'), eA = null !== (eC = en[ee]) && void 0 !== eC ? eC : null, s()(null != eA, 'SKU must exist and be fetched.');
let e = et[ee],
  n = null != Q ? Q : x.c;
ey = null != e ? e[n] : null;
  }
  let eM = async () => {
await (0, g.H)({
  setPurchaseState: t,
  setHasAcceptedTerms: X,
  setIsSubmitting: eS,
  setPurchaseError: q,
  hasRedirectURL: eT,
  setHasRedirectURL: eh,
  isGift: es,
  baseAnalyticsData: D,
  analyticsLocation: U,
  analyticsLocations: eE,
  flowStartTime: w,
  subscriptionPlan: V,
  planGroup: B,
  trialId: G,
  priceOptions: z,
  paymentSource: ex,
  isPrepaidPaymentPastDue: ev,
  openInvoiceId: F,
  premiumSubscription: n,
  onNext: M,
  metadata: W,
  sku: eA,
  skuPricePreview: ey,
  purchaseType: J,
  referralCode: ei,
  loadId: ea.loadId,
  giftInfoOptions: ep,
  invoicePreview: er
});
  };
  a.useEffect(() => {
(async () => {
  if (!0 === ef)
    try {
      if (null == f.Z.redirectedPaymentId)
        return;
      await (0, c.OP)(f.Z.redirectedPaymentId), t(P.A.COMPLETED), M();
    } catch (e) {
      t(P.A.FAIL), Z(e), N.default.track(y.rMx.PAYMENT_FLOW_FAILED, {
        ...D,
        payment_error_code: null == e ? void 0 : e.code,
        payment_source_id: Q,
        payment_source_type: null == ex ? void 0 : ex.type,
        duration_ms: Date.now() - w
      });
    } finally {
      eS(!1), (0, c.K2)();
    }
  else
    k === E.I.SUCCESS && await eM();
})();
  }, [ef]), a.useEffect(() => {
eI && !es && null == n && eM();
  }, [
eI,
es,
n
  ]);
  let eO = null != F || J === y.GZQ.ONE_TIME && !es;
  return eI ? null : (0, i.jsxs)(o.ModalFooter, {
align: d.Z.Align.CENTER,
children: [
  (0, i.jsx)(I.Z, {
    legalTermsNodeRef: O,
    invoiceError: L,
    planError: j,
    disablePurchase: Y,
    flashLegalTerms: R,
    isSubmitting: eN,
    premiumSubscription: n,
    isGift: es,
    planGroup: B,
    isPrepaid: eg,
    isTrial: K,
    makePurchase: eM,
    needsPaymentSource: null == ex && !eP
  }),
  (0, i.jsx)(A.Z, {}),
  H && !eO ? (0, i.jsx)('div', {
    className: C.back,
    children: (0, i.jsx)(p.Z, {
      onClick: r
    })
  }) : null
]
  });
}