n.d(s, {
  x: function() {
    return I
  }
});
var t = n(735250);
n(470079);
var i = n(512722),
  l = n.n(i),
  r = n(780384),
  C = n(481060),
  a = n(410030),
  o = n(973159),
  d = n(74538),
  _ = n(987209),
  u = n(598),
  c = n(409813),
  p = n(614223),
  x = n(689938),
  L = n(784169);

function I(e) {
  let {
    handleStepChange: s,
    handleClose: n
  } = e, i = (0, a.ZP)(), {
    activeSubscription: I,
    selectedSkuId: E,
    setSelectedPlanId: h,
    startedPaymentFlowWithPaymentSourcesRef: f
  } = (0, u.usePaymentContext)(), {
    isGift: M
  } = (0, _.wD)(), N = null != I ? (0, d.Af)(I) : null, T = null != N ? (0, d.gq)(N.planId) : null, j = null != N ? (0, d.Rd)(N.planId) : null, A = (0, p.Kp)({
    isTrial: !1,
    isGift: M,
    selectedSkuId: E,
    startedPaymentFlowWithPaymentSources: f.current
  });
  return l()(null != j, "Expected premium type"), (0, t.jsx)(o.Z, {
    premiumType: j,
    titleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
    subtitleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
      subscriptionName: T
    }),
    footer: (0, t.jsxs)("div", {
      className: L.whatYouLoseButtonContainer,
      children: [(0, t.jsx)(C.Button, {
        onClick: () => {
          A ? (h((0, p.nA)(E, I)), s(c.h8.REVIEW)) : s(c.h8.PLAN_SELECT)
        },
        children: x.Z.Messages.CONTINUE
      }), (0, t.jsx)(C.Button, {
        look: C.Button.Looks.LINK,
        color: (0, r.wj)(i) ? C.Button.Colors.WHITE : C.Button.Colors.PRIMARY,
        onClick: n,
        children: x.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
      })]
    }),
    onClose: n,
    isDowngrade: !0
  })
}