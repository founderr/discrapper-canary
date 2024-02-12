"use strict";
n.r(t), n.d(t, {
  PremiumPaymentWhatYouLoseStep: function() {
    return m
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
  f = n("176108"),
  E = n("782340"),
  S = n("943490");

function m(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, r = (0, u.default)(), {
    activeSubscription: m,
    selectedSkuId: P,
    setSelectedPlanId: p,
    startedPaymentFlowWithPaymentSourcesRef: T
  } = (0, _.usePaymentContext)(), {
    isGift: N
  } = (0, c.useGiftContext)(), M = null != m ? (0, d.getPremiumPlanItem)(m) : null, C = null != M ? (0, d.getDisplayPremiumType)(M.planId) : null, R = null != M ? (0, d.getPremiumType)(M.planId) : null, L = (0, f.inOneStepSubscriptionCheckout)({
    isTrial: !1,
    isGift: N,
    selectedSkuId: P,
    startedPaymentFlowWithPaymentSources: T.current
  });
  return l(null != R, "Expected premium type"), (0, s.jsx)(o.default, {
    premiumType: R,
    titleText: E.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: E.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: C
    }),
    footer: (0, s.jsxs)("div", {
      className: S.whatYouLoseButtonContainer,
      children: [(0, s.jsx)(i.Button, {
        onClick: () => {
          if (L) {
            let e = (0, f.getDefaultPlanOneStepCheckout)(P, m);
            p(e), t(I.Step.REVIEW)
          } else t(I.Step.PLAN_SELECT)
        },
        children: E.default.Messages.CONTINUE
      }), (0, s.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: (0, a.isThemeDark)(r) ? i.Button.Colors.WHITE : i.Button.Colors.PRIMARY,
        onClick: n,
        children: E.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}