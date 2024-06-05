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
      onSubscriptionConfirmation: E,
      renderPurchaseConfirmation: L,
      postSuccessGuild: S,
      followupSKUInfo: I
    } = e,
    {
      activeSubscription: m,
      paymentSources: h,
      paymentSourceId: P,
      selectedPlan: M,
      selectedSkuId: T,
      step: N,
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
  l()(null != M, "Expected plan to selected"), l()(null != T, "Expected selectedSkuId"), l()(null != N, "Step should be set");
  let v = i.useCallback(() => {
    f(), null == E || E()
  }, [f, E]);
  return i.useEffect(() => {
    if (!(!R || null == g || null == y || O || U || (0, C.shouldShowCustomGiftExperience)(g))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && b({
      onSubscriptionConfirmation: E
    })
  }, [b, R, g, y, O, U, E]), r = null != L ? L(M, v, A) : R ? (0, n.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: M.id,
    onClose: v
  }) : j.current === M.id ? (0, n.jsx)(o.default, {
    planId: M.id,
    postSuccessGuild: S,
    onClose: v,
    paymentSourceType: null === (t = h[null != P ? P : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(o.default, {
    followupSKUInfo: I,
    startingPremiumSubscriptionPlanId: j.current,
    planId: M.id,
    onClose: v,
    isDowngrade: null != m && (0, u.subscriptionCanDowngrade)(m, M.id, x),
    paymentSourceType: null === (s = h[null != P ? P : ""]) || void 0 === s ? void 0 : s.type
  }), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(p.PaymentPortalBody, {
      children: [(0, n.jsx)(_.default, {}), r]
    })
  })
}