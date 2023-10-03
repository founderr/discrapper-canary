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
                J: () => h
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

            function h(e) {
                var t = e.analyticsData,
                    n = e.initialPlanId,
                    r = e.breadcrumbSteps,
                    p = e.handleStepChange,
                    h = e.referralTrialOfferId,
                    _ = e.onReturn,
                    b = (0, c.usePaymentContext)(),
                    I = b.contextMetadata,
                    g = b.step,
                    E = b.paymentSources,
                    v = b.paymentSourceId,
                    O = b.setPaymentSourceId,
                    N = b.purchaseError,
                    T = b.setPurchaseError,
                    P = b.purchaseErrorBlockRef,
                    S = b.paymentAuthenticationState,
                    A = b.isGift,
                    x = b.selectedSkuId,
                    M = y(m({}, (0, l.fL)()), {
                        paymentSources: E,
                        paymentSourceId: v,
                        setPaymentSourceId: O,
                        purchaseError: N,
                        setPurchaseError: T,
                        purchaseErrorBlockRef: P,
                        paymentAuthenticationState: S
                    }),
                    j = (0, s.N)(h),
                    C = !A && null != j && null != x && f.nG[j.trial_id].skus.includes(x),
                    R = null != _ ? _ : function() {
                        var e = Object.values(E).length < 1 && null == n ? u.h8.PLAN_SELECT : u.h8.REVIEW;
                        p(e, {
                            trackedFromStep: u.h8.PAYMENT_TYPE
                        })
                    };
                a()(g, "Step should be set here");
                var L = (0, i.Z)((function() {
                    return Date.now()
                }), [g]);
                return (0, l.vP)({
                    paymentModalArgs: M,
                    initialStep: u.h8.PAYMENT_TYPE,
                    prependSteps: [u.h8.PROMOTION_INFO],
                    appendSteps: [u.h8.REVIEW, u.h8.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: g,
                    usePaymentModalStep: !0,
                    onReturn: R,
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
                            flow_duration_ms: a - I.startTime
                        }))
                    },
                    isEligibleForTrial: C
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
                Z: () => E
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
                h = n.n(y);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(r, a)
            }

            function I(e, t) {
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
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var g = function(e, t) {
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

            function E() {
                var e, t, n = I(a.useState(!1), 2),
                    s = n[0],
                    l = n[1],
                    o = (t = (e = function() {
                        return g(this, (function(e) {
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
                                b(i, r, a, s, l, "next", e)
                            }

                            function l(e) {
                                b(i, r, a, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }), function() {
                        return t.apply(this, arguments)
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(m.C3, {
                        children: (0, r.jsx)(d, {
                            className: h().body,
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
                Z: () => g,
                U: () => b
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
                h = n(516178),
                _ = n.n(h);

            function b() {
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

            function I(e, t) {
                return "PL" === e ? t ? y.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? t ? y.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : t ? y.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : y.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const g = function(e) {
                var t = e.fromBoostCancelModal,
                    n = e.className,
                    a = (0, p.Z)();
                if (!b()) return null;
                l()(null != a, "Subscription billing country should not be null");
                return (0, r.jsxs)("div", {
                    className: i()(_().noticeRoot, n),
                    children: [(0, r.jsx)("div", {
                        className: _().iconContainer,
                        children: (0, r.jsx)(o.Z, {
                            className: _().infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: _().text,
                        children: I(a, t).format({
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
                return (0,
                    r.jsx)(a.Anchor, {
                    onClick: t,
                    className: l().link,
                    children: i.Z.Messages.BACK
                })
            }
        },
        128034: (e, t, n) => {
            "use strict";
            n.d(t, {
                O: () => De,
                M: () => ke
            });
            var r = n(785893),
                a = n(667294),
                i = n(441143),
                s = n.n(i),
                l = n(202351),
                o = n(304548),
                c = n(929400),
                u = n(782786),
                d = n(83471);
            const f = (0, n(260561).B)({
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
            var p = n(551778),
                m = n(536392),
                y = n(644144),
                h = n(348592),
                _ = n(120415),
                b = n(694329),
                I = n(249052),
                g = n(471450),
                E = n(470387),
                v = n(165666),
                O = n(344266),
                N = n(717035),
                T = n(668900),
                P = n(16703),
                S = n(367095),
                A = n(281808),
                x = n(855483),
                M = n(863979),
                j = n(369263),
                C = n(382060),
                R = n(2590),
                L = n(473708),
                Z = n(22865),
                w = n.n(Z);

            function G(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function D(e, t) {
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
                    if ("string" == typeof e) return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = (0, C.kt)({
                id: "1",
                type: R.d4z.DM
            });

            function B(e) {
                var t = e.sectionTitle,
                    n = e.errors,
                    i = e.onTextChange,
                    s = e.pendingText,
                    l = e.placeholder,
                    c = e.currentText,
                    u = e.disabled,
                    d = void 0 !== u && u,
                    f = D(a.useState(null != s ? s : c), 2),
                    p = f[0],
                    m = f[1],
                    y = D(a.useState((0, x.JM)(p)), 2),
                    h = y[0],
                    _ = y[1],
                    b = a.useRef(!1);
                a.useEffect((function() {
                    b.current = !0
                }), []);
                a.useEffect((function() {
                    if (void 0 === s) {
                        var e = (0, x.JM)(c);
                        m(c);
                        _(e)
                    }
                }), [s, c]);
                return (0, r.jsx)("div", {
                    className: w().body,
                    children: (0, r.jsxs)(j.Z, {
                        title: t,
                        errors: n,
                        disabled: d,
                        children: [(0, r.jsx)(M.Z, {
                            innerClassName: w().textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, t, n) {
                                if (t !== p) {
                                    m(t);
                                    _(n);
                                    i(t)
                                }
                            },
                            placeholder: l,
                            channel: k,
                            textValue: p,
                            richValue: h,
                            type: A.I.CUSTOM_GIFT,
                            onBlur: function() {
                                b.current = !1
                            },
                            onFocus: function() {
                                b.current = !0
                            },
                            focused: b.current,
                            onSubmit: function() {
                                return new Promise((function(e) {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                }))
                            }
                        }), (0, r.jsx)(o.HiddenVisually, {
                            children: L.Z.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
            var U, F = n(386991),
                H = n(467345),
                Y = n(69427),
                W = n(621270),
                K = n(882211),
                V = n(614278),
                X = n.n(V),
                z = n(777603),
                J = n.n(z),
                Q = n(446436),
                $ = n.n(Q),
                q = n(795138),
                ee = n.n(q),
                te = n(7477),
                ne = n.n(te);

            function re(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }
            var ae = (re(U = {}, Y.Cj.STANDARD_BOX, J()), re(U, Y.Cj.CAKE, $()), re(U, Y.Cj.CHEST, ee()), re(U, Y.Cj.COFFEE, ne()), re(U, Y.Cj.SNOWGLOBE, ""), re(U, Y.Cj.BOX, ""), re(U, Y.Cj.CUP, ""), U),
                ie = a.forwardRef((function(e, t) {
                    var n = e.isSelected,
                        a = e.giftStyle,
                        i = e.setSelectedGiftStyle,
                        s = e.onFocus,
                        l = e.onBlur;
                    return (0, r.jsx)(o.Clickable, {
                        innerRef: t,
                        className: X().clickable,
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
                            src: ae[a],
                            className: n ? X().customGiftBoxHighlighted : X().customGiftBox
                        })
                    })
                })),
                se = n(233863),
                le = n.n(se);

            function oe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ce(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ue(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ce(e, t, n[t])
                    }))
                }
                return e
            }

            function de(e, t) {
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

            function fe(e, t) {
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
                    if ("string" == typeof e) return oe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var pe = [Y.Cj.BOX, Y.Cj.CUP, Y.Cj.SNOWGLOBE],
                me = [Y.Cj.STANDARD_BOX, Y.Cj.CAKE, Y.Cj.COFFEE, Y.Cj.CHEST],
                ye = function() {
                    return (0, r.jsxs)("div", {
                        className: le().giftBoxHeaderContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: le().giftBoxHeaderText,
                            children: L.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }), (0, r.jsx)(o.Tooltip, {
                            text: L.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return (0, r.jsx)(o.Clickable, de(ue({}, e), {
                                    className: le().infoIconContainer,
                                    "aria-label": L.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                                    children: (0, r.jsx)(F.Z, {
                                        className: le().infoIcon
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
                        s = fe(a.useState(!1), 2),
                        l = s[0],
                        c = s[1],
                        d = a.useRef(null),
                        f = (0, o.useRadioGroup)({
                            orientation: "horizontal"
                        }),
                        p = W.ZP.getCurrentConfig({
                            location: "premiumGiftSelect_GiftAnimationOptions"
                        }).enabled,
                        m = (0, y.a8)(i),
                        h = null;
                    p ? h = pe : m && (h = me);
                    return (0, r.jsxs)("div", {
                        children: [p && (0, r.jsx)(ye, {}), m && null != t && (0, r.jsx)(K.Z, {
                            giftStyle: t,
                            defaultAnimationState: H.SR.ACTION,
                            shouldAnimate: !0,
                            className: le().giftMainAnimation
                        }), (0, r.jsx)("div", de(ue({
                            tabIndex: null != t || l ? void 0 : 0,
                            onFocus: function(e) {
                                var t;
                                e.target === e.currentTarget && (null === (t = d.current) || void 0 === t || t.focus())
                            },
                            className: le().giftBoxOptionContainer,
                            "aria-label": L.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }, f), {
                            children: null != h && h.map((function(e, a) {
                                return (0, r.jsx)(ie, {
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
                            className: le().selectPlanDivider
                        })]
                    })
                },
                _e = n(509897),
                be = n(111090),
                Ie = n(294184),
                ge = n.n(Ie),
                Ee = n(795308),
                ve = n(384411),
                Oe = n(203600),
                Ne = n(736101),
                Te = n.n(Ne);

            function Pe(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Se(e) {
                var t = e.premiumSubscription,
                    n = e.planId,
                    a = e.selectPlan,
                    i = e.selected,
                    c = e.isGift,
                    d = e.priceOptions,
                    f = e.shouldShowUpdatedPaymentModal,
                    m = e.isEligibleForDiscount,
                    h = e.discountedPriceString,
                    _ = (0, l.e7)([ve.default], (function() {
                        return ve.default.locale
                    })),
                    g = (0, l.e7)([p.Z], (function() {
                        return p.Z.get(n)
                    })),
                    E = (0, u.usePaymentContext)().giftRecipient,
                    v = (0, y.a8)(E);
                s()(null != g, "Missing subscriptionPlan");
                var O, N = null != t && t.planId === n,
                    T = N || n === Oe.Xh.PREMIUM_MONTH_TIER_2 && null != t && [Oe.Xh.PREMIUM_YEAR_TIER_0, Oe.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    P = Oe.nH[n],
                    S = (0, b.aS)(n, !1, c, d),
                    A = (0, b.Ap)(d.paymentSourceId),
                    x = null != P && !f,
                    M = g.interval === Oe.rV.YEAR ? L.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : L.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    j = function() {
                        return g.interval === Oe.rV.YEAR && null != t || x && !N ? g.interval === Oe.rV.YEAR && null != t ? (0, r.jsxs)("span", {
                            className: Te().planOptionMonthsFree,
                            children: ["(", L.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                        }) : x && !N ? null != P && (0, r.jsx)(o.Text, {
                            tag: "span",
                            variant: "eyebrow",
                            color: "always-white",
                            className: Te().planOptionDiscount,
                            children: L.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                                discount: (0, I.T3)(_, P / 100)
                            })
                        }) : void 0 : null
                    };
                return (0, r.jsxs)(o.Clickable, {
                    role: v ? "menuitem" : "radio",
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
                    className: ge()(Te().planOptionClickableContainer, (O = {}, Pe(O, Te().selectedPlan, v && i), Pe(O, Te().selectionBox, v), O)),
                    children: [(0, r.jsxs)("div", {
                        className: ge()(Te().planOption, Pe({}, Te().planOptionDisabled, T)),
                        children: [(0, r.jsxs)("div", {
                            className: Te().planOptionClickable,
                            children: [!v && (0, r.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: i,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: Ee.Z.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: Te().planOptionCheckbox
                            }), function() {
                                var e;
                                return (0, r.jsxs)("div", {
                                    children: [(0, r.jsxs)("div", {
                                        className: ge()(Te().planOptionInterval, (e = {}, Pe(e, Te().optionSelected, i || v), Pe(e, Te().updatedOptionSelected, f && (i || v)), e)),
                                        children: [(0, b.L7)(g.interval, c, A, g.intervalCount, v), v && j()]
                                    }), v && (0, r.jsx)("div", {
                                        className: Te().planOneTimeCost,
                                        children: L.Z.Messages.ONE_TIME_CHARGE.format({
                                            currencyAmount: (0, I.T4)(S.amount, S.currency)
                                        })
                                    })]
                                })
                            }(), N && (0, r.jsxs)("span", {
                                className: Te().planOptionCurrentPlan,
                                children: ["(", L.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !v && j()]
                        }), f ? (0, r.jsx)("div", {
                            className: ge()(Pe({}, Te().optionPriceSelected, i)),
                            children: L.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: m ? g.interval === Oe.rV.MONTH ? h : (0, I.T4)(S.amount, S.currency) : (0, I.T4)(0, S.currency, {
                                    maximumFractionDigits: 0
                                })
                            })
                        }) : (0, r.jsx)("div", {
                            className: ge()(Pe({}, Te().optionSelected, i || v)),
                            children: (0, I.T4)(S.amount, S.currency)
                        })]
                    }), f && (0, r.jsx)("div", {
                        className: Te().planOptionSubtextContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: i ? "text-normal" : "interactive-normal",
                            className: ge()(Te().planOptionSubtext, Pe({}, Te().discountPlanOptionSubtext, m)),
                            children: m ? g.interval === Oe.rV.MONTH ? L.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: h,
                                regularPrice: (0, I.T4)(S.amount, S.currency)
                            }) : L.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: P
                            }) : M.format({
                                price: (0, I.T4)(S.amount, S.currency)
                            })
                        })
                    })]
                })
            }
            var Ae = n(185096),
                xe = n(520453),
                Me = n(710431),
                je = n.n(Me);

            function Ce(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Re(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Re(e, t, n[t])
                    }))
                }
                return e
            }

            function Ze(e, t) {
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

            function we(e, t) {
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
                    if ("string" == typeof e) return Ce(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ce(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ge(e, t) {
                var n = L.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                    r = L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                    a = function() {
                        switch (e.interval) {
                            case Oe.rV.YEAR:
                                return n;
                            case Oe.rV.MONTH:
                            default:
                                return r
                        }
                    }(),
                    i = e.skuId;
                switch (t) {
                    case Oe.Si.TIER_0:
                        switch (i) {
                            case Oe.Si.TIER_1:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                            case Oe.Si.TIER_2:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                            default:
                                return a
                        }
                    case Oe.Si.TIER_1:
                        switch (i) {
                            case Oe.Si.TIER_0:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                            case Oe.Si.TIER_2:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                            default:
                                return a
                        }
                    case Oe.Si.TIER_2:
                        switch (i) {
                            case Oe.Si.TIER_0:
                            case Oe.Si.TIER_1:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                            case Oe.Si.TIER_2:
                                return e.interval === Oe.rV.MONTH ? L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                    numFreeGuildSubscriptions: Oe.cb
                                }) : a;
                            default:
                                return a
                        }
                    default:
                        return a
                }
            }

            function De(e) {
                var t, n = e.premiumSubscription,
                    i = e.skuId,
                    d = e.selectedPlanId,
                    f = e.setSelectedPlanId,
                    m = e.isGift,
                    _ = void 0 !== m && m,
                    E = e.isSeasonalGift,
                    A = void 0 !== E && E,
                    x = e.selectedGiftStyle,
                    M = e.setSelectedGiftStyle,
                    j = e.priceOptions,
                    C = e.planOptions,
                    Z = e.eligibleForMultiMonthPlans,
                    w = e.referralTrialOfferId,
                    G = e.subscriptionPeriodEnd,
                    D = e.showTotal,
                    k = void 0 === D || D,
                    U = e.customGiftMessage,
                    F = e.setCustomGiftMessage,
                    H = e.discountedPriceString,
                    Y = (0, u.usePaymentContext)(),
                    W = Y.activeSubscription,
                    K = Y.setSelectedPlanId,
                    V = Y.selectedSkuId,
                    X = Y.giftRecipient,
                    z = Y.selectedPlan,
                    J = Y.priceOptions,
                    Q = (0, y.a8)(X);
                i = null != i ? i : V;
                n = null != n ? n : W;
                s()(void 0 !== n, "should not be undefined");
                var $ = we((0, l.Wu)([p.Z], (function() {
                        return [null != n ? p.Z.get(n.planId) : null, null != d ? p.Z.get(d) : null]
                    })), 2),
                    q = $[0],
                    ee = $[1],
                    te = (0, N.N)(w),
                    ne = null == te ? void 0 : te.subscription_trial,
                    re = (0, O.Ng)(),
                    ae = null == re || null === (t = re.discount) || void 0 === t ? void 0 : t.plan_ids,
                    ie = null != ee ? ee : z,
                    se = a.useCallback((function(e) {
                        null != f ? f(e) : K(e)
                    }), [f, K]),
                    le = null != j ? j : J;
                s()(null != le, "Price option has to be set");
                var oe = null != te && Oe.nG[te.trial_id].skus.includes(i),
                    ce = null != re && C.some((function(e) {
                        return null == ae ? void 0 : ae.includes(e)
                    })),
                    ue = (0, b.aS)(Oe.Xh.PREMIUM_MONTH_TIER_2, !1, _, le);
                a.useEffect((function() {
                    Z && g.ZP.trackExposure({
                        location: "5f89bb_1"
                    })
                }), [Z]);
                var de = null != (null == ie ? void 0 : ie.id) && C.includes(ie.id);
                a.useEffect((function() {
                    if (!de)
                        if (null == q || _) se(C[0]);
                        else if (null != q) {
                        var e = C.find((function(e) {
                            return e !== q.id
                        }));
                        null != e && se(e)
                    }
                }), [de, _, C, q, se]);
                var fe = !Q && (_ || !oe && !ce) && de && k,
                    pe = (0, o.useRadioGroup)(),
                    me = null != (null == ie ? void 0 : ie.id) ? (0, b.aS)(ie.id, !1, _, le) : void 0,
                    ye = "HR" === (0, v.Z)().ipCountryCode && null != me && me.currency === xe.pK.EUR,
                    _e = (0, b.Ap)(le.paymentSourceId),
                    be = (null == ne ? void 0 : ne.interval) === Oe.rV.DAY ? L.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : L.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    Ie = !_ && (ce || null != ne && oe && null != G);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: Q ? je().stepBodyCustomGift : je().stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: Q ? je().bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(T.Z, {
                                fromBoostCancelModal: !1,
                                className: je().legacyPricingNotice
                            }), (A || Q) && null != x && (0, r.jsx)(he, {
                                selectedGiftStyle: x,
                                setSelectedGiftStyle: M
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Q ? je().bodyColumnRight : void 0,
                            children: [Q && (0, r.jsx)(Ae.s, {
                                giftRecipient: X
                            }), function() {
                                if (Q && null != F) return (0, r.jsx)(B, {
                                    sectionTitle: L.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: function(e) {
                                        return F(e)
                                    },
                                    pendingText: U,
                                    currentText: U
                                })
                            }(), null != q && !_ && (0, r.jsx)("div", {
                                className: je().bodyText,
                                children: Ge(q, i)
                            }), function(e, t) {
                                return Q ? (0, r.jsx)(o.FormTitle, {
                                    children: L.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
                                }) : Ie ? e ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: je().trialPlanSelectHeader,
                                        children: L.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                            trialEnd: G,
                                            trialPeriod: be
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: je().planSelectSeparator
                                    })]
                                }) : t && null != H && null != ue ? (0, r.jsxs)("div", {
                                    children: [(0,
                                        r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: je().trialPlanSelectHeader,
                                        children: L.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                            discountedPrice: H,
                                            regularPrice: (0, I.T4)(ue.amount, ue.currency)
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: je().planSelectSeparator
                                    })]
                                }) : void 0 : (0, r.jsx)("div", {
                                    className: je().selectPlanChooseTitle,
                                    children: L.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                })
                            }(oe, ce), (0, r.jsx)("div", Ze(Le({}, pe), {
                                children: C.map((function(e) {
                                    return (0, r.jsx)(Se, {
                                        planId: e,
                                        isGift: _,
                                        premiumSubscription: _ ? null : null != n ? n : null,
                                        selectPlan: se,
                                        selected: (null == ie ? void 0 : ie.id) === e,
                                        priceOptions: le,
                                        shouldShowUpdatedPaymentModal: Ie,
                                        isEligibleForDiscount: ce,
                                        discountedPriceString: H
                                    }, e)
                                }))
                            })), (0, r.jsx)("div", {
                                children: fe && null != ie && null != me ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: je().selectPlanDivider
                                    }), (0, r.jsx)(P.Ji, {
                                        label: L.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(S.Z, {
                                            price: me.amount,
                                            currency: me.currency,
                                            intervalType: _ ? null : ie.interval,
                                            intervalCount: ie.intervalCount,
                                            isPrepaidPaymentSource: _e
                                        }),
                                        className: je().selectPlanTotalRow
                                    })]
                                }) : null
                            }), ye && (0, r.jsx)(c.Z, {
                                message: L.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, I.T4)(7.5345 * me.amount, xe.pK.HRK)
                                })
                            }), !_ && !Ie && k && (0, r.jsx)(c.Z, {
                                message: L.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: h.Z.getArticleURL(R.BhN.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function ke(e) {
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
                    h = m.selectedPlan;
                i = null != i ? i : y;
                n = null != n ? n : null == h ? void 0 : h.id;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != n && c.includes(n) ? (0, r.jsx)(Be, {
                        paymentSources: i,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: a,
                        shouldRenderUpdatedPaymentModal: f,
                        isTrial: p
                    }) : (0, r.jsx)(o.Button, {
                        disabled: !0,
                        children: L.Z.Messages.SELECT
                    }), l ? (0, r.jsx)(_e.Z, {
                        onClick: s
                    }) : null]
                })
            }

            function Be(e) {
                var t = e.onStepChange,
                    n = e.selectedPlanId,
                    a = e.isGift,
                    i = e.paymentSources,
                    s = e.shouldRenderUpdatedPaymentModal,
                    c = e.isTrial,
                    u = (0, l.e7)([m.Z], (function() {
                        return m.Z.getPremiumTypeSubscription()
                    })),
                    p = (0, be.H)(n, a).hasEntitlements,
                    y = null != u && null != u.paymentSourceId || Object.keys(i).length > 0 || p && !c,
                    h = s ? L.Z.Messages.NEXT : L.Z.Messages.SELECT,
                    b = d.h8.ADD_PAYMENT_STEPS;
                if (y) b = d.h8.REVIEW;
                else if ((0, _.nI)() && function() {
                        if (E.Z.getCurrentConfig({
                                location: "5f89bb_2"
                            }).experiment === E.R.BROWSER_AUTOFILL) return f.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        }).enabled;
                        return !1
                    }()) {
                    b = d.h8.AWAITING_BROWSER_CHECKOUT;
                    h = L.Z.Messages.CONTINUE_IN_BROWSER
                }
                return (0, r.jsx)(o.Button, {
                    onClick: function() {
                        return t(b)
                    },
                    children: h
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
                h = n(782786),
                _ = n(632826),
                b = n(837598),
                I = n(793461),
                g = n(615796),
                E = n(551778),
                v = n(386991),
                O = n(644144),
                N = n(694329),
                T = n(249052),
                P = n(467345),
                S = n(100749),
                A = n(818103),
                x = n(16703),
                M = n(900547),
                j = n(882211),
                C = n(128034),
                R = n(646875),
                L = n(111090),
                Z = n(185096),
                w = n(203600),
                G = n(2590),
                D = n(520453),
                k = n(473708),
                B = n(968071),
                U = n.n(B);

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
                    B = e.paymentSources,
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
                    ue = (0,
                        h.usePaymentContext)(),
                    de = ue.isEmbeddedIAP,
                    fe = ue.activeSubscription,
                    pe = ue.selectedSkuId,
                    me = ue.defaultPlanId,
                    ye = ue.selectedGiftStyle,
                    he = ue.setSelectedGiftStyle,
                    _e = ue.isPremium,
                    be = ue.giftRecipient,
                    Ie = (0, o.e7)([E.Z], (function() {
                        return E.Z.get(i)
                    }));
                s()(null != Ie, "Missing plan");
                var ge = [{
                        planId: Ie.id,
                        quantity: 1
                    }],
                    Ee = re === _.A.PURCHASING || re === _.A.COMPLETED,
                    ve = V || Ee,
                    Oe = H((0, S.ED)({
                        items: ge,
                        renewal: !1,
                        preventFetch: ve,
                        applyEntitlements: !0,
                        paymentSourceId: F.paymentSourceId,
                        currency: F.currency,
                        trialId: q,
                        metadata: ne
                    }), 2),
                    Ne = Oe[0],
                    Te = Oe[1],
                    Pe = H((0, S.ED)({
                        items: ge,
                        renewal: !0,
                        preventFetch: ve,
                        trialId: q,
                        paymentSourceId: F.paymentSourceId,
                        currency: F.currency,
                        metadata: ne
                    }), 2),
                    Se = Pe[0],
                    Ae = Pe[1],
                    xe = (0, O.a8)(be),
                    Me = null != Te ? Te : Ae,
                    je = (0, o.e7)([I.Z], (function() {
                        return I.Z.enabled
                    })),
                    Ce = F.paymentSourceId,
                    Re = (0, L.H)(Ie.id, V),
                    Le = Re.hasEntitlements,
                    Ze = Re.entitlements,
                    we = (0, N.Ap)(F.paymentSourceId),
                    Ge = (0, b.sE)(q, Ce, i),
                    De = (0, A.Wt)({
                        isTrial: le,
                        isGift: V,
                        selectedSkuId: pe
                    }),
                    ke = De.enabled,
                    Be = De.defaultToMonthlyPlan,
                    Ue = H(a.useState(null == Ne ? void 0 : Ne.subscriptionPeriodEnd), 2),
                    Fe = Ue[0],
                    He = Ue[1];
                a.useEffect((function() {
                    null == Fe && He(null == Ne ? void 0 : Ne.subscriptionPeriodEnd)
                }), [null == Ne ? void 0 : Ne.subscriptionPeriodEnd, Fe]);
                var Ye, We, Ke = a.useMemo((function() {
                        return (0, N.V7)({
                            skuId: pe,
                            isPremium: _e,
                            multiMonthPlans: [],
                            currentSubscription: fe,
                            isGift: V,
                            isEligibleForTrial: le,
                            defaultPlanId: me,
                            defaultToMonthlyPlan: Be
                        })
                    }), [pe, fe, V, me, _e, le, Be]),
                    Ve = (0, A.$g)(ke, Ne, Ie),
                    Xe = null === (t = null == Ne ? void 0 : Ne.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === w.Xh.PREMIUM_MONTH_TIER_2
                    }))) || void 0 === t ? void 0 : t.subscriptionPlanPrice;
                if (null != Me) {
                    var ze = Me.message;
                    Me.code === y.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (ze = k.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY);
                    return (0, r.jsx)(u.FormErrorBlock, {
                        children: ze
                    })
                }
                if (V) We = (0, r.jsx)(R.e9, {
                    paymentSourceId: F.paymentSourceId,
                    plan: Ie,
                    className: U().invoice,
                    isPrepaidPaymentSource: we,
                    isCustomGift: xe
                });
                else if (le && null != Ne) We = (0,
                    r.jsxs)("div", {
                    children: [(0, r.jsx)(x.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(x.PO, {
                        className: U().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: U().trialPriceLine,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: k.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: k.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, T.T4)(0, Ne.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: U().afterTrialPriceLine,
                            children: (0, r.jsx)(R.yT, {
                                invoice: Ne,
                                plan: Ie
                            })
                        })]
                    })]
                });
                else if (ce && null != Ne && null != Xe) We = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(x.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(x.PO, {
                        className: U().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: U().trialPriceLine,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: k.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: k.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, T.T4)(Ne.total, Ne.currency)
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: U().discountSubtext,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: k.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                    discountedPrice: (0, T.T4)(Ne.total, Ne.currency),
                                    regularPrice: (0, T.T4)(Xe, Ne.currency)
                                })
                            })
                        })]
                    })]
                });
                else {
                    if (null == Ne || null == Se || Ve) return (0, r.jsx)("div", {
                        className: U().spinnerWrapper,
                        children: (0, r.jsx)(u.Spinner, {})
                    });
                    le && Ne.subscriptionPeriodEnd !== Se.subscriptionPeriodEnd && (Ye = Ne.subscriptionPeriodEnd);
                    We = (0, r.jsxs)(x.PO, {
                        className: U().invoice,
                        children: [(0, r.jsx)(x.q9, {
                            children: k.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(R.Lu, {
                            invoice: Ne,
                            newPlan: Ie,
                            isPrepaidPaymentSource: we,
                            referralTrialOfferId: ie
                        }), we ? null : (0, r.jsx)(R.nd, {
                            renewalInvoice: Se,
                            isTrial: le,
                            priceOptions: F,
                            overrideRenewalDate: Ye,
                            trialFooterMessageOverride: ee,
                            hideSubscriptionDetails: ae
                        })]
                    })
                }
                var Je = l.M.EEA_COUNTRIES.has(g.Z.ipCountryCodeWithFallback),
                    Qe = function(e, t, n) {
                        var r = null,
                            a = null,
                            i = null;
                        if (e && null != t) {
                            var s = N.ZP.getIntervalForInvoice(t),
                                l = s.intervalType,
                                o = s.intervalCount,
                                c = (0, T.og)((0, T.T4)(t.total, t.currency), l, o),
                                u = null != n ? n : t.subscriptionPeriodEnd;
                            r = k.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: G.EYA.TERMS,
                                paidURL: G.EYA.PAID_TERMS,
                                rate: c,
                                renewalDate: u
                            });
                            a = U().trialCheckbox;
                            i = U().trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: a,
                            checkboxLabelClassname: i
                        }
                    }(null != le && le, Se, Ye),
                    $e = Qe.checkboxLabel,
                    qe = Qe.checkboxClassname,
                    et = Qe.checkboxLabelClassname,
                    tt = k.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: Ie.name
                    });
                V && !xe ? tt = k.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : V && xe ? tt = "" : (0, N.PV)(Ie.id) && (tt = N.ZP.getBillingReviewSubheader(null, Ie));
                return Ge ? null : (0, r.jsxs)("div", {
                    className: U().stepBody,
                    children: [null != te && (0, r.jsxs)("div", {
                        className: U().reviewWarningMessageContainer,
                        children: [(0, r.jsx)(v.Z, {
                            color: c.Z.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(u.Text, {
                            className: U().reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: te
                        })]
                    }), ke && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(x.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(C.O, {
                            isGift: V,
                            selectedGiftStyle: ye,
                            setSelectedGiftStyle: he,
                            planOptions: Ke,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: i,
                            subscriptionPeriodEnd: Fe,
                            showTotal: !1
                        }), (0, r.jsx)(x.KU, {})]
                    }), !le && (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: tt
                    }), xe && null != ye && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(j.Z, {
                            defaultAnimationState: P.SR.LOOP,
                            giftStyle: ye,
                            shouldAnimate: !0,
                            className: U().giftMainAnimation
                        }), (0, r.jsx)(Z.s, {
                            giftRecipient: be
                        })]
                    }), We, (0, r.jsxs)("div", {
                        className: U().paymentSourceWrapper,
                        children: [le ? (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: U().formTitle,
                            children: k.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: k.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(p.Z, {
                            paymentSources: Object.values(B),
                            selectedPaymentSourceId: Ce,
                            prependOption: Le && !le ? {
                                label: k.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: z,
                            hidePersonalInformation: je,
                            isTrial: le
                        }), Le && null == Ce ? (0, r.jsx)("div", {
                            className: U().paymentSourceOptionalWarning,
                            children: k.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: Ze.length
                            })
                        }) : null, ce ? null : (0, r.jsxs)(d.b, {
                            currencies: Y,
                            className: U().currencyWrapper,
                            children: [(0, r.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: k.Z.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.Z, {
                                selectedCurrency: F.currency,
                                currencies: Y,
                                onChange: W
                            })]
                        })]
                    }), (0, r.jsx)(M.Z, {
                        isActive: $,
                        ref: Q,
                        children: (0, r.jsx)(m.Z, {
                            onChange: J,
                            forceShow: !0,
                            checkboxLabel: $e,
                            checkboxClassname: qe,
                            checkboxLabelClassname: et,
                            finePrint: (0, r.jsx)(f.Z, {
                                hide: le || ce,
                                subscriptionPlan: Ie,
                                renewalInvoice: Se,
                                isGift: V,
                                paymentSourceType: null === (n = B[null != Ce ? Ce : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: de,
                                basePrice: (0, N.aS)(Ie.id, !1, V, F)
                            }),
                            showPricingLink: Ie.currency !== D.pK.USD,
                            showWithdrawalWaiver: Je,
                            disabled: Ee,
                            isTrial: le,
                            isDiscount: ce,
                            subscriptionPlan: Ie,
                            isGift: V
                        })
                    })]
                })
            }
        },
        682876: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => $
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
                h = n(54709),
                _ = n(652591),
                b = n(264628),
                I = n(644144),
                g = n(694329),
                E = n(632826),
                v = n(2590),
                O = n(203600);

            function N(e, t, n, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(r, a)
            }

            function T(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function s(e) {
                            N(i, r, a, s, l, "next", e)
                        }

                        function l(e) {
                            N(i, r, a, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
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

            function M(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = T((function(e) {
                    var t, n, r, a, i, l, o, u, d, N, T, P, M, j, C, R, L, Z, w, G, D, k, B, U, F, H, Y, W, K, V, X, z, J, Q, $, q, ee, te;
                    return x(this, (function(x) {
                        switch (x.label) {
                            case 0:
                                t = e.setPurchaseState, n = e.setHasAcceptedTerms, r = e.setIsSubmitting, a = e.setPurchaseError, i = e.hasRedirectURL, l = e.setHasRedirectURL, o = e.isGift, u = e.giftStyle, d = e.baseAnalyticsData, N = e.analyticsLocation, T = e.analyticsLocations, P = e.flowStartTime, M = e.subscriptionPlan, j = e.planGroup, C = e.trialId, R = e.priceOptions, L = e.paymentSource, Z = e.isPrepaidPaymentPastDue, w = e.openInvoiceId, G = e.premiumSubscription, D = e.onNext, k = e.metadata, B = e.sku, U = e.skuPricePreview, F = e.purchaseType, H = e.referralCode, Y = e.loadId, W = e.giftRecipient, K = e.customMessage;
                                t(E.A.PURCHASING);
                                n(!0);
                                r(!0);
                                f.Z.wait(p.fw);
                                a(null);
                                x.label = 1;
                            case 1:
                                x.trys.push([1, 15, 16, 17]);
                                _.default.track(v.rMx.PAYMENT_FLOW_COMPLETED, A(S({}, d), {
                                    duration_ms: Date.now() - P
                                }));
                                if (i) return [2];
                                if (F !== v.GZQ.ONE_TIME) return [3, 3];
                                s()(null != B, "SKU must exist and be fetched.");
                                s()(null != U, "SKUPricePreview must exist.");
                                return [4, (0, y.ZZ)(B.applicationId, B.id, {
                                    expectedAmount: U.amount,
                                    expectedCurrency: U.currency,
                                    paymentSource: L,
                                    loadId: Y
                                })];
                            case 2:
                                V = x.sent();
                                return [3, 14];
                            case 3:
                                s()(null != M, "Missing subscriptionPlan");
                                if (!o) return [3, 5];
                                if ("usd" === (X = (0, g.aS)(M.id, !1, !0, R)).currency && (null == L ? void 0 : L.type) === v.HeQ.GCASH) {
                                    z = new Error("Invalid USD currency for GCash");
                                    (0, b.q2)(z, {
                                        tags: {
                                            paymentSourceId: null !== (J = null == L ? void 0 : L.id) && void 0 !== J ? J : "",
                                            subscriptionPlanId: M.id,
                                            priceOptions: JSON.stringify(R)
                                        }
                                    })
                                }
                                Q = (0, I.a8)(W);
                                return [4, (0, y.ZZ)(O.RQ, M.skuId, {
                                    expectedAmount: X.amount,
                                    expectedCurrency: X.currency,
                                    paymentSource: L,
                                    subscriptionPlanId: M.id,
                                    isGift: !0,
                                    giftStyle: u,
                                    loadId: Y,
                                    recipientId: Q ? null == W ? void 0 : W.id : void 0,
                                    customMessage: Q ? K : void 0
                                })];
                            case 4:
                                V = x.sent();
                                return [3, 14];
                            case 5:
                                return Z && null != w && null != L && null != G ? v.Uk1.has(L.type) ? [4, (0, c.G)(G, w, L, R.currency)] : [3, 7] : [3, 10];
                            case 6:
                                $ = x.sent();
                                return [3, 9];
                            case 7:
                                return [4, (0, c.Mg)(G, {
                                    paymentSource: L,
                                    currency: R.currency
                                }, T, N)];
                            case 8:
                                $ = x.sent();
                                x.label = 9;
                            case 9:
                                V = $;
                                return [3, 14];
                            case 10:
                                return null == G ? [3, 12] : [4, (0, c.Mg)(G, {
                                    items: (0, g.al)(G, M.id, 1, new Set(j)),
                                    paymentSource: L,
                                    currency: R.currency
                                }, T, N)];
                            case 11:
                                V = x.sent();
                                return [3, 14];
                            case 12:
                                return [4, (0, m.Ld)({
                                    planId: M.id,
                                    currency: R.currency,
                                    paymentSource: L,
                                    trialId: C,
                                    metadata: k,
                                    referralCode: H,
                                    loadId: Y
                                })];
                            case 13:
                                V = x.sent();
                                x.label = 14;
                            case 14:
                                if (V.redirectConfirmation) {
                                    l(null != V.redirectURL);
                                    return [2]
                                }
                                _.default.track(v.rMx.PAYMENT_FLOW_SUCCEEDED, A(S({}, d), {
                                    duration_ms: Date.now() - P,
                                    payment_source_type: null == L ? void 0 : L.type
                                }));
                                t(E.A.COMPLETED);
                                "subscription" in V ? q = null != V.subscription ? h.Z.createFromServer(V.subscription) : null : "entitlements" in V && (ee = null != V.entitlements ? V.entitlements : void 0);
                                D(q, ee);
                                return [3, 17];
                            case 15:
                                te = x.sent();
                                t(E.A.FAIL);
                                a(te);
                                _.default.track(v.rMx.PAYMENT_FLOW_FAILED, A(S({}, d), {
                                    payment_source_id: null == L ? void 0 : L.id,
                                    payment_source_type: null == L ? void 0 : L.type,
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
            var C = n(300615),
                R = n(837598),
                L = n(856281),
                Z = n(909365),
                w = n(908434),
                G = n(107364),
                D = n(499171),
                k = n(509897),
                B = n(111090),
                U = n(820610),
                F = n(787257),
                H = n.n(F);

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function W(e, t, n, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(r, a)
            }

            function K(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function s(e) {
                            W(i, r, a, s, l, "next", e)
                        }

                        function l(e) {
                            W(i, r, a, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function V(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        V(e, t, n[t])
                    }))
                }
                return e
            }

            function z(e, t) {
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

            function J(e, t) {
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
                    if ("string" == typeof e) return Y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Q = function(e, t) {
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
                                        if (!(a = s.trys,
                                                a = a.length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
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

            function $(e) {
                var t = e.premiumSubscription,
                    n = e.setPurchaseState,
                    i = e.onBack,
                    f = e.onNext,
                    p = e.legalTermsNodeRef,
                    m = e.flashLegalTerms,
                    y = e.invoiceError,
                    h = e.planError,
                    b = e.onPurchaseError,
                    I = e.baseAnalyticsData,
                    O = e.flowStartTime,
                    N = e.isGift,
                    T = void 0 !== N && N,
                    P = e.giftStyle,
                    S = e.customGiftMessage,
                    A = e.trialId,
                    x = e.planGroup,
                    j = e.analyticsLocation,
                    F = e.purchaseTokenAuthState,
                    Y = e.openInvoiceId,
                    W = e.metadata,
                    V = e.backButtonEligible,
                    $ = e.disablePurchase,
                    q = e.isTrial,
                    ee = void 0 !== q && q,
                    te = (0,
                        d.usePaymentContext)(),
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
                    he = (0, R.sE)(A, re.paymentSourceId, ye),
                    _e = (0, l.e7)([L.Z], (function() {
                        return L.Z.popupCallbackCalled
                    })),
                    be = (0, u.Z)().analyticsLocations,
                    Ie = null != le ? oe[le] : null,
                    ge = J(a.useState(he), 2),
                    Ee = ge[0],
                    ve = ge[1],
                    Oe = J(a.useState(!1), 2),
                    Ne = Oe[0],
                    Te = Oe[1],
                    Pe = (0, B.H)(ye, T).hasEntitlements,
                    Se = (0, g.Ap)(re.paymentSourceId),
                    Ae = Pe || he,
                    xe = (0, D.U)(),
                    Me = null,
                    je = null;
                if (se === v.GZQ.ONE_TIME) {
                    s()(null != ce, "SKU must be selected for one-time purchases");
                    var Ce;
                    Me = null !== (Ce = ue[ce]) && void 0 !== Ce ? Ce : null;
                    s()(null != Me, "SKU must exist and be fetched.");
                    var Re = de[ce],
                        Le = null != le ? le : w.c;
                    je = null != Re ? Re[Le] : null
                }
                var Ze, we = (Ze = K((function() {
                    return Q(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, M({
                                    setPurchaseState: n,
                                    setHasAcceptedTerms: ae,
                                    setIsSubmitting: ve,
                                    setPurchaseError: ie,
                                    hasRedirectURL: Ne,
                                    setHasRedirectURL: Te,
                                    isGift: T,
                                    giftStyle: P,
                                    baseAnalyticsData: I,
                                    analyticsLocation: j,
                                    analyticsLocations: be,
                                    flowStartTime: O,
                                    subscriptionPlan: ne,
                                    planGroup: x,
                                    trialId: A,
                                    priceOptions: re,
                                    paymentSource: Ie,
                                    isPrepaidPaymentPastDue: xe,
                                    openInvoiceId: Y,
                                    premiumSubscription: t,
                                    onNext: f,
                                    metadata: W,
                                    sku: Me,
                                    skuPricePreview: je,
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
                        var e = K((function() {
                            var e;
                            return Q(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!0 !== _e) return [3, 6];
                                        t.label = 1;
                                    case 1:
                                        t.trys.push([1, 3, 4, 5]);
                                        return null == L.Z.redirectedPaymentId ? [2] : [4, (0, c.OP)(L.Z.redirectedPaymentId)];
                                    case 2:
                                        t.sent();
                                        _.default.track(v.rMx.PAYMENT_FLOW_SUCCEEDED, z(X({}, I), {
                                            duration_ms: Date.now() - O,
                                            payment_source_type: null == Ie ? void 0 : Ie.type
                                        }));
                                        n(E.A.COMPLETED);
                                        f();
                                        return [3, 5];
                                    case 3:
                                        e = t.sent();
                                        n(E.A.FAIL);
                                        b(e);
                                        _.default.track(v.rMx.PAYMENT_FLOW_FAILED, z(X({}, I), {
                                            payment_source_id: le,
                                            payment_source_type: null == Ie ? void 0 : Ie.type,
                                            duration_ms: Date.now() - O
                                        }));
                                        return [3, 5];
                                    case 4:
                                        ve(!1);
                                        (0, c.K2)();
                                        return [7];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return F !== Z.I.SUCCESS ? [3, 8] : [4, we()];
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
                }), [_e]);
                a.useEffect((function() {
                    he && !T && null == t && we()
                }), [he, T, t]);
                var Ge = null != Y || se === v.GZQ.ONE_TIME;
                return he ? null : (0, r.jsxs)(o.ModalFooter, {
                    align: G.Z.Align.CENTER,
                    children: [(0, r.jsx)(U.Z, {
                        legalTermsNodeRef: p,
                        invoiceError: y,
                        planError: h,
                        disablePurchase: $,
                        flashLegalTerms: m,
                        isSubmitting: Ee,
                        premiumSubscription: t,
                        isGift: T,
                        planGroup: x,
                        isPrepaid: Se,
                        isTrial: ee,
                        makePurchase: we,
                        needsPaymentSource: null == Ie && !Ae
                    }), (0, r.jsx)(C.Z, {}), V && !Ge ? (0, r.jsx)("div", {
                        className: H().back,
                        children: (0, r.jsx)(k.Z, {
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
                            children: (n = e, n.replace(/[0-9.,]+ ?kb/g, (function(e) {
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
                    h = e.errors,
                    _ = e.disabled,
                    b = void 0 !== _ && _,
                    I = e.hideDivider,
                    g = void 0 !== I && I,
                    E = e.showBorder,
                    v = void 0 !== E && E,
                    O = e.borderType,
                    N = e.hasBackground,
                    T = void 0 !== N && N,
                    P = e.forcedDivider,
                    S = void 0 !== P && P,
                    A = e.showPremiumIcon,
                    x = void 0 !== A && A;
                return (0, r.jsx)("div", {
                    className: i()(d().customizationSection, y, (t = {}, f(t, d().disabled, b), f(t, d().hideDivider, g),
                        f(t, d().showBorder, v), f(t, d().withDivider, S), t)),
                    children: (0, r.jsxs)(c.Z, {
                        className: d().customizationSectionBorder,
                        backgroundClassName: d().customizationSectionBackground,
                        isShown: v,
                        type: O,
                        hasBackground: T,
                        children: [(0, r.jsxs)(s.FormTitle, {
                            className: d().title,
                            id: l,
                            children: [n, x && (0, r.jsx)(o.Z, {}), a]
                        }), null != u ? (0, r.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: d().sectionDescription,
                            children: u
                        }) : null, m, null != h && (0, r.jsx)(p, {
                            errors: h
                        })]
                    })
                })
            }
        }
    }
]);