"use strict";
n.r(t), n.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return L
  }
});
var s = n("735250");
n("470079");
var i = n("512722"),
  r = n.n(i),
  l = n("780384"),
  a = n("481060"),
  C = n("410030"),
  o = n("973159"),
  u = n("74538"),
  d = n("987209"),
  p = n("598"),
  c = n("409813"),
  f = n("614223"),
  x = n("689938"),
  _ = n("570729");

function L(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, i = (0, C.default)(), {
    activeSubscription: L,
    selectedSkuId: m,
    setSelectedPlanId: h,
    startedPaymentFlowWithPaymentSourcesRef: S
  } = (0, p.usePaymentContext)(), {
    isGift: j
  } = (0, d.useGiftContext)(), E = null != L ? (0, u.getPremiumPlanItem)(L) : null, P = null != E ? (0, u.getDisplayPremiumType)(E.planId) : null, y = null != E ? (0, u.getPremiumType)(E.planId) : null, g = (0, f.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: j,
    selectedSkuId: m,
    startedPaymentFlowWithPaymentSources: S.current
  });
  return r()(null != y, "Expected premium type"), (0, s.jsx)(o.default, {
    premiumType: y,
    titleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: x.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: P
    }),
    footer: (0, s.jsxs)("div", {
      className: _.whatYouLoseButtonContainer,
      children: [(0, s.jsx)(a.Button, {
        onClick: () => {
          g ? (h((0, f.getDefaultPlanOneStepCheckout)(m, L)), t(c.Step.REVIEW)) : t(c.Step.PLAN_SELECT)
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