s.d(n, {
    Z: function () {
        return b;
    }
}), s(47120);
var l = s(735250), t = s(470079), i = s(512722), r = s.n(i), a = s(742280), c = s(442837), o = s(481060), u = s(190947), d = s(224550), _ = s(275850), m = s(672971), E = s(100527), I = s(906732), p = s(987209), N = s(598), T = s(45572), S = s(614223), x = s(246946), h = s(351402), P = s(509545), f = s(74538), A = s(296848), v = s(374649), M = s(653798), g = s(585602), C = s(314182), O = s(314404), R = s(42818), L = s(981631), j = s(689938), y = s(598891), Z = s(711978);
function b(e) {
    var n;
    let s, {
            premiumSubscription: i,
            paymentSources: E,
            priceOptions: I,
            onPaymentSourceChange: v,
            onPaymentSourceAdd: g,
            planId: R,
            setHasAcceptedTerms: y,
            legalTermsNodeRef: b,
            hasLegalTermsFlash: w,
            onInvoiceError: H,
            planGroup: k,
            currencies: W,
            onCurrencyChange: Y,
            hasOpenInvoice: K,
            purchaseState: V,
            handleClose: z
        } = e, {
            selectedSkuId: X,
            defaultPlanId: J,
            isPremium: q,
            startedPaymentFlowWithPaymentSourcesRef: Q
        } = (0, N.usePaymentContext)(), {isGift: $} = (0, p.wD)(), ee = I.paymentSourceId, en = (0, c.e7)([P.Z], () => P.Z.get(R));
    r()(null != en, 'Missing newPlan');
    let es = (0, c.e7)([x.Z], () => x.Z.hidePersonalInformation), el = a.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback), et = V === T.A.PURCHASING || V === T.A.COMPLETED, ei = (0, S.Kp)({
            isTrial: !1,
            isGift: $,
            selectedSkuId: X,
            startedPaymentFlowWithPaymentSources: Q.current
        }), er = (null == i ? void 0 : i.status) === L.O0b.PAUSED, ea = t.useMemo(() => (0, f.V7)({
            skuId: X,
            isPremium: q,
            multiMonthPlans: [],
            currentSubscription: i,
            isGift: $,
            isEligibleForTrial: !1,
            defaultPlanId: J,
            defaultToMonthlyPlan: !1
        }), [
            X,
            i,
            J,
            q,
            $
        ]);
    s = K || er ? j.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, f.PV)(R) ? (0, f.W_)(i, en) : j.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({ planName: en.name });
    let ec = null;
    return null != i && (ec = K ? (0, l.jsx)(D, {
        premiumSubscription: i,
        onInvoiceError: H,
        priceOptions: I,
        preventFetch: !1
    }) : er ? (0, l.jsx)(F, {
        premiumSubscription: i,
        onInvoiceError: H,
        priceOptions: I,
        preventFetch: et
    }) : (0, A.R4)(i, R, k) ? (0, l.jsx)(G, {
        premiumSubscription: i,
        newPlan: en,
        onInvoiceError: H,
        planGroup: k,
        priceOptions: I,
        preventFetch: et
    }) : (0, l.jsx)(B, {
        premiumSubscription: i,
        newPlan: en,
        planGroup: k,
        priceOptions: I,
        preventFetch: et
    })), (0, l.jsxs)('div', {
        className: Z.stepBody,
        children: [
            !er && ei && (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(M.KU, {
                        negativeMarginBottom: !0,
                        negativeMarginTop: !0
                    }),
                    (0, l.jsx)(O.O, {
                        planOptions: ea,
                        eligibleForMultiMonthPlans: !1,
                        selectedPlanId: R,
                        showTotal: !1,
                        handleClose: z
                    }),
                    (0, l.jsx)(M.KU, {})
                ]
            }),
            (0, l.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H5,
                children: s
            }),
            ec,
            (0, l.jsxs)('div', {
                className: Z.paymentSourceWrapper,
                children: [
                    (0, l.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: j.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                    }),
                    (0, l.jsx)(_.Z, {
                        paymentSources: Object.values(E),
                        selectedPaymentSourceId: ee,
                        onChange: v,
                        onPaymentSourceAdd: g,
                        hidePersonalInformation: es,
                        disabled: et
                    })
                ]
            }),
            (0, l.jsxs)(u.b, {
                currencies: W,
                className: Z.currencyWrapper,
                children: [
                    (0, l.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: j.Z.Messages.PAYMENT_CURRENCY
                    }),
                    (0, l.jsx)(u.Z, {
                        selectedCurrency: I.currency,
                        currencies: W,
                        onChange: Y,
                        disabled: et
                    })
                ]
            }),
            (0, l.jsx)(C.Z, {
                isActive: w,
                ref: b,
                children: null != i && (0, A.R4)(i, R, k) ? (0, l.jsx)(U, {
                    premiumSubscription: i,
                    newPlan: en,
                    onInvoiceError: H,
                    planGroup: k,
                    priceOptions: I,
                    preventFetch: et,
                    disabled: et,
                    isEEA: el,
                    paymentSources: E,
                    setHasAcceptedTerms: y
                }) : (0, l.jsx)(m.Z, {
                    onChange: y,
                    finePrint: (0, l.jsx)(d.Z, {
                        subscriptionPlan: en,
                        paymentSourceType: null === (n = E[null != ee ? ee : '']) || void 0 === n ? void 0 : n.type,
                        basePrice: (0, f.aS)(en.id, !1, $, I),
                        currentSubscription: i,
                        planGroup: k
                    }),
                    forceShow: !0,
                    showPricingLink: en.currency !== L.pKx.USD,
                    showWithdrawalWaiver: el,
                    disabled: et,
                    subscriptionPlan: en,
                    currentSubscription: i,
                    planGroup: k
                })
            })
        ]
    });
}
function D(e) {
    let {
            premiumSubscription: n,
            onInvoiceError: s,
            priceOptions: i,
            preventFetch: r
        } = e, [a, c] = (0, v.Ox)({
            subscriptionId: n.id,
            preventFetch: r
        });
    t.useEffect(() => {
        s(c);
    }, [
        s,
        c
    ]);
    let u = (0, f.Ap)(i.paymentSourceId);
    return null != a ? (0, l.jsxs)(M.PO, {
        className: y.__invalid_invoice,
        children: [
            (0, l.jsx)(R.By, {
                invoice: a,
                isPrepaidPaymentSource: u
            }),
            (0, l.jsx)(R.nd, {
                premiumSubscription: n,
                renewalInvoice: a,
                isUpdate: !0,
                isPrepaidPaymentSource: u
            })
        ]
    }) : (0, l.jsx)(o.Spinner, {});
}
function G(e) {
    let {
            premiumSubscription: n,
            newPlan: s,
            onInvoiceError: i,
            planGroup: r,
            priceOptions: a,
            preventFetch: c
        } = e, {
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSourcesRef: d
        } = (0, N.usePaymentContext)(), {isGift: _} = (0, p.wD)(), {analyticsLocations: m} = (0, I.ZP)(), T = (0, f.al)(n, s.id, 1, new Set(r)), [x, h] = (0, v.ED)({
            subscriptionId: n.id,
            items: T,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: m,
            analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }), [P, A] = (0, v.ED)({
            subscriptionId: n.id,
            items: T,
            renewal: !0,
            paymentSourceId: a.paymentSourceId,
            currency: a.currency,
            preventFetch: c,
            analyticsLocations: m,
            analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }), g = null != h ? h : A;
    if (t.useEffect(() => {
            i(g);
        }, [
            i,
            g
        ]), null != g)
        return (0, l.jsx)(o.FormErrorBlock, { children: g.message });
    let C = (0, S.Kp)({
            isTrial: !1,
            isGift: _,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }), O = (0, S.$g)(C, x, s);
    if (null == x || null == P || O)
        return (0, l.jsx)(o.Spinner, { className: Z.__invalid_spinner });
    let L = (0, f.Ap)(a.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.hG, {
                proratedInvoice: x,
                renewalInvoice: P
            }),
            (0, l.jsxs)(M.PO, {
                className: Z.invoice,
                children: [
                    (0, l.jsx)(M.q9, { children: j.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, l.jsx)(R.Lu, {
                        invoice: x,
                        newPlan: s,
                        isPrepaidPaymentSource: L
                    }),
                    (0, l.jsx)(R.nd, {
                        premiumSubscription: n,
                        proratedInvoice: x,
                        renewalInvoice: P,
                        isUpdate: !0,
                        isPrepaidPaymentSource: L
                    })
                ]
            })
        ]
    });
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
            setHasAcceptedTerms: x
        } = e, {analyticsLocations: h} = (0, I.ZP)(), P = (0, f.al)(r, a.id, 1, new Set(u)), [A, M] = (0, v.ED)({
            subscriptionId: r.id,
            items: P,
            renewal: !0,
            paymentSourceId: _.paymentSourceId,
            currency: _.currency,
            preventFetch: p,
            analyticsLocations: h,
            analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        });
    return (t.useEffect(() => {
        c(M);
    }, [
        c,
        M
    ]), null != M) ? (0, l.jsx)(o.FormErrorBlock, { children: M.message }) : (null != A && (i = {
        amount: A.total,
        currency: A.currency,
        tax: A.tax,
        taxInclusive: A.taxInclusive
    }), null == i) ? null : (0, l.jsx)(m.Z, {
        onChange: x,
        finePrint: (0, l.jsx)(d.Z, {
            subscriptionPlan: a,
            paymentSourceType: null === (n = S[null !== (s = _.paymentSourceId) && void 0 !== s ? s : '']) || void 0 === n ? void 0 : n.type,
            basePrice: i,
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
    });
}
function F(e) {
    let {
            premiumSubscription: n,
            priceOptions: s,
            preventFetch: i,
            onInvoiceError: r
        } = e, {analyticsLocations: a} = (0, I.ZP)(), [c, u] = (0, v.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: E.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }), [d, _] = (0, v.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: i,
            analyticsLocations: a,
            analyticsLocation: E.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }), m = null != u ? u : _;
    if (t.useEffect(() => {
            r(m);
        }, [
            r,
            m
        ]), null != m)
        return (0, l.jsx)(o.FormErrorBlock, { children: m.message });
    if (null == c || null == d)
        return (0, l.jsx)(o.Spinner, { className: Z.__invalid_spinner });
    let p = (0, f.Ap)(s.paymentSourceId);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)('div', {
                className: y.renewalInvoiceDate,
                children: j.Z.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY
            }),
            (0, l.jsxs)(M.PO, {
                className: Z.invoice,
                children: [
                    (0, l.jsx)(M.q9, { children: j.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, l.jsx)(R.By, {
                        invoice: c,
                        isPrepaidPaymentSource: p
                    }),
                    (0, l.jsx)(R.nd, {
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
function B(e) {
    let n, {
            premiumSubscription: s,
            newPlan: t,
            planGroup: i,
            priceOptions: r,
            preventFetch: a
        } = e, {analyticsLocations: c} = (0, I.ZP)(), [u, d] = (0, v.ED)({
            subscriptionId: s.id,
            items: (0, f.al)(s, t.id, 1, new Set(i)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: r.paymentSourceId,
            currency: r.currency,
            preventFetch: a,
            analyticsLocations: c,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != d)
        return (0, l.jsx)(o.FormErrorBlock, { children: d.message });
    if (null == u)
        return (0, l.jsx)('div', { children: (0, l.jsx)(o.Spinner, {}) });
    n = s.type === L.NYc.PREMIUM ? (0, f.Gf)(t.id) : t.name;
    let _ = (0, f.Ap)(r.paymentSourceId);
    return (0, l.jsxs)('div', {
        className: Z.bodyText,
        children: [
            (0, l.jsx)('div', {
                className: y.renewalInvoiceDate,
                children: j.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({ renewalDate: u.subscriptionPeriodStart })
            }),
            (0, l.jsxs)(M.PO, {
                className: Z.invoice,
                children: [
                    (0, l.jsx)(M.q9, { children: j.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES }),
                    (0, l.jsx)(M.R$, {
                        label: n,
                        value: (0, f.PK)(t, r, !0)
                    }),
                    (0, l.jsx)(g.Z, { invoice: u }),
                    (0, l.jsx)(M.KU, {}),
                    (0, l.jsx)(R.nd, {
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
