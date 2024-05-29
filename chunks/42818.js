"use strict";
t.r(n), t.d(n, {
  PremiumInvoiceLabelWithAdjustment: function() {
    return x
  },
  PremiumSubscriptionChangePlanInvoiceRows: function() {
    return D
  },
  PremiumSubscriptionCurrentInvoiceRows: function() {
    return y
  },
  PremiumTrialInvoiceTableRow: function() {
    return H
  },
  SubscriptionInvoiceFooter: function() {
    return w
  },
  SubscriptionInvoiceGift: function() {
    return F
  },
  SubscriptionPeriodResetNotice: function() {
    return B
  }
}), t("411104"), t("724458"), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  r = t.n(l),
  s = t("512722"),
  u = t.n(s),
  o = t("442837"),
  c = t("481060"),
  I = t("911969"),
  d = t("100527"),
  T = t("906732"),
  _ = t("509545"),
  m = t("259580"),
  P = t("396525"),
  f = t("63063"),
  v = t("74538"),
  N = t("937615"),
  E = t("374649"),
  R = t("591548"),
  S = t("639119"),
  M = t("653798"),
  p = t("585602"),
  b = t("474936"),
  A = t("981631"),
  U = t("689938"),
  L = t("884615");
let O = (e, n) => {
    var t;
    return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some(e => e.type === n))
  },
  C = (e, n) => {
    var t, a, i;
    return e.subscriptionPlanPrice - (null !== (i = null === (a = e.discounts) || void 0 === a ? void 0 : null === (t = a.find(e => e.type === n)) || void 0 === t ? void 0 : t.amount) && void 0 !== i ? i : 0)
  };

function g(e) {
  var n;
  let {
    invoiceItem: t,
    overrideAmount: i,
    showGuildSubscriptionAdjustmentTooltip: l,
    currency: r,
    className: s,
    isPrepaidPaymentSource: d,
    referralTrialOfferId: T
  } = e, m = (0, o.useStateFromStores)([_.default], () => _.default.get(t.subscriptionPlanId)), f = null === (n = (0, S.usePremiumTrialOffer)(T)) || void 0 === n ? void 0 : n.subscription_trial;
  u()(null != m, "Missing subscriptionPlan");
  let E = function(e, n, t, a) {
    let i = O(e, I.InvoiceDiscountTypes.PREMIUM_TRIAL);
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
        return (0, v.getDisplayName)(e.subscriptionPlanId, i, t, a);
      case b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD:
      case b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD:
        return U.default.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity,
          intervalCount: n.intervalCount
        });
      case b.SubscriptionPlans.PREMIUM_MONTH_GUILD:
        return U.default.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity
        });
      case b.SubscriptionPlans.PREMIUM_YEAR_GUILD:
        return U.default.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
          num: e.quantity
        })
    }
    switch (n.interval) {
      case b.SubscriptionIntervalTypes.MONTH:
        if (1 === n.intervalCount) return U.default.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
          planName: n.name
        });
        return U.default.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
          planName: n.name,
          intervalCount: n.intervalCount
        });
      case b.SubscriptionIntervalTypes.YEAR:
        return U.default.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
          planName: n.name
        })
    }
    throw Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
  }(t, m, d, (0, v.formatIntervalDuration)({
    intervalType: null == f ? void 0 : f.interval,
    intervalCount: null == f ? void 0 : f.interval_count
  }));
  !0 === l && (E = (0, a.jsxs)("div", {
    className: L.invoiceItemLabelWithIcon,
    children: [(0, a.jsxs)("div", {
      children: [E, " "]
    }), (0, a.jsx)(c.Tooltip, {
      text: U.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
      "aria-label": U.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
      tooltipClassName: L.invoiceItemTooltip,
      children: e => (0, a.jsx)(P.default, {
        ...e,
        className: L.invoiceItemLabelIcon
      })
    })]
  }));
  let R = (0, N.formatPrice)(null != i ? i : t.amount, r),
    p = d ? R : (0, N.formatRate)(R, m.interval, m.intervalCount);
  return (0, a.jsx)(M.PremiumInvoiceDiscountedTableRow, {
    label: E,
    value: p,
    originalAmount: t.subscriptionPlanPrice * t.quantity,
    discounts: t.discounts,
    interval: m.interval,
    intervalCount: m.intervalCount,
    currency: r,
    className: s,
    planId: t.subscriptionPlanId
  })
}

function x(e) {
  let {
    label: n,
    tooltipText: t,
    tooltipAriaLabel: i
  } = e;
  return (0, a.jsxs)("div", {
    className: L.invoiceItemLabelWithIcon,
    children: [n, (0, a.jsx)(c.Tooltip, {
      clickableOnMobile: !0,
      text: t,
      "aria-label": i,
      tooltipClassName: L.invoiceItemTooltip,
      children: e => (0, a.jsx)(P.default, {
        ...e,
        className: L.invoiceItemLabelIcon
      })
    })]
  })
}

function y(e) {
  let {
    invoice: n,
    isPrepaidPaymentSource: t
  } = e, i = (0, R.coalesceInvoiceItems)(n.invoiceItems), l = i.find(e => !(0, v.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), r = i.find(e => (0, v.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount >= 0), s = (0, o.useStateFromStores)([_.default], () => null != r ? _.default.get(r.subscriptionPlanId) : null), u = null != r ? r.amount : 0, c = (0, N.formatPrice)(u, n.currency), I = null != s ? (0, N.formatRate)(c, s.interval, s.intervalCount) : 0;
  return (0, a.jsxs)(a.Fragment, {
    children: [null != l ? (0, a.jsx)(g, {
      invoiceItem: l,
      currency: n.currency,
      isPrepaidPaymentSource: t
    }) : null, 0 !== u && null != r && null != s ? (0, a.jsx)(M.PremiumInvoiceTableRow, {
      label: U.default.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
        numGuildSubscriptions: r.quantity,
        planName: (0, v.getDisplayName)(s.id, !1, t)
      }),
      value: t ? c : I
    }) : null, (0, a.jsx)(p.default, {
      invoice: n
    }), (0, a.jsx)(M.PremiumInvoiceTableDivider, {}), (0, a.jsx)(M.PremiumInvoiceTableTotalRow, {
      label: (n.taxInclusive ? t ? U.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : U.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : U.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
      value: n.currency === A.CurrencyCodes.USD ? (0, N.formatPrice)(n.total, n.currency) : "".concat((0, N.formatPrice)(n.total, n.currency), "*")
    })]
  })
}

function D(e) {
  let {
    invoice: n,
    newPlan: t,
    isPrepaidPaymentSource: i,
    referralTrialOfferId: l
  } = e, r = (0, R.coalesceInvoiceItems)(n.invoiceItems), s = r.find(e => e.subscriptionPlanId === t.id);
  u()(null != s, "Expected newPlanInvoiceItem");
  let o = r.find(e => !(0, v.isPremiumGuildSubscriptionPlan)(e.subscriptionPlanId) && e.amount < 0),
    c = r.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === I.InvoiceDiscountTypes.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
    d = O(s, I.InvoiceDiscountTypes.PREMIUM_TRIAL),
    T = C(s, I.InvoiceDiscountTypes.SUBSCRIPTION_PLAN),
    _ = s.quantity * T,
    m = s.amount + (null != o ? o.amount : 0) - _ + (null != c ? c.amount : 0),
    P = r.filter(e => e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(g, {
      invoiceItem: s,
      currency: n.currency,
      overrideAmount: _,
      isPrepaidPaymentSource: i,
      referralTrialOfferId: l
    }), 0 === m || d ? null : (0, a.jsx)(M.PremiumInvoiceTableRow, {
      label: (0, a.jsx)(x, {
        label: U.default.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
          planName: (0, v.isPremiumSubscriptionPlan)(t.id) ? (0, v.getTierDisplayName)(t.id) : t.name
        }),
        tooltipText: U.default.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
      }),
      value: (0, N.formatPrice)(m, n.currency)
    }), 0 !== P ? (0, a.jsx)(M.PremiumInvoiceTableRow, {
      label: (0, a.jsx)(x, {
        label: U.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
        tooltipText: U.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
        tooltipAriaLabel: U.default.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
      }),
      value: (0, N.formatPrice)(P, n.currency)
    }) : null, (0, a.jsx)(p.default, {
      invoice: n
    }), (0, a.jsx)(M.PremiumInvoiceTableDivider, {}), (0, a.jsx)(M.PremiumInvoiceTableTotalRow, {
      label: (n.taxInclusive ? i ? U.default.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : U.default.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : U.default.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
      value: n.currency === A.CurrencyCodes.USD ? (0, N.formatPrice)(n.total, n.currency) : "".concat((0, N.formatPrice)(n.total, n.currency), "*")
    })]
  })
}

function j(e) {
  let n = e.slice();
  return n.sort((e, n) => {
    let t = (0, v.isPremiumBaseSubscriptionPlan)(e.subscriptionPlanId),
      a = (0, v.isPremiumBaseSubscriptionPlan)(n.subscriptionPlanId);
    return t && !a ? -1 : !t && a ? 1 : 0
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
    renewalInvoice: t
  } = e, {
    intervalType: i,
    intervalCount: l
  } = (0, v.getIntervalForInvoice)(n), {
    intervalType: r,
    intervalCount: s
  } = (0, v.getIntervalForInvoice)(t);
  return i !== r || l !== s || n.subscriptionPeriodEnd.getTime() === t.subscriptionPeriodStart.getTime() ? null : (0, a.jsx)("div", {
    className: L.subscriptionPeriodResetNotice,
    children: U.default.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
      renewalDate: n.subscriptionPeriodEnd
    })
  })
}

function G(e) {
  let {
    isUpdate: n,
    currentInvoice: t,
    newInvoice: i
  } = e, l = null != t ? (0, R.coalesceInvoiceItems)(t.invoiceItems) : null, s = null != t ? (0, v.getIntervalForInvoice)(t) : null, {
    intervalType: u,
    intervalCount: o
  } = (0, v.getIntervalForInvoice)(i), c = null != s && (s.intervalType !== u || s.intervalCount !== o);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(M.PremiumInvoiceTableDivider, {
      extended: !0
    }), null != t ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.PremiumInvoiceTableHeader, {
        children: U.default.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
      }), h(j((0, R.coalesceInvoiceItems)(t.invoiceItems))).map(e => (0, a.jsx)(g, {
        invoiceItem: e,
        currency: t.currency
      }, e.id)), (0, a.jsx)(M.PremiumInvoiceTableDivider, {
        extended: !0
      })]
    }) : null, (0, a.jsx)(M.PremiumInvoiceTableHeader, {
      children: U.default.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
    }), h(j((0, R.coalesceInvoiceItems)(i.invoiceItems))).map(e => {
      let t = null != l && !l.some(n => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
      return (0, a.jsx)(g, {
        invoiceItem: e,
        currency: i.currency,
        showGuildSubscriptionAdjustmentTooltip: c && (e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === b.SubscriptionPlans.PREMIUM_6_MONTH_GUILD),
        className: r()({
          [L.subscriptionAddedInvoiceItem]: !n || t
        })
      }, e.id)
    }), (0, a.jsx)(p.default, {
      invoice: i
    }), (0, a.jsx)(M.PremiumInvoiceTableDivider, {}), (0, a.jsx)(M.PremiumInvoiceTableRow, {
      label: U.default.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
      value: (0, N.formatRate)((0, N.formatPrice)(i.total, i.currency), u, o),
      className: L.subscriptionCostRow
    })]
  })
}

function Y(e) {
  var n;
  let {
    proratedInvoice: t,
    renewalInvoice: i,
    isTrial: l,
    isUpdate: r,
    overrideRenewalDate: s,
    trialFooterMessageOverride: u
  } = e, o = null === (n = (0, S.usePremiumTrialOffer)()) || void 0 === n ? void 0 : n.subscription_trial, {
    intervalType: c,
    intervalCount: I
  } = (0, v.getIntervalForInvoice)(i);
  if (null == t) return null;
  if (l) {
    let e = (0, v.formatIntervalDuration)({
        intervalType: null == o ? void 0 : o.interval,
        intervalCount: null == o ? void 0 : o.interval_count
      }),
      n = (null == o ? void 0 : o.interval) === b.SubscriptionIntervalTypes.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
    return (0, a.jsx)(a.Fragment, {
      children: null != u ? u : U.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
        duration: e,
        days: n,
        contactLink: A.MarketingURLs.CONTACT,
        helpdeskArticle: f.default.getArticleURL(A.HelpdeskArticles.PREMIUM_TRIAL)
      })
    })
  }
  let d = i.taxInclusive ? U.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : U.default.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
  return (0, a.jsx)(a.Fragment, {
    children: d.format({
      rate: (0, N.formatRate)((0, N.formatPrice)(i.subtotal, i.currency), c, I),
      renewalDate: null != s ? s : r ? null != t ? t.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
      contactLink: A.MarketingURLs.CONTACT,
      helpdeskArticle: f.default.getArticleURL(A.HelpdeskArticles.BILLING)
    })
  })
}

function w(e) {
  let {
    premiumSubscription: n,
    proratedInvoice: t,
    renewalInvoice: l,
    overrideRenewalDate: r,
    isUpdate: s = !1,
    isTrial: u = !1,
    priceOptions: o,
    isPrepaidPaymentSource: I = !1,
    trialFooterMessageOverride: _,
    hideSubscriptionDetails: P = !1,
    hasAnnualInvoicePreview: f = !1
  } = e, {
    analyticsLocations: v
  } = (0, T.default)(), N = {
    subscriptionId: null == n ? void 0 : n.id,
    renewal: !0,
    preventFetch: !s,
    analyticsLocatinons: v,
    analyticsLocation: d.default.SUBSCRIPTION_INVOICE_FOOTER,
    ...o
  }, [R] = (0, E.useSubscriptionInvoicePreview)(N), [S, p] = i.useState(!1);
  return (0, a.jsxs)(a.Fragment, {
    children: [I || f ? null : (0, a.jsx)(M.PremiumInvoiceTableFinePrint, {
      children: (0, a.jsx)(Y, {
        proratedInvoice: t,
        renewalInvoice: l,
        isTrial: u,
        isUpdate: s,
        overrideRenewalDate: r,
        trialFooterMessageOverride: _
      })
    }), !P && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(c.Clickable, {
        onClick: () => p(e => !e),
        className: L.subscriptionDetailsToggle,
        children: [S ? U.default.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : U.default.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, a.jsx)(m.default, {
          direction: S ? m.default.Directions.UP : m.default.Directions.DOWN,
          className: L.subscriptionDetailsToggleCaret
        })]
      }), S ? (0, a.jsx)(G, {
        isUpdate: s,
        currentInvoice: R,
        newInvoice: l
      }) : null]
    })]
  })
}

function F(e) {
  let n, {
      plan: t,
      className: i,
      isPrepaidPaymentSource: l = !1,
      isCustomGift: r = !1,
      invoicePreview: s
    } = e,
    {
      tax: u,
      taxInclusive: o,
      currency: I
    } = s,
    d = s.total,
    T = d - u,
    _ = (0, N.formatPrice)(T, I),
    m = (0, N.formatPrice)(d, I);
  return n = r ? (0, v.getIntervalString)(t.interval, !0, void 0, void 0, !0, (0, v.getPremiumType)(t.id)) : U.default.Messages.BILLING_INVOICE_GIFT_PLAN.format({
    planName: (0, v.getDisplayName)(t.id, !1, l)
  }), (0, a.jsxs)("div", {
    className: i,
    children: [(0, a.jsx)(c.FormTitle, {
      children: U.default.Messages.PREMIUM_GIFTING_BUTTON
    }), u >= 0 && !1 === o ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.Text, {
        variant: "text-md/bold",
        className: L.purchaseDetailsHeaderText,
        children: n
      }), (0, a.jsxs)(M.PremiumInvoiceTable, {
        className: i,
        children: [(0, a.jsx)(M.PremiumInvoiceTableHeader, {
          children: U.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
        }), (0, a.jsx)(M.PremiumInvoiceTableRow, {
          label: n,
          value: _
        }), (0, a.jsx)(p.default, {
          invoice: s
        }), (0, a.jsx)(M.PremiumInvoiceTableDivider, {}), (0, a.jsx)(M.PremiumInvoiceTableRow, {
          label: U.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          value: m,
          className: L.subscriptionCostRow
        })]
      })]
    }) : (0, a.jsx)(c.Heading, {
      variant: "text-md/normal",
      children: "".concat(n, " - ").concat(m)
    })]
  })
}

function H(e) {
  let n, {
      invoice: t,
      plan: i
    } = e,
    l = (0, R.coalesceInvoiceItems)(t.invoiceItems).find(e => e.subscriptionPlanId === i.id);
  return u()(null != l, "newPlanInvoiceItem can not be null"), i.interval === b.SubscriptionIntervalTypes.MONTH ? n = t.taxInclusive ? U.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : U.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : i.interval === b.SubscriptionIntervalTypes.YEAR ? n = t.taxInclusive ? U.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : U.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : u()(!1, "Invalid interval type"), (0, a.jsx)(c.Text, {
    variant: "text-md/normal",
    children: n.format({
      price: (0, N.formatPrice)(l.subscriptionPlanPrice, t.currency)
    })
  })
}