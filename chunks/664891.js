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
  I = n("598"),
  E = n("45572"),
  P = n("614223"),
  T = n("246946"),
  N = n("351402"),
  h = n("509545"),
  x = n("74538"),
  v = n("296848"),
  A = n("374649"),
  C = n("653798"),
  g = n("585602"),
  M = n("314182"),
  y = n("314404"),
  R = n("42818"),
  b = n("981631"),
  O = n("689938"),
  L = n("867765"),
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
      setHasAcceptedTerms: L,
      legalTermsNodeRef: G,
      hasLegalTermsFlash: B,
      onInvoiceError: k,
      planGroup: H,
      currencies: W,
      onCurrencyChange: Y,
      hasOpenInvoice: K,
      purchaseState: V,
      handleClose: Z
    } = e,
    {
      selectedSkuId: z,
      defaultPlanId: J,
      isPremium: X,
      startedPaymentFlowWithPaymentSourcesRef: q
    } = (0, I.usePaymentContext)(),
    {
      isGift: Q
    } = (0, S.useGiftContext)(),
    $ = _.paymentSourceId,
    ee = (0, u.useStateFromStores)([h.default], () => h.default.get(R));
  l()(null != ee, "Missing newPlan");
  let et = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation);
  n = K ? O.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.isPremiumSubscriptionPlan)(R) ? (0, x.getBillingReviewSubheader)(a, ee) : O.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: ee.name
  });
  let en = r.CountryCodesSets.EEA_COUNTRIES.has(N.default.ipCountryCodeWithFallback),
    ei = V === E.PurchaseState.PURCHASING || V === E.PurchaseState.COMPLETED,
    es = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: Q,
      selectedSkuId: z,
      startedPaymentFlowWithPaymentSources: q.current
    }),
    ea = (null == a ? void 0 : a.status) === b.SubscriptionStatusTypes.PAUSED,
    el = s.useMemo(() => (0, x.getPremiumPlanOptions)({
      skuId: z,
      isPremium: X,
      multiMonthPlans: [],
      currentSubscription: a,
      isGift: Q,
      isEligibleForTrial: !1,
      defaultPlanId: J,
      defaultToMonthlyPlan: !1
    }), [z, a, J, X, Q]);
  return (0, i.jsxs)("div", {
    className: j.stepBody,
    children: [!ea && es && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(C.PremiumInvoiceTableDivider, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, i.jsx)(y.PremiumSwitchPlanSelectBody, {
        planOptions: el,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: R,
        showTotal: !1,
        handleClose: Z
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {})]
    }), (0, i.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: n
    }), null != a ? K ? (0, i.jsx)(D, {
      premiumSubscription: a,
      onInvoiceError: k,
      priceOptions: _,
      preventFetch: !1
    }) : (0, v.subscriptionCanSwitchImmediately)(a, R, H) ? (0, i.jsx)(F, {
      premiumSubscription: a,
      newPlan: ee,
      onInvoiceError: k,
      planGroup: H,
      priceOptions: _,
      preventFetch: ei
    }) : (0, i.jsx)(w, {
      premiumSubscription: a,
      newPlan: ee,
      planGroup: H,
      priceOptions: _,
      preventFetch: ei
    }) : null, (0, i.jsxs)("div", {
      className: j.paymentSourceWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: O.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(m.default, {
        paymentSources: Object.values(p),
        selectedPaymentSourceId: $,
        onChange: A,
        onPaymentSourceAdd: g,
        hidePersonalInformation: et,
        disabled: ei
      })]
    }), (0, i.jsxs)(c.CurrencyWrapper, {
      currencies: W,
      className: j.currencyWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: O.default.Messages.PAYMENT_CURRENCY
      }), (0, i.jsx)(c.default, {
        selectedCurrency: _.currency,
        currencies: W,
        onChange: Y,
        disabled: ei
      })]
    }), (0, i.jsx)(M.default, {
      isActive: B,
      ref: G,
      children: null != a && (0, v.subscriptionCanSwitchImmediately)(a, R, H) ? (0, i.jsx)(U, {
        premiumSubscription: a,
        newPlan: ee,
        onInvoiceError: k,
        planGroup: H,
        priceOptions: _,
        preventFetch: ei,
        disabled: ei,
        isEEA: en,
        paymentSources: p,
        setHasAcceptedTerms: L
      }) : (0, i.jsx)(f.default, {
        onChange: L,
        finePrint: (0, i.jsx)(d.default, {
          subscriptionPlan: ee,
          paymentSourceType: null === (t = p[null != $ ? $ : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, x.getPrice)(ee.id, !1, Q, _),
          currentSubscription: a,
          planGroup: H
        }),
        forceShow: !0,
        showPricingLink: ee.currency !== b.CurrencyCodes.USD,
        showWithdrawalWaiver: en,
        disabled: ei,
        subscriptionPlan: ee,
        currentSubscription: a,
        planGroup: H
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
  let c = (0, x.isPrepaidPaymentSource)(a.paymentSourceId);
  return null != r ? (0, i.jsxs)(C.PremiumInvoiceTable, {
    className: L.__invalid_invoice,
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

function F(e) {
  let {
    premiumSubscription: t,
    newPlan: n,
    onInvoiceError: a,
    planGroup: l,
    priceOptions: r,
    preventFetch: u
  } = e, {
    selectedSkuId: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, I.usePaymentContext)(), {
    isGift: m
  } = (0, S.useGiftContext)(), {
    analyticsLocations: f
  } = (0, _.default)(), E = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(l)), [T, N] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: E,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: u,
    analyticsLocations: f,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [h, v] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: E,
    renewal: !0,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: u,
    analyticsLocations: f,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), g = null != N ? N : v;
  if (s.useEffect(() => {
      a(g)
    }, [a, g]), null != g) return (0, i.jsx)(o.FormErrorBlock, {
    children: g.message
  });
  let M = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: m,
      selectedSkuId: c,
      startedPaymentFlowWithPaymentSources: d.current
    }),
    y = (0, P.planSwitchLoadingShowSpinner)(M, T, n);
  if (null == T || null == h || y) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let b = (0, x.isPrepaidPaymentSource)(r.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(R.SubscriptionPeriodResetNotice, {
      proratedInvoice: T,
      renewalInvoice: h
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: O.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
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

function U(e) {
  var t, n;
  let a, {
      premiumSubscription: l,
      newPlan: r,
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
    h = (0, x.getItemsWithUpsertedPlanIdForGroup)(l, r.id, 1, new Set(c)),
    [v, C] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: l.id,
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
  }) : (null != v && (a = {
    amount: v.total,
    currency: v.currency,
    tax: v.tax,
    taxInclusive: v.taxInclusive
  }), null == a) ? null : (0, i.jsx)(f.default, {
    onChange: T,
    finePrint: (0, i.jsx)(d.default, {
      subscriptionPlan: r,
      paymentSourceType: null === (t = P[null !== (n = m.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: a,
      currentSubscription: l,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: r.currency !== b.CurrencyCodes.USD,
    showWithdrawalWaiver: E,
    disabled: I,
    subscriptionPlan: r,
    currentSubscription: l,
    planGroup: c
  })
}

function w(e) {
  let t, {
      premiumSubscription: n,
      newPlan: s,
      planGroup: a,
      priceOptions: l,
      preventFetch: r
    } = e,
    {
      analyticsLocations: u
    } = (0, _.default)(),
    [c, d] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, x.getItemsWithUpsertedPlanIdForGroup)(n, s.id, 1, new Set(a)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: l.paymentSourceId,
      currency: l.currency,
      preventFetch: r,
      analyticsLocations: u,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != d) return (0, i.jsx)(o.FormErrorBlock, {
    children: d.message
  });
  if (null == c) return (0, i.jsx)("div", {
    children: (0, i.jsx)(o.Spinner, {})
  });
  t = n.type === b.SubscriptionTypes.PREMIUM ? (0, x.getDisplayName)(s.id) : s.name;
  let m = (0, x.isPrepaidPaymentSource)(l.paymentSourceId);
  return (0, i.jsxs)("div", {
    className: j.bodyText,
    children: [(0, i.jsx)("div", {
      className: L.renewalInvoiceDate,
      children: O.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: c.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: O.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(C.PremiumInvoiceTableRow, {
        label: t,
        value: (0, x.getFormattedRateForPlan)(s, l, !0)
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