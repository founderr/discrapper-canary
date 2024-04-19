"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return S
  }
});
var s = n("735250"),
  i = n("470079"),
  r = n("512722"),
  l = n.n(r),
  a = n("481060"),
  o = n("570140"),
  C = n("138464"),
  u = n("881602"),
  d = n("546650"),
  c = n("317269"),
  p = n("669079"),
  f = n("296848"),
  x = n("987209"),
  _ = n("598"),
  m = n("614277"),
  E = n("698708");

function S(e) {
  var t, r;
  let S, {
      handleClose: L,
      planGroup: h,
      onSubscriptionConfirmation: j,
      renderPurchaseConfirmation: P,
      postSuccessGuild: y,
      followupSKUInfo: M
    } = e,
    {
      activeSubscription: A,
      paymentSources: I,
      paymentSourceId: g,
      selectedPlan: T,
      selectedSkuId: v,
      step: N,
      updatedSubscription: O,
      startingPremiumSubscriptionPlanIdRef: R
    } = (0, _.usePaymentContext)(),
    {
      isGift: b,
      giftRecipient: U,
      giftCode: k,
      hasSentMessage: B,
      isSendingMessage: w,
      sendGiftMessage: F
    } = (0, x.useGiftContext)();
  l()(null != T, "Expected plan to selected"), l()(null != v, "Expected selectedSkuId"), l()(null != N, "Step should be set");
  let G = i.useCallback(() => {
    L(), null == j || j()
  }, [L, j]);
  return i.useEffect(() => {
    if (!(!b || null == U || null == k || B || w || (0, p.shouldShowCustomGiftExperience)(U))) u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && F({
      onSubscriptionConfirmation: j
    })
  }, [F, b, U, k, B, w, j]), S = null != P ? P(T, G, O) : b ? (0, s.jsx)(c.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: T.id,
    onClose: G
  }) : R.current === T.id ? (0, s.jsx)(c.default, {
    planId: T.id,
    postSuccessGuild: y,
    onClose: G,
    paymentSourceType: null === (t = I[null != g ? g : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, s.jsx)(c.default, {
    followupSKUInfo: M,
    startingPremiumSubscriptionPlanId: R.current,
    planId: T.id,
    onClose: G,
    isDowngrade: null != A && (0, f.subscriptionCanDowngrade)(A, T.id, h),
    paymentSourceType: null === (r = I[null != g ? g : ""]) || void 0 === r ? void 0 : r.type
  }), i.useEffect(() => {
    d.default.isAprilMarketingDecoEntitlementCreated && (o.default.dispatch({
      type: "PREMIUM_APRIL_MARKETING_DECO_ENTITLEMENT_RESET"
    }), (0, C.setCanPlayWowMoment)(!1), G(), !(0, a.hasAnyModalOpen)() && (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, "731433"));
      return t => (0, s.jsx)(e, {
        ...t
      })
    }))
  }, []), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(m.PaymentPortalBody, {
      children: [(0, s.jsx)(E.default, {}), S]
    })
  })
}