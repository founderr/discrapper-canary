"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return E
  }
});
var s = n("735250"),
  i = n("470079"),
  r = n("512722"),
  l = n.n(r),
  a = n("481060"),
  o = n("570140"),
  C = n("881602"),
  u = n("546650"),
  d = n("317269"),
  c = n("669079"),
  p = n("296848"),
  f = n("987209"),
  x = n("598"),
  _ = n("614277"),
  m = n("698708");

function E(e) {
  var t, r;
  let E, {
      handleClose: S,
      planGroup: L,
      onSubscriptionConfirmation: h,
      renderPurchaseConfirmation: j,
      postSuccessGuild: P,
      followupSKUInfo: y
    } = e,
    {
      activeSubscription: M,
      paymentSources: A,
      paymentSourceId: I,
      selectedPlan: g,
      selectedSkuId: T,
      step: v,
      updatedSubscription: N,
      startingPremiumSubscriptionPlanIdRef: O
    } = (0, x.usePaymentContext)(),
    {
      isGift: R,
      giftRecipient: b,
      giftCode: U,
      hasSentMessage: k,
      isSendingMessage: B,
      sendGiftMessage: w
    } = (0, f.useGiftContext)();
  l()(null != g, "Expected plan to selected"), l()(null != T, "Expected selectedSkuId"), l()(null != v, "Step should be set");
  let F = i.useCallback(() => {
    S(), null == h || h()
  }, [S, h]);
  return i.useEffect(() => {
    if (!(!R || null == b || null == U || k || B || (0, c.shouldShowCustomGiftExperience)(b))) C.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && w({
      onSubscriptionConfirmation: h
    })
  }, [w, R, b, U, k, B, h]), E = null != j ? j(g, F, N) : R ? (0, s.jsx)(d.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: g.id,
    onClose: F
  }) : O.current === g.id ? (0, s.jsx)(d.default, {
    planId: g.id,
    postSuccessGuild: P,
    onClose: F,
    paymentSourceType: null === (t = A[null != I ? I : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, s.jsx)(d.default, {
    followupSKUInfo: y,
    startingPremiumSubscriptionPlanId: O.current,
    planId: g.id,
    onClose: F,
    isDowngrade: null != M && (0, p.subscriptionCanDowngrade)(M, g.id, L),
    paymentSourceType: null === (r = A[null != I ? I : ""]) || void 0 === r ? void 0 : r.type
  }), i.useEffect(() => {
    u.default.isAprilMarketingDecoEntitlementCreated && (o.default.dispatch({
      type: "PREMIUM_APRIL_MARKETING_DECO_ENTITLEMENT_RESET"
    }), F(), !(0, a.hasAnyModalOpen)() && (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, "731433"));
      return t => (0, s.jsx)(e, {
        ...t
      })
    }))
  }, []), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(_.PaymentPortalBody, {
      children: [(0, s.jsx)(m.default, {}), E]
    })
  })
}