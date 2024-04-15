"use strict";
n.r(t), n.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return m
  }
});
var s = n("735250");
n("470079");
var r = n("512722"),
  i = n.n(r),
  l = n("780384"),
  a = n("481060"),
  o = n("410030"),
  C = n("973159"),
  u = n("74538"),
  d = n("987209"),
  c = n("598"),
  p = n("409813"),
  f = n("614223"),
  x = n("689938"),
  _ = n("650253");

function m(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, r = (0, o.default)(), {
    activeSubscription: m,
    selectedSkuId: L,
    setSelectedPlanId: E,
    startedPaymentFlowWithPaymentSourcesRef: h
  } = (0, c.usePaymentContext)(), {
    isGift: S
  } = (0, d.useGiftContext)(), j = null != m ? (0, u.getPremiumPlanItem)(m) : null, P = null != j ? (0, u.getDisplayPremiumType)(j.planId) : null, g = null != j ? (0, u.getPremiumType)(j.planId) : null, M = (0, f.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: S,
    selectedSkuId: L,
    startedPaymentFlowWithPaymentSources: h.current
  });
  return i()(null != g, "Expected premium type"), (0, s.jsx)(C.default, {
    premiumType: g,
    titleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: P
    }),
    footer: (0, s.jsxs)("div", {
      className: _.whatYouLoseButtonContainer,
      children: [(0, s.jsx)(a.Button, {
        onClick: () => {
          M ? (E((0, f.getDefaultPlanOneStepCheckout)(L, m)), t(p.Step.REVIEW)) : t(p.Step.PLAN_SELECT)
        },
        children: x.default.Messages.CONTINUE
      }), (0, s.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: (0, l.isThemeDark)(r) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
        onClick: n,
        children: x.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}