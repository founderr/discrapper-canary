"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  r = n.n(a),
  l = n("742280"),
  u = n("442837"),
  o = n("481060"),
  c = n("190947"),
  d = n("224550"),
  m = n("275850"),
  f = n("672971"),
  p = n("100527"),
  _ = n("906732"),
  S = n("987209"),
  I = n("598"),
  E = n("45572"),
  P = n("614223"),
  T = n("246946"),
  N = n("351402"),
  h = n("509545"),
  v = n("74538"),
  x = n("296848"),
  A = n("374649"),
  C = n("653798"),
  g = n("585602"),
  y = n("314182"),
  M = n("314404"),
  R = n("42818"),
  b = n("981631"),
  L = n("689938"),
  O = n("867765"),
  j = n("422449");

function G(e) {
  var t;
  let n, {
      premiumSubscription: a,
      paymentSources: p,
      priceOptions: _,
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
      startedPaymentFlowWithPaymentSourcesRef: Q
    } = (0, I.usePaymentContext)(),
    {
      isGift: $
    } = (0, S.useGiftContext)(),
    ee = _.paymentSourceId,
    et = (0, u.useStateFromStores)([h.default], () => h.default.get(R));
  r()(null != et, "Missing newPlan");
  let en = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation),
    ei = l.CountryCodesSets.EEA_COUNTRIES.has(N.default.ipCountryCodeWithFallback),
    es = Z === E.PurchaseState.PURCHASING || Z === E.PurchaseState.COMPLETED,
    ea = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: $,
      selectedSkuId: J,
      startedPaymentFlowWithPaymentSources: Q.current
    }),
    er = (null == a ? void 0 : a.status) === b.SubscriptionStatusTypes.PAUSED,
    el = s.useMemo(() => (0, v.getPremiumPlanOptions)({
      skuId: J,
      isPremium: q,
      multiMonthPlans: [],
      currentSubscription: a,
      isGift: $,
      isEligibleForTrial: !1,
      defaultPlanId: X,
      defaultToMonthlyPlan: !1
    }), [J, a, X, q, $]);
  n = V || er ? L.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, v.isPremiumSubscriptionPlan)(R) ? (0, v.getBillingReviewSubheader)(a, et) : L.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: et.name
  });
  let eu = null;
  return null != a && (eu = V ? (0, i.jsx)(D, {
    premiumSubscription: a,
    onInvoiceError: H,
    priceOptions: _,
    preventFetch: !1
  }) : er ? (0, i.jsx)(w, {
    premiumSubscription: a,
    onInvoiceError: H,
    priceOptions: _,
    preventFetch: es
  }) : (0, x.subscriptionCanSwitchImmediately)(a, R, W) ? (0, i.jsx)(U, {
    premiumSubscription: a,
    newPlan: et,
    onInvoiceError: H,
    planGroup: W,
    priceOptions: _,
    preventFetch: es
  }) : (0, i.jsx)(B, {
    premiumSubscription: a,
    newPlan: et,
    planGroup: W,
    priceOptions: _,
    preventFetch: es
  })), (0, i.jsxs)("div", {
    className: j.stepBody,
    children: [!er && ea && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(C.PremiumInvoiceTableDivider, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, i.jsx)(M.PremiumSwitchPlanSelectBody, {
        planOptions: el,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: R,
        showTotal: !1,
        handleClose: z
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {})]
    }), (0, i.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: n
    }), eu, (0, i.jsxs)("div", {
      className: j.paymentSourceWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: L.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(m.default, {
        paymentSources: Object.values(p),
        selectedPaymentSourceId: ee,
        onChange: A,
        onPaymentSourceAdd: g,
        hidePersonalInformation: en,
        disabled: es
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
        disabled: es
      })]
    }), (0, i.jsx)(y.default, {
      isActive: k,
      ref: G,
      children: null != a && (0, x.subscriptionCanSwitchImmediately)(a, R, W) ? (0, i.jsx)(F, {
        premiumSubscription: a,
        newPlan: et,
        onInvoiceError: H,
        planGroup: W,
        priceOptions: _,
        preventFetch: es,
        disabled: es,
        isEEA: ei,
        paymentSources: p,
        setHasAcceptedTerms: O
      }) : (0, i.jsx)(f.default, {
        onChange: O,
        finePrint: (0, i.jsx)(d.default, {
          subscriptionPlan: et,
          paymentSourceType: null === (t = p[null != ee ? ee : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, v.getPrice)(et.id, !1, $, _),
          currentSubscription: a,
          planGroup: W
        }),
        forceShow: !0,
        showPricingLink: et.currency !== b.CurrencyCodes.USD,
        showWithdrawalWaiver: ei,
        disabled: es,
        subscriptionPlan: et,
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
    preventFetch: r
  } = e, [l, u] = (0, A.useGetSubscriptionInvoice)({
    subscriptionId: t.id,
    preventFetch: r
  });
  s.useEffect(() => {
    n(u)
  }, [n, u]);
  let c = (0, v.isPrepaidPaymentSource)(a.paymentSourceId);
  return null != l ? (0, i.jsxs)(C.PremiumInvoiceTable, {
    className: O.__invalid_invoice,
    children: [(0, i.jsx)(R.PremiumSubscriptionCurrentInvoiceRows, {
      invoice: l,
      isPrepaidPaymentSource: c
    }), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
      premiumSubscription: t,
      renewalInvoice: l,
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
    planGroup: r,
    priceOptions: l,
    preventFetch: u
  } = e, {
    selectedSkuId: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, I.usePaymentContext)(), {
    isGift: m
  } = (0, S.useGiftContext)(), {
    analyticsLocations: f
  } = (0, _.default)(), E = (0, v.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(r)), [T, N] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: E,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: l.paymentSourceId,
    currency: l.currency,
    preventFetch: u,
    analyticsLocations: f,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [h, x] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: E,
    renewal: !0,
    paymentSourceId: l.paymentSourceId,
    currency: l.currency,
    preventFetch: u,
    analyticsLocations: f,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), g = null != N ? N : x;
  if (s.useEffect(() => {
      a(g)
    }, [a, g]), null != g) return (0, i.jsx)(o.FormErrorBlock, {
    children: g.message
  });
  let y = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: m,
      selectedSkuId: c,
      startedPaymentFlowWithPaymentSources: d.current
    }),
    M = (0, P.planSwitchLoadingShowSpinner)(y, T, n);
  if (null == T || null == h || M) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let b = (0, v.isPrepaidPaymentSource)(l.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(R.SubscriptionPeriodResetNotice, {
      proratedInvoice: T,
      renewalInvoice: h
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: L.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(R.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: T,
        newPlan: n,
        isPrepaidPaymentSource: b
      }), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        proratedInvoice: T,
        renewalInvoice: h,
        isUpdate: !0,
        isPrepaidPaymentSource: b
      })]
    })]
  })
}

function F(e) {
  var t, n;
  let a, {
      premiumSubscription: r,
      newPlan: l,
      onInvoiceError: u,
      planGroup: c,
      priceOptions: m,
      preventFetch: S,
      disabled: I,
      isEEA: E,
      paymentSources: P,
      setHasAcceptedTerms: T
    } = e,
    {
      analyticsLocations: N
    } = (0, _.default)(),
    h = (0, v.getItemsWithUpsertedPlanIdForGroup)(r, l.id, 1, new Set(c)),
    [x, C] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: r.id,
      items: h,
      renewal: !0,
      paymentSourceId: m.paymentSourceId,
      currency: m.currency,
      preventFetch: S,
      analyticsLocations: N,
      analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (s.useEffect(() => {
    u(C)
  }, [u, C]), null != C) ? (0, i.jsx)(o.FormErrorBlock, {
    children: C.message
  }) : (null != x && (a = {
    amount: x.total,
    currency: x.currency,
    tax: x.tax,
    taxInclusive: x.taxInclusive
  }), null == a) ? null : (0, i.jsx)(f.default, {
    onChange: T,
    finePrint: (0, i.jsx)(d.default, {
      subscriptionPlan: l,
      paymentSourceType: null === (t = P[null !== (n = m.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: a,
      currentSubscription: r,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: l.currency !== b.CurrencyCodes.USD,
    showWithdrawalWaiver: E,
    disabled: I,
    subscriptionPlan: l,
    currentSubscription: r,
    planGroup: c
  })
}

function w(e) {
  let {
    premiumSubscription: t,
    priceOptions: n,
    preventFetch: a,
    onInvoiceError: r
  } = e, {
    analyticsLocations: l
  } = (0, _.default)(), [u, c] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    applyEntitlements: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: l,
    analyticsLocation: p.default.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [d, m] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    renewal: !0,
    paymentSourceId: n.paymentSourceId,
    currency: n.currency,
    preventFetch: a,
    analyticsLocations: l,
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
  let S = (0, v.isPrepaidPaymentSource)(n.paymentSourceId);
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
      priceOptions: r,
      preventFetch: l
    } = e,
    {
      analyticsLocations: u
    } = (0, _.default)(),
    [c, d] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, v.getItemsWithUpsertedPlanIdForGroup)(n, s.id, 1, new Set(a)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: r.paymentSourceId,
      currency: r.currency,
      preventFetch: l,
      analyticsLocations: u,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != d) return (0, i.jsx)(o.FormErrorBlock, {
    children: d.message
  });
  if (null == c) return (0, i.jsx)("div", {
    children: (0, i.jsx)(o.Spinner, {})
  });
  t = n.type === b.SubscriptionTypes.PREMIUM ? (0, v.getDisplayName)(s.id) : s.name;
  let m = (0, v.isPrepaidPaymentSource)(r.paymentSourceId);
  return (0, i.jsxs)("div", {
    className: j.bodyText,
    children: [(0, i.jsx)("div", {
      className: O.renewalInvoiceDate,
      children: L.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: c.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: L.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(C.PremiumInvoiceTableRow, {
        label: t,
        value: (0, v.getFormattedRateForPlan)(s, r, !0)
      }), (0, i.jsx)(g.default, {
        invoice: c
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {}), (0, i.jsx)(R.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: c,
        isUpdate: !0,
        isPrepaidPaymentSource: m
      })]
    })]
  })
}