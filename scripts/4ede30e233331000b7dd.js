(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43814], {
        777603: (e, t, n) => {
            e.exports = n.p + "32b09dfdf8f5312c51057c07ca9a2dfd.png"
        },
        446436: (e, t, n) => {
            e.exports = n.p + "71ca4376249bece624d91eccdcd0f796.png"
        },
        795138: (e, t, n) => {
            e.exports = n.p + "574da6b96d2a0273650aab5774e132b5.png"
        },
        7477: (e, t, n) => {
            e.exports = n.p + "19da5edeb11f7e64d78f6849b11ad222.png"
        },
        415324: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => l,
                Z: () => o
            });
            var r = n(785893),
                a = (n(667294), n(304548)),
                i = n(473708);

            function s(e) {
                switch (e) {
                    case "brl":
                        return i.Z.Messages.BRL_NAME;
                    case "pln":
                        return i.Z.Messages.PLN_NAME;
                    case "try":
                        return i.Z.Messages.TRY_NAME;
                    case "usd":
                        return i.Z.Messages.USD_NAME;
                    case "aud":
                        return i.Z.Messages.AUD_NAME;
                    case "pen":
                        return i.Z.Messages.PEN_NAME;
                    case "php":
                        return i.Z.Messages.PHP_NAME;
                    case "ars":
                        return i.Z.Messages.ARS_NAME;
                    case "cop":
                        return i.Z.Messages.COP_NAME;
                    case "clr":
                        return i.Z.Messages.CLR_NAME;
                    case "jpy":
                        return i.Z.Messages.JPY_NAME;
                    case "idr":
                        return i.Z.Messages.IDR_NAME;
                    case "vnd":
                        return i.Z.Messages.VND_NAME;
                    case "thb":
                        return i.Z.Messages.THB_NAME;
                    case "myr":
                        return i.Z.Messages.MYR_NAME;
                    case "krw":
                        return i.Z.Messages.KRW_NAME;
                    case "mxn":
                        return i.Z.Messages.MXN_NAME;
                    case "bgn":
                        return i.Z.Messages.BGN_NAME;
                    case "czk":
                        return i.Z.Messages.CZK_NAME;
                    case "dkk":
                        return i.Z.Messages.DKK_NAME;
                    case "huf":
                        return i.Z.Messages.HUF_NAME;
                    case "ron":
                        return i.Z.Messages.RON_NAME;
                    case "sek":
                        return i.Z.Messages.SEK_NAME;
                    case "eur":
                        return i.Z.Messages.EUR_NAME;
                    default:
                        return ""
                }
            }

            function l(e) {
                var t = e.currencies,
                    n = e.className,
                    a = e.children;
                return t.length < 2 ? null : (0, r.jsx)("div", {
                    className: n,
                    children: a
                })
            }
            const o = function(e) {
                var t = e.currencies,
                    n = e.onChange,
                    i = e.selectedCurrency,
                    l = e.className,
                    o = e.disabled,
                    c = void 0 !== o && o;
                if (t.length < 2) return null;
                var u = t.map((function(e, t) {
                    return {
                        key: t,
                        value: e,
                        label: "".concat(e.toUpperCase(), " - ").concat(s(e))
                    }
                }));
                return (0, r.jsx)(a.SingleSelect, {
                    value: i,
                    options: u,
                    onChange: function(e) {
                        null != e && n(e)
                    },
                    className: l,
                    isDisabled: c
                })
            }
        },
        986304: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => _
            });
            var r = n(441143),
                a = n.n(r),
                i = n(685269),
                s = n(717035),
                l = n(27059),
                o = n(652591),
                c = n(782786),
                u = n(83471),
                d = n(2590),
                f = n(203600);

            function p(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        p(e, t, n[t])
                    }))
                }
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function _(e) {
                var t = e.analyticsData,
                    n = e.initialPlanId,
                    r = e.breadcrumbSteps,
                    p = e.handleStepChange,
                    _ = e.referralTrialOfferId,
                    I = e.onReturn,
                    h = (0, c.usePaymentContext)(),
                    b = h.contextMetadata,
                    E = h.step,
                    g = h.paymentSources,
                    O = h.paymentSourceId,
                    v = h.setPaymentSourceId,
                    N = h.purchaseError,
                    T = h.setPurchaseError,
                    P = h.purchaseErrorBlockRef,
                    S = h.paymentAuthenticationState,
                    A = h.isGift,
                    M = h.selectedSkuId,
                    x = y(m({}, (0, l.fL)()), {
                        paymentSources: g,
                        paymentSourceId: O,
                        setPaymentSourceId: v,
                        purchaseError: N,
                        setPurchaseError: T,
                        purchaseErrorBlockRef: P,
                        paymentAuthenticationState: S
                    }),
                    R = (0, s.N)(_),
                    j = !A && null != R && null != M && f.nG[R.trial_id].skus.includes(M),
                    C = null != I ? I : function() {
                        var e = Object.values(g).length < 1 && null == n ? u.h8.PLAN_SELECT : u.h8.REVIEW;
                        p(e, {
                            trackedFromStep: u.h8.PAYMENT_TYPE
                        })
                    };
                a()(E, "Step should be set here");
                var L = (0, i.Z)((function() {
                    return Date.now()
                }), [E]);
                return (0, l.vP)({
                    paymentModalArgs: x,
                    initialStep: u.h8.PAYMENT_TYPE,
                    prependSteps: [u.h8.PROMOTION_INFO],
                    appendSteps: [u.h8.REVIEW, u.h8.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: E,
                    usePaymentModalStep: !0,
                    onReturn: C,
                    onComplete: function(e) {
                        p(u.h8.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: function(e) {
                        var n = e.currentStep,
                            r = e.toStep,
                            a = Date.now();
                        o.default.track(d.rMx.PAYMENT_FLOW_STEP, y(m({}, t), {
                            from_step: n,
                            to_step: r,
                            step_duration_ms: a - L,
                            flow_duration_ms: a - b.startTime
                        }))
                    },
                    isEligibleForTrial: j
                })
            }
        },
        493957: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(785893),
                a = (n(667294), n(554189)),
                i = n(128059),
                s = n(149096),
                l = n(894870),
                o = n.n(l);

            function c() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i.Z, {}), (0, r.jsx)(s.C3, {
                        children: (0, r.jsx)(a.F, {
                            className: o().awaitingAuthenticationStep
                        })
                    })]
                })
            }
        },
        806706: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                a = n(667294),
                i = n(315804),
                s = n(304548),
                l = n(107364),
                o = n(473708),
                c = n(547656),
                u = n.n(c),
                d = function(e) {
                    var t = e.className,
                        n = e.isEmailResent,
                        a = e.resendEmail;
                    return (0, r.jsx)("div", {
                        className: t,
                        children: (0, r.jsxs)("div", {
                            className: u().awaitingWrapper,
                            children: [(0, r.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, r.jsx)("br", {}), (0, r.jsxs)(s.Text, {
                                    variant: "text-md/normal",
                                    children: [o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, " ", n ? o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, r.jsx)(s.Anchor, {
                                        onClick: a,
                                        children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                f = function() {
                    return (0, r.jsx)("div", {
                        children: (0, r.jsx)(s.ModalFooter, {
                            justify: l.Z.Justify.BETWEEN,
                            align: l.Z.Align.CENTER,
                            children: (0,
                                r.jsx)(s.Button, {
                                "data-testid": "continue",
                                color: s.Button.Colors.BRAND,
                                disabled: !0,
                                children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                            })
                        })
                    })
                },
                p = n(128059),
                m = n(149096),
                y = n(757995),
                _ = n.n(y);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t, n, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(r, a)
            }

            function b(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e, t) {
                var n, r, a, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
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
                                        r = i[1];
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
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function g() {
                var e, t, n = b(a.useState(!1), 2),
                    s = n[0],
                    l = n[1],
                    o = (t = (e = function() {
                        return E(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    l(!0);
                                    return [4, (0, i.xA)()];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, a) {
                            var i = e.apply(t, n);

                            function s(e) {
                                h(i, r, a, s, l, "next", e)
                            }

                            function l(e) {
                                h(i, r, a, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }), function() {
                        return t.apply(this, arguments)
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(m.C3, {
                        children: (0, r.jsx)(d, {
                            className: _().body,
                            isEmailResent: s,
                            resendEmail: o
                        })
                    }), (0,
                        r.jsx)(m.O3, {
                        children: (0, r.jsx)(f, {})
                    })]
                })
            }
        },
        28648: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                a = (n(667294), n(304548)),
                i = n(21045),
                s = n.n(i);

            function l() {
                return (0, r.jsx)(a.Spinner, {
                    className: s().spinner
                })
            }
        },
        837598: (e, t, n) => {
            "use strict";
            n.d(t, {
                sE: () => s
            });
            var r = n(260561),
                a = n(694329),
                i = (0, r.B)({
                    kind: "user",
                    id: "2022-06_no_payment_info_trial",
                    label: "No Payment Info Trial",
                    defaultConfig: {
                        bypassCheckout: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bypass collecting payment info",
                        config: {
                            bypassCheckout: !0
                        }
                    }]
                }),
                s = function(e, t, n) {
                    var r = i.useExperiment({
                            location: "aeb070_1"
                        }, {
                            autoTrackExposure: !1
                        }).bypassCheckout,
                        s = function(e, t, n) {
                            var r = null == n || (0, a.uZ)(n);
                            return null != e && null == t && r
                        }(e, t, n);
                    return r && s
                }
        },
        268226: (e, t, n) => {
            "use strict";
            n.d(t, {
                Kp: () => i,
                $g: () => s,
                nA: () => l
            });
            var r = n(694329),
                a = n(203600);

            function i(e) {
                var t = e.isTrial,
                    n = e.isGift,
                    r = e.selectedSkuId,
                    i = e.startedPaymentFlowWithPaymentSources;
                return !t && !n && null != r && a.YQ.includes(r) && i
            }

            function s(e, t, n) {
                var r = !1;
                if (e && null != t) {
                    null == t.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === n.id
                    })) && (r = !0)
                }
                return r
            }

            function l(e, t, n) {
                var i = null != t ? (0, r.Af)(t) : null,
                    s = a.mn[e],
                    l = null != n ? n : s;
                null != i ? l === i.planId && l === a.IW[e] ? l = a.mn[e] : l === i.planId && l === a.mn[e] ? l = a.IW[e] : i.planId !== a.Xh.PREMIUM_YEAR_TIER_0 && i.planId !== a.Xh.PREMIUM_YEAR_TIER_1 || l !== a.Xh.PREMIUM_MONTH_TIER_2 || (l = a.Xh.PREMIUM_YEAR_TIER_2) : l === a.Xh.PREMIUM_YEAR_TIER_1 && (l = a.Xh.PREMIUM_MONTH_TIER_1);
                return l
            }
        },
        471450: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZP: () => s,
                aQ: () => o
            });
            var r = n(197597),
                a = n(260561),
                i = n(203600);
            const s = (0, a.B)({
                kind: "user",
                id: "2022-02_multi_month_plans",
                label: "Multi Month Plans",
                defaultConfig: {
                    newPlans: []
                },
                treatments: [{
                    id: 1,
                    label: "3 and 6 Month Plans",
                    config: {
                        newPlans: [i.Xh.PREMIUM_6_MONTH_TIER_2, i.Xh.PREMIUM_3_MONTH_TIER_2]
                    }
                }, {
                    id: 2,
                    label: "3 Month Plan Only",
                    config: {
                        newPlans: [i.Xh.PREMIUM_3_MONTH_TIER_2]
                    }
                }]
            });
            var l = new Set([r.S.US, r.S.CA]);

            function o(e) {
                return null == e || l.has(e.country)
            }
        },
        499171: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => f
            });
            var r = n(730381),
                a = n.n(r),
                i = n(202351),
                s = n(711531),
                l = n(551778),
                o = n(536392),
                c = n(694329),
                u = n(2590),
                d = n(520453);

            function f() {
                var e = (0, i.e7)([o.Z], (function() {
                        return o.Z.getPremiumTypeSubscription()
                    })),
                    t = (0, i.e7)([l.Z], (function() {
                        return null != e && null != e.planIdFromItems ? l.Z.get(null == e ? void 0 : e.planIdFromItems) : null
                    })),
                    n = (0, i.e7)([s.Z], (function() {
                        return null != e && null != e.paymentSourceId ? s.Z.getPaymentSource(e.paymentSourceId) : null
                    }), [e]),
                    r = null != n && d.Uk.has(n.type),
                    f = (null == e ? void 0 : e.status) === u.O0b.PAST_DUE ? a()().diff(a()(e.currentPeriodStart), "days") : 0;
                return !(null == e || null == t || !(0, c.uZ)(t.id)) && (r && f >= 0 && f <= (0, c.lU)(e) && e.status === u.O0b.PAST_DUE && !e.isPurchasedExternally)
            }
        },
        668900: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => E,
                U: () => h
            });
            var r = n(785893),
                a = (n(667294), n(294184)),
                i = n.n(a),
                s = n(441143),
                l = n.n(s),
                o = n(818417),
                c = n(348592),
                u = n(260561);
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
                f = (0, u.B)({
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
            var p = n(902954),
                m = n(2590),
                y = n(473708),
                _ = n(516178),
                I = n.n(_);

            function h() {
                var e = (0, p.Z)(),
                    t = d.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    n = f.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return null != e && ("PL" === e ? t : "TR" === e && n)
            }

            function b(e, t) {
                return "PL" === e ? t ? y.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? t ? y.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : t ? y.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const E = function(e) {
                var t = e.fromBoostCancelModal,
                    n = e.className,
                    a = (0, p.Z)();
                if (!h()) return null;
                l()(null != a, "Subscription billing country should not be null");
                return (0, r.jsxs)("div", {
                    className: i()(I().noticeRoot, n),
                    children: [(0, r.jsx)("div", {
                        className: I().iconContainer,
                        children: (0, r.jsx)(o.Z, {
                            className: I().infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: I().text,
                        children: b(a, t).format({
                            helpCenterLink: c.Z.getArticleURL(m.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        509897: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var r = n(785893),
                a = (n(667294), n(304548)),
                i = n(473708),
                s = n(241387),
                l = n.n(s);
            const o = function(e) {
                var t = e.onClick;
                return (0, r.jsx)(a.Anchor, {
                    onClick: t,
                    className: l().link,
                    children: i.Z.Messages.BACK
                })
            }
        },
        311556: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => Ue,
                M: () => Be
            });
            var r = n(785893),
                a = n(667294),
                i = n(441143),
                s = n.n(i),
                l = n(202351),
                o = n(304548),
                c = n(929400),
                u = n(782786),
                d = n(83471),
                f = n(260561);
            const p = (0, f.B)({
                id: "2023-07_checkout_optimization_browser_autofill",
                label: "Checkout Optimization Browser Autofill",
                kind: "user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var m, y = n(551778),
                _ = n(536392),
                I = n(644144),
                h = n(348592),
                b = n(120415),
                E = n(694329),
                g = n(249052),
                O = n(471450);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(m || (m = {}));
            const v = (0, f.B)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: m.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: m.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: m.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            });
            var N = n(165666),
                T = n(344266),
                P = n(717035),
                S = n(668900),
                A = n(16703),
                M = n(367095),
                x = n(281808),
                R = n(855483),
                j = n(863979),
                C = n(369263),
                L = n(382060),
                Z = n(2590),
                w = n(473708),
                G = n(22865),
                D = n.n(G);

            function k(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function U(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return k(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = (0, L.kt)({
                id: "1",
                type: Z.d4z.DM
            });

            function F(e) {
                var t = e.sectionTitle,
                    n = e.errors,
                    i = e.onTextChange,
                    s = e.pendingText,
                    l = e.placeholder,
                    c = e.currentText,
                    u = e.disabled,
                    d = void 0 !== u && u,
                    f = U(a.useState(null != s ? s : c), 2),
                    p = f[0],
                    m = f[1],
                    y = U(a.useState((0, R.JM)(p)), 2),
                    _ = y[0],
                    I = y[1],
                    h = a.useRef(!1);
                a.useEffect((function() {
                    h.current = !0
                }), []);
                a.useEffect((function() {
                    if (void 0 === s) {
                        var e = (0, R.JM)(c);
                        m(c);
                        I(e)
                    }
                }), [s, c]);
                return (0, r.jsx)("div", {
                    className: D().body,
                    children: (0, r.jsxs)(C.Z, {
                        title: t,
                        errors: n,
                        disabled: d,
                        children: [(0, r.jsx)(j.Z, {
                            innerClassName: D().textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, t, n) {
                                if (t !== p) {
                                    m(t);
                                    I(n);
                                    i(t)
                                }
                            },
                            placeholder: l,
                            channel: B,
                            textValue: p,
                            richValue: _,
                            type: x.I.CUSTOM_GIFT,
                            onBlur: function() {
                                h.current = !1
                            },
                            onFocus: function() {
                                h.current = !0
                            },
                            focused: h.current,
                            onSubmit: function() {
                                return new Promise((function(e) {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                }))
                            }
                        }), (0, r.jsx)(o.HiddenVisually, {
                            children: w.Z.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
            var H, Y = n(386991),
                W = n(467345),
                K = n(69427),
                V = n(621270),
                X = n(882211),
                z = n(614278),
                J = n.n(z),
                Q = n(777603),
                $ = n.n(Q),
                q = n(446436),
                ee = n.n(q),
                te = n(795138),
                ne = n.n(te),
                re = n(7477),
                ae = n.n(re);

            function ie(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var se = (ie(H = {}, K.Cj.STANDARD_BOX, $()), ie(H, K.Cj.CAKE, ee()), ie(H, K.Cj.CHEST, ne()), ie(H, K.Cj.COFFEE, ae()), ie(H, K.Cj.SNOWGLOBE, ""), ie(H, K.Cj.BOX, ""), ie(H, K.Cj.CUP, ""), H),
                le = a.forwardRef((function(e, t) {
                    var n = e.isSelected,
                        a = e.giftStyle,
                        i = e.setSelectedGiftStyle,
                        s = e.onFocus,
                        l = e.onBlur;
                    return (0, r.jsx)(o.Clickable, {
                        innerRef: t,
                        className: J().clickable,
                        onClick: function() {
                            return i(a)
                        },
                        onFocus: s,
                        onBlur: l,
                        children: (0, r.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: se[a],
                            className: n ? J().customGiftBoxHighlighted : J().customGiftBox
                        })
                    })
                })),
                oe = n(233863),
                ce = n.n(oe);

            function ue(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function de(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        de(e, t, n[t])
                    }))
                }
                return e
            }

            function pe(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function me(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ue(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ue(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ye = [K.Cj.BOX, K.Cj.CUP, K.Cj.SNOWGLOBE],
                _e = [K.Cj.STANDARD_BOX, K.Cj.CAKE, K.Cj.COFFEE, K.Cj.CHEST],
                Ie = function() {
                    return (0, r.jsxs)("div", {
                        className: ce().giftBoxHeaderContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: ce().giftBoxHeaderText,
                            children: w.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }), (0, r.jsx)(o.Tooltip, {
                            text: w.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return (0, r.jsx)(o.Clickable, pe(fe({}, e), {
                                    className: ce().infoIconContainer,
                                    "aria-label": w.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                                    children: (0, r.jsx)(Y.Z, {
                                        className: ce().infoIcon
                                    })
                                }))
                            }
                        })]
                    })
                },
                he = function(e) {
                    var t = e.selectedGiftStyle,
                        n = e.setSelectedGiftStyle,
                        i = (0, u.usePaymentContext)().giftRecipient,
                        s = me(a.useState(!1), 2),
                        l = s[0],
                        c = s[1],
                        d = a.useRef(null),
                        f = (0, o.useRadioGroup)({
                            orientation: "horizontal"
                        }),
                        p = V.ZP.getCurrentConfig({
                            location: "premiumGiftSelect_GiftAnimationOptions"
                        }).enabled,
                        m = (0, I.a8)(i),
                        y = null;
                    p ? y = ye : m && (y = _e);
                    return (0, r.jsxs)("div", {
                        children: [p && (0, r.jsx)(Ie, {}), m && null != t && (0, r.jsx)(X.Z, {
                            giftStyle: t,
                            defaultAnimationState: W.SR.ACTION,
                            idleAnimationState: W.SR.LOOP,
                            shouldAnimate: !0,
                            className: ce().giftMainAnimation
                        }), (0, r.jsx)("div", pe(fe({
                            tabIndex: null != t || l ? void 0 : 0,
                            onFocus: function(e) {
                                var t;
                                e.target === e.currentTarget && (null === (t = d.current) || void 0 === t || t.focus())
                            },
                            className: ce().giftBoxOptionContainer,
                            "aria-label": w.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }, f), {
                            children: null != y && y.map((function(e, a) {
                                return (0, r.jsx)(le, {
                                    isSelected: t === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: n,
                                    ref: 0 === a ? d : null,
                                    onFocus: function() {
                                        return c(!0)
                                    },
                                    onBlur: function() {
                                        return c(!1)
                                    }
                                }, e)
                            }))
                        })), (0, r.jsx)("div", {
                            className: ce().selectPlanDivider
                        })]
                    })
                },
                be = n(509897),
                Ee = n(111090),
                ge = n(294184),
                Oe = n.n(ge),
                ve = n(795308),
                Ne = n(384411),
                Te = n(203600),
                Pe = n(736101),
                Se = n.n(Pe);

            function Ae(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Me(e) {
                var t = e.premiumSubscription,
                    n = e.planId,
                    a = e.selectPlan,
                    i = e.selected,
                    c = e.isGift,
                    d = e.priceOptions,
                    f = e.shouldShowUpdatedPaymentModal,
                    p = e.isEligibleForDiscount,
                    m = e.discountedPriceString,
                    _ = (0, l.e7)([Ne.default], (function() {
                        return Ne.default.locale
                    })),
                    h = (0,
                        l.e7)([y.Z], (function() {
                        return y.Z.get(n)
                    })),
                    b = (0, u.usePaymentContext)().giftRecipient,
                    O = (0, I.a8)(b);
                s()(null != h, "Missing subscriptionPlan");
                var v, N = null != t && t.planId === n,
                    T = N || n === Te.Xh.PREMIUM_MONTH_TIER_2 && null != t && [Te.Xh.PREMIUM_YEAR_TIER_0, Te.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    P = Te.nH[n],
                    S = (0, E.aS)(n, !1, c, d),
                    A = (0, E.Ap)(d.paymentSourceId),
                    M = null != P && !f,
                    x = h.interval === Te.rV.YEAR ? w.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : w.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    R = function() {
                        return h.interval === Te.rV.YEAR && null != t || M && !N ? h.interval === Te.rV.YEAR && null != t ? (0, r.jsxs)("span", {
                            className: Se().planOptionMonthsFree,
                            children: ["(", w.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                        }) : M && !N ? null != P && (0, r.jsx)(o.Text, {
                            tag: "span",
                            variant: "eyebrow",
                            color: "always-white",
                            className: Se().planOptionDiscount,
                            children: w.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                                discount: (0, g.T3)(_, P / 100)
                            })
                        }) : void 0 : null
                    };
                return (0, r.jsxs)(o.Clickable, {
                    role: O ? "menuitem" : "radio",
                    "aria-checked": i,
                    tabIndex: i ? 0 : -1,
                    focusProps: {
                        offset: {
                            left: -4,
                            right: -4,
                            top: 0,
                            bottom: 0
                        }
                    },
                    onClick: T ? void 0 : function() {
                        return a(n)
                    },
                    className: Oe()(Se().planOptionClickableContainer, (v = {}, Ae(v, Se().selectedPlan, O && i), Ae(v, Se().selectionBox, O), v)),
                    children: [(0, r.jsxs)("div", {
                        className: Oe()(Se().planOption, Ae({}, Se().planOptionDisabled, T)),
                        children: [(0, r.jsxs)("div", {
                            className: Se().planOptionClickable,
                            children: [!O && (0, r.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: i,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: ve.Z.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: Se().planOptionCheckbox
                            }), function() {
                                var e;
                                return (0, r.jsxs)("div", {
                                    children: [(0, r.jsxs)("div", {
                                        className: Oe()(Se().planOptionInterval, (e = {}, Ae(e, Se().optionSelected, i || O), Ae(e, Se().updatedOptionSelected, f && (i || O)), e)),
                                        children: [(0, E.L7)(h.interval, c, A, h.intervalCount, O), O && R()]
                                    }), O && (0, r.jsx)("div", {
                                        className: Se().planOneTimeCost,
                                        children: w.Z.Messages.ONE_TIME_CHARGE.format({
                                            currencyAmount: (0,
                                                g.T4)(S.amount, S.currency)
                                        })
                                    })]
                                })
                            }(), N && (0, r.jsxs)("span", {
                                className: Se().planOptionCurrentPlan,
                                children: ["(", w.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !O && R()]
                        }), f ? (0, r.jsx)("div", {
                            className: Oe()(Ae({}, Se().optionPriceSelected, i)),
                            children: w.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: p ? h.interval === Te.rV.MONTH ? m : (0, g.T4)(S.amount, S.currency) : (0, g.T4)(0, S.currency, {
                                    maximumFractionDigits: 0
                                })
                            })
                        }) : (0, r.jsx)("div", {
                            className: Oe()(Ae({}, Se().optionSelected, i || O)),
                            children: (0, g.T4)(S.amount, S.currency)
                        })]
                    }), f && (0, r.jsx)("div", {
                        className: Se().planOptionSubtextContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: i ? "text-normal" : "interactive-normal",
                            className: Oe()(Se().planOptionSubtext, Ae({}, Se().discountPlanOptionSubtext, p)),
                            children: p ? h.interval === Te.rV.MONTH ? w.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: m,
                                regularPrice: (0, g.T4)(S.amount, S.currency)
                            }) : w.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: P
                            }) : x.format({
                                price: (0,
                                    g.T4)(S.amount, S.currency)
                            })
                        })
                    })]
                })
            }
            var xe = n(185096),
                Re = n(520453),
                je = n(710431),
                Ce = n.n(je);

            function Le(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ze(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function we(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ze(e, t, n[t])
                    }))
                }
                return e
            }

            function Ge(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function De(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Le(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Le(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ke(e, t) {
                var n = w.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                    r = w.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                    a = function() {
                        switch (e.interval) {
                            case Te.rV.YEAR:
                                return n;
                            case Te.rV.MONTH:
                            default:
                                return r
                        }
                    }(),
                    i = e.skuId;
                switch (t) {
                    case Te.Si.TIER_0:
                        switch (i) {
                            case Te.Si.TIER_1:
                                return w.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                            case Te.Si.TIER_2:
                                return w.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                            default:
                                return a
                        }
                    case Te.Si.TIER_1:
                        switch (i) {
                            case Te.Si.TIER_0:
                                return w.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                            case Te.Si.TIER_2:
                                return w.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                            default:
                                return a
                        }
                    case Te.Si.TIER_2:
                        switch (i) {
                            case Te.Si.TIER_0:
                            case Te.Si.TIER_1:
                                return w.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                            case Te.Si.TIER_2:
                                return e.interval === Te.rV.MONTH ? w.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                    numFreeGuildSubscriptions: Te.cb
                                }) : a;
                            default:
                                return a
                        }
                    default:
                        return a
                }
            }

            function Ue(e) {
                var t, n = e.premiumSubscription,
                    i = e.skuId,
                    d = e.selectedPlanId,
                    f = e.setSelectedPlanId,
                    p = e.isGift,
                    m = void 0 !== p && p,
                    _ = e.isSeasonalGift,
                    b = void 0 !== _ && _,
                    v = e.selectedGiftStyle,
                    x = e.setSelectedGiftStyle,
                    R = e.priceOptions,
                    j = e.planOptions,
                    C = e.eligibleForMultiMonthPlans,
                    L = e.referralTrialOfferId,
                    G = e.subscriptionPeriodEnd,
                    D = e.showTotal,
                    k = void 0 === D || D,
                    U = e.customGiftMessage,
                    B = e.setCustomGiftMessage,
                    H = e.discountedPriceString,
                    Y = (0, u.usePaymentContext)(),
                    W = Y.activeSubscription,
                    K = Y.setSelectedPlanId,
                    V = Y.selectedSkuId,
                    X = Y.giftRecipient,
                    z = Y.selectedPlan,
                    J = Y.priceOptions,
                    Q = (0, I.a8)(X);
                i = null != i ? i : V;
                n = null != n ? n : W;
                s()(void 0 !== n, "should not be undefined");
                var $ = De((0, l.Wu)([y.Z], (function() {
                        return [null != n ? y.Z.get(n.planId) : null, null != d ? y.Z.get(d) : null]
                    })), 2),
                    q = $[0],
                    ee = $[1],
                    te = (0, P.N)(L),
                    ne = null == te ? void 0 : te.subscription_trial,
                    re = (0, T.Ng)(),
                    ae = null == re || null === (t = re.discount) || void 0 === t ? void 0 : t.plan_ids,
                    ie = null != ee ? ee : z,
                    se = a.useCallback((function(e) {
                        null != f ? f(e) : K(e)
                    }), [f, K]),
                    le = null != R ? R : J;
                s()(null != le, "Price option has to be set");
                var oe = null != te && Te.nG[te.trial_id].skus.includes(i),
                    ce = null != re && j.some((function(e) {
                        return null == ae ? void 0 : ae.includes(e)
                    })),
                    ue = (0, E.aS)(Te.Xh.PREMIUM_MONTH_TIER_2, !1, m, le);
                a.useEffect((function() {
                    C && O.ZP.trackExposure({
                        location: "5f89bb_1"
                    })
                }), [C]);
                var de = null != (null == ie ? void 0 : ie.id) && j.includes(ie.id);
                a.useEffect((function() {
                    if (!de)
                        if (null == q || m) se(j[0]);
                        else if (null != q) {
                        var e = j.find((function(e) {
                            return e !== q.id
                        }));
                        null != e && se(e)
                    }
                }), [de, m, j, q, se]);
                var fe = !Q && (m || !oe && !ce) && de && k,
                    pe = (0, o.useRadioGroup)(),
                    me = null != (null == ie ? void 0 : ie.id) ? (0, E.aS)(ie.id, !1, m, le) : void 0,
                    ye = "HR" === (0, N.Z)().ipCountryCode && null != me && me.currency === Re.pK.EUR,
                    _e = (0, E.Ap)(le.paymentSourceId),
                    Ie = (null == ne ? void 0 : ne.interval) === Te.rV.DAY ? w.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : w.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    be = !m && (ce || null != ne && oe && null != G);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: Q ? Ce().stepBodyCustomGift : Ce().stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: Q ? Ce().bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(S.Z, {
                                fromBoostCancelModal: !1,
                                className: Ce().legacyPricingNotice
                            }), (b || Q) && null != v && (0, r.jsx)(he, {
                                selectedGiftStyle: v,
                                setSelectedGiftStyle: x
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Q ? Ce().bodyColumnRight : void 0,
                            children: [Q && (0, r.jsx)(xe.s, {
                                giftRecipient: X
                            }), function() {
                                if (Q && null != B) return (0, r.jsx)(F, {
                                    sectionTitle: w.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: function(e) {
                                        return B(e)
                                    },
                                    pendingText: U,
                                    currentText: U
                                })
                            }(), null != q && !m && (0, r.jsx)("div", {
                                className: Ce().bodyText,
                                children: ke(q, i)
                            }), function(e, t) {
                                return Q ? (0, r.jsx)(o.FormTitle, {
                                    children: w.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
                                }) : be ? e ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: Ce().trialPlanSelectHeader,
                                        children: w.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                            trialEnd: G,
                                            trialPeriod: Ie
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: Ce().planSelectSeparator
                                    })]
                                }) : t && null != H && null != ue ? (0, r.jsxs)("div", {
                                    children: [(0,
                                        r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: Ce().trialPlanSelectHeader,
                                        children: w.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                            discountedPrice: H,
                                            regularPrice: (0, g.T4)(ue.amount, ue.currency)
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: Ce().planSelectSeparator
                                    })]
                                }) : void 0 : (0, r.jsx)("div", {
                                    className: Ce().selectPlanChooseTitle,
                                    children: w.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                })
                            }(oe, ce), (0, r.jsx)("div", Ge(we({}, pe), {
                                children: j.map((function(e) {
                                    return (0, r.jsx)(Me, {
                                        planId: e,
                                        isGift: m,
                                        premiumSubscription: m ? null : null != n ? n : null,
                                        selectPlan: se,
                                        selected: (null == ie ? void 0 : ie.id) === e,
                                        priceOptions: le,
                                        shouldShowUpdatedPaymentModal: be,
                                        isEligibleForDiscount: ce,
                                        discountedPriceString: H
                                    }, e)
                                }))
                            })), (0, r.jsx)("div", {
                                children: fe && null != ie && null != me ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: Ce().selectPlanDivider
                                    }), (0, r.jsx)(A.Ji, {
                                        label: w.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(M.Z, {
                                            price: me.amount,
                                            currency: me.currency,
                                            intervalType: m ? null : ie.interval,
                                            intervalCount: ie.intervalCount,
                                            isPrepaidPaymentSource: _e
                                        }),
                                        className: Ce().selectPlanTotalRow
                                    })]
                                }) : null
                            }), ye && (0, r.jsx)(c.Z, {
                                message: w.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, g.T4)(7.5345 * me.amount, Re.pK.HRK)
                                })
                            }), !m && !be && k && (0, r.jsx)(c.Z, {
                                message: w.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: h.Z.getArticleURL(Z.BhN.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function Be(e) {
                var t = e.onStepChange,
                    n = e.selectedPlanId,
                    a = e.isGift,
                    i = e.paymentSources,
                    s = e.onBackClick,
                    l = e.showBackButton,
                    c = e.planOptions,
                    d = e.shouldRenderUpdatedPaymentModal,
                    f = void 0 !== d && d,
                    p = e.isTrial,
                    m = (0, u.usePaymentContext)(),
                    y = m.paymentSources,
                    _ = m.selectedPlan;
                i = null != i ? i : y;
                n = null != n ? n : null == _ ? void 0 : _.id;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != n && c.includes(n) ? (0, r.jsx)(Fe, {
                        paymentSources: i,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: a,
                        shouldRenderUpdatedPaymentModal: f,
                        isTrial: p
                    }) : (0, r.jsx)(o.Button, {
                        disabled: !0,
                        children: w.Z.Messages.SELECT
                    }), l ? (0, r.jsx)(be.Z, {
                        onClick: s
                    }) : null]
                })
            }

            function Fe(e) {
                var t = e.onStepChange,
                    n = e.selectedPlanId,
                    a = e.isGift,
                    i = e.paymentSources,
                    s = e.shouldRenderUpdatedPaymentModal,
                    c = e.isTrial,
                    u = (0, l.e7)([_.Z], (function() {
                        return _.Z.getPremiumTypeSubscription()
                    })),
                    f = (0, Ee.H)(n, a).hasEntitlements,
                    y = null != u && null != u.paymentSourceId || Object.keys(i).length > 0 || f && !c,
                    I = s ? w.Z.Messages.NEXT : w.Z.Messages.SELECT,
                    h = d.h8.ADD_PAYMENT_STEPS;
                if (y) h = d.h8.REVIEW;
                else if ((0, b.nI)() && function() {
                        if (v.getCurrentConfig({
                                location: "5f89bb_2"
                            }).experiment === m.BROWSER_AUTOFILL) return p.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        }).enabled;
                        return !1
                    }()) {
                    h = d.h8.AWAITING_BROWSER_CHECKOUT;
                    I = w.Z.Messages.CONTINUE_IN_BROWSER
                }
                return (0, r.jsx)(o.Button, {
                    onClick: function() {
                        return t(h)
                    },
                    children: I
                })
            }
        },
        111090: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => d,
                H: () => p
            });
            var r = n(667294),
                a = n(202351),
                i = n(105783),
                s = n(551778),
                l = n(151367),
                o = n(694329),
                c = n(520453),
                u = n(473708);

            function d(e, t, n) {
                r.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !n) {
                        i.Z.show({
                            title: u.Z.Messages.BILLING_EXTERNAL_HEADER.format({
                                paymentGatewayName: c.Vz[e.paymentGateway]
                            }),
                            body: u.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                                paymentGatewayName: c.Vz[e.paymentGateway],
                                subscriptionManagementLink: (0, o.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                            }),
                            confirmText: u.Z.Messages.OKAY
                        });
                        t()
                    }
                }), [e])
            }
            var f = [];

            function p(e, t) {
                var n = (0, a.e7)([s.Z], (function() {
                        return null != e ? s.Z.get(e) : null
                    })),
                    i = (0, a.e7)([l.Z], (function() {
                        var e;
                        return null != n && null !== (e = l.Z.getForSku(n.skuId)) && void 0 !== e ? e : f
                    })),
                    c = r.useMemo((function() {
                        return Array.from(i).filter((function(e) {
                            var t = e.parentId,
                                n = e.consumed;
                            return null != t && !n
                        }))
                    }), [i]);
                return {
                    hasEntitlements: !t && null != n && null != c && c.length >= o.ZP.getIntervalMonths(n.interval, n.intervalCount),
                    entitlements: c
                }
            }
        },
        185096: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => u
            });
            var r = n(785893),
                a = (n(667294), n(304548)),
                i = n(657539),
                s = n(749565),
                l = n(473708),
                o = n(488251),
                c = n.n(o),
                u = function(e) {
                    var t = e.giftRecipient;
                    return null == t ? null : (0, r.jsxs)("div", {
                        className: c().content,
                        children: [(0, r.jsx)(a.FormTitle, {
                            children: l.Z.Messages.FORM_LABEL_SEND_TO
                        }), (0, r.jsxs)("div", {
                            className: c().giftRecipientInfo,
                            children: [(0, r.jsx)(i.Z, {
                                user: t,
                                className: c().giftRecipient,
                                size: a.AvatarSizes.SIZE_20
                            }), (0, r.jsx)(a.Heading, {
                                className: c().giftRecipientName,
                                variant: "text-md/normal",
                                children: s.ZP.getName(t)
                            }), (0, r.jsx)(a.Heading, {
                                className: c().giftRecipientTag,
                                variant: "text-md/normal",
                                children: s.ZP.getUserTag(t)
                            })]
                        })]
                    })
                }
        },
        16097: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => Y
            });
            var r = n(785893),
                a = n(667294),
                i = n(441143),
                s = n.n(i),
                l = n(197597),
                o = n(202351),
                c = n(795308),
                u = n(304548),
                d = n(415324),
                f = n(152042),
                p = n(700812),
                m = n(536713),
                y = n(414094),
                _ = n(782786),
                I = n(632826),
                h = n(837598),
                b = n(268226),
                E = n(793461),
                g = n(615796),
                O = n(551778),
                v = n(386991),
                N = n(644144),
                T = n(694329),
                P = n(249052),
                S = n(467345),
                A = n(100749),
                M = n(16703),
                x = n(900547),
                R = n(882211),
                j = n(311556),
                C = n(646875),
                L = n(111090),
                Z = n(185096),
                w = n(203600),
                G = n(2590),
                D = n(520453),
                k = n(473708),
                U = n(968071),
                B = n.n(U);

            function F(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function H(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return F(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y(e) {
                var t, n, i = e.selectedPlanId,
                    U = e.paymentSources,
                    F = e.priceOptions,
                    Y = e.currencies,
                    W = e.onCurrencyChange,
                    K = e.isGift,
                    V = void 0 !== K && K,
                    X = e.onPaymentSourceChange,
                    z = e.handlePaymentSourceAdd,
                    J = e.setHasAcceptedTerms,
                    Q = e.legalTermsNodeRef,
                    $ = e.hasLegalTermsFlash,
                    q = e.trialId,
                    ee = e.trialFooterMessageOverride,
                    te = e.reviewWarningMessage,
                    ne = e.metadata,
                    re = e.purchaseState,
                    ae = e.hideSubscriptionDetails,
                    ie = e.referralTrialOfferId,
                    se = e.isTrial,
                    le = void 0 !== se && se,
                    oe = e.isDiscount,
                    ce = void 0 !== oe && oe,
                    ue = (0, _.usePaymentContext)(),
                    de = ue.isEmbeddedIAP,
                    fe = ue.activeSubscription,
                    pe = ue.selectedSkuId,
                    me = ue.defaultPlanId,
                    ye = ue.selectedGiftStyle,
                    _e = ue.setSelectedGiftStyle,
                    Ie = ue.isPremium,
                    he = ue.giftRecipient,
                    be = ue.startedPaymentFlowWithPaymentSourcesRef,
                    Ee = (0, o.e7)([O.Z], (function() {
                        return O.Z.get(i)
                    }));
                s()(null != Ee, "Missing plan");
                var ge = [{
                        planId: Ee.id,
                        quantity: 1
                    }],
                    Oe = re === I.A.PURCHASING || re === I.A.COMPLETED,
                    ve = V || Oe,
                    Ne = H((0, A.ED)({
                        items: ge,
                        renewal: !1,
                        preventFetch: ve,
                        applyEntitlements: !0,
                        paymentSourceId: F.paymentSourceId,
                        currency: F.currency,
                        trialId: q,
                        metadata: ne
                    }), 2),
                    Te = Ne[0],
                    Pe = Ne[1],
                    Se = H((0, A.ED)({
                        items: ge,
                        renewal: !0,
                        preventFetch: ve,
                        trialId: q,
                        paymentSourceId: F.paymentSourceId,
                        currency: F.currency,
                        metadata: ne
                    }), 2),
                    Ae = Se[0],
                    Me = Se[1],
                    xe = (0, N.a8)(he),
                    Re = null != Pe ? Pe : Me,
                    je = (0, o.e7)([E.Z], (function() {
                        return E.Z.enabled
                    })),
                    Ce = F.paymentSourceId,
                    Le = (0, L.H)(Ee.id, V),
                    Ze = Le.hasEntitlements,
                    we = Le.entitlements,
                    Ge = (0, T.Ap)(F.paymentSourceId),
                    De = (0, h.sE)(q, Ce, i),
                    ke = (0, b.Kp)({
                        isTrial: le,
                        isGift: V,
                        selectedSkuId: pe,
                        startedPaymentFlowWithPaymentSources: be.current
                    }),
                    Ue = H(a.useState(null == Te ? void 0 : Te.subscriptionPeriodEnd), 2),
                    Be = Ue[0],
                    Fe = Ue[1];
                a.useEffect((function() {
                    null == Be && Fe(null == Te ? void 0 : Te.subscriptionPeriodEnd)
                }), [null == Te ? void 0 : Te.subscriptionPeriodEnd, Be]);
                var He, Ye, We = a.useMemo((function() {
                        return (0, T.V7)({
                            skuId: pe,
                            isPremium: Ie,
                            multiMonthPlans: [],
                            currentSubscription: fe,
                            isGift: V,
                            isEligibleForTrial: le,
                            defaultPlanId: me,
                            defaultToMonthlyPlan: !1
                        })
                    }), [pe, fe, V, me, Ie, le]),
                    Ke = (0,
                        b.$g)(ke, Te, Ee),
                    Ve = null === (t = null == Te ? void 0 : Te.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === w.Xh.PREMIUM_MONTH_TIER_2
                    }))) || void 0 === t ? void 0 : t.subscriptionPlanPrice;
                if (null != Re) {
                    var Xe = Re.message;
                    Re.code === y.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (Xe = k.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY);
                    return (0, r.jsx)(u.FormErrorBlock, {
                        children: Xe
                    })
                }
                if (V) Ye = (0, r.jsx)(C.e9, {
                    paymentSourceId: F.paymentSourceId,
                    plan: Ee,
                    className: B().invoice,
                    isPrepaidPaymentSource: Ge,
                    isCustomGift: xe
                });
                else if (le && null != Te) Ye = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(M.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(M.PO, {
                        className: B().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: B().trialPriceLine,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: k.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: k.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, P.T4)(0, Te.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: B().afterTrialPriceLine,
                            children: (0, r.jsx)(C.yT, {
                                invoice: Te,
                                plan: Ee
                            })
                        })]
                    })]
                });
                else if (ce && null != Te && null != Ve) Ye = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(M.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(M.PO, {
                        className: B().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: B().trialPriceLine,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: k.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: k.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, P.T4)(Te.total, Te.currency)
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: B().discountSubtext,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: k.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                    discountedPrice: (0, P.T4)(Te.total, Te.currency),
                                    regularPrice: (0, P.T4)(Ve, Te.currency)
                                })
                            })
                        })]
                    })]
                });
                else {
                    if (null == Te || null == Ae || Ke) return (0, r.jsx)("div", {
                        className: B().spinnerWrapper,
                        children: (0, r.jsx)(u.Spinner, {})
                    });
                    le && Te.subscriptionPeriodEnd !== Ae.subscriptionPeriodEnd && (He = Te.subscriptionPeriodEnd);
                    Ye = (0, r.jsxs)(M.PO, {
                        className: B().invoice,
                        children: [(0, r.jsx)(M.q9, {
                            children: k.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(C.Lu, {
                            invoice: Te,
                            newPlan: Ee,
                            isPrepaidPaymentSource: Ge,
                            referralTrialOfferId: ie
                        }), Ge ? null : (0, r.jsx)(C.nd, {
                            renewalInvoice: Ae,
                            isTrial: le,
                            priceOptions: F,
                            overrideRenewalDate: He,
                            trialFooterMessageOverride: ee,
                            hideSubscriptionDetails: ae
                        })]
                    })
                }
                var ze = l.M.EEA_COUNTRIES.has(g.Z.ipCountryCodeWithFallback),
                    Je = function(e, t, n) {
                        var r = null,
                            a = null,
                            i = null;
                        if (e && null != t) {
                            var s = T.ZP.getIntervalForInvoice(t),
                                l = s.intervalType,
                                o = s.intervalCount,
                                c = (0, P.og)((0, P.T4)(t.total, t.currency), l, o),
                                u = null != n ? n : t.subscriptionPeriodEnd;
                            r = k.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: G.EYA.TERMS,
                                paidURL: G.EYA.PAID_TERMS,
                                rate: c,
                                renewalDate: u
                            });
                            a = B().trialCheckbox;
                            i = B().trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: a,
                            checkboxLabelClassname: i
                        }
                    }(null != le && le, Ae, He),
                    Qe = Je.checkboxLabel,
                    $e = Je.checkboxClassname,
                    qe = Je.checkboxLabelClassname,
                    et = k.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: Ee.name
                    });
                V && !xe ? et = k.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : V && xe ? et = "" : (0, T.PV)(Ee.id) && (et = T.ZP.getBillingReviewSubheader(null, Ee));
                return De ? null : (0, r.jsxs)("div", {
                    className: B().stepBody,
                    children: [null != te && (0, r.jsxs)("div", {
                        className: B().reviewWarningMessageContainer,
                        children: [(0, r.jsx)(v.Z, {
                            color: c.Z.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(u.Text, {
                            className: B().reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: te
                        })]
                    }), ke && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(M.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(j.O, {
                            isGift: V,
                            selectedGiftStyle: ye,
                            setSelectedGiftStyle: _e,
                            planOptions: We,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: i,
                            subscriptionPeriodEnd: Be,
                            showTotal: !1
                        }), (0, r.jsx)(M.KU, {})]
                    }), !le && (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: et
                    }), xe && null != ye && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(R.Z, {
                            defaultAnimationState: S.SR.LOOP,
                            giftStyle: ye,
                            shouldAnimate: !0,
                            className: B().giftMainAnimation
                        }), (0, r.jsx)(Z.s, {
                            giftRecipient: he
                        })]
                    }), Ye, (0, r.jsxs)("div", {
                        className: B().paymentSourceWrapper,
                        children: [le ? (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: B().formTitle,
                            children: k.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: k.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(p.Z, {
                            paymentSources: Object.values(U),
                            selectedPaymentSourceId: Ce,
                            prependOption: Ze && !le ? {
                                label: k.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: z,
                            hidePersonalInformation: je,
                            isTrial: le
                        }), Ze && null == Ce ? (0, r.jsx)("div", {
                            className: B().paymentSourceOptionalWarning,
                            children: k.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: we.length
                            })
                        }) : null, ce ? null : (0, r.jsxs)(d.b, {
                            currencies: Y,
                            className: B().currencyWrapper,
                            children: [(0, r.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: k.Z.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.Z, {
                                selectedCurrency: F.currency,
                                currencies: Y,
                                onChange: W
                            })]
                        })]
                    }), (0, r.jsx)(x.Z, {
                        isActive: $,
                        ref: Q,
                        children: (0, r.jsx)(m.Z, {
                            onChange: J,
                            forceShow: !0,
                            checkboxLabel: Qe,
                            checkboxClassname: $e,
                            checkboxLabelClassname: qe,
                            finePrint: (0, r.jsx)(f.Z, {
                                hide: le || ce,
                                subscriptionPlan: Ee,
                                renewalInvoice: Ae,
                                isGift: V,
                                paymentSourceType: null === (n = U[null != Ce ? Ce : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: de,
                                basePrice: (0, T.aS)(Ee.id, !1, V, F)
                            }),
                            showPricingLink: Ee.currency !== D.pK.USD,
                            showWithdrawalWaiver: ze,
                            disabled: Oe,
                            isTrial: le,
                            isDiscount: ce,
                            subscriptionPlan: Ee,
                            isGift: V
                        })
                    })]
                })
            }
        },
        682876: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => q
            });
            var r = n(785893),
                a = n(667294),
                i = n(441143),
                s = n.n(i),
                l = n(202351),
                o = n(304548),
                c = n(673679),
                u = n(19585),
                d = n(782786),
                f = n(744564),
                p = n(933599),
                m = n(665082),
                y = n(315804),
                _ = n(54709),
                I = n(652591),
                h = n(264628),
                b = n(644144),
                E = n(694329),
                g = n(632826),
                O = n(2590),
                v = n(203600),
                N = n(473708);

            function T(e, t, n, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(r, a)
            }

            function P(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function s(e) {
                            T(i, r, a, s, l, "next", e)
                        }

                        function l(e) {
                            T(i, r, a, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function M(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var x = function(e, t) {
                var n, r, a, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
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
                                        r = i[1];
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
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function R(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = P((function(e) {
                    var t, n, r, a, i, l, o, u, d, T, P, S, R, j, C, L, Z, w, G, D, k, U, B, F, H, Y, W, K, V, X, z, J, Q, $, q, ee, te, ne, re;
                    return x(this, (function(x) {
                        switch (x.label) {
                            case 0:
                                t = e.setPurchaseState, n = e.setHasAcceptedTerms, r = e.setIsSubmitting, a = e.setPurchaseError, i = e.hasRedirectURL, l = e.setHasRedirectURL, o = e.isGift, u = e.giftStyle, d = e.baseAnalyticsData, T = e.analyticsLocation, P = e.analyticsLocations, S = e.flowStartTime, R = e.subscriptionPlan, j = e.planGroup, C = e.trialId, L = e.priceOptions, Z = e.paymentSource, w = e.isPrepaidPaymentPastDue, G = e.openInvoiceId, D = e.premiumSubscription, k = e.onNext, U = e.metadata, B = e.sku, F = e.skuPricePreview, H = e.purchaseType,
                                    Y = e.referralCode, W = e.loadId, K = e.giftRecipient, V = e.customMessage;
                                t(g.A.PURCHASING);
                                n(!0);
                                r(!0);
                                f.Z.wait(p.fw);
                                a(null);
                                x.label = 1;
                            case 1:
                                x.trys.push([1, 15, 16, 17]);
                                I.default.track(O.rMx.PAYMENT_FLOW_COMPLETED, M(A({}, d), {
                                    duration_ms: Date.now() - S
                                }));
                                if (i) return [2];
                                z = (0, b.a8)(K);
                                if (H !== O.GZQ.ONE_TIME) return [3, 3];
                                s()(null != B, "SKU must exist and be fetched.");
                                s()(null != F, "SKUPricePreview must exist.");
                                return [4, (0, y.ZZ)(B.applicationId, B.id, {
                                    expectedAmount: F.amount,
                                    expectedCurrency: F.currency,
                                    paymentSource: Z,
                                    loadId: W
                                })];
                            case 2:
                                X = x.sent();
                                return [3, 14];
                            case 3:
                                s()(null != R, "Missing subscriptionPlan");
                                if (!o) return [3, 5];
                                if ("usd" === (J = (0, E.aS)(R.id, !1, !0, L)).currency && (null == Z ? void 0 : Z.type) === O.HeQ.GCASH) {
                                    Q = new Error("Invalid USD currency for GCash");
                                    (0, h.q2)(Q, {
                                        tags: {
                                            paymentSourceId: null !== ($ = null == Z ? void 0 : Z.id) && void 0 !== $ ? $ : "",
                                            subscriptionPlanId: R.id,
                                            priceOptions: JSON.stringify(L)
                                        }
                                    })
                                }
                                return [4, (0, y.ZZ)(v.RQ, R.skuId, {
                                    expectedAmount: J.amount,
                                    expectedCurrency: J.currency,
                                    paymentSource: Z,
                                    subscriptionPlanId: R.id,
                                    isGift: !0,
                                    giftStyle: u,
                                    loadId: W,
                                    recipientId: z ? null == K ? void 0 : K.id : void 0,
                                    customMessage: z ? V : void 0
                                })];
                            case 4:
                                X = x.sent();
                                return [3, 14];
                            case 5:
                                return w && null != G && null != Z && null != D ? O.Uk1.has(Z.type) ? [4, (0, c.G)(D, G, Z, L.currency)] : [3, 7] : [3, 10];
                            case 6:
                                q = x.sent();
                                return [3, 9];
                            case 7:
                                return [4, (0, c.Mg)(D, {
                                    paymentSource: Z,
                                    currency: L.currency
                                }, P, T)];
                            case 8:
                                q = x.sent();
                                x.label = 9;
                            case 9:
                                X = q;
                                return [3, 14];
                            case 10:
                                return null == D ? [3, 12] : [4, (0, c.Mg)(D, {
                                    items: (0, E.al)(D, R.id, 1, new Set(j)),
                                    paymentSource: Z,
                                    currency: L.currency
                                }, P, T)];
                            case 11:
                                X = x.sent();
                                return [3, 14];
                            case 12:
                                return [4, (0, m.Ld)({
                                    planId: R.id,
                                    currency: L.currency,
                                    paymentSource: Z,
                                    trialId: C,
                                    metadata: U,
                                    referralCode: Y,
                                    loadId: W
                                })];
                            case 13:
                                X = x.sent();
                                x.label = 14;
                            case 14:
                                if (X.redirectConfirmation) {
                                    l(null != X.redirectURL);
                                    return [2]
                                }
                                ee = M(A({}, d), {
                                    duration_ms: Date.now() - S,
                                    payment_source_type: null == Z ? void 0 : Z.type
                                });
                                z && (ee.is_custom_message_edited = V !== N.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE);
                                I.default.track(O.rMx.PAYMENT_FLOW_SUCCEEDED, ee);
                                t(g.A.COMPLETED);
                                "subscription" in X ? te = null != X.subscription ? _.Z.createFromServer(X.subscription) : null : "entitlements" in X && (ne = null != X.entitlements ? X.entitlements : void 0);
                                k(te, ne);
                                return [3, 17];
                            case 15:
                                re = x.sent();
                                t(g.A.FAIL);
                                a(re);
                                I.default.track(O.rMx.PAYMENT_FLOW_FAILED, M(A({}, d), {
                                    payment_source_id: null == Z ? void 0 : Z.id,
                                    payment_source_type: null == Z ? void 0 : Z.type,
                                    duration_ms: Date.now() - S
                                }));
                                return [3, 17];
                            case 16:
                                i || r(!1);
                                return [7];
                            case 17:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var C = n(300615),
                L = n(837598),
                Z = n(856281),
                w = n(909365),
                G = n(908434),
                D = n(107364),
                k = n(499171),
                U = n(509897),
                B = n(111090),
                F = n(820610),
                H = n(787257),
                Y = n.n(H);

            function W(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function K(e, t, n, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(r, a)
            }

            function V(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function s(e) {
                            K(i, r, a, s, l, "next", e)
                        }

                        function l(e) {
                            K(i, r, a, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function X(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        X(e, t, n[t])
                    }))
                }
                return e
            }

            function J(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function Q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (n = n.call(e); !(s = (r = n.next()).done); s = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return W(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var $ = function(e, t) {
                var n, r, a, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function l(i) {
                    return function(l) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                (r = 0, a) && (i = [2 & i[0], a.value]);
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
                                        r = i[1];
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
                                i = t.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, l])
                    }
                }
            };

            function q(e) {
                var t = e.premiumSubscription,
                    n = e.setPurchaseState,
                    i = e.onBack,
                    f = e.onNext,
                    p = e.legalTermsNodeRef,
                    m = e.flashLegalTerms,
                    y = e.invoiceError,
                    _ = e.planError,
                    h = e.onPurchaseError,
                    b = e.baseAnalyticsData,
                    v = e.flowStartTime,
                    N = e.isGift,
                    T = void 0 !== N && N,
                    P = e.giftStyle,
                    S = e.customGiftMessage,
                    A = e.trialId,
                    M = e.planGroup,
                    x = e.analyticsLocation,
                    j = e.purchaseTokenAuthState,
                    H = e.openInvoiceId,
                    W = e.metadata,
                    K = e.backButtonEligible,
                    X = e.disablePurchase,
                    q = e.isTrial,
                    ee = void 0 !== q && q,
                    te = (0, d.usePaymentContext)(),
                    ne = te.selectedPlan,
                    re = te.priceOptions,
                    ae = te.setHasAcceptedTerms,
                    ie = te.setPurchaseError,
                    se = te.purchaseType,
                    le = te.paymentSourceId,
                    oe = te.paymentSources,
                    ce = te.selectedSkuId,
                    ue = te.skusById,
                    de = te.skuPricePreviewsById,
                    fe = te.referralCode,
                    pe = te.contextMetadata,
                    me = te.giftRecipient,
                    ye = null == ne ? void 0 : ne.id,
                    _e = (0, L.sE)(A, re.paymentSourceId, ye),
                    Ie = (0, l.e7)([Z.Z], (function() {
                        return Z.Z.popupCallbackCalled
                    })),
                    he = (0,
                        u.Z)().analyticsLocations,
                    be = null != le ? oe[le] : null,
                    Ee = Q(a.useState(_e), 2),
                    ge = Ee[0],
                    Oe = Ee[1],
                    ve = Q(a.useState(!1), 2),
                    Ne = ve[0],
                    Te = ve[1],
                    Pe = (0, B.H)(ye, T).hasEntitlements,
                    Se = (0, E.Ap)(re.paymentSourceId),
                    Ae = Pe || _e,
                    Me = (0, k.U)(),
                    xe = null,
                    Re = null;
                if (se === O.GZQ.ONE_TIME) {
                    s()(null != ce, "SKU must be selected for one-time purchases");
                    var je;
                    xe = null !== (je = ue[ce]) && void 0 !== je ? je : null;
                    s()(null != xe, "SKU must exist and be fetched.");
                    var Ce = de[ce],
                        Le = null != le ? le : G.c;
                    Re = null != Ce ? Ce[Le] : null
                }
                var Ze, we = (Ze = V((function() {
                    return $(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, R({
                                    setPurchaseState: n,
                                    setHasAcceptedTerms: ae,
                                    setIsSubmitting: Oe,
                                    setPurchaseError: ie,
                                    hasRedirectURL: Ne,
                                    setHasRedirectURL: Te,
                                    isGift: T,
                                    giftStyle: P,
                                    baseAnalyticsData: b,
                                    analyticsLocation: x,
                                    analyticsLocations: he,
                                    flowStartTime: v,
                                    subscriptionPlan: ne,
                                    planGroup: M,
                                    trialId: A,
                                    priceOptions: re,
                                    paymentSource: be,
                                    isPrepaidPaymentPastDue: Me,
                                    openInvoiceId: H,
                                    premiumSubscription: t,
                                    onNext: f,
                                    metadata: W,
                                    sku: xe,
                                    skuPricePreview: Re,
                                    purchaseType: se,
                                    referralCode: fe,
                                    loadId: pe.loadId,
                                    giftRecipient: me,
                                    customMessage: S
                                })];
                            case 1:
                                e.sent();
                                return [2]
                        }
                    }))
                })), function() {
                    return Ze.apply(this, arguments)
                });
                a.useEffect((function() {
                    var e = function() {
                        var e = V((function() {
                            var e;
                            return $(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!0 !== Ie) return [3, 6];
                                        t.label = 1;
                                    case 1:
                                        t.trys.push([1, 3, 4, 5]);
                                        return null == Z.Z.redirectedPaymentId ? [2] : [4, (0, c.OP)(Z.Z.redirectedPaymentId)];
                                    case 2:
                                        t.sent();
                                        I.default.track(O.rMx.PAYMENT_FLOW_SUCCEEDED, J(z({}, b), {
                                            duration_ms: Date.now() - v,
                                            payment_source_type: null == be ? void 0 : be.type
                                        }));
                                        n(g.A.COMPLETED);
                                        f();
                                        return [3, 5];
                                    case 3:
                                        e = t.sent();
                                        n(g.A.FAIL);
                                        h(e);
                                        I.default.track(O.rMx.PAYMENT_FLOW_FAILED, J(z({}, b), {
                                            payment_source_id: le,
                                            payment_source_type: null == be ? void 0 : be.type,
                                            duration_ms: Date.now() - v
                                        }));
                                        return [3, 5];
                                    case 4:
                                        Oe(!1);
                                        (0, c.K2)();
                                        return [7];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return j !== w.I.SUCCESS ? [3, 8] : [4, we()];
                                    case 7:
                                        t.sent();
                                        t.label = 8;
                                    case 8:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [Ie]);
                a.useEffect((function() {
                    _e && !T && null == t && we()
                }), [_e, T, t]);
                var Ge = null != H || se === O.GZQ.ONE_TIME;
                return _e ? null : (0, r.jsxs)(o.ModalFooter, {
                    align: D.Z.Align.CENTER,
                    children: [(0, r.jsx)(F.Z, {
                        legalTermsNodeRef: p,
                        invoiceError: y,
                        planError: _,
                        disablePurchase: X,
                        flashLegalTerms: m,
                        isSubmitting: ge,
                        premiumSubscription: t,
                        isGift: T,
                        planGroup: M,
                        isPrepaid: Se,
                        isTrial: ee,
                        makePurchase: we,
                        needsPaymentSource: null == be && !Ae
                    }), (0, r.jsx)(C.Z, {}), K && !Ge ? (0, r.jsx)("div", {
                        className: Y().back,
                        children: (0, r.jsx)(U.Z, {
                            onClick: i
                        })
                    }) : null]
                })
            }
        },
        369263: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                a = (n(667294), n(294184)),
                i = n.n(a),
                s = n(304548),
                l = n(149258),
                o = n(102007),
                c = n(598679),
                u = n(107159),
                d = n.n(u);

            function f(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function p(e) {
                var t = e.errors;
                return (0, r.jsx)(r.Fragment, {
                    children: t.map((function(e, t) {
                        return (0, r.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            className: d().errorMessage,
                            children: (n = e,
                                n.replace(/[0-9.,]+ ?kb/g, (function(e) {
                                    var t = 1024 * parseInt(e, 10);
                                    return isNaN(t) ? e : (0, l.Ng)(t)
                                })))
                        }, t);
                        var n
                    }))
                })
            }

            function m(e) {
                var t, n = e.title,
                    a = e.titleIcon,
                    l = e.titleId,
                    u = e.description,
                    m = e.children,
                    y = e.className,
                    _ = e.errors,
                    I = e.disabled,
                    h = void 0 !== I && I,
                    b = e.hideDivider,
                    E = void 0 !== b && b,
                    g = e.showBorder,
                    O = void 0 !== g && g,
                    v = e.borderType,
                    N = e.hasBackground,
                    T = void 0 !== N && N,
                    P = e.forcedDivider,
                    S = void 0 !== P && P,
                    A = e.showPremiumIcon,
                    M = void 0 !== A && A;
                return (0, r.jsx)("div", {
                    className: i()(d().customizationSection, y, (t = {}, f(t, d().disabled, h), f(t, d().hideDivider, E), f(t, d().showBorder, O), f(t, d().withDivider, S), t)),
                    children: (0, r.jsxs)(c.Z, {
                        className: d().customizationSectionBorder,
                        backgroundClassName: d().customizationSectionBackground,
                        isShown: O,
                        type: v,
                        hasBackground: T,
                        children: [(0, r.jsxs)(s.FormTitle, {
                            className: d().title,
                            id: l,
                            children: [n, M && (0, r.jsx)(o.Z, {}), a]
                        }), null != u ? (0, r.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: d().sectionDescription,
                            children: u
                        }) : null, m, null != _ && (0, r.jsx)(p, {
                            errors: _
                        })]
                    })
                })
            }
        }
    }
]);