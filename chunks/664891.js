s.d(n, {
  Z: function() {
    return b
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(512722),
  r = s.n(i),
  a = s(742280),
  c = s(442837),
  o = s(481060),
  u = s(190947),
  d = s(224550),
  _ = s(275850),
  m = s(672971),
  I = s(100527),
  E = s(906732),
  p = s(987209),
  N = s(598),
  T = s(45572),
  S = s(614223),
  x = s(246946),
  h = s(351402),
  P = s(509545),
  A = s(74538),
  v = s(296848),
  f = s(374649),
  M = s(653798),
  g = s(585602),
  C = s(314182),
  R = s(314404),
  O = s(42818),
  L = s(981631),
  j = s(689938),
  y = s(745566),
  Z = s(473571);

function b(e) {
  var n;
  let s, {
      premiumSubscription: i,
      paymentSources: I,
      priceOptions: E,
      onPaymentSourceChange: f,
      onPaymentSourceAdd: g,
      planId: O,
      setHasAcceptedTerms: y,
      legalTermsNodeRef: b,
      hasLegalTermsFlash: B,
      onInvoiceError: H,
      planGroup: k,
      currencies: W,
      onCurrencyChange: Y,
      hasOpenInvoice: K,
      purchaseState: V,
      handleClose: z
    } = e,
    {
      selectedSkuId: X,
      defaultPlanId: J,
      isPremium: q,
      startedPaymentFlowWithPaymentSourcesRef: Q,
      annualDiscountInvoicePreview: $
    } = (0, N.usePaymentContext)(),
    {
      isGift: ee
    } = (0, p.wD)(),
    en = E.paymentSourceId,
    es = (0, c.e7)([P.Z], () => P.Z.get(O));
  r()(null != es, "Missing newPlan");
  let el = (0, c.e7)([x.Z], () => x.Z.hidePersonalInformation),
    et = null != $,
    ei = a.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
    er = V === T.A.PURCHASING || V === T.A.COMPLETED,
    ea = (0, S.Kp)({
      isTrial: !1,
      isGift: ee,
      selectedSkuId: X,
      startedPaymentFlowWithPaymentSources: Q.current
    }),
    ec = (null == i ? void 0 : i.status) === L.O0b.PAUSED,
    eo = t.useMemo(() => (0, A.V7)({
      skuId: X,
      isPremium: q,
      multiMonthPlans: [],
      currentSubscription: i,
      isGift: ee,
      isEligibleForTrial: !1,
      defaultPlanId: J,
      defaultToMonthlyPlan: !1
    }), [X, i, J, q, ee]);
  s = K || ec ? j.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, A.PV)(O) ? (0, A.W_)(i, es) : j.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: es.name
  });
  let eu = null;
  return null != i && (eu = K ? (0, l.jsx)(D, {
    premiumSubscription: i,
    onInvoiceError: H,
    priceOptions: E,
    preventFetch: !1
  }) : ec ? (0, l.jsx)(F, {
    premiumSubscription: i,
    onInvoiceError: H,
    priceOptions: E,
    preventFetch: er
  }) : (0, v.R4)(i, O, k) ? (0, l.jsx)(G, {
    premiumSubscription: i,
    newPlan: es,
    onInvoiceError: H,
    planGroup: k,
    priceOptions: E,
    preventFetch: er,
    hasAnnualInvoicePreview: et
  }) : (0, l.jsx)(w, {
    premiumSubscription: i,
    newPlan: es,
    planGroup: k,
    priceOptions: E,
    preventFetch: er,
    hasAnnualInvoicePreview: et
  })), (0, l.jsxs)("div", {
    className: Z.stepBody,
    children: [!ec && ea && (0, l.jsxs)("div", {
      children: [(0, l.jsx)(M.KU, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, l.jsx)(R.O, {
        planOptions: eo,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: O,
        showTotal: !1,
        handleClose: z
      }), (0, l.jsx)(M.KU, {})]
    }), (0, l.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: s
    }), eu, (0, l.jsxs)("div", {
      className: Z.paymentSourceWrapper,
      children: [(0, l.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: j.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, l.jsx)(_.Z, {
        paymentSources: Object.values(I),
        selectedPaymentSourceId: en,
        onChange: f,
        onPaymentSourceAdd: g,
        hidePersonalInformation: el,
        disabled: er
      })]
    }), (0, l.jsxs)(u.b, {
      currencies: W,
      className: Z.currencyWrapper,
      children: [(0, l.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: j.Z.Messages.PAYMENT_CURRENCY
      }), (0, l.jsx)(u.Z, {
        selectedCurrency: E.currency,
        currencies: W,
        onChange: Y,
        disabled: er
      })]
    }), (0, l.jsx)(C.Z, {
      isActive: B,
      ref: b,
      children: null != i && (0, v.R4)(i, O, k) ? (0, l.jsx)(U, {
        premiumSubscription: i,
        newPlan: es,
        onInvoiceError: H,
        planGroup: k,
        priceOptions: E,
        preventFetch: er,
        disabled: er,
        isEEA: ei,
        paymentSources: I,
        setHasAcceptedTerms: y,
        isGift: ee,
        hasAnnualDiscountPreview: null != $
      }) : (0, l.jsx)(m.Z, {
        onChange: y,
        finePrint: (0, l.jsx)(d.Z, {
          subscriptionPlan: es,
          paymentSourceType: null === (n = I[null != en ? en : ""]) || void 0 === n ? void 0 : n.type,
          basePrice: (0, A.aS)(es.id, !1, ee, E),
          currentSubscription: i,
          planGroup: k
        }),
        forceShow: !0,
        showPricingLink: es.currency !== L.pKx.USD,
        showWithdrawalWaiver: ei,
        disabled: er,
        subscriptionPlan: es,
        currentSubscription: i,
        planGroup: k
      })
    })]
  })
}

function D(e) {
  let {
    premiumSubscription: n,
    onInvoiceError: s,
    priceOptions: i,
    preventFetch: r
  } = e, [a, c] = (0, f.Ox)({
    subscriptionId: n.id,
    preventFetch: r
  });
  t.useEffect(() => {
    s(c)
  }, [s, c]);
  let u = (0, A.Ap)(i.paymentSourceId);
  return null != a ? (0, l.jsxs)(M.PO, {
    className: y.__invalid_invoice,
    children: [(0, l.jsx)(O.By, {
      invoice: a,
      isPrepaidPaymentSource: u
    }), (0, l.jsx)(O.nd, {
      premiumSubscription: n,
      renewalInvoice: a,
      isUpdate: !0,
      isPrepaidPaymentSource: u
    })]
  }) : (0, l.jsx)(o.Spinner, {})
}

function G(e) {
  let {
    premiumSubscription: n,
    newPlan: s,
    onInvoiceError: i,
    planGroup: r,
    priceOptions: a,
    preventFetch: c,
    hasAnnualInvoicePreview: u
  } = e, {
    selectedSkuId: d,
    startedPaymentFlowWithPaymentSourcesRef: _
  } = (0, N.usePaymentContext)(), {
    isGift: m
  } = (0, p.wD)(), {
    analyticsLocations: T
  } = (0, E.ZP)(), x = (0, A.al)(n, s.id, 1, new Set(r)), [h, P] = (0, f.ED)({
    subscriptionId: n.id,
    items: x,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: a.paymentSourceId,
    currency: a.currency,
    preventFetch: c,
    analyticsLocations: T,
    analyticsLocation: I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [v, g] = (0, f.ED)({
    subscriptionId: n.id,
    items: x,
    renewal: !0,
    paymentSourceId: a.paymentSourceId,
    currency: a.currency,
    preventFetch: c,
    analyticsLocations: T,
    analyticsLocation: I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), C = null != P ? P : g;
  if (t.useEffect(() => {
      i(C)
    }, [i, C]), null != C) return (0, l.jsx)(o.FormErrorBlock, {
    children: C.message
  });
  let R = (0, S.Kp)({
      isTrial: !1,
      isGift: m,
      selectedSkuId: d,
      startedPaymentFlowWithPaymentSources: _.current
    }),
    L = (0, S.$g)(R, h, s);
  if (null == h || null == v || L) return (0, l.jsx)(o.Spinner, {
    className: Z.__invalid_spinner
  });
  let y = (0, A.Ap)(a.paymentSourceId);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(O.hG, {
      proratedInvoice: h,
      renewalInvoice: v
    }), (0, l.jsxs)(M.PO, {
      className: Z.invoice,
      children: [(0, l.jsx)(M.q9, {
        children: j.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, l.jsx)(O.Lu, {
        invoice: h,
        newPlan: s,
        isPrepaidPaymentSource: y
      }), (0, l.jsx)(O.nd, {
        premiumSubscription: n,
        proratedInvoice: h,
        renewalInvoice: v,
        isUpdate: !0,
        isPrepaidPaymentSource: y,
        hasAnnualInvoicePreview: u
      })]
    })]
  })
}

function U(e) {
  var n, s;
  let i, {
      premiumSubscription: r,
      newPlan: a,
      onInvoiceError: c,
      planGroup: u,
      priceOptions: _,
      preventFetch: p,
      disabled: N,
      isEEA: T,
      paymentSources: S,
      setHasAcceptedTerms: x,
      isGift: h,
      hasAnnualDiscountPreview: P
    } = e,
    {
      analyticsLocations: v
    } = (0, E.ZP)(),
    M = (0, A.al)(r, a.id, 1, new Set(u)),
    [g, C] = (0, f.ED)({
      subscriptionId: r.id,
      items: M,
      renewal: !0,
      paymentSourceId: _.paymentSourceId,
      currency: _.currency,
      preventFetch: p,
      analyticsLocations: v,
      analyticsLocation: I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (t.useEffect(() => {
    c(C)
  }, [c, C]), null != C) ? (0, l.jsx)(o.FormErrorBlock, {
    children: C.message
  }) : (null != g && (i = {
    amount: g.total,
    currency: g.currency,
    tax: g.tax,
    taxInclusive: g.taxInclusive
  }), null == i) ? null : (0, l.jsx)(m.Z, {
    onChange: x,
    finePrint: (0, l.jsx)(d.Z, {
      subscriptionPlan: a,
      paymentSourceType: null === (n = S[null !== (s = _.paymentSourceId) && void 0 !== s ? s : ""]) || void 0 === n ? void 0 : n.type,
      basePrice: P ? (0, A.aS)(a.id, !1, h, _) : i,
      currentSubscription: r,
      planGroup: u
    }),
    forceShow: !0,
    showPricingLink: a.currency !== L.pKx.USD,
    showWithdrawalWaiver: T,
    disabled: N,
    subscriptionPlan: a,
    currentSubscription: r,
    planGroup: u
  })
}

function F(e) {
  let {
    premiumSubscription: n,
    priceOptions: s,
    preventFetch: i,
    onInvoiceError: r
  } = e, {
    analyticsLocations: a
  } = (0, E.ZP)(), [c, u] = (0, f.ED)({
    subscriptionId: n.id,
    renewal: !0,
    applyEntitlements: !0,
    paymentSourceId: s.paymentSourceId,
    currency: s.currency,
    preventFetch: i,
    analyticsLocations: a,
    analyticsLocation: I.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [d, _] = (0, f.ED)({
    subscriptionId: n.id,
    renewal: !0,
    paymentSourceId: s.paymentSourceId,
    currency: s.currency,
    preventFetch: i,
    analyticsLocations: a,
    analyticsLocation: I.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  }), m = null != u ? u : _;
  if (t.useEffect(() => {
      r(m)
    }, [r, m]), null != m) return (0, l.jsx)(o.FormErrorBlock, {
    children: m.message
  });
  if (null == c || null == d) return (0, l.jsx)(o.Spinner, {
    className: Z.__invalid_spinner
  });
  let p = (0, A.Ap)(s.paymentSourceId);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: y.renewalInvoiceDate,
      children: j.Z.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY
    }), (0, l.jsxs)(M.PO, {
      className: Z.invoice,
      children: [(0, l.jsx)(M.q9, {
        children: j.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, l.jsx)(O.By, {
        invoice: c,
        isPrepaidPaymentSource: p
      }), (0, l.jsx)(O.nd, {
        premiumSubscription: n,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: p
      })]
    })]
  })
}

function w(e) {
  let n, {
      premiumSubscription: s,
      newPlan: t,
      planGroup: i,
      priceOptions: r,
      preventFetch: a,
      hasAnnualInvoicePreview: c
    } = e,
    {
      analyticsLocations: u
    } = (0, E.ZP)(),
    [d, _] = (0, f.ED)({
      subscriptionId: s.id,
      items: (0, A.al)(s, t.id, 1, new Set(i)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: r.paymentSourceId,
      currency: r.currency,
      preventFetch: a,
      analyticsLocations: u,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != _) return (0, l.jsx)(o.FormErrorBlock, {
    children: _.message
  });
  if (null == d) return (0, l.jsx)("div", {
    children: (0, l.jsx)(o.Spinner, {})
  });
  n = s.type === L.NYc.PREMIUM ? (0, A.Gf)(t.id) : t.name;
  let m = (0, A.Ap)(r.paymentSourceId);
  return (0, l.jsxs)("div", {
    className: Z.bodyText,
    children: [(0, l.jsx)("div", {
      className: y.renewalInvoiceDate,
      children: j.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: d.subscriptionPeriodStart
      })
    }), (0, l.jsxs)(M.PO, {
      className: Z.invoice,
      children: [(0, l.jsx)(M.q9, {
        children: j.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, l.jsx)(M.R$, {
        label: n,
        value: (0, A.PK)(t, r, !0)
      }), (0, l.jsx)(g.Z, {
        invoice: d
      }), (0, l.jsx)(M.KU, {}), (0, l.jsx)(O.nd, {
        premiumSubscription: s,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: m,
        hasAnnualInvoicePreview: c
      })]
    })]
  })
}