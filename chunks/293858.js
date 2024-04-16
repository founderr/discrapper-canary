"use strict";
s.r(t), s.d(t, {
  PremiumPaymentConfirmStep: function() {
    return L
  }
});
var n = s("735250"),
  r = s("470079"),
  i = s("512722"),
  l = s.n(i),
  a = s("481060"),
  o = s("570140"),
  C = s("881602"),
  u = s("546650"),
  d = s("317269"),
  c = s("669079"),
  p = s("296848"),
  f = s("987209"),
  x = s("598"),
  _ = s("614277"),
  m = s("698708");

function L(e) {
  var t, i;
  let L, {
      handleClose: S,
      planGroup: h,
      onSubscriptionConfirmation: E,
      renderPurchaseConfirmation: j,
      postSuccessGuild: P,
      followupSKUInfo: M
    } = e,
    {
      activeSubscription: g,
      paymentSources: y,
      paymentSourceId: A,
      selectedPlan: T,
      selectedSkuId: I,
      step: N,
      updatedSubscription: v,
      startingPremiumSubscriptionPlanIdRef: O
    } = (0, x.usePaymentContext)(),
    {
      isGift: R,
      giftRecipient: b,
      giftCode: U,
      hasSentMessage: k,
      isSendingMessage: B,
      sendGiftMessage: H
    } = (0, f.useGiftContext)();
  l()(null != T, "Expected plan to selected"), l()(null != I, "Expected selectedSkuId"), l()(null != N, "Step should be set");
  let G = r.useCallback(() => {
    S(), null == E || E()
  }, [S, E]);
  return r.useEffect(() => {
    if (!(!R || null == b || null == U || k || B || (0, c.shouldShowCustomGiftExperience)(b))) C.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && H({
      onSubscriptionConfirmation: E
    })
  }, [H, R, b, U, k, B, E]), L = null != j ? j(T, G, v) : R ? (0, n.jsx)(d.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: T.id,
    onClose: G
  }) : O.current === T.id ? (0, n.jsx)(d.default, {
    planId: T.id,
    postSuccessGuild: P,
    onClose: G,
    paymentSourceType: null === (t = y[null != A ? A : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(d.default, {
    followupSKUInfo: M,
    startingPremiumSubscriptionPlanId: O.current,
    planId: T.id,
    onClose: G,
    isDowngrade: null != g && (0, p.subscriptionCanDowngrade)(g, T.id, h),
    paymentSourceType: null === (i = y[null != A ? A : ""]) || void 0 === i ? void 0 : i.type
  }), r.useEffect(() => {
    u.default.isAprilMarketingDecoEntitlementCreated && (o.default.dispatch({
      type: "PREMIUM_APRIL_MARKETING_DECO_ENTITLEMENT_RESET"
    }), G(), !(0, a.hasAnyModalOpen)() && (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(s.bind(s, "731433"));
      return t => (0, n.jsx)(e, {
        ...t
      })
    }))
  }, []), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(_.PaymentPortalBody, {
      children: [(0, n.jsx)(m.default, {}), L]
    })
  })
}