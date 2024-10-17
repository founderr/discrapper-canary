s.d(n, {
    Z: function () {
        return D;
    }
}),
    s(47120);
var t = s(735250),
    l = s(470079),
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
    f = s(74538),
    A = s(296848),
    v = s(374649),
    M = s(642530),
    g = s(653798),
    R = s(585602),
    L = s(314182),
    O = s(314404),
    C = s(42818),
    j = s(981631),
    Z = s(689938),
    y = s(658160),
    b = s(309951);
function D(e) {
    var n;
    let s,
        { premiumSubscription: i, paymentSources: I, priceOptions: E, onPaymentSourceChange: v, onPaymentSourceAdd: R, planId: C, setHasAcceptedTerms: y, legalTermsNodeRef: D, hasLegalTermsFlash: H, onInvoiceError: k, planGroup: W, currencies: Y, onCurrencyChange: V, hasOpenInvoice: K, purchaseState: z, handleClose: X } = e,
        { selectedSkuId: J, defaultPlanId: q, isPremium: Q, startedPaymentFlowWithPaymentSourcesRef: $ } = (0, N.usePaymentContext)(),
        { isGift: ee } = (0, p.wD)(),
        en = E.paymentSourceId,
        es = (0, c.e7)([P.Z], () => P.Z.get(C));
    r()(null != es, 'Missing newPlan');
    let et = (0, c.e7)([x.Z], () => x.Z.hidePersonalInformation),
        el = a.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
        ei = z === T.A.PURCHASING || z === T.A.COMPLETED,
        er = (0, S.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: J,
            startedPaymentFlowWithPaymentSources: $.current
        }),
        ea = (null == i ? void 0 : i.status) === j.O0b.PAUSED,
        ec = l.useMemo(
            () =>
                (0, f.V7)({
                    skuId: J,
                    isPremium: Q,
                    multiMonthPlans: [],
                    currentSubscription: i,
                    isGift: ee,
                    isEligibleForTrial: !1,
                    defaultPlanId: q,
                    defaultToMonthlyPlan: !1
                }),
            [J, i, q, Q, ee]
        );
    s = K || ea ? Z.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, f.PV)(C) ? (0, f.W_)(i, es) : Z.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({ planName: es.name });
    let eo = null;
    return (
        null != i &&
            (eo = K
                ? (0, t.jsx)(G, {
                      premiumSubscription: i,
                      onInvoiceError: k,
                      priceOptions: E,
                      preventFetch: !1
                  })
                : ea
                  ? (0, t.jsx)(B, {
                        premiumSubscription: i,
                        onInvoiceError: k,
                        priceOptions: E,
                        preventFetch: ei
                    })
                  : (0, A.R4)(i, C, W)
                    ? (0, t.jsx)(U, {
                          premiumSubscription: i,
                          newPlan: es,
                          onInvoiceError: k,
                          planGroup: W,
                          priceOptions: E,
                          preventFetch: ei
                      })
                    : (0, t.jsx)(w, {
                          premiumSubscription: i,
                          newPlan: es,
                          planGroup: W,
                          priceOptions: E,
                          preventFetch: ei
                      })),
        (0, t.jsxs)('div', {
            className: b.stepBody,
            children: [
                !ea &&
                    er &&
                    (0, t.jsxs)('div', {
                        children: [
                            (0, t.jsx)(g.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, t.jsx)(M.Z, {}),
                            (0, t.jsx)(O.O, {
                                planOptions: ec,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: C,
                                showTotal: !1,
                                handleClose: X
                            }),
                            (0, t.jsx)(g.KU, {})
                        ]
                    }),
                (0, t.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: s
                }),
                eo,
                (0, t.jsxs)('div', {
                    className: b.paymentSourceWrapper,
                    children: [
                        (0, t.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: Z.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }),
                        (0, t.jsx)(_.Z, {
                            paymentSources: Object.values(I),
                            selectedPaymentSourceId: en,
                            onChange: v,
                            onPaymentSourceAdd: R,
                            hidePersonalInformation: et,
                            disabled: ei
                        })
                    ]
                }),
                (0, t.jsxs)(u.b, {
                    currencies: Y,
                    className: b.currencyWrapper,
                    children: [
                        (0, t.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: Z.Z.Messages.PAYMENT_CURRENCY
                        }),
                        (0, t.jsx)(u.Z, {
                            selectedCurrency: E.currency,
                            currencies: Y,
                            onChange: V,
                            disabled: ei
                        })
                    ]
                }),
                (0, t.jsx)(L.Z, {
                    isActive: H,
                    ref: D,
                    children:
                        null != i && (0, A.R4)(i, C, W)
                            ? (0, t.jsx)(F, {
                                  premiumSubscription: i,
                                  newPlan: es,
                                  onInvoiceError: k,
                                  planGroup: W,
                                  priceOptions: E,
                                  preventFetch: ei,
                                  disabled: ei,
                                  isEEA: el,
                                  paymentSources: I,
                                  setHasAcceptedTerms: y
                              })
                            : (0, t.jsx)(m.Z, {
                                  onChange: y,
                                  finePrint: (0, t.jsx)(d.Z, {
                                      subscriptionPlan: es,
                                      paymentSourceType: null === (n = I[null != en ? en : '']) || void 0 === n ? void 0 : n.type,
                                      basePrice: (0, f.aS)(es.id, !1, ee, E),
                                      currentSubscription: i,
                                      planGroup: W
                                  }),
                                  forceShow: !0,
                                  showPricingLink: es.currency !== j.pKx.USD,
                                  showWithdrawalWaiver: el,
                                  disabled: ei,
                                  subscriptionPlan: es,
                                  currentSubscription: i,
                                  planGroup: W
                              })
                })
            ]
        })
    );
}
function G(e) {
    let { premiumSubscription: n, onInvoiceError: s, priceOptions: i, preventFetch: r } = e,
        [a, c] = (0, v.Ox)({
            subscriptionId: n.id,
            preventFetch: r
        });
    l.useEffect(() => {
        s(c);
    }, [s, c]);
    let u = (0, f.Ap)(i.paymentSourceId);
    return null != a
        ? (0, t.jsxs)(g.PO, {
              className: y.__invalid_invoice,
              children: [
                  (0, t.jsx)(C.By, {
                      invoice: a,
                      isPrepaidPaymentSource: u
                  }),
                  (0, t.jsx)(C.nd, {
                      premiumSubscription: n,
                      renewalInvoice: a,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u
                  })
              ]
          })
        : (0, t.jsx)(o.Spinner, {});
}
function U(e) {
    let { premiumSubscription: n, newPlan: s, onInvoiceError: i, planGroup: r, priceOptions: a, preventFetch: c } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, N.usePaymentContext)(),
        { isGift: _ } = (0, p.wD)(),
        { analyticsLocations: m } = (0, E.ZP)(),
        T = (0, f.al)(n, s.id, 1, new Set(r)),
        [x, h] = (0, v.ED)({
            subscriptionId: n.id,
            items: T,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: m,
            analyticsLocation: I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [P, A] = (0, v.ED)({
            subscriptionId: n.id,
            items: T,
            renewal: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: m,
            analyticsLocation: I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        M = null != h ? h : A;
    if (
        (l.useEffect(() => {
            i(M);
        }, [i, M]),
        null != M)
    )
        return (0, t.jsx)(o.FormErrorBlock, { children: M.message });
    let R = (0, S.Kp)({
            isTrial: !1,
            isGift: _,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        L = (0, S.$g)(R, x, s);
    if (null == x || null == P || L) return (0, t.jsx)(o.Spinner, { className: b.__invalid_spinner });
    let O = (0, f.Ap)(a.paymentSourceId);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(C.hG, {
                proratedInvoice: x,
                renewalInvoice: P
            }),
            (0, t.jsxs)(g.PO, {
                className: b.invoice,
                children: [
                    (0, t.jsx)(g.q9, { children: Z.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, t.jsx)(C.Lu, {
                        invoice: x,
                        newPlan: s,
                        isPrepaidPaymentSource: O
                    }),
                    (0, t.jsx)(C.nd, {
                        premiumSubscription: n,
                        proratedInvoice: x,
                        renewalInvoice: P,
                        isUpdate: !0,
                        isPrepaidPaymentSource: O
                    })
                ]
            })
        ]
    });
}
function F(e) {
    var n, s;
    let i,
        { premiumSubscription: r, newPlan: a, onInvoiceError: c, planGroup: u, priceOptions: _, preventFetch: p, disabled: N, isEEA: T, paymentSources: S, setHasAcceptedTerms: x } = e,
        { analyticsLocations: h } = (0, E.ZP)(),
        P = (0, f.al)(r, a.id, 1, new Set(u)),
        [A, M] = (0, v.ED)({
            subscriptionId: r.id,
            items: P,
            renewal: !0,
            paymentSourceId: _.paymentSourceId,
            currency: _.currency,
            preventFetch: p,
            analyticsLocations: h,
            analyticsLocation: I.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        });
    return (l.useEffect(() => {
        c(M);
    }, [c, M]),
    null != M)
        ? (0, t.jsx)(o.FormErrorBlock, { children: M.message })
        : (null != A &&
                (i = {
                    amount: A.total,
                    currency: A.currency,
                    tax: A.tax,
                    taxInclusive: A.taxInclusive
                }),
            null == i)
          ? null
          : (0, t.jsx)(m.Z, {
                onChange: x,
                finePrint: (0, t.jsx)(d.Z, {
                    subscriptionPlan: a,
                    paymentSourceType: null === (n = S[null !== (s = _.paymentSourceId) && void 0 !== s ? s : '']) || void 0 === n ? void 0 : n.type,
                    basePrice: i,
                    currentSubscription: r,
                    planGroup: u
                }),
                forceShow: !0,
                showPricingLink: a.currency !== j.pKx.USD,
                showWithdrawalWaiver: T,
                disabled: N,
                subscriptionPlan: a,
                currentSubscription: r,
                planGroup: u
            });
}
function B(e) {
    let { premiumSubscription: n, priceOptions: s, preventFetch: i, onInvoiceError: r } = e,
        { analyticsLocations: a } = (0, E.ZP)(),
        [c, u] = (0, v.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: I.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, _] = (0, v.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: I.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        m = null != u ? u : _;
    if (
        (l.useEffect(() => {
            r(m);
        }, [r, m]),
        null != m)
    )
        return (0, t.jsx)(o.FormErrorBlock, { children: m.message });
    if (null == c || null == d) return (0, t.jsx)(o.Spinner, { className: b.__invalid_spinner });
    let p = (0, f.Ap)(s.paymentSourceId);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)('div', {
                className: y.renewalInvoiceDate,
                children: Z.Z.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY
            }),
            (0, t.jsxs)(g.PO, {
                className: b.invoice,
                children: [
                    (0, t.jsx)(g.q9, { children: Z.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, t.jsx)(C.By, {
                        invoice: c,
                        isPrepaidPaymentSource: p
                    }),
                    (0, t.jsx)(C.nd, {
                        premiumSubscription: n,
                        renewalInvoice: d,
                        isUpdate: !0,
                        isPrepaidPaymentSource: p
                    })
                ]
            })
        ]
    });
}
function w(e) {
    let n,
        { premiumSubscription: s, newPlan: l, planGroup: i, priceOptions: r, preventFetch: a } = e,
        { analyticsLocations: c } = (0, E.ZP)(),
        [u, d] = (0, v.ED)({
            subscriptionId: s.id,
            items: (0, f.al)(s, l.id, 1, new Set(i)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != d) return (0, t.jsx)(o.FormErrorBlock, { children: d.message });
    if (null == u) return (0, t.jsx)('div', { children: (0, t.jsx)(o.Spinner, {}) });
    n = s.type === j.NYc.PREMIUM ? (0, f.Gf)(l.id) : l.name;
    let _ = (0, f.Ap)(r.paymentSourceId);
    return (0, t.jsxs)('div', {
        className: b.bodyText,
        children: [
            (0, t.jsx)('div', {
                className: y.renewalInvoiceDate,
                children: Z.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({ renewalDate: u.subscriptionPeriodStart })
            }),
            (0, t.jsxs)(g.PO, {
                className: b.invoice,
                children: [
                    (0, t.jsx)(g.q9, { children: Z.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES }),
                    (0, t.jsx)(g.R$, {
                        label: n,
                        value: (0, f.PK)(l, r, !0)
                    }),
                    (0, t.jsx)(R.Z, { invoice: u }),
                    (0, t.jsx)(g.KU, {}),
                    (0, t.jsx)(C.nd, {
                        premiumSubscription: s,
                        renewalInvoice: u,
                        isUpdate: !0,
                        isPrepaidPaymentSource: _
                    })
                ]
            })
        ]
    });
}
