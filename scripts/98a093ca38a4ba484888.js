(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [24115, 86531, 58635, 71687], {
        495068: (e, t, r) => {
            e.exports = r.p + "3255f24f5123fd8769d97157e48cb796.svg"
        },
        377236: (e, t, r) => {
            e.exports = r.p + "6cf42ec75591247991e68cfaf7801a29.svg"
        },
        171032: (e, t, r) => {
            e.exports = r.p + "552f440868b7b90050bdd47b3958e22f.svg"
        },
        758635: (e, t, r) => {
            "use strict";
            r.d(t, {
                W: () => s
            });
            var n = r(281110),
                a = r(744564),
                i = r(239734),
                o = r(2590);

            function s() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    a.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return n.ZP.get({
                        url: o.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        a.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        a.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        661299: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(785893),
                a = (r(667294), r(294184)),
                i = r.n(a),
                o = r(228721),
                s = r(349480),
                l = r.n(s);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }
            var u = (0, o.Z)();
            const f = function(e) {
                var t, r = e.open,
                    a = e.className,
                    o = e.withHighlight,
                    s = void 0 !== o && o;
                return (0, n.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    className: i()(l().button, a, (t = {}, c(t, l().open, r), c(t, l().withHighlight, s), t)),
                    children: [s && (0, n.jsx)("defs", {
                        children: (0, n.jsxs)("linearGradient", {
                            id: u,
                            x1: "0",
                            y1: "0",
                            x2: "0",
                            y2: "18",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, n.jsx)("stop", {
                                offset: "0",
                                stopColor: "#B473F5"
                            }), (0, n.jsx)("stop", {
                                offset: "1",
                                stopColor: "#E292AA"
                            })]
                        })
                    }), (0, n.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, n.jsx)("path", {
                            d: "M0 0h18v18H0"
                        }), (0, n.jsx)("path", {
                            stroke: s ? "url(#".concat(u, ")") : "currentColor",
                            d: "M4.5 4.5l9 9",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            stroke: s ? "url(#".concat(u, ")") : "currentColor",
                            d: "M13.5 4.5l-9 9",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        123435: (e, t, r) => {
            "use strict";
            r.d(t, {
                Vq: () => O,
                c8: () => g,
                oQ: () => _
            });
            var n = r(785893),
                a = (r(667294),
                    r(294184)),
                i = r.n(a),
                o = r(795308),
                s = r(575945),
                l = r(70418),
                c = r(74535),
                u = r(107364),
                f = r(818417),
                d = r(348592),
                p = r(387099),
                h = r(2590),
                y = r(473708),
                m = r(858903),
                E = r.n(m),
                b = r(495068),
                v = r.n(b),
                S = r(377236),
                I = r.n(S);

            function P(e) {
                var t = e.className,
                    r = (0, c.ZP)(),
                    a = (0, s.wj)(r) ? v() : I();
                return (0, n.jsxs)("div", {
                    className: i()(E().container, t),
                    children: [(0, n.jsx)(l.Heading, {
                        className: E().header,
                        variant: "heading-xl/semibold",
                        children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, n.jsxs)(l.Text, {
                        className: E().description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, n.jsx)("p", {
                            children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, n.jsx)("p", {
                            children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: d.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, n.jsx)("img", {
                        src: a,
                        className: E().splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function g() {
                return (0, n.jsx)(P, {
                    className: E().settings
                })
            }

            function O(e) {
                var t = e.onClose;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(l.ModalHeader, {
                        className: E().blockedPaymentsModalHeader,
                        justify: u.Z.Justify.END,
                        children: (0, n.jsx)(l.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, n.jsx)(l.ModalContent, {
                        className: E().blockedPaymentsModalContent,
                        children: (0, n.jsx)(P, {
                            className: E().modal
                        })
                    })]
                })
            }

            function _(e) {
                var t = e.className;
                return (0, p.Q)() ? (0, n.jsxs)(l.Card, {
                    className: i()(E().blockedPaymentsWarning, t),
                    type: l.Card.Types.CUSTOM,
                    children: [(0, n.jsx)(f.Z, {
                        className: E().blockedPaymentsWarningIcon,
                        color: o.Z.unsafe_rawColors.YELLOW_300.css
                    }), (0, n.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: y.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: d.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        366366: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => Ee
            });
            var n = r(785893),
                a = r(667294),
                i = r(441143),
                o = r.n(i),
                s = r(898302),
                l = r(471450),
                c = r(344266),
                u = r(717035),
                f = r(16097),
                d = r(682876),
                p = r(197597),
                h = r(202351),
                y = r(70418),
                m = r(415324),
                E = r(152042),
                b = r(700812),
                v = r(536713),
                S = r(153686),
                I = r(19585),
                P = r(782786),
                g = r(632826),
                O = r(268226),
                _ = r(793461),
                C = r(615796),
                A = r(551778),
                T = r(116094),
                j = r(530562),
                R = r(100749),
                N = r(16703),
                M = r(524450),
                x = r(900547),
                L = r(311556),
                w = r(646875),
                Z = r(2590),
                k = r(473708),
                D = r(231492),
                U = r.n(D),
                G = r(968071),
                B = r.n(G);

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function F(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return H(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return H(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y(e) {
                var t, r = e.premiumSubscription,
                    i = e.paymentSources,
                    s = e.priceOptions,
                    l = e.onPaymentSourceChange,
                    c = e.onPaymentSourceAdd,
                    u = e.planId,
                    f = e.setHasAcceptedTerms,
                    d = e.legalTermsNodeRef,
                    S = e.hasLegalTermsFlash,
                    I = e.onInvoiceError,
                    R = e.planGroup,
                    M = e.currencies,
                    w = e.onCurrencyChange,
                    D = e.hasOpenInvoice,
                    U = e.purchaseState,
                    G = (0, P.usePaymentContext)(),
                    H = G.selectedSkuId,
                    F = G.defaultPlanId,
                    Y = G.selectedGiftStyle,
                    z = G.setSelectedGiftStyle,
                    $ = G.isGift,
                    q = G.isPremium,
                    J = G.startedPaymentFlowWithPaymentSourcesRef,
                    X = s.paymentSourceId,
                    ee = (0, h.e7)([A.Z], (function() {
                        return A.Z.get(u)
                    }));
                o()(null != ee, "Missing newPlan");
                var te, re = (0, h.e7)([_.Z], (function() {
                    return _.Z.hidePersonalInformation
                }));
                te = D ? k.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, T.PV)(u) ? (0, T.W_)(r, ee) : k.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: ee.name
                });
                var ne = p.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
                    ae = U === g.A.PURCHASING || U === g.A.COMPLETED,
                    ie = (0, O.Kp)({
                        isTrial: !1,
                        isGift: $,
                        selectedSkuId: H,
                        startedPaymentFlowWithPaymentSources: J.current
                    }),
                    oe = a.useMemo((function() {
                        return (0, T.V7)({
                            skuId: H,
                            isPremium: q,
                            multiMonthPlans: [],
                            currentSubscription: r,
                            isGift: $,
                            isEligibleForTrial: !1,
                            defaultPlanId: F,
                            defaultToMonthlyPlan: !1
                        })
                    }), [H, r, F, q, $]);
                return (0, n.jsxs)("div", {
                    className: B().stepBody,
                    children: [ie && (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(N.KU, {
                            negativeMarginTop: !0
                        }), (0, n.jsx)(L.O, {
                            isGift: $,
                            selectedGiftStyle: Y,
                            setSelectedGiftStyle: z,
                            planOptions: oe,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: u,
                            showTotal: !1
                        }), (0, n.jsx)(N.KU, {})]
                    }), (0, n.jsx)(y.FormTitle, {
                        tag: y.FormTitleTags.H5,
                        children: te
                    }), null != r ? D ? (0, n.jsx)(W, {
                        premiumSubscription: r,
                        onInvoiceError: I,
                        priceOptions: s,
                        preventFetch: !1
                    }) : (0, j.R4)(r, u, R) ? (0, n.jsx)(K, {
                        premiumSubscription: r,
                        newPlan: ee,
                        onInvoiceError: I,
                        planGroup: R,
                        priceOptions: s,
                        preventFetch: ae
                    }) : (0, n.jsx)(Q, {
                        premiumSubscription: r,
                        newPlan: ee,
                        planGroup: R,
                        priceOptions: s,
                        preventFetch: ae
                    }) : null, (0, n.jsxs)("div", {
                        className: B().paymentSourceWrapper,
                        children: [(0, n.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: k.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, n.jsx)(b.Z, {
                            paymentSources: Object.values(i),
                            selectedPaymentSourceId: X,
                            onChange: l,
                            onPaymentSourceAdd: c,
                            hidePersonalInformation: re,
                            disabled: ae
                        })]
                    }), (0, n.jsxs)(m.b, {
                        currencies: M,
                        className: B().currencyWrapper,
                        children: [(0, n.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: k.Z.Messages.PAYMENT_CURRENCY
                        }), (0, n.jsx)(m.Z, {
                            selectedCurrency: s.currency,
                            currencies: M,
                            onChange: w,
                            disabled: ae
                        })]
                    }), (0, n.jsx)(x.Z, {
                        isActive: S,
                        ref: d,
                        children: null != r && (0, j.R4)(r, u, R) ? (0, n.jsx)(V, {
                            premiumSubscription: r,
                            newPlan: ee,
                            onInvoiceError: I,
                            planGroup: R,
                            priceOptions: s,
                            preventFetch: ae,
                            disabled: ae,
                            isEEA: ne,
                            paymentSources: i,
                            setHasAcceptedTerms: f
                        }) : (0, n.jsx)(v.Z, {
                            onChange: f,
                            finePrint: (0, n.jsx)(E.Z, {
                                subscriptionPlan: ee,
                                paymentSourceType: null === (t = i[null != X ? X : ""]) || void 0 === t ? void 0 : t.type,
                                basePrice: (0, T.aS)(ee.id, !1, $, s),
                                currentSubscription: r,
                                planGroup: R
                            }),
                            forceShow: !0,
                            showPricingLink: ee.currency !== Z.pKx.USD,
                            showWithdrawalWaiver: ne,
                            disabled: ae,
                            subscriptionPlan: ee,
                            currentSubscription: r,
                            planGroup: R
                        })
                    })]
                })
            }

            function W(e) {
                var t = e.premiumSubscription,
                    r = e.onInvoiceError,
                    i = e.priceOptions,
                    o = e.preventFetch,
                    s = F((0, R.Ox)({
                        subscriptionId: t.id,
                        preventFetch: o
                    }), 2),
                    l = s[0],
                    c = s[1];
                a.useEffect((function() {
                    r(c)
                }), [r, c]);
                var u = (0, T.Ap)(i.paymentSourceId);
                return null != l ? (0, n.jsxs)(N.PO, {
                    className: U().invoice,
                    children: [(0, n.jsx)(w.By, {
                        invoice: l,
                        isPrepaidPaymentSource: u
                    }), (0, n.jsx)(w.nd, {
                        premiumSubscription: t,
                        renewalInvoice: l,
                        isUpdate: !0,
                        isPrepaidPaymentSource: u
                    })]
                }) : (0, n.jsx)(y.Spinner, {})
            }

            function K(e) {
                var t = e.premiumSubscription,
                    r = e.newPlan,
                    i = e.onInvoiceError,
                    o = e.planGroup,
                    s = e.priceOptions,
                    l = e.preventFetch,
                    c = (0, P.usePaymentContext)(),
                    u = c.selectedSkuId,
                    f = c.isGift,
                    d = c.startedPaymentFlowWithPaymentSourcesRef,
                    p = (0, I.Z)().analyticsLocations,
                    h = (0, T.al)(t, r.id, 1, new Set(o)),
                    m = F((0, R.ED)({
                        subscriptionId: t.id,
                        items: h,
                        renewal: !1,
                        applyEntitlements: !0,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: l,
                        analyticsLocations: p,
                        analyticsLocation: S.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                    }), 2),
                    E = m[0],
                    b = m[1],
                    v = F((0, R.ED)({
                        subscriptionId: t.id,
                        items: h,
                        renewal: !0,
                        paymentSourceId: s.paymentSourceId,
                        currency: s.currency,
                        preventFetch: l,
                        analyticsLocations: p,
                        analyticsLocation: S.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    g = v[0],
                    _ = v[1],
                    C = null != b ? b : _;
                a.useEffect((function() {
                    i(C)
                }), [i, C]);
                if (null != C) return (0, n.jsx)(y.FormErrorBlock, {
                    children: C.message
                });
                var A = (0, O.Kp)({
                        isTrial: !1,
                        isGift: f,
                        selectedSkuId: u,
                        startedPaymentFlowWithPaymentSources: d.current
                    }),
                    j = (0, O.$g)(A, E, r);
                if (null == E || null == g || j) return (0, n.jsx)(y.Spinner, {
                    className: B().spinner
                });
                var M = (0, T.Ap)(s.paymentSourceId);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(w.hG, {
                        proratedInvoice: E,
                        renewalInvoice: g
                    }), (0, n.jsxs)(N.PO, {
                        className: B().invoice,
                        children: [(0, n.jsx)(N.q9, {
                            children: k.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, n.jsx)(w.Lu, {
                            invoice: E,
                            newPlan: r,
                            isPrepaidPaymentSource: M
                        }), (0, n.jsx)(w.nd, {
                            premiumSubscription: t,
                            proratedInvoice: E,
                            renewalInvoice: g,
                            isUpdate: !0,
                            isPrepaidPaymentSource: M
                        })]
                    })]
                })
            }

            function V(e) {
                var t, r, i, o = e.premiumSubscription,
                    s = e.newPlan,
                    l = e.onInvoiceError,
                    c = e.planGroup,
                    u = e.priceOptions,
                    f = e.preventFetch,
                    d = e.disabled,
                    p = e.isEEA,
                    h = e.paymentSources,
                    m = e.setHasAcceptedTerms,
                    b = (0, I.Z)().analyticsLocations,
                    P = (0, T.al)(o, s.id, 1, new Set(c)),
                    g = F((0, R.ED)({
                        subscriptionId: o.id,
                        items: P,
                        renewal: !0,
                        paymentSourceId: u.paymentSourceId,
                        currency: u.currency,
                        preventFetch: f,
                        analyticsLocations: b,
                        analyticsLocation: S.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    }), 2),
                    O = g[0],
                    _ = g[1];
                a.useEffect((function() {
                    l(_)
                }), [l, _]);
                if (null != _) return (0, n.jsx)(y.FormErrorBlock, {
                    children: _.message
                });
                null != O && (r = {
                    amount: O.total,
                    currency: O.currency,
                    tax: O.tax,
                    taxInclusive: O.taxInclusive
                });
                return null == r ? null : (0, n.jsx)(v.Z, {
                    onChange: m,
                    finePrint: (0, n.jsx)(E.Z, {
                        subscriptionPlan: s,
                        paymentSourceType: null === (t = h[null !== (i = u.paymentSourceId) && void 0 !== i ? i : ""]) || void 0 === t ? void 0 : t.type,
                        basePrice: r,
                        currentSubscription: o,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: s.currency !== Z.pKx.USD,
                    showWithdrawalWaiver: p,
                    disabled: d,
                    subscriptionPlan: s,
                    currentSubscription: o,
                    planGroup: c
                })
            }

            function Q(e) {
                var t, r = e.premiumSubscription,
                    a = e.newPlan,
                    i = e.planGroup,
                    o = e.priceOptions,
                    s = e.preventFetch,
                    l = (0, I.Z)().analyticsLocations,
                    c = F((0, R.ED)({
                        subscriptionId: r.id,
                        items: (0, T.al)(r, a.id, 1, new Set(i)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: o.paymentSourceId,
                        currency: o.currency,
                        preventFetch: s,
                        analyticsLocations: l,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    }), 2),
                    u = c[0],
                    f = c[1];
                if (null != f) return (0, n.jsx)(y.FormErrorBlock, {
                    children: f.message
                });
                if (null == u) return (0, n.jsx)("div", {
                    children: (0, n.jsx)(y.Spinner, {})
                });
                t = r.type === Z.NYc.PREMIUM ? (0, T.Gf)(a.id) : a.name;
                var d = (0, T.Ap)(o.paymentSourceId);
                return (0, n.jsxs)("div", {
                    className: B().bodyText,
                    children: [(0, n.jsx)("div", {
                        className: U().renewalInvoiceDate,
                        children: k.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: u.subscriptionPeriodStart
                        })
                    }), (0, n.jsxs)(N.PO, {
                        className: B().invoice,
                        children: [(0, n.jsx)(N.q9, {
                            children: k.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, n.jsx)(N.R$, {
                            label: t,
                            value: (0, T.PK)(a, o, !0)
                        }), (0, n.jsx)(M.Z, {
                            invoice: u
                        }), (0, n.jsx)(N.KU, {}), (0, n.jsx)(w.nd, {
                            premiumSubscription: r,
                            renewalInvoice: u,
                            isUpdate: !0,
                            isPrepaidPaymentSource: d
                        })]
                    })]
                })
            }
            var z = r(83471),
                $ = r(881712),
                q = r(328535),
                J = r(318715),
                X = r(19120),
                ee = r(560213),
                te = r(908434),
                re = r(325213),
                ne = r(750203),
                ae = r(856236),
                ie = r(575641),
                oe = r(51496),
                se = r.n(oe);

            function le(e) {
                var t = e.sku,
                    r = e.skuPricePreview;
                o()(null != r.amount, "SKU must have a price set.");
                var a = r.amount - r.tax;
                return !r.tax_inclusive && r.tax > 0 ? (0, n.jsxs)(N.PO, {
                    className: se().invoice,
                    children: [(0, n.jsx)(N.R$, {
                        label: t.name,
                        value: (0, ie.T4)(a, r.currency),
                        className: se().subscriptionCostRow
                    }), (0, n.jsx)(N.R$, {
                        label: k.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, ie.T4)(r.tax, r.currency),
                        className: se().subscriptionCostRow
                    }), (0, n.jsx)(N.KU, {}), (0, n.jsx)(N.Ji, {
                        label: k.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, ie.T4)(r.amount, r.currency),
                        className: se().subscriptionCostRow
                    })]
                }) : (0, n.jsx)(N.PO, {
                    className: se().invoice,
                    children: (0, n.jsx)(N.R$, {
                        label: t.name,
                        value: (0, ie.T4)(r.amount, r.currency),
                        className: se().subscriptionCostRow
                    })
                })
            }

            function ce(e) {
                var t = e.application,
                    r = e.sku;
                return !0 !== e.isEmbeddedIAP ? null : (0, n.jsxs)("div", {
                    className: se().skuHeading,
                    children: [(0, n.jsx)(ne.Z, {
                        game: t
                    }), (0, n.jsx)(y.Heading, {
                        variant: "heading-lg/bold",
                        className: se().skuHeadingText,
                        children: r.name
                    })]
                })
            }

            function ue(e) {
                var t = e.hasLegalTermsFlash,
                    r = e.legalTermsNodeRef,
                    a = e.onPaymentSourceChange,
                    i = e.handlePaymentSourceAdd,
                    s = (0, P.usePaymentContext)(),
                    l = s.application,
                    c = s.purchaseState,
                    u = s.paymentSources,
                    f = s.paymentSourceId,
                    d = s.setHasAcceptedTerms,
                    h = s.skusById,
                    m = s.skuPricePreviewsById,
                    S = s.selectedSkuId,
                    I = s.isEmbeddedIAP,
                    O = s.purchaseType;
                o()(null != S, "Expected selectedSkuId");
                var A = h[S],
                    T = m[S],
                    j = null != f ? f : te.c,
                    R = null != T ? T[j] : null;
                o()(null != A, "SKU must exist and be fetched.");
                o()(null != l, "Application must exist.");
                var N = (0, J.ZP)([ee.Z, re.Z], (function() {
                        return re.Z.inTestModeForApplication(l.id) || ee.Z.inDevModeForApplication(l.id)
                    }), [l.id]),
                    M = (0, J.ZP)([_.Z], (function() {
                        return _.Z.enabled
                    })),
                    L = p.M.EEA_COUNTRIES.has(C.Z.ipCountryCodeWithFallback),
                    w = c === g.A.PURCHASING || c === g.A.COMPLETED,
                    D = null != f ? u[f].type : null;
                return (0, n.jsxs)("div", {
                    className: se().stepBody,
                    children: [N && (0, n.jsx)(X.Z, {
                        icon: ae.Z,
                        iconSize: X.Z.Sizes.SMALL,
                        color: X.Z.Colors.WARNING,
                        className: se().errorBlock,
                        children: k.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, n.jsx)(ce, {
                        application: l,
                        sku: A,
                        isEmbeddedIAP: I
                    }), (0, n.jsx)(y.FormTitle, {
                        tag: y.FormTitleTags.H5,
                        children: k.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == R ? (0, n.jsx)(y.Spinner, {
                        type: y.Spinner.Type.WANDERING_CUBES,
                        className: se().invoiceSpinner
                    }) : (0, n.jsx)(le, {
                        sku: A,
                        skuPricePreview: R
                    }), (0, n.jsxs)("div", {
                        className: se().paymentSourceWrapper,
                        children: [(0, n.jsx)(y.FormTitle, {
                            tag: y.FormTitleTags.H5,
                            children: k.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, n.jsx)(b.Z, {
                            paymentSources: Object.values(u),
                            selectedPaymentSourceId: f,
                            onChange: a,
                            onPaymentSourceAdd: i,
                            hidePersonalInformation: M
                        })]
                    }), (0, n.jsx)(x.Z, {
                        isActive: t,
                        ref: r,
                        children: (0, n.jsx)(v.Z, {
                            onChange: d,
                            forceShow: !0,
                            showWithdrawalWaiver: L,
                            disabled: w,
                            subscriptionPlan: null,
                            finePrintClassname: se().fineprint,
                            purchaseType: O,
                            checkboxLabel: A.productLine === Z.POd.COLLECTIBLES ? k.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: Z.EYA.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, n.jsx)(E.Z, {
                                paymentSourceType: D,
                                isEmbeddedIAP: I,
                                purchaseType: O,
                                productLine: A.productLine
                            })
                        })
                    })]
                })
            }
            var fe = r(128059),
                de = r(149096),
                pe = r(203600),
                he = r(520453);

            function ye(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function me(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ye(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ye(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ee(e) {
                var t, r = e.handleStepChange,
                    i = e.trialId,
                    p = e.trialFooterMessageOverride,
                    h = e.reviewWarningMessage,
                    y = e.planGroup,
                    m = e.openInvoiceId,
                    E = e.analyticsData,
                    b = e.analyticsLocation,
                    v = e.giftMessage,
                    S = e.customGiftMessage,
                    I = e.referralTrialOfferId,
                    g = e.initialPlanId,
                    _ = e.subscriptionTier,
                    C = (0,
                        P.usePaymentContext)(),
                    A = C.activeSubscription,
                    T = C.setUpdatedSubscription,
                    j = C.contextMetadata,
                    R = C.currencies,
                    N = C.isGift,
                    M = C.paymentSourceId,
                    x = C.paymentSources,
                    L = C.priceOptions,
                    w = C.purchaseError,
                    Z = C.purchaseTokenAuthState,
                    D = C.selectedPlan,
                    U = C.selectedSkuId,
                    G = C.setCurrency,
                    B = C.setPaymentSourceId,
                    H = C.setPurchaseState,
                    F = C.setPurchaseError,
                    W = C.step,
                    K = C.purchaseState,
                    V = C.isPremium,
                    Q = C.selectedGiftStyle,
                    J = C.setHasAcceptedTerms,
                    X = C.purchaseType,
                    ee = C.setEntitlementsGranted,
                    te = C.startedPaymentFlowWithPaymentSourcesRef;
                o()(null != W, "Step should be set");
                var re, ne = a.useRef(null),
                    ae = me((0, s.Z)(!1, 500), 2),
                    ie = ae[0],
                    oe = ae[1],
                    se = null !== (re = null != i ? i : I) && void 0 !== re ? re : null,
                    le = null == se || V && !pe.nG[se].skus.includes(U) ? null : se,
                    ce = (0, u.N)(I),
                    ye = (0, c.Ng)(),
                    Ee = {
                        user_trial_offer_id: null == ce ? void 0 : ce.id
                    };
                a.useEffect((function() {
                    null != w && null != ne.current && ne.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }), [w]);
                var be, ve = a.useCallback((function(e, t) {
                        T(e);
                        null != t && ee(t);
                        r(z.h8.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: t
                            }
                        })
                    }), [r, T, ee]),
                    Se = null != M ? x[M] : null,
                    Ie = null != D && pe.o4.has(D.id) && null != Se && !(0, l.aQ)(Se) ? new Error(k.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    Pe = a.useRef(null),
                    ge = me(a.useState(null), 2),
                    Oe = ge[0],
                    _e = ge[1],
                    Ce = !N && null != ce && null != U && pe.nG[ce.trial_id].skus.includes(U),
                    Ae = null == ye || null === (t = ye.discount) || void 0 === t ? void 0 : t.plan_ids,
                    Te = !N && null != ye && null != Ae && null != D && Ae.includes(D.id),
                    je = null == g && null == _ && X === he.GZ.SUBSCRIPTION,
                    Re = (0, O.Kp)({
                        isTrial: Ce,
                        isGift: N,
                        selectedSkuId: U,
                        startedPaymentFlowWithPaymentSources: te.current
                    });
                if (X === he.GZ.ONE_TIME) be = (0, n.jsx)(ue, {
                    hasLegalTermsFlash: ie,
                    legalTermsNodeRef: Pe,
                    onPaymentSourceChange: function(e) {
                        return B(null != e ? e.id : null)
                    },
                    handlePaymentSourceAdd: function() {
                        return r(z.h8.ADD_PAYMENT_STEPS)
                    }
                });
                else if (null == A || N) {
                    o()(null != D, "Expected plan to be selected");
                    be = (0, n.jsx)(f.Z, {
                        selectedPlanId: D.id,
                        isGift: N,
                        paymentSources: x,
                        onPaymentSourceChange: function(e) {
                            return B(null != e ? e.id : null)
                        },
                        priceOptions: L,
                        currencies: R,
                        onCurrencyChange: function(e) {
                            return G(e)
                        },
                        handlePaymentSourceAdd: function() {
                            return r(z.h8.ADD_PAYMENT_STEPS)
                        },
                        setHasAcceptedTerms: J,
                        legalTermsNodeRef: Pe,
                        hasLegalTermsFlash: ie,
                        trialId: le,
                        trialFooterMessageOverride: p,
                        reviewWarningMessage: h,
                        purchaseState: K,
                        referralTrialOfferId: I,
                        isTrial: Ce,
                        isDiscount: Te
                    })
                } else {
                    o()(null != D, "Expected plan to be selected");
                    be = (0, n.jsx)(Y, {
                        premiumSubscription: A,
                        paymentSources: x,
                        priceOptions: L,
                        onPaymentSourceChange: function(e) {
                            B(null != e ? e.id : null)
                        },
                        onPaymentSourceAdd: function() {
                            r(z.h8.ADD_PAYMENT_STEPS)
                        },
                        planId: D.id,
                        setHasAcceptedTerms: J,
                        legalTermsNodeRef: Pe,
                        hasLegalTermsFlash: ie,
                        onInvoiceError: function(e) {
                            return _e(e)
                        },
                        planGroup: y,
                        currencies: R,
                        onCurrencyChange: function(e) {
                            return G(e)
                        },
                        hasOpenInvoice: null != m,
                        purchaseState: K
                    })
                }
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)($.P, {
                        giftMessage: v
                    }), (0, n.jsx)(fe.Z, {
                        isEligibleForTrial: Ce
                    }), (0, n.jsxs)(de.C3, {
                        children: [(0, n.jsx)(q.Z, {}), be]
                    }), (0, n.jsx)(de.O3, {
                        children: (0, n.jsx)(d.Z, {
                            premiumSubscription: null != A ? A : null,
                            setPurchaseState: H,
                            onBack: function() {
                                return r(Re ? z.h8.SKU_SELECT : z.h8.PLAN_SELECT)
                            },
                            onNext: ve,
                            onPurchaseError: function(e) {
                                return F(e)
                            },
                            legalTermsNodeRef: Pe,
                            flashLegalTerms: function() {
                                return oe(!0)
                            },
                            invoiceError: Oe,
                            planError: Ie,
                            analyticsLocation: b,
                            baseAnalyticsData: E,
                            flowStartTime: j.startTime,
                            isGift: N,
                            giftStyle: Q,
                            customGiftMessage: S,
                            trialId: le,
                            planGroup: y,
                            purchaseTokenAuthState: Z,
                            openInvoiceId: m,
                            backButtonEligible: Re ? je && V : V,
                            metadata: Ee,
                            isTrial: Ce,
                            disablePurchase: null != Se && X === he.GZ.SUBSCRIPTION && Ce && he.H0.has(Se.type)
                        })
                    })]
                })
            }
        },
        881712: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => f
            });
            var n = r(785893),
                a = (r(667294), r(19120)),
                i = r(832520),
                o = r(644144),
                s = r(782786),
                l = r(473708),
                c = r(169795),
                u = r.n(c);

            function f(e) {
                var t = e.giftMessage,
                    r = void 0 === t ? l.Z.Messages.PREMIUM_PAYMENT_IS_GIFT : t,
                    c = (0, s.usePaymentContext)(),
                    f = c.isGift,
                    d = c.giftRecipient;
                return !1 === f || (0, o.a8)(d) ? null : (0, n.jsx)(a.Z, {
                    className: u().paymentNote,
                    iconSize: a.Z.Sizes.SMALL,
                    icon: i.Z,
                    color: null == r ? a.Z.Colors.PRIMARY : a.Z.Colors.SECONDARY,
                    children: r
                })
            }
        },
        786763: (e, t, r) => {
            "use strict";
            r.r(t);
            r.d(t, {
                PremiumPaymentModal: () => Qe,
                STEPS: () => qe,
                default: () => Je
            });
            var n = r(785893),
                a = r(667294),
                i = r(202351),
                o = r(744564),
                s = r(810978),
                l = r(153686),
                c = r(19585),
                u = r(486531),
                f = r(551778),
                d = r(536392),
                p = r(644144),
                h = r(782786),
                y = r(83471),
                m = r(586611),
                E = r(986304),
                b = r(493957),
                v = r(228721),
                S = r(281110),
                I = r(673679),
                P = r(585622),
                g = r(70418),
                O = r(509897),
                _ = r(107364),
                C = r(473708),
                A = function() {
                    return (0, n.jsx)("div", {
                        children: (0, n.jsx)(g.Heading, {
                            variant: "heading-xl/bold",
                            children: C.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                        })
                    })
                },
                T = function(e) {
                    var t = e.onStepChange,
                        r = e.onBackClick;
                    return (0, n.jsx)("div", {
                        children: (0, n.jsxs)(g.ModalFooter, {
                            justify: _.Z.Justify.BETWEEN,
                            align: _.Z.Align.CENTER,
                            children: [(0, n.jsx)(g.Button, {
                                color: g.Button.Colors.BRAND,
                                onClick: function() {
                                    t(y.h8.ADD_PAYMENT_STEPS)
                                },
                                children: C.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, n.jsx)(O.Z, {
                                onClick: r
                            })]
                        })
                    })
                },
                j = r(887753),
                R = r(128059),
                N = r(149096),
                M = r(2590),
                x = r(203600);

            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return L(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return L(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(e) {
                var t = e.handleStepChange,
                    r = (0, h.usePaymentContext)(),
                    i = r.selectedPlan,
                    o = r.isGift,
                    s = r.browserCheckoutState,
                    l = r.browserCheckoutStateLoadId,
                    c = r.contextMetadata,
                    u = w(a.useState(!1), 2),
                    f = u[0],
                    d = u[1];
                a.useEffect((function() {
                    if (!f) {
                        d(!0);
                        (0, I.r5)(c.loadId);
                        var e;
                        ! function(e, t, r, n) {
                            var a = M.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, r),
                                i = new URL(P.Z.makeUrl(M.Z5c.BILLING_LOGIN_HANDOFF)),
                                o = (0, v.Z)();
                            i.searchParams.append("handoff_key", o);
                            i.searchParams.append("redirect_to", a);
                            S.ZP.post({
                                url: M.ANM.HANDOFF,
                                body: {
                                    key: o
                                },
                                oldFormErrors: !0
                            }).then((function(e) {
                                i.searchParams.append("handoff_token", e.body.handoff_token);
                                window.open(i.href)
                            }), (function() {
                                n()
                            }))
                        }(null !== (e = null == i ? void 0 : i.id) && void 0 !== e ? e : x.Xh.PREMIUM_MONTH_TIER_2, o, c.loadId, (function() {
                            return t(y.h8.ADD_PAYMENT_STEPS)
                        }))
                    }
                }), [i, o, f, d, c, t]);
                a.useEffect((function() {
                    l === c.loadId && s === j.Y.DONE && t(y.h8.CONFIRM)
                }), [s, l, c, t]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(R.Z, {}), (0, n.jsx)(N.C3, {
                        children: (0, n.jsx)(A, {})
                    }), (0, n.jsx)(N.O3, {
                        children: (0, n.jsx)(T, {
                            onStepChange: t,
                            onBackClick: function() {
                                return t(y.h8.PLAN_SELECT)
                            }
                        })
                    })]
                })
            }
            var k = r(806706),
                D = r(366366),
                U = r(260561);
            const G = (0, U.B)({
                kind: "user",
                id: "2023-08_checkout_aa_test",
                label: "Checkout AA Test",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var B = r(441143),
                H = r.n(B),
                F = r(467345),
                Y = (0, U.B)({
                    kind: "user",
                    id: "2023-07_automated_gift_code_message",
                    label: "Automatically send gift code message in direct message to gift recipient",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show the automated gift code message",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                W = r(637700),
                K = r(530562),
                V = r(328535);

            function Q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Q(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Q(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function $(e) {
                var t, r = e.handleClose,
                    i = e.planGroup,
                    o = e.onSubscriptionConfirmation,
                    s = e.renderPurchaseConfirmation,
                    l = e.postSuccessGuild,
                    c = e.followupSKUInfo,
                    u = (0,
                        h.usePaymentContext)(),
                    f = u.activeSubscription,
                    d = u.isGift,
                    y = u.paymentSources,
                    m = u.paymentSourceId,
                    E = u.selectedPlan,
                    b = u.selectedSkuId,
                    v = u.step,
                    S = u.updatedSubscription,
                    I = u.selectedGiftStyle,
                    P = u.startingPremiumSubscriptionPlanIdRef;
                H()(null != E, "Expected plan to selected");
                H()(null != b, "Expected selectedSkuId");
                H()(null != v, "Step should be set");
                var g = a.useCallback((function() {
                        r();
                        null == o || o()
                    }), [r, o]),
                    O = (0, h.usePaymentContext)().giftRecipient,
                    _ = (0, p.E5)(b, d),
                    C = z(a.useState(!1), 2),
                    A = C[0],
                    T = C[1],
                    j = z(a.useState(!1), 2),
                    R = j[0],
                    M = j[1],
                    x = z(a.useState(), 2),
                    L = x[0],
                    w = x[1];
                a.useEffect((function() {
                    if (d && null != O && null != _ && !A && !R && !(0, p.a8)(O)) {
                        if (Y.getCurrentConfig({
                                location: "36b986_1"
                            }).enabled) {
                            M(!0);
                            (0, F.YD)(O, _).then((function() {
                                M(!1);
                                null == o || o();
                                T(!0)
                            })).catch((function(e) {
                                M(!1);
                                w(e);
                                T(!0)
                            }))
                        }
                    }
                }), [d, O, _, A, T, M, R, w, o]);
                if (null != s) t = s(E, g, S);
                else if (d) t = (0, n.jsx)(W.T, {
                    planId: E.id,
                    selectedGiftStyle: I,
                    onClose: g,
                    hasSentMessage: A,
                    giftMessageError: L,
                    isSendingMessage: R
                });
                else if (P.current === E.id) {
                    var Z;
                    t = (0,
                        n.jsx)(W.Z, {
                        planId: E.id,
                        postSuccessGuild: l,
                        onClose: g,
                        paymentSourceType: null === (Z = y[null != m ? m : ""]) || void 0 === Z ? void 0 : Z.type
                    })
                } else {
                    var k;
                    t = (0, n.jsx)(W.Z, {
                        followupSKUInfo: c,
                        startingPremiumSubscriptionPlanId: P.current,
                        planId: E.id,
                        onClose: g,
                        isDowngrade: null != f && (0, K.GY)(f, E.id, i),
                        paymentSourceType: null === (k = y[null != m ? m : ""]) || void 0 === k ? void 0 : k.type
                    })
                }
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(N.C3, {
                        children: [(0, n.jsx)(V.Z, {}), t]
                    })
                })
            }
            var q = r(268226),
                J = r(318715),
                X = r(246380),
                ee = r(471450),
                te = r(100749),
                re = r(621270),
                ne = r(817584),
                ae = r(344266),
                ie = r(717035),
                oe = r(832520),
                se = r(611274),
                le = r(337267),
                ce = r.n(le),
                ue = r(171032),
                fe = r.n(ue);
            const de = function(e) {
                var t = e.isGift,
                    r = e.plan,
                    a = (0, se.Vi)();
                return t || (null == r ? void 0 : r.skuId) !== x.Si.TIER_2 || !a ? null : (0, n.jsxs)("div", {
                    className: ce().bannerContainer,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        className: ce().banner,
                        src: fe()
                    }), (0, n.jsxs)("div", {
                        className: ce().textContainer,
                        children: [(0, n.jsx)(oe.Z, {
                            className: ce().giftIcon
                        }), (0, n.jsx)(g.Heading, {
                            className: ce().textHeader,
                            color: "always-white",
                            variant: "heading-deprecated-12/extrabold",
                            children: C.Z.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER
                        })]
                    })]
                })
            };
            var pe = r(311556),
                he = r(473903),
                ye = r(348592),
                me = r(116094),
                Ee = r(28648),
                be = r(881712),
                ve = r(562539),
                Se = r.n(ve);

            function Ie(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Pe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ie(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ie(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ge(e) {
                var t, r = e.giftMessage,
                    i = e.handleStepChange,
                    o = e.initialPlanId,
                    s = e.subscriptionTier,
                    l = e.trialId,
                    c = e.referralTrialOfferId,
                    u = e.customGiftMessage,
                    d = e.setCustomGiftMessage,
                    m = (0, h.usePaymentContext)(),
                    E = m.activeSubscription,
                    b = m.hasFetchedSubscriptions,
                    v = m.isGift,
                    S = m.paymentSourceId,
                    I = m.paymentSources,
                    P = m.selectedSkuId,
                    O = m.selectedPlan,
                    A = m.step,
                    T = m.defaultPlanId,
                    j = m.priceOptions,
                    L = m.isPremium,
                    w = m.selectedGiftStyle,
                    Z = m.setSelectedGiftStyle,
                    k = m.giftRecipient,
                    D = re.ZP.useExperiment({
                        location: "d17fd6_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    U = (0, re.rK)();
                a.useEffect((function() {
                    U && v && re.ZP.trackExposure({
                        location: "d17fd6_2"
                    })
                }), [U, v]);
                var G, B, F = D && U && v && P === x.Si.TIER_2,
                    Y = null != S ? I[S] : null,
                    W = ee.ZP.useExperiment({
                        location: "d17fd6_3"
                    }, {
                        autoTrackExposure: !1
                    }).newPlans,
                    K = (0, J.ZP)([he.default], (function() {
                        return he.default.getCurrentUser()
                    })),
                    Q = !v && null != P && P === x.Si.TIER_2 && null != K && K.hasHadPremium() && b && null == E && (0, ee.aQ)(Y),
                    z = (0, ie.N)(c),
                    $ = !v && null != z && null != P && x.nG[z.trial_id].skus.includes(P),
                    q = (0, ae.Ng)(),
                    oe = null == q || null === (t = q.discount) || void 0 === t ? void 0 : t.plan_ids.some((function(e) {
                        return x.GP[e].skuId === P
                    })),
                    se = !v && null != q && null != P && oe,
                    le = null !== (G = $ || se) && void 0 !== G && G,
                    ce = ne.k.useExperiment({
                        location: "d17fd6_4"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    ue = a.useMemo((function() {
                        return (0, me.V7)({
                            skuId: P,
                            isPremium: L,
                            multiMonthPlans: Q ? W : [],
                            currentSubscription: E,
                            isGift: v,
                            isEligibleForTrial: $,
                            defaultPlanId: T,
                            defaultToMonthlyPlan: ce
                        })
                    }), [P, L, W, E, Q, v, $, T, ce]),
                    fe = null == o && null == s,
                    ve = se && ue.includes(x.Xh.PREMIUM_MONTH_TIER_2) ? x.Xh.PREMIUM_MONTH_TIER_2 : ue[0],
                    Ie = (0, J.ZP)([f.Z], (function() {
                        return f.Z.get(ve)
                    })),
                    ge = [{
                        planId: null == Ie ? void 0 : Ie.id,
                        quantity: 1
                    }],
                    Oe = Pe(a.useState(le), 2),
                    _e = Oe[0],
                    Ce = Oe[1],
                    Ae = Pe((0, te.ED)({
                        items: ge,
                        renewal: !1,
                        preventFetch: !le,
                        applyEntitlements: !0,
                        trialId: l,
                        paymentSourceId: j.paymentSourceId,
                        currency: j.currency
                    }), 2),
                    Te = Ae[0],
                    je = Ae[1];
                a.useEffect((function() {
                    le && Ce(null == (null == Te ? void 0 : Te.subscriptionPeriodEnd))
                }), [Te, le]);
                (0, X.Z)("Payment Modal Plan Select Step", _e, 5, {
                    proratedInvoicePreview: Te,
                    proratedInvoiceError: je,
                    isEligibleForOffer: le
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                var Re = null !== (B = null == je ? void 0 : je.message) && void 0 !== B ? B : C.Z.Messages.ERROR_GENERIC_TITLE,
                    Ne = le && null == je,
                    Me = le && null != je;
                if (Ne && null == (null == Te ? void 0 : Te.subscriptionPeriodEnd)) return (0, n.jsx)(Ee.Z, {});
                H()(null != A, "Step should be set");
                H()(ue.length > 0, "Premium plan options should be set");
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(be.P, {
                        giftMessage: r
                    }), !(0, p.a8)(k) && (0, n.jsx)(R.Z, {
                        isEligibleForTrial: $
                    }), (0, n.jsxs)(N.C3, {
                        children: [Ne && (0, n.jsx)("hr", {
                            className: Se().planSelectSeparatorUpper
                        }), (0, n.jsx)(de, {
                            isGift: v,
                            plan: O
                        }), (0,
                            n.jsx)(V.Z, {}), Me ? (0, n.jsx)(g.FormErrorBlock, {
                            children: Re
                        }) : (0, n.jsx)(pe.O, {
                            isGift: v,
                            selectedGiftStyle: w,
                            setSelectedGiftStyle: Z,
                            planOptions: ue,
                            eligibleForMultiMonthPlans: Q,
                            isSeasonalGift: F,
                            referralTrialOfferId: c,
                            selectedPlanId: null == O ? void 0 : O.id,
                            subscriptionPeriodEnd: null == Te ? void 0 : Te.subscriptionPeriodEnd,
                            customGiftMessage: u,
                            setCustomGiftMessage: d,
                            discountInvoiceItems: se ? null == Te ? void 0 : Te.invoiceItems : void 0
                        }), Ne && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("hr", {
                                className: Se().planSelectSeparatorLower
                            }), (0, n.jsx)(g.Text, {
                                variant: "text-xs/normal",
                                children: C.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: ye.Z.getArticleURL(M.BhN.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, n.jsx)(N.O3, {
                        children: (0, n.jsx)(g.ModalFooter, {
                            justify: _.Z.Justify.BETWEEN,
                            align: _.Z.Align.CENTER,
                            children: (0, n.jsx)(pe.M, {
                                onStepChange: i,
                                isGift: v,
                                onBackClick: function() {
                                    return i(y.h8.SKU_SELECT)
                                },
                                showBackButton: fe,
                                planOptions: ue,
                                shouldRenderUpdatedPaymentModal: Ne,
                                isTrial: $
                            })
                        })
                    })]
                })
            }
            var Oe = r(668900),
                _e = r(250361),
                Ce = r(904729),
                Ae = r.n(Ce);

            function Te(e) {
                var t = e.onClick,
                    r = e.isGift;
                return (0, n.jsx)(g.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, n.jsx)(_e.wp, {
                        className: Ae().tier2MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: r
                    })
                })
            }

            function je(e) {
                var t = e.onClick,
                    r = e.isGift;
                return (0, n.jsx)(g.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, n.jsx)(_e.Gq, {
                        className: Ae().tier0MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: r
                    })
                })
            }
            const Re = function(e) {
                var t = e.onSelectSku,
                    r = e.isGift;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(Te, {
                        onClick: function() {
                            return t(x.Si.TIER_2)
                        },
                        isGift: r
                    }), (0, n.jsx)(je, {
                        onClick: function() {
                            return t(x.Si.TIER_0)
                        },
                        isGift: r
                    })]
                })
            };
            var Ne = r(510142),
                Me = r(545838),
                xe = r.n(Me);

            function Le(e) {
                var t = e.handleStepChange,
                    r = e.handleClose,
                    a = e.referralTrialOfferId,
                    i = (0,
                        h.usePaymentContext)(),
                    o = i.setSelectedSkuId,
                    s = i.activeSubscription,
                    l = i.isGift,
                    c = i.startedPaymentFlowWithPaymentSourcesRef,
                    u = i.setSelectedPlanId,
                    f = (0, ie.N)(a);
                return (0, n.jsx)(we, {
                    selectSku: function(e) {
                        return function(e) {
                            var t = e.activeSubscription,
                                r = e.newSkuId,
                                n = e.setSelectedSkuId,
                                a = e.handleStepChange,
                                i = e.isGift,
                                o = e.userTrialOffer,
                                s = e.setSelectedPlanId,
                                l = e.startedPaymentFlowWithPaymentSources;
                            n(r);
                            var c = y.h8.PLAN_SELECT,
                                u = (0, me.k5)(t);
                            u !== x.Si.TIER_1 && u !== x.Si.TIER_2 || r !== x.Si.TIER_0 || i || (c = y.h8.WHAT_YOU_LOSE);
                            var f = (0, Ne.T)({
                                    userTrialOffer: o,
                                    isGift: i,
                                    skuId: r
                                }),
                                d = (0, q.Kp)({
                                    isTrial: f,
                                    isGift: i,
                                    selectedSkuId: r,
                                    startedPaymentFlowWithPaymentSources: l
                                });
                            if (c !== y.h8.WHAT_YOU_LOSE && d) {
                                c = y.h8.REVIEW;
                                s((0, q.nA)(r, t))
                            }
                            a(c, {
                                analyticsDataOverride: {
                                    sku_id: r
                                }
                            })
                        }({
                            activeSubscription: s,
                            newSkuId: e,
                            setSelectedSkuId: o,
                            handleStepChange: t,
                            isGift: l,
                            userTrialOffer: f,
                            startedPaymentFlowWithPaymentSources: c.current,
                            setSelectedPlanId: u
                        })
                    },
                    onClose: r,
                    isGift: l
                })
            }

            function we(e) {
                var t = e.selectSku,
                    r = e.onClose,
                    a = e.isGift;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(g.ModalHeader, {
                        className: xe().skuSelectModalHeader,
                        separator: !1,
                        children: [(0, n.jsx)(g.FormTitle, {
                            tag: g.FormTitleTags.H4,
                            children: C.Z.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, n.jsx)(g.ModalCloseButton, {
                            onClick: r
                        })]
                    }), (0, n.jsxs)(g.ModalContent, {
                        className: xe().skuSelectModalContent,
                        children: [(0, n.jsx)(Oe.Z, {
                            fromBoostCancelModal: !1,
                            className: xe().legacyPricingNotice
                        }), (0, n.jsx)(Re, {
                            onSelectSku: t,
                            isGift: a
                        })]
                    })]
                })
            }
            var Ze = r(575945),
                ke = r(74535),
                De = r(396546),
                Ue = r(666209),
                Ge = r.n(Ue);

            function Be(e) {
                var t = e.handleStepChange,
                    r = e.handleClose,
                    a = (0, ke.ZP)(),
                    i = (0, h.usePaymentContext)(),
                    o = i.activeSubscription,
                    s = i.selectedSkuId,
                    l = i.setSelectedPlanId,
                    c = i.isGift,
                    u = i.startedPaymentFlowWithPaymentSourcesRef,
                    f = null != o ? (0, me.Af)(o) : null,
                    d = null != f ? (0, me.gq)(f.planId) : null,
                    p = null != f ? (0, me.Rd)(f.planId) : null,
                    m = (0, q.Kp)({
                        isTrial: !1,
                        isGift: c,
                        selectedSkuId: s,
                        startedPaymentFlowWithPaymentSources: u.current
                    });
                H()(null != p, "Expected premium type");
                return (0, n.jsx)(De.Z, {
                    premiumType: p,
                    titleText: C.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: C.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: d
                    }),
                    footer: (0, n.jsxs)("div", {
                        className: Ge().whatYouLoseButtonContainer,
                        children: [(0, n.jsx)(g.Button, {
                            onClick: function() {
                                if (m) {
                                    var e = (0, q.nA)(s, o);
                                    l(e);
                                    t(y.h8.REVIEW)
                                } else t(y.h8.PLAN_SELECT)
                            },
                            children: C.Z.Messages.CONTINUE
                        }), (0, n.jsx)(g.Button, {
                            look: g.Button.Looks.LINK,
                            color: (0, Ze.wj)(a) ? g.Button.Colors.WHITE : g.Button.Colors.PRIMARY,
                            onClick: r,
                            children: C.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })]
                    }),
                    onClose: r,
                    isDowngrade: !0
                })
            }

            function He(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Fe(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Ye(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Fe(e, t, r[t])
                    }))
                }
                return e
            }

            function We(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function Ke(e) {
                return function(e) {
                    if (Array.isArray(e)) return He(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return He(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return He(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Ve = [y.h8.PLAN_SELECT, y.h8.ADD_PAYMENT_STEPS, y.h8.REVIEW, y.h8.CONFIRM];

            function Qe(e) {
                var t = e.analyticsLocation,
                    r = e.analyticsObject,
                    i = e.analyticsSourceLocation,
                    l = e.onComplete,
                    d = e.transitionState,
                    E = e.initialPlanId,
                    b = e.giftMessage,
                    v = e.subscriptionTier,
                    S = e.onClose,
                    I = e.trialId,
                    P = e.isGift,
                    g = void 0 !== P && P,
                    O = e.trialFooterMessageOverride,
                    _ = e.reviewWarningMessage,
                    C = e.openInvoiceId,
                    A = e.onSubscriptionConfirmation,
                    T = e.renderPurchaseConfirmation,
                    j = e.postSuccessGuild,
                    R = e.followupSKUInfo,
                    N = e.renderHeader,
                    L = e.applicationId,
                    w = e.guildId,
                    Z = e.referralTrialOfferId,
                    k = e.skuId,
                    D = e.returnRef,
                    U = (0, c.Z)().analyticsLocations;
                a.useEffect((function() {
                    f.Z.isLoadedForPremiumSKUs() || o.Z.wait((function() {
                        return (0, s.Y2)()
                    }))
                }), []);
                G.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                var B = (0, h.usePaymentContext)(),
                    H = B.giftRecipient,
                    F = B.step,
                    Y = (0, p.a8)(H) && F === y.h8.PLAN_SELECT;
                null != H && u.$.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                });
                return (0, n.jsx)(m.PaymentModal, {
                    analyticsLocations: U,
                    analyticsLocation: t,
                    analyticsObject: r,
                    analyticsSourceLocation: i,
                    analyticsSubscriptionType: M.NYc.PREMIUM,
                    onComplete: l,
                    transitionState: d,
                    initialPlanId: E,
                    giftMessage: b,
                    subscriptionTier: v,
                    onClose: S,
                    trialId: I,
                    isGift: g,
                    trialFooterMessageOverride: O,
                    reviewWarningMessage: _,
                    planGroup: x.Y1,
                    openInvoiceId: C,
                    onSubscriptionConfirmation: A,
                    renderPurchaseConfirmation: T,
                    postSuccessGuild: j,
                    followupSKUInfo: R,
                    renderHeader: N,
                    applicationId: L,
                    guildId: w,
                    referralTrialOfferId: Z,
                    skuId: k,
                    shakeWhilePurchasing: !0,
                    isLargeModal: Y,
                    returnRef: D
                })
            }

            function ze(e) {
                var t = (0,
                        h.usePaymentContext)(),
                    r = t.startedPaymentFlowWithPaymentSourcesRef,
                    n = t.isGift,
                    a = t.selectedSkuId;
                return (0, q.Kp)({
                    isTrial: null != e && e,
                    isGift: n,
                    selectedSkuId: a,
                    startedPaymentFlowWithPaymentSources: r.current
                })
            }

            function $e(e) {
                var t = e.initialPlanId,
                    r = e.handleStepChange,
                    a = e.referralTrialOfferId,
                    i = (0, h.usePaymentContext)(),
                    o = i.paymentSources,
                    s = i.selectedSkuId,
                    l = i.isGift,
                    c = ze((0, Ne.Z)({
                        isGift: l,
                        skuId: s,
                        referralTrialOfferId: a
                    }));
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(E.J, We(Ye({}, e), {
                        breadcrumbSteps: Ve,
                        onReturn: function() {
                            var e = Object.values(o).length < 1 && null == t ? y.h8.PLAN_SELECT : y.h8.REVIEW;
                            c && (e = y.h8.REVIEW);
                            r(e, {
                                trackedFromStep: y.h8.PAYMENT_TYPE
                            })
                        }
                    }))
                })
            }
            var qe = [{
                key: null,
                renderStep: function(e) {
                    return (0, n.jsx)(m.PaymentPredicateStep, Ye({}, e))
                }
            }, {
                key: y.h8.SKU_SELECT,
                renderStep: function(e) {
                    return (0, n.jsx)(Le, Ye({}, e))
                },
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: y.h8.WHAT_YOU_LOSE,
                renderStep: function(e) {
                    return (0, n.jsx)(Be, Ye({}, e))
                },
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: y.h8.PLAN_SELECT,
                renderStep: function(e) {
                    return (0, n.jsx)(ge, Ye({}, e))
                },
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: function(e) {
                        return ze(e) ? null : C.Z.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: y.h8.ADD_PAYMENT_STEPS,
                renderStep: function(e) {
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)($e, Ye({}, e))
                    })
                },
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: function(e) {
                        return ze(e) ? null : C.Z.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: y.h8.AWAITING_BROWSER_CHECKOUT,
                renderStep: function(e) {
                    return (0, n.jsx)(Z, Ye({}, e))
                }
            }, {
                key: y.h8.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: function() {
                    return (0, n.jsx)(k.Z, {})
                }
            }, {
                key: y.h8.AWAITING_AUTHENTICATION,
                renderStep: function() {
                    return (0, n.jsx)(b.Z, {})
                }
            }, {
                key: y.h8.REVIEW,
                renderStep: function(e) {
                    return (0, n.jsx)(D.l, Ye({}, e))
                },
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: function(e) {
                        return ze(e) ? C.Z.Messages.BILLING_STEP_PLAN_AND_PAYMENT : C.Z.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: y.h8.CONFIRM,
                renderStep: function(e) {
                    return (0, n.jsx)($, Ye({}, e))
                }
            }];

            function Je(e) {
                var t = (0,
                        i.e7)([d.Z], (function() {
                        return d.Z.getPremiumTypeSubscription()
                    })),
                    r = (0, c.Z)(e.analyticsLocations, l.Z.PREMIUM_PAYMENT_MODAL).AnalyticsLocationProvider,
                    a = e.subscriptionTier,
                    o = e.isGift,
                    s = e.giftRecipient,
                    u = e.loadId,
                    f = e.defaultPlanId,
                    p = e.referralCode;
                if (null != a && !Object.values(x.Si).includes(a)) throw new Error("subscriptionTier must be a premium subscription");
                return (0, n.jsx)(r, {
                    children: (0, n.jsx)(h.PaymentContextProvider, {
                        loadId: u,
                        activeSubscription: t,
                        stepConfigs: qe,
                        skuIDs: Ke(x.YQ),
                        isGift: o,
                        defaultPlanId: f,
                        referralCode: p,
                        giftRecipient: null == s ? void 0 : s,
                        children: (0, n.jsx)(Qe, Ye({}, e))
                    })
                })
            }
        },
        43299: (e, t, r) => {
            "use strict";
            r.d(t, {
                Gv: () => b,
                Wo: () => m,
                vB: () => v
            });
            var n = r(268335),
                a = r(335186),
                i = r(348592),
                o = r(575641),
                s = r(2590),
                l = r(520453),
                c = r(473708);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p, h = new Set([l.pK.ARS, l.pK.CLP, l.pK.COP]),
                y = new Set([l.pK.USD, l.pK.JPY]),
                m = (f(p = {}, s.HeQ.CARD, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY
                    })), f(p, s.HeQ.PAYPAL, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PAYPAL
                    })), f(p, s.HeQ.SOFORT, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_SOFORT
                    })), f(p, s.HeQ.GIROPAY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GIROPAY
                    })), f(p, s.HeQ.PRZELEWY24, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PRZELEWY24
                    })), f(p, s.HeQ.PAYSAFE_CARD, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD
                    })), f(p, s.HeQ.GCASH, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GCASH
                    })), f(p, s.HeQ.GRABPAY_MY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GRABPAY
                    })), f(p, s.HeQ.MOMO_WALLET, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
                    })), f(p, s.HeQ.VENMO, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_VENMO
                    })), f(p, s.HeQ.KAKAOPAY, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
                    })), f(p, s.HeQ.GOPAY_WALLET, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
                    })), f(p, s.HeQ.BANCONTACT, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_BANCONTACT
                    })), f(p, s.HeQ.EPS, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_EPS
                    })), f(p, s.HeQ.IDEAL, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_IDEAL
                    })), f(p, s.HeQ.CASH_APP, (function() {
                        return c.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                    })),
                    p),
                E = [s.HeQ.EPS, s.HeQ.BANCONTACT, s.HeQ.IDEAL, s.HeQ.SOFORT, s.HeQ.GIROPAY, s.HeQ.SEPA_DEBIT, s.HeQ.PAYSAFE_CARD],
                b = function(e, t, r, n) {
                    if (null == e) return "";
                    var i = (0, a.q9)(e);
                    return t === l.pK.EUR ? r ? c.Z.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: i
                    }) : c.Z.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    }) : n ? c.Z.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: i
                    }) : c.Z.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: i
                    })
                },
                v = function(e) {
                    var t = e.localizedPricingPromo,
                        r = e.subscription,
                        n = e.forceSingleLine,
                        u = void 0 !== n && n,
                        f = e.userLocale,
                        p = t.countryCode,
                        b = t.amount,
                        v = t.currency,
                        I = t.paymentSourceTypes,
                        P = 0 !== I.length,
                        g = S(p),
                        O = (0, o.T4)(b, v, {
                            style: "currency",
                            currency: v,
                            currencyDisplay: "symbol",
                            localeOverride: g
                        }),
                        _ = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                            helpCenterLink: i.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                            currencyISOCode: v.toUpperCase(),
                            localizedPriceWithCurrencySymbol: O
                        });
                    y.has(v) && (_ = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                        helpCenterLink: i.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                        localizedPriceWithCurrencySymbol: O
                    }));
                    h.has(v) && (_ = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                        helpCenterLink: i.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                        currencyISOCode: v.toUpperCase(),
                        localizedPriceWithCurrencySymbol: O
                    }));
                    null == r || r.hasPremiumNitroMonthly || (_ = c.Z.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                        helpCenterLink: i.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                        currencyISOCode: v.toUpperCase()
                    }));
                    v === l.pK.EUR && (_ = u ? c.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                        country: (0, a.q9)(p),
                        currencyISOCode: v.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                    }) : c.Z.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                        currencyISOCode: v.toUpperCase(),
                        helpCenterLink: i.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                    }));
                    if (P) {
                        var C = E.filter((function(e) {
                                return I.includes(e)
                            })),
                            A = I.filter((function(e) {
                                return !E.includes(e)
                            })),
                            T = d(C).concat(d(A)).slice(0, 2).map((function(e) {
                                var t, r;
                                return null !== (r = null === (t = m[e]) || void 0 === t ? void 0 : t.call(m)) && void 0 !== r ? r : c.Z.Messages.PAYMENT_SOURCE_UNKNOWN
                            }));
                        I.length >= 3 && T.push(c.Z.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        var j = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        _ = c.Z.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: i.Z.getArticleURL(s.BhN.LOCALIZED_PRICING),
                            paymentMethods: j.format(T)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: c.Z.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, a.q9)(p)
                        }),
                        localizedPricingBannerBody: _,
                        localizedPricingBannerLinkOnly: c.Z.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: i.Z.getArticleURL(s.BhN.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: P ? void 0 : c.Z.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                S = function(e) {
                    var t = n.Z.find((function(t) {
                        return t.alpha2 === e
                    }));
                    return null == t ? void 0 : t.localeForICU
                }
        },
        100749: (e, t, r) => {
            "use strict";
            r.d(t, {
                ED: () => _,
                Ox: () => C,
                hz: () => I,
                pV: () => A
            });
            var n = r(667294),
                a = r(202351),
                i = r(281110),
                o = r(347365),
                s = r(370459),
                l = r(536392),
                c = r(116094),
                u = r(2590);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function d(e, t, r, n, a, i, o) {
                try {
                    var s = e[i](o),
                        l = s.value
                } catch (e) {
                    r(e);
                    return
                }
                s.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function p(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var i = e.apply(t, r);

                        function o(e) {
                            d(i, n, a, o, s, "next", e)
                        }

                        function s(e) {
                            d(i, n, a, o, s, "throw", e)
                        }
                        o(void 0)
                    }))
                }
            }

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        h(e, t, r[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function E(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (a[r] = e[r])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                }
                return a
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, a, i = [],
                            o = !0,
                            s = !1;
                        try {
                            for (r = r.call(e); !(o = (n = r.next()).done); o = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e, t) {
                var r, n, a, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function s(i) {
                    return function(s) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                                (n = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        o.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        o.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop();
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < a[1]) {
                                            o.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && o.label < a[2]) {
                                            o.label = a[2];
                                            o.ops.push(i);
                                            break
                                        }
                                        a[2] && o.ops.pop();
                                        o.trys.pop();
                                        continue
                                }
                                i = t.call(e, o)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, s])
                    }
                }
            };

            function S() {
                return (S = p((function(e) {
                    var t, r, n, a, l, f, d, p, h, b, S, I;
                    return v(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                t = e.items, r = e.paymentSourceId, n = e.trialId, a = e.code, l = e.applyEntitlements, f = void 0 !== l && l, d = e.currency, p = e.renewal, h = e.metadata;
                                t = (0, c.gB)(t);
                                b = {
                                    items: t.map((function(e) {
                                        var t = e.planId;
                                        return m(y({}, E(e, ["planId"])), {
                                            plan_id: t
                                        })
                                    })),
                                    payment_source_id: r,
                                    trial_id: n,
                                    code: a,
                                    apply_entitlements: f,
                                    currency: d,
                                    renewal: p,
                                    metadata: h
                                };
                                v.label = 1;
                            case 1:
                                v.trys.push([1, 3, , 4]);
                                return [4, i.ZP.post({
                                    url: u.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
                                    body: b,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                S = v.sent();
                                return [2, s.Z.createInvoiceFromServer(S.body)];
                            case 3:
                                I = v.sent();
                                throw new o.HF(I);
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function I(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = p((function(e) {
                    var t, r, n, a, l, f, d, p, h, b, S, I;
                    return v(this, (function(v) {
                        switch (v.label) {
                            case 0:
                                t = e.subscriptionId, r = e.items, n = e.paymentSourceId, a = e.renewal, l = e.currency, f = e.applyEntitlements, d = void 0 !== f && f, p = e.analyticsLocations, h = e.analyticsLocation;
                                null != r && (r = (0, c.gB)(r));
                                b = {
                                    items: null == r ? void 0 : r.map((function(e) {
                                        var t = e.planId;
                                        return m(y({}, E(e, ["planId"])), {
                                            plan_id: t
                                        })
                                    })),
                                    payment_source_id: n,
                                    renewal: a,
                                    apply_entitlements: d,
                                    currency: l
                                };
                                v.label = 1;
                            case 1:
                                v.trys.push([1, 3, , 4]);
                                return [4, i.ZP.patch({
                                    url: u.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
                                    query: {
                                        location: h,
                                        location_stack: p
                                    },
                                    body: b,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                S = v.sent();
                                return [2, s.Z.createInvoiceFromServer(S.body)];
                            case 3:
                                I = v.sent();
                                throw new o.HF(I);
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g() {
                return (g = p((function(e) {
                    var t, r;
                    return v(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                t = e.subscriptionId;
                                return e.preventFetch ? [2, null] : [4, i.ZP.get({
                                    url: u.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                r = n.sent();
                                return [2, s.Z.createInvoiceFromServer(r.body)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function O(e, t) {
                var r = e.preventFetch,
                    i = void 0 !== r && r,
                    o = b((0, n.useState)(null), 2),
                    s = o[0],
                    c = o[1],
                    u = b((0, n.useState)(null), 2),
                    f = u[0],
                    d = u[1],
                    h = (0, a.e7)([l.Z], (function() {
                        return l.Z.getSubscriptions()
                    }));
                (0,
                    n.useEffect)((function() {
                    var e = !1;

                    function r() {
                        return (r = p((function() {
                            var r, n;
                            return v(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        a.trys.push([0, 2, , 3]);
                                        d(null);
                                        c(null);
                                        return [4, t()];
                                    case 1:
                                        r = a.sent();
                                        e || c(r);
                                        return [3, 3];
                                    case 2:
                                        n = a.sent();
                                        e || d(n);
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }
                    i || function() {
                        r.apply(this, arguments)
                    }();
                    return function() {
                        e = !0
                    }
                }), [i, t, h]);
                return [s, f]
            }

            function _(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    e.subscriptionId;
                    var t = E(e, ["subscriptionId"]);
                    e = t
                }
                var r = (0, n.useCallback)((function() {
                    return "subscriptionId" in e ? I(e) : "items" in e ? function(e) {
                        return S.apply(this, arguments)
                    }(e) : null
                }), [JSON.stringify(e)]);
                return O(e, r)
            }

            function C(e) {
                var t = (0, n.useCallback)((function() {
                    return function(e) {
                        return g.apply(this, arguments)
                    }(e)
                }), [JSON.stringify(e)]);
                return O(e, t)
            }

            function A(e) {
                var t = e.subscriptionPlanPrice;
                e.discounts.forEach((function(r) {
                    var n = r.amount / e.quantity;
                    t -= n
                }));
                return t
            }
        },
        671687: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => N
            });
            var n = r(785893),
                a = r(667294),
                i = r(294184),
                o = r.n(i),
                s = r(853158),
                l = r(795308),
                c = r(575945),
                u = r(70418),
                f = r(366007),
                d = r(709189),
                p = r(362660),
                h = r(203600),
                y = r(481141),
                m = r.n(y);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function S(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function I(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (a[r] = e[r])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                }
                return a
            }

            function P(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var O, _, C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = v(e);
                    if (t) {
                        var a = v(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return P(this, r)
                }
            }
            var T, j = Object.freeze({
                DURATION: (O = {}, b(O, h.p9.TIER_0, 1e3), b(O, h.p9.TIER_1, 1e3), b(O, h.p9.TIER_2, 1500), O),
                DELAY: (_ = {}, b(_, h.p9.TIER_0, 400), b(_, h.p9.TIER_1, 400), b(_, h.p9.TIER_2, 2200), _),
                FLASH_TIME_PERCENT: .72,
                FLASH_DURATION_PERCENT: .08
            });
            ! function(e) {
                e.PREMIUM_ACTIVATED = "PREMIUM_ACTIVATED";
                e.PREMIUM_UPDATED = "PREMIUM_UPDATED";
                e.PREMIUM_UPGRADED = "PREMIUM_UPGRADED";
                e.GUILD_BOOST_APPLIED = "GUILD_BOOST_APPLIED";
                e.PREMIUM_PAYMENT_STARTED = "PREMIUM_PAYMENT_STARTED"
            }(T || (T = {}));
            var R = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(r, e);
                var t = A(r);

                function r() {
                    E(this, r);
                    var e;
                    (e = t.apply(this, arguments)).animation = new s.Z.Value(0);
                    return e
                }
                var a = r.prototype;
                a.componentDidMount = function() {
                    this.animate()
                };
                a.animate = function() {
                    var e = this.props.premiumType;
                    s.Z.timing(this.animation, {
                        toValue: 1,
                        delay: j.DELAY[e],
                        duration: j.DURATION[e]
                    }).start()
                };
                a.getContainerStyle = function() {
                    var e = this.props.flashColor,
                        t = j.FLASH_TIME_PERCENT,
                        r = j.FLASH_DURATION_PERCENT,
                        n = (0, p.Cj)(e, 0);
                    return {
                        backgroundColor: this.animation.interpolate({
                            inputRange: [0, t, t, t + r, 1],
                            outputRange: [n, n, e, e, n]
                        })
                    }
                };
                a.getShineStyle = function() {
                    return s.Z.accelerate({
                        transform: [{
                            translateX: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["20%", "160%"]
                            })
                        }]
                    })
                };
                a.getSvgBorderGradientId = function() {
                    var e = this.props,
                        t = e.premiumType;
                    switch (e.type) {
                        case T.GUILD_BOOST_APPLIED:
                            return f.Rj.PREMIUM_GUILD;
                        case T.PREMIUM_ACTIVATED:
                        case T.PREMIUM_PAYMENT_STARTED:
                        case T.PREMIUM_UPGRADED:
                        case T.PREMIUM_UPDATED:
                            return t === h.p9.TIER_0 ? f.Rj.PREMIUM_TIER_0 : t === h.p9.TIER_1 ? f.Rj.PREMIUM_TIER_1 : f.Rj.PREMIUM_TIER_2;
                        default:
                            throw new Error("Unsupported ShineAnimation type specified")
                    }
                };
                a.renderSvgBorder = function() {
                    switch (this.props.type) {
                        case T.GUILD_BOOST_APPLIED:
                            return (0, n.jsx)("svg", {
                                className: m().svgBorder,
                                width: "304",
                                height: "48",
                                viewBox: "0 0 304 48",
                                children: (0, n.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "302",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case T.PREMIUM_PAYMENT_STARTED:
                            return (0, n.jsx)("svg", {
                                className: m().svgBorder,
                                width: "156",
                                height: "48",
                                viewBox: "0 0 156 48",
                                children: (0, n.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "154",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case T.PREMIUM_ACTIVATED:
                        case T.PREMIUM_UPGRADED:
                            return (0, n.jsx)("svg", {
                                className: m().svgBorder,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, n.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "296",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        case T.PREMIUM_UPDATED:
                            return (0, n.jsx)("svg", {
                                className: m().svgBorder,
                                width: "276",
                                height: "48",
                                viewBox: "0 0 276 48",
                                children: (0, n.jsx)("rect", {
                                    x: "1",
                                    y: "1",
                                    fill: "none",
                                    width: "274",
                                    height: "46",
                                    rx: "8",
                                    stroke: "url(#".concat(this.getSvgBorderGradientId(), ")"),
                                    strokeWidth: "2"
                                })
                            });
                        default:
                            return null
                    }
                };
                a.renderSvgCopy = function() {
                    switch (this.props.type) {
                        case T.GUILD_BOOST_APPLIED:
                            return (0, n.jsx)("svg", {
                                className: m().svgCopy,
                                width: "304",
                                height: "48",
                                viewBox: "0 0 304 48",
                                children: (0, n.jsxs)("g", {
                                    fill: "currentColor",
                                    children: [(0, n.jsx)("path", {
                                        d: "M50.61,20.21a3.57,3.57,0,0,1-.25.77,3.72,3.72,0,0,1-.49.88,5.79,5.79,0,0,1-.75.85l0,0a.89.89,0,0,0,0,1.26,3.07,3.07,0,0,1,.49.54A4.29,4.29,0,0,1,50.25,26a3.78,3.78,0,0,1,.11,1.45,6.31,6.31,0,0,1-.22,1.27,7,7,0,0,1-2.56,3.71,8.42,8.42,0,0,1-5,1.32H35.24a.57.57,0,0,1-.56-.66l2.56-18.3a.58.58,0,0,1,.56-.5h7.31a6.93,6.93,0,0,1,2.5.42,4.83,4.83,0,0,1,1.87,1.18,4.1,4.1,0,0,1,1.05,1.84A5.45,5.45,0,0,1,50.61,20.21ZM44,21.88a1.93,1.93,0,0,0,1.43-.52,2,2,0,0,0,.63-1.21A1.53,1.53,0,0,0,45.83,19a1.45,1.45,0,0,0-1.3-.55H42.17a.57.57,0,0,0-.56.49l-.34,2.32a.57.57,0,0,0,.57.65Zm-1,7.53a2.44,2.44,0,0,0,1.74-.6,2.26,2.26,0,0,0,.74-1.38,1.77,1.77,0,0,0-.36-1.37,1.82,1.82,0,0,0-1.57-.63H41.19a.57.57,0,0,0-.57.49l-.39,2.84a.57.57,0,0,0,.56.65Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M54.18,20.68a6.89,6.89,0,0,1,1.1-2.92,7.91,7.91,0,0,1,2.12-2.08,9.44,9.44,0,0,1,2.75-1.27,11.56,11.56,0,0,1,3-.41,10.39,10.39,0,0,1,2.91.41,6.66,6.66,0,0,1,2.42,1.27A5.18,5.18,0,0,1,70,17.76a5.44,5.44,0,0,1,.28,2.92l-1,6.64a6.9,6.9,0,0,1-1.1,2.94,7.59,7.59,0,0,1-2.06,2.09,9.41,9.41,0,0,1-2.75,1.24,11.88,11.88,0,0,1-3.1.41,10.39,10.39,0,0,1-2.91-.41A7,7,0,0,1,55,32.35a5.53,5.53,0,0,1-1.54-2.09,5.63,5.63,0,0,1-.27-2.94Zm4,6.64a1.42,1.42,0,0,0,.14.94,2.2,2.2,0,0,0,.6.66,3.28,3.28,0,0,0,.91.38,4.61,4.61,0,0,0,1.1.14,5.15,5.15,0,0,0,1.18-.14,4.24,4.24,0,0,0,1.1-.41A2.63,2.63,0,0,0,64,28.2a2,2,0,0,0,.44-1l1-6.51A1.6,1.6,0,0,0,64.71,19a2.6,2.6,0,0,0-.94-.41,4,4,0,0,0-1.12-.14,4.94,4.94,0,0,0-1.21.14,3.83,3.83,0,0,0-1.07.41,3.19,3.19,0,0,0-.86.68,2.06,2.06,0,0,0-.41,1Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M73.53,20.68a6.89,6.89,0,0,1,1.1-2.92,7.91,7.91,0,0,1,2.12-2.08,9.44,9.44,0,0,1,2.75-1.27,11.56,11.56,0,0,1,3-.41,10.39,10.39,0,0,1,2.91.41,6.66,6.66,0,0,1,2.42,1.27,5.18,5.18,0,0,1,1.54,2.08,5.44,5.44,0,0,1,.28,2.92l-1,6.64a6.9,6.9,0,0,1-1.1,2.94,7.59,7.59,0,0,1-2.06,2.09,9.41,9.41,0,0,1-2.75,1.24,11.88,11.88,0,0,1-3.1.41,10.39,10.39,0,0,1-2.91-.41,7,7,0,0,1-2.4-1.24,5.41,5.41,0,0,1-1.53-2.09,5.52,5.52,0,0,1-.28-2.94Zm4,6.64a1.48,1.48,0,0,0,.14.94,2.2,2.2,0,0,0,.6.66,3.28,3.28,0,0,0,.91.38,4.61,4.61,0,0,0,1.1.14,5.15,5.15,0,0,0,1.18-.14,4.24,4.24,0,0,0,1.1-.41,2.63,2.63,0,0,0,.82-.69,2,2,0,0,0,.44-1l1-6.51a1.8,1.8,0,0,0-.11-1,1.72,1.72,0,0,0-.58-.68,2.6,2.6,0,0,0-.94-.41A4,4,0,0,0,82,18.48a4.94,4.94,0,0,0-1.21.14,3.83,3.83,0,0,0-1.07.41,3.19,3.19,0,0,0-.86.68,2.06,2.06,0,0,0-.41,1Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M93.91,28a.66.66,0,0,1,.88.09,3.75,3.75,0,0,0,1.34.91,5.57,5.57,0,0,0,2.19.47,4.1,4.1,0,0,0,1.76-.36A1.47,1.47,0,0,0,101,28a.93.93,0,0,0-.16-.77,1.88,1.88,0,0,0-.69-.58,4.29,4.29,0,0,0-1-.36A7.84,7.84,0,0,0,97.94,26a7.78,7.78,0,0,1-2.2-.72A6.33,6.33,0,0,1,94,23.89a5.29,5.29,0,0,1-1.07-2,5.48,5.48,0,0,1-.08-2.53,6.12,6.12,0,0,1,1-2.5,6.25,6.25,0,0,1,1.85-1.67A7.55,7.55,0,0,1,98,14.27a12.85,12.85,0,0,1,2.64-.27,11,11,0,0,1,1.73.14,6.34,6.34,0,0,1,3.16,1.45,7.79,7.79,0,0,1,1,1.05.55.55,0,0,1-.13.79l-2.68,1.86a.65.65,0,0,1-.78-.07,3.75,3.75,0,0,0-1.15-.69,5.23,5.23,0,0,0-1.74-.35,3.22,3.22,0,0,0-1.62.33,1.33,1.33,0,0,0-.77,1.09,1.26,1.26,0,0,0,.55,1.3,5.76,5.76,0,0,0,1.79.65,19.61,19.61,0,0,1,2.45.66,5.4,5.4,0,0,1,2,1.16,4.18,4.18,0,0,1,1.24,1.95,6.27,6.27,0,0,1,0,3,6.49,6.49,0,0,1-2.8,4.26,8,8,0,0,1-2.48,1.07,11.5,11.5,0,0,1-2.94.36,8.09,8.09,0,0,1-1.84-.22,9.22,9.22,0,0,1-1.84-.66A8.52,8.52,0,0,1,92.22,32a6.61,6.61,0,0,1-1.06-1.12.55.55,0,0,1,.1-.74Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M119.86,18.75a.57.57,0,0,0-.57.5l-1.92,14a.58.58,0,0,1-.57.5H113a.58.58,0,0,1-.57-.66L114.3,19.4a.58.58,0,0,0-.57-.65H109.8a.57.57,0,0,1-.57-.65l.49-3.36a.58.58,0,0,1,.57-.49h14.32a.57.57,0,0,1,.56.65l-.49,3.36a.57.57,0,0,1-.57.49Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M139.51,24.87l-.51-5a.13.13,0,0,0-.12-.11h0a.12.12,0,0,0-.11.08l-1.87,4.89a.54.54,0,0,0,.51.72H139A.54.54,0,0,0,139.51,24.87Zm6,8.86h-4.23a.55.55,0,0,1-.53-.44l-.58-3a.55.55,0,0,0-.53-.44h-4.46a.53.53,0,0,0-.49.32l-1.47,3.27a.55.55,0,0,1-.49.32h-4.14a.53.53,0,0,1-.48-.77l9.1-18.39a.55.55,0,0,1,.48-.3h3.77a.56.56,0,0,1,.53.42l4.05,18.39A.54.54,0,0,1,145.55,33.73Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M161.19,29.35a.52.52,0,0,1,.19.8A9,9,0,0,1,154,34c-3.86,0-7.43-2.23-6.81-6.65l.94-6.7C148.77,16.25,153,14,157,14a6.16,6.16,0,0,1,6.12,4,.53.53,0,0,1-.31.68l-3.36,1.27a.54.54,0,0,1-.64-.21,3,3,0,0,0-2.58-1.19c-1.42,0-2.84.8-3,2.12l-.94,6.7c-.2,1.27,1,2.06,2.42,2.06A3.51,3.51,0,0,0,157.47,28a.53.53,0,0,1,.67-.16Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M174.59,19.21l-2,14.06a.54.54,0,0,1-.53.46h-3.95a.54.54,0,0,1-.54-.61l1.92-13.76a.53.53,0,0,0-.53-.61h-4.08a.53.53,0,0,1-.53-.6l.51-3.45a.54.54,0,0,1,.53-.45H180a.54.54,0,0,1,.54.6L180,18.3a.54.54,0,0,1-.54.45h-4.38A.54.54,0,0,0,174.59,19.21Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M184.73,33.73h-3.89a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46h3.9a.54.54,0,0,1,.53.61l-2.6,18.39A.55.55,0,0,1,184.73,33.73Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M203.71,14.25h4.13a.52.52,0,0,1,.48.76L199,33.43a.53.53,0,0,1-.48.3h-3.8a.54.54,0,0,1-.52-.42l-4.11-18.42a.54.54,0,0,1,.53-.64h4.23a.53.53,0,0,1,.52.43l1.67,9s0,0,0,.06l.27,4.62h.06l1.49-4.59,0-.06,4.32-9.2A.55.55,0,0,1,203.71,14.25Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M214,24.87l-.52-5a.12.12,0,0,0-.12-.11h0a.11.11,0,0,0-.11.08l-1.87,4.89a.53.53,0,0,0,.5.72h1.58A.54.54,0,0,0,214,24.87Zm6,8.86h-4.23a.55.55,0,0,1-.53-.44l-.58-3a.55.55,0,0,0-.53-.44h-4.47a.55.55,0,0,0-.49.32l-1.47,3.27a.54.54,0,0,1-.49.32h-4.13a.53.53,0,0,1-.48-.77l9.1-18.39a.55.55,0,0,1,.48-.3H216a.54.54,0,0,1,.52.42l4.05,18.39A.53.53,0,0,1,220,33.73Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M230.49,19.21l-2,14.06a.55.55,0,0,1-.53.46h-4a.54.54,0,0,1-.53-.61l1.92-13.76a.54.54,0,0,0-.53-.61h-4.08a.52.52,0,0,1-.53-.6l.51-3.45a.54.54,0,0,1,.53-.45h14.58a.52.52,0,0,1,.53.6l-.51,3.45a.53.53,0,0,1-.53.45H231A.53.53,0,0,0,230.49,19.21Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M243.26,21.8H250a.54.54,0,0,1,.53.61l-.47,3.3a.52.52,0,0,1-.53.46H242.5a.53.53,0,0,0-.53.46l-.27,1.85a.53.53,0,0,0,.53.6h7.45a.53.53,0,0,1,.53.6l-.49,3.59a.54.54,0,0,1-.53.46H236.56a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46h12.63a.54.54,0,0,1,.54.61l-.52,3.58a.54.54,0,0,1-.53.46h-7.75a.53.53,0,0,0-.53.45l-.27,1.83A.53.53,0,0,0,243.26,21.8Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M260.57,29.11c1.36,0,2.59-.74,2.73-1.79l.94-6.53c.14-1.08-.83-1.93-2.19-1.93H260a.54.54,0,0,0-.53.46l-1.32,9.19a.53.53,0,0,0,.53.6Zm1.95-14.84c4,0,7.37,2,6.73,6.52l-.94,6.53c-.64,4.48-4.59,6.41-8.55,6.41H253a.53.53,0,0,1-.53-.61l2.6-18.39a.54.54,0,0,1,.53-.46Z"
                                    })]
                                })
                            });
                        case T.PREMIUM_PAYMENT_STARTED:
                            return (0, n.jsx)("svg", {
                                className: m().svgCopy,
                                width: "156",
                                height: "48",
                                viewBox: "0 0 156 48",
                                children: (0, n.jsxs)("g", {
                                    fill: "currentColor",
                                    children: [(0, n.jsx)("path", {
                                        d: "M115.707 20.8664L114.751 27.2572C114.533 28.7676 112.813 29.4689 111.229 29.4689C109.755 29.4689 108.308 28.7676 108.499 27.3924L109.455 20.8664C109.673 19.437 111.393 18.7089 112.977 18.7089C114.56 18.7089 115.925 19.437 115.707 20.8664ZM113.733 14.3164L113.733 14.3135H103.446C103.183 14.3135 102.96 14.5039 102.922 14.7608L102.421 18.137C102.375 18.4526 102.622 18.7358 102.945 18.7358H104.824C105.013 18.7358 105.142 18.9262 105.068 19.0979C104.834 19.6406 104.663 20.2299 104.568 20.8664L103.612 27.3924C102.984 31.761 106.67 33.9451 110.683 33.9451C114.888 33.9451 119.011 31.761 119.639 27.3924L120.594 20.8664C121.21 16.5841 117.654 14.401 113.733 14.3164Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M51.9335 23.2501L51.9862 26.4178C51.9873 26.483 51.943 26.5403 51.8791 26.5563L50.7895 22.7353C50.7878 22.7295 50.7857 22.7238 50.7833 22.7182L47.4025 14.9005C47.3192 14.708 47.1276 14.583 46.9154 14.583H43.0842C42.82 14.583 42.5964 14.7753 42.5597 15.0336L40.0052 33.0799C39.9607 33.3945 40.2079 33.6753 40.5295 33.6753H44.3462C44.6107 33.6753 44.8347 33.4826 44.8708 33.2236L45.8714 26.0543C45.8722 26.0472 45.8726 26.0401 45.8726 26.033L45.818 22.349L45.9271 22.3224L47.0715 26.1432C47.0732 26.1488 47.0751 26.154 47.0774 26.1593L50.2394 33.3603C50.3233 33.5515 50.5142 33.6753 50.7251 33.6753H54.8582C55.1222 33.6753 55.346 33.483 55.3827 33.2247L57.9376 15.1784C57.9824 14.8638 57.7349 14.583 57.4133 14.583H53.6228C53.3587 14.583 53.1349 14.7751 53.0982 15.0334L51.9348 23.2282C51.9339 23.2355 51.9333 23.2428 51.9335 23.2501Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M59.3201 33.6753H63.1376C63.4019 33.6753 63.6255 33.483 63.6622 33.2247L66.2167 15.1784C66.2614 14.8638 66.014 14.583 65.6923 14.583H61.8748C61.6105 14.583 61.3869 14.7753 61.3502 15.0336L58.7958 33.0799C58.751 33.3945 58.9985 33.6753 59.3201 33.6753Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M68.7951 15.0039L68.295 18.38C68.2482 18.6958 68.4958 18.9787 68.8189 18.9787H72.8136C73.1346 18.9787 73.382 19.2589 73.3382 19.5731L71.4563 33.0814C71.4124 33.3956 71.6596 33.6758 71.9809 33.6758H75.8536C76.1181 33.6758 76.3421 33.4829 76.3782 33.2239L78.2999 19.4306C78.336 19.1716 78.5598 18.9787 78.8245 18.9787H83.1195C83.3823 18.9787 83.6053 18.7885 83.6434 18.5316L84.144 15.1554C84.1908 14.8398 83.9429 14.5566 83.62 14.5566H69.319C69.0562 14.5566 68.8331 14.7471 68.7951 15.0039Z"
                                    }), (0, n.jsx)("path", {
                                        d: "M95.8577 21.2436C95.721 22.3492 94.8476 23.4547 93.3456 23.4547H91.0889C90.7668 23.4547 90.5194 23.1732 90.5648 22.8582L91.0423 19.5357C91.0794 19.2778 91.303 19.0861 91.5667 19.0861H93.9735C95.4206 19.0861 95.9939 20.084 95.8577 21.2436ZM94.5196 14.583H87.2539C86.9898 14.583 86.7661 14.7753 86.7296 15.0336L84.1749 33.0799C84.1304 33.3945 84.3778 33.6753 84.6992 33.6753H88.5707C88.8352 33.6753 89.0592 33.4826 89.0953 33.2236L89.847 27.8336C89.8651 27.704 89.9771 27.6078 90.1094 27.6078H90.6072C90.6974 27.6078 90.7814 27.6532 90.8301 27.7282L94.5274 33.4343C94.6246 33.5845 94.7927 33.6753 94.9733 33.6753H99.7551C100.183 33.6753 100.434 33.199 100.189 32.8524L96.309 27.3745C96.216 27.243 96.2639 27.0603 96.4099 26.9899C98.8867 25.7943 100.325 24.5693 100.799 21.1626C101.345 16.6863 98.506 14.583 94.5196 14.583Z"
                                    })]
                                })
                            });
                        case T.PREMIUM_ACTIVATED:
                            return (0, n.jsx)("svg", {
                                className: m().svgCopy,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, n.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.46,20.67l-1,6.52c-.22,1.54-2,2.25-3.59,2.25s-3-.71-2.78-2.11l1-6.66c.23-1.45,2-2.2,3.59-2.2s3,.75,2.79,2.2m-2-6.67H100a.55.55,0,0,0-.54.46l-.51,3.44a.54.54,0,0,0,.54.61h1.91a.26.26,0,0,1,.25.37,7.23,7.23,0,0,0-.51,1.8l-1,6.66c-.64,4.45,3.12,6.68,7.21,6.68,4.28,0,8.49-2.23,9.13-6.68l1-6.66c.63-4.36-3-6.59-7-6.67m-63,9.1.06,3.23a.14.14,0,0,1-.11.14l-1.11-3.89v0l-3.45-8a.54.54,0,0,0-.49-.32H38.42a.53.53,0,0,0-.53.46L35.28,33.12a.54.54,0,0,0,.54.61h3.89a.52.52,0,0,0,.53-.46l1-7.31v0l-.06-3.75.11,0,1.17,3.89v0l3.23,7.34a.52.52,0,0,0,.49.32h4.22a.54.54,0,0,0,.53-.46l2.6-18.39a.53.53,0,0,0-.53-.61H49.17a.54.54,0,0,0-.54.46l-1.18,8.35a0,0,0,0,0,0,0M55,33.73h3.9a.53.53,0,0,0,.53-.46L62,14.88a.53.53,0,0,0-.53-.61H57.58a.54.54,0,0,0-.54.46l-2.6,18.39a.53.53,0,0,0,.53.61m9.66-19-.51,3.44a.54.54,0,0,0,.54.61h4.07a.52.52,0,0,1,.53.6L67.35,33.13a.52.52,0,0,0,.53.6h4a.52.52,0,0,0,.53-.46l2-14.06a.55.55,0,0,1,.54-.46h4.38a.54.54,0,0,0,.53-.46l.51-3.44a.53.53,0,0,0-.53-.61H65.17a.55.55,0,0,0-.54.46m27.59,6.36a2.52,2.52,0,0,1-2.56,2.25h-2.3a.53.53,0,0,1-.53-.61l.48-3.38a.54.54,0,0,1,.54-.46H90.3a1.8,1.8,0,0,1,1.92,2.2m-1.36-6.79H83.45a.52.52,0,0,0-.53.46L80.31,33.12a.54.54,0,0,0,.54.61h3.94a.54.54,0,0,0,.54-.46l.76-5.49a.27.27,0,0,1,.27-.23h.51a.27.27,0,0,1,.23.12l3.77,5.82a.54.54,0,0,0,.45.24H96.2a.53.53,0,0,0,.44-.84l-4-5.58a.27.27,0,0,1,.11-.39c2.52-1.22,4-2.47,4.47-5.94.56-4.57-2.34-6.71-6.4-6.71M133,24.88l-.52-5a.11.11,0,0,0-.12-.1h0a.11.11,0,0,0-.11.07l-1.87,4.9a.53.53,0,0,0,.5.71h1.58a.54.54,0,0,0,.54-.58m6,8.85h-4.23a.54.54,0,0,1-.53-.43l-.59-3a.52.52,0,0,0-.52-.43h-4.47a.53.53,0,0,0-.49.32l-1.47,3.27a.52.52,0,0,1-.49.31h-4.13a.53.53,0,0,1-.48-.76l9.1-18.39a.55.55,0,0,1,.48-.3H135a.54.54,0,0,1,.52.42l4.05,18.39a.53.53,0,0,1-.52.64m15.63-4.37a.53.53,0,0,1,.19.8A9,9,0,0,1,147.47,34c-3.86,0-7.42-2.23-6.81-6.65l.94-6.7c.62-4.4,4.84-6.65,8.79-6.65a6.16,6.16,0,0,1,6.12,4,.53.53,0,0,1-.32.68l-3.35,1.27a.54.54,0,0,1-.64-.22,3,3,0,0,0-2.59-1.18c-1.41,0-2.83.8-3,2.12l-.94,6.7c-.2,1.26,1,2.06,2.42,2.06A3.54,3.54,0,0,0,150.91,28a.54.54,0,0,1,.67-.17ZM168,19.22l-2,14.05a.52.52,0,0,1-.53.46h-3.95a.52.52,0,0,1-.53-.6L163,19.36a.54.54,0,0,0-.54-.6h-4.07a.53.53,0,0,1-.53-.61l.51-3.44a.54.54,0,0,1,.53-.46h14.57a.53.53,0,0,1,.53.61l-.51,3.45a.52.52,0,0,1-.53.45h-4.38a.54.54,0,0,0-.53.46m10.14,14.51h-3.89a.54.54,0,0,1-.54-.6l2.61-18.39a.54.54,0,0,1,.53-.46h3.89a.54.54,0,0,1,.54.61l-2.61,18.39a.52.52,0,0,1-.53.45m19-19.48h4.13a.53.53,0,0,1,.48.77l-9.31,18.42a.53.53,0,0,1-.48.29h-3.79a.54.54,0,0,1-.53-.41l-4.1-18.42a.54.54,0,0,1,.52-.65h4.23a.55.55,0,0,1,.53.44l1.66,9a.13.13,0,0,1,0,.06l.28,4.61h.05l1.49-4.58,0-.06,4.32-9.2a.54.54,0,0,1,.48-.31m10.26,10.63-.51-5a.12.12,0,0,0-.12-.1h0a.14.14,0,0,0-.12.07l-1.86,4.9a.52.52,0,0,0,.5.71h1.58a.53.53,0,0,0,.53-.58m6,8.85h-4.23a.54.54,0,0,1-.53-.43l-.58-3a.54.54,0,0,0-.53-.43h-4.46a.52.52,0,0,0-.49.32l-1.47,3.27a.54.54,0,0,1-.49.31h-4.13A.53.53,0,0,1,196,33l9.1-18.39a.55.55,0,0,1,.49-.3h3.76a.56.56,0,0,1,.53.42l4,18.39a.54.54,0,0,1-.53.64M223.9,19.22l-2,14.05a.54.54,0,0,1-.53.46h-4a.53.53,0,0,1-.53-.6l1.92-13.77a.52.52,0,0,0-.53-.6h-4.08a.54.54,0,0,1-.53-.61l.51-3.44a.55.55,0,0,1,.53-.46h14.58a.53.53,0,0,1,.53.61l-.51,3.45a.54.54,0,0,1-.53.45h-4.38a.53.53,0,0,0-.53.46m12.77,2.59h6.75a.53.53,0,0,1,.53.6l-.47,3.31a.53.53,0,0,1-.53.46h-7a.54.54,0,0,0-.53.45l-.26,1.86a.53.53,0,0,0,.53.6h7.44a.52.52,0,0,1,.53.6l-.49,3.58a.53.53,0,0,1-.53.46H230a.53.53,0,0,1-.53-.6L232,14.74a.55.55,0,0,1,.54-.46h12.62a.53.53,0,0,1,.53.61l-.51,3.58a.53.53,0,0,1-.53.45h-7.75a.54.54,0,0,0-.53.46l-.26,1.82a.53.53,0,0,0,.53.61M254,29.12c1.36,0,2.58-.74,2.72-1.79l.95-6.54c.14-1.07-.84-1.92-2.2-1.92h-2.06a.54.54,0,0,0-.54.45l-1.32,9.19a.54.54,0,0,0,.53.61Zm1.94-14.84c4,0,7.37,2,6.73,6.51l-.94,6.54c-.64,4.48-4.59,6.4-8.54,6.4h-6.75a.54.54,0,0,1-.54-.6l2.61-18.39a.54.54,0,0,1,.53-.46Z"
                                })
                            });
                        case T.PREMIUM_UPGRADED:
                            return (0, n.jsx)("svg", {
                                className: m().svgCopy,
                                width: "298",
                                height: "48",
                                viewBox: "0 0 298 48",
                                children: (0, n.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.39,20.67l-1,6.52c-.22,1.54-2,2.26-3.59,2.26s-3-.72-2.79-2.12l1-6.66c.22-1.46,2-2.2,3.59-2.2s3,.74,2.78,2.2m-2-6.68H99.89a.52.52,0,0,0-.53.46l-.51,3.44a.53.53,0,0,0,.53.61h1.92a.26.26,0,0,1,.24.37,7.23,7.23,0,0,0-.51,1.8l-1,6.66c-.64,4.45,3.12,6.68,7.21,6.68,4.29,0,8.49-2.23,9.13-6.68l1-6.66c.63-4.36-3-6.59-7-6.68m-63,9.11,0,3.23a.15.15,0,0,1-.11.15h0l-1.11-3.9v0l-3.44-8a.55.55,0,0,0-.5-.33H38.33a.54.54,0,0,0-.53.46L35.19,33.13a.54.54,0,0,0,.54.61h3.89a.53.53,0,0,0,.53-.47l1-7.31v0l-.06-3.76.11,0,1.17,3.89v0l3.22,7.34a.55.55,0,0,0,.5.33h4.21a.55.55,0,0,0,.54-.46l2.6-18.41a.54.54,0,0,0-.53-.61H49.08a.53.53,0,0,0-.53.46l-1.19,8.36v0m7.53,10.64h3.89a.55.55,0,0,0,.54-.46l2.6-18.41a.53.53,0,0,0-.53-.61H57.5a.55.55,0,0,0-.54.46l-2.6,18.41a.53.53,0,0,0,.53.61m9.66-19.05L64,18.14a.54.54,0,0,0,.54.61h4.07a.54.54,0,0,1,.54.6L67.27,33.13a.53.53,0,0,0,.53.61h4a.55.55,0,0,0,.54-.47l2-14.06a.52.52,0,0,1,.53-.46h4.38a.55.55,0,0,0,.54-.46l.51-3.44a.54.54,0,0,0-.54-.61H65.09a.54.54,0,0,0-.54.45m27.6,6.37a2.52,2.52,0,0,1-2.56,2.25h-2.3a.54.54,0,0,1-.54-.61l.49-3.38a.54.54,0,0,1,.54-.46h2.45a1.79,1.79,0,0,1,1.92,2.2m-1.36-6.8H83.38a.55.55,0,0,0-.54.46l-2.6,18.41a.53.53,0,0,0,.53.61h4a.55.55,0,0,0,.54-.47L86,27.78a.27.27,0,0,1,.27-.23h.51a.25.25,0,0,1,.22.12l3.77,5.82a.57.57,0,0,0,.46.25h4.88a.54.54,0,0,0,.44-.84l-4-5.59a.27.27,0,0,1,.1-.39c2.53-1.22,4-2.47,4.48-6,.56-4.56-2.34-6.71-6.4-6.71m39.67.59-1.7,12.09c-.21,1.54,1.05,2.3,2.43,2.3a2.84,2.84,0,0,0,3.05-2.3L136,14.71a.51.51,0,0,1,.5-.43h3.87a.5.5,0,0,1,.5.5v.07l-1.7,12.09c-.62,4.48-4.78,6.72-8.59,6.72s-7.29-2.24-6.67-6.72l1.73-12.23a.49.49,0,0,1,.49-.43H130a.5.5,0,0,1,.5.5A.17.17,0,0,1,130.46,14.85Zm10.72,18,2.53-18.11a.51.51,0,0,1,.5-.43h7.2c4.67,0,6.43,3.43,6.05,6.88a7.29,7.29,0,0,1-7.69,6.65h-2.62a.51.51,0,0,0-.5.43L146,33a.49.49,0,0,1-.49.43h-3.82a.5.5,0,0,1-.51-.5S141.18,32.85,141.18,32.82Zm6.71-9.31h2.23A2.56,2.56,0,0,0,152.65,21a1.78,1.78,0,0,0-1.86-2.24h-2.37a.51.51,0,0,0-.5.43l-.53,3.72a.5.5,0,0,0,.43.57Zm25.79-5.42L169.37,20A2.33,2.33,0,0,0,167,18.3a2.86,2.86,0,0,0-3,2.19l-.92,6.56c-.18,1.46,1.06,2.19,2.49,2.19s2.91-.73,3.1-2.19l0-.24a.51.51,0,0,0-.44-.57h-2a.5.5,0,0,1-.51-.5s0,0,0-.07l.4-2.94a.5.5,0,0,1,.5-.43h6.68a.5.5,0,0,1,.5.5v.07l-.57,4.18c-.62,4.4-4.65,6.61-8.48,6.61s-7.21-2.21-6.59-6.61l.92-6.56c.62-4.46,4.67-6.48,8.45-6.48C170.09,14,172.79,15,173.68,18.09Zm12.26,15.07-3.59-5.61a.5.5,0,0,0-.42-.23h-.16a.49.49,0,0,0-.49.43L180.56,33a.51.51,0,0,1-.5.43h-3.87a.5.5,0,0,1-.5-.5v-.07l2.53-18.11a.51.51,0,0,1,.5-.43h7.21c3.94,0,6.74,2.11,6.2,6.59-.48,3.53-2,4.72-4.61,6l4,5.78a.5.5,0,0,1-.13.69.48.48,0,0,1-.29.09h-4.78A.48.48,0,0,1,185.94,33.16Zm-3.43-10h2.25A2.46,2.46,0,0,0,187.25,21a1.76,1.76,0,0,0-1.86-2.16H183a.5.5,0,0,0-.5.43L182,22.59a.51.51,0,0,0,.43.57Zm24.55-8.49L211,32.79a.49.49,0,0,1-.38.59h-4.25a.51.51,0,0,1-.5-.4l-.57-3a.49.49,0,0,0-.49-.41h-4.36a.51.51,0,0,0-.46.3l-1.44,3.24a.5.5,0,0,1-.46.29H194a.5.5,0,0,1-.5-.5.44.44,0,0,1,.05-.22l8.85-18.11a.5.5,0,0,1,.45-.28h3.68A.49.49,0,0,1,207.06,14.67Zm-4.51,10.6h1.58a.51.51,0,0,0,.5-.5v-.05l-.5-4.95a.12.12,0,0,0-.11-.09h0a.13.13,0,0,0-.13.09l-1.81,4.82a.5.5,0,0,0,.29.65A.57.57,0,0,0,202.55,25.27Zm13.92-11h6.72c3.83,0,7.15,1.94,6.53,6.4l-.92,6.42c-.62,4.4-4.45,6.29-8.29,6.29h-6.57a.5.5,0,0,1-.51-.5s0,0,0-.07L216,14.71A.51.51,0,0,1,216.47,14.28Zm2.95,14.58h1.88a2.48,2.48,0,0,0,2.64-1.76l.92-6.42c.14-1.05-.81-1.89-2.13-1.89h-2a.5.5,0,0,0-.5.43l-1.29,9.07a.5.5,0,0,0,.43.56Zm17.93-9.59-.26,1.84a.5.5,0,0,0,.43.56h6.66a.5.5,0,0,1,.5.5v.07l-.46,3.29a.49.49,0,0,1-.49.43h-6.88a.51.51,0,0,0-.5.43l-.26,1.86a.51.51,0,0,0,.43.57h7.34a.5.5,0,0,1,.5.5v.07L243.87,33a.49.49,0,0,1-.5.43H231.08a.5.5,0,0,1-.5-.5v-.07l2.53-18.11a.51.51,0,0,1,.5-.43h12.3a.5.5,0,0,1,.5.5.15.15,0,0,1,0,.07l-.5,3.56a.51.51,0,0,1-.5.43h-7.55A.51.51,0,0,0,237.35,19.27Zm12.14-5h6.71c3.84,0,7.16,1.94,6.54,6.4l-.92,6.42c-.62,4.4-4.46,6.29-8.29,6.29H247a.5.5,0,0,1-.5-.5.2.2,0,0,1,0-.07L249,14.71A.5.5,0,0,1,249.49,14.28Zm2.94,14.58h1.88A2.49,2.49,0,0,0,257,27.1l.92-6.42c.13-1.05-.81-1.89-2.14-1.89h-2a.49.49,0,0,0-.49.43l-1.29,9.07a.5.5,0,0,0,.42.56Z"
                                })
                            });
                        case T.PREMIUM_UPDATED:
                            return (0, n.jsx)("svg", {
                                className: m().svgCopy,
                                width: "276",
                                height: "48",
                                viewBox: "0 0 276 48",
                                children: (0, n.jsx)("path", {
                                    fill: "currentColor",
                                    d: "M112.23,20.66l-1,6.49c-.22,1.54-2,2.25-3.58,2.25s-3-.71-2.77-2.11l1-6.63c.22-1.46,2-2.2,3.58-2.2S112.46,19.2,112.23,20.66Zm-2-6.66H99.77a.53.53,0,0,0-.53.46l-.51,3.43a.52.52,0,0,0,.45.6h2a.27.27,0,0,1,.25.37,7,7,0,0,0-.51,1.8l-1,6.63c-.64,4.44,3.11,6.66,7.19,6.66,4.27,0,8.46-2.22,9.1-6.66l1-6.63C117.83,16.3,114.21,14.08,110.23,14ZM47.39,23.08l.06,3.22a.14.14,0,0,1-.11.14l-1.11-3.88v0l-3.43-7.95a.55.55,0,0,0-.5-.32H38.4a.54.54,0,0,0-.54.45l-2.6,18.35a.53.53,0,0,0,.46.6h4a.53.53,0,0,0,.53-.46l1-7.29v0l-.06-3.75.12,0L42.45,26v0l3.22,7.32a.55.55,0,0,0,.49.32h4.21a.54.54,0,0,0,.53-.46l2.6-18.35a.54.54,0,0,0-.46-.6H49.11a.53.53,0,0,0-.53.45l-1.19,8.34v0Zm7.51,10.6h3.88a.55.55,0,0,0,.54-.46l2.6-18.35a.55.55,0,0,0-.46-.6h-4a.53.53,0,0,0-.53.45l-2.6,18.35a.52.52,0,0,0,.46.6Zm9.64-19L64,18.13a.53.53,0,0,0,.53.61h4.06a.54.54,0,0,1,.54.6L67.24,33.07a.53.53,0,0,0,.46.6h4a.55.55,0,0,0,.54-.46l2-14a.53.53,0,0,1,.53-.46H79.1a.54.54,0,0,0,.53-.46l.51-3.43a.55.55,0,0,0-.45-.61H65.07A.53.53,0,0,0,64.54,14.69ZM92.05,21a2.51,2.51,0,0,1-2.55,2.25H87.2a.53.53,0,0,1-.53-.53v-.08l.49-3.38a.52.52,0,0,1,.53-.45h2.45A1.79,1.79,0,0,1,92.05,21Zm-1.36-6.77H83.3a.54.54,0,0,0-.53.46l-2.6,18.34a.53.53,0,0,0,.46.6h4a.55.55,0,0,0,.54-.46l.76-5.48a.27.27,0,0,1,.27-.23h.5a.28.28,0,0,1,.23.12l3.76,5.8a.53.53,0,0,0,.45.25H96a.54.54,0,0,0,.44-.84l-3.95-5.57a.27.27,0,0,1,.06-.37.05.05,0,0,0,0,0c2.52-1.21,4-2.46,4.47-5.92.55-4.55-2.33-6.69-6.39-6.69Zm40.12,0a.49.49,0,0,1,.49.5v.07l-1.73,12.32c-.22,1.56,1.07,2.33,2.47,2.33a2.9,2.9,0,0,0,3.1-2.33l1.76-12.46a.49.49,0,0,1,.49-.43h4a.49.49,0,0,1,.49.5v.07l-1.73,12.32c-.64,4.56-4.87,6.84-8.74,6.84s-7.42-2.28-6.79-6.84l1.76-12.46a.49.49,0,0,1,.49-.43Zm11.88,19.45a.51.51,0,0,1-.5-.49s0-.05,0-.07l2.58-18.46a.5.5,0,0,1,.49-.43h7.35c4.75,0,6.53,3.49,6.15,7a7.41,7.41,0,0,1-7.83,6.76h-2.68a.49.49,0,0,0-.48.42l-.68,4.84a.5.5,0,0,1-.49.42Zm5.83-10.62a.5.5,0,0,0,.42.56h2.36a2.62,2.62,0,0,0,2.58-2.53,1.82,1.82,0,0,0-1.9-2.28h-2.42a.49.49,0,0,0-.49.42Zm13.27-8.4a.49.49,0,0,1,.49-.43h6.85c3.9,0,7.28,2,6.65,6.51l-.94,6.54c-.63,4.48-4.53,6.4-8.43,6.4h-6.72a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07Zm3,13.84a.5.5,0,0,0,.42.56h2c1.35,0,2.56-.74,2.7-1.79l.93-6.54c.14-1.07-.82-1.92-2.17-1.92h-2.07a.49.49,0,0,0-.49.42l-1.32,9.26ZM188,14.28a.49.49,0,0,1,.48.39l4,18.46a.49.49,0,0,1-.38.59h-4.36a.49.49,0,0,1-.48-.4l-.59-3.1a.5.5,0,0,0-.49-.4H181.7a.5.5,0,0,0-.45.3l-1.47,3.31a.49.49,0,0,1-.45.29h-4.17a.49.49,0,0,1-.49-.49.54.54,0,0,1,.05-.22l9-18.46a.51.51,0,0,1,.45-.28Zm-4.6,10.52a.5.5,0,0,0,.29.63.51.51,0,0,0,.17,0h1.66A.49.49,0,0,0,186,25v0l-.51-5a.13.13,0,0,0-.07-.16.13.13,0,0,0-.16.07.13.13,0,0,0,0,.06Zm24.73-6.46a.5.5,0,0,1-.49.42h-4.39a.5.5,0,0,0-.49.43l-1.94,14.12a.49.49,0,0,1-.49.42h-4a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07l1.9-13.85a.48.48,0,0,0-.42-.55h-4.18a.49.49,0,0,1-.49-.49v-.08l.52-3.51a.51.51,0,0,1,.49-.43h14.47a.5.5,0,0,1,.49.5.17.17,0,0,1,0,.07l-.51,3.52Zm7.23.59a.49.49,0,0,0-.48.42l-.28,1.9a.49.49,0,0,0,.42.55h6.82a.5.5,0,0,1,.5.49s0,.05,0,.07l-.47,3.38a.49.49,0,0,1-.49.43h-7a.49.49,0,0,0-.49.42l-.27,1.93a.5.5,0,0,0,.42.56h7.5a.49.49,0,0,1,.5.49s0,.05,0,.07l-.49,3.66a.5.5,0,0,1-.49.42H208.43a.49.49,0,0,1-.49-.49v-.07l2.58-18.46a.5.5,0,0,1,.49-.43h12.55a.49.49,0,0,1,.49.5v.07l-.52,3.65a.51.51,0,0,1-.49.43Zm11.36-4.22a.49.49,0,0,1,.49-.43H234c3.9,0,7.28,2,6.64,6.51l-.93,6.54c-.63,4.48-4.53,6.4-8.43,6.4h-6.72a.49.49,0,0,1-.49-.49.17.17,0,0,1,0-.07Zm3,13.84a.5.5,0,0,0,.42.56h2c1.35,0,2.56-.74,2.7-1.79l.93-6.54c.14-1.07-.82-1.92-2.17-1.92h-2.07a.49.49,0,0,0-.49.42l-1.32,9.26Z"
                                })
                            });
                        default:
                            return null
                    }
                };
                a.render = function() {
                    var e = this.props.className;
                    return (0, n.jsxs)("div", {
                        className: o()(m().container, e),
                        children: [this.renderSvgBorder(), (0, n.jsxs)(s.Z.div, {
                            className: m().animationContainer,
                            style: this.getContainerStyle(),
                            children: [(0, n.jsx)(d.Z, {
                                className: m().shine,
                                style: this.getShineStyle()
                            }), this.renderSvgCopy()]
                        })]
                    })
                };
                return r
            }(a.PureComponent);
            R.Types = T;

            function N(e) {
                var t = e.theme,
                    r = I(e, ["theme"]),
                    a = (0, u.useToken)(l.Z.unsafe_rawColors.WHITE_500).hex(),
                    i = (0, u.useToken)(l.Z.unsafe_rawColors.BRAND_500).hex(),
                    o = (0, c.wj)(t) ? a : i;
                return (0, n.jsx)(R, S(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            b(e, t, r[t])
                        }))
                    }
                    return e
                }({}, r), {
                    theme: t,
                    flashColor: o
                }))
            }
            N.Types = T
        },
        239734: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => v
            });
            var n = r(202351),
                a = r(744564),
                i = r(840922);

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        s(e, t, r[t])
                    }))
                }
                return e
            }

            function u(e, t) {
                return !t || "object" !== d(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var d = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = l(e);
                    if (t) {
                        var a = l(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return u(this, r)
                }
            }
            var h = !1,
                y = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                m = c({}, y);

            function E() {
                m.affinityUserIds = new Set(m.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && f(e, t)
                }(r, e);
                var t = p(r);

                function r() {
                    o(this, r);
                    return t.apply(this, arguments)
                }
                var n = r.prototype;
                n.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        m.userAffinities = e.userAffinities;
                        m.affinityUserIds = new Set(e.affinityUserIds);
                        m.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], E)
                };
                n.needsRefresh = function() {
                    return Date.now() - m.lastFetched > 864e5
                };
                n.getFetching = function() {
                    return h
                };
                n.getState = function() {
                    return m
                };
                n.getUserAffinities = function() {
                    return m.userAffinities
                };
                n.getUserAffinitiesUserIds = function() {
                    return m.affinityUserIds
                };
                return r
            }(n.ZP.PersistedStore);
            b.displayName = "UserAffinitiesStore";
            b.persistKey = "UserAffinitiesStore";
            b.migrations = [function(e) {
                return null
            }];
            const v = new b(a.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, r = e.affinities;
                    m.userAffinities = null !== (t = r.user_affinities) && void 0 !== t ? t : [];
                    m.lastFetched = Date.now();
                    E();
                    h = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    h = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    h = !1
                },
                LOGOUT: function() {
                    m = c({}, y)
                }
            })
        },
        669426: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => v
            });
            var n = r(785893),
                a = r(667294),
                i = r(294184),
                o = r.n(i),
                s = r(70418),
                l = r(107364),
                c = r(718831),
                u = r(70821),
                f = r.n(u);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function y(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = h(e);
                    if (t) {
                        var a = h(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return y(this, r)
                }
            }
            const v = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(r, e);
                var t = b(r);

                function r() {
                    d(this, r);
                    var e;
                    (e = t.apply(this, arguments)).renderBreadcrumb = function(t, r) {
                        var a, i = e.props,
                            l = i.activeId,
                            u = i.onBreadcrumbClick,
                            d = i.breadcrumbs,
                            h = i.renderCustomBreadcrumb,
                            y = i.separatorClassName,
                            m = t.id === l,
                            E = r === d.length - 1,
                            b = null != h ? h(t, m) : (0, n.jsx)("span", {
                                className: o()(f().breadcrumb, (a = {}, p(a, f().activeBreadcrumb, m), p(a, f().interactiveBreadcrumb, null != u), a)),
                                children: t.label
                            });
                        return (0, n.jsxs)("div", {
                            className: o()(f().breadcrumbWrapper, p({}, f().breadcrumbFinalWrapper, E)),
                            children: [null != u ? (0, n.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: function() {
                                    return e.handleClick(t)
                                },
                                className: f().breadcrumbClickWrapper,
                                children: b
                            }) : b, E ? null : (0, n.jsx)(c.Z, {
                                className: o()(f().breadcrumbArrow, y),
                                direction: c.Z.Directions.RIGHT
                            })]
                        }, t.id)
                    };
                    return e
                }
                var a = r.prototype;
                a.handleClick = function(e) {
                    var t = this.props.onBreadcrumbClick;
                    null != t && t(e)
                };
                a.render = function() {
                    var e = this.props,
                        t = e.breadcrumbs,
                        r = e.className,
                        a = t.map(this.renderBreadcrumb);
                    return (0, n.jsx)(l.Z, {
                        justify: l.Z.Justify.START,
                        className: o()(f().breadcrumbs, r),
                        children: a
                    })
                };
                return r
            }(a.PureComponent)
        },
        459940: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => P,
                u: () => S
            });
            var n = r(785893),
                a = r(667294),
                i = r(294184),
                o = r.n(i),
                s = r(70418),
                l = r(990554),
                c = r(107364),
                u = r(473708),
                f = r(716523),
                d = r.n(f);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function m(e, t) {
                return !t || "object" !== b(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var b = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return m(this, r)
                }
            }
            var S = {
                    DEFAULT: "default",
                    SUCCESS: "success",
                    ERROR: "error"
                },
                I = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && E(e, t)
                    }(r, e);
                    var t = v(r);

                    function r() {
                        p(this, r);
                        var e;
                        (e = t.apply(this, arguments)).inputRef = a.createRef();
                        e.containerRef = a.createRef();
                        e.handleButtonClick = function() {
                            e.select();
                            var t = e.props;
                            (0, t.onCopy)(t.value)
                        };
                        e.handleInputClick = function() {
                            e.select()
                        };
                        return e
                    }
                    var i = r.prototype;
                    i.select = function() {
                        var e;
                        null === (e = this.inputRef.current) || void 0 === e || e.select()
                    };
                    i.renderInput = function(e) {
                        var t, r = this.props,
                            a = r.value,
                            i = r.mode,
                            s = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                        return (0, n.jsx)("input", {
                            className: o()((0, l.l)(d(), "input", i), h({}, d().inputHidden, e)),
                            ref: this.inputRef,
                            type: "text",
                            value: a,
                            onClick: this.handleInputClick,
                            readOnly: !0,
                            "aria-labelledby": s
                        })
                    };
                    i.render = function() {
                        var e, t = this.props,
                            r = t.text,
                            a = void 0 === r ? u.Z.Messages.COPY : r,
                            i = t.mode,
                            f = t.hideMessage,
                            p = t.className,
                            h = t.buttonLook,
                            y = null != f;
                        switch (i) {
                            case S.SUCCESS:
                                e = s.ButtonColors.GREEN;
                                break;
                            case S.ERROR:
                                e = s.ButtonColors.RED;
                                break;
                            default:
                                e = this.props.buttonColor
                        }
                        return (0, n.jsx)(s.FocusRing, {
                            focusTarget: this.inputRef,
                            ringTarget: this.containerRef,
                            children: (0, n.jsx)("div", {
                                className: o()((0, l.l)(d(), "copyInput", i), p),
                                ref: this.containerRef,
                                children: (0, n.jsxs)(c.Z, {
                                    className: d().layout,
                                    children: [(0, n.jsxs)(c.Z, {
                                        className: d().inputWrapper,
                                        children: [this.renderInput(y), y ? (0, n.jsx)("div", {
                                            className: d().hiddenMessage,
                                            children: f
                                        }) : null]
                                    }), (0, n.jsx)(c.Z, {
                                        shrink: 1,
                                        grow: 0,
                                        style: {
                                            margin: 0
                                        },
                                        children: (0, n.jsx)(s.Button, {
                                            className: d().button,
                                            onClick: this.handleButtonClick,
                                            size: s.ButtonSizes.MIN,
                                            color: e,
                                            look: h,
                                            children: a
                                        })
                                    })]
                                })
                            })
                        })
                    };
                    return r
                }(a.PureComponent);
            I.contextType = s.FormContext;
            I.defaultProps = {
                supportsCopy: !0,
                buttonColor: s.ButtonColors.PRIMARY,
                buttonLook: s.ButtonLooks.FILLED,
                mode: S.DEFAULT
            };
            I.Modes = S;
            I.ButtonColors = s.ButtonColors;
            I.ButtonLooks = s.ButtonLooks;
            const P = I
        },
        737797: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => _,
                v: () => O
            });
            var n = r(785893),
                a = r(667294),
                i = r(294184),
                o = r.n(i),
                s = r(392224),
                l = r(70418),
                c = r(2590),
                u = r(473708),
                f = r(932440),
                d = r.n(f);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        h(e, t, r[t])
                    }))
                }
                return e
            }

            function E(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function b(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (a[r] = e[r])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                }
                return a
            }

            function v(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var I, P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return v(this, r)
                }
            }! function(e) {
                e.TOP = "top";
                e.BOTTOM = "bottom"
            }(I || (I = {}));
            var O = {
                    container: function(e, t) {
                        var r = t.isDisabled;
                        return E(m({}, e), {
                            cursor: r ? "not-allowed" : void 0,
                            pointerEvents: void 0,
                            fontSize: 16,
                            fontWeight: 500,
                            width: "100%"
                        })
                    },
                    control: function(e, t) {
                        var r = t.isDisabled,
                            n = t.menuIsOpen;
                        return E(m({}, e), {
                            backgroundColor: "var(--input-background)",
                            borderColor: "var(--input-background)",
                            opacity: r ? .6 : 1,
                            boxShadow: void 0,
                            borderRadius: n ? "4px 4px 0 0" : "4px",
                            minHeight: 40,
                            transition: "border 0.15s ease",
                            cursor: r ? "not-allowed" : void 0,
                            pointerEvents: r ? "none" : void 0,
                            "&:hover": {
                                borderColor: "var(--input-background)"
                            }
                        })
                    },
                    singleValue: function(e, t) {
                        var r = t.isDisabled;
                        return E(m({}, e), {
                            color: "var(--interactive-normal)",
                            opacity: r ? .5 : 1
                        })
                    },
                    input: function(e) {
                        return E(m({}, e), {
                            color: "var(--interactive-normal)"
                        })
                    },
                    menu: function(e) {
                        return E(m({}, e), {
                            backgroundColor: "var(--background-secondary)",
                            border: "1px solid var(--background-tertiary)",
                            borderRadius: "0 0 4px 4px",
                            color: "var(--interactive-normal)",
                            marginTop: -1,
                            marginBottom: -1
                        })
                    },
                    clearIndicator: function(e, t) {
                        var r = t.isDisabled;
                        return E(m({}, e), {
                            color: "var(--interactive-normal)",
                            cursor: r ? void 0 : "pointer",
                            opacity: .3,
                            padding: "8px 0",
                            transform: "scale(0.8)",
                            ":hover": {
                                color: "var(--text-danger)",
                                opacity: 1
                            }
                        })
                    },
                    indicatorsContainer: function(e) {
                        return E(m({}, e), {
                            alignItems: "flex-start"
                        })
                    },
                    dropdownIndicator: function(e, t) {
                        var r = t.isDisabled;
                        return E(m({}, e), {
                            color: "var(--interactive-normal)",
                            cursor: r ? void 0 : "pointer",
                            opacity: r ? .3 : 1,
                            padding: "8px 8px 8px 0",
                            ":hover": {
                                color: "var(--interactive-hover)",
                                opacity: r ? .3 : 1
                            }
                        })
                    },
                    menuList: function(e) {
                        return E(m({}, e), {
                            padding: 0,
                            "&::-webkit-scrollbar": {
                                width: 8,
                                padding: "0px 2px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "var(--scrollbar-thin-thumb)",
                                border: "2px solid transparent",
                                backgroundClip: "padding-box",
                                borderRadius: 4
                            },
                            "&::-webkit-scrollbar-track-piece": {
                                backgroundColor: "transparent",
                                borderColor: "transparent"
                            }
                        })
                    },
                    option: function(e, t) {
                        var r = t.isSelected,
                            n = t.isFocused;
                        return E(m({}, e, r ? {
                            backgroundColor: "var(--background-modifier-selected)",
                            color: "var(--interactive-active)"
                        } : n ? {
                            backgroundColor: "var(--background-modifier-hover)",
                            color: "var(--interactive-hover)"
                        } : {
                            backgroundColor: "transparent",
                            color: "var(--interactive-normal)"
                        }), {
                            cursor: "pointer",
                            display: "flex",
                            padding: 12,
                            alignItems: "center",
                            minHeight: 40,
                            "&:active": {
                                backgroundColor: "var(--background-modifier-selected)",
                                color: "var(--interactive-active)"
                            }
                        })
                    },
                    placeholder: function(e) {
                        return E(m({}, e), {
                            color: "var(--text-muted)"
                        })
                    }
                },
                _ = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && S(e, t)
                    }(r, e);
                    var t = g(r);

                    function r() {
                        p(this, r);
                        var e;
                        (e = t.apply(this, arguments))._selectRef = a.createRef();
                        e._containerRef = a.createRef();
                        e.state = {
                            isFocused: !1,
                            isOpen: !1
                        };
                        e.handleFocus = function(t) {
                            var r, n;
                            e.setState({
                                isFocused: !0
                            });
                            null === (n = (r = e.props).onFocus) || void 0 === n || n.call(r, t)
                        };
                        e.handleBlur = function(t) {
                            var r, n;
                            e.setState({
                                isFocused: !1
                            });
                            null === (n = (r = e.props).onBlur) || void 0 === n || n.call(r, t)
                        };
                        e.handleKeyDown = function(t) {
                            t.which === c.yXg.ESCAPE && e.state.isOpen && t.stopPropagation()
                        };
                        e.handleMenuOpen = function() {
                            e.setState({
                                isOpen: !0
                            })
                        };
                        e.handleMenuClose = function() {
                            e.setState({
                                isOpen: !1
                            })
                        };
                        return e
                    }
                    var i = r.prototype;
                    i.focus = function() {
                        var e;
                        null === (e = this._selectRef.current) || void 0 === e || e.focus()
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.className,
                            r = e.selectClassName,
                            a = e.error,
                            i = e.valueRenderer,
                            c = e.optionRenderer,
                            f = e.multiValueRenderer,
                            p = e.options,
                            y = e.value,
                            v = e.autofocus,
                            S = e.disabled,
                            I = e.clearable,
                            P = e.searchable,
                            g = e.styleOverrides,
                            _ = e.isMulti,
                            C = e.placeholder,
                            A = e.filterOption,
                            T = e.closeMenuOnSelect,
                            j = void 0 === T || T,
                            R = m({}, b(e, ["className", "selectClassName", "error", "valueRenderer", "optionRenderer", "multiValueRenderer", "options", "value", "autofocus", "disabled", "clearable", "searchable", "styleOverrides", "isMulti", "placeholder", "filterOption", "closeMenuOnSelect"]));
                        null != v && (R.autoFocus = v);
                        null != S && (R.isDisabled = S);
                        null != I && (R.isClearable = I);
                        null != P && (R.isSearchable = P);
                        var N = {
                            IndicatorSeparator: function() {
                                return null
                            }
                        };
                        null != c && (N.Option = function(e) {
                            return (0, n.jsx)(s.wx.Option, E(m({}, e), {
                                children: c(e.data)
                            }))
                        });
                        null != i && (N.SingleValue = function(e) {
                            return (0, n.jsx)(s.wx.SingleValue, E(m({}, e), {
                                children: i(e.data)
                            }))
                        });
                        null != f && (N.MultiValue = function(e) {
                            return f(e.data)
                        });
                        var M, x = null != g ? g : O;
                        if (_ && Array.isArray(y)) {
                            var L = {};
                            p.forEach((function(e) {
                                L[String(e.value)] = e
                            }));
                            M = y.map((function(e) {
                                return L[String(e)]
                            }))
                        } else M = null != y ? p.find((function(e) {
                            return e.value === y
                        })) : null;
                        return (0, n.jsx)(l.FocusRing, {
                            focused: this.state.isFocused && !this.state.isOpen,
                            ringTarget: this._containerRef,
                            children: (0, n.jsxs)("div", {
                                className: o()(d().select, t, h({}, d().error, null != a)),
                                ref: this._containerRef,
                                children: [(0, n.jsx)(s.ZP, E(m({}, R), {
                                    className: r,
                                    ref: this._selectRef,
                                    isMulti: _,
                                    components: N,
                                    options: p,
                                    styles: x,
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onMenuOpen: this.handleMenuOpen,
                                    onMenuClose: this.handleMenuClose,
                                    closeMenuOnSelect: j,
                                    value: M,
                                    onKeyDown: this.handleKeyDown,
                                    placeholder: null != C ? C : u.Z.Messages.SELECT,
                                    noOptionsMessage: function() {
                                        return u.Z.Messages.NO_RESULTS_FOUND
                                    },
                                    filterOption: A
                                })), null != a ? (0, n.jsx)("div", {
                                    className: d().errorMessage,
                                    children: a
                                }) : null]
                            })
                        })
                    };
                    return r
                }(a.Component);
            _.MenuPlacements = I
        },
        856236: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(785893),
                a = (r(667294), r(633878));

            function i(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function o(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (a[r] = e[r])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                }
                return a
            }

            function l(e) {
                var t = e.width,
                    r = void 0 === t ? 14 : t,
                    l = e.height,
                    c = void 0 === l ? 14 : l,
                    u = e.color,
                    f = void 0 === u ? "currentColor" : u,
                    d = e.foreground,
                    p = s(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsx)("svg", o(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            i(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, a.Z)(p)), {
                    width: r,
                    height: c,
                    viewBox: "0 0 14 14",
                    children: (0, n.jsx)("path", {
                        className: d,
                        fill: f,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                }))
            }
        },
        685269: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var n = r(667294);
            var a = [];

            function i(e, t) {
                var r = (0, n.useRef)(),
                    i = (0, n.useRef)(a);
                if (i.current === a) {
                    r.current = e();
                    i.current = t
                } else if (! function(e, t) {
                        if (e.length !== t.length) return !1;
                        for (var r = 0; r < t.length && r < e.length; r++)
                            if (!Object.is(e[r], t[r])) return !1;
                        return !0
                    }(t, i.current)) {
                    r.current = e();
                    i.current = t
                }
                return r.current
            }
        }
    }
]);