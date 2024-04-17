"use strict";
n.r(t), n.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return m
  }
});
var s = n("735250");
n("470079");
var i = n("512722"),
  r = n.n(i),
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
  } = e, i = (0, o.default)(), {
    activeSubscription: m,
    selectedSkuId: E,
    setSelectedPlanId: S,
    startedPaymentFlowWithPaymentSourcesRef: L
  } = (0, c.usePaymentContext)(), {
    isGift: h
  } = (0, d.useGiftContext)(), j = null != m ? (0, u.getPremiumPlanItem)(m) : null, P = null != j ? (0, u.getDisplayPremiumType)(j.planId) : null, y = null != j ? (0, u.getPremiumType)(j.planId) : null, M = (0, f.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: h,
    selectedSkuId: E,
    startedPaymentFlowWithPaymentSources: L.current
  });
  return r()(null != y, "Expected premium type"), (0, s.jsx)(C.default, {
    premiumType: y,
    titleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: P
    }),
    footer: (0, s.jsxs)("div", {
      className: _.whatYouLoseButtonContainer,
      children: [(0, s.jsx)(a.Button, {
        onClick: () => {
          M ? (S((0, f.getDefaultPlanOneStepCheckout)(E, m)), t(p.Step.REVIEW)) : t(p.Step.PLAN_SELECT)
        },
        children: x.default.Messages.CONTINUE
      }), (0, s.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: (0, l.isThemeDark)(i) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
        onClick: n,
        children: x.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}