t.d(n, {
  Z: function() {
return b;
  }
}), t(789020);
var i = t(735250),
  r = t(470079),
  o = t(131388),
  a = t(607070),
  s = t(745510),
  l = t(171246),
  c = t(689011),
  d = t(931905),
  u = t(598),
  _ = t(409813),
  p = t(586585),
  f = t(456251),
  I = t(614277),
  m = t(698708),
  C = t(750143),
  S = t(689938);

function b(e) {
  var n, t;
  let b, h, {
  showBenefits: T,
  handleClose: g,
  onSubscriptionConfirmation: E
} = e,
{
  updatedSubscription: N,
  readySlideId: P,
  selectedSku: O,
  selectedStoreListing: x,
  application: A
} = (0, u.usePaymentContext)(),
v = (0, o.Z)(C.i),
{
  createMultipleConfettiAt: R
} = r.useContext(s.h),
M = null !== (n = null == O ? void 0 : O.name) && void 0 !== n ? n : '',
L = () => {
  g(), null == E || E();
},
B = P === _.h8.CONFIRM,
y = (0, l.KW)(null !== (t = null == O ? void 0 : O.flags) && void 0 !== t ? t : 0),
k = null != x && x.benefits.length > 0 ? S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
  benefitCount: x.benefits.length
}) : null;
  return T ? v ? b = (0, i.jsx)(d.h, {
title: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
  tierName: M
}),
subtitle: null != x && x.benefits.length > 0 ? S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
  benefits: k
}) : null,
onConfirm: L,
confirmCta: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (b = null != x && null != A ? (0, i.jsx)(c.Oc, {
icon: x.thumbnail,
storeListingBenefits: x.benefits,
application: A,
title: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
  tier: M
}),
subtitle: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
description: y ? S.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
  applicationName: null == A ? void 0 : A.name
}) : S.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
  tier: M
})
  }) : (0, i.jsx)(f.Z, {}), h = (0, i.jsx)(p.Z, {
onPrimary: L,
primaryCTA: p.g.CONTINUE,
primaryText: S.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : b = v ? (0, i.jsx)(d.m, {
tierName: M,
onConfirm: L,
subscription: N
  }) : (0, i.jsx)(c.xe, {
tierName: M,
onConfirm: L,
subscription: N
  }), r.useEffect(() => {
a.Z.useReducedMotion && B && R(window.innerWidth / 2, window.innerHeight / 2);
  }, [
R,
B
  ]), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(I.C3, {
    children: [
      (0, i.jsx)(m.Z, {}),
      b
    ]
  }),
  null != h && (0, i.jsx)(I.O3, {
    children: h
  })
]
  });
}