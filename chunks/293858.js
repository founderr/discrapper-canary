"use strict";
s.r(t), s.d(t, {
  PremiumPaymentConfirmStep: function() {
    return f
  }
});
var n = s("735250"),
  l = s("470079"),
  r = s("512722"),
  i = s.n(r),
  a = s("881602"),
  o = s("317269"),
  u = s("669079"),
  C = s("296848"),
  d = s("987209"),
  c = s("598"),
  p = s("614277"),
  _ = s("698708");

function f(e) {
  var t, s;
  let r, {
      handleClose: f,
      planGroup: E,
      onSubscriptionConfirmation: x,
      renderPurchaseConfirmation: L,
      postSuccessGuild: m,
      followupSKUInfo: S
    } = e,
    {
      activeSubscription: I,
      paymentSources: h,
      paymentSourceId: P,
      selectedPlan: M,
      selectedSkuId: N,
      step: T,
      updatedSubscription: A,
      startingPremiumSubscriptionPlanIdRef: j
    } = (0, c.usePaymentContext)(),
    {
      isGift: R,
      giftRecipient: g,
      giftCode: y,
      hasSentMessage: O,
      isSendingMessage: U,
      sendGiftMessage: b
    } = (0, d.useGiftContext)();
  i()(null != M, "Expected plan to selected"), i()(null != N, "Expected selectedSkuId"), i()(null != T, "Step should be set");
  let v = l.useCallback(() => {
    f(), null == x || x()
  }, [f, x]);
  return l.useEffect(() => {
    if (!(!R || null == g || null == y || O || U || (0, u.shouldShowCustomGiftExperience)(g))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && b({
      onSubscriptionConfirmation: x
    })
  }, [b, R, g, y, O, U, x]), r = null != L ? L(M, v, A) : R ? (0, n.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: M.id,
    onClose: v
  }) : j.current === M.id ? (0, n.jsx)(o.default, {
    planId: M.id,
    postSuccessGuild: m,
    onClose: v,
    paymentSourceType: null === (t = h[null != P ? P : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(o.default, {
    followupSKUInfo: S,
    startingPremiumSubscriptionPlanId: j.current,
    planId: M.id,
    onClose: v,
    isDowngrade: null != I && (0, C.subscriptionCanDowngrade)(I, M.id, E),
    paymentSourceType: null === (s = h[null != P ? P : ""]) || void 0 === s ? void 0 : s.type
  }), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(p.PaymentPortalBody, {
      children: [(0, n.jsx)(_.default, {}), r]
    })
  })
}