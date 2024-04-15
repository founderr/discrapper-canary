"use strict";
n.r(t), n.d(t, {
  PremiumPaymentConfirmStep: function() {
    return L
  }
});
var s = n("735250"),
  r = n("470079"),
  i = n("512722"),
  l = n.n(i),
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

function L(e) {
  var t, i;
  let L, {
      handleClose: E,
      planGroup: h,
      onSubscriptionConfirmation: S,
      renderPurchaseConfirmation: j,
      postSuccessGuild: P,
      followupSKUInfo: g
    } = e,
    {
      activeSubscription: M,
      paymentSources: y,
      paymentSourceId: A,
      selectedPlan: T,
      selectedSkuId: I,
      step: N,
      updatedSubscription: v,
      startingPremiumSubscriptionPlanIdRef: O
    } = (0, x.usePaymentContext)(),
    {
      isGift: b,
      giftRecipient: R,
      giftCode: U,
      hasSentMessage: k,
      isSendingMessage: B,
      sendGiftMessage: H
    } = (0, f.useGiftContext)();
  l()(null != T, "Expected plan to selected"), l()(null != I, "Expected selectedSkuId"), l()(null != N, "Step should be set");
  let G = r.useCallback(() => {
    E(), null == S || S()
  }, [E, S]);
  return r.useEffect(() => {
    if (!(!b || null == R || null == U || k || B || (0, c.shouldShowCustomGiftExperience)(R))) C.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
      location: "36b986_1"
    }).enabled && H({
      onSubscriptionConfirmation: S
    })
  }, [H, b, R, U, k, B, S]), L = null != j ? j(T, G, v) : b ? (0, s.jsx)(d.PremiumSubscriptionGiftPurchaseConfirmation, {
    planId: T.id,
    onClose: G
  }) : O.current === T.id ? (0, s.jsx)(d.default, {
    planId: T.id,
    postSuccessGuild: P,
    onClose: G,
    paymentSourceType: null === (t = y[null != A ? A : ""]) || void 0 === t ? void 0 : t.type
  }) : (0, s.jsx)(d.default, {
    followupSKUInfo: g,
    startingPremiumSubscriptionPlanId: O.current,
    planId: T.id,
    onClose: G,
    isDowngrade: null != M && (0, p.subscriptionCanDowngrade)(M, T.id, h),
    paymentSourceType: null === (i = y[null != A ? A : ""]) || void 0 === i ? void 0 : i.type
  }), r.useEffect(() => {
    u.default.isAprilMarketingDecoEntitlementCreated && (o.default.dispatch({
      type: "PREMIUM_APRIL_MARKETING_DECO_ENTITLEMENT_RESET"
    }), G(), !(0, a.hasAnyModalOpen)() && (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, "731433"));
      return t => (0, s.jsx)(e, {
        ...t
      })
    }))
  }, []), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(_.PaymentPortalBody, {
      children: [(0, s.jsx)(m.default, {}), L]
    })
  })
}