n.d(s, {
  TB: function() {
return N;
  },
  VY: function() {
return j;
  },
  ZP: function() {
return T;
  }
}), n(47120), n(411104);
var t = n(735250),
  i = n(470079),
  r = n(512722),
  l = n.n(r),
  a = n(442837),
  o = n(481060),
  C = n(16084),
  d = n(987209),
  u = n(179118),
  c = n(912788),
  _ = n(509545),
  p = n(55563),
  x = n(74538),
  h = n(741245),
  L = n(474936),
  f = n(981631),
  E = n(689938),
  I = n(498151);

function M(e) {
  var s, n;
  let i, {
  planId: r,
  startingPremiumSubscriptionPlanId: o,
  paymentSourceType: C
} = e,
[d, u] = (0, a.Wu)([_.Z], () => [
  _.Z.get(o),
  _.Z.get(r)
]);
  if (l()(null != d && null != u, 'Missing startingPlan or newPlan'), s = o, n = r, L.Y1.indexOf(s) < L.Y1.indexOf(n))
switch (r) {
  case L.Xh.PREMIUM_MONTH_TIER_1:
    i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (i = E.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
    break;
  case L.Xh.PREMIUM_MONTH_TIER_2:
    i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (i = E.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
    break;
  case L.Xh.PREMIUM_YEAR_TIER_1:
    i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (i = E.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
    break;
  case L.Xh.PREMIUM_YEAR_TIER_2:
    i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
      numFreeGuildSubscriptions: L.cb
    }), f.X7u.has(null != C ? C : f.HeQ.UNKNOWN) && (i = E.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
      numFreeGuildSubscriptions: L.cb
    }));
    break;
  case L.Xh.PREMIUM_3_MONTH_TIER_2:
  case L.Xh.PREMIUM_6_MONTH_TIER_2:
    i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
    break;
  case L.Xh.PREMIUM_MONTH_TIER_0:
  case L.Xh.PREMIUM_YEAR_TIER_0:
    i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
    break;
  default:
    throw Error('Unexpected planId: '.concat(r));
}
  else if (d.skuId === L.Si.TIER_2 && u.skuId === L.Si.TIER_1)
i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
  else
switch (u.skuId) {
  case L.Si.TIER_0:
    i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
    break;
  case L.Si.TIER_1:
    i = E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
    break;
  case L.Si.TIER_2:
    i = 1 !== d.intervalCount ? E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
    break;
  default:
    throw Error('Unexpected skuId: '.concat(u.skuId));
}
  return (0, t.jsx)('div', {
className: I.text,
children: i
  });
}

function T(e) {
  let s, n, {
  planId: r,
  enableNoPaymentTrial: d,
  startingPremiumSubscriptionPlanId: u,
  onClose: c,
  followupSKUInfo: T,
  isDowngrade: N,
  hideClose: j,
  postSuccessGuild: g,
  paymentSourceType: m
} = e,
{
  theme: A
} = (0, o.useThemeContext)(),
O = (0, a.e7)([p.Z], () => null != T ? p.Z.get(T.id) : null);
  i.useEffect(() => {
if (null == T || null != O)
  return;
let {
  applicationId: e,
  id: s
} = T;
(0, C.$N)(e, s).catch(f.VqG);
  }, [
T,
O
  ]);
  let S = e => {
if (e.skuId === L.Si.TIER_0)
  return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? E.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
if (e.skuId === L.Si.TIER_1)
  return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? E.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
return f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? E.Z.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : d ? E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : E.Z.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2;
  };
  if (null != O)
s = (0, t.jsx)('div', {
  className: I.text,
  children: E.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
    skuName: O.name
  })
});
  else if (null != u)
s = (0, t.jsx)(M, {
  planId: r,
  startingPremiumSubscriptionPlanId: u
});
  else if (null != g) {
let e = _.Z.get(r);
l()(null != e, 'Missing plan'), s = (0, t.jsxs)(t.Fragment, {
  children: [
    (0, t.jsx)('div', {
      className: I.text,
      children: S(e)
    }),
    (0, t.jsx)('div', {
      className: I.text,
      children: E.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
        guildName: g.name
      })
    })
  ]
});
  } else {
let e = _.Z.get(r);
l()(null != e, 'Missing plan'), s = (0, t.jsx)('div', {
  className: I.text,
  children: S(e)
});
  }
  let R = x.ZP.getPremiumType(r);
  return l()(null != R, 'premium type should not be null in purchase confirmation'), n = null != O ? E.Z.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
skuName: O.name
  }) : N ? E.Z.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != g ? E.Z.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : E.Z.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, t.jsxs)('div', {
className: I.confirmation,
children: [
  (0, t.jsx)(h.C, {
    className: I.banner,
    theme: A,
    premiumType: R,
    type: f.X7u.has(null != m ? m : f.HeQ.UNKNOWN) ? h.C.Types.PREMIUM_PAYMENT_STARTED : null != u ? h.C.Types.PREMIUM_UPDATED : h.C.Types.PREMIUM_ACTIVATED
  }),
  s,
  j ? null : (0, t.jsx)(o.Button, {
    onClick: c,
    children: n
  })
]
  });
}

function N(e) {
  let {
planId: s,
onClose: n
  } = e, {
giftRecipient: i,
selectedGiftStyle: r,
hasSentMessage: o,
giftMessageError: C,
isSendingMessage: p
  } = (0, d.wD)(), x = (0, a.e7)([_.Z], () => _.Z.get(s));
  l()(null != x, 'Missing plan');
  let h = (0, a.e7)([c.Z], () => c.Z.getGiftCode(x.skuId));
  return (0, t.jsx)(u.Z, {
giftCode: h,
subscriptionPlan: x,
onClose: n,
selectedGiftStyle: r,
hasSentMessage: o,
giftRecipient: i,
giftMessageError: C,
isSendingMessage: p
  });
}

function j() {
  return (0, t.jsxs)('div', {
className: I.redirectConfirmation,
children: [
  (0, t.jsx)(o.Heading, {
    variant: 'heading-xl/bold',
    children: E.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_HEADER
  }),
  (0, t.jsxs)('div', {
    className: I.redirectBody,
    children: [
      (0, t.jsx)(o.Text, {
        variant: 'text-md/normal',
        children: E.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_BODY
      }),
      (0, t.jsx)('br', {}),
      (0, t.jsx)(o.Text, {
        variant: 'text-md/normal',
        children: E.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_CONFIRM_MODAL_INSTRUCTIONS
      })
    ]
  })
]
  });
}