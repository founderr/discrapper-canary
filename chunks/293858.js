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
  d = s("296848"),
  u = s("987209"),
  c = s("598"),
  p = s("614277"),
  f = s("698708");

function x(e) {
  var t, s;
  let i, {
      handleClose: x,
      planGroup: _,
      onSubscriptionConfirmation: m,
      renderPurchaseConfirmation: h,
      postSuccessGuild: L,
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
      giftRecipient: v,
      giftCode: N,
      hasSentMessage: b,
      isSendingMessage: O,
      sendGiftMessage: U
    } = (0, u.useGiftContext)();
  l()(null != g, "Expected plan to selected"), l()(null != y, "Expected selectedSkuId"), l()(null != M, "Step should be set");
  let R = r.useCallback(() => {
    x(), null == m || m()
  }, [x, m]);
  return r.useEffect(() => {
    if (!(!I || null == v || null == N || b || O || (0, C.shouldShowCustomGiftExperience)(v))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && U({
      onSubscriptionConfirmation: m
    })
  }, [U, I, v, N, b, O, m]), i = null != h ? h(g, R, A) : I ? (0, n.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: g.id,
    onClose: R
  }) : T.current === g.id ? (0, n.jsx)(o.default, {
    planId: g.id,
    postSuccessGuild: L,
    onClose: R,
    paymentSourceType: null === (t = E[null != P ? P : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, n.jsx)(o.default, {
    followupSKUInfo: S,
    startingPremiumSubscriptionPlanId: T.current,
    planId: g.id,
    onClose: R,
    isDowngrade: null != j && (0, d.subscriptionCanDowngrade)(j, g.id, _),
    paymentSourceType: null === (s = E[null != P ? P : ""]) || void 0 === s ? void 0 : s.type
  }), (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(p.PaymentPortalBody, {
      children: [(0, n.jsx)(f.default, {}), i]
    })
  })
}