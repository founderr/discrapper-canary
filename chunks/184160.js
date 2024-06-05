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
  C = s("973159"),
  u = s("74538"),
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
    selectedSkuId: L,
    setSelectedPlanId: S,
    startedPaymentFlowWithPaymentSourcesRef: I
  } = (0, c.usePaymentContext)(), {
    isGift: m
  } = (0, d.useGiftContext)(), h = null != E ? (0, u.getPremiumPlanItem)(E) : null, P = null != h ? (0, u.getDisplayPremiumType)(h.planId) : null, M = null != h ? (0, u.getPremiumType)(h.planId) : null, T = (0, _.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: m,
    selectedSkuId: L,
    startedPaymentFlowWithPaymentSources: I.current
  });
  return r()(null != M, "Expected premium type"), (0, n.jsx)(C.default, {
    premiumType: M,
    titleText: f.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: f.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: P
    }),
    footer: (0, n.jsxs)("div", {
      className: x.whatYouLoseButtonContainer,
      children: [(0, n.jsx)(a.Button, {
        onClick: () => {
          T ? (S((0, _.getDefaultPlanOneStepCheckout)(L, E)), t(p.Step.REVIEW)) : t(p.Step.PLAN_SELECT)
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