"use strict";
s.r(t), s.d(t, {
  PremiumPaymentConfirmStep: function() {
    return x
  }
});
var n = s("735250"),
  r = s("470079"),
  i = s("512722"),
  l = s.n(i),
  a = s("881602"),
  o = s("317269"),
  C = s("669079"),
  u = s("296848"),
  d = s("987209"),
  c = s("598"),
  p = s("614277"),
  f = s("698708");

function x(e) {
  var t, s;
  let i, {
      handleClose: x,
      planGroup: _,
      onSubscriptionConfirmation: m,
      renderPurchaseConfirmation: L,
      postSuccessGuild: h,
      followupSKUInfo: S
    } = e,
    {
      activeSubscription: j,
      paymentSources: E,
      paymentSourceId: P,
      selectedPlan: g,
      selectedSkuId: y,
      step: M,
      updatedSubscription: A,
      startingPremiumSubscriptionPlanIdRef: T
    } = (0, c.usePaymentContext)(),
    {
      isGift: I,
      giftRecipient: N,
      giftCode: b,
      hasSentMessage: O,
      isSendingMessage: v,
      sendGiftMessage: U
    } = (0, d.useGiftContext)();
  l()(null != g, "Expected plan to selected"), l()(null != y, "Expected selectedSkuId"), l()(null != M, "Step should be set");
  let k = r.useCallback(() => {
    x(), null == m || m()
  }, [x, m]);
  return r.useEffect(() => {
    if (!(!I || null == N || null == b || O || v || (0, C.shouldShowCustomGiftExperience)(N))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && U({
      onSubscriptionConfirmation: m
    })
  }, [U, I, N, b, O, v, m]), i = null != L ? L(g, k, A) : I ? (0, n.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: g.id,
    onClose: k
  }) : T.current === g.id ? (0, n.jsx)(o.default, {
    planId: g.id,
    postSuccessGuild: h,
    onClose: k,
    paymentSourceType: null === (t = E[null != P ? P : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(o.default, {
    followupSKUInfo: S,
    startingPremiumSubscriptionPlanId: T.current,
    planId: g.id,
    onClose: k,
    isDowngrade: null != j && (0, u.subscriptionCanDowngrade)(j, g.id, _),
    paymentSourceType: null === (s = E[null != P ? P : ""]) || void 0 === s ? void 0 : s.type
  }), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(p.PaymentPortalBody, {
      children: [(0, n.jsx)(f.default, {}), i]
    })
  })
}