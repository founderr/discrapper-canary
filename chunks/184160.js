n.d(s, {
  x: function() {
return L;
  }
});
var t = n(735250);
n(470079);
var i = n(512722),
  r = n.n(i),
  l = n(780384),
  a = n(481060),
  o = n(410030),
  C = n(973159),
  d = n(74538),
  u = n(987209),
  c = n(598),
  _ = n(409813),
  p = n(614223),
  x = n(689938),
  h = n(194566);

function L(e) {
  let {
handleStepChange: s,
handleClose: n
  } = e, i = (0, o.ZP)(), {
activeSubscription: L,
selectedSkuId: f,
setSelectedPlanId: E,
startedPaymentFlowWithPaymentSourcesRef: I
  } = (0, c.usePaymentContext)(), {
isGift: M
  } = (0, u.wD)(), T = null != L ? (0, d.Af)(L) : null, N = null != T ? (0, d.gq)(T.planId) : null, j = null != T ? (0, d.Rd)(T.planId) : null, g = (0, p.Kp)({
isTrial: !1,
isGift: M,
selectedSkuId: f,
startedPaymentFlowWithPaymentSources: I.current
  });
  return r()(null != j, 'Expected premium type'), (0, t.jsx)(C.Z, {
premiumType: j,
titleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
subtitleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
  subscriptionName: N
}),
footer: (0, t.jsxs)('div', {
  className: h.whatYouLoseButtonContainer,
  children: [
    (0, t.jsx)(a.Button, {
      onClick: () => {
        g ? (E((0, p.nA)(f, L)), s(_.h8.REVIEW)) : s(_.h8.PLAN_SELECT);
      },
      children: x.Z.Messages.CONTINUE
    }),
    (0, t.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      color: (0, l.wj)(i) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
      onClick: n,
      children: x.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
    })
  ]
}),
onClose: n,
isDowngrade: !0
  });
}