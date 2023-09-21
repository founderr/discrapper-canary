(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35751], {
        475772: (e, n, t) => {
            e.exports = t.p + "e61bfff1a364621603633d99d2f29f9d.svg"
        },
        473958: (e, n, t) => {
            e.exports = t.p + "e9b7e8263689da11886b9b9c9fc9aef1.svg"
        },
        34837: (e, n, t) => {
            e.exports = t.p + "f3b288c47e9e1de44dd734bb7611c1e4.svg"
        },
        293714: (e, n, t) => {
            e.exports = t.p + "01f1ebdffe8444d968a146d41d5dc2fc.svg"
        },
        140914: (e, n, t) => {
            e.exports = t.p + "94aef594b95ade8d06e7352d12f46305.svg"
        },
        11371: (e, n, t) => {
            e.exports = t.p + "0451500560abfa448183f0e8449e16f0.svg"
        },
        452004: (e, n, t) => {
            e.exports = t.p + "ad0f83d2caba179082a0b279f60736d0.svg"
        },
        79388: (e, n, t) => {
            e.exports = t.p + "30e68910bd70527f2074a0df0779206f.svg"
        },
        381511: (e, n, t) => {
            e.exports = t.p + "4478068f751e2049708b077226c4c2dc.svg"
        },
        561418: (e, n, t) => {
            e.exports = t.p + "223cd9663ce71bcb429e286b4eaed049.svg"
        },
        190555: (e, n, t) => {
            e.exports = t.p + "074e77dd9b5f48195fd402d5a04cb3ce.svg"
        },
        902954: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });
            var r = t(202351),
                i = t(711531),
                a = t(536392);

            function s() {
                var e = (0, r.e7)([a.Z], (function() {
                    return a.Z.getPremiumTypeSubscription()
                }));
                return (0, r.e7)([i.Z], (function() {
                    var n;
                    return null != (null == e ? void 0 : e.paymentSourceId) ? null === (n = i.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                }))
            }
        },
        668900: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => M,
                U: () => N
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                a = t.n(i),
                s = t(441143),
                o = t.n(s),
                l = t(265367),
                u = t(348592),
                c = t(260561);
            const d = (0, c.B)({
                    kind: "user",
                    id: "2022-12_localized_pricing_poland_notice",
                    label: "Localized Pricing Poland Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Poland Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                I = (0, c.B)({
                    kind: "user",
                    id: "2023-05_localized_pricing_turkey_notice",
                    label: "Localized Pricing Turkey Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Turkey Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                });
            var _ = t(902954),
                m = t(2590),
                p = t(473708),
                f = t(407156),
                E = t.n(f);

            function N() {
                var e = (0, _.Z)(),
                    n = d.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    t = I.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return null != e && ("PL" === e ? n : "TR" === e && t)
            }

            function T(e, n) {
                return "PL" === e ? n ? p.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : p.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? n ? p.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : p.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? p.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : p.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const M = function(e) {
                var n = e.fromBoostCancelModal,
                    t = e.className,
                    i = (0, _.Z)();
                if (!N()) return null;
                o()(null != i, "Subscription billing country should not be null");
                return (0, r.jsxs)("div", {
                    className: a()(E().noticeRoot, t),
                    children: [(0, r.jsx)("div", {
                        className: E().iconContainer,
                        children: (0, r.jsx)(l.Z, {
                            className: E().infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: E().text,
                        children: T(i, n).format({
                            helpCenterLink: u.Z.getArticleURL(m.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        16703: (e, n, t) => {
            "use strict";
            t.d(n, {
                PO: () => I,
                q9: () => _,
                R$: () => m,
                i$: () => p,
                KU: () => f,
                Ji: () => E,
                HE: () => N
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                a = t.n(i),
                s = t(73904),
                o = t(249052),
                l = t(473708),
                u = t(884092),
                c = t.n(u);

            function d(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function I(e) {
                var n = e.children,
                    t = e.className;
                return (0, r.jsx)("div", {
                    className: a()(c().table, t),
                    children: n
                })
            }

            function _(e) {
                var n = e.children;
                return (0, r.jsx)("div", {
                    className: c().header,
                    children: n
                })
            }

            function m(e) {
                var n = e.label,
                    t = e.value,
                    i = e.className;
                return (0, r.jsxs)("div", {
                    className: a()(c().row, i),
                    children: [(0, r.jsx)("div", {
                        className: c().rowLabel,
                        children: n
                    }), (0, r.jsx)("div", {
                        className: c().rowAmount,
                        children: t
                    })]
                })
            }

            function p(e) {
                var n = e.label,
                    t = e.value,
                    i = e.discounts,
                    a = e.originalAmount,
                    u = e.interval,
                    d = e.currency,
                    I = e.className,
                    _ = e.intervalCount,
                    p = function(e) {
                        return null != i ? i.find((function(n) {
                            return n.type === e
                        })) : null
                    },
                    f = p(s.eW.SUBSCRIPTION_PLAN),
                    E = p(s.eW.ENTITLEMENT),
                    N = null != f ? Math.floor(f.amount / a * 100) : null,
                    T = (0, o.T4)(a, d);
                return (0,
                    r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(m, {
                        label: n,
                        value: (0, r.jsxs)(r.Fragment, {
                            children: [t, null != N ? (0, r.jsxs)("div", {
                                className: c().rowPercentDiscount,
                                children: ["-", N, "%"]
                            }) : null]
                        }),
                        className: I
                    }), null != N ? (0, r.jsxs)("div", {
                        className: c().rowDiscountOriginalPrice,
                        children: ["(", null != u && null != _ ? (0, o.og)(T, u, _) : T, ")"]
                    }) : null, null != E ? (0, r.jsx)("div", {
                        className: c().entitlementDiscountRow,
                        children: l.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function f(e) {
                var n, t = e.extended,
                    i = void 0 !== t && t,
                    s = e.negativeMarginTop,
                    o = void 0 !== s && s;
                return (0, r.jsx)("div", {
                    className: a()(c().divider, (n = {}, d(n, c().dividerExtended, i), d(n, c().negativeMarginTop, o), n))
                })
            }

            function E(e) {
                var n = e.label,
                    t = e.value,
                    i = e.className;
                return (0, r.jsxs)("div", {
                    className: a()(c().totalRow, i),
                    children: [(0, r.jsx)("div", {
                        className: c().totalLabel,
                        children: n
                    }), (0, r.jsx)("div", {
                        className: c().totalAmount,
                        children: t
                    })]
                })
            }

            function N(e) {
                var n = e.children,
                    t = e.className;
                return (0, r.jsx)("div", {
                    className: a()(c().finePrint, t),
                    children: n
                })
            }
        },
        35751: (e, n, t) => {
            "use strict";
            t.r(n);
            t.d(n, {
                Steps: () => k,
                default: () => q
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                s = t.n(a),
                o = t(441143),
                l = t.n(o),
                u = t(202351),
                c = t(575945),
                d = t(882723),
                I = t(673679),
                _ = t(74535),
                m = t(153686),
                p = t(19585),
                f = t(387099),
                E = t(551778),
                N = t(107364),
                T = t(652591),
                M = t(348592),
                v = t(116094),
                C = t(249052),
                P = t(100749),
                L = t(16703),
                R = t(396546),
                O = t(509897),
                b = t(646875),
                A = t(301162),
                y = t(111090),
                S = t(203600),
                g = t(2590),
                h = t(473708),
                x = t(688067),
                U = t.n(x);

            function j(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Z(e, n, t, r, i, a, s) {
                try {
                    var o = e[a](s),
                        l = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(r, i)
            }

            function w(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var a = e.apply(n, t);

                        function s(e) {
                            Z(a, r, i, s, o, "next", e)
                        }

                        function o(e) {
                            Z(a, r, i, s, o, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function D(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function B(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        D(e, n, t[n])
                    }))
                }
                return e
            }

            function G(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            s = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return j(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k, Y, W = function(e, n) {
                var t, r, i, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function o(a) {
                    return function(o) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                (r = 0, i) && (a = [2 & a[0], i.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1];
                                            i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2];
                                            s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                a = n.call(e, s)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, o])
                    }
                }
            };
            ! function(e) {
                e[e.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE";
                e[e.CONFIRM = 2] = "CONFIRM";
                e[e.PREVIEW = 3] = "PREVIEW"
            }(k || (k = {}));

            function H(e) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = w((function(e) {
                    var n, t, r, i, a, s, o, l, u, c;
                    return W(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                n = e.premiumSubscription, t = e.onClose, r = e.setHasError, i = e.setIsCancelling, a = e.analyticsLocations, s = e.analyticsLocation;
                                d.label = 1;
                            case 1:
                                d.trys.push([1, 6, , 7]);
                                i(!0);
                                r(!1);
                                return n.status !== g.O0b.PAST_DUE ? [3, 3] : [4, (0, I.EO)(n.id, a, s)];
                            case 2:
                                d.sent();
                                return [3, 5];
                            case 3:
                                u = null !== (l = null === (o = n.renewalMutations) || void 0 === o ? void 0 : o.items) && void 0 !== l ? l : n.items;
                                return [4, (0, I.Mg)(n, {
                                    items: (0, v.Ue)(u)
                                }, a, s)];
                            case 4:
                                d.sent();
                                d.label = 5;
                            case 5:
                                t();
                                null != (c = v.ZP.getPremiumType(n.planId)) && $({
                                    premiumType: c
                                });
                                return [3, 7];
                            case 6:
                                d.sent();
                                r(!0);
                                i(!1);
                                return [3, 7];
                            case 7:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(e) {
                var n, t = e.premiumSubscription,
                    a = e.premiumType,
                    s = e.setStep,
                    o = e.onClose,
                    l = e.whatYouLoseExperienceEnabled,
                    u = e.analyticsLocation,
                    I = (0, f.Q)(),
                    m = G(i.useState(!1), 2),
                    E = m[0],
                    T = m[1],
                    C = G(i.useState(!1), 2),
                    P = C[0],
                    L = C[1],
                    R = (0, _.ZP)(),
                    O = (0, p.Z)().analyticsLocations,
                    b = null;
                b = t.status === g.O0b.PAST_DUE ? h.Z.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : a === S.p9.TIER_0 ? I ? h.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
                    date: t.currentPeriodEnd,
                    helpdeskArticle: M.Z.getArticleURL(g.BhN.BLOCKED_PAYMENTS)
                }) : h.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
                    date: t.currentPeriodEnd
                }) : a === S.p9.TIER_1 ? I ? h.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
                    date: t.currentPeriodEnd,
                    helpdeskArticle: M.Z.getArticleURL(g.BhN.BLOCKED_PAYMENTS)
                }) : h.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
                    date: t.currentPeriodEnd
                }) : I ? h.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
                    date: t.currentPeriodEnd,
                    helpdeskArticle: M.Z.getArticleURL(g.BhN.BLOCKED_PAYMENTS)
                }) : h.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
                    date: t.currentPeriodEnd
                });
                var y = t.items.some((function(e) {
                        var n = e.planId;
                        return !S.dJ.has(n)
                    })),
                    x = y && null == t.renewalMutations || null != (null === (n = t.renewalMutations) || void 0 === n ? void 0 : n.items.find((function(e) {
                        var n = e.planId;
                        return !S.dJ.has(n)
                    }))),
                    j = x ? (0, r.jsx)(d.Button, {
                        onClick: function() {
                            return s(k.PREVIEW)
                        },
                        children: h.Z.Messages.NEXT
                    }) : (0, r.jsx)(d.Button, {
                        color: d.Button.Colors.RED,
                        disabled: E,
                        onClick: w((function() {
                            return W(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, H({
                                            setHasError: L,
                                            onClose: o,
                                            premiumSubscription: t,
                                            setIsCancelling: T,
                                            analyticsLocations: O,
                                            analyticsLocation: u
                                        })];
                                    case 1:
                                        e.sent();
                                        return [2]
                                }
                            }))
                        })),
                        children: l ? h.Z.Messages.CONFIRM : h.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                            planPremiumType: v.ZP.getDisplayPremiumType(t.planId)
                        })
                    }),
                    Z = (0, r.jsx)(d.Button, {
                        look: d.Button.Looks.LINK,
                        color: (0, c.ap)(R) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                        onClick: o,
                        children: l ? h.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : h.Z.Messages.CANCEL
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [l ? (0, r.jsx)(A.Z, {
                        premiumType: a,
                        className: U().cancellationHeader,
                        onClose: o
                    }) : (0, r.jsxs)(d.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)(d.FormTitle, {
                            tag: d.FormTitleTags.H4,
                            children: h.Z.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
                                planPremiumType: v.ZP.getDisplayPremiumType(t.planId)
                            })
                        }), (0, r.jsx)(d.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, r.jsxs)(d.ModalContent, {
                        className: U().body,
                        children: [P ? (0, r.jsx)(d.FormErrorBlock, {
                            className: U().errorBlock,
                            children: h.Z.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0,
                            r.jsx)("div", {
                            className: U().cancelImage
                        }), (0, r.jsx)("div", {
                            children: b
                        })]
                    }), (0, r.jsxs)(d.ModalFooter, {
                        justify: N.Z.Justify.START,
                        children: [j, Z]
                    })]
                })
            }

            function K(e) {
                var n, t, i = e.premiumSubscription,
                    a = (0, p.Z)().analyticsLocations,
                    s = G((0, P.ED)({
                        subscriptionId: i.id,
                        items: (0, v.Ue)(null !== (t = null === (n = i.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== t ? t : i.items),
                        renewal: !0,
                        analyticsLocations: a,
                        analyticsLocation: m.Z.CANCEL_INVOICE_PREVIEW
                    }), 1)[0],
                    o = (0, u.e7)([E.Z], (function() {
                        return E.Z.get(i.planId)
                    }));
                if (null == s || null == o) return (0, r.jsx)(d.Spinner, {
                    className: U().loading
                });
                var l = v.ZP.getIntervalForInvoice(s),
                    c = l.intervalType,
                    I = l.intervalCount;
                return (0, r.jsxs)("div", {
                    className: U().bodyText,
                    children: [(0, r.jsx)("div", {
                        className: U().renewalInvoiceDate,
                        children: 0 !== s.total ? h.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
                            renewalDate: s.subscriptionPeriodStart,
                            rate: (0, C.og)((0, C.T4)(s.total, s.currency), c, I)
                        }) : h.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: s.subscriptionPeriodStart
                        })
                    }), (0, r.jsxs)(L.PO, {
                        children: [(0, r.jsx)(L.q9, {
                            children: h.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, r.jsx)(L.R$, {
                            label: h.Z.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
                                planName: v.ZP.getDisplayName(o.id)
                            }),
                            value: (0, v.PK)(o),
                            className: U().invoiceCancelRow
                        }), (0, r.jsx)(L.KU, {}), (0, r.jsx)(b.nd, {
                            premiumSubscription: i,
                            renewalInvoice: s,
                            isUpdate: !0
                        })]
                    })]
                })
            }

            function X(e) {
                var n = e.premiumSubscription,
                    t = e.premiumType,
                    a = e.onBack,
                    o = e.onClose,
                    l = e.analyticsLocation,
                    u = G(i.useState(!1), 2),
                    c = u[0],
                    I = u[1],
                    _ = G(i.useState(!1), 2),
                    m = _[0],
                    f = _[1],
                    E = (0, p.Z)().analyticsLocations;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(A.Z, {
                        premiumType: t,
                        onClose: o
                    }), (0, r.jsxs)(d.ModalContent, {
                        className: s()(U().previewStep, U().body),
                        children: [m ? (0, r.jsx)(d.FormErrorBlock, {
                            className: U().errorBlock,
                            children: h.Z.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, r.jsx)(K, {
                            premiumSubscription: n
                        })]
                    }), (0, r.jsxs)(d.ModalFooter, {
                        align: N.Z.Align.CENTER,
                        justify: N.Z.Justify.BETWEEN,
                        children: [(0,
                            r.jsx)(d.Button, {
                            color: d.Button.Colors.RED,
                            disabled: c,
                            onClick: w((function() {
                                return W(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, H({
                                                setHasError: f,
                                                onClose: o,
                                                premiumSubscription: n,
                                                setIsCancelling: I,
                                                analyticsLocations: E,
                                                analyticsLocation: l
                                            })];
                                        case 1:
                                            e.sent();
                                            return [2]
                                    }
                                }))
                            })),
                            children: h.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                                planPremiumType: v.ZP.getDisplayPremiumType(n.planId)
                            })
                        }), (0, r.jsx)(O.Z, {
                            onClick: a
                        })]
                    })]
                })
            }

            function z(e) {
                var n;
                return {
                    subscription_id: e.id,
                    subscription_type: e.type,
                    subscription_plan_id: null === (n = (0, v.Af)(e)) || void 0 === n ? void 0 : n.id,
                    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
                }
            }
            var J = (D(Y = {}, k.WHAT_YOU_LOSE, "What You're Losing"), D(Y, k.CONFIRM, "Confirm Cancellation"), D(Y, k.PREVIEW, "Preview Updated Subscription"), Y);

            function q(e) {
                var n, t = e.premiumSubscription,
                    a = e.transitionState,
                    s = e.onClose,
                    o = e.analyticsLocations,
                    u = e.analyticsLocation,
                    I = null === (n = (0, v.Af)(t)) || void 0 === n ? void 0 : n.planId,
                    f = null != I ? v.ZP.getPremiumType(I) : null;
                l()(null != f, "Should not be cancelling Nitro without premiumType");
                var E = (0, _.ZP)();
                i.useEffect((function() {
                    T.default.track(g.rMx.CANCELLATION_FLOW_STARTED, z(t))
                }), [t]);
                var N = f === S.p9.TIER_0 || f === S.p9.TIER_1 || f === S.p9.TIER_2,
                    M = N ? k.WHAT_YOU_LOSE : k.CONFIRM,
                    C = (0, p.Z)(o, m.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL).AnalyticsLocationProvider,
                    P = G(function(e, n, t) {
                        var r = G(i.useState(e), 2),
                            a = r[0],
                            s = r[1],
                            o = G(i.useState(Date.now()), 2),
                            l = o[0],
                            u = o[1],
                            c = G(i.useState(Date.now()), 1)[0],
                            d = i.useCallback((function(e) {
                                T.default.track(g.rMx.CANCELLATION_FLOW_STEP, B({
                                    from_step: J[a],
                                    to_step: J[e],
                                    step_duration_ms: Date.now() - l,
                                    flow_duration_ms: Date.now() - c,
                                    location_stack: t
                                }, z(n)));
                                s(e);
                                u(Date.now())
                            }), [t, c, l, a, n]);
                        return [a, d, l, c]
                    }(M, t, o), 4),
                    L = P[0],
                    O = P[1],
                    b = P[2],
                    A = P[3];
                (0, y.w)(t, s, !1);
                var x, j = function(e) {
                    s();
                    T.default.track(g.rMx.CANCELLATION_FLOW_STEP, B({
                        from_step: J[e],
                        to_step: null,
                        step_duration_ms: Date.now() - b,
                        flow_duration_ms: Date.now() - A,
                        location_stack: o
                    }, z(t)))
                };
                switch (L) {
                    case k.WHAT_YOU_LOSE:
                        x = (0,
                            r.jsx)(R.Z, {
                            premiumType: f,
                            titleText: h.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
                            subtitleText: h.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
                            footer: (0, r.jsxs)("div", {
                                className: U().whatYouLoseButtonContainer,
                                children: [(0, r.jsx)(d.Button, {
                                    onClick: function() {
                                        return O(k.CONFIRM)
                                    },
                                    children: h.Z.Messages.CONTINUE
                                }), (0, r.jsx)(d.Button, {
                                    look: d.Button.Looks.LINK,
                                    color: (0, c.wj)(E) ? d.Button.Colors.WHITE : d.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        return j(L)
                                    },
                                    children: h.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                                })]
                            }),
                            onClose: function() {
                                return j(L)
                            }
                        });
                        break;
                    case k.CONFIRM:
                        x = (0, r.jsx)(V, {
                            premiumSubscription: t,
                            premiumType: f,
                            setStep: O,
                            onClose: function() {
                                return j(L)
                            },
                            whatYouLoseExperienceEnabled: N,
                            analyticsLocation: u
                        });
                        break;
                    case k.PREVIEW:
                        x = (0, r.jsx)(X, {
                            premiumSubscription: t,
                            premiumType: f,
                            onBack: function() {
                                return O(k.CONFIRM)
                            },
                            onClose: function() {
                                return j(L)
                            },
                            analyticsLocation: u
                        });
                        break;
                    default:
                        throw new Error("Unexpected step: ".concat(L))
                }
                return (0, r.jsx)(C, {
                    children: (0,
                        r.jsx)(d.ModalRoot, {
                        transitionState: a,
                        children: x
                    })
                })
            }

            function $(e) {
                T.default.track(g.rMx.OPEN_MODAL, {
                    type: "Nitro Churn Survey"
                });
                return (0, d.openModalLazy)(w((function() {
                    var n, i;
                    return W(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(92145)]).then(t.bind(t, 892145))];
                            case 1:
                                n = a.sent(), i = n.default;
                                return [2, function(n) {
                                    return (0, r.jsx)(i, B({}, n, e))
                                }]
                        }
                    }))
                })))
            }
        },
        396546: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => Ze
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                s = t.n(a),
                o = t(441143),
                l = t.n(o),
                u = t(496486),
                c = t.n(u),
                d = t(498964),
                I = t(202351),
                _ = t(575945),
                m = t(882723),
                p = t(744564),
                f = t(653224),
                E = t(734691),
                N = t(74535),
                T = t(316878),
                M = t(795470),
                v = t(589503),
                C = t(420881),
                P = t(166232),
                L = t(600277),
                R = t(736626),
                O = t(183490),
                b = t(76834),
                A = t(485552),
                y = t(567403),
                S = t(473903),
                g = t(775506),
                h = t(124251),
                x = t(535083),
                U = t(217674),
                j = t(95891),
                Z = t(98265),
                w = t(652591),
                D = t(775173),
                B = t(348592),
                G = t(310126),
                k = t(902954),
                Y = t(668900),
                W = t(301162),
                H = t(203600),
                F = t(2590),
                V = t(960412),
                K = t(473708),
                X = t(986703),
                z = t.n(X),
                J = t(475772),
                q = t.n(J),
                $ = t(473958),
                Q = t.n($),
                ee = t(34837),
                ne = t.n(ee),
                te = t(293714),
                re = t.n(te),
                ie = t(140914),
                ae = t.n(ie),
                se = t(11371),
                oe = t.n(se),
                le = t(452004),
                ue = t.n(le),
                ce = t(79388),
                de = t.n(ce),
                Ie = t(381511),
                _e = t.n(Ie),
                me = t(561418),
                pe = t.n(me),
                fe = t(190555),
                Ee = t.n(fe);

            function Ne(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function Te(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Me() {
                Me = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                };
                return Me.apply(this, arguments)
            }

            function ve(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function Ce(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            s = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ne(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ne(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Pe = G.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
                Le = {
                    boostItemVisual: ae(),
                    emojiStickersVisual: oe(),
                    screenShareItemVisual: pe(),
                    uploadsMessagesItemVisual: ue(),
                    uploadsMessagesItemVisualV2: de(),
                    PL: _e(),
                    TR: Ee()
                },
                Re = {
                    boostItemVisual: q(),
                    emojiStickersVisual: Q(),
                    screenShareItemVisual: pe(),
                    uploadsMessagesItemVisual: ne(),
                    uploadsMessagesItemVisualV2: re(),
                    PL: _e(),
                    TR: Ee()
                };

            function Oe() {
                var e = (0, N.ZP)();
                return (0, _.wj)(e) ? Re : Le
            }

            function be(e) {
                var n = e.description,
                    t = e.onLearnMore,
                    i = e.renderVisual;
                return (0, r.jsxs)("div", {
                    className: z().whatYouLoseItem,
                    children: [(0, r.jsxs)("div", {
                        className: z().whatYouLoseItemLeftColumn,
                        children: [(0, r.jsx)(m.Text, {
                            variant: "text-md/normal",
                            children: n
                        }), (0, r.jsx)(m.Button, {
                            look: m.Button.Looks.LINK,
                            color: m.Button.Colors.LINK,
                            size: m.Button.Sizes.NONE,
                            className: z().whatYouLoseItemLearnMore,
                            onClick: t,
                            children: K.Z.Messages.LEARN_MORE
                        })]
                    }), (0, r.jsx)("div", {
                        className: z().whatYouLoseItemRightColumn,
                        children: i()
                    })]
                })
            }

            function Ae(e) {
                var n = Me({}, e),
                    t = (0, N.ZP)(),
                    a = i.useContext(A.f).profileTheme,
                    s = (0, M.O0)(F.tPk.INTERACTIVE_ACTIVE, null != a ? a : t);
                return (0, r.jsx)(j.Z, ve(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            Te(e, n, t[n])
                        }))
                    }
                    return e
                }({}, n), {
                    color: s.hex
                }))
            }

            function ye(e) {
                var n = e.currentUser,
                    t = e.premiumType,
                    i = e.onClose,
                    a = (0, O.Z)(n.id),
                    s = (0, I.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    o = t === H.p9.TIER_1,
                    l = (0, d.EQ)(null == a ? void 0 : a.premiumType).with(H.p9.TIER_2, (function() {
                        return (0, r.jsxs)(A.Z, {
                            forceShowPremium: !0,
                            user: n,
                            profileType: V.y0.CANCEL_MODAL,
                            className: z().profileCard,
                            children: [(0, r.jsx)("div", {
                                className: z().profileBanner,
                                children: (0, r.jsx)(b.Z, {
                                    displayProfile: a,
                                    user: n,
                                    allowEdit: !1,
                                    profileType: V.y0.CANCEL_MODAL
                                })
                            }), (0, r.jsx)(Pe, {
                                className: z().profileAvatar,
                                src: n.getAvatarURL(void 0, (0, m.getAvatarSize)(m.AvatarSizes.SIZE_56), !s),
                                size: m.AvatarSizes.SIZE_56,
                                "aria-label": n.username
                            }), (0, r.jsx)(A.Z.Inner, {
                                className: z().profileInner,
                                children: (0, r.jsxs)("div", {
                                    className: z().profileUserInfo,
                                    children: [(0, r.jsx)(x.Z, {
                                        className: z().profileNameTag,
                                        usernameClass: z().profileNameTagUsername,
                                        name: n.toString()
                                    }), (0, r.jsx)(Ae, {
                                        className: z().profilePremiumIcon
                                    })]
                                })
                            })]
                        })
                    })).otherwise((function() {
                        return (0, r.jsxs)("div", {
                            className: z().profileCardTier1,
                            children: [(0, r.jsx)(Pe, {
                                className: z().profileAvatarTier1,
                                src: n.getAvatarURL(void 0, (0, m.getAvatarSize)(m.AvatarSizes.SIZE_56), !s),
                                size: m.AvatarSizes.SIZE_56,
                                "aria-label": n.username
                            }), (0, r.jsxs)("div", {
                                className: z().profileUserInfoTier1,
                                children: [(0, r.jsx)(x.Z, {
                                    className: z().profileNameTag,
                                    usernameClass: z().profileNameTagUsername,
                                    name: n.toString()
                                }), (0, r.jsx)(j.Z, {
                                    className: z().profilePremiumIcon
                                })]
                            })]
                        })
                    }));
                return (0, r.jsx)(be, {
                    description: o ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
                    onLearnMore: function() {
                        i();
                        E.Z.open(F.oAB.PROFILE_CUSTOMIZATION);
                        w.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "user_profile_customization"
                        })
                    },
                    renderVisual: function() {
                        return l
                    }
                }, "profile-item")
            }

            function Se(e) {
                var n = e.premiumType,
                    t = (0, I.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    i = (0, v.wC)(null).filter((function(e) {
                        return e.type === C.B.GUILD && (e.animated || null != e.guildId)
                    })).slice(0, 3),
                    a = (0, I.Wu)([P.Z], (function() {
                        return P.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - i.length)
                    })),
                    s = Oe().emojiStickersVisual,
                    o = n === H.p9.TIER_1;
                return (0, r.jsx)(be, {
                    description: o ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
                    onLearnMore: function() {
                        window.open(B.Z.getArticleURL(F.BhN.PREMIUM_DETAILS));
                        w.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "emojis_stickers"
                        })
                    },
                    renderVisual: function() {
                        return null != i && i.length > 0 || !o && null != a && a.length > 0 ? (0, r.jsxs)("div", {
                            className: z().emojiStickersPersonalizedContainer,
                            children: [i.map((function(e) {
                                return null == e.id ? e.url : D.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: !t && e.animated,
                                    size: 58
                                })
                            })).map((function(e) {
                                return null != e ? (0, r.jsx)("img", {
                                    className: z().personalizedEmoji,
                                    alt: "",
                                    src: e
                                }) : null
                            })), o ? null : a.map((function(e) {
                                return (0, r.jsx)(L.ZP, {
                                    disableAnimation: t,
                                    sticker: e,
                                    size: 58,
                                    withLoadingIndicator: !1
                                }, e.id)
                            }))]
                        }) : (0, r.jsx)("img", {
                            className: z().nonPersonalizedGraphic,
                            alt: "",
                            src: s
                        })
                    }
                }, "emoji-stickers-item")
            }

            function ge(e) {
                var n = e.premiumType,
                    t = e.onClose;
                i.useEffect((function() {
                    return p.Z.wait((function() {
                        return (0, f.X8)()
                    }))
                }), []);
                var a = (0, I.e7)([T.Z], (function() {
                        return T.Z.useReducedMotion
                    })),
                    o = Ce((0, I.Wu)([g.Z, y.Z], (function() {
                        var e = g.Z.boostSlots,
                            n = new Map;
                        c()(e).map("premiumGuildSubscription").map("guildId").forEach((function(e) {
                            if (null != y.Z.getGuild(e)) {
                                var t, r = null !== (t = n.get(e)) && void 0 !== t ? t : 0;
                                n.set(e, r + 1)
                            }
                        }));
                        var t = null,
                            r = 0;
                        if (n.size > 0) {
                            var i;
                            t = (i = Ce(Array.from(n.entries()).reduce((function(e, n) {
                                return n[1] > e[1] ? n : e
                            })), 2))[0], r = i[1]
                        }
                        return [y.Z.getGuild(t), r]
                    })), 2),
                    l = o[0],
                    u = o[1],
                    d = null != l && u > 0,
                    _ = Oe().boostItemVisual;
                return (0, r.jsx)(be, {
                    description: n === H.p9.TIER_1 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
                    onLearnMore: function() {
                        t();
                        E.Z.open(F.oAB.GUILD_BOOSTING);
                        w.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "boosts"
                        })
                    },
                    renderVisual: function() {
                        return d ? (0, r.jsx)("div", {
                            className: z().boostCardContainer,
                            children: (0, r.jsxs)("div", {
                                className: z().boostCard,
                                children: [(0, r.jsx)(h.Z, {
                                    guild: l,
                                    size: h.Z.Sizes.MEDIUM,
                                    animate: !a,
                                    className: z().boostCardIcon
                                }), (0, r.jsxs)("div", {
                                    className: z().boostCardInfo,
                                    children: [(0, r.jsx)(m.Text, {
                                        variant: "text-md/normal",
                                        className: s()(z().textSingleLineEllipsis, z().boostCardTitle),
                                        children: l.name
                                    }), (0, r.jsxs)("div", {
                                        className: z().boostCardSubtitle,
                                        children: [(0, r.jsx)(U.Z, {
                                            className: z().boostCardGem
                                        }), (0, r.jsx)(m.Text, {
                                            variant: "text-xs/normal",
                                            className: s()(z().textSingleLineEllipsis, z().boostCardCount),
                                            children: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                                                boostCount: u
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }) : (0, r.jsx)("img", {
                            alt: "",
                            src: _
                        })
                    }
                }, "boost-item")
            }
            var he = function() {
                var e = Oe().screenShareItemVisual;
                return (0, r.jsx)(be, {
                    description: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
                    onLearnMore: function() {
                        window.open(B.Z.getArticleURL(F.BhN.STREAM_QUALITY_SETTINGS));
                        w.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "screen_share"
                        })
                    },
                    renderVisual: function() {
                        return (0, r.jsx)("img", {
                            alt: "",
                            src: e
                        })
                    }
                }, "screen-share-item")
            };

            function xe(e) {
                var n = e.premiumType,
                    t = Oe().uploadsMessagesItemVisual;
                return (0, r.jsx)(be, {
                    description: n === H.p9.TIER_2 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
                    onLearnMore: function() {
                        window.open(B.Z.getArticleURL(F.BhN.PREMIUM_DETAILS));
                        w.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "msgs_uploads"
                        })
                    },
                    renderVisual: function() {
                        return (0, r.jsx)("img", {
                            alt: "",
                            src: t
                        })
                    }
                }, "uploads-item")
            }
            var Ue = function(e) {
                var n = e.country,
                    t = Oe(),
                    i = "PL" === n ? t.PL : t.TR;
                return (0, r.jsx)(be, {
                    description: ("PL" === n ? K.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : K.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
                    onLearnMore: function() {
                        window.open(B.Z.getArticleURL(F.BhN.LOCALIZED_PRICING));
                        w.default.track(F.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "grandfathered_prices"
                        })
                    },
                    renderVisual: function() {
                        return (0, r.jsx)("img", {
                            alt: "",
                            src: i
                        })
                    }
                }, "grandfathered-prices-item")
            };

            function je(e) {
                var n = e.currentUser,
                    t = e.premiumType,
                    a = e.onClose,
                    s = e.isDowngrade,
                    o = void 0 !== s && s,
                    u = (0, k.Z)(),
                    c = (0, Y.U)(),
                    d = i.useMemo((function() {
                        var e = [];
                        if (c) {
                            l()(null != u, "Subscription billing country should not be null");
                            e.push((0, r.jsx)(Ue, {
                                country: u
                            }))
                        }
                        switch (t) {
                            case H.p9.TIER_0:
                                e.push((0, r.jsx)(Se, {
                                    premiumType: t
                                }), (0, r.jsx)(xe, {
                                    premiumType: t
                                }));
                                break;
                            case H.p9.TIER_1:
                                o ? e.push((0, r.jsx)(ye, {
                                    currentUser: n,
                                    premiumType: t,
                                    onClose: a
                                }), (0, r.jsx)(he, {}), (0, r.jsx)(ge, {
                                    premiumType: t,
                                    onClose: a
                                })) : e.push((0, r.jsx)(ye, {
                                    currentUser: n,
                                    premiumType: t,
                                    onClose: a
                                }), (0, r.jsx)(Se, {
                                    premiumType: t
                                }), (0, r.jsx)(he, {}), (0, r.jsx)(xe, {
                                    premiumType: t
                                }), (0, r.jsx)(ge, {
                                    premiumType: t,
                                    onClose: a
                                }));
                                break;
                            case H.p9.TIER_2:
                                o ? e.push((0, r.jsx)(ye, {
                                    currentUser: n,
                                    premiumType: t,
                                    onClose: a
                                }), (0, r.jsx)(ge, {
                                    premiumType: t,
                                    onClose: a
                                }), (0, r.jsx)(he, {})) : e.push((0, r.jsx)(ye, {
                                    currentUser: n,
                                    premiumType: t,
                                    onClose: a
                                }), (0, r.jsx)(Se, {
                                    premiumType: t
                                }), (0, r.jsx)(ge, {
                                    premiumType: t,
                                    onClose: a
                                }), (0, r.jsx)(he, {}), (0, r.jsx)(xe, {
                                    premiumType: t
                                }))
                        }
                        return e
                    }), [t, n, a, o, c, u]);
                return (0, r.jsx)("div", {
                    className: z().whatYouLoseItemContainer,
                    children: d
                })
            }
            const Ze = function(e) {
                var n = e.premiumType,
                    t = e.titleText,
                    a = e.subtitleText,
                    s = e.footer,
                    o = e.stickyFooter,
                    u = e.onClose,
                    c = e.isDowngrade,
                    d = void 0 !== c && c,
                    _ = (0, I.e7)([S.default], (function() {
                        var e = S.default.getCurrentUser();
                        l()(null != e, "ProfileItem: currentUser cannot be undefined");
                        return e
                    }));
                i.useEffect((function() {
                    (0, R.Z)(_.id, _.getAvatarURL(null, 80))
                }), [_]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(W.Z, {
                        premiumType: n,
                        onClose: u
                    }), (0,
                        r.jsxs)(m.ModalContent, {
                        className: z().body,
                        children: [(0, r.jsx)(Z.Z, {
                            size: Z.Z.Sizes.SIZE_24,
                            className: z().title,
                            children: t
                        }), (0, r.jsx)(m.Text, {
                            variant: "text-md/normal",
                            className: z().subtitle,
                            children: a
                        }), (0, r.jsx)(je, {
                            currentUser: _,
                            premiumType: n,
                            onClose: u,
                            isDowngrade: d
                        }), !o && s]
                    }), o && (0, r.jsx)(m.ModalFooter, {
                        children: s
                    })]
                })
            }
        },
        524450: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(785893),
                i = (t(667294), t(249052)),
                a = t(16703),
                s = t(473708);

            function o(e) {
                var n = e.invoice;
                return n.taxInclusive || n.tax <= 0 ? null : (0, r.jsx)(a.R$, {
                    label: s.Z.Messages.ESTIMATED_TAX_LABEL,
                    value: (0, i.T4)(n.tax, n.currency)
                })
            }
        },
        509897: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                a = t(473708),
                s = t(362601),
                o = t.n(s);
            const l = function(e) {
                var n = e.onClick;
                return (0, r.jsx)(i.Anchor, {
                    onClick: n,
                    className: o().link,
                    children: a.Z.Messages.BACK
                })
            }
        },
        646875: (e, n, t) => {
            "use strict";
            t.d(n, {
                As: () => w,
                By: () => D,
                Lu: () => B,
                hG: () => Y,
                nd: () => F,
                e9: () => V,
                yT: () => K
            });
            var r = t(785893),
                i = t(667294),
                a = t(294184),
                s = t.n(a),
                o = t(441143),
                l = t.n(o),
                u = t(202351),
                c = t(882723),
                d = t(73904),
                I = t(153686),
                _ = t(19585),
                m = t(551778),
                p = t(718831),
                f = t(771966),
                E = t(348592),
                N = t(116094),
                T = t(249052),
                M = t(100749),
                v = t(71103),
                C = t(717035),
                P = t(16703),
                L = t(524450),
                R = t(203600),
                O = t(2590),
                b = t(473708),
                A = t(154342),
                y = t.n(A);

            function S(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function g(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        g(e, n, t[n])
                    }))
                }
                return e
            }

            function x(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function U(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, a = [],
                            s = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                a.push(r.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return S(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e, n) {
                var t;
                return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some((function(e) {
                    return e.type === n
                })))
            };

            function Z(e) {
                var n, t = e.invoiceItem,
                    i = e.overrideAmount,
                    a = e.showGuildSubscriptionAdjustmentTooltip,
                    s = e.currency,
                    o = e.className,
                    I = e.isPrepaidPaymentSource,
                    _ = e.referralTrialOfferId,
                    p = (0, u.e7)([m.Z], (function() {
                        return m.Z.get(t.subscriptionPlanId)
                    })),
                    E = null === (n = (0, C.N)(_)) || void 0 === n ? void 0 : n.subscription_trial;
                l()(null != p, "Missing subscriptionPlan");
                var M = (0, N.if)({
                        intervalType: null == E ? void 0 : E.interval,
                        intervalCount: null == E ? void 0 : E.interval_count
                    }),
                    v = function(e, n, t, r) {
                        var i = j(e, d.eW.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case R.Xh.PREMIUM_MONTH_LEGACY:
                            case R.Xh.PREMIUM_YEAR_LEGACY:
                            case R.Xh.PREMIUM_MONTH_TIER_0:
                            case R.Xh.PREMIUM_YEAR_TIER_0:
                            case R.Xh.PREMIUM_MONTH_TIER_1:
                            case R.Xh.PREMIUM_YEAR_TIER_1:
                            case R.Xh.PREMIUM_MONTH_TIER_2:
                            case R.Xh.PREMIUM_YEAR_TIER_2:
                            case R.Xh.PREMIUM_3_MONTH_TIER_2:
                            case R.Xh.PREMIUM_6_MONTH_TIER_2:
                                return (0, N.Gf)(e.subscriptionPlanId, i, t, r);
                            case R.Xh.PREMIUM_3_MONTH_GUILD:
                            case R.Xh.PREMIUM_6_MONTH_GUILD:
                                return b.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case R.Xh.PREMIUM_MONTH_GUILD:
                                return b.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case R.Xh.PREMIUM_YEAR_GUILD:
                                return b.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case R.rV.MONTH:
                                return 1 === n.intervalCount ? b.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                }) : b.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case R.rV.YEAR:
                                return b.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw new Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(t, p, I, M);
                !0 === a && (v = (0, r.jsxs)("div", {
                    className: y().invoiceItemLabelWithIcon,
                    children: [(0, r.jsxs)("div", {
                        children: [v, " "]
                    }), (0, r.jsx)(c.Tooltip, {
                        text: b.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": b.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: y().invoiceItemTooltip,
                        children: function(e) {
                            return (0, r.jsx)(f.Z, x(h({}, e), {
                                className: y().invoiceItemLabelIcon
                            }))
                        }
                    })]
                }));
                var L = (0, T.T4)(null != i ? i : t.amount, s),
                    O = I ? L : (0, T.og)(L, p.interval, p.intervalCount);
                return (0, r.jsx)(P.i$, {
                    label: v,
                    value: O,
                    originalAmount: t.subscriptionPlanPrice * t.quantity,
                    discounts: t.discounts,
                    interval: p.interval,
                    intervalCount: p.intervalCount,
                    currency: s,
                    className: o
                })
            }

            function w(e) {
                var n = e.label,
                    t = e.tooltipText,
                    i = e.tooltipAriaLabel;
                return (0, r.jsxs)("div", {
                    className: y().invoiceItemLabelWithIcon,
                    children: [n, (0, r.jsx)(c.Tooltip, {
                        clickableOnMobile: !0,
                        text: t,
                        "aria-label": i,
                        tooltipClassName: y().invoiceItemTooltip,
                        children: function(e) {
                            return (0, r.jsx)(f.Z, x(h({}, e), {
                                className: y().invoiceItemLabelIcon
                            }))
                        }
                    })]
                })
            }

            function D(e) {
                var n = e.invoice,
                    t = e.isPrepaidPaymentSource,
                    i = (0, v.j)(n.invoiceItems),
                    a = i.find((function(e) {
                        return !(0, N.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    s = i.find((function(e) {
                        return (0, N.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    o = (0, u.e7)([m.Z], (function() {
                        return null != s ? m.Z.get(s.subscriptionPlanId) : null
                    })),
                    l = null != s ? s.amount : 0,
                    c = (0, T.T4)(l, n.currency),
                    d = null != o ? (0, T.og)(c, o.interval, o.intervalCount) : 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != a ? (0, r.jsx)(Z, {
                        invoiceItem: a,
                        currency: n.currency,
                        isPrepaidPaymentSource: t
                    }) : null, 0 !== l && null != s && null != o ? (0, r.jsx)(P.R$, {
                        label: b.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: s.quantity,
                            planName: (0, N.Gf)(o.id, !1, t)
                        }),
                        value: t ? c : d
                    }) : null, (0, r.jsx)(L.Z, {
                        invoice: n
                    }), (0,
                        r.jsx)(P.KU, {}), (0, r.jsx)(P.Ji, {
                        label: (n.taxInclusive ? t ? b.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : b.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : b.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.pKx.USD ? (0, T.T4)(n.total, n.currency) : "".concat((0, T.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function B(e) {
                var n = e.invoice,
                    t = e.newPlan,
                    i = e.isPrepaidPaymentSource,
                    a = e.referralTrialOfferId,
                    s = (0, v.j)(n.invoiceItems),
                    o = s.find((function(e) {
                        return e.subscriptionPlanId === t.id
                    }));
                l()(null != o, "Expected newPlanInvoiceItem");
                var u = s.find((function(e) {
                        return !(0, N.Z8)(e.subscriptionPlanId) && e.amount < 0
                    })),
                    c = s.find((function(e) {
                        return null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((function(e) {
                            return e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION
                        }))
                    })),
                    I = j(o, d.eW.PREMIUM_TRIAL),
                    _ = o.quantity * o.subscriptionPlanPrice,
                    m = o.amount + (null != u ? u.amount : 0) - _ + (null != c ? c.amount : 0),
                    p = s.filter((function(e) {
                        return e.subscriptionPlanId === R.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_YEAR_GUILD
                    })).reduce((function(e, n) {
                        return e + n.amount
                    }), 0);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Z, {
                        invoiceItem: o,
                        currency: n.currency,
                        overrideAmount: _,
                        isPrepaidPaymentSource: i,
                        referralTrialOfferId: a
                    }), 0 === m || I ? null : (0, r.jsx)(P.R$, {
                        label: (0, r.jsx)(w, {
                            label: b.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, N.PV)(t.id) ? (0, N.aq)(t.id) : t.name
                            }),
                            tooltipText: b.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, T.T4)(m, n.currency)
                    }), 0 !== p ? (0, r.jsx)(P.R$, {
                        label: (0, r.jsx)(w, {
                            label: b.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: b.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: b.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, T.T4)(p, n.currency)
                    }) : null, (0, r.jsx)(L.Z, {
                        invoice: n
                    }), (0, r.jsx)(P.KU, {}), (0, r.jsx)(P.Ji, {
                        label: (n.taxInclusive ? i ? b.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : b.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : b.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.pKx.USD ? (0, T.T4)(n.total, n.currency) : "".concat((0, T.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function G(e) {
                var n = e.slice();
                n.sort((function(e, n) {
                    var t = (0, N.uZ)(e.subscriptionPlanId),
                        r = (0, N.uZ)(n.subscriptionPlanId);
                    return t && !r ? -1 : !t && r ? 1 : 0
                }));
                return n
            }

            function k(e) {
                return e.filter((function(e) {
                    var n = e.subscriptionPlanId;
                    return n !== R.Xh.NONE_MONTH && n !== R.Xh.NONE_YEAR
                }))
            }

            function Y(e) {
                var n = e.proratedInvoice,
                    t = e.renewalInvoice,
                    i = (0, N.dn)(n),
                    a = i.intervalType,
                    s = i.intervalCount,
                    o = (0, N.dn)(t),
                    l = o.intervalType,
                    u = o.intervalCount;
                return a !== l || s !== u || n.subscriptionPeriodEnd.getTime() === t.subscriptionPeriodStart.getTime() ? null : (0, r.jsx)("div", {
                    className: y().subscriptionPeriodResetNotice,
                    children: b.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function W(e) {
                var n = e.isUpdate,
                    t = e.currentInvoice,
                    i = e.newInvoice,
                    a = null != t ? (0, v.j)(t.invoiceItems) : null,
                    o = null != t ? (0, N.dn)(t) : null,
                    l = (0, N.dn)(i),
                    u = l.intervalType,
                    c = l.intervalCount,
                    d = null != o && (o.intervalType !== u || o.intervalCount !== c);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(P.KU, {
                        extended: !0
                    }), null != t ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(P.q9, {
                            children: b.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), k(G((0, v.j)(t.invoiceItems))).map((function(e) {
                            return (0, r.jsx)(Z, {
                                invoiceItem: e,
                                currency: t.currency
                            }, e.id)
                        })), (0, r.jsx)(P.KU, {
                            extended: !0
                        })]
                    }) : null, (0, r.jsx)(P.q9, {
                        children: b.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), k(G((0, v.j)(i.invoiceItems))).map((function(e) {
                        var t = null != a && !a.some((function(n) {
                            return n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity
                        }));
                        return (0, r.jsx)(Z, {
                            invoiceItem: e,
                            currency: i.currency,
                            showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === R.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_6_MONTH_GUILD),
                            className: s()(g({}, y().subscriptionAddedInvoiceItem, !n || t))
                        }, e.id)
                    })), (0, r.jsx)(L.Z, {
                        invoice: i
                    }), (0, r.jsx)(P.KU, {}), (0, r.jsx)(P.R$, {
                        label: b.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, T.og)((0, T.T4)(i.total, i.currency), u, c),
                        className: y().subscriptionCostRow
                    })]
                })
            }

            function H(e) {
                var n, t = e.proratedInvoice,
                    i = e.renewalInvoice,
                    a = e.isTrial,
                    s = e.isUpdate,
                    o = e.overrideRenewalDate,
                    l = e.trialFooterMessageOverride,
                    u = null === (n = (0, C.N)()) || void 0 === n ? void 0 : n.subscription_trial,
                    c = (0, N.dn)(i),
                    d = c.intervalType,
                    I = c.intervalCount;
                if (a) {
                    var _ = (0, N.if)({
                            intervalType: null == u ? void 0 : u.interval,
                            intervalCount: null == u ? void 0 : u.interval_count
                        }),
                        m = (null == u ? void 0 : u.interval) === R.rV.DAY && (null == u ? void 0 : u.interval_count) < 28 ? 2 : 7;
                    return (0, r.jsx)(r.Fragment, {
                        children: null != l ? l : b.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: _,
                            days: m,
                            contactLink: O.EYA.CONTACT,
                            helpdeskArticle: E.Z.getArticleURL(O.BhN.PREMIUM_TRIAL)
                        })
                    })
                }
                var p = i.taxInclusive ? b.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : b.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, r.jsx)(r.Fragment, {
                    children: p.format({
                        rate: (0, T.og)((0, T.T4)(i.subtotal, i.currency), d, I),
                        renewalDate: null != o ? o : s ? null != t ? t.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
                        contactLink: O.EYA.CONTACT,
                        helpdeskArticle: E.Z.getArticleURL(O.BhN.BILLING)
                    })
                })
            }

            function F(e) {
                var n = e.premiumSubscription,
                    t = e.proratedInvoice,
                    a = e.renewalInvoice,
                    s = e.overrideRenewalDate,
                    o = e.isUpdate,
                    l = void 0 !== o && o,
                    u = e.isTrial,
                    d = void 0 !== u && u,
                    m = e.priceOptions,
                    f = void 0 === m ? void 0 : m,
                    E = e.isPrepaidPaymentSource,
                    N = void 0 !== E && E,
                    T = e.trialFooterMessageOverride,
                    v = e.hideSubscriptionDetails,
                    C = void 0 !== v && v,
                    L = (0, _.Z)().analyticsLocations,
                    R = h({
                        subscriptionId: null == n ? void 0 : n.id,
                        renewal: !0,
                        preventFetch: !l,
                        analyticsLocatinons: L,
                        analyticsLocation: I.Z.SUBSCRIPTION_INVOICE_FOOTER
                    }, f),
                    O = U((0, M.ED)(R), 1)[0],
                    A = U(i.useState(!1), 2),
                    S = A[0],
                    g = A[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [N ? null : (0, r.jsx)(P.HE, {
                        children: (0, r.jsx)(H, {
                            proratedInvoice: t,
                            renewalInvoice: a,
                            isTrial: d,
                            isUpdate: l,
                            overrideRenewalDate: s,
                            trialFooterMessageOverride: T
                        })
                    }), !C && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(c.Clickable, {
                            onClick: function() {
                                return g((function(e) {
                                    return !e
                                }))
                            },
                            className: y().subscriptionDetailsToggle,
                            children: [S ? b.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : b.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, r.jsx)(p.Z, {
                                direction: S ? p.Z.Directions.UP : p.Z.Directions.DOWN,
                                className: y().subscriptionDetailsToggleCaret
                            })]
                        }), S ? (0, r.jsx)(W, {
                            isUpdate: l,
                            currentInvoice: O,
                            newInvoice: a
                        }) : null]
                    })]
                })
            }

            function V(e) {
                var n = e.plan,
                    t = e.className,
                    i = e.paymentSourceId,
                    a = e.isPrepaidPaymentSource,
                    s = void 0 !== a && a,
                    o = (0, N.aS)(n.id, !1, !0, {
                        paymentSourceId: i
                    });
                return (0, r.jsx)(P.PO, {
                    className: t,
                    children: (0,
                        r.jsx)(P.R$, {
                        label: b.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                            planName: (0, N.Gf)(n.id, !1, s)
                        }),
                        value: (0, T.T4)(o.amount, o.currency),
                        className: y().subscriptionCostRow
                    })
                })
            }

            function K(e) {
                var n = e.invoice,
                    t = e.plan,
                    i = (0, v.j)(n.invoiceItems).find((function(e) {
                        return e.subscriptionPlanId === t.id
                    }));
                l()(null != i, "newPlanInvoiceItem can not be null");
                if (t.interval === R.rV.MONTH) return (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: b.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, T.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                if (t.interval === R.rV.YEAR) return (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: b.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
                        price: (0, T.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                l()(!1, "Invalid interval type")
            }
        },
        111090: (e, n, t) => {
            "use strict";
            t.d(n, {
                w: () => d,
                H: () => _
            });
            var r = t(667294),
                i = t(202351),
                a = t(105783),
                s = t(551778),
                o = t(151367),
                l = t(116094),
                u = t(520453),
                c = t(473708);

            function d(e, n, t) {
                r.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !t) {
                        a.Z.show({
                            title: c.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: u.Vz[e.paymentGateway]
                            }),
                            body: c.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                                paymentGatewayName: u.Vz[e.paymentGateway],
                                subscriptionManagementLink: (0, l.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }),
                            confirmText: c.Z.Messages.OKAY
                        });
                        n()
                    }
                }), [e])
            }
            var I = [];

            function _(e, n) {
                var t = (0, i.e7)([s.Z], (function() {
                        return null != e ? s.Z.get(e) : null
                    })),
                    a = (0, i.e7)([o.Z], (function() {
                        var e;
                        return null != t && null !== (e = o.Z.getForSku(t.skuId)) && void 0 !== e ? e : I
                    })),
                    u = r.useMemo((function() {
                        return Array.from(a).filter((function(e) {
                            var n = e.parentId,
                                t = e.consumed;
                            return null != n && !t
                        }))
                    }), [a]);
                return {
                    hasEntitlements: !n && null != t && null != u && u.length >= l.ZP.getIntervalMonths(t.interval, t.intervalCount),
                    entitlements: u
                }
            }
        }
    }
]);