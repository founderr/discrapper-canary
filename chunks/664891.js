"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  s = n("512722"),
  a = n.n(s),
  r = n("742280"),
  u = n("442837"),
  o = n("481060"),
  c = n("190947"),
  d = n("224550"),
  m = n("275850"),
  p = n("672971"),
  f = n("100527"),
  S = n("906732"),
  I = n("987209"),
  _ = n("598"),
  P = n("45572"),
  E = n("614223"),
  T = n("246946"),
  v = n("351402"),
  h = n("509545"),
  N = n("74538"),
  x = n("296848"),
  A = n("374649"),
  y = n("653798"),
  C = n("585602"),
  R = n("314182"),
  b = n("314404"),
  g = n("42818"),
  O = n("981631"),
  M = n("689938"),
  L = n("259190"),
  j = n("507448");

function G(e) {
  var t;
  let n, {
      premiumSubscription: s,
      paymentSources: f,
      priceOptions: S,
      onPaymentSourceChange: A,
      onPaymentSourceAdd: C,
      planId: g,
      setHasAcceptedTerms: L,
      legalTermsNodeRef: G,
      hasLegalTermsFlash: H,
      onInvoiceError: k,
      planGroup: W,
      currencies: Y,
      onCurrencyChange: K,
      hasOpenInvoice: V,
      purchaseState: z,
      handleClose: Z
    } = e,
    {
      selectedSkuId: X,
      defaultPlanId: J,
      isPremium: q,
      startedPaymentFlowWithPaymentSourcesRef: Q,
      annualDiscountInvoicePreview: $
    } = (0, _.usePaymentContext)(),
    {
      isGift: ee
    } = (0, I.useGiftContext)(),
    et = S.paymentSourceId,
    en = (0, u.useStateFromStores)([h.default], () => h.default.get(g));
  a()(null != en, "Missing newPlan");
  let ei = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation),
    el = null != $,
    es = r.CountryCodesSets.EEA_COUNTRIES.has(v.default.ipCountryCodeWithFallback),
    ea = z === P.PurchaseState.PURCHASING || z === P.PurchaseState.COMPLETED,
    er = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: ee,
      selectedSkuId: X,
      startedPaymentFlowWithPaymentSources: Q.current
    }),
    eu = (null == s ? void 0 : s.status) === O.SubscriptionStatusTypes.PAUSED,
    eo = l.useMemo(() => (0, N.getPremiumPlanOptions)({
      skuId: X,
      isPremium: q,
      multiMonthPlans: [],
      currentSubscription: s,
      isGift: ee,
      isEligibleForTrial: !1,
      defaultPlanId: J,
      defaultToMonthlyPlan: !1
    }), [X, s, J, q, ee]);
  n = V || eu ? M.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, N.isPremiumSubscriptionPlan)(g) ? (0, N.getBillingReviewSubheader)(s, en) : M.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: en.name
  });
  let ec = null;
  return null != s && (ec = V ? (0, i.jsx)(U, {
    premiumSubscription: s,
    onInvoiceError: k,
    priceOptions: S,
    preventFetch: !1
  }) : eu ? (0, i.jsx)(F, {
    premiumSubscription: s,
    onInvoiceError: k,
    priceOptions: S,
    preventFetch: ea
  }) : (0, x.subscriptionCanSwitchImmediately)(s, g, W) ? (0, i.jsx)(D, {
    premiumSubscription: s,
    newPlan: en,
    onInvoiceError: k,
    planGroup: W,
    priceOptions: S,
    preventFetch: ea,
    hasAnnualInvoicePreview: el
  }) : (0, i.jsx)(B, {
    premiumSubscription: s,
    newPlan: en,
    planGroup: W,
    priceOptions: S,
    preventFetch: ea,
    hasAnnualInvoicePreview: el
  })), (0, i.jsxs)("div", {
    className: j.stepBody,
    children: [!eu && er && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(y.PremiumInvoiceTableDivider, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, i.jsx)(b.PremiumSwitchPlanSelectBody, {
        planOptions: eo,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: g,
        showTotal: !1,
        handleClose: Z
      }), (0, i.jsx)(y.PremiumInvoiceTableDivider, {})]
    }), (0, i.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: n
    }), ec, (0, i.jsxs)("div", {
      className: j.paymentSourceWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: M.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(m.default, {
        paymentSources: Object.values(f),
        selectedPaymentSourceId: et,
        onChange: A,
        onPaymentSourceAdd: C,
        hidePersonalInformation: ei,
        disabled: ea
      })]
    }), (0, i.jsxs)(c.CurrencyWrapper, {
      currencies: Y,
      className: j.currencyWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: M.default.Messages.PAYMENT_CURRENCY
      }), (0, i.jsx)(c.default, {
        selectedCurrency: S.currency,
        currencies: Y,
        onChange: K,
        disabled: ea
      })]
    }), (0, i.jsx)(R.default, {
      isActive: H,
      ref: G,
      children: null != s && (0, x.subscriptionCanSwitchImmediately)(s, g, W) ? (0, i.jsx)(w, {
        premiumSubscription: s,
        newPlan: en,
        onInvoiceError: k,
        planGroup: W,
        priceOptions: S,
        preventFetch: ea,
        disabled: ea,
        isEEA: es,
        paymentSources: f,
        setHasAcceptedTerms: L,
        isGift: ee,
        hasAnnualDiscountPreview: null != $
      }) : (0, i.jsx)(p.default, {
        onChange: L,
        finePrint: (0, i.jsx)(d.default, {
          subscriptionPlan: en,
          paymentSourceType: null === (t = f[null != et ? et : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, N.getPrice)(en.id, !1, ee, S),
          currentSubscription: s,
          planGroup: W
        }),
        forceShow: !0,
        showPricingLink: en.currency !== O.CurrencyCodes.USD,
        showWithdrawalWaiver: es,
        disabled: ea,
        subscriptionPlan: en,
        currentSubscription: s,
        planGroup: W
      })
    })]
  })
}

function U(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: s,
    preventFetch: a
  } = e, [r, u] = (0, A.useGetSubscriptionInvoice)({
    subscriptionId: t.id,
    preventFetch: a
  });
  l.useEffect(() => {
    n(u)
  }, [n, u]);
  let c = (0, N.isPrepaidPaymentSource)(s.paymentSourceId);
  return null != r ? (0, i.jsxs)(y.PremiumInvoiceTable, {
    className: L.__invalid_invoice,
    children: [(0, i.jsx)(g.PremiumSubscriptionCurrentInvoiceRows, {
      invoice: r,
      isPrepaidPaymentSource: c
    }), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
      premiumSubscription: t,
      renewalInvoice: r,
      isUpdate: !0,
      isPrepaidPaymentSource: c
    })]
  }) : (0, i.jsx)(o.Spinner, {})
}

function D(e) {
  let {
    premiumSubscription: t,
    newPlan: n,
    onInvoiceError: s,
    planGroup: a,
    priceOptions: r,
    preventFetch: u,
    hasAnnualInvoicePreview: c
  } = e, {
    selectedSkuId: d,
    startedPaymentFlowWithPaymentSourcesRef: m
  } = (0, _.usePaymentContext)(), {
    isGift: p
  } = (0, I.useGiftContext)(), {
    analyticsLocations: P
  } = (0, S.default)(), T = (0, N.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(a)), [v, h] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: T,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: u,
    analyticsLocations: P,
    analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [x, C] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: T,
    renewal: !0,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: u,
    analyticsLocations: P,
    analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), R = null != h ? h : C;
  if (l.useEffect(() => {
      s(R)
    }, [s, R]), null != R) return (0, i.jsx)(o.FormErrorBlock, {
    children: R.message
  });
  let b = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: p,
      selectedSkuId: d,
      startedPaymentFlowWithPaymentSources: m.current
    }),
    O = (0, E.planSwitchLoadingShowSpinner)(b, v, n);
  if (null == v || null == x || O) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let L = (0, N.isPrepaidPaymentSource)(r.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(g.SubscriptionPeriodResetNotice, {
      proratedInvoice: v,
      renewalInvoice: x
    }), (0, i.jsxs)(y.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(y.PremiumInvoiceTableHeader, {
        children: M.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(g.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: v,
        newPlan: n,
        isPrepaidPaymentSource: L
      }), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        proratedInvoice: v,
        renewalInvoice: x,
        isUpdate: !0,
        isPrepaidPaymentSource: L,
        hasAnnualInvoicePreview: c
      })]
    })]
  })
}

function w(e) {
  var t, n;
  let s, {
      premiumSubscription: a,
      newPlan: r,
      onInvoiceError: u,
      planGroup: c,
      priceOptions: m,
      preventFetch: I,
      disabled: _,
      isEEA: P,
      paymentSources: E,
      setHasAcceptedTerms: T,
      isGift: v,
      hasAnnualDiscountPreview: h
    } = e,
    {
      analyticsLocations: x
    } = (0, S.default)(),
    y = (0, N.getItemsWithUpsertedPlanIdForGroup)(a, r.id, 1, new Set(c)),
    [C, R] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: a.id,
      items: y,
      renewal: !0,
      paymentSourceId: m.paymentSourceId,
      currency: m.currency,
      preventFetch: I,
      analyticsLocations: x,
      analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (l.useEffect(() => {
    u(R)
  }, [u, R]), null != R) ? (0, i.jsx)(o.FormErrorBlock, {
    children: R.message
  }) : (null != C && (s = {
    amount: C.total,
    currency: C.currency,
    tax: C.tax,
    taxInclusive: C.taxInclusive
  }), null == s) ? null : (0, i.jsx)(p.default, {
    onChange: T,
    finePrint: (0, i.jsx)(d.default, {
      subscriptionPlan: r,
      paymentSourceType: null === (t = E[null !== (n = m.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: h ? (0, N.getPrice)(r.id, !1, v, m) : s,
      currentSubscription: a,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: r.currency !== O.CurrencyCodes.USD,
    showWithdrawalWaiver: P,
    disabled: _,
    subscriptionPlan: r,
    currentSubscription: a,
    planGroup: c
  })
}

function F(e) {
  let {
    premiumSubscription: t,
    priceOptions: n,
    preventFetch: s,
    onInvoiceError: a
  } = e, {
    analyticsLocations: r
  } = (0, S.default)(), [u, c] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    applyEntitlements: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: s,
    analyticsLocations: r,
    analyticsLocation: f.default.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [d, m] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: s,
    analyticsLocations: r,
    analyticsLocation: f.default.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  }), p = null != c ? c : m;
  if (l.useEffect(() => {
      a(p)
    }, [a, p]), null != p) return (0, i.jsx)(o.FormErrorBlock, {
    children: p.message
  });
  if (null == u || null == d) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let I = (0, N.isPrepaidPaymentSource)(n.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: L.renewalInvoiceDate,
      children: M.default.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY
    }), (0, i.jsxs)(y.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(y.PremiumInvoiceTableHeader, {
        children: M.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(g.PremiumSubscriptionCurrentInvoiceRows, {
        invoice: u,
        isPrepaidPaymentSource: I
      }), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: I
      })]
    })]
  })
}

function B(e) {
  let t, {
      premiumSubscription: n,
      newPlan: l,
      planGroup: s,
      priceOptions: a,
      preventFetch: r,
      hasAnnualInvoicePreview: u
    } = e,
    {
      analyticsLocations: c
    } = (0, S.default)(),
    [d, m] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, N.getItemsWithUpsertedPlanIdForGroup)(n, l.id, 1, new Set(s)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: a.paymentSourceId,
      currency: a.currency,
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
  t = n.type === O.SubscriptionTypes.PREMIUM ? (0, N.getDisplayName)(l.id) : l.name;
  let p = (0, N.isPrepaidPaymentSource)(a.paymentSourceId);
  return (0, i.jsxs)("div", {
    className: j.bodyText,
    children: [(0, i.jsx)("div", {
      className: L.renewalInvoiceDate,
      children: M.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: d.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(y.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(y.PremiumInvoiceTableHeader, {
        children: M.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(y.PremiumInvoiceTableRow, {
        label: t,
        value: (0, N.getFormattedRateForPlan)(l, a, !0)
      }), (0, i.jsx)(C.default, {
        invoice: d
      }), (0, i.jsx)(y.PremiumInvoiceTableDivider, {}), (0, i.jsx)(g.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: p,
        hasAnnualInvoicePreview: u
      })]
    })]
  })
}