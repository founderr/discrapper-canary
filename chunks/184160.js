"use strict";
s.r(t), s.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return m
  }
});
var n = s("735250");
s("470079");
var r = s("512722"),
  i = s.n(r),
  l = s("780384"),
  a = s("481060"),
  o = s("410030"),
  C = s("973159"),
  u = s("74538"),
  d = s("987209"),
  c = s("598"),
  p = s("409813"),
  f = s("614223"),
  x = s("689938"),
  _ = s("650253");

function m(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, r = (0, o.default)(), {
    activeSubscription: m,
    selectedSkuId: L,
    setSelectedPlanId: h,
    startedPaymentFlowWithPaymentSourcesRef: S
  } = (0, c.usePaymentContext)(), {
    isGift: j
  } = (0, d.useGiftContext)(), E = null != m ? (0, u.getPremiumPlanItem)(m) : null, P = null != E ? (0, u.getDisplayPremiumType)(E.planId) : null, g = null != E ? (0, u.getPremiumType)(E.planId) : null, y = (0, f.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: j,
    selectedSkuId: L,
    startedPaymentFlowWithPaymentSources: S.current
  });
  return i()(null != g, "Expected premium type"), (0, n.jsx)(C.default, {
    premiumType: g,
    titleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: P
    }),
    footer: (0, n.jsxs)("div", {
      className: _.whatYouLoseButtonContainer,
      children: [(0, n.jsx)(a.Button, {
        onClick: () => {
          y ? (h((0, f.getDefaultPlanOneStepCheckout)(L, m)), t(p.Step.REVIEW)) : t(p.Step.PLAN_SELECT)
        },
        children: x.default.Messages.CONTINUE
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: (0, l.isThemeDark)(r) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
        onClick: s,
        children: x.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: s,
    isDowngrade: !0
  })
}