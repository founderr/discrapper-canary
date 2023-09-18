(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [35751], {
        475772: (e, n, r) => {
            e.exports = r.p + "e61bfff1a364621603633d99d2f29f9d.svg"
        },
        473958: (e, n, r) => {
            e.exports = r.p + "e9b7e8263689da11886b9b9c9fc9aef1.svg"
        },
        34837: (e, n, r) => {
            e.exports = r.p + "f3b288c47e9e1de44dd734bb7611c1e4.svg"
        },
        293714: (e, n, r) => {
            e.exports = r.p + "01f1ebdffe8444d968a146d41d5dc2fc.svg"
        },
        140914: (e, n, r) => {
            e.exports = r.p + "94aef594b95ade8d06e7352d12f46305.svg"
        },
        11371: (e, n, r) => {
            e.exports = r.p + "0451500560abfa448183f0e8449e16f0.svg"
        },
        452004: (e, n, r) => {
            e.exports = r.p + "ad0f83d2caba179082a0b279f60736d0.svg"
        },
        79388: (e, n, r) => {
            e.exports = r.p + "30e68910bd70527f2074a0df0779206f.svg"
        },
        381511: (e, n, r) => {
            e.exports = r.p + "4478068f751e2049708b077226c4c2dc.svg"
        },
        561418: (e, n, r) => {
            e.exports = r.p + "223cd9663ce71bcb429e286b4eaed049.svg"
        },
        190555: (e, n, r) => {
            e.exports = r.p + "074e77dd9b5f48195fd402d5a04cb3ce.svg"
        },
        902954: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => s
            });
            var t = r(202351),
                a = r(711531),
                i = r(536392);

            function s() {
                var e = (0, t.e7)([i.Z], (function() {
                    return i.Z.getPremiumTypeSubscription()
                }));
                return (0, t.e7)([a.Z], (function() {
                    var n;
                    return null != (null == e ? void 0 : e.paymentSourceId) ? null === (n = a.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                }))
            }
        },
        668900: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => N,
                U: () => C
            });
            var t = r(785893),
                a = (r(667294), r(294184)),
                i = r.n(a),
                s = r(441143),
                o = r.n(s),
                l = r(265367),
                c = r(348592),
                u = r(260561);
            const d = (0, u.B)({
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
                I = (0, u.B)({
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
            var p = r(902954),
                f = r(2590),
                m = r(473708),
                _ = r(407156),
                E = r.n(_);

            function C() {
                var e = (0, p.Z)(),
                    n = d.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    r = I.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return null != e && ("PL" === e ? n : "TR" === e && r)
            }

            function L(e, n) {
                return "PL" === e ? n ? m.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? n ? m.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? m.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const N = function(e) {
                var n = e.fromBoostCancelModal,
                    r = e.className,
                    a = (0, p.Z)();
                if (!C()) return null;
                o()(null != a, "Subscription billing country should not be null");
                return (0, t.jsxs)("div", {
                    className: i()(E().noticeRoot, r),
                    children: [(0, t.jsx)("div", {
                        className: E().iconContainer,
                        children: (0, t.jsx)(l.Z, {
                            className: E().infoIcon
                        })
                    }), (0, t.jsx)("div", {
                        className: E().text,
                        children: L(a, n).format({
                            helpCenterLink: c.Z.getArticleURL(f.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        437763: (e, n, r) => {
            "use strict";
            r.d(n, {
                z: () => l
            });
            var t = r(667294),
                a = r(83471),
                i = r(632826);

            function s(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function o(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, i = [],
                            s = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(e) {
                var n = e.purchaseState,
                    r = e.currentStep,
                    s = e.initialScene,
                    l = e.purchaseScene,
                    c = e.errorScene,
                    u = e.successScene,
                    d = o((0, t.useState)(s), 2),
                    I = d[0],
                    p = d[1];
                (0, t.useEffect)((function() {
                    n === i.A.PURCHASING ? p(l) : n === i.A.FAIL && p(c)
                }), [n, l, c]);
                (0, t.useEffect)((function() {
                    r === a.h8.CONFIRM && p(u)
                }), [r, u]);
                return [I, p]
            }
        },
        16703: (e, n, r) => {
            "use strict";
            r.d(n, {
                PO: () => I,
                q9: () => p,
                R$: () => f,
                i$: () => m,
                KU: () => _,
                Ji: () => E,
                HE: () => C
            });
            var t = r(785893),
                a = (r(667294), r(294184)),
                i = r.n(a),
                s = r(73904),
                o = r(249052),
                l = r(473708),
                c = r(884092),
                u = r.n(c);

            function d(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function I(e) {
                var n = e.children,
                    r = e.className;
                return (0, t.jsx)("div", {
                    className: i()(u().table, r),
                    children: n
                })
            }

            function p(e) {
                var n = e.children;
                return (0, t.jsx)("div", {
                    className: u().header,
                    children: n
                })
            }

            function f(e) {
                var n = e.label,
                    r = e.value,
                    a = e.className;
                return (0, t.jsxs)("div", {
                    className: i()(u().row, a),
                    children: [(0, t.jsx)("div", {
                        className: u().rowLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: u().rowAmount,
                        children: r
                    })]
                })
            }

            function m(e) {
                var n = e.label,
                    r = e.value,
                    a = e.discounts,
                    i = e.originalAmount,
                    c = e.interval,
                    d = e.currency,
                    I = e.className,
                    p = e.intervalCount,
                    m = function(e) {
                        return null != a ? a.find((function(n) {
                            return n.type === e
                        })) : null
                    },
                    _ = m(s.eW.SUBSCRIPTION_PLAN),
                    E = m(s.eW.ENTITLEMENT),
                    C = null != _ ? Math.floor(_.amount / i * 100) : null,
                    L = (0, o.T4)(i, d);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(f, {
                        label: n,
                        value: (0, t.jsxs)(t.Fragment, {
                            children: [r, null != C ? (0, t.jsxs)("div", {
                                className: u().rowPercentDiscount,
                                children: ["-", C, "%"]
                            }) : null]
                        }),
                        className: I
                    }), null != C ? (0, t.jsxs)("div", {
                        className: u().rowDiscountOriginalPrice,
                        children: ["(", null != c && null != p ? (0, o.og)(L, c, p) : L, ")"]
                    }) : null, null != E ? (0, t.jsx)("div", {
                        className: u().entitlementDiscountRow,
                        children: l.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function _(e) {
                var n, r = e.extended,
                    a = void 0 !== r && r,
                    s = e.negativeMarginTop,
                    o = void 0 !== s && s;
                return (0, t.jsx)("div", {
                    className: i()(u().divider, (n = {}, d(n, u().dividerExtended, a), d(n, u().negativeMarginTop, o), n))
                })
            }

            function E(e) {
                var n = e.label,
                    r = e.value,
                    a = e.className;
                return (0, t.jsxs)("div", {
                    className: i()(u().totalRow, a),
                    children: [(0, t.jsx)("div", {
                        className: u().totalLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: u().totalAmount,
                        children: r
                    })]
                })
            }

            function C(e) {
                var n = e.children,
                    r = e.className;
                return (0, t.jsx)("div", {
                    className: i()(u().finePrint, r),
                    children: n
                })
            }
        },
        35751: (e, n, r) => {
            "use strict";
            r.r(n);
            r.d(n, {
                Steps: () => k,
                default: () => $
            });
            var t = r(785893),
                a = r(667294),
                i = r(294184),
                s = r.n(i),
                o = r(441143),
                l = r.n(o),
                c = r(202351),
                u = r(575945),
                d = r(882723),
                I = r(673679),
                p = r(74535),
                f = r(153686),
                m = r(19585),
                _ = r(387099),
                E = r(551778),
                C = r(107364),
                L = r(652591),
                N = r(348592),
                T = r(116094),
                v = r(249052),
                M = r(100749),
                h = r(16703),
                S = r(396546),
                O = r(509897),
                P = r(646875),
                y = r(301162),
                b = r(111090),
                R = r(203600),
                g = r(2590),
                A = r(473708),
                x = r(688067),
                j = r.n(x);

            function U(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Z(e, n, r, t, a, i, s) {
                try {
                    var o = e[i](s),
                        l = o.value
                } catch (e) {
                    r(e);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(t, a)
            }

            function w(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, a) {
                        var i = e.apply(n, r);

                        function s(e) {
                            Z(i, t, a, s, o, "next", e)
                        }

                        function o(e) {
                            Z(i, t, a, s, o, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function D(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function B(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        D(e, n, r[n])
                    }))
                }
                return e
            }

            function G(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, i = [],
                            s = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
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
            var k, H, Y = function(e, n) {
                var r, t, a, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
                        return function(i) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, t && (a = 2 & i[0] ? t.return : i[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, i[1])).done) return a;
                                (t = 0, a) && (i = [2 & i[0], a.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        a = i;
                                        break;
                                    case 4:
                                        s.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        s.label++;
                                        t = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < a[1]) {
                                            s.label = a[1];
                                            a = i;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2];
                                            s.ops.push(i);
                                            break
                                        }
                                        a[2] && s.ops.pop();
                                        s.trys.pop();
                                        continue
                                }
                                i = n.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                t = 0
                            } finally {
                                r = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, o])
                    }
                }
            };
            ! function(e) {
                e[e.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE";
                e[e.CONFIRM = 2] = "CONFIRM";
                e[e.PREVIEW = 3] = "PREVIEW"
            }(k || (k = {}));

            function F(e) {
                return W.apply(this, arguments)
            }

            function W() {
                return (W = w((function(e) {
                    var n, r, t, a, i, s, o, l, c, u;
                    return Y(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                n = e.premiumSubscription, r = e.onClose, t = e.setHasError, a = e.setIsCancelling, i = e.analyticsLocations, s = e.analyticsLocation;
                                d.label = 1;
                            case 1:
                                d.trys.push([1, 6, , 7]);
                                a(!0);
                                t(!1);
                                return n.status !== g.O0b.PAST_DUE ? [3, 3] : [4, (0, I.EO)(n.id, i, s)];
                            case 2:
                                d.sent();
                                return [3, 5];
                            case 3:
                                c = null !== (l = null === (o = n.renewalMutations) || void 0 === o ? void 0 : o.items) && void 0 !== l ? l : n.items;
                                return [4, (0, I.Mg)(n, {
                                    items: (0, T.Ue)(c)
                                }, i, s)];
                            case 4:
                                d.sent();
                                d.label = 5;
                            case 5:
                                r();
                                null != (u = T.ZP.getPremiumType(n.planId)) && q({
                                    premiumType: u
                                });
                                return [3, 7];
                            case 6:
                                d.sent();
                                t(!0);
                                a(!1);
                                return [3, 7];
                            case 7:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function V(e) {
                var n, r = e.premiumSubscription,
                    i = e.premiumType,
                    s = e.setStep,
                    o = e.onClose,
                    l = e.whatYouLoseExperienceEnabled,
                    c = e.analyticsLocation,
                    I = (0, _.Q)(),
                    f = G(a.useState(!1), 2),
                    E = f[0],
                    L = f[1],
                    v = G(a.useState(!1), 2),
                    M = v[0],
                    h = v[1],
                    S = (0, p.ZP)(),
                    O = (0, m.Z)().analyticsLocations,
                    P = null;
                P = r.status === g.O0b.PAST_DUE ? A.Z.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY : i === R.p9.TIER_0 ? I ? A.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
                    date: r.currentPeriodEnd,
                    helpdeskArticle: N.Z.getArticleURL(g.BhN.BLOCKED_PAYMENTS)
                }) : A.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
                    date: r.currentPeriodEnd
                }) : i === R.p9.TIER_1 ? I ? A.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
                    date: r.currentPeriodEnd,
                    helpdeskArticle: N.Z.getArticleURL(g.BhN.BLOCKED_PAYMENTS)
                }) : A.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
                    date: r.currentPeriodEnd
                }) : I ? A.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
                    date: r.currentPeriodEnd,
                    helpdeskArticle: N.Z.getArticleURL(g.BhN.BLOCKED_PAYMENTS)
                }) : A.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
                    date: r.currentPeriodEnd
                });
                var b = r.items.some((function(e) {
                        var n = e.planId;
                        return !R.dJ.has(n)
                    })),
                    x = b && null == r.renewalMutations || null != (null === (n = r.renewalMutations) || void 0 === n ? void 0 : n.items.find((function(e) {
                        var n = e.planId;
                        return !R.dJ.has(n)
                    }))),
                    U = x ? (0, t.jsx)(d.Button, {
                        onClick: function() {
                            return s(k.PREVIEW)
                        },
                        children: A.Z.Messages.NEXT
                    }) : (0, t.jsx)(d.Button, {
                        color: d.Button.Colors.RED,
                        disabled: E,
                        onClick: w((function() {
                            return Y(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, F({
                                            setHasError: h,
                                            onClose: o,
                                            premiumSubscription: r,
                                            setIsCancelling: L,
                                            analyticsLocations: O,
                                            analyticsLocation: c
                                        })];
                                    case 1:
                                        e.sent();
                                        return [2]
                                }
                            }))
                        })),
                        children: l ? A.Z.Messages.CONFIRM : A.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                            planPremiumType: T.ZP.getDisplayPremiumType(r.planId)
                        })
                    }),
                    Z = (0, t.jsx)(d.Button, {
                        look: d.Button.Looks.LINK,
                        color: (0, u.ap)(S) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
                        onClick: o,
                        children: l ? A.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : A.Z.Messages.CANCEL
                    });
                return (0, t.jsxs)(t.Fragment, {
                    children: [l ? (0, t.jsx)(y.Z, {
                        premiumType: i,
                        className: j().cancellationHeader,
                        onClose: o
                    }) : (0, t.jsxs)(d.ModalHeader, {
                        separator: !1,
                        children: [(0, t.jsx)(d.FormTitle, {
                            tag: d.FormTitleTags.H4,
                            children: A.Z.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
                                planPremiumType: T.ZP.getDisplayPremiumType(r.planId)
                            })
                        }), (0, t.jsx)(d.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, t.jsxs)(d.ModalContent, {
                        className: j().body,
                        children: [M ? (0, t.jsx)(d.FormErrorBlock, {
                            className: j().errorBlock,
                            children: A.Z.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, t.jsx)("div", {
                            className: j().cancelImage
                        }), (0, t.jsx)("div", {
                            children: P
                        })]
                    }), (0, t.jsxs)(d.ModalFooter, {
                        justify: C.Z.Justify.START,
                        children: [U, Z]
                    })]
                })
            }

            function z(e) {
                var n, r, a = e.premiumSubscription,
                    i = (0, m.Z)().analyticsLocations,
                    s = G((0, M.ED)({
                        subscriptionId: a.id,
                        items: (0, T.Ue)(null !== (r = null === (n = a.renewalMutations) || void 0 === n ? void 0 : n.items) && void 0 !== r ? r : a.items),
                        renewal: !0,
                        analyticsLocations: i,
                        analyticsLocation: f.Z.CANCEL_INVOICE_PREVIEW
                    }), 1)[0],
                    o = (0, c.e7)([E.Z], (function() {
                        return E.Z.get(a.planId)
                    }));
                if (null == s || null == o) return (0, t.jsx)(d.Spinner, {
                    className: j().loading
                });
                var l = T.ZP.getIntervalForInvoice(s),
                    u = l.intervalType,
                    I = l.intervalCount;
                return (0, t.jsxs)("div", {
                    className: j().bodyText,
                    children: [(0, t.jsx)("div", {
                        className: j().renewalInvoiceDate,
                        children: 0 !== s.total ? A.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
                            renewalDate: s.subscriptionPeriodStart,
                            rate: (0, v.og)((0, v.T4)(s.total, s.currency), u, I)
                        }) : A.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: s.subscriptionPeriodStart
                        })
                    }), (0, t.jsxs)(h.PO, {
                        children: [(0, t.jsx)(h.q9, {
                            children: A.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, t.jsx)(h.R$, {
                            label: A.Z.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
                                planName: T.ZP.getDisplayName(o.id)
                            }),
                            value: (0, T.PK)(o),
                            className: j().invoiceCancelRow
                        }), (0, t.jsx)(h.KU, {}), (0, t.jsx)(P.nd, {
                            premiumSubscription: a,
                            renewalInvoice: s,
                            isUpdate: !0
                        })]
                    })]
                })
            }

            function K(e) {
                var n = e.premiumSubscription,
                    r = e.premiumType,
                    i = e.onBack,
                    o = e.onClose,
                    l = e.analyticsLocation,
                    c = G(a.useState(!1), 2),
                    u = c[0],
                    I = c[1],
                    p = G(a.useState(!1), 2),
                    f = p[0],
                    _ = p[1],
                    E = (0, m.Z)().analyticsLocations;
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(y.Z, {
                        premiumType: r,
                        onClose: o
                    }), (0, t.jsxs)(d.ModalContent, {
                        className: s()(j().previewStep, j().body),
                        children: [f ? (0, t.jsx)(d.FormErrorBlock, {
                            className: j().errorBlock,
                            children: A.Z.Messages.BILLING_ERROR_GENERIC
                        }) : null, (0, t.jsx)(z, {
                            premiumSubscription: n
                        })]
                    }), (0, t.jsxs)(d.ModalFooter, {
                        align: C.Z.Align.CENTER,
                        justify: C.Z.Justify.BETWEEN,
                        children: [(0, t.jsx)(d.Button, {
                            color: d.Button.Colors.RED,
                            disabled: u,
                            onClick: w((function() {
                                return Y(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, F({
                                                setHasError: _,
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
                            children: A.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
                                planPremiumType: T.ZP.getDisplayPremiumType(n.planId)
                            })
                        }), (0, t.jsx)(O.Z, {
                            onClick: i
                        })]
                    })]
                })
            }

            function X(e) {
                var n;
                return {
                    subscription_id: e.id,
                    subscription_type: e.type,
                    subscription_plan_id: null === (n = (0, T.Af)(e)) || void 0 === n ? void 0 : n.id,
                    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
                }
            }
            var J = (D(H = {}, k.WHAT_YOU_LOSE, "What You're Losing"), D(H, k.CONFIRM, "Confirm Cancellation"), D(H, k.PREVIEW, "Preview Updated Subscription"), H);

            function $(e) {
                var n, r = e.premiumSubscription,
                    i = e.transitionState,
                    s = e.onClose,
                    o = e.analyticsLocations,
                    c = e.analyticsLocation,
                    I = null === (n = (0, T.Af)(r)) || void 0 === n ? void 0 : n.planId,
                    _ = null != I ? T.ZP.getPremiumType(I) : null;
                l()(null != _, "Should not be cancelling Nitro without premiumType");
                var E = (0, p.ZP)();
                a.useEffect((function() {
                    L.default.track(g.rMx.CANCELLATION_FLOW_STARTED, X(r))
                }), [r]);
                var C = _ === R.p9.TIER_0 || _ === R.p9.TIER_1 || _ === R.p9.TIER_2,
                    N = C ? k.WHAT_YOU_LOSE : k.CONFIRM,
                    v = (0, m.Z)(o, f.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL).AnalyticsLocationProvider,
                    M = G(function(e, n, r) {
                        var t = G(a.useState(e), 2),
                            i = t[0],
                            s = t[1],
                            o = G(a.useState(Date.now()), 2),
                            l = o[0],
                            c = o[1],
                            u = G(a.useState(Date.now()), 1)[0],
                            d = a.useCallback((function(e) {
                                L.default.track(g.rMx.CANCELLATION_FLOW_STEP, B({
                                    from_step: J[i],
                                    to_step: J[e],
                                    step_duration_ms: Date.now() - l,
                                    flow_duration_ms: Date.now() - u,
                                    location_stack: r
                                }, X(n)));
                                s(e);
                                c(Date.now())
                            }), [r, u, l, i, n]);
                        return [i, d, l, u]
                    }(N, r, o), 4),
                    h = M[0],
                    O = M[1],
                    P = M[2],
                    y = M[3];
                (0, b.w)(r, s, !1);
                var x, U = function(e) {
                    s();
                    L.default.track(g.rMx.CANCELLATION_FLOW_STEP, B({
                        from_step: J[e],
                        to_step: null,
                        step_duration_ms: Date.now() - P,
                        flow_duration_ms: Date.now() - y,
                        location_stack: o
                    }, X(r)))
                };
                switch (h) {
                    case k.WHAT_YOU_LOSE:
                        x = (0, t.jsx)(S.Z, {
                            premiumType: _,
                            titleText: A.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
                            subtitleText: A.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
                            footer: (0, t.jsxs)("div", {
                                className: j().whatYouLoseButtonContainer,
                                children: [(0, t.jsx)(d.Button, {
                                    onClick: function() {
                                        return O(k.CONFIRM)
                                    },
                                    children: A.Z.Messages.CONTINUE
                                }), (0, t.jsx)(d.Button, {
                                    look: d.Button.Looks.LINK,
                                    color: (0, u.wj)(E) ? d.Button.Colors.WHITE : d.Button.Colors.PRIMARY,
                                    onClick: function() {
                                        return U(h)
                                    },
                                    children: A.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                                })]
                            }),
                            onClose: function() {
                                return U(h)
                            }
                        });
                        break;
                    case k.CONFIRM:
                        x = (0, t.jsx)(V, {
                            premiumSubscription: r,
                            premiumType: _,
                            setStep: O,
                            onClose: function() {
                                return U(h)
                            },
                            whatYouLoseExperienceEnabled: C,
                            analyticsLocation: c
                        });
                        break;
                    case k.PREVIEW:
                        x = (0, t.jsx)(K, {
                            premiumSubscription: r,
                            premiumType: _,
                            onBack: function() {
                                return O(k.CONFIRM)
                            },
                            onClose: function() {
                                return U(h)
                            },
                            analyticsLocation: c
                        });
                        break;
                    default:
                        throw new Error("Unexpected step: ".concat(h))
                }
                return (0, t.jsx)(v, {
                    children: (0, t.jsx)(d.ModalRoot, {
                        transitionState: i,
                        children: x
                    })
                })
            }

            function q(e) {
                L.default.track(g.rMx.OPEN_MODAL, {
                    type: "Nitro Churn Survey"
                });
                return (0, d.openModalLazy)(w((function() {
                    var n, a;
                    return Y(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(92145)]).then(r.bind(r, 892145))];
                            case 1:
                                n = i.sent(), a = n.default;
                                return [2, function(n) {
                                    return (0, t.jsx)(a, B({}, n, e))
                                }]
                        }
                    }))
                })))
            }
        },
        396546: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => Ze
            });
            var t = r(785893),
                a = r(667294),
                i = r(294184),
                s = r.n(i),
                o = r(441143),
                l = r.n(o),
                c = r(496486),
                u = r.n(c),
                d = r(498964),
                I = r(202351),
                p = r(575945),
                f = r(882723),
                m = r(744564),
                _ = r(653224),
                E = r(734691),
                C = r(74535),
                L = r(316878),
                N = r(795470),
                T = r(589503),
                v = r(420881),
                M = r(166232),
                h = r(600277),
                S = r(736626),
                O = r(183490),
                P = r(76834),
                y = r(485552),
                b = r(567403),
                R = r(473903),
                g = r(775506),
                A = r(124251),
                x = r(535083),
                j = r(217674),
                U = r(95891),
                Z = r(98265),
                w = r(652591),
                D = r(775173),
                B = r(348592),
                G = r(310126),
                k = r(902954),
                H = r(668900),
                Y = r(301162),
                F = r(203600),
                W = r(2590),
                V = r(960412),
                z = r(473708),
                K = r(986703),
                X = r.n(K),
                J = r(475772),
                $ = r.n(J),
                q = r(473958),
                Q = r.n(q),
                ee = r(34837),
                ne = r.n(ee),
                re = r(293714),
                te = r.n(re),
                ae = r(140914),
                ie = r.n(ae),
                se = r(11371),
                oe = r.n(se),
                le = r(452004),
                ce = r.n(le),
                ue = r(79388),
                de = r.n(ue),
                Ie = r(381511),
                pe = r.n(Ie),
                fe = r(561418),
                me = r.n(fe),
                _e = r(190555),
                Ee = r.n(_e);

            function Ce(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function Le(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function Ne() {
                Ne = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                    }
                    return e
                };
                return Ne.apply(this, arguments)
            }

            function Te(e, n) {
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

            function ve(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, i = [],
                            s = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ce(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ce(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Me = G.ZP.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
                he = {
                    boostItemVisual: ie(),
                    emojiStickersVisual: oe(),
                    screenShareItemVisual: me(),
                    uploadsMessagesItemVisual: ce(),
                    uploadsMessagesItemVisualV2: de(),
                    PL: pe(),
                    TR: Ee()
                },
                Se = {
                    boostItemVisual: $(),
                    emojiStickersVisual: Q(),
                    screenShareItemVisual: me(),
                    uploadsMessagesItemVisual: ne(),
                    uploadsMessagesItemVisualV2: te(),
                    PL: pe(),
                    TR: Ee()
                };

            function Oe() {
                var e = (0, C.ZP)();
                return (0, p.wj)(e) ? Se : he
            }

            function Pe(e) {
                var n = e.description,
                    r = e.onLearnMore,
                    a = e.renderVisual;
                return (0, t.jsxs)("div", {
                    className: X().whatYouLoseItem,
                    children: [(0, t.jsxs)("div", {
                        className: X().whatYouLoseItemLeftColumn,
                        children: [(0, t.jsx)(f.Text, {
                            variant: "text-md/normal",
                            children: n
                        }), (0, t.jsx)(f.Button, {
                            look: f.Button.Looks.LINK,
                            color: f.Button.Colors.LINK,
                            size: f.Button.Sizes.NONE,
                            className: X().whatYouLoseItemLearnMore,
                            onClick: r,
                            children: z.Z.Messages.LEARN_MORE
                        })]
                    }), (0, t.jsx)("div", {
                        className: X().whatYouLoseItemRightColumn,
                        children: a()
                    })]
                })
            }

            function ye(e) {
                var n = Ne({}, e),
                    r = (0, C.ZP)(),
                    i = a.useContext(y.f).profileTheme,
                    s = (0, N.O0)(W.tPk.INTERACTIVE_ACTIVE, null != i ? i : r);
                return (0, t.jsx)(U.Z, Te(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            Le(e, n, r[n])
                        }))
                    }
                    return e
                }({}, n), {
                    color: s.hex
                }))
            }

            function be(e) {
                var n = e.currentUser,
                    r = e.premiumType,
                    a = e.onClose,
                    i = (0, O.Z)(n.id),
                    s = (0, I.e7)([L.Z], (function() {
                        return L.Z.useReducedMotion
                    })),
                    o = r === F.p9.TIER_1,
                    l = (0, d.EQ)(null == i ? void 0 : i.premiumType).with(F.p9.TIER_2, (function() {
                        return (0, t.jsxs)(y.Z, {
                            forceShowPremium: !0,
                            user: n,
                            profileType: V.y0.CANCEL_MODAL,
                            className: X().profileCard,
                            children: [(0, t.jsx)("div", {
                                className: X().profileBanner,
                                children: (0, t.jsx)(P.Z, {
                                    displayProfile: i,
                                    user: n,
                                    allowEdit: !1,
                                    profileType: V.y0.CANCEL_MODAL
                                })
                            }), (0, t.jsx)(Me, {
                                className: X().profileAvatar,
                                src: n.getAvatarURL(void 0, (0, f.getAvatarSize)(f.AvatarSizes.SIZE_56), !s),
                                size: f.AvatarSizes.SIZE_56,
                                "aria-label": n.username
                            }), (0, t.jsx)(y.Z.Inner, {
                                className: X().profileInner,
                                children: (0, t.jsxs)("div", {
                                    className: X().profileUserInfo,
                                    children: [(0, t.jsx)(x.Z, {
                                        className: X().profileNameTag,
                                        usernameClass: X().profileNameTagUsername,
                                        name: n.toString()
                                    }), (0, t.jsx)(ye, {
                                        className: X().profilePremiumIcon
                                    })]
                                })
                            })]
                        })
                    })).otherwise((function() {
                        return (0, t.jsxs)("div", {
                            className: X().profileCardTier1,
                            children: [(0, t.jsx)(Me, {
                                className: X().profileAvatarTier1,
                                src: n.getAvatarURL(void 0, (0, f.getAvatarSize)(f.AvatarSizes.SIZE_56), !s),
                                size: f.AvatarSizes.SIZE_56,
                                "aria-label": n.username
                            }), (0, t.jsxs)("div", {
                                className: X().profileUserInfoTier1,
                                children: [(0, t.jsx)(x.Z, {
                                    className: X().profileNameTag,
                                    usernameClass: X().profileNameTagUsername,
                                    name: n.toString()
                                }), (0, t.jsx)(U.Z, {
                                    className: X().profilePremiumIcon
                                })]
                            })]
                        })
                    }));
                return (0, t.jsx)(Pe, {
                    description: o ? z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
                    onLearnMore: function() {
                        a();
                        E.Z.open(W.oAB.PROFILE_CUSTOMIZATION);
                        w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "user_profile_customization"
                        })
                    },
                    renderVisual: function() {
                        return l
                    }
                }, "profile-item")
            }

            function Re(e) {
                var n = e.premiumType,
                    r = (0, I.e7)([L.Z], (function() {
                        return L.Z.useReducedMotion
                    })),
                    a = (0, T.wC)(null).filter((function(e) {
                        return e.type === v.B.GUILD && (e.animated || null != e.guildId)
                    })).slice(0, 3),
                    i = (0, I.Wu)([M.Z], (function() {
                        return M.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - a.length)
                    })),
                    s = Oe().emojiStickersVisual,
                    o = n === F.p9.TIER_1;
                return (0, t.jsx)(Pe, {
                    description: o ? z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
                    onLearnMore: function() {
                        window.open(B.Z.getArticleURL(W.BhN.PREMIUM_DETAILS));
                        w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "emojis_stickers"
                        })
                    },
                    renderVisual: function() {
                        return null != a && a.length > 0 || !o && null != i && i.length > 0 ? (0, t.jsxs)("div", {
                            className: X().emojiStickersPersonalizedContainer,
                            children: [a.map((function(e) {
                                return null == e.id ? e.url : D.ZP.getEmojiURL({
                                    id: e.id,
                                    animated: !r && e.animated,
                                    size: 58
                                })
                            })).map((function(e) {
                                return null != e ? (0, t.jsx)("img", {
                                    className: X().personalizedEmoji,
                                    alt: "",
                                    src: e
                                }) : null
                            })), o ? null : i.map((function(e) {
                                return (0, t.jsx)(h.ZP, {
                                    disableAnimation: r,
                                    sticker: e,
                                    size: 58,
                                    withLoadingIndicator: !1
                                }, e.id)
                            }))]
                        }) : (0, t.jsx)("img", {
                            className: X().nonPersonalizedGraphic,
                            alt: "",
                            src: s
                        })
                    }
                }, "emoji-stickers-item")
            }

            function ge(e) {
                var n = e.premiumType,
                    r = e.onClose;
                a.useEffect((function() {
                    return m.Z.wait((function() {
                        return (0, _.X8)()
                    }))
                }), []);
                var i = (0, I.e7)([L.Z], (function() {
                        return L.Z.useReducedMotion
                    })),
                    o = ve((0, I.Wu)([g.Z, b.Z], (function() {
                        var e = g.Z.boostSlots,
                            n = new Map;
                        u()(e).map("premiumGuildSubscription").map("guildId").forEach((function(e) {
                            if (null != b.Z.getGuild(e)) {
                                var r, t = null !== (r = n.get(e)) && void 0 !== r ? r : 0;
                                n.set(e, t + 1)
                            }
                        }));
                        var r = null,
                            t = 0;
                        if (n.size > 0) {
                            var a;
                            r = (a = ve(Array.from(n.entries()).reduce((function(e, n) {
                                return n[1] > e[1] ? n : e
                            })), 2))[0], t = a[1]
                        }
                        return [b.Z.getGuild(r), t]
                    })), 2),
                    l = o[0],
                    c = o[1],
                    d = null != l && c > 0,
                    p = Oe().boostItemVisual;
                return (0, t.jsx)(Pe, {
                    description: n === F.p9.TIER_1 ? z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
                    onLearnMore: function() {
                        r();
                        E.Z.open(W.oAB.GUILD_BOOSTING);
                        w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "boosts"
                        })
                    },
                    renderVisual: function() {
                        return d ? (0, t.jsx)("div", {
                            className: X().boostCardContainer,
                            children: (0, t.jsxs)("div", {
                                className: X().boostCard,
                                children: [(0, t.jsx)(A.Z, {
                                    guild: l,
                                    size: A.Z.Sizes.MEDIUM,
                                    animate: !i,
                                    className: X().boostCardIcon
                                }), (0, t.jsxs)("div", {
                                    className: X().boostCardInfo,
                                    children: [(0, t.jsx)(f.Text, {
                                        variant: "text-md/normal",
                                        className: s()(X().textSingleLineEllipsis, X().boostCardTitle),
                                        children: l.name
                                    }), (0, t.jsxs)("div", {
                                        className: X().boostCardSubtitle,
                                        children: [(0, t.jsx)(j.Z, {
                                            className: X().boostCardGem
                                        }), (0, t.jsx)(f.Text, {
                                            variant: "text-xs/normal",
                                            className: s()(X().textSingleLineEllipsis, X().boostCardCount),
                                            children: z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                                                boostCount: c
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }) : (0, t.jsx)("img", {
                            alt: "",
                            src: p
                        })
                    }
                }, "boost-item")
            }
            var Ae = function() {
                var e = Oe().screenShareItemVisual;
                return (0, t.jsx)(Pe, {
                    description: z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
                    onLearnMore: function() {
                        window.open(B.Z.getArticleURL(W.BhN.STREAM_QUALITY_SETTINGS));
                        w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "screen_share"
                        })
                    },
                    renderVisual: function() {
                        return (0, t.jsx)("img", {
                            alt: "",
                            src: e
                        })
                    }
                }, "screen-share-item")
            };

            function xe(e) {
                var n = e.premiumType,
                    r = Oe().uploadsMessagesItemVisual;
                return (0, t.jsx)(Pe, {
                    description: n === F.p9.TIER_2 ? z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : z.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
                    onLearnMore: function() {
                        window.open(B.Z.getArticleURL(W.BhN.PREMIUM_DETAILS));
                        w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "msgs_uploads"
                        })
                    },
                    renderVisual: function() {
                        return (0, t.jsx)("img", {
                            alt: "",
                            src: r
                        })
                    }
                }, "uploads-item")
            }
            var je = function(e) {
                var n = e.country,
                    r = Oe(),
                    a = "PL" === n ? r.PL : r.TR;
                return (0, t.jsx)(Pe, {
                    description: ("PL" === n ? z.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : z.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
                    onLearnMore: function() {
                        window.open(B.Z.getArticleURL(W.BhN.LOCALIZED_PRICING));
                        w.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
                            action: "grandfathered_prices"
                        })
                    },
                    renderVisual: function() {
                        return (0, t.jsx)("img", {
                            alt: "",
                            src: a
                        })
                    }
                }, "grandfathered-prices-item")
            };

            function Ue(e) {
                var n = e.currentUser,
                    r = e.premiumType,
                    i = e.onClose,
                    s = e.isDowngrade,
                    o = void 0 !== s && s,
                    c = (0, k.Z)(),
                    u = (0, H.U)(),
                    d = a.useMemo((function() {
                        var e = [];
                        if (u) {
                            l()(null != c, "Subscription billing country should not be null");
                            e.push((0, t.jsx)(je, {
                                country: c
                            }))
                        }
                        switch (r) {
                            case F.p9.TIER_0:
                                e.push((0, t.jsx)(Re, {
                                    premiumType: r
                                }), (0, t.jsx)(xe, {
                                    premiumType: r
                                }));
                                break;
                            case F.p9.TIER_1:
                                o ? e.push((0, t.jsx)(be, {
                                    currentUser: n,
                                    premiumType: r,
                                    onClose: i
                                }), (0, t.jsx)(Ae, {}), (0, t.jsx)(ge, {
                                    premiumType: r,
                                    onClose: i
                                })) : e.push((0, t.jsx)(be, {
                                    currentUser: n,
                                    premiumType: r,
                                    onClose: i
                                }), (0, t.jsx)(Re, {
                                    premiumType: r
                                }), (0, t.jsx)(Ae, {}), (0, t.jsx)(xe, {
                                    premiumType: r
                                }), (0, t.jsx)(ge, {
                                    premiumType: r,
                                    onClose: i
                                }));
                                break;
                            case F.p9.TIER_2:
                                o ? e.push((0, t.jsx)(be, {
                                    currentUser: n,
                                    premiumType: r,
                                    onClose: i
                                }), (0, t.jsx)(ge, {
                                    premiumType: r,
                                    onClose: i
                                }), (0, t.jsx)(Ae, {})) : e.push((0, t.jsx)(be, {
                                    currentUser: n,
                                    premiumType: r,
                                    onClose: i
                                }), (0, t.jsx)(Re, {
                                    premiumType: r
                                }), (0, t.jsx)(ge, {
                                    premiumType: r,
                                    onClose: i
                                }), (0, t.jsx)(Ae, {}), (0, t.jsx)(xe, {
                                    premiumType: r
                                }))
                        }
                        return e
                    }), [r, n, i, o, u, c]);
                return (0, t.jsx)("div", {
                    className: X().whatYouLoseItemContainer,
                    children: d
                })
            }
            const Ze = function(e) {
                var n = e.premiumType,
                    r = e.titleText,
                    i = e.subtitleText,
                    s = e.footer,
                    o = e.stickyFooter,
                    c = e.onClose,
                    u = e.isDowngrade,
                    d = void 0 !== u && u,
                    p = (0, I.e7)([R.default], (function() {
                        var e = R.default.getCurrentUser();
                        l()(null != e, "ProfileItem: currentUser cannot be undefined");
                        return e
                    }));
                a.useEffect((function() {
                    (0, S.Z)(p.id, p.getAvatarURL(null, 80))
                }), [p]);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(Y.Z, {
                        premiumType: n,
                        onClose: c
                    }), (0,
                        t.jsxs)(f.ModalContent, {
                        className: X().body,
                        children: [(0, t.jsx)(Z.Z, {
                            size: Z.Z.Sizes.SIZE_24,
                            className: X().title,
                            children: r
                        }), (0, t.jsx)(f.Text, {
                            variant: "text-md/normal",
                            className: X().subtitle,
                            children: i
                        }), (0, t.jsx)(Ue, {
                            currentUser: p,
                            premiumType: n,
                            onClose: c,
                            isDowngrade: d
                        }), !o && s]
                    }), o && (0, t.jsx)(f.ModalFooter, {
                        children: s
                    })]
                })
            }
        },
        524450: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => o
            });
            var t = r(785893),
                a = (r(667294), r(249052)),
                i = r(16703),
                s = r(473708);

            function o(e) {
                var n = e.invoice;
                return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(i.R$, {
                    label: s.Z.Messages.ESTIMATED_TAX_LABEL,
                    value: (0, a.T4)(n.tax, n.currency)
                })
            }
        },
        509897: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => l
            });
            var t = r(785893),
                a = (r(667294), r(882723)),
                i = r(473708),
                s = r(362601),
                o = r.n(s);
            const l = function(e) {
                var n = e.onClick;
                return (0, t.jsx)(a.Anchor, {
                    onClick: n,
                    className: o().link,
                    children: i.Z.Messages.BACK
                })
            }
        },
        646875: (e, n, r) => {
            "use strict";
            r.d(n, {
                As: () => w,
                By: () => D,
                Lu: () => B,
                hG: () => H,
                nd: () => W,
                e9: () => V,
                yT: () => z
            });
            var t = r(785893),
                a = r(667294),
                i = r(294184),
                s = r.n(i),
                o = r(441143),
                l = r.n(o),
                c = r(202351),
                u = r(882723),
                d = r(73904),
                I = r(153686),
                p = r(19585),
                f = r(551778),
                m = r(718831),
                _ = r(771966),
                E = r(348592),
                C = r(116094),
                L = r(249052),
                N = r(100749),
                T = r(71103),
                v = r(717035),
                M = r(16703),
                h = r(524450),
                S = r(203600),
                O = r(2590),
                P = r(473708),
                y = r(154342),
                b = r.n(y);

            function R(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function g(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        g(e, n, r[n])
                    }))
                }
                return e
            }

            function x(e, n) {
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

            function j(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, i = [],
                            s = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return R(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e, n) {
                var r;
                return !!(null === (r = e.discounts) || void 0 === r ? void 0 : r.some((function(e) {
                    return e.type === n
                })))
            };

            function Z(e) {
                var n, r = e.invoiceItem,
                    a = e.overrideAmount,
                    i = e.showGuildSubscriptionAdjustmentTooltip,
                    s = e.currency,
                    o = e.className,
                    I = e.isPrepaidPaymentSource,
                    p = e.referralTrialOfferId,
                    m = (0, c.e7)([f.Z], (function() {
                        return f.Z.get(r.subscriptionPlanId)
                    })),
                    E = null === (n = (0, v.N)(p)) || void 0 === n ? void 0 : n.subscription_trial;
                l()(null != m, "Missing subscriptionPlan");
                var N = (0, C.if)({
                        intervalType: null == E ? void 0 : E.interval,
                        intervalCount: null == E ? void 0 : E.interval_count
                    }),
                    T = function(e, n, r, t) {
                        var a = U(e, d.eW.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case S.Xh.PREMIUM_MONTH_LEGACY:
                            case S.Xh.PREMIUM_YEAR_LEGACY:
                            case S.Xh.PREMIUM_MONTH_TIER_0:
                            case S.Xh.PREMIUM_YEAR_TIER_0:
                            case S.Xh.PREMIUM_MONTH_TIER_1:
                            case S.Xh.PREMIUM_YEAR_TIER_1:
                            case S.Xh.PREMIUM_MONTH_TIER_2:
                            case S.Xh.PREMIUM_YEAR_TIER_2:
                            case S.Xh.PREMIUM_3_MONTH_TIER_2:
                            case S.Xh.PREMIUM_6_MONTH_TIER_2:
                                return (0, C.Gf)(e.subscriptionPlanId, a, r, t);
                            case S.Xh.PREMIUM_3_MONTH_GUILD:
                            case S.Xh.PREMIUM_6_MONTH_GUILD:
                                return P.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case S.Xh.PREMIUM_MONTH_GUILD:
                                return P.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case S.Xh.PREMIUM_YEAR_GUILD:
                                return P.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case S.rV.MONTH:
                                return 1 === n.intervalCount ? P.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                }) : P.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case S.rV.YEAR:
                                return P.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw new Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(r, m, I, N);
                !0 === i && (T = (0, t.jsxs)("div", {
                    className: b().invoiceItemLabelWithIcon,
                    children: [(0, t.jsxs)("div", {
                        children: [T, " "]
                    }), (0, t.jsx)(u.Tooltip, {
                        text: P.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": P.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: b().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(_.Z, x(A({}, e), {
                                className: b().invoiceItemLabelIcon
                            }))
                        }
                    })]
                }));
                var h = (0, L.T4)(null != a ? a : r.amount, s),
                    O = I ? h : (0, L.og)(h, m.interval, m.intervalCount);
                return (0, t.jsx)(M.i$, {
                    label: T,
                    value: O,
                    originalAmount: r.subscriptionPlanPrice * r.quantity,
                    discounts: r.discounts,
                    interval: m.interval,
                    intervalCount: m.intervalCount,
                    currency: s,
                    className: o
                })
            }

            function w(e) {
                var n = e.label,
                    r = e.tooltipText,
                    a = e.tooltipAriaLabel;
                return (0, t.jsxs)("div", {
                    className: b().invoiceItemLabelWithIcon,
                    children: [n, (0, t.jsx)(u.Tooltip, {
                        clickableOnMobile: !0,
                        text: r,
                        "aria-label": a,
                        tooltipClassName: b().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(_.Z, x(A({}, e), {
                                className: b().invoiceItemLabelIcon
                            }))
                        }
                    })]
                })
            }

            function D(e) {
                var n = e.invoice,
                    r = e.isPrepaidPaymentSource,
                    a = (0, T.j)(n.invoiceItems),
                    i = a.find((function(e) {
                        return !(0, C.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    s = a.find((function(e) {
                        return (0, C.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    o = (0, c.e7)([f.Z], (function() {
                        return null != s ? f.Z.get(s.subscriptionPlanId) : null
                    })),
                    l = null != s ? s.amount : 0,
                    u = (0, L.T4)(l, n.currency),
                    d = null != o ? (0, L.og)(u, o.interval, o.intervalCount) : 0;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null != i ? (0, t.jsx)(Z, {
                        invoiceItem: i,
                        currency: n.currency,
                        isPrepaidPaymentSource: r
                    }) : null, 0 !== l && null != s && null != o ? (0, t.jsx)(M.R$, {
                        label: P.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: s.quantity,
                            planName: (0, C.Gf)(o.id, !1, r)
                        }),
                        value: r ? u : d
                    }) : null, (0, t.jsx)(h.Z, {
                        invoice: n
                    }), (0,
                        t.jsx)(M.KU, {}), (0, t.jsx)(M.Ji, {
                        label: (n.taxInclusive ? r ? P.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : P.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : P.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.pKx.USD ? (0, L.T4)(n.total, n.currency) : "".concat((0, L.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function B(e) {
                var n = e.invoice,
                    r = e.newPlan,
                    a = e.isPrepaidPaymentSource,
                    i = e.referralTrialOfferId,
                    s = (0, T.j)(n.invoiceItems),
                    o = s.find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                l()(null != o, "Expected newPlanInvoiceItem");
                var c = s.find((function(e) {
                        return !(0, C.Z8)(e.subscriptionPlanId) && e.amount < 0
                    })),
                    u = s.find((function(e) {
                        return null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((function(e) {
                            return e.type === d.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION
                        }))
                    })),
                    I = U(o, d.eW.PREMIUM_TRIAL),
                    p = o.quantity * o.subscriptionPlanPrice,
                    f = o.amount + (null != c ? c.amount : 0) - p + (null != u ? u.amount : 0),
                    m = s.filter((function(e) {
                        return e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD
                    })).reduce((function(e, n) {
                        return e + n.amount
                    }), 0);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(Z, {
                        invoiceItem: o,
                        currency: n.currency,
                        overrideAmount: p,
                        isPrepaidPaymentSource: a,
                        referralTrialOfferId: i
                    }), 0 === f || I ? null : (0, t.jsx)(M.R$, {
                        label: (0, t.jsx)(w, {
                            label: P.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, C.PV)(r.id) ? (0, C.aq)(r.id) : r.name
                            }),
                            tooltipText: P.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, L.T4)(f, n.currency)
                    }), 0 !== m ? (0, t.jsx)(M.R$, {
                        label: (0, t.jsx)(w, {
                            label: P.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: P.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: P.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, L.T4)(m, n.currency)
                    }) : null, (0, t.jsx)(h.Z, {
                        invoice: n
                    }), (0, t.jsx)(M.KU, {}), (0, t.jsx)(M.Ji, {
                        label: (n.taxInclusive ? a ? P.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : P.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : P.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.pKx.USD ? (0, L.T4)(n.total, n.currency) : "".concat((0, L.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function G(e) {
                var n = e.slice();
                n.sort((function(e, n) {
                    var r = (0, C.uZ)(e.subscriptionPlanId),
                        t = (0, C.uZ)(n.subscriptionPlanId);
                    return r && !t ? -1 : !r && t ? 1 : 0
                }));
                return n
            }

            function k(e) {
                return e.filter((function(e) {
                    var n = e.subscriptionPlanId;
                    return n !== S.Xh.NONE_MONTH && n !== S.Xh.NONE_YEAR
                }))
            }

            function H(e) {
                var n = e.proratedInvoice,
                    r = e.renewalInvoice,
                    a = (0, C.dn)(n),
                    i = a.intervalType,
                    s = a.intervalCount,
                    o = (0, C.dn)(r),
                    l = o.intervalType,
                    c = o.intervalCount;
                return i !== l || s !== c || n.subscriptionPeriodEnd.getTime() === r.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)("div", {
                    className: b().subscriptionPeriodResetNotice,
                    children: P.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function Y(e) {
                var n = e.isUpdate,
                    r = e.currentInvoice,
                    a = e.newInvoice,
                    i = null != r ? (0, T.j)(r.invoiceItems) : null,
                    o = null != r ? (0, C.dn)(r) : null,
                    l = (0, C.dn)(a),
                    c = l.intervalType,
                    u = l.intervalCount,
                    d = null != o && (o.intervalType !== c || o.intervalCount !== u);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(M.KU, {
                        extended: !0
                    }), null != r ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(M.q9, {
                            children: P.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), k(G((0, T.j)(r.invoiceItems))).map((function(e) {
                            return (0, t.jsx)(Z, {
                                invoiceItem: e,
                                currency: r.currency
                            }, e.id)
                        })), (0, t.jsx)(M.KU, {
                            extended: !0
                        })]
                    }) : null, (0, t.jsx)(M.q9, {
                        children: P.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), k(G((0, T.j)(a.invoiceItems))).map((function(e) {
                        var r = null != i && !i.some((function(n) {
                            return n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity
                        }));
                        return (0, t.jsx)(Z, {
                            invoiceItem: e,
                            currency: a.currency,
                            showGuildSubscriptionAdjustmentTooltip: d && (e.subscriptionPlanId === S.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === S.Xh.PREMIUM_6_MONTH_GUILD),
                            className: s()(g({}, b().subscriptionAddedInvoiceItem, !n || r))
                        }, e.id)
                    })), (0, t.jsx)(h.Z, {
                        invoice: a
                    }), (0, t.jsx)(M.KU, {}), (0, t.jsx)(M.R$, {
                        label: P.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, L.og)((0, L.T4)(a.total, a.currency), c, u),
                        className: b().subscriptionCostRow
                    })]
                })
            }

            function F(e) {
                var n, r = e.proratedInvoice,
                    a = e.renewalInvoice,
                    i = e.isTrial,
                    s = e.isUpdate,
                    o = e.overrideRenewalDate,
                    l = e.trialFooterMessageOverride,
                    c = null === (n = (0, v.N)()) || void 0 === n ? void 0 : n.subscription_trial,
                    u = (0, C.dn)(a),
                    d = u.intervalType,
                    I = u.intervalCount;
                if (i) {
                    var p = (0, C.if)({
                            intervalType: null == c ? void 0 : c.interval,
                            intervalCount: null == c ? void 0 : c.interval_count
                        }),
                        f = (null == c ? void 0 : c.interval) === S.rV.DAY && (null == c ? void 0 : c.interval_count) < 28 ? 2 : 7;
                    return (0, t.jsx)(t.Fragment, {
                        children: null != l ? l : P.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: p,
                            days: f,
                            contactLink: O.EYA.CONTACT,
                            helpdeskArticle: E.Z.getArticleURL(O.BhN.PREMIUM_TRIAL)
                        })
                    })
                }
                var m = a.taxInclusive ? P.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : P.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, t.jsx)(t.Fragment, {
                    children: m.format({
                        rate: (0, L.og)((0, L.T4)(a.subtotal, a.currency), d, I),
                        renewalDate: null != o ? o : s ? null != r ? r.subscriptionPeriodEnd : a.subscriptionPeriodStart : a.subscriptionPeriodEnd,
                        contactLink: O.EYA.CONTACT,
                        helpdeskArticle: E.Z.getArticleURL(O.BhN.BILLING)
                    })
                })
            }

            function W(e) {
                var n = e.premiumSubscription,
                    r = e.proratedInvoice,
                    i = e.renewalInvoice,
                    s = e.overrideRenewalDate,
                    o = e.isUpdate,
                    l = void 0 !== o && o,
                    c = e.isTrial,
                    d = void 0 !== c && c,
                    f = e.priceOptions,
                    _ = void 0 === f ? void 0 : f,
                    E = e.isPrepaidPaymentSource,
                    C = void 0 !== E && E,
                    L = e.trialFooterMessageOverride,
                    T = e.hideSubscriptionDetails,
                    v = void 0 !== T && T,
                    h = (0, p.Z)().analyticsLocations,
                    S = A({
                        subscriptionId: null == n ? void 0 : n.id,
                        renewal: !0,
                        preventFetch: !l,
                        analyticsLocatinons: h,
                        analyticsLocation: I.Z.SUBSCRIPTION_INVOICE_FOOTER
                    }, _),
                    O = j((0, N.ED)(S), 1)[0],
                    y = j(a.useState(!1), 2),
                    R = y[0],
                    g = y[1];
                return (0, t.jsxs)(t.Fragment, {
                    children: [C ? null : (0, t.jsx)(M.HE, {
                        children: (0, t.jsx)(F, {
                            proratedInvoice: r,
                            renewalInvoice: i,
                            isTrial: d,
                            isUpdate: l,
                            overrideRenewalDate: s,
                            trialFooterMessageOverride: L
                        })
                    }), !v && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(u.Clickable, {
                            onClick: function() {
                                return g((function(e) {
                                    return !e
                                }))
                            },
                            className: b().subscriptionDetailsToggle,
                            children: [R ? P.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : P.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, t.jsx)(m.Z, {
                                direction: R ? m.Z.Directions.UP : m.Z.Directions.DOWN,
                                className: b().subscriptionDetailsToggleCaret
                            })]
                        }), R ? (0, t.jsx)(Y, {
                            isUpdate: l,
                            currentInvoice: O,
                            newInvoice: i
                        }) : null]
                    })]
                })
            }

            function V(e) {
                var n = e.plan,
                    r = e.className,
                    a = e.paymentSourceId,
                    i = e.isPrepaidPaymentSource,
                    s = void 0 !== i && i,
                    o = (0, C.aS)(n.id, !1, !0, {
                        paymentSourceId: a
                    });
                return (0, t.jsx)(M.PO, {
                    className: r,
                    children: (0,
                        t.jsx)(M.R$, {
                        label: P.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                            planName: (0, C.Gf)(n.id, !1, s)
                        }),
                        value: (0, L.T4)(o.amount, o.currency),
                        className: b().subscriptionCostRow
                    })
                })
            }

            function z(e) {
                var n = e.invoice,
                    r = e.plan,
                    a = (0, T.j)(n.invoiceItems).find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                l()(null != a, "newPlanInvoiceItem can not be null");
                if (r.interval === S.rV.MONTH) return (0, t.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: P.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, L.T4)(a.subscriptionPlanPrice, n.currency)
                    })
                });
                if (r.interval === S.rV.YEAR) return (0, t.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: P.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
                        price: (0, L.T4)(a.subscriptionPlanPrice, n.currency)
                    })
                });
                l()(!1, "Invalid interval type")
            }
        },
        301162: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => k
            });
            var t = r(785893),
                a = (r(667294), r(294184)),
                i = r.n(a),
                s = r(202351),
                o = r(882723),
                l = r(316878),
                c = r(83471),
                u = r(644144),
                d = r(69427),
                I = r(107364),
                p = r(318586),
                f = r(874414),
                m = r(633878);

            function _(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function E(e, n) {
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

            function C(e, n) {
                if (null == e) return {};
                var r, t, a = function(e, n) {
                    if (null == e) return {};
                    var r, t, a = {},
                        i = Object.keys(e);
                    for (t = 0; t < i.length; t++) {
                        r = i[t];
                        n.indexOf(r) >= 0 || (a[r] = e[r])
                    }
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < i.length; t++) {
                        r = i[t];
                        n.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                    }
                }
                return a
            }

            function L(e) {
                var n = e.width,
                    r = void 0 === n ? 143 : n,
                    a = e.height,
                    i = void 0 === a ? 41 : a,
                    s = e.color,
                    o = void 0 === s ? "currentColor" : s,
                    l = e.foreground,
                    c = C(e, ["width", "height", "color", "foreground"]);
                return (0, t.jsxs)("svg", E(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {},
                            t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        t.forEach((function(n) {
                            _(e, n, r[n])
                        }))
                    }
                    return e
                }({}, (0, m.Z)(c)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 143 41",
                    children: [(0, t.jsx)("title", {
                        children: "Nitro Classic"
                    }), (0, t.jsx)("g", {
                        fill: o,
                        className: l,
                        fillRule: "evenodd",
                        "aria-hidden": !0,
                        children: (0, t.jsx)("path", {
                            d: "M98.4808161 8.67851957L97.2236004 17.1425324C96.9366613 19.1428254 94.6742302 20.0716236 92.5917164 20.0716236 90.6527882 20.0716236 88.7494953 19.1428254 89.0007991 17.3214804L90.2578987 8.67851957C90.5449539 6.7854799 92.807385 5.82123843 94.8897827 5.82123843 96.9722965 5.82123843 98.7678712 6.7854799 98.4808161 8.67851957M95.8844352.00380986213L95.8851317 0 82.3544217 0C82.0087483 0 81.715309.252259053 81.6652804.592375835L81.0074795 5.06376857C80.9459594 5.48181435 81.2717838 5.85668169 81.6965047 5.85668169L84.1674077 5.85668169C84.4160419 5.85668169 84.5858606 6.10882529 84.4882409 6.33626252 84.1799439 7.05517195 83.9553375 7.83561644 83.8305561 8.67851957L82.5733404 17.3214804C81.7473459 23.1071601 86.5954788 26 91.8735561 26 97.4035177 26 102.825761 23.1071601 103.651756 17.3214804L104.908275 8.67851957C105.717903 3.00713572 101.040981.115796719 95.8844352.00380986213M15.296869 11.3489531L15.3645208 15.4968998C15.3658783 15.5821668 15.3090871 15.6571606 15.2271809 15.6781634L15.2270678 15.6781634 13.8302517 10.6749217C13.8282154 10.6672739 13.8256134 10.6598544 13.8224457 10.6525491L9.48877489.415833402C9.38198017.163685177 9.13637494 0 8.86452355 0L3.95343718 0C3.6148391 0 3.32805455.251805788 3.28121873.590019998L.00667092325 24.2202696C-.050459726 24.632222.26664366 25 .678889375 25L5.57119616 25C5.91024677 25 6.19737071 24.7475093 6.24364088 24.4086103L7.52608254 15.0207974C7.52732697 15.0116657 7.52789262 15.0023057 7.52777949 14.9930599L7.45775202 10.1692555 7.5975807 10.1340986 9.06465052 15.1374545C9.06679999 15.1445315 9.06928885 15.1516085 9.07223023 15.1584573L13.1252256 24.587591C13.2328122 24.8379129 13.4775124 25 13.7478931 25L19.045884 25C19.3844821 25 19.6712667 24.7481942 19.7181025 24.40998L22.9933291.779730433C23.0504597.367777991 22.7333563 0 22.3211106 0L17.4621772 0C17.1236922 0 16.8369077.251577496 16.7899587.589791707L15.298566 11.3204166C15.2973215 11.3298907 15.2967559 11.3393648 15.296869 11.3489531M24.7126791 25L29.8497922 25C30.205243 25 30.5063014 24.7483072 30.5554684 24.4099773L33.9929971.779733993C34.0529712.36777967 33.7200849 0 33.2873209 0L28.1502078 0C27.7948757 0 27.4938173.251692791 27.4445316.590022692L24.0070029 24.220266C23.9470288 24.6322203 24.2799151 25 24.7126791 25M37.6698384.584862647L37.0075033 4.99943007C36.9456869 5.41217371 37.2736994 5.78240055 37.7012724 5.78240055L42.9904877 5.78240055C43.4157236 5.78240055 43.7430349 6.14863787 43.6850747 6.55955773L41.1933721 24.2228428C41.1354119 24.6337627 41.4627233 25 41.8879592 25L47.0155637 25C47.3658955 25 47.6624739 24.7477488 47.7101508 24.4093241L50.2545552 6.37307648C50.3022321 6.03453779 50.5988105 5.78240055 50.9491423 5.78240055L56.6358988 5.78240055C56.9838934 5.78240055 57.2791864 5.53345492 57.3296679 5.1975379L57.9924704.782970478C58.0544036.370226832 57.7263911 0 57.2987013 0L38.3636075 0C38.0156128 0 37.7202029.248945629 37.6698384.584862647M73.4002223 8.72158326C73.2199776 10.1691878 72.0692022 11.6169065 70.0902313 11.6169065L67.1170073 11.6169065C66.6926763 11.6169065 66.3664914 11.2480995 66.4261466 10.8356886L67.0554915 6.48511303C67.104332 6.147468 67.3988868 5.89657424 67.7463521 5.89657424L70.9177291 5.89657424C72.8244858 5.89657424 73.5797693 7.20309382 73.4002223 8.72158326M71.6373126 0L62.0638753 0C61.7158285 0 61.4210412.251692791 61.3727821.590022692L58.0068571 24.220266C57.9481322 24.6322203 58.2740844 25 58.697834 25L63.7988762 25C64.1473881 25 64.4425243 24.7475082 64.4900856 24.4086076L65.4806177 17.3505938C65.5044565 17.1812005 65.6519083 17.0549546 65.8262224 17.0549546L66.4819644 17.0549546C66.6009259 17.0549546 66.7117473 17.1144249 66.7758214 17.2128191L71.6474295 24.6843852C71.775694 24.8810595 71.9971043 25 72.2350273 25L78.5355692 25C79.0999096 25 79.4307459 24.3765324 79.1072357 23.9225722L73.9950299 16.7493848C73.8724635 16.5773661 73.935491 16.3380012 74.1277133 16.245885 77.3914221 14.6802531 79.2866664 13.0763822 79.911476 8.61554126 80.6303618 2.75412411 76.8897603 0 71.6373126 0M5.93350799 37.6155526L7.71275643 38.4952518C7.80947956 38.5430729 7.84912249 38.6602491 7.80130141 38.7569722 7.79608029 38.7675325 7.78991472 38.7775989 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 7.78288005 38.7870484 6.5023978 40.5070853 5.02480222 41 3.72982215 41 1.63490599 41-.294225433 39.7760989.0373440313 37.3434066L.549769566 33.6565934C.88133903 31.239011 3.1721826 30 5.31231277 30 6.56433391 30 7.99499405 30.5097346 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515 8.63332448 32.2132515L8.63332448 32.2132515C8.68451961 32.3498763 8.61597686 32.5022247 8.4797766 32.5545387L6.63222277 33.2642011C6.50733795 33.312169 6.36596186 33.2651964 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.29461441 33.1520298 6.00467959 32.6921544 5.44749743 32.4931319 4.89031528 32.4931319 4.12167697 32.5082418 3.35303867 32.9313187 3.2475393 33.6565934L2.73511376 37.3434066C2.62961439 38.0384615 3.29275331 38.4766484 4.04632028 38.4766484 4.60310978 38.4766484 5.22108254 38.2435573 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958 5.60253663 37.6999958L5.60253663 37.6999958C5.67690475 37.5940233 5.81746419 37.5581537 5.93351807 37.6155322zM59.2832028 37.6155526L61.0624512 38.4952518C61.1591744 38.5430729 61.1988173 38.6602491 61.1509962 38.7569722 61.1457751 38.7675325 61.1396095 38.7775989 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 61.1325749 38.7870484 59.8520926 40.5070853 58.374497 41 57.079517 41 54.9846008 41 53.0554694 39.7760989 53.3870388 37.3434066L53.8994644 33.6565934C54.2310338 31.239011 56.5218774 30 58.6620076 30 59.9140287 30 61.3446889 30.5097346 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515 61.9830193 32.2132515L61.9830193 32.2132515C62.0342144 32.3498763 61.9656717 32.5022247 61.8294714 32.5545387L59.9819176 33.2642011C59.8570328 33.312169 59.7156567 33.2651964 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.6443092 33.1520298 59.3543744 32.6921544 58.7971922 32.4931319 58.2400101 32.4931319 57.4713718 32.5082418 56.7027335 32.9313187 56.5972341 33.6565934L56.0848086 37.3434066C55.9793092 38.0384615 56.6424481 38.4766484 57.3960151 38.4766484 57.9528046 38.4766484 58.5707773 38.2435573 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958 58.9522314 37.6999958L58.9522314 37.6999958C59.0265995 37.5940233 59.167159 37.5581537 59.2832129 37.6155322zM9.55137248 40.2798328L10.9039613 30.5820306C10.9384202 30.3349668 11.1497126 30.1510989 11.3991679 30.1510989L13.1015272 30.1510989C13.3776695 30.1510989 13.6015272 30.3749565 13.6015272 30.6510989 13.6015272 30.6744353 13.5998934 30.6977431 13.5966378 30.7208514L12.6268238 37.6046981C12.5883006 37.8781402 12.7787399 38.131038 13.052182 38.1695612 13.0752902 38.1728168 13.0985981 38.1744505 13.1219345 38.1744505L16.3149254 38.1744505C16.5910678 38.1744505 16.8149254 38.3983082 16.8149254 38.6744505 16.8149254 38.6968642 16.8134183 38.7192526 16.8104143 38.7414641L16.5839494 40.4159146C16.55041 40.6639006 16.3387043 40.8489011 16.0884606 40.8489011L10.0465791 40.8489011C9.7704367 40.8489011 9.54657907 40.6250435 9.54657907 40.3489011 9.54657907 40.3257952 9.54818071 40.3027171 9.55137248 40.2798328zM25.2618169 30.5450857L27.365844 40.2428879C27.4243935 40.5127519 27.2530892 40.7789836 26.9832252 40.8375331 26.9483937 40.8450901 26.9128539 40.8489011 26.877212 40.8489011L25.017712 40.8489011C24.7774965 40.8489011 24.5712291 40.6780766 24.5264688 40.4420682L24.273859 39.1101296C24.2290987 38.8741212 24.0228313 38.7032967 23.7826158 38.7032967L21.6737234 38.7032967C21.475839 38.7032967 21.2965724 38.8200012 21.2164933 39.0009587L20.5304477 40.5512391C20.4503686 40.7321966 20.2711021 40.8489011 20.0732176 40.8489011L18.3049929 40.8489011C18.0288505 40.8489011 17.8049929 40.6250435 17.8049929 40.3489011 17.8049929 40.2729821 17.8222812 40.1980599 17.8555465 40.1298168L22.5827762 30.4320146C22.6665559 30.2601425 22.8410184 30.1510989 23.0322226 30.1510989L24.773185 30.1510989C25.0084749 30.1510989 25.2119293 30.3151453 25.2618169 30.5450857zM22.2977121 36.3008242L23.895274 36.3008242 23.5787759 33.1730769 23.4732765 33.1730769 22.2977121 36.3008242zM28.4615085 38.7933304L29.6600776 37.7982307C29.867419 37.6260869 30.1698805 37.6329436 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.3692081 37.8143064 30.8626279 38.2632556 31.5697924 38.4917582 32.2174996 38.4917582 32.9409239 38.4917582 33.5739201 38.2348901 33.6794195 37.6758242 33.7999902 37.010989 32.8655672 36.7239011 32.0065008 36.603022 30.3335822 36.331044 28.8264482 34.9862637 29.2032317 32.9615385 29.6101579 30.7706044 31.5392893 30 33.4985634 30 34.6675402 30 35.7629615 30.294974 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989 36.6410928 31.3393989L36.6410928 31.3393989C36.7911777 31.5179057 36.7681372 31.784282 36.5896304 31.9343669 36.5796762 31.9427362 36.5693406 31.9506412 36.5586568 31.9580566L35.2852973 32.8418354C35.1082978 32.964687 34.8717504 32.9572254 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.7028454 32.8234627 34.2644214 32.476257 33.6924031 32.3091824 33.1820653 32.2967033 32.503855 32.2815934 31.9311441 32.5384615 31.8708588 33.0824176 31.7955021 33.7019231 32.3380703 33.9739011 33.1519226 34.1552198 35.0056973 34.5027473 36.8142581 35.2129121 36.3169039 37.8722527 35.925049 39.9574176 34.1164883 41 31.8105734 41 30.6586546 41 29.2630198 40.4746703 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963 28.4016401 39.4349963L28.4016401 39.4349963C28.2411035 39.2412306 28.2678891 38.9540435 28.4614898 38.7933078zM38.3784498 38.7933304L39.5770189 37.7982307C39.7843603 37.6260869 40.0868217 37.6329436 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.2861493 37.8143064 40.7795691 38.2632556 41.4867336 38.4917582 42.1344408 38.4917582 42.8578651 38.4917582 43.4908613 38.2348901 43.5963607 37.6758242 43.7169314 37.010989 42.7825084 36.7239011 41.9234421 36.603022 40.2505234 36.331044 38.7433895 34.9862637 39.120173 32.9615385 39.5270991 30.7706044 41.4562305 30 43.4155046 30 44.5844814 30 45.6799028 30.294974 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989 46.558034 31.3393989L46.558034 31.3393989C46.708119 31.5179057 46.6850785 31.784282 46.5065716 31.9343669 46.4966174 31.9427362 46.4862819 31.9506412 46.4755981 31.9580566L45.2022385 32.8418354C45.025239 32.964687 44.7886916 32.9572254 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.6197866 32.8234627 44.1813626 32.476257 43.6093444 32.3091824 43.0990065 32.2967033 42.4207963 32.2815934 41.8480854 32.5384615 41.7878 33.0824176 41.7124433 33.7019231 42.2550115 33.9739011 43.0688638 34.1552198 44.9226386 34.5027473 46.7311993 35.2129121 46.2338451 37.8722527 45.8419903 39.9574176 44.0334296 41 41.7275147 41 40.5755958 41 39.179961 40.4746703 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963 38.3185814 39.4349963L38.3185814 39.4349963C38.1580447 39.2412306 38.1848304 38.9540435 38.378431 38.7933078zM51.984237 30.7201672L50.6316481 40.4179694C50.5971892 40.6650332 50.3858968 40.8489011 50.1364415 40.8489011L48.4483514 40.8489011C48.1722091 40.8489011 47.9483514 40.6250435 47.9483514 40.3489011 47.9483514 40.3257952 47.9499531 40.3027171 47.9531448 40.2798328L49.3057337 30.5820306C49.3401926 30.3349668 49.551485 30.1510989 49.8009403 30.1510989L51.4890304 30.1510989C51.7651728 30.1510989 51.9890304 30.3749565 51.9890304 30.6510989 51.9890304 30.6742048 51.9874287 30.6972829 51.984237 30.7201672z"
                        })
                    })]
                }))
            }

            function N(e) {
                var n = e.className;
                return (0, t.jsxs)("svg", {
                    width: "135",
                    height: "32",
                    viewBox: "0 0 135 32",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: n,
                    children: [(0, t.jsx)("path", {
                        d: "M2.17332 27.8901L6.92419 26.1319C7.02527 26.044 7.02527 25.9561 6.92419 25.9561L2.17332 24.1099L0.050529 20.0659C0.050529 19.978 -0.0505667 19.978 -0.15165 20.0659L-2.17332 24.1099H-2.27438L-6.92419 25.9561C-7.02527 25.9561 -7.02527 26.044 -6.92419 26.1319L-2.27438 27.8901H-2.17332L-0.15165 31.9341C-0.0505667 32.022 0.050529 32.022 0.050529 31.9341L2.17332 27.8901Z",
                        fill: "#F2F3F5"
                    }), (0, t.jsx)("path", {
                        d: "M6.7581 18.6026L4.04332 17.5769C3.98556 17.5256 3.98556 17.4744 4.04332 17.4744L6.7581 16.3974L7.97113 14.0385C7.97113 13.9872 8.0289 13.9872 8.08666 14.0385L9.2419 16.3974H9.29964L11.9567 17.4744C12.0144 17.4744 12.0144 17.5256 11.9567 17.5769L9.29964 18.6026H9.2419L8.08666 20.9615C8.0289 21.0128 7.97113 21.0128 7.97113 20.9615L6.7581 18.6026Z",
                        fill: "#F2F3F5"
                    }), (0, t.jsx)("path", {
                        d: "M129.758 12.6026L127.043 11.5769C126.986 11.5256 126.986 11.4744 127.043 11.4744L129.758 10.3974L130.971 8.03846C130.971 7.98718 131.029 7.98718 131.087 8.03846L132.242 10.3974H132.3L134.957 11.4744C135.014 11.4744 135.014 11.5256 134.957 11.5769L132.3 12.6026H132.242L131.087 14.9615C131.029 15.0128 130.971 15.0128 130.971 14.9615L129.758 12.6026Z",
                        fill: "#F2F3F5"
                    }), (0, t.jsx)("path", {
                        d: "M116.482 7.2326L112.07 5.62087C111.977 5.54029 111.977 5.45972 112.07 5.45972L116.482 3.7674L118.453 0.0604396C118.453 -0.0201465 118.547 -0.0201465 118.641 0.0604396L120.518 3.7674H120.612L124.93 5.45972C125.023 5.45972 125.023 5.54029 124.93 5.62087L120.612 7.2326H120.518L118.641 10.9396C118.547 11.0201 118.453 11.0201 118.453 10.9396L116.482 7.2326Z",
                        fill: "#F2F3F5"
                    })]
                })
            }
            var T = r(507965),
                v = r(116094),
                M = r(249052),
                h = r(203600),
                S = r(473708),
                O = r(189532),
                P = r.n(O);

            function y(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function b(e, n) {
                var r = v.ZP.getDefaultPrice(e),
                    t = v.ZP.getInterval(e).intervalType,
                    a = (0, M.T4)(r.amount, r.currency);
                if (n) return a;
                switch (t) {
                    case h.rV.MONTH:
                        return S.Z.Messages.BILLING_PRICE_PER_MONTH.format({
                            price: a
                        });
                    case h.rV.YEAR:
                        return S.Z.Messages.BILLING_PRICE_PER_YEAR.format({
                            price: a
                        })
                }
            }
            var R = function(e) {
                var n = e.isTier0;
                return (0, t.jsx)("div", {
                    className: P().trialBadgeContainer,
                    children: (0, t.jsx)(o.Text, {
                        variant: "text-xs/bold",
                        className: i()(P().trialOfferText, y({}, P().tier0TrialOffer, n)),
                        children: S.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
                    })
                })
            };
            const g = function(e) {
                var n, r = e.hideCloseButton,
                    a = void 0 !== r && r,
                    c = e.hideCloseOnFullScreen,
                    u = e.shouldShowPrice,
                    m = e.plan,
                    _ = e.renderAnimation,
                    E = e.onClose,
                    C = e.isGift,
                    v = e.upgradeToPremiumType,
                    M = e.headerTheme,
                    S = void 0 === M ? d.nL.DEFAULT : M,
                    O = e.className,
                    g = e.showTrialBadge,
                    A = void 0 !== g && g,
                    x = v === h.p9.TIER_2;
                n = v === h.p9.TIER_0 ? f.Z : v === h.p9.TIER_1 ? L : p.Z;
                var j, U = (0, s.e7)([l.Z], (function() {
                    return l.Z.useReducedMotion
                }));
                return (0, t.jsxs)("div", {
                    "aria-hidden": !0,
                    className: i()((j = {}, y(j, P().headerBackground, !x), y(j, S === d.nL.WINTER ? P().tier2HeaderBackgroundWinterTheme : P().tier2HeaderBackground, x), j), O),
                    children: [U || S !== d.nL.WINTER ? null : (0, t.jsx)(T.Z, {
                        className: P().snow,
                        wind: 5
                    }), A && (0, t.jsx)(N, {
                        className: P().trialBadgeSparkles
                    }), _(), (0, t.jsxs)(I.Z, {
                        align: I.Z.Align.START,
                        justify: I.Z.Justify.BETWEEN,
                        className: P().headerTop,
                        children: [(0, t.jsxs)("div", {
                            children: [(0, t.jsx)(n, {
                                className: i()(P().headerIcon, y({}, P().nonTier2, !x))
                            }), A && (0, t.jsx)(R, {
                                isTier0: v === h.p9.TIER_0
                            })]
                        }), !a && (0, t.jsx)(o.ModalCloseButton, {
                            hideOnFullscreen: c,
                            onClick: E,
                            className: P().closeButton
                        })]
                    }), u && null != m ? (0, t.jsx)("div", {
                        className: P().price,
                        children: b(m, C)
                    }) : null]
                })
            };
            var A = r(630689),
                x = r(437763);

            function j(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function U(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, i = [],
                            s = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return j(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Z(e) {
                var n = e.currentStep,
                    r = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    s = U((0, x.z)({
                        purchaseState: r,
                        currentStep: n,
                        initialScene: A.NQ.Scenes.NORMAL,
                        purchaseScene: A.NQ.Scenes.SPEED_START,
                        errorScene: A.NQ.Scenes.NORMAL,
                        successScene: A.NQ.Scenes.FINISH
                    }), 2),
                    o = s[0],
                    l = s[1];
                return (0, t.jsx)(A.NQ, {
                    className: a,
                    nextScene: o,
                    onScenePlay: function(e) {
                        return l(A.NQ.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }

            function w(e) {
                var n = e.currentStep,
                    r = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    s = U((0, x.z)({
                        purchaseState: r,
                        currentStep: n,
                        initialScene: A.HC.Scenes.NORMAL,
                        purchaseScene: A.HC.Scenes.SPEED_START,
                        errorScene: A.HC.Scenes.NORMAL,
                        successScene: A.HC.Scenes.FINISH
                    }), 2),
                    o = s[0],
                    l = s[1];
                return (0, t.jsx)(A.HC, {
                    className: a,
                    nextScene: o,
                    onScenePlay: function(e) {
                        return l(A.HC.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }

            function D(e) {
                var n = e.currentStep,
                    r = e.purchaseState,
                    a = e.className,
                    i = e.pause,
                    s = U((0, x.z)({
                        purchaseState: r,
                        currentStep: n,
                        initialScene: A.Db.Scenes.IDLE_ENTRY,
                        purchaseScene: A.Db.Scenes.BOOST_START,
                        errorScene: A.Db.Scenes.ERROR,
                        successScene: A.Db.Scenes.BOOST_END
                    }), 2),
                    o = s[0],
                    l = s[1];
                return (0, t.jsx)(A.Db, {
                    className: a,
                    nextScene: o,
                    onScenePlay: function(e) {
                        return l(A.Db.getNextScene(e))
                    },
                    pauseWhileUnfocused: !1,
                    pause: i
                })
            }
            var B = r(937452),
                G = r.n(B);

            function k(e) {
                var n = e.currentStep,
                    r = e.className,
                    a = e.purchaseState,
                    I = e.premiumType,
                    p = e.useWinterTheme,
                    f = void 0 !== p && p,
                    m = e.onClose,
                    _ = e.hideCloseButton,
                    E = e.showTrialBadge,
                    C = (0, s.e7)([l.Z], (function() {
                        return l.Z.useReducedMotion
                    })),
                    L = f ? d.nL.WINTER : d.nL.DEFAULT;
                return (0, u.a8)(undefined) && n !== c.h8.CONFIRM ? (0, t.jsx)(o.ModalHeader, {
                    className: G().modalHeaderCustomGift,
                    separator: !1,
                    children: (0, t.jsx)("div", {
                        className: G().giftNitroInfo,
                        children: (0, t.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            children: function() {
                                switch (n) {
                                    case c.h8.PLAN_SELECT:
                                        return S.Z.Messages.GIFT_NITRO_ACTION;
                                    case c.h8.ADD_PAYMENT_STEPS:
                                        return S.Z.Messages.PAYMENT_METHOD_SELECTION;
                                    case c.h8.REVIEW:
                                        return S.Z.Messages.GIFT_PURCHASE_REVIEW;
                                    default:
                                        return S.Z.Messages.GIFT_NITRO_ACTION
                                }
                            }()
                        })
                    })
                }) : (0, t.jsx)(o.ModalHeader, {
                    className: i()(G().modalHeader, r),
                    separator: !1,
                    children: (0, t.jsx)(g, {
                        hideCloseOnFullScreen: !0,
                        hideCloseButton: _,
                        shouldShowPrice: !0,
                        upgradeToPremiumType: I,
                        renderAnimation: function() {
                            return I === h.p9.TIER_0 ? (0, t.jsx)(Z, {
                                className: G().headerAnimation,
                                currentStep: n,
                                purchaseState: a,
                                pause: C
                            }) : I === h.p9.TIER_1 ? (0, t.jsx)(w, {
                                className: G().headerAnimation,
                                currentStep: n,
                                purchaseState: a,
                                pause: C
                            }) : (0, t.jsx)(D, {
                                className: G().headerAnimation,
                                currentStep: n,
                                purchaseState: a,
                                pause: C
                            })
                        },
                        plan: null,
                        isGift: !1,
                        className: G().header,
                        onClose: m,
                        headerTheme: L,
                        showTrialBadge: E
                    })
                })
            }
        },
        111090: (e, n, r) => {
            "use strict";
            r.d(n, {
                w: () => d,
                H: () => p
            });
            var t = r(667294),
                a = r(202351),
                i = r(105783),
                s = r(551778),
                o = r(151367),
                l = r(116094),
                c = r(520453),
                u = r(473708);

            function d(e, n, r) {
                t.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !r) {
                        i.Z.show({
                            title: u.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: c.Vz[e.paymentGateway]
                            }),
                            body: u.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                                paymentGatewayName: c.Vz[e.paymentGateway],
                                subscriptionManagementLink: (0, l.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }),
                            confirmText: u.Z.Messages.OKAY
                        });
                        n()
                    }
                }), [e])
            }
            var I = [];

            function p(e, n) {
                var r = (0, a.e7)([s.Z], (function() {
                        return null != e ? s.Z.get(e) : null
                    })),
                    i = (0, a.e7)([o.Z], (function() {
                        var e;
                        return null != r && null !== (e = o.Z.getForSku(r.skuId)) && void 0 !== e ? e : I
                    })),
                    c = t.useMemo((function() {
                        return Array.from(i).filter((function(e) {
                            var n = e.parentId,
                                r = e.consumed;
                            return null != n && !r
                        }))
                    }), [i]);
                return {
                    hasEntitlements: !n && null != r && null != c && c.length >= l.ZP.getIntervalMonths(r.interval, r.intervalCount),
                    entitlements: c
                }
            }
        }
    }
]);