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
  C = s("669079"),
  u = s("296848"),
  d = s("987209"),
  c = s("598"),
  p = s("614277"),
  _ = s("698708");

function f(e) {
  var t, s;
  let r, {
      handleClose: f,
      planGroup: x,
      onSubscriptionConfirmation: m,
      renderPurchaseConfirmation: L,
      postSuccessGuild: E,
      followupSKUInfo: S,
      continueSession: I
    } = e,
    {
      activeSubscription: h,
      paymentSources: P,
      paymentSourceId: M,
      selectedPlan: T,
      selectedSkuId: N,
      step: j,
      updatedSubscription: A,
      startingPremiumSubscriptionPlanIdRef: R
    } = (0, c.usePaymentContext)(),
    {
      isGift: g,
      giftRecipient: O,
      giftCode: y,
      hasSentMessage: U,
      isSendingMessage: b,
      sendGiftMessage: v
    } = (0, d.useGiftContext)();
  l()(null != T, "Expected plan to selected"), l()(null != N, "Expected selectedSkuId"), l()(null != j, "Step should be set");
  let B = i.useCallback(() => {
    f(), null == m || m()
  }, [f, m]);
  return i.useEffect(() => {
    if (!(!g || null == O || null == y || U || b || (0, C.shouldShowCustomGiftExperience)(O))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && v({
      onSubscriptionConfirmation: m
    })
  }, [v, g, O, y, U, b, m]), r = null != L ? L(T, B, A) : I ? (0, n.jsx)(o.PremiumSubscriptionHandoffPurchaseConfirmation, {}) : g ? (0, n.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: T.id,
    onClose: B
  }) : R.current === T.id ? (0, n.jsx)(o.default, {
    planId: T.id,
    postSuccessGuild: E,
    onClose: B,
    paymentSourceType: null === (t = P[null != M ? M : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(o.default, {
    followupSKUInfo: S,
    startingPremiumSubscriptionPlanId: R.current,
    planId: T.id,
    onClose: B,
    isDowngrade: null != h && (0, u.subscriptionCanDowngrade)(h, T.id, x),
    paymentSourceType: null === (s = P[null != M ? M : ""]) || void 0 === s ? void 0 : s.type
  }), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(p.PaymentPortalBody, {
      children: [(0, n.jsx)(_.default, {}), r]
    })
  })
}