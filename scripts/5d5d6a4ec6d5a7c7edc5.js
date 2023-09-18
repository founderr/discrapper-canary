"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [45270], {
        366366: (e, n, r) => {
            r.d(n, {
                l: () => Se
            });
            var t = r(785893),
                i = r(667294),
                a = r(441143),
                s = r.n(a),
                l = r(898302),
                o = r(471450),
                c = r(818103),
                u = r(717035),
                d = r(932845),
                p = r(619244),
                m = r(197597),
                f = r(202351),
                S = r(882723),
                h = r(415324),
                y = r(152042),
                I = r(700812),
                E = r(536713),
                P = r(153686),
                v = r(19585),
                T = r(782786),
                b = r(632826),
                A = r(793461),
                g = r(615796),
                x = r(551778),
                j = r(116094),
                _ = r(530562),
                N = r(100749),
                O = r(16703),
                C = r(524450),
                M = r(900547),
                L = r(556663),
                R = r(646875),
                w = r(2590),
                Z = r(473708),
                k = r(771788),
                G = r.n(k),
                F = r(121466),
                D = r.n(F);

            function U(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function H(e, n) {
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
                    if ("string" == typeof e) return U(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return U(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e) {
                var n, r = e.premiumSubscription,
                    a = e.paymentSources,
                    l = e.priceOptions,
                    o = e.onPaymentSourceChange,
                    u = e.onPaymentSourceAdd,
                    d = e.planId,
                    p = e.setHasAcceptedTerms,
                    P = e.legalTermsNodeRef,
                    v = e.hasLegalTermsFlash,
                    N = e.onInvoiceError,
                    C = e.planGroup,
                    R = e.currencies,
                    k = e.onCurrencyChange,
                    G = e.hasOpenInvoice,
                    F = e.purchaseState,
                    U = (0,
                        T.usePaymentContext)(),
                    H = U.selectedSkuId,
                    W = U.defaultPlanId,
                    K = U.selectedGiftStyle,
                    $ = U.setSelectedGiftStyle,
                    z = U.isGift,
                    q = U.isPremium,
                    J = l.paymentSourceId,
                    Q = (0, f.e7)([x.Z], (function() {
                        return x.Z.get(d)
                    }));
                s()(null != Q, "Missing newPlan");
                var X, ee = (0, f.e7)([A.Z], (function() {
                    return A.Z.hidePersonalInformation
                }));
                X = G ? Z.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, j.PV)(d) ? (0, j.W_)(r, Q) : Z.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: Q.name
                });
                var ne = m.M.EEA_COUNTRIES.has(g.Z.ipCountryCodeWithFallback),
                    re = F === b.A.PURCHASING || F === b.A.COMPLETED,
                    te = (0, c.Wt)({
                        isTrial: !1,
                        isGift: z,
                        selectedSkuId: H
                    }),
                    ie = te.enabled,
                    ae = te.defaultToMonthlyPlan,
                    se = i.useMemo((function() {
                        return (0, j.V7)({
                            skuId: H,
                            isPremium: q,
                            multiMonthPlans: [],
                            currentSubscription: r,
                            isGift: z,
                            isEligibleForTrial: !1,
                            defaultPlanId: W,
                            defaultToMonthlyPlan: ae
                        })
                    }), [H, r, W, q, z, ae]);
                return (0, t.jsxs)("div", {
                    className: D().stepBody,
                    children: [ie && (0, t.jsxs)("div", {
                        children: [(0, t.jsx)(O.KU, {
                            negativeMarginTop: !0
                        }), (0, t.jsx)(L.O, {
                            isGift: z,
                            selectedGiftStyle: K,
                            setSelectedGiftStyle: $,
                            planOptions: se,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: d,
                            showPlanSelectionHeader: !1,
                            showTotal: !1
                        }), (0, t.jsx)(O.KU, {})]
                    }), (0, t.jsx)(S.FormTitle, {
                        tag: S.FormTitleTags.H5,
                        children: X
                    }), null != r ? G ? (0, t.jsx)(B, {
                        premiumSubscription: r,
                        onInvoiceError: N,
                        priceOptions: l,
                        preventFetch: !1
                    }) : (0, _.R4)(r, d, C) ? (0, t.jsx)(Y, {
                        premiumSubscription: r,
                        newPlan: Q,
                        onInvoiceError: N,
                        planGroup: C,
                        priceOptions: l,
                        preventFetch: re
                    }) : (0, t.jsx)(V, {
                        premiumSubscription: r,
                        newPlan: Q,
                        planGroup: C,
                        priceOptions: l,
                        preventFetch: re
                    }) : null, (0, t.jsxs)("div", {
                        className: D().paymentSourceWrapper,
                        children: [(0, t.jsx)(S.FormTitle, {
                            tag: S.FormTitleTags.H5,
                            children: Z.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, t.jsx)(I.Z, {
                            paymentSources: Object.values(a),
                            selectedPaymentSourceId: J,
                            onChange: o,
                            onPaymentSourceAdd: u,
                            hidePersonalInformation: ee,
                            disabled: re
                        })]
                    }), (0, t.jsxs)(h.b, {
                        currencies: R,
                        className: D().currencyWrapper,
                        children: [(0, t.jsx)(S.FormTitle, {
                            tag: S.FormTitleTags.H5,
                            children: Z.Z.Messages.PAYMENT_CURRENCY
                        }), (0, t.jsx)(h.Z, {
                            selectedCurrency: l.currency,
                            currencies: R,
                            onChange: k,
                            disabled: re
                        })]
                    }), (0, t.jsx)(M.Z, {
                        isActive: v,
                        ref: P,
                        children: (0, t.jsx)(E.Z, {
                            onChange: p,
                            finePrint: (0, t.jsx)(y.Z, {
                                subscriptionPlan: Q,
                                paymentSourceType: null === (n = a[null != J ? J : ""]) || void 0 === n ? void 0 : n.type
                            }),
                            forceShow: !0,
                            showPricingLink: Q.currency !== w.pKx.USD,
                            showWithdrawalWaiver: ne,
                            disabled: re
                        })
                    })]
                })
            }

            function B(e) {
                var n = e.premiumSubscription,
                    r = e.onInvoiceError,
                    a = e.priceOptions,
                    s = e.preventFetch,
                    l = H((0, N.Ox)({
                        subscriptionId: n.id,
                        preventFetch: s
                    }), 2),
                    o = l[0],
                    c = l[1];
                i.useEffect((function() {
                    r(c)
                }), [r, c]);
                var u = (0, j.Ap)(a.paymentSourceId);
                return null != o ? (0, t.jsxs)(O.PO, {
                    className: G().invoice,
                    children: [(0, t.jsx)(R.By, {
                        invoice: o,
                        isPrepaidPaymentSource: u
                    }), (0, t.jsx)(R.nd, {
                        premiumSubscription: n,
                        renewalInvoice: o,
                        isUpdate: !0,
                        isPrepaidPaymentSource: u
                    })]
                }) : (0, t.jsx)(S.Spinner, {})
            }

            function Y(e) {
                var n = e.premiumSubscription,
                    r = e.newPlan,
                    a = e.onInvoiceError,
                    s = e.planGroup,
                    l = e.priceOptions,
                    o = e.preventFetch,
                    u = (0, T.usePaymentContext)(),
                    d = u.selectedSkuId,
                    p = u.isGift,
                    m = (0, v.Z)().analyticsLocations,
                    f = (0, j.al)(n, r.id, 1, new Set(s)),
                    h = H((0, N.ED)({
                        subscriptionId: n.id,
                        items: f,
                        renewal: !1,
                        applyEntitlements: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: m,
                        analyticsLocation: P.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                    }), 2),
                    y = h[0],
                    I = h[1],
                    E = H((0, N.ED)({
                        subscriptionId: n.id,
                        items: f,
                        renewal: !0,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: o,
                        analyticsLocations: m,
                        analyticsLocation: P.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    b = E[0],
                    A = E[1],
                    g = null != I ? I : A;
                i.useEffect((function() {
                    a(g)
                }), [a, g]);
                if (null != g) return (0, t.jsx)(S.FormErrorBlock, {
                    children: g.message
                });
                var x = (0, c.Wt)({
                        isTrial: !1,
                        isGift: p,
                        selectedSkuId: d
                    }).enabled,
                    _ = (0, c.$g)(x, y, r);
                if (null == y || null == b || _) return (0, t.jsx)(S.Spinner, {
                    className: D().spinner
                });
                var C = (0, j.Ap)(l.paymentSourceId);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(R.hG, {
                        proratedInvoice: y,
                        renewalInvoice: b
                    }), (0, t.jsxs)(O.PO, {
                        className: D().invoice,
                        children: [(0, t.jsx)(O.q9, {
                            children: Z.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, t.jsx)(R.Lu, {
                            invoice: y,
                            newPlan: r,
                            isPrepaidPaymentSource: C
                        }), (0, t.jsx)(R.nd, {
                            premiumSubscription: n,
                            proratedInvoice: y,
                            renewalInvoice: b,
                            isUpdate: !0,
                            isPrepaidPaymentSource: C
                        })]
                    })]
                })
            }

            function V(e) {
                var n, r = e.premiumSubscription,
                    i = e.newPlan,
                    a = e.planGroup,
                    s = e.priceOptions,
                    l = e.preventFetch,
                    o = (0, v.Z)().analyticsLocations,
                    c = H((0, N.ED)({
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
                if (null != d) return (0, t.jsx)(S.FormErrorBlock, {
                    children: d.message
                });
                if (null == u) return (0, t.jsx)("div", {
                    children: (0, t.jsx)(S.Spinner, {})
                });
                n = r.type === w.NYc.PREMIUM ? (0, j.Gf)(i.id) : i.name;
                var p = (0, j.Ap)(s.paymentSourceId);
                return (0, t.jsxs)("div", {
                    className: D().bodyText,
                    children: [(0, t.jsx)("div", {
                        className: G().renewalInvoiceDate,
                        children: Z.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: u.subscriptionPeriodStart
                        })
                    }), (0, t.jsxs)(O.PO, {
                        className: D().invoice,
                        children: [(0, t.jsx)(O.q9, {
                            children: Z.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, t.jsx)(O.R$, {
                            label: n,
                            value: (0, j.PK)(i, s, !0)
                        }), (0, t.jsx)(C.Z, {
                            invoice: u
                        }), (0, t.jsx)(O.KU, {}), (0, t.jsx)(R.nd, {
                            premiumSubscription: r,
                            renewalInvoice: u,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
            var K = r(83471),
                $ = r(881712),
                z = r(328535),
                q = r(318715),
                J = r(19120),
                Q = r(560213),
                X = r(908434),
                ee = r(325213),
                ne = r(641277),
                re = r(856236),
                te = r(249052),
                ie = r(551758),
                ae = r.n(ie);

            function se(e) {
                var n = e.sku,
                    r = e.skuPricePreview;
                s()(null != r.amount, "SKU must have a price set.");
                var i = r.amount - r.tax;
                return !r.tax_inclusive && r.tax > 0 ? (0, t.jsxs)(O.PO, {
                    className: ae().invoice,
                    children: [(0, t.jsx)(O.R$, {
                        label: n.name,
                        value: (0, te.T4)(i, r.currency),
                        className: ae().subscriptionCostRow
                    }), (0, t.jsx)(O.R$, {
                        label: Z.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, te.T4)(r.tax, r.currency),
                        className: ae().subscriptionCostRow
                    }), (0, t.jsx)(O.KU, {}), (0, t.jsx)(O.Ji, {
                        label: Z.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, te.T4)(r.amount, r.currency),
                        className: ae().subscriptionCostRow
                    })]
                }) : (0, t.jsx)(O.PO, {
                    className: ae().invoice,
                    children: (0, t.jsx)(O.R$, {
                        label: n.name,
                        value: (0, te.T4)(r.amount, r.currency),
                        className: ae().subscriptionCostRow
                    })
                })
            }

            function le(e) {
                var n = e.application,
                    r = e.sku;
                return !0 !== e.isEmbeddedIAP ? null : (0, t.jsxs)("div", {
                    className: ae().skuHeading,
                    children: [(0, t.jsx)(ne.Z, {
                        game: n
                    }), (0, t.jsx)(S.Heading, {
                        variant: "heading-lg/bold",
                        className: ae().skuHeadingText,
                        children: r.name
                    })]
                })
            }

            function oe(e) {
                var n = e.hasLegalTermsFlash,
                    r = e.legalTermsNodeRef,
                    i = e.onPaymentSourceChange,
                    a = e.handlePaymentSourceAdd,
                    l = (0,
                        T.usePaymentContext)(),
                    o = l.application,
                    c = l.purchaseState,
                    u = l.paymentSources,
                    d = l.paymentSourceId,
                    p = l.setHasAcceptedTerms,
                    f = l.skusById,
                    h = l.skuPricePreviewsById,
                    P = l.selectedSkuId,
                    v = l.isEmbeddedIAP,
                    x = l.purchaseType;
                s()(null != P, "Expected selectedSkuId");
                var j = f[P],
                    _ = h[P],
                    N = null != d ? d : X.c,
                    O = null != _ ? _[N] : null;
                s()(null != j, "SKU must exist and be fetched.");
                s()(null != o, "Application must exist.");
                var C = (0, q.ZP)([Q.Z, ee.Z], (function() {
                        return ee.Z.inTestModeForApplication(o.id) || Q.Z.inDevModeForApplication(o.id)
                    }), [o.id]),
                    L = (0, q.ZP)([A.Z], (function() {
                        return A.Z.enabled
                    })),
                    R = m.M.EEA_COUNTRIES.has(g.Z.ipCountryCodeWithFallback),
                    k = c === b.A.PURCHASING || c === b.A.COMPLETED,
                    G = null != d ? u[d].type : null;
                return (0, t.jsxs)("div", {
                    className: ae().stepBody,
                    children: [C && (0, t.jsx)(J.Z, {
                        icon: re.Z,
                        iconSize: J.Z.Sizes.SMALL,
                        color: J.Z.Colors.WARNING,
                        className: ae().errorBlock,
                        children: Z.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, t.jsx)(le, {
                        application: o,
                        sku: j,
                        isEmbeddedIAP: v
                    }), (0, t.jsx)(S.FormTitle, {
                        tag: S.FormTitleTags.H5,
                        children: Z.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == O ? (0, t.jsx)(S.Spinner, {
                        type: S.Spinner.Type.WANDERING_CUBES,
                        className: ae().invoiceSpinner
                    }) : (0, t.jsx)(se, {
                        sku: j,
                        skuPricePreview: O
                    }), (0, t.jsxs)("div", {
                        className: ae().paymentSourceWrapper,
                        children: [(0, t.jsx)(S.FormTitle, {
                            tag: S.FormTitleTags.H5,
                            children: Z.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, t.jsx)(I.Z, {
                            paymentSources: Object.values(u),
                            selectedPaymentSourceId: d,
                            onChange: i,
                            onPaymentSourceAdd: a,
                            hidePersonalInformation: L
                        })]
                    }), (0, t.jsx)(M.Z, {
                        isActive: n,
                        ref: r,
                        children: (0, t.jsx)(E.Z, {
                            onChange: p,
                            forceShow: !0,
                            showWithdrawalWaiver: R,
                            disabled: k,
                            subscriptionPlan: null,
                            finePrintClassname: ae().fineprint,
                            checkboxLabel: j.productLine === w.POd.COLLECTIBLES ? Z.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: w.EYA.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, t.jsx)(y.Z, {
                                paymentSourceType: G,
                                isEmbeddedIAP: v,
                                purchaseType: x,
                                productLine: j.productLine
                            })
                        })
                    })]
                })
            }
            var ce = r(128059),
                ue = r(149096),
                de = r(203600),
                pe = r(520453);

            function me(e, n) {
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
                    if ("string" == typeof e) return me(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return me(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Se(e) {
                var n = e.handleStepChange,
                    r = e.trialId,
                    a = e.trialFooterMessageOverride,
                    m = e.reviewWarningMessage,
                    f = e.planGroup,
                    S = e.openInvoiceId,
                    h = e.analyticsData,
                    y = e.analyticsLocation,
                    I = e.giftMessage,
                    E = e.customGiftMessage,
                    P = e.referralTrialOfferId,
                    v = e.initialPlanId,
                    b = e.subscriptionTier,
                    A = (0, T.usePaymentContext)(),
                    g = A.activeSubscription,
                    x = A.setUpdatedSubscription,
                    j = A.contextMetadata,
                    _ = A.currencies,
                    N = A.isGift,
                    O = A.paymentSourceId,
                    C = A.paymentSources,
                    M = A.priceOptions,
                    L = A.purchaseError,
                    R = A.purchaseTokenAuthState,
                    w = A.selectedPlan,
                    k = A.selectedSkuId,
                    G = A.setCurrency,
                    F = A.setPaymentSourceId,
                    D = A.setPurchaseState,
                    U = A.setPurchaseError,
                    H = A.step,
                    B = A.purchaseState,
                    Y = A.isPremium,
                    V = A.selectedGiftStyle,
                    q = A.setHasAcceptedTerms,
                    J = A.purchaseType,
                    Q = A.setEntitlementsGranted;
                s()(null != H, "Step should be set");
                var X, ee = i.useRef(null),
                    ne = fe((0,
                        l.Z)(!1, 500), 2),
                    re = ne[0],
                    te = ne[1],
                    ie = null !== (X = null != r ? r : P) && void 0 !== X ? X : null,
                    ae = null == ie || Y && !de.nG[ie].skus.includes(k) ? null : ie,
                    se = (0, u.N)(P),
                    le = {
                        user_trial_offer_id: null == se ? void 0 : se.id
                    };
                i.useEffect((function() {
                    null != L && null != ee.current && ee.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [L]);
                var me, Se = i.useCallback((function(e, r) {
                        x(e);
                        null != r && Q(r);
                        n(K.h8.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: r
                            }
                        })
                    }), [n, x, Q]),
                    he = null != O ? C[O] : null,
                    ye = null != w && de.o4.has(w.id) && null != he && !(0, o.aQ)(he) ? new Error(Z.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    Ie = i.useRef(null),
                    Ee = fe(i.useState(null), 2),
                    Pe = Ee[0],
                    ve = Ee[1],
                    Te = !N && null != se && null != k && de.nG[se.trial_id].skus.includes(k),
                    be = null == v && null == b,
                    Ae = !1;
                if (J === pe.GZ.ONE_TIME) me = (0, t.jsx)(oe, {
                    hasLegalTermsFlash: re,
                    legalTermsNodeRef: Ie,
                    onPaymentSourceChange: function(e) {
                        return F(null != e ? e.id : null)
                    },
                    handlePaymentSourceAdd: function() {
                        return n(K.h8.ADD_PAYMENT_STEPS)
                    }
                });
                else if (null == g || N) {
                    s()(null != w, "Expected plan to be selected");
                    Ae = (0, c.Wt)({
                        isTrial: Te,
                        isGift: N,
                        selectedSkuId: k
                    }).enabled;
                    me = (0, t.jsx)(d.Z, {
                        selectedPlanId: w.id,
                        isGift: N,
                        paymentSources: C,
                        onPaymentSourceChange: function(e) {
                            return F(null != e ? e.id : null)
                        },
                        priceOptions: M,
                        currencies: _,
                        onCurrencyChange: function(e) {
                            return G(e)
                        },
                        handlePaymentSourceAdd: function() {
                            return n(K.h8.ADD_PAYMENT_STEPS)
                        },
                        setHasAcceptedTerms: q,
                        legalTermsNodeRef: Ie,
                        hasLegalTermsFlash: re,
                        trialId: ae,
                        trialFooterMessageOverride: a,
                        reviewWarningMessage: m,
                        purchaseState: B,
                        referralTrialOfferId: P,
                        isTrial: Te
                    })
                } else {
                    s()(null != w, "Expected plan to be selected");
                    Ae = (0, c.Wt)({
                        isTrial: Te,
                        isGift: N,
                        selectedSkuId: k
                    }).enabled;
                    me = (0, t.jsx)(W, {
                        premiumSubscription: g,
                        paymentSources: C,
                        priceOptions: M,
                        onPaymentSourceChange: function(e) {
                            F(null != e ? e.id : null)
                        },
                        onPaymentSourceAdd: function() {
                            n(K.h8.ADD_PAYMENT_STEPS);
                            F(null)
                        },
                        planId: w.id,
                        setHasAcceptedTerms: q,
                        legalTermsNodeRef: Ie,
                        hasLegalTermsFlash: re,
                        onInvoiceError: function(e) {
                            return ve(e)
                        },
                        planGroup: f,
                        currencies: _,
                        onCurrencyChange: function(e) {
                            return G(e)
                        },
                        hasOpenInvoice: null != S,
                        purchaseState: B
                    })
                }
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)($.P, {
                        giftMessage: I
                    }), (0, t.jsx)(ce.Z, {
                        isEligibleForTrial: Te
                    }), (0, t.jsxs)(ue.C3, {
                        children: [(0, t.jsx)(z.Z, {}), me]
                    }), (0, t.jsx)(ue.O3, {
                        children: (0, t.jsx)(p.Z, {
                            premiumSubscription: null != g ? g : null,
                            setPurchaseState: D,
                            onBack: function() {
                                return n(Ae ? K.h8.SKU_SELECT : K.h8.PLAN_SELECT)
                            },
                            onNext: Se,
                            onPurchaseError: function(e) {
                                return U(e)
                            },
                            legalTermsNodeRef: Ie,
                            flashLegalTerms: function() {
                                return te(!0)
                            },
                            invoiceError: Pe,
                            planError: ye,
                            analyticsLocation: y,
                            baseAnalyticsData: h,
                            flowStartTime: j.startTime,
                            isGift: N,
                            giftStyle: V,
                            customGiftMessage: E,
                            trialId: ae,
                            planGroup: f,
                            purchaseTokenAuthState: R,
                            openInvoiceId: S,
                            backButtonEligible: Ae ? be && Y : Y,
                            metadata: le,
                            isTrial: Te,
                            disablePurchase: null != he && J === pe.GZ.SUBSCRIPTION && Te && pe.H0.has(he.type)
                        })
                    })]
                })
            }
        },
        545270: (e, n, r) => {
            r.d(n, {
                s2: () => g,
                F7: () => N,
                WA: () => A,
                wo: () => _,
                yp: () => O
            });
            var t = r(785893),
                i = (r(667294),
                    r(711531)),
                a = r(83471),
                s = r(986304),
                l = r(493957),
                o = r(806706),
                c = r(441143),
                u = r.n(c),
                d = r(882723),
                p = r(782786),
                m = r(328535),
                f = r(149096),
                S = r(473708),
                h = r(62477),
                y = r.n(h);

            function I(e) {
                var n = e.handleClose,
                    r = (0, p.usePaymentContext)(),
                    i = r.skusById,
                    a = r.selectedSkuId,
                    s = r.application;
                u()(null != a, "Expected selectedSkuId");
                u()(null != s, "Expected application");
                var l = i[a];
                u()(null != l, "Expected sku");
                var o = S.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: s.name,
                    itemName: l.name
                });
                return (0, t.jsxs)(f.C3, {
                    children: [(0, t.jsx)(m.Z, {}), (0, t.jsxs)("div", {
                        className: y().confirmation,
                        children: [(0, t.jsx)(d.Heading, {
                            variant: "heading-xxl/bold",
                            className: y().confirmationHeader,
                            children: "Success!"
                        }), (0, t.jsx)(d.Text, {
                            variant: "text-md/normal",
                            children: o
                        }), (0, t.jsx)("div", {
                            className: y().divider
                        }), (0, t.jsx)(d.Button, {
                            onClick: n,
                            children: S.Z.Messages.CLOSE
                        })]
                    })]
                })
            }
            var E = r(366366),
                P = r(964255);

            function v(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function T(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        v(e, n, r[n])
                    }))
                }
                return e
            }

            function b(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }
            var A = {
                    key: null,
                    renderStep: function(e) {
                        return (0, t.jsx)(P.v, T({}, e))
                    }
                },
                g = {
                    key: a.h8.ADD_PAYMENT_STEPS,
                    renderStep: function(e) {
                        return (0, t.jsx)(t.Fragment, {
                            children: (0, t.jsx)(s.J, b(T({}, e), {
                                breadcrumbSteps: [a.h8.ADD_PAYMENT_STEPS, a.h8.REVIEW, a.h8.CONFIRM],
                                onReturn: function() {
                                    var n = i.Z.paymentSources;
                                    0 === Object.keys(n).length ? e.handleClose() : e.handleStepChange(a.h8.REVIEW, {
                                        trackedFromStep: a.h8.ADD_PAYMENT_STEPS
                                    })
                                }
                            }))
                        })
                    },
                    options: {
                        renderHeader: !0
                    }
                },
                x = {
                    key: a.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: function() {
                        return (0, t.jsx)(o.Z, {})
                    }
                },
                j = {
                    key: a.h8.AWAITING_AUTHENTICATION,
                    renderStep: function() {
                        return (0, t.jsx)(l.Z, {})
                    }
                },
                _ = {
                    key: a.h8.REVIEW,
                    renderStep: function(e) {
                        return (0, t.jsx)(E.l, T({}, e))
                    }
                },
                N = {
                    key: a.h8.CONFIRM,
                    renderStep: function(e) {
                        return (0, t.jsx)(I, T({}, e))
                    }
                },
                O = [x, j]
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
                    f = u(i.useState(!0), 2),
                    S = f[0],
                    h = f[1];
                i.useEffect((function() {
                    d && m && h(!1)
                }), [d, m]);
                i.useEffect((function() {
                    S || c || (0 === Object.keys(p).length ? n(l.h8.ADD_PAYMENT_STEPS) : n(l.h8.REVIEW))
                }), [S, c, n, p]);
                return S ? (0, t.jsx)(o.Z, {}) : c ? (0, t.jsx)(a.Vq, {}) : null
            }
        },
        881712: (e, n, r) => {
            r.d(n, {
                P: () => d
            });
            var t = r(785893),
                i = (r(667294), r(19120)),
                a = r(799043),
                s = r(644144),
                l = r(782786),
                o = r(473708),
                c = r(919509),
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