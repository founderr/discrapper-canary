"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [87255], {
        366366: (e, n, r) => {
            r.d(n, {
                l: () => he
            });
            var t = r(785893),
                i = r(667294),
                a = r(441143),
                s = r.n(a),
                l = r(898302),
                o = r(471450),
                c = r(344266),
                u = r(717035),
                d = r(16097),
                p = r(682876),
                m = r(197597),
                S = r(202351),
                y = r(70418),
                f = r(415324),
                h = r(152042),
                I = r(700812),
                P = r(536713),
                E = r(153686),
                v = r(19585),
                T = r(782786),
                A = r(632826),
                b = r(268226),
                g = r(793461),
                x = r(615796),
                _ = r(551778),
                j = r(116094),
                N = r(530562),
                L = r(100749),
                C = r(16703),
                M = r(524450),
                R = r(900547),
                w = r(311556),
                O = r(646875),
                Z = r(2590),
                G = r(473708),
                F = r(231492),
                k = r.n(F),
                U = r(968071),
                D = r.n(U);

            function W(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function B(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return W(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return W(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                var n, r = e.premiumSubscription,
                    a = e.paymentSources,
                    l = e.priceOptions,
                    o = e.onPaymentSourceChange,
                    c = e.onPaymentSourceAdd,
                    u = e.planId,
                    d = e.setHasAcceptedTerms,
                    p = e.legalTermsNodeRef,
                    E = e.hasLegalTermsFlash,
                    v = e.onInvoiceError,
                    L = e.planGroup,
                    M = e.currencies,
                    O = e.onCurrencyChange,
                    F = e.hasOpenInvoice,
                    k = e.purchaseState,
                    U = (0,
                        T.usePaymentContext)(),
                    W = U.selectedSkuId,
                    B = U.defaultPlanId,
                    H = U.selectedGiftStyle,
                    z = U.setSelectedGiftStyle,
                    q = U.isGift,
                    Q = U.isPremium,
                    J = U.startedPaymentFlowWithPaymentSourcesRef,
                    X = l.paymentSourceId,
                    ee = (0, S.e7)([_.Z], (function() {
                        return _.Z.get(u)
                    }));
                s()(null != ee, "Missing newPlan");
                var ne, re = (0, S.e7)([g.Z], (function() {
                    return g.Z.hidePersonalInformation
                }));
                ne = F ? G.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, j.PV)(u) ? (0, j.W_)(r, ee) : G.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: ee.name
                });
                var te = m.M.EEA_COUNTRIES.has(x.Z.ipCountryCodeWithFallback),
                    ie = k === A.A.PURCHASING || k === A.A.COMPLETED,
                    ae = (0, b.Kp)({
                        isTrial: !1,
                        isGift: q,
                        selectedSkuId: W,
                        startedPaymentFlowWithPaymentSources: J.current
                    }),
                    se = i.useMemo((function() {
                        return (0, j.V7)({
                            skuId: W,
                            isPremium: Q,
                            multiMonthPlans: [],
                            currentSubscription: r,
                            isGift: q,
                            isEligibleForTrial: !1,
                            defaultPlanId: B,
                            defaultToMonthlyPlan: !1
                        })
                    }), [W, r, B, Q, q]);
                return (0, t.jsxs)("div", {
                    className: D().stepBody,
                    children: [ae && (0, t.jsxs)("div", {
                        children: [(0,
                            t.jsx)(C.KU, {
                            negativeMarginTop: !0
                        }), (0, t.jsx)(w.O, {
                            isGift: q,
                            selectedGiftStyle: H,
                            setSelectedGiftStyle: z,
                            planOptions: se,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: u,
                            showTotal: !1
                        }), (0, t.jsx)(C.KU, {})]
                    }), (0, t.jsx)(y.FormTitle, {
                        tag: y.FormTitleTags.H5,
                        children: ne
                    }), null != r ? F ? (0, t.jsx)(Y, {
                        premiumSubscription: r,
                        onInvoiceError: v,
                        priceOptions: l,
                        preventFetch: !1
                    }) : (0, N.R4)(r, u, L) ? (0, t.jsx)(V, {
                        premiumSubscription: r,
                        newPlan: ee,
                        onInvoiceError: v,
                        planGroup: L,
                        priceOptions: l,
                        preventFetch: ie
                    }) : (0, t.jsx)($, {
                        premiumSubscription: r,
                        newPlan: ee,
                        planGroup: L,
                        priceOptions: l,
                        preventFetch: ie
                    }) : null, (0, t.jsxs)("div", {
                        className: D().paymentSourceWrapper,
                        children: [(0, t.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: G.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, t.jsx)(I.Z, {
                            paymentSources: Object.values(a),
                            selectedPaymentSourceId: X,
                            onChange: o,
                            onPaymentSourceAdd: c,
                            hidePersonalInformation: re,
                            disabled: ie
                        })]
                    }), (0, t.jsxs)(f.b, {
                        currencies: M,
                        className: D().currencyWrapper,
                        children: [(0, t.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: G.Z.Messages.PAYMENT_CURRENCY
                        }), (0, t.jsx)(f.Z, {
                            selectedCurrency: l.currency,
                            currencies: M,
                            onChange: O,
                            disabled: ie
                        })]
                    }), (0, t.jsx)(R.Z, {
                        isActive: E,
                        ref: p,
                        children: null != r && (0, N.R4)(r, u, L) ? (0, t.jsx)(K, {
                            premiumSubscription: r,
                            newPlan: ee,
                            onInvoiceError: v,
                            planGroup: L,
                            priceOptions: l,
                            preventFetch: ie,
                            disabled: ie,
                            isEEA: te,
                            paymentSources: a,
                            setHasAcceptedTerms: d
                        }) : (0, t.jsx)(P.Z, {
                            onChange: d,
                            finePrint: (0, t.jsx)(h.Z, {
                                subscriptionPlan: ee,
                                paymentSourceType: null === (n = a[null != X ? X : ""]) || void 0 === n ? void 0 : n.type,
                                basePrice: (0, j.aS)(ee.id, !1, q, l),
                                currentSubscription: r,
                                planGroup: L
                            }),
                            forceShow: !0,
                            showPricingLink: ee.currency !== Z.pKx.USD,
                            showWithdrawalWaiver: te,
                            disabled: ie,
                            subscriptionPlan: ee,
                            currentSubscription: r,
                            planGroup: L
                        })
                    })]
                })
            }

            function Y(e) {
                var n = e.premiumSubscription,
                    r = e.onInvoiceError,
                    a = e.priceOptions,
                    s = e.preventFetch,
                    l = B((0, L.Ox)({
                        subscriptionId: n.id,
                        preventFetch: s
                    }), 2),
                    o = l[0],
                    c = l[1];
                i.useEffect((function() {
                    r(c)
                }), [r, c]);
                var u = (0, j.Ap)(a.paymentSourceId);
                return null != o ? (0,
                    t.jsxs)(C.PO, {
                    className: k().invoice,
                    children: [(0, t.jsx)(O.By, {
                        invoice: o,
                        isPrepaidPaymentSource: u
                    }), (0, t.jsx)(O.nd, {
                        premiumSubscription: n,
                        renewalInvoice: o,
                        isUpdate: !0,
                        isPrepaidPaymentSource: u
                    })]
                }) : (0, t.jsx)(y.Spinner, {})
            }

            function V(e) {
                var n = e.premiumSubscription,
                    r = e.newPlan,
                    a = e.onInvoiceError,
                    s = e.planGroup,
                    l = e.priceOptions,
                    o = e.preventFetch,
                    c = (0, T.usePaymentContext)(),
                    u = c.selectedSkuId,
                    d = c.isGift,
                    p = c.startedPaymentFlowWithPaymentSourcesRef,
                    m = (0, v.Z)().analyticsLocations,
                    S = (0, j.al)(n, r.id, 1, new Set(s)),
                    f = B((0, L.ED)({
                        subscriptionId: n.id,
                        items: S,
                        renewal: !1,
                        applyEntitlements: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: m,
                        analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                    }), 2),
                    h = f[0],
                    I = f[1],
                    P = B((0, L.ED)({
                        subscriptionId: n.id,
                        items: S,
                        renewal: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: m,
                        analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    A = P[0],
                    g = P[1],
                    x = null != I ? I : g;
                i.useEffect((function() {
                    a(x)
                }), [a, x]);
                if (null != x) return (0, t.jsx)(y.FormErrorBlock, {
                    children: x.message
                });
                var _ = (0, b.Kp)({
                        isTrial: !1,
                        isGift: d,
                        selectedSkuId: u,
                        startedPaymentFlowWithPaymentSources: p.current
                    }),
                    N = (0, b.$g)(_, h, r);
                if (null == h || null == A || N) return (0, t.jsx)(y.Spinner, {
                    className: D().spinner
                });
                var M = (0, j.Ap)(l.paymentSourceId);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(O.hG, {
                        proratedInvoice: h,
                        renewalInvoice: A
                    }), (0, t.jsxs)(C.PO, {
                        className: D().invoice,
                        children: [(0, t.jsx)(C.q9, {
                            children: G.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, t.jsx)(O.Lu, {
                            invoice: h,
                            newPlan: r,
                            isPrepaidPaymentSource: M
                        }), (0, t.jsx)(O.nd, {
                            premiumSubscription: n,
                            proratedInvoice: h,
                            renewalInvoice: A,
                            isUpdate: !0,
                            isPrepaidPaymentSource: M
                        })]
                    })]
                })
            }

            function K(e) {
                var n, r, a, s = e.premiumSubscription,
                    l = e.newPlan,
                    o = e.onInvoiceError,
                    c = e.planGroup,
                    u = e.priceOptions,
                    d = e.preventFetch,
                    p = e.disabled,
                    m = e.isEEA,
                    S = e.paymentSources,
                    f = e.setHasAcceptedTerms,
                    I = (0, v.Z)().analyticsLocations,
                    T = (0,
                        j.al)(s, l.id, 1, new Set(c)),
                    A = B((0, L.ED)({
                        subscriptionId: s.id,
                        items: T,
                        renewal: !0,
                        paymentSourceId: u.paymentSourceId,
                        currency: u.currency,
                        preventFetch: d,
                        analyticsLocations: I,
                        analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    b = A[0],
                    g = A[1];
                i.useEffect((function() {
                    o(g)
                }), [o, g]);
                if (null != g) return (0, t.jsx)(y.FormErrorBlock, {
                    children: g.message
                });
                null != b && (r = {
                    amount: b.total,
                    currency: b.currency,
                    tax: b.tax,
                    taxInclusive: b.taxInclusive
                });
                return null == r ? null : (0, t.jsx)(P.Z, {
                    onChange: f,
                    finePrint: (0, t.jsx)(h.Z, {
                        subscriptionPlan: l,
                        paymentSourceType: null === (n = S[null !== (a = u.paymentSourceId) && void 0 !== a ? a : ""]) || void 0 === n ? void 0 : n.type,
                        basePrice: r,
                        currentSubscription: s,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: l.currency !== Z.pKx.USD,
                    showWithdrawalWaiver: m,
                    disabled: p,
                    subscriptionPlan: l,
                    currentSubscription: s,
                    planGroup: c
                })
            }

            function $(e) {
                var n, r = e.premiumSubscription,
                    i = e.newPlan,
                    a = e.planGroup,
                    s = e.priceOptions,
                    l = e.preventFetch,
                    o = (0, v.Z)().analyticsLocations,
                    c = B((0, L.ED)({
                        subscriptionId: r.id,
                        items: (0, j.al)(r, i.id, 1, new Set(a)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: l,
                        analyticsLocations: o,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    }), 2),
                    u = c[0],
                    d = c[1];
                if (null != d) return (0, t.jsx)(y.FormErrorBlock, {
                    children: d.message
                });
                if (null == u) return (0, t.jsx)("div", {
                    children: (0, t.jsx)(y.Spinner, {})
                });
                n = r.type === Z.NYc.PREMIUM ? (0, j.Gf)(i.id) : i.name;
                var p = (0, j.Ap)(s.paymentSourceId);
                return (0, t.jsxs)("div", {
                    className: D().bodyText,
                    children: [(0, t.jsx)("div", {
                        className: k().renewalInvoiceDate,
                        children: G.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: u.subscriptionPeriodStart
                        })
                    }), (0, t.jsxs)(C.PO, {
                        className: D().invoice,
                        children: [(0, t.jsx)(C.q9, {
                            children: G.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, t.jsx)(C.R$, {
                            label: n,
                            value: (0, j.PK)(i, s, !0)
                        }), (0, t.jsx)(M.Z, {
                            invoice: u
                        }), (0, t.jsx)(C.KU, {}), (0, t.jsx)(O.nd, {
                            premiumSubscription: r,
                            renewalInvoice: u,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
            var z = r(83471),
                q = r(881712),
                Q = r(328535),
                J = r(318715),
                X = r(19120),
                ee = r(560213),
                ne = r(908434),
                re = r(325213),
                te = r(750203),
                ie = r(856236),
                ae = r(575641),
                se = r(51496),
                le = r.n(se);

            function oe(e) {
                var n = e.sku,
                    r = e.skuPricePreview;
                s()(null != r.amount, "SKU must have a price set.");
                var i = r.amount - r.tax;
                return !r.tax_inclusive && r.tax > 0 ? (0, t.jsxs)(C.PO, {
                    className: le().invoice,
                    children: [(0, t.jsx)(C.R$, {
                        label: n.name,
                        value: (0, ae.T4)(i, r.currency),
                        className: le().subscriptionCostRow
                    }), (0, t.jsx)(C.R$, {
                        label: G.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, ae.T4)(r.tax, r.currency),
                        className: le().subscriptionCostRow
                    }), (0, t.jsx)(C.KU, {}), (0, t.jsx)(C.Ji, {
                        label: G.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, ae.T4)(r.amount, r.currency),
                        className: le().subscriptionCostRow
                    })]
                }) : (0, t.jsx)(C.PO, {
                    className: le().invoice,
                    children: (0, t.jsx)(C.R$, {
                        label: n.name,
                        value: (0, ae.T4)(r.amount, r.currency),
                        className: le().subscriptionCostRow
                    })
                })
            }

            function ce(e) {
                var n = e.application,
                    r = e.sku;
                return !0 !== e.isEmbeddedIAP ? null : (0, t.jsxs)("div", {
                    className: le().skuHeading,
                    children: [(0, t.jsx)(te.Z, {
                        game: n
                    }), (0, t.jsx)(y.Heading, {
                        variant: "heading-lg/bold",
                        className: le().skuHeadingText,
                        children: r.name
                    })]
                })
            }

            function ue(e) {
                var n = e.hasLegalTermsFlash,
                    r = e.legalTermsNodeRef,
                    i = e.onPaymentSourceChange,
                    a = e.handlePaymentSourceAdd,
                    l = (0, T.usePaymentContext)(),
                    o = l.application,
                    c = l.purchaseState,
                    u = l.paymentSources,
                    d = l.paymentSourceId,
                    p = l.setHasAcceptedTerms,
                    S = l.skusById,
                    f = l.skuPricePreviewsById,
                    E = l.selectedSkuId,
                    v = l.isEmbeddedIAP,
                    b = l.purchaseType;
                s()(null != E, "Expected selectedSkuId");
                var _ = S[E],
                    j = f[E],
                    N = null != d ? d : ne.c,
                    L = null != j ? j[N] : null;
                s()(null != _, "SKU must exist and be fetched.");
                s()(null != o, "Application must exist.");
                var C = (0, J.ZP)([ee.Z, re.Z], (function() {
                        return re.Z.inTestModeForApplication(o.id) || ee.Z.inDevModeForApplication(o.id)
                    }), [o.id]),
                    M = (0, J.ZP)([g.Z], (function() {
                        return g.Z.enabled
                    })),
                    w = m.M.EEA_COUNTRIES.has(x.Z.ipCountryCodeWithFallback),
                    O = c === A.A.PURCHASING || c === A.A.COMPLETED,
                    F = null != d ? u[d].type : null;
                return (0, t.jsxs)("div", {
                    className: le().stepBody,
                    children: [C && (0, t.jsx)(X.Z, {
                        icon: ie.Z,
                        iconSize: X.Z.Sizes.SMALL,
                        color: X.Z.Colors.WARNING,
                        className: le().errorBlock,
                        children: G.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, t.jsx)(ce, {
                        application: o,
                        sku: _,
                        isEmbeddedIAP: v
                    }), (0, t.jsx)(y.FormTitle, {
                        tag: y.FormTitleTags.H5,
                        children: G.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == L ? (0, t.jsx)(y.Spinner, {
                        type: y.Spinner.Type.WANDERING_CUBES,
                        className: le().invoiceSpinner
                    }) : (0, t.jsx)(oe, {
                        sku: _,
                        skuPricePreview: L
                    }), (0, t.jsxs)("div", {
                        className: le().paymentSourceWrapper,
                        children: [(0, t.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: G.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, t.jsx)(I.Z, {
                            paymentSources: Object.values(u),
                            selectedPaymentSourceId: d,
                            onChange: i,
                            onPaymentSourceAdd: a,
                            hidePersonalInformation: M
                        })]
                    }), (0, t.jsx)(R.Z, {
                        isActive: n,
                        ref: r,
                        children: (0, t.jsx)(P.Z, {
                            onChange: p,
                            forceShow: !0,
                            showWithdrawalWaiver: w,
                            disabled: O,
                            subscriptionPlan: null,
                            finePrintClassname: le().fineprint,
                            purchaseType: b,
                            checkboxLabel: _.productLine === Z.POd.COLLECTIBLES ? G.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: Z.EYA.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, t.jsx)(h.Z, {
                                paymentSourceType: F,
                                isEmbeddedIAP: v,
                                purchaseType: b,
                                productLine: _.productLine
                            })
                        })
                    })]
                })
            }
            var de = r(128059),
                pe = r(149096),
                me = r(203600),
                Se = r(520453);

            function ye(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function fe(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return ye(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ye(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function he(e) {
                var n, r = e.handleStepChange,
                    a = e.trialId,
                    m = e.trialFooterMessageOverride,
                    S = e.reviewWarningMessage,
                    y = e.planGroup,
                    f = e.openInvoiceId,
                    h = e.analyticsData,
                    I = e.analyticsLocation,
                    P = e.giftMessage,
                    E = e.customGiftMessage,
                    v = e.referralTrialOfferId,
                    A = e.initialPlanId,
                    g = e.subscriptionTier,
                    x = (0,
                        T.usePaymentContext)(),
                    _ = x.activeSubscription,
                    j = x.setUpdatedSubscription,
                    N = x.contextMetadata,
                    L = x.currencies,
                    C = x.isGift,
                    M = x.paymentSourceId,
                    R = x.paymentSources,
                    w = x.priceOptions,
                    O = x.purchaseError,
                    Z = x.purchaseTokenAuthState,
                    F = x.selectedPlan,
                    k = x.selectedSkuId,
                    U = x.setCurrency,
                    D = x.setPaymentSourceId,
                    W = x.setPurchaseState,
                    B = x.setPurchaseError,
                    Y = x.step,
                    V = x.purchaseState,
                    K = x.isPremium,
                    $ = x.selectedGiftStyle,
                    J = x.setHasAcceptedTerms,
                    X = x.purchaseType,
                    ee = x.setEntitlementsGranted,
                    ne = x.startedPaymentFlowWithPaymentSourcesRef;
                s()(null != Y, "Step should be set");
                var re, te = i.useRef(null),
                    ie = fe((0, l.Z)(!1, 500), 2),
                    ae = ie[0],
                    se = ie[1],
                    le = null !== (re = null != a ? a : v) && void 0 !== re ? re : null,
                    oe = null == le || K && !me.nG[le].skus.includes(k) ? null : le,
                    ce = (0, u.N)(v),
                    ye = (0, c.Ng)(),
                    he = {
                        user_trial_offer_id: null == ce ? void 0 : ce.id
                    };
                i.useEffect((function() {
                    null != O && null != te.current && te.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [O]);
                var Ie, Pe = i.useCallback((function(e, n) {
                        j(e);
                        null != n && ee(n);
                        r(z.h8.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: n
                            }
                        })
                    }), [r, j, ee]),
                    Ee = null != M ? R[M] : null,
                    ve = null != F && me.o4.has(F.id) && null != Ee && !(0, o.aQ)(Ee) ? new Error(G.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    Te = i.useRef(null),
                    Ae = fe(i.useState(null), 2),
                    be = Ae[0],
                    ge = Ae[1],
                    xe = !C && null != ce && null != k && me.nG[ce.trial_id].skus.includes(k),
                    _e = null == ye || null === (n = ye.discount) || void 0 === n ? void 0 : n.plan_ids,
                    je = !C && null != ye && null != _e && null != F && _e.includes(F.id),
                    Ne = null == A && null == g && X === Se.GZ.SUBSCRIPTION,
                    Le = (0, b.Kp)({
                        isTrial: xe,
                        isGift: C,
                        selectedSkuId: k,
                        startedPaymentFlowWithPaymentSources: ne.current
                    });
                if (X === Se.GZ.ONE_TIME) Ie = (0, t.jsx)(ue, {
                    hasLegalTermsFlash: ae,
                    legalTermsNodeRef: Te,
                    onPaymentSourceChange: function(e) {
                        return D(null != e ? e.id : null)
                    },
                    handlePaymentSourceAdd: function() {
                        return r(z.h8.ADD_PAYMENT_STEPS)
                    }
                });
                else if (null == _ || C) {
                    s()(null != F, "Expected plan to be selected");
                    Ie = (0, t.jsx)(d.Z, {
                        selectedPlanId: F.id,
                        isGift: C,
                        paymentSources: R,
                        onPaymentSourceChange: function(e) {
                            return D(null != e ? e.id : null)
                        },
                        priceOptions: w,
                        currencies: L,
                        onCurrencyChange: function(e) {
                            return U(e)
                        },
                        handlePaymentSourceAdd: function() {
                            return r(z.h8.ADD_PAYMENT_STEPS)
                        },
                        setHasAcceptedTerms: J,
                        legalTermsNodeRef: Te,
                        hasLegalTermsFlash: ae,
                        trialId: oe,
                        trialFooterMessageOverride: m,
                        reviewWarningMessage: S,
                        purchaseState: V,
                        referralTrialOfferId: v,
                        isTrial: xe,
                        isDiscount: je
                    })
                } else {
                    s()(null != F, "Expected plan to be selected");
                    Ie = (0, t.jsx)(H, {
                        premiumSubscription: _,
                        paymentSources: R,
                        priceOptions: w,
                        onPaymentSourceChange: function(e) {
                            D(null != e ? e.id : null)
                        },
                        onPaymentSourceAdd: function() {
                            r(z.h8.ADD_PAYMENT_STEPS)
                        },
                        planId: F.id,
                        setHasAcceptedTerms: J,
                        legalTermsNodeRef: Te,
                        hasLegalTermsFlash: ae,
                        onInvoiceError: function(e) {
                            return ge(e)
                        },
                        planGroup: y,
                        currencies: L,
                        onCurrencyChange: function(e) {
                            return U(e)
                        },
                        hasOpenInvoice: null != f,
                        purchaseState: V
                    })
                }
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(q.P, {
                        giftMessage: P
                    }), (0, t.jsx)(de.Z, {
                        isEligibleForTrial: xe
                    }), (0, t.jsxs)(pe.C3, {
                        children: [(0, t.jsx)(Q.Z, {}), Ie]
                    }), (0, t.jsx)(pe.O3, {
                        children: (0, t.jsx)(p.Z, {
                            premiumSubscription: null != _ ? _ : null,
                            setPurchaseState: W,
                            onBack: function() {
                                return r(Le ? z.h8.SKU_SELECT : z.h8.PLAN_SELECT)
                            },
                            onNext: Pe,
                            onPurchaseError: function(e) {
                                return B(e)
                            },
                            legalTermsNodeRef: Te,
                            flashLegalTerms: function() {
                                return se(!0)
                            },
                            invoiceError: be,
                            planError: ve,
                            analyticsLocation: I,
                            baseAnalyticsData: h,
                            flowStartTime: N.startTime,
                            isGift: C,
                            giftStyle: $,
                            customGiftMessage: E,
                            trialId: oe,
                            planGroup: y,
                            purchaseTokenAuthState: Z,
                            openInvoiceId: f,
                            backButtonEligible: Le ? Ne && K : K,
                            metadata: he,
                            isTrial: xe,
                            disablePurchase: null != Ee && X === Se.GZ.SUBSCRIPTION && xe && Se.H0.has(Ee.type)
                        })
                    })]
                })
            }
        },
        964255: (e, n, r) => {
            r.d(n, {
                v: () => d
            });
            var t = r(785893),
                i = r(667294),
                a = r(123435),
                s = r(782786),
                l = r(83471),
                o = r(28648);

            function c(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function u(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            i = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e) {
                var n = e.handleStepChange,
                    r = (0, s.usePaymentContext)(),
                    c = r.blockedPayments,
                    d = r.hasFetchedSkus,
                    p = r.paymentSources,
                    m = r.hasFetchedPaymentSources,
                    S = r.application,
                    y = u(i.useState(!0), 2),
                    f = y[0],
                    h = y[1];
                i.useEffect((function() {
                    d && m && null != S && h(!1)
                }), [d, m, S]);
                i.useEffect((function() {
                    f || c || (0 === Object.keys(p).length ? n(l.h8.ADD_PAYMENT_STEPS) : n(l.h8.REVIEW))
                }), [f, c, n, p]);
                return f ? (0, t.jsx)(o.Z, {}) : c ? (0, t.jsx)(a.Vq, {}) : null
            }
        },
        881712: (e, n, r) => {
            r.d(n, {
                P: () => d
            });
            var t = r(785893),
                i = (r(667294), r(19120)),
                a = r(832520),
                s = r(644144),
                l = r(782786),
                o = r(473708),
                c = r(169795),
                u = r.n(c);

            function d(e) {
                var n = e.giftMessage,
                    r = void 0 === n ? o.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : n,
                    c = (0, l.usePaymentContext)(),
                    d = c.isGift,
                    p = c.giftRecipient;
                return !1 === d || (0, s.a8)(p) ? null : (0, t.jsx)(i.Z, {
                    className: u().paymentNote,
                    iconSize: i.Z.Sizes.SMALL,
                    icon: a.Z,
                    color: null == r ? i.Z.Colors.PRIMARY : i.Z.Colors.SECONDARY,
                    children: r
                })
            }
        }
    }
]);