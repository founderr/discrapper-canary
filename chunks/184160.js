"use strict";
s.r(t), s.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return E
  }
});
var n = s("735250");
s("470079");
var i = s("512722"),
  r = s.n(i),
  l = s("780384"),
  a = s("481060"),
  o = s("410030"),
  u = s("973159"),
  C = s("74538"),
  d = s("987209"),
  c = s("598"),
  p = s("409813"),
  _ = s("614223"),
  f = s("689938"),
  x = s("570729");

function E(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, i = (0, o.default)(), {
    activeSubscription: E,
    selectedSkuId: m,
    setSelectedPlanId: L,
    startedPaymentFlowWithPaymentSourcesRef: S
  } = (0, c.usePaymentContext)(), {
    isGift: I
  } = (0, d.useGiftContext)(), h = null != E ? (0, C.getPremiumPlanItem)(E) : null, P = null != h ? (0, C.getDisplayPremiumType)(h.planId) : null, T = null != h ? (0, C.getPremiumType)(h.planId) : null, M = (0, _.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: I,
    selectedSkuId: m,
    startedPaymentFlowWithPaymentSources: S.current
  });
  return r()(null != T, "Expected premium type"), (0, n.jsx)(u.default, {
    premiumType: T,
    titleText: f.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: f.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: P
    }),
    footer: (0, n.jsxs)("div", {
      className: x.whatYouLoseButtonContainer,
      children: [(0, n.jsx)(a.Button, {
        onClick: () => {
          M ? (L((0, _.getDefaultPlanOneStepCheckout)(m, E)), t(p.Step.REVIEW)) : t(p.Step.PLAN_SELECT)
        },
        children: f.default.Messages.CONTINUE
      }), (0, n.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: (0, l.isThemeDark)(i) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
        onClick: s,
        children: f.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: s,
    isDowngrade: !0
  })
}