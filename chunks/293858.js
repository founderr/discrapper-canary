"use strict";
s.r(t), s.d(t, {
  PremiumPaymentConfirmStep: function() {
    return f
  }
});
var i = s("735250"),
  n = s("470079"),
  r = s("512722"),
  l = s.n(r),
  a = s("881602"),
  o = s("317269"),
  C = s("669079"),
  u = s("296848"),
  d = s("987209"),
  _ = s("598"),
  p = s("614277"),
  c = s("698708");

function f(e) {
  var t, s;
  let r, {
      handleClose: f,
      planGroup: x,
      onSubscriptionConfirmation: L,
      renderPurchaseConfirmation: E,
      postSuccessGuild: S,
      followupSKUInfo: m,
      continueSession: I
    } = e,
    {
      activeSubscription: P,
      paymentSources: M,
      paymentSourceId: T,
      selectedPlan: h,
      selectedSkuId: N,
      step: A,
      updatedSubscription: j,
      startingPremiumSubscriptionPlanIdRef: R
    } = (0, _.usePaymentContext)(),
    {
      isGift: g,
      giftRecipient: O,
      giftCode: y,
      hasSentMessage: U,
      isSendingMessage: b,
      sendGiftMessage: v
    } = (0, d.useGiftContext)();
  l()(null != h, "Expected plan to selected"), l()(null != N, "Expected selectedSkuId"), l()(null != A, "Step should be set");
  let H = n.useCallback(() => {
    f(), null == L || L()
  }, [f, L]);
  return n.useEffect(() => {
    if (!(!g || null == O || null == y || U || b || (0, C.shouldShowCustomGiftExperience)(O))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && v({
      onSubscriptionConfirmation: L
    })
  }, [v, g, O, y, U, b, L]), r = null != E ? E(h, H, j) : I ? (0, i.jsx)(o.PremiumSubscriptionHandoffPurchaseConfirmation, {}) : g ? (0, i.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: h.id,
    onClose: H
  }) : R.current === h.id ? (0, i.jsx)(o.default, {
    planId: h.id,
    postSuccessGuild: S,
    onClose: H,
    paymentSourceType: null === (t = M[null != T ? T : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, i.jsx)(o.default, {
    followupSKUInfo: m,
    startingPremiumSubscriptionPlanId: R.current,
    planId: h.id,
    onClose: H,
    isDowngrade: null != P && (0, u.subscriptionCanDowngrade)(P, h.id, x),
    paymentSourceType: null === (s = M[null != T ? T : ""]) || void 0 === s ? void 0 : s.type
  }), (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)(p.PaymentPortalBody, {
      children: [(0, i.jsx)(c.default, {}), r]
    })
  })
}