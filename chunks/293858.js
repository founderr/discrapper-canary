"use strict";
s.r(t), s.d(t, {
  PremiumPaymentConfirmStep: function() {
    return S
  }
});
var n = s("735250"),
  i = s("470079"),
  r = s("512722"),
  l = s.n(r),
  a = s("481060"),
  o = s("570140"),
  C = s("138464"),
  u = s("881602"),
  d = s("546650"),
  c = s("317269"),
  p = s("669079"),
  f = s("296848"),
  x = s("987209"),
  _ = s("598"),
  m = s("614277"),
  L = s("698708");

function S(e) {
  var t, r;
  let S, {
      handleClose: h,
      planGroup: E,
      onSubscriptionConfirmation: j,
      renderPurchaseConfirmation: P,
      postSuccessGuild: M,
      followupSKUInfo: y
    } = e,
    {
      activeSubscription: A,
      paymentSources: g,
      paymentSourceId: T,
      selectedPlan: I,
      selectedSkuId: N,
      step: v,
      updatedSubscription: O,
      startingPremiumSubscriptionPlanIdRef: R
    } = (0, _.usePaymentContext)(),
    {
      isGift: U,
      giftRecipient: b,
      giftCode: k,
      hasSentMessage: B,
      isSendingMessage: H,
      sendGiftMessage: G
    } = (0, x.useGiftContext)();
  l()(null != I, "Expected plan to selected"), l()(null != N, "Expected selectedSkuId"), l()(null != v, "Step should be set");
  let F = i.useCallback(() => {
    h(), null == j || j()
  }, [h, j]);
  return i.useEffect(() => {
    if (!(!U || null == b || null == k || B || H || (0, p.shouldShowCustomGiftExperience)(b))) u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && G({
      onSubscriptionConfirmation: j
    })
  }, [G, U, b, k, B, H, j]), S = null != P ? P(I, F, O) : U ? (0, n.jsx)(c.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: I.id,
    onClose: F
  }) : R.current === I.id ? (0, n.jsx)(c.default, {
    planId: I.id,
    postSuccessGuild: M,
    onClose: F,
    paymentSourceType: null === (t = g[null != T ? T : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(c.default, {
    followupSKUInfo: y,
    startingPremiumSubscriptionPlanId: R.current,
    planId: I.id,
    onClose: F,
    isDowngrade: null != A && (0, f.subscriptionCanDowngrade)(A, I.id, E),
    paymentSourceType: null === (r = g[null != T ? T : ""]) || void 0 === r ? void 0 : r.type
  }), i.useEffect(() => {
    d.default.isAprilMarketingDecoEntitlementCreated && (o.default.dispatch({
      type: "PREMIUM_APRIL_MARKETING_DECO_ENTITLEMENT_RESET"
    }), (0, C.setCanPlayWowMoment)(!1), F(), !(0, a.hasAnyModalOpen)() && (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(s.bind(s, "731433"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    }))
  }, []), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(m.PaymentPortalBody, {
      children: [(0, n.jsx)(L.default, {}), S]
    })
  })
}