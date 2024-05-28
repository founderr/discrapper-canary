"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return x
  }
});
var s = n("735250"),
  i = n("470079"),
  r = n("512722"),
  l = n.n(r),
  a = n("881602"),
  C = n("317269"),
  o = n("669079"),
  u = n("296848"),
  d = n("987209"),
  p = n("598"),
  c = n("614277"),
  f = n("698708");

function x(e) {
  var t, n;
  let r, {
      handleClose: x,
      planGroup: _,
      onSubscriptionConfirmation: L,
      renderPurchaseConfirmation: m,
      postSuccessGuild: h,
      followupSKUInfo: S
    } = e,
    {
      activeSubscription: j,
      paymentSources: E,
      paymentSourceId: P,
      selectedPlan: y,
      selectedSkuId: g,
      step: A,
      updatedSubscription: M,
      startingPremiumSubscriptionPlanIdRef: I
    } = (0, p.usePaymentContext)(),
    {
      isGift: T,
      giftRecipient: v,
      giftCode: b,
      hasSentMessage: U,
      isSendingMessage: O,
      sendGiftMessage: N
    } = (0, d.useGiftContext)();
  l()(null != y, "Expected plan to selected"), l()(null != g, "Expected selectedSkuId"), l()(null != A, "Step should be set");
  let R = i.useCallback(() => {
    x(), null == L || L()
  }, [x, L]);
  return i.useEffect(() => {
    if (!(!T || null == v || null == b || U || O || (0, o.shouldShowCustomGiftExperience)(v))) a.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && N({
      onSubscriptionConfirmation: L
    })
  }, [N, T, v, b, U, O, L]), r = null != m ? m(y, R, M) : T ? (0, s.jsx)(C.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: y.id,
    onClose: R
  }) : I.current === y.id ? (0, s.jsx)(C.default, {
    planId: y.id,
    postSuccessGuild: h,
    onClose: R,
    paymentSourceType: null === (t = E[null != P ? P : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, s.jsx)(C.default, {
    followupSKUInfo: S,
    startingPremiumSubscriptionPlanId: I.current,
    planId: y.id,
    onClose: R,
    isDowngrade: null != j && (0, u.subscriptionCanDowngrade)(j, y.id, _),
    paymentSourceType: null === (n = E[null != P ? P : ""]) || void 0 === n ? void 0 : n.type
  }), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(c.PaymentPortalBody, {
      children: [(0, s.jsx)(f.default, {}), r]
    })
  })
}