"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  r = n.n(l),
  a = n("742280"),
  u = n("442837"),
  o = n("481060"),
  c = n("190947"),
  d = n("224550"),
  m = n("275850"),
  f = n("672971"),
  p = n("100527"),
  I = n("906732"),
  _ = n("987209"),
  S = n("598"),
  P = n("45572"),
  E = n("614223"),
  T = n("246946"),
  v = n("351402"),
  N = n("509545"),
  h = n("74538"),
  x = n("296848"),
  A = n("374649"),
  y = n("653798"),
  g = n("585602"),
  C = n("314182"),
  M = n("314404"),
  R = n("42818"),
  b = n("981631"),
  L = n("689938"),
  O = n("867765"),
  j = n("422449");

function G(e) {
  var t;
  let n, {
      premiumSubscription: l,
      paymentSources: p,
      priceOptions: I,
      onPaymentSourceChange: A,
      onPaymentSourceAdd: g,
      planId: R,
      setHasAcceptedTerms: O,
      legalTermsNodeRef: G,
      hasLegalTermsFlash: k,
      onInvoiceError: H,
      planGroup: W,
      currencies: Y,
      onCurrencyChange: K,
      hasOpenInvoice: V,
      purchaseState: Z,
      handleClose: z
    } = e,
    {
      selectedSkuId: J,
      defaultPlanId: X,
      isPremium: q,
      startedPaymentFlowWithPaymentSourcesRef: Q,
      annualDiscountInvoicePreview: $
    } = (0, S.usePaymentContext)(),
    {
      isGift: ee
    } = (0, _.useGiftContext)(),
    et = I.paymentSourceId,
    en = (0, u.useStateFromStores)([N.default], () => N.default.get(R));
  r()(null != en, "Missing newPlan");
  let ei = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation),
    es = null != $,
    el = a.CountryCodesSets.EEA_COUNTRIES.has(v.default.ipCountryCodeWithFallback),
    er = Z === P.PurchaseState.PURCHASING || Z === P.PurchaseState.COMPLETED,
    ea = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: ee,
      selectedSkuId: J,
      startedPaymentFlowWithPaymentSources: Q.current
    }),
    eu = (null == l ? void 0 : l.status) === b.SubscriptionStatusTypes.PAUSED,
    eo = s.useMemo(() => (0, h.getPremiumPlanOptions)({
      skuId: J,
      isPremium: q,
      multiMonthPlans: [],
      currentSubscription: l,
      isGift: ee,
      isEligibleForTrial: !1,
      defaultPlanId: X,
      defaultToMonthlyPlan: !1
    }), [J, l, X, q, ee]);
  n = V || eu ? L.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, h.isPremiumSubscriptionPlan)(R) ? (0, h.getBillingReviewSubheader)(l, en) : L.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: en.name
  });
  let ec = null;
  return null != l && (ec = V ? (0, i.jsx)(D, {
    premiumSubscription: l,
    onInvoiceError: H,
    priceOptions: I,
    preventFetch: !1
  }) : eu ? (0, i.jsx)(F, {
    premiumSubscription: l,
    onInvoiceError: H,
    priceOptions: I,
    preventFetch: er
  }) : (0, x.subscriptionCanSwitchImmediately)(l, R, W) ? (0, i.jsx)(U, {
    premiumSubscription: l,
    newPlan: en,
    onInvoiceError: H,
    planGroup: W,
    priceOptions: I,
    preventFetch: er,
    hasAnnualInvoicePreview: es
  }) : (0, i.jsx)(B, {
    premiumSubscription: l,
    newPlan: en,
    planGroup: W,
    priceOptions: I,
    preventFetch: er,
    hasAnnualInvoicePreview: es
  })), (0, i.jsxs)("div", {
    className: j.stepBody,
    children: [!eu && ea && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(y.PremiumInvoiceTableDivider, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, i.jsx)(M.PremiumSwitchPlanSelectBody, {
        planOptions: eo,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: R,
        showTotal: !1,
        handleClose: z
      }), (0, i.jsx)(y.PremiumInvoiceTableDivider, {})]
    }), (0, i.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: n
    }), ec, (0, i.jsxs)("div", {
      className: j.paymentSourceWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: L.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(m.default, {
        paymentSources: Object.values(p),
        selectedPaymentSourceId: et,
        onChange: A,
        onPaymentSourceAdd: g,
        hidePersonalInformation: ei,
        disabled: er
      })]
    }), (0, i.jsxs)(c.CurrencyWrapper, {
      currencies: Y,
      className: j.currencyWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: L.default.Messages.PAYMENT_CURRENCY
      }), (0, i.jsx)(c.default, {
        selectedCurrency: I.currency,
        currencies: Y,
        onChange: K,
        disabled: er
      })]
    }), (0, i.jsx)(C.default, {
      isActive: k,
      ref: G,
      children: null != l && (0, x.subscriptionCanSwitchImmediately)(l, R, W) ? (0, i.jsx)(w, {
        premiumSubscription: l,
        newPlan: en,
        onInvoiceError: H,
        planGroup: W,
        priceOptions: I,
        preventFetch: er,
        disabled: er,
        isEEA: el,
        paymentSources: p,
        setHasAcceptedTerms: O,
        isGift: ee,
        hasAnnualDiscountPreview: null != $
      }) : (0, i.jsx)(f.default, {
        onChange: O,
        finePrint: (0, i.jsx)(d.default, {
          subscriptionPlan: en,
          paymentSourceType: null === (t = p[null != et ? et : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, h.getPrice)(en.id, !1, ee, I),
          currentSubscription: l,
          planGroup: W
        }),
        forceShow: !0,
        showPricingLink: en.currency !== b.CurrencyCodes.USD,
        showWithdrawalWaiver: el,
        disabled: er,
        subscriptionPlan: en,
        currentSubscription: l,
        planGroup: W
      })
    })]
  })
}

function D(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: l,
    preventFetch: r
  } = e, [a, u] = (0, A.useGetSubscriptionInvoice)({
    subscriptionId: t.id,
    preventFetch: r
  });
  s.useEffect(() => {
    n(u)
  }, [n, u]);
  let c = (0, h.isPrepaidPaymentSource)(l.paymentSourceId);
  return null != a ? (0, i.jsxs)(y.PremiumInvoiceTable, {
    className: O.__invalid_invoice,
    children: [(0, i.jsx)(R.PremiumSubscriptionCurrentInvoiceRows, {
      invoice: a,
      isPrepaidPaymentSource: c
    }), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
      premiumSubscription: t,
      renewalInvoice: a,
      isUpdate: !0,
      isPrepaidPaymentSource: c
    })]
  }) : (0, i.jsx)(o.Spinner, {})
}

function U(e) {
  let {
    premiumSubscription: t,
    newPlan: n,
    onInvoiceError: l,
    planGroup: r,
    priceOptions: a,
    preventFetch: u,
    hasAnnualInvoicePreview: c
  } = e, {
    selectedSkuId: d,
    startedPaymentFlowWithPaymentSourcesRef: m
  } = (0, S.usePaymentContext)(), {
    isGift: f
  } = (0, _.useGiftContext)(), {
    analyticsLocations: P
  } = (0, I.default)(), T = (0, h.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(r)), [v, N] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: T,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: a.paymentSourceId,
    currency: a.currency,
    preventFetch: u,
    analyticsLocations: P,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [x, g] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: T,
    renewal: !0,
    paymentSourceId: a.paymentSourceId,
    currency: a.currency,
    preventFetch: u,
    analyticsLocations: P,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), C = null != N ? N : g;
  if (s.useEffect(() => {
      l(C)
    }, [l, C]), null != C) return (0, i.jsx)(o.FormErrorBlock, {
    children: C.message
  });
  let M = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: f,
      selectedSkuId: d,
      startedPaymentFlowWithPaymentSources: m.current
    }),
    b = (0, E.planSwitchLoadingShowSpinner)(M, v, n);
  if (null == v || null == x || b) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let O = (0, h.isPrepaidPaymentSource)(a.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(R.SubscriptionPeriodResetNotice, {
      proratedInvoice: v,
      renewalInvoice: x
    }), (0, i.jsxs)(y.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(y.PremiumInvoiceTableHeader, {
        children: L.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(R.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: v,
        newPlan: n,
        isPrepaidPaymentSource: O
      }), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        proratedInvoice: v,
        renewalInvoice: x,
        isUpdate: !0,
        isPrepaidPaymentSource: O,
        hasAnnualInvoicePreview: c
      })]
    })]
  })
}

function w(e) {
  var t, n;
  let l, {
      premiumSubscription: r,
      newPlan: a,
      onInvoiceError: u,
      planGroup: c,
      priceOptions: m,
      preventFetch: _,
      disabled: S,
      isEEA: P,
      paymentSources: E,
      setHasAcceptedTerms: T,
      isGift: v,
      hasAnnualDiscountPreview: N
    } = e,
    {
      analyticsLocations: x
    } = (0, I.default)(),
    y = (0, h.getItemsWithUpsertedPlanIdForGroup)(r, a.id, 1, new Set(c)),
    [g, C] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: r.id,
      items: y,
      renewal: !0,
      paymentSourceId: m.paymentSourceId,
      currency: m.currency,
      preventFetch: _,
      analyticsLocations: x,
      analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (s.useEffect(() => {
    u(C)
  }, [u, C]), null != C) ? (0, i.jsx)(o.FormErrorBlock, {
    children: C.message
  }) : (null != g && (l = {
    amount: g.total,
    currency: g.currency,
    tax: g.tax,
    taxInclusive: g.taxInclusive
  }), null == l) ? null : (0, i.jsx)(f.default, {
    onChange: T,
    finePrint: (0, i.jsx)(d.default, {
      subscriptionPlan: a,
      paymentSourceType: null === (t = E[null !== (n = m.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: N ? (0, h.getPrice)(a.id, !1, v, m) : l,
      currentSubscription: r,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: a.currency !== b.CurrencyCodes.USD,
    showWithdrawalWaiver: P,
    disabled: S,
    subscriptionPlan: a,
    currentSubscription: r,
    planGroup: c
  })
}

function F(e) {
  let {
    premiumSubscription: t,
    priceOptions: n,
    preventFetch: l,
    onInvoiceError: r
  } = e, {
    analyticsLocations: a
  } = (0, I.default)(), [u, c] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    applyEntitlements: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: l,
    analyticsLocations: a,
    analyticsLocation: p.default.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [d, m] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: l,
    analyticsLocations: a,
    analyticsLocation: p.default.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  }), f = null != c ? c : m;
  if (s.useEffect(() => {
      r(f)
    }, [r, f]), null != f) return (0, i.jsx)(o.FormErrorBlock, {
    children: f.message
  });
  if (null == u || null == d) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let _ = (0, h.isPrepaidPaymentSource)(n.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: O.renewalInvoiceDate,
      children: L.default.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY
    }), (0, i.jsxs)(y.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(y.PremiumInvoiceTableHeader, {
        children: L.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(R.PremiumSubscriptionCurrentInvoiceRows, {
        invoice: u,
        isPrepaidPaymentSource: _
      }), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: _
      })]
    })]
  })
}

function B(e) {
  let t, {
      premiumSubscription: n,
      newPlan: s,
      planGroup: l,
      priceOptions: r,
      preventFetch: a,
      hasAnnualInvoicePreview: u
    } = e,
    {
      analyticsLocations: c
    } = (0, I.default)(),
    [d, m] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, h.getItemsWithUpsertedPlanIdForGroup)(n, s.id, 1, new Set(l)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: r.paymentSourceId,
      currency: r.currency,
      preventFetch: a,
      analyticsLocations: c,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != m) return (0, i.jsx)(o.FormErrorBlock, {
    children: m.message
  });
  if (null == d) return (0, i.jsx)("div", {
    children: (0, i.jsx)(o.Spinner, {})
  });
  t = n.type === b.SubscriptionTypes.PREMIUM ? (0, h.getDisplayName)(s.id) : s.name;
  let f = (0, h.isPrepaidPaymentSource)(r.paymentSourceId);
  return (0, i.jsxs)("div", {
    className: j.bodyText,
    children: [(0, i.jsx)("div", {
      className: O.renewalInvoiceDate,
      children: L.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: d.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(y.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(y.PremiumInvoiceTableHeader, {
        children: L.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(y.PremiumInvoiceTableRow, {
        label: t,
        value: (0, h.getFormattedRateForPlan)(s, r, !0)
      }), (0, i.jsx)(g.default, {
        invoice: d
      }), (0, i.jsx)(y.PremiumInvoiceTableDivider, {}), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: f,
        hasAnnualInvoicePreview: u
      })]
    })]
  })
}