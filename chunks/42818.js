"use strict";
i.r(n), i.d(n, {
  PremiumInvoiceLabelWithAdjustment: function() {
    return g
  },
  PremiumSubscriptionChangePlanInvoiceRows: function() {
    return j
  },
  PremiumSubscriptionCurrentInvoiceRows: function() {
    return D
  },
  PremiumTrialInvoiceTableRow: function() {
    return Y
  },
  SubscriptionInvoiceFooter: function() {
    return F
  },
  SubscriptionInvoiceGift: function() {
    return H
  },
  SubscriptionPeriodResetNotice: function() {
    return B
  }
}), i("411104"), i("724458"), i("47120");
var t = i("735250"),
  r = i("470079"),
  a = i("120356"),
  l = i.n(a),
  s = i("512722"),
  u = i.n(s),
  o = i("442837"),
  c = i("481060"),
  I = i("911969"),
  d = i("100527"),
  m = i("906732"),
  T = i("509545"),
  P = i("259580"),
  _ = i("396525"),
  v = i("63063"),
  M = i("74538"),
  R = i("937615"),
  f = i("374649"),
  N = i("591548"),
  E = i("639119"),
  p = i("653798"),
  S = i("585602"),
  b = i("474936"),
  U = i("981631"),
  L = i("689938"),
  O = i("579359");
let A = (e, n) => {
    var i;
    return !!(null === (i = e.discounts) || void 0 === i ? void 0 : i.some(e => e.type === n))
  },
  C = (e, n) => {
    var i, t, r;
    return e.subscriptionPlanPrice - (null !== (r = null === (t = e.discounts) || void 0 === t ? void 0 : null === (i = t.find(e => e.type === n)) || void 0 === i ? void 0 : i.amount) && void 0 !== r ? r : 0)
  };

function x(e) {
  var n;
  let {
    invoiceItem: i,
    overrideAmount: r,
    showGuildSubscriptionAdjustmentTooltip: a,
    currency: l,
    className: s,
    isPrepaidPaymentSource: d,
    referralTrialOfferId: m
  } = e, P = (0, o.useStateFromStores)([T.default], () => T.default.get(i.subscriptionPlanId)), v = null === (n = (0, E.usePremiumTrialOffer)(m)) || void 0 === n ? void 0 : n.subscription_trial;
  u()(null != P, "Missing subscriptionPlan");
  let f = function(e, n, i, t) {
    let r = A(e, I.InvoiceDiscountTypes.PREMIUM_TRIAL);
    switch (e.subscriptionPlanId) {
      case b.SubscriptionPlans.PREMIUM_MONTH_LEGACY:
      case b.SubscriptionPlans.PREMIUM_YEAR_LEGACY:
      case b.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case b.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
      case b.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
      case b.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
      case b.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
      case b.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
      case b.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case b.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        return (0, M.getDisplayName)(e.subscriptionPlanId, r, i, t);
      case b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
      case b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
        return L.default.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity,
          intervalCount: n.intervalCount
        });
      case b.SubscriptionPlans.PREMIUM_MONTH_GUILD:
        return L.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity
        });
      case b.SubscriptionPlans.PREMIUM_YEAR_GUILD:
        return L.default.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity
        })
    }
    switch (n.interval) {
      case b.SubscriptionIntervalTypes.MONTH:
        if (1 === n.intervalCount) return L.default.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
          planName: n.name
        });
        return L.default.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
          planName: n.name,
          intervalCount: n.intervalCount
        });
      case b.SubscriptionIntervalTypes.YEAR:
        return L.default.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
          planName: n.name
        })
    }
    throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
  }(i, P, d, (0, M.formatIntervalDuration)({
    intervalType: null == v ? void 0 : v.interval,
    intervalCount: null == v ? void 0 : v.interval_count
  }));
  !0 === a && (f = (0, t.jsxs)("div", {
    className: O.invoiceItemLabelWithIcon,
    children: [(0, t.jsxs)("div", {
      children: [f, " "]
    }), (0, t.jsx)(c.Tooltip, {
      text: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
      "aria-label": L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
      tooltipClassName: O.invoiceItemTooltip,
      children: e => (0, t.jsx)(_.default, {
        ...e,
        className: O.invoiceItemLabelIcon
      })
    })]
  }));
  let N = (0, R.formatPrice)(null != r ? r : i.amount, l),
    S = d ? N : (0, R.formatRate)(N, P.interval, P.intervalCount);
  return (0, t.jsx)(p.PremiumInvoiceDiscountedTableRow, {
    label: f,
    value: S,
    originalAmount: i.subscriptionPlanPrice * i.quantity,
    discounts: i.discounts,
    interval: P.interval,
    intervalCount: P.intervalCount,
    currency: l,
    className: s
  })
}

function g(e) {
  let {
    label: n,
    tooltipText: i,
    tooltipAriaLabel: r
  } = e;
  return (0, t.jsxs)("div", {
    className: O.invoiceItemLabelWithIcon,
    children: [n, (0, t.jsx)(c.Tooltip, {
      clickableOnMobile: !0,
      text: i,
      "aria-label": r,
      tooltipClassName: O.invoiceItemTooltip,
      children: e => (0, t.jsx)(_.default, {
        ...e,
        className: O.invoiceItemLabelIcon
      })
    })]
  })
}

function D(e) {
  let {
    invoice: n,
    isPrepaidPaymentSource: i
  } = e, r = (0, N.coalesceInvoiceItems)(n.invoiceItems), a = r.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), l = r.find(e => (0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), s = (0, o.useStateFromStores)([T.default], () => null != l ? T.default.get(l.subscriptionPlanId) : null), u = null != l ? l.amount : 0, c = (0, R.formatPrice)(u, n.currency), I = null != s ? (0, R.formatRate)(c, s.interval, s.intervalCount) : 0;
  return (0, t.jsxs)(t.Fragment, {
    children: [null != a ? (0, t.jsx)(x, {
      invoiceItem: a,
      currency: n.currency,
      isPrepaidPaymentSource: i
    }) : null, 0 !== u && null != l && null != s ? (0, t.jsx)(p.PremiumInvoiceTableRow, {
      label: L.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
        numGuildSubscriptions: l.quantity,
        planName: (0, M.getDisplayName)(s.id, !1, i)
      }),
      value: i ? c : I
    }) : null, (0, t.jsx)(S.default, {
      invoice: n
    }), (0, t.jsx)(p.PremiumInvoiceTableDivider, {}), (0, t.jsx)(p.PremiumInvoiceTableTotalRow, {
      label: (n.taxInclusive ? i ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
      value: n.currency === U.CurrencyCodes.USD ? (0, R.formatPrice)(n.total, n.currency) : "".concat((0, R.formatPrice)(n.total, n.currency), "*")
    })]
  })
}

function j(e) {
  let {
    invoice: n,
    newPlan: i,
    isPrepaidPaymentSource: r,
    referralTrialOfferId: a
  } = e, l = (0, N.coalesceInvoiceItems)(n.invoiceItems), s = l.find(e => e.subscriptionPlanId === i.id);
  u()(null != s, "Expected newPlanInvoiceItem");
  let o = l.find(e => !(0, M.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount < 0),
    c = l.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === I.InvoiceDiscountTypes.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
    d = A(s, I.InvoiceDiscountTypes.PREMIUM_TRIAL),
    m = C(s, I.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
    T = s.quantity * m,
    P = s.amount + (null != o ? o.amount : 0) - T + (null != c ? c.amount : 0),
    _ = l.filter(e => e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(x, {
      invoiceItem: s,
      currency: n.currency,
      overrideAmount: T,
      isPrepaidPaymentSource: r,
      referralTrialOfferId: a
    }), 0 === P || d ? null : (0, t.jsx)(p.PremiumInvoiceTableRow, {
      label: (0, t.jsx)(g, {
        label: L.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
          planName: (0, M.isPremiumSubscriptionPlan)(i.id) ? (0, M.getTierDisplayName)(i.id) : i.name
        }),
        tooltipText: L.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
      }),
      value: (0, R.formatPrice)(P, n.currency)
    }), 0 !== _ ? (0, t.jsx)(p.PremiumInvoiceTableRow, {
      label: (0, t.jsx)(g, {
        label: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
        tooltipText: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
        tooltipAriaLabel: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
      }),
      value: (0, R.formatPrice)(_, n.currency)
    }) : null, (0, t.jsx)(S.default, {
      invoice: n
    }), (0, t.jsx)(p.PremiumInvoiceTableDivider, {}), (0, t.jsx)(p.PremiumInvoiceTableTotalRow, {
      label: (n.taxInclusive ? r ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
      value: n.currency === U.CurrencyCodes.USD ? (0, R.formatPrice)(n.total, n.currency) : "".concat((0, R.formatPrice)(n.total, n.currency), "*")
    })]
  })
}

function y(e) {
  let n = e.slice();
  return n.sort((e, n) => {
    let i = (0, M.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId),
      t = (0, M.isPremiumBaseSubscriptionPlan)(n.subscriptionPlanId);
    return i && !t ? -1 : !i && t ? 1 : 0
  }), n
}

function h(e) {
  return e.filter(e => {
    let {
      subscriptionPlanId: n
    } = e;
    return n !== b.SubscriptionPlans.NONE_MONTH && n !== b.SubscriptionPlans.NONE_YEAR
  })
}

function B(e) {
  let {
    proratedInvoice: n,
    renewalInvoice: i
  } = e, {
    intervalType: r,
    intervalCount: a
  } = (0, M.getIntervalForInvoice)(n), {
    intervalType: l,
    intervalCount: s
  } = (0, M.getIntervalForInvoice)(i);
  return r !== l || a !== s || n.subscriptionPeriodEnd.getTime() === i.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)("div", {
    className: O.subscriptionPeriodResetNotice,
    children: L.default.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
      renewalDate: n.subscriptionPeriodEnd
    })
  })
}

function G(e) {
  let {
    isUpdate: n,
    currentInvoice: i,
    newInvoice: r
  } = e, a = null != i ? (0, N.coalesceInvoiceItems)(i.invoiceItems) : null, s = null != i ? (0, M.getIntervalForInvoice)(i) : null, {
    intervalType: u,
    intervalCount: o
  } = (0, M.getIntervalForInvoice)(r), c = null != s && (s.intervalType !== u || s.intervalCount !== o);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(p.PremiumInvoiceTableDivider, {
      extended: !0
    }), null != i ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(p.PremiumInvoiceTableHeader, {
        children: L.default.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
      }), h(y((0, N.coalesceInvoiceItems)(i.invoiceItems))).map(e => (0, t.jsx)(x, {
        invoiceItem: e,
        currency: i.currency
      }, e.id)), (0, t.jsx)(p.PremiumInvoiceTableDivider, {
        extended: !0
      })]
    }) : null, (0, t.jsx)(p.PremiumInvoiceTableHeader, {
      children: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
    }), h(y((0, N.coalesceInvoiceItems)(r.invoiceItems))).map(e => {
      let i = null != a && !a.some(n => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
      return (0, t.jsx)(x, {
        invoiceItem: e,
        currency: r.currency,
        showGuildSubscriptionAdjustmentTooltip: c && (e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD),
        className: l()({
          [O.subscriptionAddedInvoiceItem]: !n || i
        })
      }, e.id)
    }), (0, t.jsx)(S.default, {
      invoice: r
    }), (0, t.jsx)(p.PremiumInvoiceTableDivider, {}), (0, t.jsx)(p.PremiumInvoiceTableRow, {
      label: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
      value: (0, R.formatRate)((0, R.formatPrice)(r.total, r.currency), u, o),
      className: O.subscriptionCostRow
    })]
  })
}

function w(e) {
  var n;
  let {
    proratedInvoice: i,
    renewalInvoice: r,
    isTrial: a,
    isUpdate: l,
    overrideRenewalDate: s,
    trialFooterMessageOverride: u
  } = e, o = null === (n = (0, E.usePremiumTrialOffer)()) || void 0 === n ? void 0 : n.subscription_trial, {
    intervalType: c,
    intervalCount: I
  } = (0, M.getIntervalForInvoice)(r);
  if (null == i) return null;
  if (a) {
    let e = (0, M.formatIntervalDuration)({
        intervalType: null == o ? void 0 : o.interval,
        intervalCount: null == o ? void 0 : o.interval_count
      }),
      n = (null == o ? void 0 : o.interval) === b.SubscriptionIntervalTypes.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
    return (0, t.jsx)(t.Fragment, {
      children: null != u ? u : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
        duration: e,
        days: n,
        contactLink: U.MarketingURLs.CONTACT,
        helpdeskArticle: v.default.getArticleURL(U.HelpdeskArticles.PREMIUM_TRIAL)
      })
    })
  }
  let d = r.taxInclusive ? L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
  return (0, t.jsx)(t.Fragment, {
    children: d.format({
      rate: (0, R.formatRate)((0, R.formatPrice)(r.subtotal, r.currency), c, I),
      renewalDate: null != s ? s : l ? null != i ? i.subscriptionPeriodEnd : r.subscriptionPeriodStart : r.subscriptionPeriodEnd,
      contactLink: U.MarketingURLs.CONTACT,
      helpdeskArticle: v.default.getArticleURL(U.HelpdeskArticles.BILLING)
    })
  })
}

function F(e) {
  let {
    premiumSubscription: n,
    proratedInvoice: i,
    renewalInvoice: a,
    overrideRenewalDate: l,
    isUpdate: s = !1,
    isTrial: u = !1,
    priceOptions: o,
    isPrepaidPaymentSource: I = !1,
    trialFooterMessageOverride: T,
    hideSubscriptionDetails: _ = !1
  } = e, {
    analyticsLocations: v
  } = (0, m.default)(), M = {
    subscriptionId: null == n ? void 0 : n.id,
    renewal: !0,
    preventFetch: !s,
    analyticsLocatinons: v,
    analyticsLocation: d.default.SUBSCRIPTION_INVOICE_FOOTER,
    ...o
  }, [R] = (0, f.useSubscriptionInvoicePreview)(M), [N, E] = r.useState(!1);
  return (0, t.jsxs)(t.Fragment, {
    children: [I ? null : (0, t.jsx)(p.PremiumInvoiceTableFinePrint, {
      children: (0, t.jsx)(w, {
        proratedInvoice: i,
        renewalInvoice: a,
        isTrial: u,
        isUpdate: s,
        overrideRenewalDate: l,
        trialFooterMessageOverride: T
      })
    }), !_ && (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)(c.Clickable, {
        onClick: () => E(e => !e),
        className: O.subscriptionDetailsToggle,
        children: [N ? L.default.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : L.default.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, t.jsx)(P.default, {
          direction: N ? P.default.Directions.UP : P.default.Directions.DOWN,
          className: O.subscriptionDetailsToggleCaret
        })]
      }), N ? (0, t.jsx)(G, {
        isUpdate: s,
        currentInvoice: R,
        newInvoice: a
      }) : null]
    })]
  })
}

function H(e) {
  let n, {
      plan: i,
      className: r,
      isPrepaidPaymentSource: a = !1,
      isCustomGift: l = !1,
      invoicePreview: s
    } = e,
    {
      tax: u,
      taxInclusive: o,
      currency: I
    } = s,
    d = s.total,
    m = d - u,
    T = (0, R.formatPrice)(m, I),
    P = (0, R.formatPrice)(d, I);
  return n = l ? (0, M.getIntervalString)(i.interval, !0, void 0, void 0, !0, (0, M.getPremiumType)(i.id)) : L.default.Messages.BILLING_INVOICE_GIFT_PLAN.format({
    planName: (0, M.getDisplayName)(i.id, !1, a)
  }), (0, t.jsxs)("div", {
    className: r,
    children: [(0, t.jsx)(c.FormTitle, {
      children: L.default.Messages.PREMIUM_GIFTING_BUTTON
    }), u >= 0 && !1 === o ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(c.Text, {
        variant: "text-md/bold",
        className: O.purchaseDetailsHeaderText,
        children: n
      }), (0, t.jsxs)(p.PremiumInvoiceTable, {
        className: r,
        children: [(0, t.jsx)(p.PremiumInvoiceTableHeader, {
          children: L.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
        }), (0, t.jsx)(p.PremiumInvoiceTableRow, {
          label: n,
          value: T
        }), (0, t.jsx)(S.default, {
          invoice: s
        }), (0, t.jsx)(p.PremiumInvoiceTableDivider, {}), (0, t.jsx)(p.PremiumInvoiceTableRow, {
          label: L.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          value: P,
          className: O.subscriptionCostRow
        })]
      })]
    }) : (0, t.jsx)(c.Heading, {
      variant: "text-md/normal",
      children: "".concat(n, " - ").concat(P)
    })]
  })
}

function Y(e) {
  let n, {
      invoice: i,
      plan: r
    } = e,
    a = (0, N.coalesceInvoiceItems)(i.invoiceItems).find(e => e.subscriptionPlanId === r.id);
  return u()(null != a, "newPlanInvoiceItem can not be null"), r.interval === b.SubscriptionIntervalTypes.MONTH ? n = i.taxInclusive ? L.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : L.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : r.interval === b.SubscriptionIntervalTypes.YEAR ? n = i.taxInclusive ? L.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : L.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : u()(!1, "Invalid interval type"), (0, t.jsx)(c.Text, {
    variant: "text-md/normal",
    children: n.format({
      price: (0, R.formatPrice)(a.subscriptionPlanPrice, i.currency)
    })
  })
}