n.d(s, {
  b: function() {
return h;
  }
});
var t = n(735250),
  i = n(470079),
  r = n(512722),
  l = n.n(r),
  a = n(881602),
  o = n(317269),
  C = n(669079),
  d = n(296848),
  u = n(987209),
  c = n(598),
  _ = n(164513),
  p = n(614277),
  x = n(698708);

function h(e) {
  var s, n;
  let r, {
  handleClose: h,
  planGroup: L,
  onSubscriptionConfirmation: f,
  renderPurchaseConfirmation: E,
  postSuccessGuild: I,
  followupSKUInfo: M,
  continueSession: T
} = e,
{
  activeSubscription: N,
  paymentSources: j,
  paymentSourceId: g,
  selectedPlan: m,
  selectedSkuId: A,
  step: O,
  updatedSubscription: S,
  startingPremiumSubscriptionPlanIdRef: R
} = (0, c.usePaymentContext)(),
{
  isGift: P,
  giftRecipient: v,
  giftCode: Z,
  hasSentMessage: y,
  isSendingMessage: b,
  sendGiftMessage: U
} = (0, u.wD)();
  l()(null != m, 'Expected plan to selected'), l()(null != A, 'Expected selectedSkuId'), l()(null != O, 'Step should be set');
  let k = i.useCallback(() => {
h(), null == f || f();
  }, [
h,
f
  ]);
  return i.useEffect(() => {
if (!(!P || null == v || null == Z || y || b || (0, C.pO)(v)))
  a.F.getCurrentConfig({
    location: '36b986_1'
  }).enabled && U({
    onSubscriptionConfirmation: f
  });
  }, [
U,
P,
v,
Z,
y,
b,
f
  ]), r = null != E ? E(m, k, S) : T ? (0, t.jsx)(o.VY, {}) : P ? (0, t.jsx)(o.TB, {
planId: m.id,
onClose: k
  }) : R.current === m.id ? (0, t.jsx)(o.ZP, {
planId: m.id,
postSuccessGuild: I,
onClose: k,
paymentSourceType: null === (s = j[null != g ? g : '']) || void 0 === s ? void 0 : s.type
  }) : (0, t.jsx)(o.ZP, {
followupSKUInfo: M,
startingPremiumSubscriptionPlanId: R.current,
planId: m.id,
onClose: k,
isDowngrade: null != N && (0, d.GY)(N, m.id, L),
paymentSourceType: null === (n = j[null != g ? g : '']) || void 0 === n ? void 0 : n.type
  }), (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsxs)(p.C3, {
    children: [
      (0, t.jsx)(x.Z, {}),
      r
    ]
  }),
  P && (0, t.jsx)(_.Z, {
    onClose: k
  })
]
  });
}