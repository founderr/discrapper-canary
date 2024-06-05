"use strict";
a.r(t), a.d(t, {
  PremiumInvoiceLabelWithAdjustment: function() {
    return U
  },
  PremiumSubscriptionChangePlanInvoiceRows: function() {
    return B
  },
  PremiumSubscriptionCurrentInvoiceRows: function() {
    return h
  },
  PremiumTrialInvoiceTableRow: function() {
    return w
  },
  SubscriptionInvoiceFooter: function() {
    return Y
  },
  SubscriptionInvoiceGift: function() {
    return H
  },
  SubscriptionPeriodResetNotice: function() {
    return G
  }
}), a("411104"), a("724458"), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("512722"),
  o = a.n(l),
  u = a("442837"),
  c = a("481060"),
  d = a("911969"),
  I = a("100527"),
  _ = a("906732"),
  f = a("509545"),
  T = a("259580"),
  p = a("396525"),
  P = a("63063"),
  m = a("74538"),
  E = a("937615"),
  A = a("374649"),
  S = a("591548"),
  N = a("639119"),
  R = a("653798"),
  M = a("585602"),
  b = a("474936"),
  v = a("981631"),
  L = a("689938"),
  C = a("884615");
let y = (e, t) => {
    var a;
    return !!(null === (a = e.discounts) || void 0 === a ? void 0 : a.some(e => e.type === t))
  },
  g = (e, t) => {
    var a, n, r;
    return e.subscriptionPlanPrice - (null !== (r = null === (n = e.discounts) || void 0 === n ? void 0 : null === (a = n.find(e => e.type === t)) || void 0 === a ? void 0 : a.amount) && void 0 !== r ? r : 0)
  };

function O(e) {
  var t;
  let {
    invoiceItem: a,
    overrideAmount: r,
    showGuildSubscriptionAdjustmentTooltip: s,
    currency: i,
    className: l,
    isPrepaidPaymentSource: I,
    referralTrialOfferId: _
  } = e, T = (0, u.useStateFromStores)([f.default], () => f.default.get(a.subscriptionPlanId)), P = null === (t = (0, N.usePremiumTrialOffer)(_)) || void 0 === t ? void 0 : t.subscription_trial;
  o()(null != T, "Missing subscriptionPlan");
  let A = function(e, t, a, n) {
    let r = y(e, d.InvoiceDiscountTypes.PREMIUM_TRIAL);
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
        return (0, m.getDisplayName)(e.subscriptionPlanId, r, a, n);
      case b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
      case b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
        return L.default.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity,
          intervalCount: t.intervalCount
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
    switch (t.interval) {
      case b.SubscriptionIntervalTypes.MONTH:
        if (1 === t.intervalCount) return L.default.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
          planName: t.name
        });
        return L.default.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
          planName: t.name,
          intervalCount: t.intervalCount
        });
      case b.SubscriptionIntervalTypes.YEAR:
        return L.default.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
          planName: t.name
        })
    }
    throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
  }(a, T, I, (0, m.formatIntervalDuration)({
    intervalType: null == P ? void 0 : P.interval,
    intervalCount: null == P ? void 0 : P.interval_count
  }));
  !0 === s && (A = (0, n.jsxs)("div", {
    className: C.invoiceItemLabelWithIcon,
    children: [(0, n.jsxs)("div", {
      children: [A, " "]
    }), (0, n.jsx)(c.Tooltip, {
      text: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
      "aria-label": L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
      tooltipClassName: C.invoiceItemTooltip,
      children: e => (0, n.jsx)(p.default, {
        ...e,
        className: C.invoiceItemLabelIcon
      })
    })]
  }));
  let S = (0, E.formatPrice)(null != r ? r : a.amount, i),
    M = I ? S : (0, E.formatRate)(S, T.interval, T.intervalCount);
  return (0, n.jsx)(R.PremiumInvoiceDiscountedTableRow, {
    label: A,
    value: M,
    originalAmount: a.subscriptionPlanPrice * a.quantity,
    discounts: a.discounts,
    interval: T.interval,
    intervalCount: T.intervalCount,
    currency: i,
    className: l,
    planId: a.subscriptionPlanId
  })
}

function U(e) {
  let {
    label: t,
    tooltipText: a,
    tooltipAriaLabel: r
  } = e;
  return (0, n.jsxs)("div", {
    className: C.invoiceItemLabelWithIcon,
    children: [t, (0, n.jsx)(c.Tooltip, {
      clickableOnMobile: !0,
      text: a,
      "aria-label": r,
      tooltipClassName: C.invoiceItemTooltip,
      children: e => (0, n.jsx)(p.default, {
        ...e,
        className: C.invoiceItemLabelIcon
      })
    })]
  })
}

function h(e) {
  let {
    invoice: t,
    isPrepaidPaymentSource: a
  } = e, r = (0, S.coalesceInvoiceItems)(t.invoiceItems), s = r.find(e => !(0, m.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), i = r.find(e => (0, m.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), l = (0, u.useStateFromStores)([f.default], () => null != i ? f.default.get(i.subscriptionPlanId) : null), o = null != i ? i.amount : 0, c = (0, E.formatPrice)(o, t.currency), d = null != l ? (0, E.formatRate)(c, l.interval, l.intervalCount) : 0;
  return (0, n.jsxs)(n.Fragment, {
    children: [null != s ? (0, n.jsx)(O, {
      invoiceItem: s,
      currency: t.currency,
      isPrepaidPaymentSource: a
    }) : null, 0 !== o && null != i && null != l ? (0, n.jsx)(R.PremiumInvoiceTableRow, {
      label: L.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
        numGuildSubscriptions: i.quantity,
        planName: (0, m.getDisplayName)(l.id, !1, a)
      }),
      value: a ? c : d
    }) : null, (0, n.jsx)(M.default, {
      invoice: t
    }), (0, n.jsx)(R.PremiumInvoiceTableDivider, {}), (0, n.jsx)(R.PremiumInvoiceTableTotalRow, {
      label: (t.taxInclusive ? a ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
      value: t.currency === v.CurrencyCodes.USD ? (0, E.formatPrice)(t.total, t.currency) : "".concat((0, E.formatPrice)(t.total, t.currency), "*")
    })]
  })
}

function B(e) {
  let {
    invoice: t,
    newPlan: a,
    isPrepaidPaymentSource: r,
    referralTrialOfferId: s
  } = e, i = (0, S.coalesceInvoiceItems)(t.invoiceItems), l = i.find(e => e.subscriptionPlanId === a.id);
  o()(null != l, "Expected newPlanInvoiceItem");
  let u = i.find(e => !(0, m.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount < 0),
    c = i.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === d.InvoiceDiscountTypes.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
    I = y(l, d.InvoiceDiscountTypes.PREMIUM_TRIAL),
    _ = g(l, d.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
    f = l.quantity * _,
    T = l.amount + (null != u ? u.amount : 0) - f + (null != c ? c.amount : 0),
    p = i.filter(e => e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD).reduce((e, t) => e + t.amount, 0);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(O, {
      invoiceItem: l,
      currency: t.currency,
      overrideAmount: f,
      isPrepaidPaymentSource: r,
      referralTrialOfferId: s
    }), 0 === T || I ? null : (0, n.jsx)(R.PremiumInvoiceTableRow, {
      label: (0, n.jsx)(U, {
        label: L.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
          planName: (0, m.isPremiumSubscriptionPlan)(a.id) ? (0, m.getTierDisplayName)(a.id) : a.name
        }),
        tooltipText: L.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
      }),
      value: (0, E.formatPrice)(T, t.currency)
    }), 0 !== p ? (0, n.jsx)(R.PremiumInvoiceTableRow, {
      label: (0, n.jsx)(U, {
        label: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
        tooltipText: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
        tooltipAriaLabel: L.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
      }),
      value: (0, E.formatPrice)(p, t.currency)
    }) : null, (0, n.jsx)(M.default, {
      invoice: t
    }), (0, n.jsx)(R.PremiumInvoiceTableDivider, {}), (0, n.jsx)(R.PremiumInvoiceTableTotalRow, {
      label: (t.taxInclusive ? r ? L.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : L.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
      value: t.currency === v.CurrencyCodes.USD ? (0, E.formatPrice)(t.total, t.currency) : "".concat((0, E.formatPrice)(t.total, t.currency), "*")
    })]
  })
}

function x(e) {
  let t = e.slice();
  return t.sort((e, t) => {
    let a = (0, m.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId),
      n = (0, m.isPremiumBaseSubscriptionPlan)(t.subscriptionPlanId);
    return a && !n ? -1 : !a && n ? 1 : 0
  }), t
}

function D(e) {
  return e.filter(e => {
    let {
      subscriptionPlanId: t
    } = e;
    return t !== b.SubscriptionPlans.NONE_MONTH && t !== b.SubscriptionPlans.NONE_YEAR
  })
}

function G(e) {
  let {
    proratedInvoice: t,
    renewalInvoice: a
  } = e, {
    intervalType: r,
    intervalCount: s
  } = (0, m.getIntervalForInvoice)(t), {
    intervalType: i,
    intervalCount: l
  } = (0, m.getIntervalForInvoice)(a);
  return r !== i || s !== l || t.subscriptionPeriodEnd.getTime() === a.subscriptionPeriodStart.getTime() ? null : (0, n.jsx)("div", {
    className: C.subscriptionPeriodResetNotice,
    children: L.default.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
      renewalDate: t.subscriptionPeriodEnd
    })
  })
}

function k(e) {
  let {
    isUpdate: t,
    currentInvoice: a,
    newInvoice: r
  } = e, s = null != a ? (0, S.coalesceInvoiceItems)(a.invoiceItems) : null, l = null != a ? (0, m.getIntervalForInvoice)(a) : null, {
    intervalType: o,
    intervalCount: u
  } = (0, m.getIntervalForInvoice)(r), c = null != l && (l.intervalType !== o || l.intervalCount !== u);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(R.PremiumInvoiceTableDivider, {
      extended: !0
    }), null != a ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(R.PremiumInvoiceTableHeader, {
        children: L.default.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
      }), D(x((0, S.coalesceInvoiceItems)(a.invoiceItems))).map(e => (0, n.jsx)(O, {
        invoiceItem: e,
        currency: a.currency
      }, e.id)), (0, n.jsx)(R.PremiumInvoiceTableDivider, {
        extended: !0
      })]
    }) : null, (0, n.jsx)(R.PremiumInvoiceTableHeader, {
      children: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
    }), D(x((0, S.coalesceInvoiceItems)(r.invoiceItems))).map(e => {
      let a = null != s && !s.some(t => t.subscriptionPlanId === e.subscriptionPlanId && t.quantity === e.quantity);
      return (0, n.jsx)(O, {
        invoiceItem: e,
        currency: r.currency,
        showGuildSubscriptionAdjustmentTooltip: c && (e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD),
        className: i()({
          [C.subscriptionAddedInvoiceItem]: !t || a
        })
      }, e.id)
    }), (0, n.jsx)(M.default, {
      invoice: r
    }), (0, n.jsx)(R.PremiumInvoiceTableDivider, {}), (0, n.jsx)(R.PremiumInvoiceTableRow, {
      label: L.default.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
      value: (0, E.formatRate)((0, E.formatPrice)(r.total, r.currency), o, u),
      className: C.subscriptionCostRow
    })]
  })
}

function j(e) {
  var t;
  let {
    proratedInvoice: a,
    renewalInvoice: r,
    isTrial: s,
    isUpdate: i,
    overrideRenewalDate: l,
    trialFooterMessageOverride: o
  } = e, u = null === (t = (0, N.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, {
    intervalType: c,
    intervalCount: d
  } = (0, m.getIntervalForInvoice)(r);
  if (null == a) return null;
  if (s) {
    let e = (0, m.formatIntervalDuration)({
        intervalType: null == u ? void 0 : u.interval,
        intervalCount: null == u ? void 0 : u.interval_count
      }),
      t = (null == u ? void 0 : u.interval) === b.SubscriptionIntervalTypes.DAY && (null == u ? void 0 : u.interval_count) < 28 ? 2 : 7;
    return (0, n.jsx)(n.Fragment, {
      children: null != o ? o : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
        duration: e,
        days: t,
        contactLink: v.MarketingURLs.CONTACT,
        helpdeskArticle: P.default.getArticleURL(v.HelpdeskArticles.PREMIUM_TRIAL)
      })
    })
  }
  let I = r.taxInclusive ? L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : L.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
  return (0, n.jsx)(n.Fragment, {
    children: I.format({
      rate: (0, E.formatRate)((0, E.formatPrice)(r.subtotal, r.currency), c, d),
      renewalDate: null != l ? l : i ? null != a ? a.subscriptionPeriodEnd : r.subscriptionPeriodStart : r.subscriptionPeriodEnd,
      contactLink: v.MarketingURLs.CONTACT,
      helpdeskArticle: P.default.getArticleURL(v.HelpdeskArticles.BILLING)
    })
  })
}

function Y(e) {
  let {
    premiumSubscription: t,
    proratedInvoice: a,
    renewalInvoice: s,
    overrideRenewalDate: i,
    isUpdate: l = !1,
    isTrial: o = !1,
    priceOptions: u,
    isPrepaidPaymentSource: d = !1,
    trialFooterMessageOverride: f,
    hideSubscriptionDetails: p = !1,
    hasAnnualInvoicePreview: P = !1
  } = e, {
    analyticsLocations: m
  } = (0, _.default)(), E = {
    subscriptionId: null == t ? void 0 : t.id,
    renewal: !0,
    preventFetch: !l,
    analyticsLocatinons: m,
    analyticsLocation: I.default.SUBSCRIPTION_INVOICE_FOOTER,
    ...u
  }, [S] = (0, A.useSubscriptionInvoicePreview)(E), [N, M] = r.useState(!1);
  return (0, n.jsxs)(n.Fragment, {
    children: [d || P ? null : (0, n.jsx)(R.PremiumInvoiceTableFinePrint, {
      children: (0, n.jsx)(j, {
        proratedInvoice: a,
        renewalInvoice: s,
        isTrial: o,
        isUpdate: l,
        overrideRenewalDate: i,
        trialFooterMessageOverride: f
      })
    }), !p && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(c.Clickable, {
        onClick: () => M(e => !e),
        className: C.subscriptionDetailsToggle,
        children: [N ? L.default.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : L.default.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, n.jsx)(T.default, {
          direction: N ? T.default.Directions.UP : T.default.Directions.DOWN,
          className: C.subscriptionDetailsToggleCaret
        })]
      }), N ? (0, n.jsx)(k, {
        isUpdate: l,
        currentInvoice: S,
        newInvoice: s
      }) : null]
    })]
  })
}

function H(e) {
  let t, {
      plan: a,
      className: r,
      isPrepaidPaymentSource: s = !1,
      isCustomGift: i = !1,
      invoicePreview: l
    } = e,
    {
      tax: o,
      taxInclusive: u,
      currency: d
    } = l,
    I = l.total,
    _ = I - o,
    f = (0, E.formatPrice)(_, d),
    T = (0, E.formatPrice)(I, d);
  return t = i ? (0, m.getIntervalString)(a.interval, !0, void 0, void 0, !0, (0, m.getPremiumType)(a.id)) : L.default.Messages.BILLING_INVOICE_GIFT_PLAN.format({
    planName: (0, m.getDisplayName)(a.id, !1, s)
  }), (0, n.jsxs)("div", {
    className: r,
    children: [(0, n.jsx)(c.FormTitle, {
      children: L.default.Messages.PREMIUM_GIFTING_BUTTON
    }), o >= 0 && !1 === u ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.Text, {
        variant: "text-md/bold",
        className: C.purchaseDetailsHeaderText,
        children: t
      }), (0, n.jsxs)(R.PremiumInvoiceTable, {
        className: r,
        children: [(0, n.jsx)(R.PremiumInvoiceTableHeader, {
          children: L.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
        }), (0, n.jsx)(R.PremiumInvoiceTableRow, {
          label: t,
          value: f
        }), (0, n.jsx)(M.default, {
          invoice: l
        }), (0, n.jsx)(R.PremiumInvoiceTableDivider, {}), (0, n.jsx)(R.PremiumInvoiceTableRow, {
          label: L.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          value: T,
          className: C.subscriptionCostRow
        })]
      })]
    }) : (0, n.jsx)(c.Heading, {
      variant: "text-md/normal",
      children: "".concat(t, " - ").concat(T)
    })]
  })
}

function w(e) {
  let t, {
      invoice: a,
      plan: r
    } = e,
    s = (0, S.coalesceInvoiceItems)(a.invoiceItems).find(e => e.subscriptionPlanId === r.id);
  return o()(null != s, "newPlanInvoiceItem can not be null"), r.interval === b.SubscriptionIntervalTypes.MONTH ? t = a.taxInclusive ? L.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : L.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : r.interval === b.SubscriptionIntervalTypes.YEAR ? t = a.taxInclusive ? L.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : L.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : o()(!1, "Invalid interval type"), (0, n.jsx)(c.Text, {
    variant: "text-md/normal",
    children: t.format({
      price: (0, E.formatPrice)(s.subscriptionPlanPrice, a.currency)
    })
  })
}