"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  l = n.n(a),
  r = n("742280"),
  u = n("442837"),
  o = n("481060"),
  c = n("190947"),
  d = n("224550"),
  m = n("275850"),
  f = n("672971"),
  p = n("100527"),
  _ = n("906732"),
  S = n("987209"),
  I = n("563132"),
  P = n("45572"),
  E = n("614223"),
  T = n("246946"),
  N = n("351402"),
  v = n("509545"),
  h = n("74538"),
  x = n("296848"),
  A = n("374649"),
  C = n("653798"),
  y = n("585602"),
  g = n("314182"),
  M = n("314404"),
  R = n("42818"),
  b = n("981631"),
  L = n("689938"),
  O = n("472979"),
  j = n("634120");

function G(e) {
  var t;
  let n, {
      premiumSubscription: a,
      paymentSources: p,
      priceOptions: _,
      onPaymentSourceChange: A,
      onPaymentSourceAdd: y,
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
      selectedSkuId: X,
      defaultPlanId: J,
      isPremium: q,
      startedPaymentFlowWithPaymentSourcesRef: Q,
      annualDiscountInvoicePreview: $
    } = (0, I.usePaymentContext)(),
    {
      isGift: ee
    } = (0, S.useGiftContext)(),
    et = _.paymentSourceId,
    en = (0, u.useStateFromStores)([v.default], () => v.default.get(R));
  l()(null != en, "Missing newPlan");
  let ei = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation),
    es = null != $,
    ea = r.CountryCodesSets.EEA_COUNTRIES.has(N.default.ipCountryCodeWithFallback),
    el = Z === P.PurchaseState.PURCHASING || Z === P.PurchaseState.COMPLETED,
    er = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: ee,
      selectedSkuId: X,
      startedPaymentFlowWithPaymentSources: Q.current
    }),
    eu = (null == a ? void 0 : a.status) === b.SubscriptionStatusTypes.PAUSED,
    eo = s.useMemo(() => (0, h.getPremiumPlanOptions)({
      skuId: X,
      isPremium: q,
      multiMonthPlans: [],
      currentSubscription: a,
      isGift: ee,
      isEligibleForTrial: !1,
      defaultPlanId: J,
      defaultToMonthlyPlan: !1
    }), [X, a, J, q, ee]);
  n = V || eu ? L.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, h.isPremiumSubscriptionPlan)(R) ? (0, h.getBillingReviewSubheader)(a, en) : L.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: en.name
  });
  let ec = null;
  return null != a && (ec = V ? (0, i.jsx)(D, {
    premiumSubscription: a,
    onInvoiceError: H,
    priceOptions: _,
    preventFetch: !1
  }) : eu ? (0, i.jsx)(w, {
    premiumSubscription: a,
    onInvoiceError: H,
    priceOptions: _,
    preventFetch: el
  }) : (0, x.subscriptionCanSwitchImmediately)(a, R, W) ? (0, i.jsx)(U, {
    premiumSubscription: a,
    newPlan: en,
    onInvoiceError: H,
    planGroup: W,
    priceOptions: _,
    preventFetch: el,
    hasAnnualInvoicePreview: es
  }) : (0, i.jsx)(B, {
    premiumSubscription: a,
    newPlan: en,
    planGroup: W,
    priceOptions: _,
    preventFetch: el,
    hasAnnualInvoicePreview: es
  })), (0, i.jsxs)("div", {
    className: j.stepBody,
    children: [!eu && er && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(C.PremiumInvoiceTableDivider, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, i.jsx)(M.PremiumSwitchPlanSelectBody, {
        planOptions: eo,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: R,
        showTotal: !1,
        handleClose: z
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {})]
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
        onPaymentSourceAdd: y,
        hidePersonalInformation: ei,
        disabled: el
      })]
    }), (0, i.jsxs)(c.CurrencyWrapper, {
      currencies: Y,
      className: j.currencyWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: L.default.Messages.PAYMENT_CURRENCY
      }), (0, i.jsx)(c.default, {
        selectedCurrency: _.currency,
        currencies: Y,
        onChange: K,
        disabled: el
      })]
    }), (0, i.jsx)(g.default, {
      isActive: k,
      ref: G,
      children: null != a && (0, x.subscriptionCanSwitchImmediately)(a, R, W) ? (0, i.jsx)(F, {
        premiumSubscription: a,
        newPlan: en,
        onInvoiceError: H,
        planGroup: W,
        priceOptions: _,
        preventFetch: el,
        disabled: el,
        isEEA: ea,
        paymentSources: p,
        setHasAcceptedTerms: O,
        isGift: ee,
        hasAnnualDiscountPreview: null != $
      }) : (0, i.jsx)(f.default, {
        onChange: O,
        finePrint: (0, i.jsx)(d.default, {
          subscriptionPlan: en,
          paymentSourceType: null === (t = p[null != et ? et : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, h.getPrice)(en.id, !1, ee, _),
          currentSubscription: a,
          planGroup: W
        }),
        forceShow: !0,
        showPricingLink: en.currency !== b.CurrencyCodes.USD,
        showWithdrawalWaiver: ea,
        disabled: el,
        subscriptionPlan: en,
        currentSubscription: a,
        planGroup: W
      })
    })]
  })
}

function D(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: a,
    preventFetch: l
  } = e, [r, u] = (0, A.useGetSubscriptionInvoice)({
    subscriptionId: t.id,
    preventFetch: l
  });
  s.useEffect(() => {
    n(u)
  }, [n, u]);
  let c = (0, h.isPrepaidPaymentSource)(a.paymentSourceId);
  return null != r ? (0, i.jsxs)(C.PremiumInvoiceTable, {
    className: O.__invalid_invoice,
    children: [(0, i.jsx)(R.PremiumSubscriptionCurrentInvoiceRows, {
      invoice: r,
      isPrepaidPaymentSource: c
    }), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
      premiumSubscription: t,
      renewalInvoice: r,
      isUpdate: !0,
      isPrepaidPaymentSource: c
    })]
  }) : (0, i.jsx)(o.Spinner, {})
}

function U(e) {
  let {
    premiumSubscription: t,
    newPlan: n,
    onInvoiceError: a,
    planGroup: l,
    priceOptions: r,
    preventFetch: u,
    hasAnnualInvoicePreview: c
  } = e, {
    selectedSkuId: d,
    startedPaymentFlowWithPaymentSourcesRef: m
  } = (0, I.usePaymentContext)(), {
    isGift: f
  } = (0, S.useGiftContext)(), {
    analyticsLocations: P
  } = (0, _.default)(), T = (0, h.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(l)), [N, v] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: T,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: u,
    analyticsLocations: P,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [x, y] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: T,
    renewal: !0,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: u,
    analyticsLocations: P,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), g = null != v ? v : y;
  if (s.useEffect(() => {
      a(g)
    }, [a, g]), null != g) return (0, i.jsx)(o.FormErrorBlock, {
    children: g.message
  });
  let M = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: f,
      selectedSkuId: d,
      startedPaymentFlowWithPaymentSources: m.current
    }),
    b = (0, E.planSwitchLoadingShowSpinner)(M, N, n);
  if (null == N || null == x || b) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let O = (0, h.isPrepaidPaymentSource)(r.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(R.SubscriptionPeriodResetNotice, {
      proratedInvoice: N,
      renewalInvoice: x
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: L.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(R.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: N,
        newPlan: n,
        isPrepaidPaymentSource: O
      }), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        proratedInvoice: N,
        renewalInvoice: x,
        isUpdate: !0,
        isPrepaidPaymentSource: O,
        hasAnnualInvoicePreview: c
      })]
    })]
  })
}

function F(e) {
  var t, n;
  let a, {
      premiumSubscription: l,
      newPlan: r,
      onInvoiceError: u,
      planGroup: c,
      priceOptions: m,
      preventFetch: S,
      disabled: I,
      isEEA: P,
      paymentSources: E,
      setHasAcceptedTerms: T,
      isGift: N,
      hasAnnualDiscountPreview: v
    } = e,
    {
      analyticsLocations: x
    } = (0, _.default)(),
    C = (0, h.getItemsWithUpsertedPlanIdForGroup)(l, r.id, 1, new Set(c)),
    [y, g] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: l.id,
      items: C,
      renewal: !0,
      paymentSourceId: m.paymentSourceId,
      currency: m.currency,
      preventFetch: S,
      analyticsLocations: x,
      analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (s.useEffect(() => {
    u(g)
  }, [u, g]), null != g) ? (0, i.jsx)(o.FormErrorBlock, {
    children: g.message
  }) : (null != y && (a = {
    amount: y.total,
    currency: y.currency,
    tax: y.tax,
    taxInclusive: y.taxInclusive
  }), null == a) ? null : (0, i.jsx)(f.default, {
    onChange: T,
    finePrint: (0, i.jsx)(d.default, {
      subscriptionPlan: r,
      paymentSourceType: null === (t = E[null !== (n = m.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: v ? (0, h.getPrice)(r.id, !1, N, m) : a,
      currentSubscription: l,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: r.currency !== b.CurrencyCodes.USD,
    showWithdrawalWaiver: P,
    disabled: I,
    subscriptionPlan: r,
    currentSubscription: l,
    planGroup: c
  })
}

function w(e) {
  let {
    premiumSubscription: t,
    priceOptions: n,
    preventFetch: a,
    onInvoiceError: l
  } = e, {
    analyticsLocations: r
  } = (0, _.default)(), [u, c] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    applyEntitlements: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: r,
    analyticsLocation: p.default.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [d, m] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: r,
    analyticsLocation: p.default.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  }), f = null != c ? c : m;
  if (s.useEffect(() => {
      l(f)
    }, [l, f]), null != f) return (0, i.jsx)(o.FormErrorBlock, {
    children: f.message
  });
  if (null == u || null == d) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let S = (0, h.isPrepaidPaymentSource)(n.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: O.renewalInvoiceDate,
      children: L.default.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: L.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(R.PremiumSubscriptionCurrentInvoiceRows, {
        invoice: u,
        isPrepaidPaymentSource: S
      }), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: S
      })]
    })]
  })
}

function B(e) {
  let t, {
      premiumSubscription: n,
      newPlan: s,
      planGroup: a,
      priceOptions: l,
      preventFetch: r,
      hasAnnualInvoicePreview: u
    } = e,
    {
      analyticsLocations: c
    } = (0, _.default)(),
    [d, m] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, h.getItemsWithUpsertedPlanIdForGroup)(n, s.id, 1, new Set(a)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: l.paymentSourceId,
      currency: l.currency,
      preventFetch: r,
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
  let f = (0, h.isPrepaidPaymentSource)(l.paymentSourceId);
  return (0, i.jsxs)("div", {
    className: j.bodyText,
    children: [(0, i.jsx)("div", {
      className: O.renewalInvoiceDate,
      children: L.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: d.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: L.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(C.PremiumInvoiceTableRow, {
        label: t,
        value: (0, h.getFormattedRateForPlan)(s, l, !0)
      }), (0, i.jsx)(y.default, {
        invoice: d
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {}), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: f,
        hasAnnualInvoicePreview: u
      })]
    })]
  })
}