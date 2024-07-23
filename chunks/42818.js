a.d(n, {
  As: function() {
return h;
  },
  By: function() {
return U;
  },
  Lu: function() {
return y;
  },
  e9: function() {
return j;
  },
  hG: function() {
return Z;
  },
  nd: function() {
return Y;
  },
  yT: function() {
return k;
  }
}), a(411104), a(724458), a(47120);
var s = a(735250),
  t = a(470079),
  r = a(120356),
  l = a.n(r),
  i = a(512722),
  o = a.n(i),
  c = a(442837),
  u = a(481060),
  d = a(911969),
  _ = a(100527),
  I = a(906732),
  E = a(509545),
  T = a(259580),
  A = a(63063),
  N = a(74538),
  P = a(937615),
  M = a(374649),
  R = a(591548),
  p = a(639119),
  L = a(653798),
  f = a(585602),
  C = a(474936),
  m = a(981631),
  S = a(689938),
  b = a(104125);
let v = (e, n) => {
var a;
return !!(null === (a = e.discounts) || void 0 === a ? void 0 : a.some(e => e.type === n));
  },
  g = (e, n) => {
var a, s, t;
return e.subscriptionPlanPrice - (null !== (t = null === (s = e.discounts) || void 0 === s ? void 0 : null === (a = s.find(e => e.type === n)) || void 0 === a ? void 0 : a.amount) && void 0 !== t ? t : 0);
  };

function O(e) {
  var n;
  let {
invoiceItem: a,
overrideAmount: t,
showGuildSubscriptionAdjustmentTooltip: r,
currency: l,
className: i,
isPrepaidPaymentSource: _,
referralTrialOfferId: I
  } = e, T = (0, c.e7)([E.Z], () => E.Z.get(a.subscriptionPlanId)), A = null === (n = (0, p.N)(I)) || void 0 === n ? void 0 : n.subscription_trial;
  o()(null != T, 'Missing subscriptionPlan');
  let M = function(e, n, a, s) {
let t = v(e, d.eW.PREMIUM_TRIAL);
switch (e.subscriptionPlanId) {
  case C.Xh.PREMIUM_MONTH_LEGACY:
  case C.Xh.PREMIUM_YEAR_LEGACY:
  case C.Xh.PREMIUM_MONTH_TIER_0:
  case C.Xh.PREMIUM_YEAR_TIER_0:
  case C.Xh.PREMIUM_MONTH_TIER_1:
  case C.Xh.PREMIUM_YEAR_TIER_1:
  case C.Xh.PREMIUM_MONTH_TIER_2:
  case C.Xh.PREMIUM_YEAR_TIER_2:
  case C.Xh.PREMIUM_3_MONTH_TIER_2:
  case C.Xh.PREMIUM_6_MONTH_TIER_2:
    return (0, N.Gf)(e.subscriptionPlanId, t, a, s);
  case C.Xh.PREMIUM_3_MONTH_GUILD:
  case C.Xh.PREMIUM_6_MONTH_GUILD:
    return S.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
      num: e.quantity,
      intervalCount: n.intervalCount
    });
  case C.Xh.PREMIUM_MONTH_GUILD:
    return S.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
      num: e.quantity
    });
  case C.Xh.PREMIUM_YEAR_GUILD:
    return S.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
      num: e.quantity
    });
}
switch (n.interval) {
  case C.rV.MONTH:
    if (1 === n.intervalCount)
      return S.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
        planName: n.name
      });
    return S.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
      planName: n.name,
      intervalCount: n.intervalCount
    });
  case C.rV.YEAR:
    return S.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
      planName: n.name
    });
}
throw Error('Unexpected invoice plan: '.concat(e.subscriptionPlanId));
  }(a, T, _, (0, N.if)({
intervalType: null == A ? void 0 : A.interval,
intervalCount: null == A ? void 0 : A.interval_count
  }));
  !0 === r && (M = (0, s.jsxs)('div', {
className: b.invoiceItemLabelWithIcon,
children: [
  (0, s.jsxs)('div', {
    children: [
      M,
      ' '
    ]
  }),
  (0, s.jsx)(u.Tooltip, {
    text: S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
    'aria-label': S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
    tooltipClassName: b.invoiceItemTooltip,
    children: e => (0, s.jsx)(u.CircleQuestionIcon, {
      size: 'md',
      color: 'currentColor',
      ...e,
      className: b.invoiceItemLabelIcon
    })
  })
]
  }));
  let R = (0, P.T4)(null != t ? t : a.amount, l),
f = _ ? R : (0, P.og)(R, T.interval, T.intervalCount);
  return (0, s.jsx)(L.i$, {
label: M,
value: f,
originalAmount: a.subscriptionPlanPrice * a.quantity,
discounts: a.discounts,
interval: T.interval,
intervalCount: T.intervalCount,
currency: l,
className: i
  });
}

function h(e) {
  let {
label: n,
tooltipText: a,
tooltipAriaLabel: t
  } = e;
  return (0, s.jsxs)('div', {
className: b.invoiceItemLabelWithIcon,
children: [
  n,
  (0, s.jsx)(u.Tooltip, {
    clickableOnMobile: !0,
    text: a,
    'aria-label': t,
    tooltipClassName: b.invoiceItemTooltip,
    children: e => (0, s.jsx)(u.CircleQuestionIcon, {
      size: 'md',
      color: 'currentColor',
      ...e,
      className: b.invoiceItemLabelIcon
    })
  })
]
  });
}

function U(e) {
  let {
invoice: n,
isPrepaidPaymentSource: a
  } = e, t = (0, R.j)(n.invoiceItems), r = t.find(e => !(0, N.Z8)(e.subscriptionPlanId) && e.amount >= 0), l = t.find(e => (0, N.Z8)(e.subscriptionPlanId) && e.amount >= 0), i = (0, c.e7)([E.Z], () => null != l ? E.Z.get(l.subscriptionPlanId) : null), o = null != l ? l.amount : 0, u = (0, P.T4)(o, n.currency), d = null != i ? (0, P.og)(u, i.interval, i.intervalCount) : 0;
  return (0, s.jsxs)(s.Fragment, {
children: [
  null != r ? (0, s.jsx)(O, {
    invoiceItem: r,
    currency: n.currency,
    isPrepaidPaymentSource: a
  }) : null,
  0 !== o && null != l && null != i ? (0, s.jsx)(L.R$, {
    label: S.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
      numGuildSubscriptions: l.quantity,
      planName: (0, N.Gf)(i.id, !1, a)
    }),
    value: a ? u : d
  }) : null,
  (0, s.jsx)(f.Z, {
    invoice: n
  }),
  (0, s.jsx)(L.KU, {}),
  (0, s.jsx)(L.Ji, {
    label: (n.taxInclusive ? a ? S.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : S.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : S.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
    value: n.currency === m.pKx.USD ? (0, P.T4)(n.total, n.currency) : ''.concat((0, P.T4)(n.total, n.currency), '*')
  })
]
  });
}

function y(e) {
  let {
invoice: n,
newPlan: a,
isPrepaidPaymentSource: t,
referralTrialOfferId: r
  } = e, l = (0, R.j)(n.invoiceItems), i = l.find(e => e.subscriptionPlanId === a.id);
  o()(null != i, 'Expected newPlanInvoiceItem');
  let c = l.find(e => !(0, N.Z8)(e.subscriptionPlanId) && e.amount < 0),
u = l.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
_ = v(i, d.eW.PREMIUM_TRIAL),
I = g(i, d.eW.SUBSCRIPTION_PLAN),
E = i.quantity * I,
T = i.amount + (null != c ? c.amount : 0) - E + (null != u ? u.amount : 0),
A = l.filter(e => e.subscriptionPlanId === C.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === C.Xh.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(O, {
    invoiceItem: i,
    currency: n.currency,
    overrideAmount: E,
    isPrepaidPaymentSource: t,
    referralTrialOfferId: r
  }),
  0 === T || _ ? null : (0, s.jsx)(L.R$, {
    label: (0, s.jsx)(h, {
      label: S.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
        planName: (0, N.PV)(a.id) ? (0, N.aq)(a.id) : a.name
      }),
      tooltipText: S.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
    }),
    value: (0, P.T4)(T, n.currency)
  }),
  0 !== A ? (0, s.jsx)(L.R$, {
    label: (0, s.jsx)(h, {
      label: S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
      tooltipText: S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
      tooltipAriaLabel: S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
    }),
    value: (0, P.T4)(A, n.currency)
  }) : null,
  (0, s.jsx)(f.Z, {
    invoice: n
  }),
  (0, s.jsx)(L.KU, {}),
  (0, s.jsx)(L.Ji, {
    label: (n.taxInclusive ? t ? S.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : S.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : S.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
    value: n.currency === m.pKx.USD ? (0, P.T4)(n.total, n.currency) : ''.concat((0, P.T4)(n.total, n.currency), '*')
  })
]
  });
}

function B(e) {
  let n = e.slice();
  return n.sort((e, n) => {
let a = (0, N.uZ)(e.subscriptionPlanId),
  s = (0, N.uZ)(n.subscriptionPlanId);
return a && !s ? -1 : !a && s ? 1 : 0;
  }), n;
}

function x(e) {
  return e.filter(e => {
let {
  subscriptionPlanId: n
} = e;
return n !== C.Xh.NONE_MONTH && n !== C.Xh.NONE_YEAR;
  });
}

function Z(e) {
  let {
proratedInvoice: n,
renewalInvoice: a
  } = e, {
intervalType: t,
intervalCount: r
  } = (0, N.dn)(n), {
intervalType: l,
intervalCount: i
  } = (0, N.dn)(a);
  return t !== l || r !== i || n.subscriptionPeriodEnd.getTime() === a.subscriptionPeriodStart.getTime() ? null : (0, s.jsx)('div', {
className: b.subscriptionPeriodResetNotice,
children: S.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
  renewalDate: n.subscriptionPeriodEnd
})
  });
}

function G(e) {
  let {
isUpdate: n,
currentInvoice: a,
newInvoice: t
  } = e, r = null != a ? (0, R.j)(a.invoiceItems) : null, i = null != a ? (0, N.dn)(a) : null, {
intervalType: o,
intervalCount: c
  } = (0, N.dn)(t), u = null != i && (i.intervalType !== o || i.intervalCount !== c);
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(L.KU, {
    extended: !0
  }),
  null != a ? (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(L.q9, {
        children: S.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
      }),
      x(B((0, R.j)(a.invoiceItems))).map(e => (0, s.jsx)(O, {
        invoiceItem: e,
        currency: a.currency
      }, e.id)),
      (0, s.jsx)(L.KU, {
        extended: !0
      })
    ]
  }) : null,
  (0, s.jsx)(L.q9, {
    children: S.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
  }),
  x(B((0, R.j)(t.invoiceItems))).map(e => {
    let a = null != r && !r.some(n => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
    return (0, s.jsx)(O, {
      invoiceItem: e,
      currency: t.currency,
      showGuildSubscriptionAdjustmentTooltip: u && (e.subscriptionPlanId === C.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === C.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === C.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === C.Xh.PREMIUM_6_MONTH_GUILD),
      className: l()({
        [b.subscriptionAddedInvoiceItem]: !n || a
      })
    }, e.id);
  }),
  (0, s.jsx)(f.Z, {
    invoice: t
  }),
  (0, s.jsx)(L.KU, {}),
  (0, s.jsx)(L.R$, {
    label: S.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
    value: (0, P.og)((0, P.T4)(t.total, t.currency), o, c),
    className: b.subscriptionCostRow
  })
]
  });
}

function D(e) {
  var n;
  let {
proratedInvoice: a,
renewalInvoice: t,
isTrial: r,
isUpdate: l,
overrideRenewalDate: i,
trialFooterMessageOverride: o
  } = e, c = null === (n = (0, p.N)()) || void 0 === n ? void 0 : n.subscription_trial, {
intervalType: u,
intervalCount: d
  } = (0, N.dn)(t);
  if (null == a)
return null;
  if (r) {
let e = (0, N.if)({
    intervalType: null == c ? void 0 : c.interval,
    intervalCount: null == c ? void 0 : c.interval_count
  }),
  n = (null == c ? void 0 : c.interval) === C.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
return (0, s.jsx)(s.Fragment, {
  children: null != o ? o : S.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
    duration: e,
    days: n,
    contactLink: m.EYA.CONTACT,
    helpdeskArticle: A.Z.getArticleURL(m.BhN.PREMIUM_TRIAL)
  })
});
  }
  let _ = t.taxInclusive ? S.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : S.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
  return (0, s.jsx)(s.Fragment, {
children: _.format({
  rate: (0, P.og)((0, P.T4)(t.subtotal, t.currency), u, d),
  renewalDate: null != i ? i : l ? null != a ? a.subscriptionPeriodEnd : t.subscriptionPeriodStart : t.subscriptionPeriodEnd,
  contactLink: m.EYA.CONTACT,
  helpdeskArticle: A.Z.getArticleURL(m.BhN.BILLING)
})
  });
}

function Y(e) {
  let {
premiumSubscription: n,
proratedInvoice: a,
renewalInvoice: r,
overrideRenewalDate: l,
isUpdate: i = !1,
isTrial: o = !1,
priceOptions: c,
isPrepaidPaymentSource: d = !1,
trialFooterMessageOverride: E,
hideSubscriptionDetails: A = !1
  } = e, {
analyticsLocations: N
  } = (0, I.ZP)(), P = {
subscriptionId: null == n ? void 0 : n.id,
renewal: !0,
preventFetch: !i,
analyticsLocatinons: N,
analyticsLocation: _.Z.SUBSCRIPTION_INVOICE_FOOTER,
...c
  }, [R] = (0, M.ED)(P), [p, f] = t.useState(!1);
  return (0, s.jsxs)(s.Fragment, {
children: [
  d ? null : (0, s.jsx)(L.HE, {
    children: (0, s.jsx)(D, {
      proratedInvoice: a,
      renewalInvoice: r,
      isTrial: o,
      isUpdate: i,
      overrideRenewalDate: l,
      trialFooterMessageOverride: E
    })
  }),
  !A && (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsxs)(u.Clickable, {
        onClick: () => f(e => !e),
        className: b.subscriptionDetailsToggle,
        children: [
          p ? S.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : S.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS,
          (0, s.jsx)(T.Z, {
            direction: p ? T.Z.Directions.UP : T.Z.Directions.DOWN,
            className: b.subscriptionDetailsToggleCaret
          })
        ]
      }),
      p ? (0, s.jsx)(G, {
        isUpdate: i,
        currentInvoice: R,
        newInvoice: r
      }) : null
    ]
  })
]
  });
}

function j(e) {
  let n, {
  plan: a,
  className: t,
  isPrepaidPaymentSource: r = !1,
  isCustomGift: l = !1,
  invoicePreview: i
} = e,
{
  tax: o,
  taxInclusive: c,
  currency: d
} = i,
_ = i.total,
I = _ - o,
E = (0, P.T4)(I, d),
T = (0, P.T4)(_, d);
  return n = l ? (0, N.L7)(a.interval, !0, void 0, void 0, !0, (0, N.Rd)(a.id)) : S.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
planName: (0, N.Gf)(a.id, !1, r)
  }), (0, s.jsxs)('div', {
className: t,
children: [
  (0, s.jsx)(u.FormTitle, {
    children: S.Z.Messages.PREMIUM_GIFTING_BUTTON
  }),
  o >= 0 && !1 === c ? (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(u.Text, {
        variant: 'text-md/bold',
        className: b.purchaseDetailsHeaderText,
        children: n
      }),
      (0, s.jsxs)(L.PO, {
        className: t,
        children: [
          (0, s.jsx)(L.q9, {
            children: S.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
          }),
          (0, s.jsx)(L.R$, {
            label: n,
            value: E
          }),
          (0, s.jsx)(f.Z, {
            invoice: i
          }),
          (0, s.jsx)(L.KU, {}),
          (0, s.jsx)(L.R$, {
            label: S.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
            value: T,
            className: b.subscriptionCostRow
          })
        ]
      })
    ]
  }) : (0, s.jsx)(u.Heading, {
    variant: 'text-md/normal',
    children: ''.concat(n, ' - ').concat(T)
  })
]
  });
}

function k(e) {
  let n, {
  invoice: a,
  plan: t
} = e,
r = (0, R.j)(a.invoiceItems).find(e => e.subscriptionPlanId === t.id);
  return o()(null != r, 'newPlanInvoiceItem can not be null'), t.interval === C.rV.MONTH ? n = a.taxInclusive ? S.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : S.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : t.interval === C.rV.YEAR ? n = a.taxInclusive ? S.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : o()(!1, 'Invalid interval type'), (0, s.jsx)(u.Text, {
variant: 'text-md/normal',
children: n.format({
  price: (0, P.T4)(r.subscriptionPlanPrice, a.currency)
})
  });
}