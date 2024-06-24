n.d(s, {
  b: function() {
    return x
  }
});
var t = n(735250),
  i = n(470079),
  l = n(512722),
  r = n.n(l),
  C = n(881602),
  a = n(317269),
  o = n(669079),
  d = n(296848),
  _ = n(987209),
  u = n(598),
  c = n(614277),
  p = n(698708);

function x(e) {
  var s, n;
  let l, {
      handleClose: x,
      planGroup: L,
      onSubscriptionConfirmation: I,
      renderPurchaseConfirmation: E,
      postSuccessGuild: h,
      followupSKUInfo: f,
      continueSession: M
    } = e,
    {
      activeSubscription: N,
      paymentSources: j,
      paymentSourceId: T,
      selectedPlan: A,
      selectedSkuId: S,
      step: g,
      updatedSubscription: R,
      startingPremiumSubscriptionPlanIdRef: m
    } = (0, u.usePaymentContext)(),
    {
      isGift: P,
      giftRecipient: O,
      giftCode: Z,
      hasSentMessage: U,
      isSendingMessage: y,
      sendGiftMessage: v
    } = (0, _.wD)();
  r()(null != A, "Expected plan to selected"), r()(null != S, "Expected selectedSkuId"), r()(null != g, "Step should be set");
  let H = i.useCallback(() => {
    x(), null == I || I()
  }, [x, I]);
  return i.useEffect(() => {
    if (!(!P || null == O || null == Z || U || y || (0, o.pO)(O))) C.F.getCurrentConfig({
      location: "36b986_1"
    }).enabled && v({
      onSubscriptionConfirmation: I
    })
  }, [v, P, O, Z, U, y, I]), l = null != E ? E(A, H, R) : M ? (0, t.jsx)(a.VY, {}) : P ? (0, t.jsx)(a.TB, {
    planId: A.id,
    onClose: H
  }) : m.current === A.id ? (0, t.jsx)(a.ZP, {
    planId: A.id,
    postSuccessGuild: h,
    onClose: H,
    paymentSourceType: null === (s = j[null != T ? T : ""]) || void 0 === s ? void 0 : s.type
  }) : (0, t.jsx)(a.ZP, {
    followupSKUInfo: f,
    startingPremiumSubscriptionPlanId: m.current,
    planId: A.id,
    onClose: H,
    isDowngrade: null != N && (0, d.GY)(N, A.id, L),
    paymentSourceType: null === (n = j[null != T ? T : ""]) || void 0 === n ? void 0 : n.type
  }), (0, t.jsx)(t.Fragment, {
    children: (0, t.jsxs)(c.C3, {
      children: [(0, t.jsx)(p.Z, {}), l]
    })
  })
}