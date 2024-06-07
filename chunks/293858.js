"use strict";
s.r(t), s.d(t, {
  PremiumPaymentConfirmStep: function() {
    return f
  }
});
var n = s("735250"),
  i = s("470079"),
  r = s("512722"),
  l = s.n(r),
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
      planGroup: m,
      onSubscriptionConfirmation: x,
      renderPurchaseConfirmation: E,
      postSuccessGuild: L,
      followupSKUInfo: S
    } = e,
    {
      activeSubscription: I,
      paymentSources: h,
      paymentSourceId: P,
      selectedPlan: T,
      selectedSkuId: M,
      step: N,
      updatedSubscription: j,
      startingPremiumSubscriptionPlanIdRef: A
    } = (0, c.usePaymentContext)(),
    {
      isGift: R,
      giftRecipient: g,
      giftCode: y,
      hasSentMessage: O,
      isSendingMessage: b,
      sendGiftMessage: U
    } = (0, d.useGiftContext)();
  l()(null != T, "Expected plan to selected"), l()(null != M, "Expected selectedSkuId"), l()(null != N, "Step should be set");
  let v = i.useCallback(() => {
    f(), null == x || x()
  }, [f, x]);
  return i.useEffect(() => {
    if (!(!R || null == g || null == y || O || b || (0, u.shouldShowCustomGiftExperience)(g))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && U({
      onSubscriptionConfirmation: x
    })
  }, [U, R, g, y, O, b, x]), r = null != E ? E(T, v, j) : R ? (0, n.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: T.id,
    onClose: v
  }) : A.current === T.id ? (0, n.jsx)(o.default, {
    planId: T.id,
    postSuccessGuild: L,
    onClose: v,
    paymentSourceType: null === (t = h[null != P ? P : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(o.default, {
    followupSKUInfo: S,
    startingPremiumSubscriptionPlanId: A.current,
    planId: T.id,
    onClose: v,
    isDowngrade: null != I && (0, C.subscriptionCanDowngrade)(I, T.id, m),
    paymentSourceType: null === (s = h[null != P ? P : ""]) || void 0 === s ? void 0 : s.type
  }), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(p.PaymentPortalBody, {
      children: [(0, n.jsx)(_.default, {}), r]
    })
  })
}