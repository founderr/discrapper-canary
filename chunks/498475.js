"use strict";
n.r(t), n.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return P
  }
});
var s = n("37983");
n("884691");
var r = n("627445"),
  l = n.n(r),
  a = n("819855"),
  i = n("77078"),
  u = n("841098"),
  o = n("360262"),
  d = n("719923"),
  c = n("635357"),
  _ = n("642906"),
  I = n("85336"),
  E = n("176108"),
  f = n("782340"),
  S = n("807564");

function P(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, r = (0, u.default)(), {
    activeSubscription: P,
    selectedSkuId: m,
    setSelectedPlanId: p,
    startedPaymentFlowWithPaymentSourcesRef: T
  } = (0, _.usePaymentContext)(), {
    isGift: N
  } = (0, c.useGiftContext)(), M = null != P ? (0, d.getPremiumPlanItem)(P) : null, C = null != M ? (0, d.getDisplayPremiumType)(M.planId) : null, R = null != M ? (0, d.getPremiumType)(M.planId) : null, L = (0, E.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: N,
    selectedSkuId: m,
    startedPaymentFlowWithPaymentSources: T.current
  });
  return l(null != R, "Expected premium type"), (0, s.jsx)(o.default, {
    premiumType: R,
    titleText: f.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: f.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: C
    }),
    footer: (0, s.jsxs)("div", {
      className: S.whatYouLoseButtonContainer,
      children: [(0, s.jsx)(i.Button, {
        onClick: () => {
          if (L) {
            let e = (0, E.getDefaultPlanOneStepCheckout)(m, P);
            p(e), t(I.Step.REVIEW)
          } else t(I.Step.PLAN_SELECT)
        },
        children: f.default.Messages.CONTINUE
      }), (0, s.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: (0, a.isThemeDark)(r) ? i.Button.Colors.WHITE : i.Button.Colors.PRIMARY,
        onClick: n,
        children: f.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}