"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  a = n("627445"),
  l = n.n(a),
  s = n("976979"),
  u = n("446674"),
  o = n("77078"),
  c = n("335430"),
  d = n("703332"),
  p = n("740055"),
  m = n("545876"),
  S = n("812204"),
  f = n("685665"),
  P = n("635357"),
  I = n("642906"),
  h = n("286350"),
  E = n("176108"),
  T = n("102985"),
  v = n("160299"),
  y = n("10514"),
  x = n("719923"),
  _ = n("380186"),
  b = n("809071"),
  C = n("883662"),
  N = n("991329"),
  g = n("623003"),
  L = n("570727"),
  A = n("146163"),
  j = n("49111"),
  M = n("782340"),
  R = n("88613"),
  w = n("193692");

function O(e) {
  var t;
  let n, {
      premiumSubscription: a,
      paymentSources: S,
      priceOptions: f,
      onPaymentSourceChange: b,
      onPaymentSourceAdd: N,
      planId: A,
      setHasAcceptedTerms: R,
      legalTermsNodeRef: O,
      hasLegalTermsFlash: B,
      onInvoiceError: W,
      planGroup: k,
      currencies: H,
      onCurrencyChange: Y,
      hasOpenInvoice: V,
      purchaseState: z,
      handleClose: Z
    } = e,
    {
      selectedSkuId: K,
      defaultPlanId: Q,
      isPremium: J,
      startedPaymentFlowWithPaymentSourcesRef: X
    } = (0, I.usePaymentContext)(),
    {
      isGift: q
    } = (0, P.useGiftContext)(),
    $ = f.paymentSourceId,
    ee = (0, u.useStateFromStores)([y.default], () => y.default.get(A));
  l(null != ee, "Missing newPlan");
  let et = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation);
  n = V ? M.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.isPremiumSubscriptionPlan)(A) ? (0, x.getBillingReviewSubheader)(a, ee) : M.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: ee.name
  });
  let en = s.CountryCodesSets.EEA_COUNTRIES.has(v.default.ipCountryCodeWithFallback),
    ei = z === h.PurchaseState.PURCHASING || z === h.PurchaseState.COMPLETED,
    er = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: q,
      selectedSkuId: K,
      startedPaymentFlowWithPaymentSources: X.current
    }),
    ea = r.useMemo(() => (0, x.getPremiumPlanOptions)({
      skuId: K,
      isPremium: J,
      multiMonthPlans: [],
      currentSubscription: a,
      isGift: q,
      isEligibleForTrial: !1,
      defaultPlanId: Q,
      defaultToMonthlyPlan: !1
    }), [K, a, Q, J, q]);
  return (0, i.jsxs)("div", {
    className: w.stepBody,
    children: [er && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(C.PremiumInvoiceTableDivider, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, i.jsx)(L.PremiumSwitchPlanSelectBody, {
        planOptions: ea,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: A,
        showTotal: !1,
        handleClose: Z
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {})]
    }), (0, i.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: n
    }), null != a ? V ? (0, i.jsx)(F, {
      premiumSubscription: a,
      onInvoiceError: W,
      priceOptions: f,
      preventFetch: !1
    }) : (0, _.subscriptionCanSwitchImmediately)(a, A, k) ? (0, i.jsx)(U, {
      premiumSubscription: a,
      newPlan: ee,
      onInvoiceError: W,
      planGroup: k,
      priceOptions: f,
      preventFetch: ei
    }) : (0, i.jsx)(D, {
      premiumSubscription: a,
      newPlan: ee,
      planGroup: k,
      priceOptions: f,
      preventFetch: ei
    }) : null, (0, i.jsxs)("div", {
      className: w.paymentSourceWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: M.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(p.default, {
        paymentSources: Object.values(S),
        selectedPaymentSourceId: $,
        onChange: b,
        onPaymentSourceAdd: N,
        hidePersonalInformation: et,
        disabled: ei
      })]
    }), (0, i.jsxs)(c.CurrencyWrapper, {
      currencies: H,
      className: w.currencyWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: M.default.Messages.PAYMENT_CURRENCY
      }), (0, i.jsx)(c.default, {
        selectedCurrency: f.currency,
        currencies: H,
        onChange: Y,
        disabled: ei
      })]
    }), (0, i.jsx)(g.default, {
      isActive: B,
      ref: O,
      children: null != a && (0, _.subscriptionCanSwitchImmediately)(a, A, k) ? (0, i.jsx)(G, {
        premiumSubscription: a,
        newPlan: ee,
        onInvoiceError: W,
        planGroup: k,
        priceOptions: f,
        preventFetch: ei,
        disabled: ei,
        isEEA: en,
        paymentSources: S,
        setHasAcceptedTerms: R
      }) : (0, i.jsx)(m.default, {
        onChange: R,
        finePrint: (0, i.jsx)(d.default, {
          subscriptionPlan: ee,
          paymentSourceType: null === (t = S[null != $ ? $ : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, x.getPrice)(ee.id, !1, q, f),
          currentSubscription: a,
          planGroup: k
        }),
        forceShow: !0,
        showPricingLink: ee.currency !== j.CurrencyCodes.USD,
        showWithdrawalWaiver: en,
        disabled: ei,
        subscriptionPlan: ee,
        currentSubscription: a,
        planGroup: k
      })
    })]
  })
}

function F(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: a,
    preventFetch: l
  } = e, [s, u] = (0, b.useGetSubscriptionInvoice)({
    subscriptionId: t.id,
    preventFetch: l
  });
  r.useEffect(() => {
    n(u)
  }, [n, u]);
  let c = (0, x.isPrepaidPaymentSource)(a.paymentSourceId);
  return null != s ? (0, i.jsxs)(C.PremiumInvoiceTable, {
    className: R.invoice,
    children: [(0, i.jsx)(A.PremiumSubscriptionCurrentInvoiceRows, {
      invoice: s,
      isPrepaidPaymentSource: c
    }), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
      premiumSubscription: t,
      renewalInvoice: s,
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
    priceOptions: s,
    preventFetch: u
  } = e, {
    selectedSkuId: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, I.usePaymentContext)(), {
    isGift: p
  } = (0, P.useGiftContext)(), {
    analyticsLocations: m
  } = (0, f.default)(), h = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(l)), [T, v] = (0, b.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: h,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: s.paymentSourceId,
    currency: s.currency,
    preventFetch: u,
    analyticsLocations: m,
    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [y, _] = (0, b.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: h,
    renewal: !0,
    paymentSourceId: s.paymentSourceId,
    currency: s.currency,
    preventFetch: u,
    analyticsLocations: m,
    analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), N = null != v ? v : _;
  if (r.useEffect(() => {
      a(N)
    }, [a, N]), null != N) return (0, i.jsx)(o.FormErrorBlock, {
    children: N.message
  });
  let g = (0, E.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: p,
      selectedSkuId: c,
      startedPaymentFlowWithPaymentSources: d.current
    }),
    L = (0, E.planSwitchLoadingShowSpinner)(g, T, n);
  if (null == T || null == y || L) return (0, i.jsx)(o.Spinner, {
    className: w.spinner
  });
  let j = (0, x.isPrepaidPaymentSource)(s.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(A.SubscriptionPeriodResetNotice, {
      proratedInvoice: T,
      renewalInvoice: y
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: w.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: M.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(A.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: T,
        newPlan: n,
        isPrepaidPaymentSource: j
      }), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        proratedInvoice: T,
        renewalInvoice: y,
        isUpdate: !0,
        isPrepaidPaymentSource: j
      })]
    })]
  })
}

function G(e) {
  var t, n;
  let a, {
      premiumSubscription: l,
      newPlan: s,
      onInvoiceError: u,
      planGroup: c,
      priceOptions: p,
      preventFetch: P,
      disabled: I,
      isEEA: h,
      paymentSources: E,
      setHasAcceptedTerms: T
    } = e,
    {
      analyticsLocations: v
    } = (0, f.default)(),
    y = (0, x.getItemsWithUpsertedPlanIdForGroup)(l, s.id, 1, new Set(c)),
    [_, C] = (0, b.useSubscriptionInvoicePreview)({
      subscriptionId: l.id,
      items: y,
      renewal: !0,
      paymentSourceId: p.paymentSourceId,
      currency: p.currency,
      preventFetch: P,
      analyticsLocations: v,
      analyticsLocation: S.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (r.useEffect(() => {
    u(C)
  }, [u, C]), null != C) ? (0, i.jsx)(o.FormErrorBlock, {
    children: C.message
  }) : (null != _ && (a = {
    amount: _.total,
    currency: _.currency,
    tax: _.tax,
    taxInclusive: _.taxInclusive
  }), null == a) ? null : (0, i.jsx)(m.default, {
    onChange: T,
    finePrint: (0, i.jsx)(d.default, {
      subscriptionPlan: s,
      paymentSourceType: null === (t = E[null !== (n = p.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: a,
      currentSubscription: l,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: s.currency !== j.CurrencyCodes.USD,
    showWithdrawalWaiver: h,
    disabled: I,
    subscriptionPlan: s,
    currentSubscription: l,
    planGroup: c
  })
}

function D(e) {
  let t, {
      premiumSubscription: n,
      newPlan: r,
      planGroup: a,
      priceOptions: l,
      preventFetch: s
    } = e,
    {
      analyticsLocations: u
    } = (0, f.default)(),
    [c, d] = (0, b.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, x.getItemsWithUpsertedPlanIdForGroup)(n, r.id, 1, new Set(a)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: l.paymentSourceId,
      currency: l.currency,
      preventFetch: s,
      analyticsLocations: u,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != d) return (0, i.jsx)(o.FormErrorBlock, {
    children: d.message
  });
  if (null == c) return (0, i.jsx)("div", {
    children: (0, i.jsx)(o.Spinner, {})
  });
  t = n.type === j.SubscriptionTypes.PREMIUM ? (0, x.getDisplayName)(r.id) : r.name;
  let p = (0, x.isPrepaidPaymentSource)(l.paymentSourceId);
  return (0, i.jsxs)("div", {
    className: w.bodyText,
    children: [(0, i.jsx)("div", {
      className: R.renewalInvoiceDate,
      children: M.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: c.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: w.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: M.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(C.PremiumInvoiceTableRow, {
        label: t,
        value: (0, x.getFormattedRateForPlan)(r, l, !0)
      }), (0, i.jsx)(N.default, {
        invoice: c
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {}), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: c,
        isUpdate: !0,
        isPrepaidPaymentSource: p
      })]
    })]
  })
}