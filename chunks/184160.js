"use strict";
s.r(t), s.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return L
  }
});
var i = s("735250");
s("470079");
var n = s("512722"),
  r = s.n(n),
  l = s("780384"),
  a = s("481060"),
  o = s("410030"),
  C = s("973159"),
  u = s("74538"),
  d = s("987209"),
  _ = s("598"),
  p = s("409813"),
  c = s("614223"),
  f = s("689938"),
  x = s("570729");

function L(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, n = (0, o.default)(), {
    activeSubscription: L,
    selectedSkuId: E,
    setSelectedPlanId: S,
    startedPaymentFlowWithPaymentSourcesRef: m
  } = (0, _.usePaymentContext)(), {
    isGift: I
  } = (0, d.useGiftContext)(), P = null != L ? (0, u.getPremiumPlanItem)(L) : null, M = null != P ? (0, u.getDisplayPremiumType)(P.planId) : null, T = null != P ? (0, u.getPremiumType)(P.planId) : null, h = (0, c.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: I,
    selectedSkuId: E,
    startedPaymentFlowWithPaymentSources: m.current
  });
  return r()(null != T, "Expected premium type"), (0, i.jsx)(C.default, {
    premiumType: T,
    titleText: f.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: f.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: M
    }),
    footer: (0, i.jsxs)("div", {
      className: x.whatYouLoseButtonContainer,
      children: [(0, i.jsx)(a.Button, {
        onClick: () => {
          h ? (S((0, c.getDefaultPlanOneStepCheckout)(E, L)), t(p.Step.REVIEW)) : t(p.Step.PLAN_SELECT)
        },
        children: f.default.Messages.CONTINUE
      }), (0, i.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: (0, l.isThemeDark)(n) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
        onClick: s,
        children: f.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: s,
    isDowngrade: !0
  })
}