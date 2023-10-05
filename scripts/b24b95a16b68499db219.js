(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43814], {
        777603: (e, n, t) => {
            e.exports = t.p + "32b09dfdf8f5312c51057c07ca9a2dfd.png"
        },
        446436: (e, n, t) => {
            e.exports = t.p + "71ca4376249bece624d91eccdcd0f796.png"
        },
        795138: (e, n, t) => {
            e.exports = t.p + "574da6b96d2a0273650aab5774e132b5.png"
        },
        7477: (e, n, t) => {
            e.exports = t.p + "19da5edeb11f7e64d78f6849b11ad222.png"
        },
        415324: (e, n, t) => {
            "use strict";
            t.d(n, {
                b: () => l,
                Z: () => o
            });
            var r = t(785893),
                a = (t(667294), t(304548)),
                i = t(473708);

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
                var n = e.currencies,
                    t = e.className,
                    a = e.children;
                return n.length < 2 ? null : (0, r.jsx)("div", {
                    className: t,
                    children: a
                })
            }
            const o = function(e) {
                var n = e.currencies,
                    t = e.onChange,
                    i = e.selectedCurrency,
                    l = e.className,
                    o = e.disabled,
                    c = void 0 !== o && o;
                if (n.length < 2) return null;
                var u = n.map((function(e, n) {
                    return {
                        key: n,
                        value: e,
                        label: "".concat(e.toUpperCase(), " - ").concat(s(e))
                    }
                }));
                return (0, r.jsx)(a.SingleSelect, {
                    value: i,
                    options: u,
                    onChange: function(e) {
                        null != e && t(e)
                    },
                    className: l,
                    isDisabled: c
                })
            }
        },
        986304: (e, n, t) => {
            "use strict";
            t.d(n, {
                J: () => _
            });
            var r = t(441143),
                a = t.n(r),
                i = t(685269),
                s = t(717035),
                l = t(27059),
                o = t(652591),
                c = t(782786),
                u = t(83471),
                d = t(2590),
                f = t(203600);

            function p(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function m(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        p(e, n, t[n])
                    }))
                }
                return e
            }

            function y(e, n) {
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

            function _(e) {
                var n = e.analyticsData,
                    t = e.initialPlanId,
                    r = e.breadcrumbSteps,
                    p = e.handleStepChange,
                    _ = e.referralTrialOfferId,
                    I = e.onReturn,
                    h = (0, c.usePaymentContext)(),
                    b = h.contextMetadata,
                    E = h.step,
                    v = h.paymentSources,
                    O = h.paymentSourceId,
                    g = h.setPaymentSourceId,
                    N = h.purchaseError,
                    S = h.setPurchaseError,
                    T = h.purchaseErrorBlockRef,
                    P = h.paymentAuthenticationState,
                    A = h.isGift,
                    M = h.selectedSkuId,
                    R = y(m({}, (0, l.fL)()), {
                        paymentSources: v,
                        paymentSourceId: O,
                        setPaymentSourceId: g,
                        purchaseError: N,
                        setPurchaseError: S,
                        purchaseErrorBlockRef: T,
                        paymentAuthenticationState: P
                    }),
                    x = (0, s.N)(_),
                    C = !A && null != x && null != M && f.nG[x.trial_id].skus.includes(M),
                    j = null != I ? I : function() {
                        var e = Object.values(v).length < 1 && null == t ? u.h8.PLAN_SELECT : u.h8.REVIEW;
                        p(e, {
                            trackedFromStep: u.h8.PAYMENT_TYPE
                        })
                    };
                a()(E, "Step should be set here");
                var L = (0, i.Z)((function() {
                    return Date.now()
                }), [E]);
                return (0, l.vP)({
                    paymentModalArgs: R,
                    initialStep: u.h8.PAYMENT_TYPE,
                    prependSteps: [u.h8.PROMOTION_INFO],
                    appendSteps: [u.h8.REVIEW, u.h8.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: E,
                    usePaymentModalStep: !0,
                    onReturn: j,
                    onComplete: function(e) {
                        p(u.h8.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: function(e) {
                        var t = e.currentStep,
                            r = e.toStep,
                            a = Date.now();
                        o.default.track(d.rMx.PAYMENT_FLOW_STEP, y(m({}, n), {
                            from_step: t,
                            to_step: r,
                            step_duration_ms: a - L,
                            flow_duration_ms: a - b.startTime
                        }))
                    },
                    isEligibleForTrial: C
                })
            }
        },
        493957: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                a = (t(667294), t(554189)),
                i = t(128059),
                s = t(149096),
                l = t(894870),
                o = t.n(l);

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
        806706: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                a = t(667294),
                i = t(315804),
                s = t(304548),
                l = t(107364),
                o = t(473708),
                c = t(547656),
                u = t.n(c),
                d = function(e) {
                    var n = e.className,
                        t = e.isEmailResent,
                        a = e.resendEmail;
                    return (0, r.jsx)("div", {
                        className: n,
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
                                    children: [o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, " ", t ? o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, r.jsx)(s.Anchor, {
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
                p = t(128059),
                m = t(149096),
                y = t(757995),
                _ = t.n(y);

            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function h(e, n, t, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(o) : Promise.resolve(o).then(r, a)
            }

            function b(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return I(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var E = function(e, n) {
                var t, r, a, i, s = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
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
                                i = n.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
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

            function v() {
                var e, n, t = b(a.useState(!1), 2),
                    s = t[0],
                    l = t[1],
                    o = (n = (e = function() {
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
                        var n = this,
                            t = arguments;
                        return new Promise((function(r, a) {
                            var i = e.apply(n, t);

                            function s(e) {
                                h(i, r, a, s, l, "next", e)
                            }

                            function l(e) {
                                h(i, r, a, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }), function() {
                        return n.apply(this, arguments)
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
        28648: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var r = t(785893),
                a = (t(667294), t(304548)),
                i = t(21045),
                s = t.n(i);

            function l() {
                return (0, r.jsx)(a.Spinner, {
                    className: s().spinner
                })
            }
        },
        837598: (e, n, t) => {
            "use strict";
            t.d(n, {
                sE: () => s
            });
            var r = t(260561),
                a = t(116094),
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
                s = function(e, n, t) {
                    var r = i.useExperiment({
                            location: "aeb070_1"
                        }, {
                            autoTrackExposure: !1
                        }).bypassCheckout,
                        s = function(e, n, t) {
                            var r = null == t || (0, a.uZ)(t);
                            return null != e && null == n && r
                        }(e, n, t);
                    return r && s
                }
        },
        268226: (e, n, t) => {
            "use strict";
            t.d(n, {
                Kp: () => i,
                $g: () => s,
                nA: () => l
            });
            var r = t(116094),
                a = t(203600);

            function i(e) {
                var n = e.isTrial,
                    t = e.isGift,
                    r = e.selectedSkuId,
                    i = e.startedPaymentFlowWithPaymentSources;
                return !n && !t && null != r && a.YQ.includes(r) && i
            }

            function s(e, n, t) {
                var r = !1;
                if (e && null != n) {
                    null == n.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === t.id
                    })) && (r = !0)
                }
                return r
            }

            function l(e, n, t) {
                var i = null != n ? (0, r.Af)(n) : null,
                    s = a.mn[e],
                    l = null != t ? t : s;
                null != i ? l === i.planId && l === a.IW[e] ? l = a.mn[e] : l === i.planId && l === a.mn[e] ? l = a.IW[e] : i.planId !== a.Xh.PREMIUM_YEAR_TIER_0 && i.planId !== a.Xh.PREMIUM_YEAR_TIER_1 || l !== a.Xh.PREMIUM_MONTH_TIER_2 || (l = a.Xh.PREMIUM_YEAR_TIER_2) : l === a.Xh.PREMIUM_YEAR_TIER_1 && (l = a.Xh.PREMIUM_MONTH_TIER_1);
                return l
            }
        },
        471450: (e, n, t) => {
            "use strict";
            t.d(n, {
                ZP: () => s,
                aQ: () => o
            });
            var r = t(197597),
                a = t(260561),
                i = t(203600);
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
        499171: (e, n, t) => {
            "use strict";
            t.d(n, {
                U: () => f
            });
            var r = t(730381),
                a = t.n(r),
                i = t(202351),
                s = t(711531),
                l = t(551778),
                o = t(536392),
                c = t(116094),
                u = t(2590),
                d = t(520453);

            function f() {
                var e = (0, i.e7)([o.Z], (function() {
                        return o.Z.getPremiumTypeSubscription()
                    })),
                    n = (0, i.e7)([l.Z], (function() {
                        return null != e && null != e.planIdFromItems ? l.Z.get(null == e ? void 0 : e.planIdFromItems) : null
                    })),
                    t = (0, i.e7)([s.Z], (function() {
                        return null != e && null != e.paymentSourceId ? s.Z.getPaymentSource(e.paymentSourceId) : null
                    }), [e]),
                    r = null != t && d.Uk.has(t.type),
                    f = (null == e ? void 0 : e.status) === u.O0b.PAST_DUE ? a()().diff(a()(e.currentPeriodStart), "days") : 0;
                return !(null == e || null == n || !(0, c.uZ)(n.id)) && (r && f >= 0 && f <= (0, c.lU)(e) && e.status === u.O0b.PAST_DUE && !e.isPurchasedExternally)
            }
        },
        668900: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => E,
                U: () => h
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                i = t.n(a),
                s = t(441143),
                l = t.n(s),
                o = t(818417),
                c = t(348592),
                u = t(260561);
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
            var p = t(902954),
                m = t(2590),
                y = t(473708),
                _ = t(516178),
                I = t.n(_);

            function h() {
                var e = (0, p.Z)(),
                    n = d.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    t = f.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return null != e && ("PL" === e ? n : "TR" === e && t)
            }

            function b(e, n) {
                return "PL" === e ? n ? y.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? n ? y.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? y.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const E = function(e) {
                var n = e.fromBoostCancelModal,
                    t = e.className,
                    a = (0, p.Z)();
                if (!h()) return null;
                l()(null != a, "Subscription billing country should not be null");
                return (0, r.jsxs)("div", {
                    className: i()(I().noticeRoot, t),
                    children: [(0, r.jsx)("div", {
                        className: I().iconContainer,
                        children: (0, r.jsx)(o.Z, {
                            className: I().infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: I().text,
                        children: b(a, n).format({
                            helpCenterLink: c.Z.getArticleURL(m.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        509897: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o
            });
            var r = t(785893),
                a = (t(667294), t(304548)),
                i = t(473708),
                s = t(241387),
                l = t.n(s);
            const o = function(e) {
                var n = e.onClick;
                return (0, r.jsx)(a.Anchor, {
                    onClick: n,
                    className: l().link,
                    children: i.Z.Messages.BACK
                })
            }
        },
        311556: (e, n, t) => {
            "use strict";
            t.d(n, {
                O: () => Be,
                M: () => Fe
            });
            var r = t(785893),
                a = t(667294),
                i = t(441143),
                s = t.n(i),
                l = t(202351),
                o = t(304548),
                c = t(929400),
                u = t(73904),
                d = t(782786),
                f = t(83471),
                p = t(260561);
            const m = (0, p.B)({
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
            var y, _ = t(551778),
                I = t(536392),
                h = t(644144),
                b = t(348592),
                E = t(120415),
                v = t(116094),
                O = t(249052),
                g = t(471450);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(y || (y = {}));
            const N = (0, p.B)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: y.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: y.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: y.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            });
            var S = t(165666),
                T = t(344266),
                P = t(717035),
                A = t(668900),
                M = t(16703),
                R = t(367095),
                x = t(281808),
                C = t(855483),
                j = t(863979),
                L = t(369263),
                Z = t(382060),
                w = t(2590),
                G = t(473708),
                D = t(22865),
                k = t.n(D);

            function U(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function B(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return U(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return U(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var F = (0, Z.kt)({
                id: "1",
                type: w.d4z.DM
            });

            function H(e) {
                var n = e.sectionTitle,
                    t = e.errors,
                    i = e.onTextChange,
                    s = e.pendingText,
                    l = e.placeholder,
                    c = e.currentText,
                    u = e.disabled,
                    d = void 0 !== u && u,
                    f = B(a.useState(null != s ? s : c), 2),
                    p = f[0],
                    m = f[1],
                    y = B(a.useState((0, C.JM)(p)), 2),
                    _ = y[0],
                    I = y[1],
                    h = a.useRef(!1);
                a.useEffect((function() {
                    h.current = !0
                }), []);
                a.useEffect((function() {
                    if (void 0 === s) {
                        var e = (0, C.JM)(c);
                        m(c);
                        I(e)
                    }
                }), [s, c]);
                return (0, r.jsx)("div", {
                    className: k().body,
                    children: (0, r.jsxs)(L.Z, {
                        title: n,
                        errors: t,
                        disabled: d,
                        children: [(0, r.jsx)(j.Z, {
                            innerClassName: k().textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, n, t) {
                                if (n !== p) {
                                    m(n);
                                    I(t);
                                    i(n)
                                }
                            },
                            placeholder: l,
                            channel: F,
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
                            children: G.Z.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
            var W, Y = t(386991),
                K = t(467345),
                V = t(69427),
                X = t(621270),
                z = t(882211),
                J = t(614278),
                Q = t.n(J),
                $ = t(777603),
                q = t.n($),
                ee = t(446436),
                ne = t.n(ee),
                te = t(795138),
                re = t.n(te),
                ae = t(7477),
                ie = t.n(ae);

            function se(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var le = (se(W = {}, V.Cj.STANDARD_BOX, q()), se(W, V.Cj.CAKE, ne()), se(W, V.Cj.CHEST, re()), se(W, V.Cj.COFFEE, ie()), se(W, V.Cj.SNOWGLOBE, ""), se(W, V.Cj.BOX, ""), se(W, V.Cj.CUP, ""), W),
                oe = a.forwardRef((function(e, n) {
                    var t = e.isSelected,
                        a = e.giftStyle,
                        i = e.setSelectedGiftStyle,
                        s = e.onFocus,
                        l = e.onBlur;
                    return (0, r.jsx)(o.Clickable, {
                        innerRef: n,
                        className: Q().clickable,
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
                            src: le[a],
                            className: t ? Q().customGiftBoxHighlighted : Q().customGiftBox
                        })
                    })
                })),
                ce = t(233863),
                ue = t.n(ce);

            function de(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function fe(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function pe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        fe(e, n, t[n])
                    }))
                }
                return e
            }

            function me(e, n) {
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

            function ye(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return de(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return de(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _e = [V.Cj.BOX, V.Cj.CUP, V.Cj.SNOWGLOBE],
                Ie = [V.Cj.STANDARD_BOX, V.Cj.CAKE, V.Cj.COFFEE, V.Cj.CHEST],
                he = function() {
                    return (0, r.jsxs)("div", {
                        className: ue().giftBoxHeaderContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: ue().giftBoxHeaderText,
                            children: G.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }), (0, r.jsx)(o.Tooltip, {
                            text: G.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return (0, r.jsx)(o.Clickable, me(pe({}, e), {
                                    className: ue().infoIconContainer,
                                    "aria-label": G.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                                    children: (0, r.jsx)(Y.Z, {
                                        className: ue().infoIcon
                                    })
                                }))
                            }
                        })]
                    })
                },
                be = function(e) {
                    var n = e.selectedGiftStyle,
                        t = e.setSelectedGiftStyle,
                        i = (0, d.usePaymentContext)().giftRecipient,
                        s = ye(a.useState(!1), 2),
                        l = s[0],
                        c = s[1],
                        u = a.useRef(null),
                        f = (0, o.useRadioGroup)({
                            orientation: "horizontal"
                        }),
                        p = X.ZP.getCurrentConfig({
                            location: "premiumGiftSelect_GiftAnimationOptions"
                        }).enabled,
                        m = (0, h.a8)(i),
                        y = null;
                    p ? y = _e : m && (y = Ie);
                    return (0, r.jsxs)("div", {
                        children: [p && (0, r.jsx)(he, {}), m && (0, r.jsx)("div", {
                            className: ue().giftMainAnimation,
                            children: null != n ? (0, r.jsx)(z.Z, {
                                giftStyle: n,
                                defaultAnimationState: K.SR.ACTION,
                                idleAnimationState: K.SR.LOOP,
                                shouldAnimate: !0,
                                className: ue().animation
                            }) : (0, r.jsx)(o.Spinner, {
                                className: ue().spinner
                            })
                        }), (0, r.jsx)("div", me(pe({
                            tabIndex: null != n || l ? void 0 : 0,
                            onFocus: function(e) {
                                var n;
                                e.target === e.currentTarget && (null === (n = u.current) || void 0 === n || n.focus())
                            },
                            className: ue().giftBoxOptionContainer,
                            "aria-label": G.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }, f), {
                            children: null != y && y.map((function(e, a) {
                                return (0, r.jsx)(oe, {
                                    isSelected: n === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: t,
                                    ref: 0 === a ? u : null,
                                    onFocus: function() {
                                        return c(!0)
                                    },
                                    onBlur: function() {
                                        return c(!1)
                                    }
                                }, e)
                            }))
                        })), (0, r.jsx)("div", {
                            className: ue().selectPlanDivider
                        })]
                    })
                },
                Ee = t(509897),
                ve = t(111090),
                Oe = t(294184),
                ge = t.n(Oe),
                Ne = t(795308),
                Se = t(384411),
                Te = t(203600),
                Pe = t(736101),
                Ae = t.n(Pe);

            function Me(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Re(e) {
                var n = e.premiumSubscription,
                    t = e.planId,
                    a = e.selectPlan,
                    i = e.selected,
                    c = e.isGift,
                    u = e.priceOptions,
                    f = e.shouldShowUpdatedPaymentModal,
                    p = e.isEligibleForDiscount,
                    m = e.discountAmountOff,
                    y = (0, l.e7)([Se.default], (function() {
                        return Se.default.locale
                    })),
                    I = (0, l.e7)([_.Z], (function() {
                        return _.Z.get(t)
                    })),
                    b = (0, d.usePaymentContext)().giftRecipient,
                    E = (0, h.a8)(b);
                s()(null != I, "Missing subscriptionPlan");
                var g, N = null != n && n.planId === t,
                    S = N || t === Te.Xh.PREMIUM_MONTH_TIER_2 && null != n && [Te.Xh.PREMIUM_YEAR_TIER_0, Te.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId),
                    T = Te.nH[t],
                    P = (0, v.aS)(t, !1, c, u),
                    A = (0, v.Ap)(u.paymentSourceId),
                    M = null != T && !f,
                    R = I.interval === Te.rV.YEAR ? G.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : G.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    x = function() {
                        return I.interval === Te.rV.YEAR && null != n || M && !N ? I.interval === Te.rV.YEAR && null != n ? (0, r.jsxs)("span", {
                            className: Ae().planOptionMonthsFree,
                            children: ["(", G.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                        }) : M && !N ? null != T && (0, r.jsx)(o.Text, {
                            tag: "span",
                            variant: "eyebrow",
                            color: "always-white",
                            className: Ae().planOptionDiscount,
                            children: G.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                                discount: (0, O.T3)(y, T / 100)
                            })
                        }) : void 0 : null
                    };
                return (0, r.jsxs)(o.Clickable, {
                    role: E ? "menuitem" : "radio",
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
                    onClick: S ? void 0 : function() {
                        return a(t)
                    },
                    className: ge()(Ae().planOptionClickableContainer, (g = {}, Me(g, Ae().selectedPlan, E && i), Me(g, Ae().selectionBox, E), g)),
                    children: [(0, r.jsxs)("div", {
                        className: ge()(Ae().planOption, Me({}, Ae().planOptionDisabled, S)),
                        children: [(0, r.jsxs)("div", {
                            className: Ae().planOptionClickable,
                            children: [!E && (0, r.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: i,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: Ne.Z.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: Ae().planOptionCheckbox
                            }), function() {
                                var e;
                                return (0, r.jsxs)("div", {
                                    children: [(0, r.jsxs)("div", {
                                        className: ge()(Ae().planOptionInterval, (e = {}, Me(e, Ae().optionSelected, i || E),
                                            Me(e, Ae().updatedOptionSelected, f && (i || E)), e)),
                                        children: [(0, v.L7)(I.interval, c, A, I.intervalCount, E), E && x()]
                                    }), E && (0, r.jsx)("div", {
                                        className: Ae().planOneTimeCost,
                                        children: G.Z.Messages.ONE_TIME_CHARGE.format({
                                            currencyAmount: (0, O.T4)(P.amount, P.currency)
                                        })
                                    })]
                                })
                            }(), N && (0, r.jsxs)("span", {
                                className: Ae().planOptionCurrentPlan,
                                children: ["(", G.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !E && x()]
                        }), f ? (0, r.jsx)("div", {
                            className: ge()(Me({}, Ae().optionPriceSelected, i)),
                            children: G.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: p && null != m ? I.interval === Te.rV.MONTH ? (0, O.T4)(P.amount - m, P.currency) : (0, O.T4)(P.amount, P.currency) : (0, O.T4)(0, P.currency, {
                                    maximumFractionDigits: 0
                                })
                            })
                        }) : (0, r.jsx)("div", {
                            className: ge()(Me({}, Ae().optionSelected, i || E)),
                            children: (0, O.T4)(P.amount, P.currency)
                        })]
                    }), f && (0, r.jsx)("div", {
                        className: Ae().planOptionSubtextContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: i ? "text-normal" : "interactive-normal",
                            className: ge()(Ae().planOptionSubtext, Me({}, Ae().discountPlanOptionSubtext, p)),
                            children: p && null != m ? I.interval === Te.rV.MONTH ? G.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, O.T4)(P.amount - m, P.currency),
                                regularPrice: (0, O.T4)(P.amount, P.currency)
                            }) : G.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: T
                            }) : R.format({
                                price: (0, O.T4)(P.amount, P.currency)
                            })
                        })
                    })]
                })
            }
            var xe = t(185096),
                Ce = t(520453),
                je = t(710431),
                Le = t.n(je);

            function Ze(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function we(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function Ge(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        we(e, n, t[n])
                    }))
                }
                return e
            }

            function De(e, n) {
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

            function ke(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Ze(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ze(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ue(e, n) {
                var t = G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                    r = G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                    a = function() {
                        switch (e.interval) {
                            case Te.rV.YEAR:
                                return t;
                            case Te.rV.MONTH:
                            default:
                                return r
                        }
                    }(),
                    i = e.skuId;
                switch (n) {
                    case Te.Si.TIER_0:
                        switch (i) {
                            case Te.Si.TIER_1:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                            case Te.Si.TIER_2:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                            default:
                                return a
                        }
                    case Te.Si.TIER_1:
                        switch (i) {
                            case Te.Si.TIER_0:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                            case Te.Si.TIER_2:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                            default:
                                return a
                        }
                    case Te.Si.TIER_2:
                        switch (i) {
                            case Te.Si.TIER_0:
                            case Te.Si.TIER_1:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                            case Te.Si.TIER_2:
                                return e.interval === Te.rV.MONTH ? G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                    numFreeGuildSubscriptions: Te.cb
                                }) : a;
                            default:
                                return a
                        }
                    default:
                        return a
                }
            }

            function Be(e) {
                var n, t, i, f, p = e.premiumSubscription,
                    m = e.skuId,
                    y = e.selectedPlanId,
                    I = e.setSelectedPlanId,
                    E = e.isGift,
                    N = void 0 !== E && E,
                    x = e.isSeasonalGift,
                    C = void 0 !== x && x,
                    j = e.selectedGiftStyle,
                    L = e.setSelectedGiftStyle,
                    Z = e.priceOptions,
                    D = e.planOptions,
                    k = e.eligibleForMultiMonthPlans,
                    U = e.referralTrialOfferId,
                    B = e.subscriptionPeriodEnd,
                    F = e.showTotal,
                    W = void 0 === F || F,
                    Y = e.customGiftMessage,
                    K = e.setCustomGiftMessage,
                    V = e.discountInvoiceItems,
                    X = (0, d.usePaymentContext)(),
                    z = X.activeSubscription,
                    J = X.setSelectedPlanId,
                    Q = X.selectedSkuId,
                    $ = X.giftRecipient,
                    q = X.selectedPlan,
                    ee = X.priceOptions,
                    ne = (0, h.a8)($);
                m = null != m ? m : Q;
                p = null != p ? p : z;
                s()(void 0 !== p, "should not be undefined");
                var te = ke((0, l.Wu)([_.Z], (function() {
                        return [null != p ? _.Z.get(p.planId) : null, null != y ? _.Z.get(y) : null]
                    })), 2),
                    re = te[0],
                    ae = te[1],
                    ie = (0, P.N)(U),
                    se = null == ie ? void 0 : ie.subscription_trial,
                    le = (0, T.Ng)(),
                    oe = null == le || null === (n = le.discount) || void 0 === n ? void 0 : n.plan_ids,
                    ce = null != ae ? ae : q,
                    ue = a.useCallback((function(e) {
                        null != I ? I(e) : J(e)
                    }), [I, J]),
                    de = null != Z ? Z : ee;
                s()(null != de, "Price option has to be set");
                var fe = null != ie && Te.nG[ie.trial_id].skus.includes(m),
                    pe = null != le && D.some((function(e) {
                        return null == oe ? void 0 : oe.includes(e)
                    })),
                    me = (0, v.aS)(Te.Xh.PREMIUM_MONTH_TIER_2, !1, N, de);
                a.useEffect((function() {
                    k && g.ZP.trackExposure({
                        location: "5f89bb_1"
                    })
                }), [k]);
                var ye = null != (null == ce ? void 0 : ce.id) && D.includes(ce.id);
                a.useEffect((function() {
                    if (!ye)
                        if (null == re || N) ue(D[0]);
                        else if (null != re) {
                        var e = D.find((function(e) {
                            return e !== re.id
                        }));
                        null != e && ue(e)
                    }
                }), [ye, N, D, re, ue]);
                var _e = !ne && (N || !fe && !pe) && ye && W,
                    Ie = (0,
                        o.useRadioGroup)(),
                    he = null != (null == ce ? void 0 : ce.id) ? (0, v.aS)(ce.id, !1, N, de) : void 0,
                    Ee = "HR" === (0, S.Z)().ipCountryCode && null != he && he.currency === Ce.pK.EUR,
                    ve = (0, v.Ap)(de.paymentSourceId),
                    Oe = (null == se ? void 0 : se.interval) === Te.rV.DAY ? G.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : G.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    ge = !N && (pe || null != se && fe && null != B),
                    Ne = null === (f = null === (t = null == V ? void 0 : V.find((function(e) {
                        return e.subscriptionPlanId === Te.Xh.PREMIUM_MONTH_TIER_2
                    }))) || void 0 === t || null === (i = t.discounts) || void 0 === i ? void 0 : i.find((function(e) {
                        return e.type === u.eW.SUBSCRIPTION_PLAN
                    }))) || void 0 === f ? void 0 : f.amount;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: ne ? Le().stepBodyCustomGift : Le().stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: ne ? Le().bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(A.Z, {
                                fromBoostCancelModal: !1,
                                className: Le().legacyPricingNotice
                            }), (C || ne) && null != j && (0, r.jsx)(be, {
                                selectedGiftStyle: j,
                                setSelectedGiftStyle: L
                            })]
                        }), (0, r.jsxs)("div", {
                            className: ne ? Le().bodyColumnRight : void 0,
                            children: [ne && (0, r.jsx)(xe.s, {
                                giftRecipient: $
                            }), function() {
                                if (ne && null != K) return (0, r.jsx)(H, {
                                    sectionTitle: G.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: function(e) {
                                        return K(e)
                                    },
                                    pendingText: Y,
                                    currentText: Y
                                })
                            }(), null != re && !N && (0, r.jsx)("div", {
                                className: Le().bodyText,
                                children: Ue(re, m)
                            }), function(e, n) {
                                return ne ? (0, r.jsx)(o.FormTitle, {
                                    children: G.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
                                }) : ge ? e ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: Le().trialPlanSelectHeader,
                                        children: G.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                            trialEnd: B,
                                            trialPeriod: Oe
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: Le().planSelectSeparator
                                    })]
                                }) : n && null != Ne && null != me ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: Le().trialPlanSelectHeader,
                                        children: G.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                            discountedPrice: (0, O.T4)(me.amount - Ne, me.currency),
                                            regularPrice: (0, O.T4)(me.amount, me.currency)
                                        })
                                    }), (0,
                                        r.jsx)("hr", {
                                        className: Le().planSelectSeparator
                                    })]
                                }) : void 0 : (0, r.jsx)("div", {
                                    className: Le().selectPlanChooseTitle,
                                    children: G.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                })
                            }(fe, pe), (0, r.jsx)("div", De(Ge({}, Ie), {
                                children: D.map((function(e) {
                                    return (0, r.jsx)(Re, {
                                        planId: e,
                                        isGift: N,
                                        premiumSubscription: N ? null : null != p ? p : null,
                                        selectPlan: ue,
                                        selected: (null == ce ? void 0 : ce.id) === e,
                                        priceOptions: de,
                                        shouldShowUpdatedPaymentModal: ge,
                                        isEligibleForDiscount: pe,
                                        discountAmountOff: Ne
                                    }, e)
                                }))
                            })), (0, r.jsx)("div", {
                                children: _e && null != ce && null != he ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: Le().selectPlanDivider
                                    }), (0, r.jsx)(M.Ji, {
                                        label: G.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(R.Z, {
                                            price: he.amount,
                                            currency: he.currency,
                                            intervalType: N ? null : ce.interval,
                                            intervalCount: ce.intervalCount,
                                            isPrepaidPaymentSource: ve
                                        }),
                                        className: Le().selectPlanTotalRow
                                    })]
                                }) : null
                            }), Ee && (0, r.jsx)(c.Z, {
                                message: G.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0,
                                        O.T4)(7.5345 * he.amount, Ce.pK.HRK)
                                })
                            }), !N && !ge && W && (0, r.jsx)(c.Z, {
                                message: G.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: b.Z.getArticleURL(w.BhN.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function Fe(e) {
                var n = e.onStepChange,
                    t = e.selectedPlanId,
                    a = e.isGift,
                    i = e.paymentSources,
                    s = e.onBackClick,
                    l = e.showBackButton,
                    c = e.planOptions,
                    u = e.shouldRenderUpdatedPaymentModal,
                    f = void 0 !== u && u,
                    p = e.isTrial,
                    m = (0, d.usePaymentContext)(),
                    y = m.paymentSources,
                    _ = m.selectedPlan;
                i = null != i ? i : y;
                t = null != t ? t : null == _ ? void 0 : _.id;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != t && c.includes(t) ? (0, r.jsx)(He, {
                        paymentSources: i,
                        onStepChange: n,
                        selectedPlanId: t,
                        isGift: a,
                        shouldRenderUpdatedPaymentModal: f,
                        isTrial: p
                    }) : (0, r.jsx)(o.Button, {
                        disabled: !0,
                        children: G.Z.Messages.SELECT
                    }), l ? (0, r.jsx)(Ee.Z, {
                        onClick: s
                    }) : null]
                })
            }

            function He(e) {
                var n = e.onStepChange,
                    t = e.selectedPlanId,
                    a = e.isGift,
                    i = e.paymentSources,
                    s = e.shouldRenderUpdatedPaymentModal,
                    c = e.isTrial,
                    u = (0, l.e7)([I.Z], (function() {
                        return I.Z.getPremiumTypeSubscription()
                    })),
                    d = (0,
                        ve.H)(t, a).hasEntitlements,
                    p = null != u && null != u.paymentSourceId || Object.keys(i).length > 0 || d && !c,
                    _ = s ? G.Z.Messages.NEXT : G.Z.Messages.SELECT,
                    h = f.h8.ADD_PAYMENT_STEPS;
                if (p) h = f.h8.REVIEW;
                else if ((0, E.nI)() && function() {
                        if (N.getCurrentConfig({
                                location: "5f89bb_2"
                            }).experiment === y.BROWSER_AUTOFILL) return m.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        }).enabled;
                        return !1
                    }()) {
                    h = f.h8.AWAITING_BROWSER_CHECKOUT;
                    _ = G.Z.Messages.CONTINUE_IN_BROWSER
                }
                return (0, r.jsx)(o.Button, {
                    onClick: function() {
                        return n(h)
                    },
                    children: _
                })
            }
        },
        111090: (e, n, t) => {
            "use strict";
            t.d(n, {
                w: () => d,
                H: () => p
            });
            var r = t(667294),
                a = t(202351),
                i = t(105783),
                s = t(551778),
                l = t(151367),
                o = t(116094),
                c = t(520453),
                u = t(473708);

            function d(e, n, t) {
                r.useEffect((function() {
                    if (null != e && e.isPurchasedExternally && null != e.paymentGateway && !t) {
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
                        n()
                    }
                }), [e])
            }
            var f = [];

            function p(e, n) {
                var t = (0, a.e7)([s.Z], (function() {
                        return null != e ? s.Z.get(e) : null
                    })),
                    i = (0, a.e7)([l.Z], (function() {
                        var e;
                        return null != t && null !== (e = l.Z.getForSku(t.skuId)) && void 0 !== e ? e : f
                    })),
                    c = r.useMemo((function() {
                        return Array.from(i).filter((function(e) {
                            var n = e.parentId,
                                t = e.consumed;
                            return null != n && !t
                        }))
                    }), [i]);
                return {
                    hasEntitlements: !n && null != t && null != c && c.length >= o.ZP.getIntervalMonths(t.interval, t.intervalCount),
                    entitlements: c
                }
            }
        },
        185096: (e, n, t) => {
            "use strict";
            t.d(n, {
                s: () => u
            });
            var r = t(785893),
                a = (t(667294), t(304548)),
                i = t(657539),
                s = t(749565),
                l = t(473708),
                o = t(488251),
                c = t.n(o),
                u = function(e) {
                    var n = e.giftRecipient;
                    return null == n ? null : (0, r.jsxs)("div", {
                        className: c().content,
                        children: [(0, r.jsx)(a.FormTitle, {
                            children: l.Z.Messages.FORM_LABEL_SEND_TO
                        }), (0, r.jsxs)("div", {
                            className: c().giftRecipientInfo,
                            children: [(0, r.jsx)(i.Z, {
                                user: n,
                                className: c().giftRecipient,
                                size: a.AvatarSizes.SIZE_20
                            }), (0, r.jsx)(a.Heading, {
                                className: c().giftRecipientName,
                                variant: "text-md/normal",
                                children: s.ZP.getName(n)
                            }), (0, r.jsx)(a.Heading, {
                                className: c().giftRecipientTag,
                                variant: "text-md/normal",
                                children: s.ZP.getUserTag(n)
                            })]
                        })]
                    })
                }
        },
        16097: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => Y
            });
            var r = t(785893),
                a = t(667294),
                i = t(441143),
                s = t.n(i),
                l = t(197597),
                o = t(202351),
                c = t(795308),
                u = t(304548),
                d = t(415324),
                f = t(152042),
                p = t(700812),
                m = t(536713),
                y = t(414094),
                _ = t(782786),
                I = t(632826),
                h = t(837598),
                b = t(268226),
                E = t(793461),
                v = t(615796),
                O = t(551778),
                g = t(386991),
                N = t(644144),
                S = t(116094),
                T = t(249052),
                P = t(467345),
                A = t(100749),
                M = t(344266),
                R = t(16703),
                x = t(900547),
                C = t(882211),
                j = t(311556),
                L = t(646875),
                Z = t(111090),
                w = t(185096),
                G = t(203600),
                D = t(2590),
                k = t(520453),
                U = t(473708),
                B = t(968071),
                F = t.n(B);

            function H(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function W(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return H(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return H(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y(e) {
                var n, t, i = e.selectedPlanId,
                    B = e.paymentSources,
                    H = e.priceOptions,
                    Y = e.currencies,
                    K = e.onCurrencyChange,
                    V = e.isGift,
                    X = void 0 !== V && V,
                    z = e.onPaymentSourceChange,
                    J = e.handlePaymentSourceAdd,
                    Q = e.setHasAcceptedTerms,
                    $ = e.legalTermsNodeRef,
                    q = e.hasLegalTermsFlash,
                    ee = e.trialId,
                    ne = e.trialFooterMessageOverride,
                    te = e.reviewWarningMessage,
                    re = e.metadata,
                    ae = e.purchaseState,
                    ie = e.hideSubscriptionDetails,
                    se = e.referralTrialOfferId,
                    le = e.isTrial,
                    oe = void 0 !== le && le,
                    ce = e.isDiscount,
                    ue = void 0 !== ce && ce,
                    de = (0, _.usePaymentContext)(),
                    fe = de.isEmbeddedIAP,
                    pe = de.activeSubscription,
                    me = de.selectedSkuId,
                    ye = de.defaultPlanId,
                    _e = de.selectedGiftStyle,
                    Ie = de.setSelectedGiftStyle,
                    he = de.isPremium,
                    be = de.giftRecipient,
                    Ee = de.startedPaymentFlowWithPaymentSourcesRef,
                    ve = (0, M.Ng)(),
                    Oe = null == ve || null === (n = ve.discount) || void 0 === n ? void 0 : n.plan_ids.some((function(e) {
                        return G.GP[e].skuId === me
                    })),
                    ge = !X && null != ve && null != me && Oe,
                    Ne = (0, o.e7)([O.Z], (function() {
                        return O.Z.get(i)
                    }));
                s()(null != Ne, "Missing plan");
                var Se, Te = [{
                        planId: Ne.id,
                        quantity: 1
                    }],
                    Pe = ae === I.A.PURCHASING || ae === I.A.COMPLETED,
                    Ae = X || Pe,
                    Me = W((0, A.ED)({
                        items: Te,
                        renewal: !1,
                        preventFetch: Ae,
                        applyEntitlements: !0,
                        paymentSourceId: H.paymentSourceId,
                        currency: H.currency,
                        trialId: ee,
                        metadata: re
                    }), 2),
                    Re = Me[0],
                    xe = Me[1],
                    Ce = W((0, A.ED)({
                        items: Te,
                        renewal: !0,
                        preventFetch: Ae,
                        trialId: ee,
                        paymentSourceId: H.paymentSourceId,
                        currency: H.currency,
                        metadata: re
                    }), 2),
                    je = Ce[0],
                    Le = Ce[1],
                    Ze = W((0, A.ED)({
                        items: [{
                            planId: G.Xh.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !ge,
                        trialId: ee,
                        paymentSourceId: H.paymentSourceId,
                        currency: H.currency,
                        metadata: re
                    }), 2),
                    we = Ze[0],
                    Ge = Ze[1],
                    De = (0, N.a8)(be),
                    ke = null !== (Se = null != xe ? xe : Le) && void 0 !== Se ? Se : Ge,
                    Ue = (0, o.e7)([E.Z], (function() {
                        return E.Z.enabled
                    })),
                    Be = H.paymentSourceId,
                    Fe = (0, Z.H)(Ne.id, X),
                    He = Fe.hasEntitlements,
                    We = Fe.entitlements,
                    Ye = (0, S.Ap)(H.paymentSourceId),
                    Ke = (0, h.sE)(ee, Be, i),
                    Ve = (0, b.Kp)({
                        isTrial: oe,
                        isGift: X,
                        selectedSkuId: me,
                        startedPaymentFlowWithPaymentSources: Ee.current
                    }),
                    Xe = W(a.useState(null == Re ? void 0 : Re.subscriptionPeriodEnd), 2),
                    ze = Xe[0],
                    Je = Xe[1];
                a.useEffect((function() {
                    null == ze && Je(null == Re ? void 0 : Re.subscriptionPeriodEnd)
                }), [null == Re ? void 0 : Re.subscriptionPeriodEnd, ze]);
                var Qe, $e, qe = a.useMemo((function() {
                        return (0, S.V7)({
                            skuId: me,
                            isPremium: he,
                            multiMonthPlans: [],
                            currentSubscription: pe,
                            isGift: X,
                            isEligibleForTrial: oe,
                            defaultPlanId: ye,
                            defaultToMonthlyPlan: !1
                        })
                    }), [me, pe, X, ye, he, oe]),
                    en = (0, b.$g)(Ve, Re, Ne);
                if (null != ke) {
                    var nn = ke.message;
                    ke.code === y.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (nn = U.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY);
                    return (0, r.jsx)(u.FormErrorBlock, {
                        children: nn
                    })
                }
                if (X) $e = (0, r.jsx)(L.e9, {
                    paymentSourceId: H.paymentSourceId,
                    plan: Ne,
                    className: F().invoice,
                    isPrepaidPaymentSource: Ye,
                    isCustomGift: De
                });
                else if (oe && null != Re) $e = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(R.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(R.PO, {
                        className: F().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: F().trialPriceLine,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: U.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: U.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, T.T4)(0, Re.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: F().afterTrialPriceLine,
                            children: (0, r.jsx)(L.yT, {
                                invoice: Re,
                                plan: Ne
                            })
                        })]
                    })]
                });
                else {
                    if (null == Re || null == je || en) return (0, r.jsx)("div", {
                        className: F().spinnerWrapper,
                        children: (0, r.jsx)(u.Spinner, {})
                    });
                    oe && Re.subscriptionPeriodEnd !== je.subscriptionPeriodEnd && (Qe = Re.subscriptionPeriodEnd);
                    $e = (0, r.jsxs)(R.PO, {
                        className: F().invoice,
                        children: [(0, r.jsx)(R.q9, {
                            children: U.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(L.Lu, {
                            invoice: Re,
                            newPlan: Ne,
                            isPrepaidPaymentSource: Ye,
                            referralTrialOfferId: se
                        }), Ye ? null : (0, r.jsx)(L.nd, {
                            renewalInvoice: je,
                            isTrial: oe,
                            priceOptions: H,
                            overrideRenewalDate: Qe,
                            trialFooterMessageOverride: ne,
                            hideSubscriptionDetails: ie
                        })]
                    })
                }
                var tn = l.M.EEA_COUNTRIES.has(v.Z.ipCountryCodeWithFallback),
                    rn = function(e, n, t) {
                        var r = null,
                            a = null,
                            i = null;
                        if (e && null != n) {
                            var s = S.ZP.getIntervalForInvoice(n),
                                l = s.intervalType,
                                o = s.intervalCount,
                                c = (0, T.og)((0, T.T4)(n.total, n.currency), l, o),
                                u = null != t ? t : n.subscriptionPeriodEnd;
                            r = U.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: D.EYA.TERMS,
                                paidURL: D.EYA.PAID_TERMS,
                                rate: c,
                                renewalDate: u
                            });
                            a = F().trialCheckbox;
                            i = F().trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: a,
                            checkboxLabelClassname: i
                        }
                    }(null != oe && oe, je, Qe),
                    an = rn.checkboxLabel,
                    sn = rn.checkboxClassname,
                    ln = rn.checkboxLabelClassname,
                    on = U.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: Ne.name
                    });
                X && !De ? on = U.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : X && De ? on = "" : (0, S.PV)(Ne.id) && (on = S.ZP.getBillingReviewSubheader(null, Ne));
                return Ke ? null : (0, r.jsxs)("div", {
                    className: F().stepBody,
                    children: [null != te && (0, r.jsxs)("div", {
                        className: F().reviewWarningMessageContainer,
                        children: [(0, r.jsx)(g.Z, {
                            color: c.Z.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(u.Text, {
                            className: F().reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: te
                        })]
                    }), Ve && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(R.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(j.O, {
                            isGift: X,
                            selectedGiftStyle: _e,
                            setSelectedGiftStyle: Ie,
                            planOptions: qe,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: i,
                            subscriptionPeriodEnd: ze,
                            showTotal: !1,
                            discountInvoiceItems: ge ? null == we ? void 0 : we.invoiceItems : void 0
                        }), (0, r.jsx)(R.KU, {})]
                    }), !oe && (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: on
                    }), De && null != _e && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(C.Z, {
                            defaultAnimationState: P.SR.LOOP,
                            giftStyle: _e,
                            shouldAnimate: !0,
                            className: F().giftMainAnimation
                        }), (0, r.jsx)(w.s, {
                            giftRecipient: be
                        })]
                    }), $e, (0, r.jsxs)("div", {
                        className: F().paymentSourceWrapper,
                        children: [oe ? (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: F().formTitle,
                            children: U.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: U.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(p.Z, {
                            paymentSources: Object.values(B),
                            selectedPaymentSourceId: Be,
                            prependOption: He && !oe ? {
                                label: U.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: z,
                            onPaymentSourceAdd: J,
                            hidePersonalInformation: Ue,
                            isTrial: oe
                        }), He && null == Be ? (0, r.jsx)("div", {
                            className: F().paymentSourceOptionalWarning,
                            children: U.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: We.length
                            })
                        }) : null, ue ? null : (0, r.jsxs)(d.b, {
                            currencies: Y,
                            className: F().currencyWrapper,
                            children: [(0, r.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: U.Z.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.Z, {
                                selectedCurrency: H.currency,
                                currencies: Y,
                                onChange: K
                            })]
                        })]
                    }), (0, r.jsx)(x.Z, {
                        isActive: q,
                        ref: $,
                        children: (0, r.jsx)(m.Z, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: an,
                            checkboxClassname: sn,
                            checkboxLabelClassname: ln,
                            finePrint: (0, r.jsx)(f.Z, {
                                hide: oe || ue,
                                subscriptionPlan: Ne,
                                renewalInvoice: je,
                                isGift: X,
                                paymentSourceType: null === (t = B[null != Be ? Be : ""]) || void 0 === t ? void 0 : t.type,
                                isEmbeddedIAP: fe,
                                basePrice: (0, S.aS)(Ne.id, !1, X, H)
                            }),
                            showPricingLink: Ne.currency !== k.pK.USD,
                            showWithdrawalWaiver: tn,
                            disabled: Pe,
                            isTrial: oe,
                            isDiscount: ue,
                            subscriptionPlan: Ne,
                            isGift: X
                        })
                    })]
                })
            }
        },
        682876: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => q
            });
            var r = t(785893),
                a = t(667294),
                i = t(441143),
                s = t.n(i),
                l = t(202351),
                o = t(304548),
                c = t(673679),
                u = t(19585),
                d = t(782786),
                f = t(744564),
                p = t(933599),
                m = t(665082),
                y = t(315804),
                _ = t(54709),
                I = t(652591),
                h = t(264628),
                b = t(644144),
                E = t(116094),
                v = t(632826),
                O = t(2590),
                g = t(203600),
                N = t(473708);

            function S(e, n, t, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(o) : Promise.resolve(o).then(r, a)
            }

            function T(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

                        function s(e) {
                            S(i, r, a, s, l, "next", e)
                        }

                        function l(e) {
                            S(i, r, a, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function P(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        P(e, n, t[n])
                    }))
                }
                return e
            }

            function M(e, n) {
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
            var R = function(e, n) {
                var t, r, a, i, s = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
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
                                i = n.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
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

            function x(e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = T((function(e) {
                    var n, t, r, a, i, l, o, u, d, S, T, P, x, C, j, L, Z, w, G, D, k, U, B, F, H, W, Y, K, V, X, z, J, Q, $, q, ee, ne, te, re;
                    return R(this, (function(R) {
                        switch (R.label) {
                            case 0:
                                n = e.setPurchaseState, t = e.setHasAcceptedTerms, r = e.setIsSubmitting, a = e.setPurchaseError, i = e.hasRedirectURL, l = e.setHasRedirectURL, o = e.isGift, u = e.giftStyle, d = e.baseAnalyticsData, S = e.analyticsLocation, T = e.analyticsLocations, P = e.flowStartTime, x = e.subscriptionPlan, C = e.planGroup, j = e.trialId, L = e.priceOptions, Z = e.paymentSource, w = e.isPrepaidPaymentPastDue, G = e.openInvoiceId, D = e.premiumSubscription, k = e.onNext, U = e.metadata, B = e.sku, F = e.skuPricePreview, H = e.purchaseType, W = e.referralCode, Y = e.loadId, K = e.giftRecipient, V = e.customMessage;
                                n(v.A.PURCHASING);
                                t(!0);
                                r(!0);
                                f.Z.wait(p.fw);
                                a(null);
                                R.label = 1;
                            case 1:
                                R.trys.push([1, 15, 16, 17]);
                                I.default.track(O.rMx.PAYMENT_FLOW_COMPLETED, M(A({}, d), {
                                    duration_ms: Date.now() - P
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
                                    loadId: Y
                                })];
                            case 2:
                                X = R.sent();
                                return [3, 14];
                            case 3:
                                s()(null != x, "Missing subscriptionPlan");
                                if (!o) return [3, 5];
                                if ("usd" === (J = (0, E.aS)(x.id, !1, !0, L)).currency && (null == Z ? void 0 : Z.type) === O.HeQ.GCASH) {
                                    Q = new Error("Invalid USD currency for GCash");
                                    (0, h.q2)(Q, {
                                        tags: {
                                            paymentSourceId: null !== ($ = null == Z ? void 0 : Z.id) && void 0 !== $ ? $ : "",
                                            subscriptionPlanId: x.id,
                                            priceOptions: JSON.stringify(L)
                                        }
                                    })
                                }
                                return [4, (0, y.ZZ)(g.RQ, x.skuId, {
                                    expectedAmount: J.amount,
                                    expectedCurrency: J.currency,
                                    paymentSource: Z,
                                    subscriptionPlanId: x.id,
                                    isGift: !0,
                                    giftStyle: u,
                                    loadId: Y,
                                    recipientId: z ? null == K ? void 0 : K.id : void 0,
                                    customMessage: z ? V : void 0
                                })];
                            case 4:
                                X = R.sent();
                                return [3, 14];
                            case 5:
                                return w && null != G && null != Z && null != D ? O.Uk1.has(Z.type) ? [4, (0, c.G)(D, G, Z, L.currency)] : [3, 7] : [3, 10];
                            case 6:
                                q = R.sent();
                                return [3, 9];
                            case 7:
                                return [4, (0, c.Mg)(D, {
                                    paymentSource: Z,
                                    currency: L.currency
                                }, T, S)];
                            case 8:
                                q = R.sent();
                                R.label = 9;
                            case 9:
                                X = q;
                                return [3, 14];
                            case 10:
                                return null == D ? [3, 12] : [4, (0, c.Mg)(D, {
                                    items: (0, E.al)(D, x.id, 1, new Set(C)),
                                    paymentSource: Z,
                                    currency: L.currency
                                }, T, S)];
                            case 11:
                                X = R.sent();
                                return [3, 14];
                            case 12:
                                return [4, (0, m.Ld)({
                                    planId: x.id,
                                    currency: L.currency,
                                    paymentSource: Z,
                                    trialId: j,
                                    metadata: U,
                                    referralCode: W,
                                    loadId: Y
                                })];
                            case 13:
                                X = R.sent();
                                R.label = 14;
                            case 14:
                                if (X.redirectConfirmation) {
                                    l(null != X.redirectURL);
                                    return [2]
                                }
                                ee = M(A({}, d), {
                                    duration_ms: Date.now() - P,
                                    payment_source_type: null == Z ? void 0 : Z.type
                                });
                                z && (ee.is_custom_message_edited = V !== N.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE);
                                I.default.track(O.rMx.PAYMENT_FLOW_SUCCEEDED, ee);
                                n(v.A.COMPLETED);
                                "subscription" in X ? ne = null != X.subscription ? _.Z.createFromServer(X.subscription) : null : "entitlements" in X && (te = null != X.entitlements ? X.entitlements : void 0);
                                k(ne, te);
                                return [3, 17];
                            case 15:
                                re = R.sent();
                                n(v.A.FAIL);
                                a(re);
                                I.default.track(O.rMx.PAYMENT_FLOW_FAILED, M(A({}, d), {
                                    payment_source_id: null == Z ? void 0 : Z.id,
                                    payment_source_type: null == Z ? void 0 : Z.type,
                                    duration_ms: Date.now() - P
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
            var j = t(300615),
                L = t(837598),
                Z = t(856281),
                w = t(909365),
                G = t(908434),
                D = t(107364),
                k = t(499171),
                U = t(509897),
                B = t(111090),
                F = t(820610),
                H = t(787257),
                W = t.n(H);

            function Y(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function K(e, n, t, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    t(e);
                    return
                }
                l.done ? n(o) : Promise.resolve(o).then(r, a)
            }

            function V(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(n, t);

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

            function X(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function z(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        X(e, n, t[n])
                    }))
                }
                return e
            }

            function J(e, n) {
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

            function Q(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, i = [],
                            s = !0,
                            l = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done); s = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            l = !0;
                            a = e
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return Y(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Y(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var $ = function(e, n) {
                var t, r, a, i, s = {
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
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
                                i = n.call(e, s)
                            } catch (e) {
                                i = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
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
                var n = e.premiumSubscription,
                    t = e.setPurchaseState,
                    i = e.onBack,
                    f = e.onNext,
                    p = e.legalTermsNodeRef,
                    m = e.flashLegalTerms,
                    y = e.invoiceError,
                    _ = e.planError,
                    h = e.onPurchaseError,
                    b = e.baseAnalyticsData,
                    g = e.flowStartTime,
                    N = e.isGift,
                    S = void 0 !== N && N,
                    T = e.giftStyle,
                    P = e.customGiftMessage,
                    A = e.trialId,
                    M = e.planGroup,
                    R = e.analyticsLocation,
                    C = e.purchaseTokenAuthState,
                    H = e.openInvoiceId,
                    Y = e.metadata,
                    K = e.backButtonEligible,
                    X = e.disablePurchase,
                    q = e.isTrial,
                    ee = void 0 !== q && q,
                    ne = (0,
                        d.usePaymentContext)(),
                    te = ne.selectedPlan,
                    re = ne.priceOptions,
                    ae = ne.setHasAcceptedTerms,
                    ie = ne.setPurchaseError,
                    se = ne.purchaseType,
                    le = ne.paymentSourceId,
                    oe = ne.paymentSources,
                    ce = ne.selectedSkuId,
                    ue = ne.skusById,
                    de = ne.skuPricePreviewsById,
                    fe = ne.referralCode,
                    pe = ne.contextMetadata,
                    me = ne.giftRecipient,
                    ye = null == te ? void 0 : te.id,
                    _e = (0, L.sE)(A, re.paymentSourceId, ye),
                    Ie = (0, l.e7)([Z.Z], (function() {
                        return Z.Z.popupCallbackCalled
                    })),
                    he = (0, u.Z)().analyticsLocations,
                    be = null != le ? oe[le] : null,
                    Ee = Q(a.useState(_e), 2),
                    ve = Ee[0],
                    Oe = Ee[1],
                    ge = Q(a.useState(!1), 2),
                    Ne = ge[0],
                    Se = ge[1],
                    Te = (0, B.H)(ye, S).hasEntitlements,
                    Pe = (0, E.Ap)(re.paymentSourceId),
                    Ae = Te || _e,
                    Me = (0, k.U)(),
                    Re = null,
                    xe = null;
                if (se === O.GZQ.ONE_TIME) {
                    s()(null != ce, "SKU must be selected for one-time purchases");
                    var Ce;
                    Re = null !== (Ce = ue[ce]) && void 0 !== Ce ? Ce : null;
                    s()(null != Re, "SKU must exist and be fetched.");
                    var je = de[ce],
                        Le = null != le ? le : G.c;
                    xe = null != je ? je[Le] : null
                }
                var Ze, we = (Ze = V((function() {
                    return $(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, x({
                                    setPurchaseState: t,
                                    setHasAcceptedTerms: ae,
                                    setIsSubmitting: Oe,
                                    setPurchaseError: ie,
                                    hasRedirectURL: Ne,
                                    setHasRedirectURL: Se,
                                    isGift: S,
                                    giftStyle: T,
                                    baseAnalyticsData: b,
                                    analyticsLocation: R,
                                    analyticsLocations: he,
                                    flowStartTime: g,
                                    subscriptionPlan: te,
                                    planGroup: M,
                                    trialId: A,
                                    priceOptions: re,
                                    paymentSource: be,
                                    isPrepaidPaymentPastDue: Me,
                                    openInvoiceId: H,
                                    premiumSubscription: n,
                                    onNext: f,
                                    metadata: Y,
                                    sku: Re,
                                    skuPricePreview: xe,
                                    purchaseType: se,
                                    referralCode: fe,
                                    loadId: pe.loadId,
                                    giftRecipient: me,
                                    customMessage: P
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
                            return $(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!0 !== Ie) return [3, 6];
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, 4, 5]);
                                        return null == Z.Z.redirectedPaymentId ? [2] : [4, (0, c.OP)(Z.Z.redirectedPaymentId)];
                                    case 2:
                                        n.sent();
                                        I.default.track(O.rMx.PAYMENT_FLOW_SUCCEEDED, J(z({}, b), {
                                            duration_ms: Date.now() - g,
                                            payment_source_type: null == be ? void 0 : be.type
                                        }));
                                        t(v.A.COMPLETED);
                                        f();
                                        return [3, 5];
                                    case 3:
                                        e = n.sent();
                                        t(v.A.FAIL);
                                        h(e);
                                        I.default.track(O.rMx.PAYMENT_FLOW_FAILED, J(z({}, b), {
                                            payment_source_id: le,
                                            payment_source_type: null == be ? void 0 : be.type,
                                            duration_ms: Date.now() - g
                                        }));
                                        return [3, 5];
                                    case 4:
                                        Oe(!1);
                                        (0, c.K2)();
                                        return [7];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return C !== w.I.SUCCESS ? [3, 8] : [4, we()];
                                    case 7:
                                        n.sent();
                                        n.label = 8;
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
                    _e && !S && null == n && we()
                }), [_e, S, n]);
                var Ge = null != H || se === O.GZQ.ONE_TIME;
                return _e ? null : (0, r.jsxs)(o.ModalFooter, {
                    align: D.Z.Align.CENTER,
                    children: [(0, r.jsx)(F.Z, {
                        legalTermsNodeRef: p,
                        invoiceError: y,
                        planError: _,
                        disablePurchase: X,
                        flashLegalTerms: m,
                        isSubmitting: ve,
                        premiumSubscription: n,
                        isGift: S,
                        planGroup: M,
                        isPrepaid: Pe,
                        isTrial: ee,
                        makePurchase: we,
                        needsPaymentSource: null == be && !Ae
                    }), (0, r.jsx)(j.Z, {}), K && !Ge ? (0, r.jsx)("div", {
                        className: W().back,
                        children: (0, r.jsx)(U.Z, {
                            onClick: i
                        })
                    }) : null]
                })
            }
        },
        369263: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => I
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                i = t.n(a),
                s = t(318715),
                l = t(304548),
                o = t(821),
                c = t(149258),
                u = t(102007),
                d = t(598679),
                f = t(203600),
                p = t(107159),
                m = t.n(p);

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function _(e) {
                var n = e.errors;
                return (0, r.jsx)(r.Fragment, {
                    children: n.map((function(e, n) {
                        return (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            className: m().errorMessage,
                            children: (t = e, t.replace(/[0-9.,]+ ?kb/g, (function(e) {
                                var n = 1024 * parseInt(e, 10);
                                return isNaN(n) ? e : (0, c.Ng)(n)
                            })))
                        }, n);
                        var t
                    }))
                })
            }

            function I(e) {
                var n, t = e.title,
                    a = e.titleIcon,
                    c = e.titleId,
                    p = e.description,
                    I = e.children,
                    h = e.className,
                    b = e.errors,
                    E = e.disabled,
                    v = void 0 !== E && E,
                    O = e.hideDivider,
                    g = void 0 !== O && O,
                    N = e.showBorder,
                    S = void 0 !== N && N,
                    T = e.borderType,
                    P = e.hasBackground,
                    A = void 0 !== P && P,
                    M = e.forcedDivider,
                    R = void 0 !== M && M,
                    x = e.showPremiumIcon,
                    C = void 0 !== x && x,
                    j = (0, s.ZP)([o.Z], (function() {
                        var e = o.Z.activeSubstep;
                        return null != e && f.rN[e] === f.QD.PROFILE_CUSTOMIZATION
                    }));
                return (0, r.jsx)("div", {
                    className: i()(m().customizationSection, h, (n = {}, y(n, m().disabled, v), y(n, m().hideDivider, g), y(n, m().showBorder, S), y(n, m().withDivider, R), n)),
                    children: (0, r.jsxs)(d.Z, {
                        className: m().customizationSectionBorder,
                        backgroundClassName: m().customizationSectionBackground,
                        isShown: S && !j,
                        type: T,
                        hasBackground: A,
                        children: [(0, r.jsxs)(l.FormTitle, {
                            className: m().title,
                            id: c,
                            children: [t, C && (0, r.jsx)(u.Z, {}), a]
                        }), null != p ? (0, r.jsx)(l.FormText, {
                            type: l.FormText.Types.DESCRIPTION,
                            className: m().sectionDescription,
                            children: p
                        }) : null, I, null != b && (0, r.jsx)(_, {
                            errors: b
                        })]
                    })
                })
            }
        }
    }
]);