t.d(n, {
    Z: function () {
        return D;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    s = t.n(r),
    a = t(742280),
    c = t(442837),
    o = t(481060),
    u = t(190947),
    d = t(224550),
    m = t(275850),
    p = t(672971),
    x = t(100527),
    h = t(906732),
    f = t(987209),
    v = t(563132),
    g = t(45572),
    S = t(614223),
    E = t(246946),
    j = t(351402),
    I = t(509545),
    y = t(74538),
    P = t(296848),
    T = t(374649),
    N = t(642530),
    b = t(653798),
    _ = t(585602),
    C = t(314182),
    A = t(314404),
    O = t(139255),
    R = t(981631),
    Z = t(388032),
    M = t(20259),
    w = t(438826);
function D(e) {
    var n;
    let t,
        { premiumSubscription: r, paymentSources: x, priceOptions: h, onPaymentSourceChange: T, onPaymentSourceAdd: _, planId: O, setHasAcceptedTerms: M, legalTermsNodeRef: D, hasLegalTermsFlash: G, onInvoiceError: H, planGroup: W, currencies: V, onCurrencyChange: Y, hasOpenInvoice: z, purchaseState: K, handleClose: X } = e,
        { selectedSkuId: q, defaultPlanId: J, isPremium: Q, startedPaymentFlowWithPaymentSourcesRef: $ } = (0, v.usePaymentContext)(),
        { isGift: ee } = (0, f.wD)(),
        en = h.paymentSourceId,
        et = (0, c.e7)([I.Z], () => I.Z.get(O));
    s()(null != et, 'Missing newPlan');
    let ei = (0, c.e7)([E.Z], () => E.Z.hidePersonalInformation),
        el = a.M.EEA_COUNTRIES.has(j.Z.ipCountryCodeWithFallback),
        er = K === g.A.PURCHASING || K === g.A.COMPLETED,
        es = (0, S.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: $.current
        }),
        ea = (null == r ? void 0 : r.status) === R.O0b.PAUSED,
        ec = l.useMemo(
            () =>
                (0, y.V7)({
                    skuId: q,
                    isPremium: Q,
                    multiMonthPlans: [],
                    currentSubscription: r,
                    isGift: ee,
                    isEligibleForTrial: !1,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: !1
                }),
            [q, r, J, Q, ee]
        );
    t = z || ea ? Z.intl.string(Z.t.nyzoFR) : (0, y.PV)(O) ? (0, y.W_)(r, et) : Z.intl.formatToPlainString(Z.t['sBpy9/'], { planName: et.name });
    let eo = null;
    return (
        null != r &&
            (eo = z
                ? (0, i.jsx)(L, {
                      premiumSubscription: r,
                      onInvoiceError: H,
                      priceOptions: h,
                      preventFetch: !1
                  })
                : ea
                  ? (0, i.jsx)(B, {
                        premiumSubscription: r,
                        onInvoiceError: H,
                        priceOptions: h,
                        preventFetch: er
                    })
                  : (0, P.R4)(r, O, W)
                    ? (0, i.jsx)(F, {
                          premiumSubscription: r,
                          newPlan: et,
                          onInvoiceError: H,
                          planGroup: W,
                          priceOptions: h,
                          preventFetch: er
                      })
                    : (0, i.jsx)(U, {
                          premiumSubscription: r,
                          newPlan: et,
                          planGroup: W,
                          priceOptions: h,
                          preventFetch: er
                      })),
        (0, i.jsxs)('div', {
            className: w.stepBody,
            children: [
                !ea &&
                    es &&
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(b.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, i.jsx)(N.Z, {}),
                            (0, i.jsx)(A.O, {
                                planOptions: ec,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: O,
                                showTotal: !1,
                                handleClose: X
                            }),
                            (0, i.jsx)(b.KU, {})
                        ]
                    }),
                (0, i.jsx)(o.FormTitle, {
                    tag: o.FormTitleTags.H5,
                    children: t
                }),
                eo,
                (0, i.jsxs)('div', {
                    className: w.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: Z.intl.string(Z.t.mmDvV1)
                        }),
                        (0, i.jsx)(m.Z, {
                            paymentSources: Object.values(x),
                            selectedPaymentSourceId: en,
                            onChange: T,
                            onPaymentSourceAdd: _,
                            hidePersonalInformation: ei,
                            disabled: er
                        })
                    ]
                }),
                (0, i.jsxs)(u.b, {
                    currencies: V,
                    className: w.currencyWrapper,
                    children: [
                        (0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: Z.intl.string(Z.t['/AAR09'])
                        }),
                        (0, i.jsx)(u.Z, {
                            selectedCurrency: h.currency,
                            currencies: V,
                            onChange: Y,
                            disabled: er
                        })
                    ]
                }),
                (0, i.jsx)(C.Z, {
                    isActive: G,
                    ref: D,
                    children:
                        null != r && (0, P.R4)(r, O, W)
                            ? (0, i.jsx)(k, {
                                  premiumSubscription: r,
                                  newPlan: et,
                                  onInvoiceError: H,
                                  planGroup: W,
                                  priceOptions: h,
                                  preventFetch: er,
                                  disabled: er,
                                  isEEA: el,
                                  paymentSources: x,
                                  setHasAcceptedTerms: M
                              })
                            : (0, i.jsx)(p.Z, {
                                  onChange: M,
                                  finePrint: (0, i.jsx)(d.Z, {
                                      subscriptionPlan: et,
                                      paymentSourceType: null === (n = x[null != en ? en : '']) || void 0 === n ? void 0 : n.type,
                                      basePrice: (0, y.aS)(et.id, !1, ee, h),
                                      currentSubscription: r,
                                      planGroup: W
                                  }),
                                  forceShow: !0,
                                  showPricingLink: et.currency !== R.pKx.USD,
                                  showWithdrawalWaiver: el,
                                  disabled: er,
                                  subscriptionPlan: et,
                                  currentSubscription: r,
                                  planGroup: W
                              })
                })
            ]
        })
    );
}
function L(e) {
    let { premiumSubscription: n, onInvoiceError: t, priceOptions: r, preventFetch: s } = e,
        [a, c] = (0, T.Ox)({
            subscriptionId: n.id,
            preventFetch: s
        });
    l.useEffect(() => {
        t(c);
    }, [t, c]);
    let u = (0, y.Ap)(r.paymentSourceId);
    return null != a
        ? (0, i.jsxs)(b.PO, {
              className: M.__invalid_invoice,
              children: [
                  (0, i.jsx)(O.By, {
                      invoice: a,
                      isPrepaidPaymentSource: u
                  }),
                  (0, i.jsx)(O.nd, {
                      premiumSubscription: n,
                      renewalInvoice: a,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u
                  })
              ]
          })
        : (0, i.jsx)(o.Spinner, {});
}
function F(e) {
    let { premiumSubscription: n, newPlan: t, onInvoiceError: r, planGroup: s, priceOptions: a, preventFetch: c } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, v.usePaymentContext)(),
        { isGift: m } = (0, f.wD)(),
        { analyticsLocations: p } = (0, h.ZP)(),
        g = (0, y.al)(n, t.id, 1, new Set(s)),
        [E, j] = (0, T.ED)({
            subscriptionId: n.id,
            items: g,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: p,
            analyticsLocation: x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [I, P] = (0, T.ED)({
            subscriptionId: n.id,
            items: g,
            renewal: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: p,
            analyticsLocation: x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        N = null != j ? j : P;
    if (
        (l.useEffect(() => {
            r(N);
        }, [r, N]),
        null != N)
    )
        return (0, i.jsx)(o.FormErrorBlock, { children: N.message });
    let _ = (0, S.Kp)({
            isTrial: !1,
            isGift: m,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        C = (0, S.$g)(_, E, t);
    if (null == E || null == I || C) return (0, i.jsx)(o.Spinner, { className: w.__invalid_spinner });
    let A = (0, y.Ap)(a.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O.hG, {
                proratedInvoice: E,
                renewalInvoice: I
            }),
            (0, i.jsxs)(b.PO, {
                className: w.invoice,
                children: [
                    (0, i.jsx)(b.q9, { children: Z.intl.string(Z.t['2eh+Cg']) }),
                    (0, i.jsx)(O.Lu, {
                        invoice: E,
                        newPlan: t,
                        isPrepaidPaymentSource: A
                    }),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: n,
                        proratedInvoice: E,
                        renewalInvoice: I,
                        isUpdate: !0,
                        isPrepaidPaymentSource: A
                    })
                ]
            })
        ]
    });
}
function k(e) {
    var n, t;
    let r,
        { premiumSubscription: s, newPlan: a, onInvoiceError: c, planGroup: u, priceOptions: m, preventFetch: f, disabled: v, isEEA: g, paymentSources: S, setHasAcceptedTerms: E } = e,
        { analyticsLocations: j } = (0, h.ZP)(),
        I = (0, y.al)(s, a.id, 1, new Set(u)),
        [P, N] = (0, T.ED)({
            subscriptionId: s.id,
            items: I,
            renewal: !0,
            paymentSourceId: m.paymentSourceId,
            currency: m.currency,
            preventFetch: f,
            analyticsLocations: j,
            analyticsLocation: x.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        });
    return (l.useEffect(() => {
        c(N);
    }, [c, N]),
    null != N)
        ? (0, i.jsx)(o.FormErrorBlock, { children: N.message })
        : (null != P &&
                (r = {
                    amount: P.total,
                    currency: P.currency,
                    tax: P.tax,
                    taxInclusive: P.taxInclusive
                }),
            null == r)
          ? null
          : (0, i.jsx)(p.Z, {
                onChange: E,
                finePrint: (0, i.jsx)(d.Z, {
                    subscriptionPlan: a,
                    paymentSourceType: null === (n = S[null !== (t = m.paymentSourceId) && void 0 !== t ? t : '']) || void 0 === n ? void 0 : n.type,
                    basePrice: r,
                    currentSubscription: s,
                    planGroup: u
                }),
                forceShow: !0,
                showPricingLink: a.currency !== R.pKx.USD,
                showWithdrawalWaiver: g,
                disabled: v,
                subscriptionPlan: a,
                currentSubscription: s,
                planGroup: u
            });
}
function B(e) {
    let { premiumSubscription: n, priceOptions: t, preventFetch: r, onInvoiceError: s } = e,
        { analyticsLocations: a } = (0, h.ZP)(),
        [c, u] = (0, T.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: a,
            analyticsLocation: x.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, m] = (0, T.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: a,
            analyticsLocation: x.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        p = null != u ? u : m;
    if (
        (l.useEffect(() => {
            s(p);
        }, [s, p]),
        null != p)
    )
        return (0, i.jsx)(o.FormErrorBlock, { children: p.message });
    if (null == c || null == d) return (0, i.jsx)(o.Spinner, { className: w.__invalid_spinner });
    let f = (0, y.Ap)(t.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: M.renewalInvoiceDate,
                children: Z.intl.string(Z.t.spIYoq)
            }),
            (0, i.jsxs)(b.PO, {
                className: w.invoice,
                children: [
                    (0, i.jsx)(b.q9, { children: Z.intl.string(Z.t['2eh+Cg']) }),
                    (0, i.jsx)(O.By, {
                        invoice: c,
                        isPrepaidPaymentSource: f
                    }),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: n,
                        renewalInvoice: d,
                        isUpdate: !0,
                        isPrepaidPaymentSource: f
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let n,
        { premiumSubscription: t, newPlan: l, planGroup: r, priceOptions: s, preventFetch: a } = e,
        { analyticsLocations: c } = (0, h.ZP)(),
        [u, d] = (0, T.ED)({
            subscriptionId: t.id,
            items: (0, y.al)(t, l.id, 1, new Set(r)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != d) return (0, i.jsx)(o.FormErrorBlock, { children: d.message });
    if (null == u) return (0, i.jsx)('div', { children: (0, i.jsx)(o.Spinner, {}) });
    n = t.type === R.NYc.PREMIUM ? (0, y.Gf)(l.id) : l.name;
    let m = (0, y.Ap)(s.paymentSourceId);
    return (0, i.jsxs)('div', {
        className: w.bodyText,
        children: [
            (0, i.jsx)('div', {
                className: M.renewalInvoiceDate,
                children: Z.intl.format(Z.t['+y0Tj4'], { renewalDate: u.subscriptionPeriodStart })
            }),
            (0, i.jsxs)(b.PO, {
                className: w.invoice,
                children: [
                    (0, i.jsx)(b.q9, { children: Z.intl.string(Z.t.iqhIp6) }),
                    (0, i.jsx)(b.R$, {
                        label: n,
                        value: (0, y.PK)(l, s, !0)
                    }),
                    (0, i.jsx)(_.Z, { invoice: u }),
                    (0, i.jsx)(b.KU, {}),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: t,
                        renewalInvoice: u,
                        isUpdate: !0,
                        isPrepaidPaymentSource: m
                    })
                ]
            })
        ]
    });
}
