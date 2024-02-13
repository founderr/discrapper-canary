"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return f
  }
});
var s = n("37983"),
  r = n("884691"),
  l = n("627445"),
  a = n.n(l),
  i = n("491523"),
  u = n("775155"),
  o = n("659632"),
  d = n("380186"),
  c = n("635357"),
  _ = n("642906"),
  I = n("650484"),
  E = n("367767");

function f(e) {
  var t, n;
  let l, {
      handleClose: f,
      planGroup: S,
      onSubscriptionConfirmation: P,
      renderPurchaseConfirmation: m,
      postSuccessGuild: p,
      followupSKUInfo: T
    } = e,
    {
      activeSubscription: N,
      paymentSources: M,
      paymentSourceId: C,
      selectedPlan: R,
      selectedSkuId: L,
      step: A,
      updatedSubscription: g,
      startingPremiumSubscriptionPlanIdRef: O
    } = (0, _.usePaymentContext)(),
    {
      isGift: x,
      giftRecipient: h,
      giftCode: y,
      hasSentMessage: U,
      isSendingMessage: b,
      sendGiftMessage: k
    } = (0, c.useGiftContext)();
  a(null != R, "Expected plan to selected"), a(null != L, "Expected selectedSkuId"), a(null != A, "Step should be set");
  let j = r.useCallback(() => {
    f(), null == P || P()
  }, [f, P]);
  return r.useEffect(() => {
    if (!x || null == h || null == y || U || b || (0, o.shouldShowCustomGiftExperience)(h)) return;
    let e = i.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled;
    e && k({
      onSubscriptionConfirmation: P
    })
  }, [k, x, h, y, U, b, P]), l = null != m ? m(R, j, g) : x ? (0, s.jsx)(u.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: R.id,
    onClose: j
  }) : O.current === R.id ? (0, s.jsx)(u.default, {
    planId: R.id,
    postSuccessGuild: p,
    onClose: j,
    paymentSourceType: null === (t = M[null != C ? C : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, s.jsx)(u.default, {
    followupSKUInfo: T,
    startingPremiumSubscriptionPlanId: O.current,
    planId: R.id,
    onClose: j,
    isDowngrade: null != N && (0, d.subscriptionCanDowngrade)(N, R.id, S),
    paymentSourceType: null === (n = M[null != C ? C : ""]) || void 0 === n ? void 0 : n.type
  }), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(I.PaymentPortalBody, {
      children: [(0, s.jsx)(E.default, {}), l]
    })
  })
}