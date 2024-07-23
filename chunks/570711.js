var t = n(735250);
n(470079);
var i = n(442837),
  r = n(481060),
  l = n(906732),
  a = n(963249),
  o = n(703656),
  C = n(594174),
  d = n(451478),
  u = n(981631),
  c = n(689938),
  _ = n(830716);
s.Z = function(e) {
  let {
subscriptionTier: s,
initialPlanId: n,
giftStyle: p,
onClick: x,
buttonText: h,
analyticsLocation: L,
analyticsLocationsOverride: f,
repeatPurchase: E,
...I
  } = e, M = (0, i.e7)([C.default], () => C.default.getCurrentUser()), T = (0, i.e7)([d.Z], () => d.Z.isFocused()), {
analyticsLocations: N
  } = (0, l.ZP)();
  return (0, t.jsx)(r.ShinyButton, {
pauseAnimation: !T,
className: _.tier2Gradient,
color: r.Button.Colors.CUSTOM,
onClick: e => {
  if (e.preventDefault(), null == M) {
    (0, o.uL)(u.Z5c.LOGIN);
    return;
  }
  null == x || x(e), (0, a.Z)({
    subscriptionTier: s,
    initialPlanId: n,
    isGift: !0,
    giftStyle: p,
    analyticsLocation: L,
    analyticsLocations: null != f ? f : N,
    analyticsObject: {
      object: u.qAy.BUTTON_CTA,
      objectType: u.Qqv.GIFT
    },
    repeatPurchase: E
  });
},
...I,
children: (0, t.jsx)(r.Text, {
  variant: 'text-sm/medium',
  color: 'none',
  className: _.buttonText,
  children: null != h ? h : c.Z.Messages.PREMIUM_GIFTING_BUTTON
})
  });
};