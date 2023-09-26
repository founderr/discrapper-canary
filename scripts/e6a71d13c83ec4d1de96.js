"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43814], {
        415324: (e, t, n) => {
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
            n.d(t, {
                J: () => b
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

            function b(e) {
                var t = e.analyticsData,
                    n = e.initialPlanId,
                    r = e.breadcrumbSteps,
                    p = e.handleStepChange,
                    b = e.referralTrialOfferId,
                    h = e.onReturn,
                    _ = (0,
                        c.usePaymentContext)(),
                    I = _.contextMetadata,
                    O = _.step,
                    g = _.paymentSources,
                    E = _.paymentSourceId,
                    v = _.setPaymentSourceId,
                    S = _.purchaseError,
                    N = _.setPurchaseError,
                    P = _.purchaseErrorBlockRef,
                    T = _.paymentAuthenticationState,
                    A = _.isGift,
                    M = _.selectedSkuId,
                    j = y(m({}, (0, l.fL)()), {
                        paymentSources: g,
                        paymentSourceId: E,
                        setPaymentSourceId: v,
                        purchaseError: S,
                        setPurchaseError: N,
                        purchaseErrorBlockRef: P,
                        paymentAuthenticationState: T
                    }),
                    x = (0, s.N)(b),
                    C = !A && null != x && null != M && f.nG[x.trial_id].skus.includes(M),
                    R = null != h ? h : function() {
                        var e = Object.values(g).length < 1 && null == n ? u.h8.PLAN_SELECT : u.h8.REVIEW;
                        p(e, {
                            trackedFromStep: u.h8.PAYMENT_TYPE
                        })
                    };
                a()(O, "Step should be set here");
                var L = (0, i.Z)((function() {
                    return Date.now()
                }), [O]);
                return (0, l.vP)({
                    paymentModalArgs: j,
                    initialStep: u.h8.PAYMENT_TYPE,
                    prependSteps: [u.h8.PROMOTION_INFO],
                    appendSteps: [u.h8.REVIEW, u.h8.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: O,
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
                            children: (0, r.jsx)(s.Button, {
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
                b = n.n(y);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n, r, a, i, s) {
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
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e, t) {
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
                var e, t, n = I(a.useState(!1), 2),
                    s = n[0],
                    l = n[1],
                    o = (t = (e = function() {
                        return O(this, (function(e) {
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
                                _(i, r, a, s, l, "next", e)
                            }

                            function l(e) {
                                _(i, r, a, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }), function() {
                        return t.apply(this, arguments)
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(m.C3, {
                        children: (0, r.jsx)(d, {
                            className: b().body,
                            isEmailResent: s,
                            resendEmail: o
                        })
                    }), (0, r.jsx)(m.O3, {
                        children: (0, r.jsx)(f, {})
                    })]
                })
            }
        },
        28648: (e, t, n) => {
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
            n.d(t, {
                Z: () => O,
                U: () => _
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
                b = n(516178),
                h = n.n(b);

            function _() {
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
            const O = function(e) {
                var t = e.fromBoostCancelModal,
                    n = e.className,
                    a = (0, p.Z)();
                if (!_()) return null;
                l()(null != a, "Subscription billing country should not be null");
                return (0, r.jsxs)("div", {
                    className: i()(h().noticeRoot, n),
                    children: [(0, r.jsx)("div", {
                        className: h().iconContainer,
                        children: (0, r.jsx)(o.Z, {
                            className: h().infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: h().text,
                        children: I(a, t).format({
                            helpCenterLink: c.Z.getArticleURL(m.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        509897: (e, t, n) => {
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
        556663: (e, t, n) => {
            n.d(t, {
                O: () => Me,
                M: () => je
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
                b = n(348592),
                h = n(120415),
                _ = n(694329),
                I = n(249052),
                O = n(471450),
                g = n(470387),
                E = n(165666),
                v = n(717035),
                S = n(668900),
                N = n(16703),
                P = n(367095),
                T = n(281808),
                A = n(855483),
                M = n(756510),
                j = n(369263),
                x = n(382060),
                C = n(2590),
                R = n(473708),
                L = n(22865),
                Z = n.n(L);

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function G(e, t) {
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
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = (0, x.kt)({
                id: "1",
                type: C.d4z.DM
            });

            function D(e) {
                var t = e.sectionTitle,
                    n = e.errors,
                    i = e.onTextChange,
                    s = e.pendingText,
                    l = e.placeholder,
                    c = e.currentText,
                    u = e.disabled,
                    d = void 0 !== u && u,
                    f = G(a.useState(null != s ? s : c), 2),
                    p = f[0],
                    m = f[1],
                    y = G(a.useState((0, A.JM)(p)), 2),
                    b = y[0],
                    h = y[1],
                    _ = a.useRef(!1);
                a.useEffect((function() {
                    if (void 0 === s) {
                        var e = (0, A.JM)(c);
                        m(c);
                        h(e)
                    }
                }), [s, c]);
                return (0, r.jsx)("div", {
                    className: Z().body,
                    children: (0, r.jsxs)(j.Z, {
                        title: t,
                        errors: n,
                        disabled: d,
                        children: [(0, r.jsx)(M.Z, {
                            innerClassName: Z().textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, t, n) {
                                if (t !== p) {
                                    m(t);
                                    h(n);
                                    i(t)
                                }
                            },
                            placeholder: l,
                            channel: k,
                            textValue: p,
                            richValue: b,
                            type: T.I.CUSTOM_GIFT,
                            onBlur: function() {
                                _.current = !1
                            },
                            onFocus: function() {
                                _.current = !0
                            },
                            focused: _.current,
                            onSubmit: function() {
                                return new Promise((function(e) {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                }))
                            }
                        }), (0, r.jsx)(o.HiddenVisually, {
                            children: R.Z.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
            var B = n(386991),
                U = n(69427),
                F = n(621270),
                H = n(882211),
                Y = n(220800),
                W = n.n(Y);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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

            function X(e, t) {
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

            function z(e, t) {
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
                    if ("string" == typeof e) return K(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return K(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var J = a.forwardRef((function(e, t) {
                    var n, i = e.isSelected,
                        s = e.giftStyle,
                        l = e.setSelectedGiftStyle,
                        c = e.onFocus,
                        u = e.onBlur,
                        d = e.shouldAnimate,
                        f = void 0 === d || d,
                        p = z(a.useState(!1), 2),
                        m = p[0],
                        y = p[1];
                    switch (s) {
                        case U.Cj.SNOWGLOBE:
                            n = R.Z.Messages.SEASONAL_GIFTING_OPTION_SNOWGLOBE;
                            break;
                        case U.Cj.BOX:
                            n = R.Z.Messages.SEASONAL_GIFTING_OPTION_BOX;
                            break;
                        case U.Cj.CUP:
                            n = R.Z.Messages.SEASONAL_GIFTING_OPTION_CUP;
                            break;
                        default:
                            n = R.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                    }
                    var b = (0, o.useRadioItem)({
                        isSelected: i,
                        label: n
                    });
                    return (0, r.jsx)(o.Clickable, X(function(e) {
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
                    }({
                        innerRef: t,
                        className: W().clickable,
                        onClick: function() {
                            return l(s)
                        }
                    }, b), {
                        onFocus: c,
                        onBlur: u,
                        onMouseEnter: function() {
                            return y(!0)
                        },
                        onMouseLeave: function() {
                            return y(!1)
                        },
                        children: (0, r.jsx)(H.Z, {
                            giftStyle: s,
                            className: i ? W().customGiftBoxHighlighted : W().customGiftBox,
                            shouldAnimate: (m || i) && f
                        })
                    }))
                })),
                $ = n(233863),
                Q = n.n($);

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ee(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        ee(e, t, n[t])
                    }))
                }
                return e
            }

            function ne(e, t) {
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

            function re(e, t) {
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
                    if ("string" == typeof e) return q(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return q(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ae = [U.Cj.BOX, U.Cj.CUP, U.Cj.SNOWGLOBE],
                ie = [U.Cj.STANDARD_BOX, U.Cj.CAKE, U.Cj.COFFEE, U.Cj.CHEST],
                se = function() {
                    return (0, r.jsxs)("div", {
                        className: Q().giftBoxHeaderContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: Q().giftBoxHeaderText,
                            children: R.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }), (0, r.jsx)(o.Tooltip, {
                            text: R.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return (0, r.jsx)(o.Clickable, ne(te({}, e), {
                                    className: Q().infoIconContainer,
                                    "aria-label": R.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                                    children: (0, r.jsx)(B.Z, {
                                        className: Q().infoIcon
                                    })
                                }))
                            }
                        })]
                    })
                },
                le = function(e) {
                    var t = e.selectedGiftStyle,
                        n = e.setSelectedGiftStyle,
                        i = (0, u.usePaymentContext)().giftRecipient,
                        s = re(a.useState(!1), 2),
                        l = s[0],
                        c = s[1],
                        d = a.useRef(null),
                        f = (0, o.useRadioGroup)({
                            orientation: "horizontal"
                        }),
                        p = F.ZP.getCurrentConfig({
                            location: "premiumGiftSelect_GiftAnimationOptions"
                        }).enabled,
                        m = (0, y.a8)(i),
                        b = null;
                    p ? b = ae : m && (b = ie);
                    return (0, r.jsxs)("div", {
                        children: [p && (0, r.jsx)(se, {}), m && null != t && (0, r.jsx)(H.Z, {
                            giftStyle: t,
                            shouldAnimate: !0,
                            className: Q().giftMainAnimation
                        }), (0, r.jsx)("div", ne(te({
                            tabIndex: null != t || l ? void 0 : 0,
                            onFocus: function(e) {
                                var t;
                                e.target === e.currentTarget && (null === (t = d.current) || void 0 === t || t.focus())
                            },
                            className: Q().giftBoxOptionContainer,
                            "aria-label": R.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }, f), {
                            children: null != b && b.map((function(e, a) {
                                return (0, r.jsx)(J, {
                                    isSelected: t === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: n,
                                    ref: 0 === a ? d : null,
                                    onFocus: function() {
                                        return c(!0)
                                    },
                                    onBlur: function() {
                                        return c(!1)
                                    },
                                    shouldAnimate: !1
                                }, e)
                            }))
                        })), (0, r.jsx)("div", {
                            className: Q().selectPlanDivider
                        })]
                    })
                },
                oe = n(509897),
                ce = n(111090),
                ue = n(294184),
                de = n.n(ue),
                fe = n(795308),
                pe = n(384411),
                me = n(203600),
                ye = n(736101),
                be = n.n(ye);

            function he(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _e(e) {
                var t = e.premiumSubscription,
                    n = e.planId,
                    a = e.selectPlan,
                    i = e.selected,
                    c = e.isGift,
                    d = e.priceOptions,
                    f = e.shouldShowUpdatedPaymentModal,
                    m = (0, l.e7)([pe.default], (function() {
                        return pe.default.locale
                    })),
                    b = (0, l.e7)([p.Z], (function() {
                        return p.Z.get(n)
                    })),
                    h = (0, u.usePaymentContext)().giftRecipient,
                    O = (0, y.a8)(h);
                s()(null != b, "Missing subscriptionPlan");
                var g, E = null != t && t.planId === n,
                    v = E || n === me.Xh.PREMIUM_MONTH_TIER_2 && null != t && [me.Xh.PREMIUM_YEAR_TIER_0, me.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    S = me.nH[n],
                    N = (0, _.aS)(n, !1, c, d),
                    P = (0, _.Ap)(d.paymentSourceId),
                    T = null != S && !f,
                    A = b.interval === me.rV.YEAR ? R.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : R.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    M = function() {
                        return b.interval === me.rV.YEAR && null != t || T && !E ? b.interval === me.rV.YEAR && null != t ? (0, r.jsxs)("span", {
                            className: be().planOptionMonthsFree,
                            children: ["(", R.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                        }) : T && !E ? null != S && (0, r.jsx)(o.Text, {
                            tag: "span",
                            variant: "eyebrow",
                            color: "always-white",
                            className: be().planOptionDiscount,
                            children: R.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                                discount: (0, I.T3)(m, S / 100)
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
                    onClick: v ? void 0 : function() {
                        return a(n)
                    },
                    className: de()(be().planOptionClickableContainer, (g = {}, he(g, be().selectedPlan, O && i), he(g, be().selectionBox, O), g)),
                    children: [(0, r.jsxs)("div", {
                        className: de()(be().planOption, he({}, be().planOptionDisabled, v)),
                        children: [(0, r.jsxs)("div", {
                            className: be().planOptionClickable,
                            children: [!O && (0, r.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: i,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: fe.Z.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: be().planOptionCheckbox
                            }), function() {
                                var e;
                                return (0, r.jsxs)("div", {
                                    children: [(0, r.jsxs)("div", {
                                        className: de()(be().planOptionInterval, (e = {}, he(e, be().optionSelected, i || O), he(e, be().updatedOptionSelected, f && (i || O)), e)),
                                        children: [(0, _.L7)(b.interval, c, P, b.intervalCount, O), O && M()]
                                    }), O && (0, r.jsx)("div", {
                                        className: be().planOneTimeCost,
                                        children: R.Z.Messages.ONE_TIME_CHARGE.format({
                                            currencyAmount: (0, I.T4)(N.amount, N.currency)
                                        })
                                    })]
                                })
                            }(), E && (0, r.jsxs)("span", {
                                className: be().planOptionCurrentPlan,
                                children: ["(", R.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !O && M()]
                        }), f ? (0, r.jsx)("div", {
                            className: de()(he({}, be().optionPriceSelected, i)),
                            children: R.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (0, I.T4)(0, N.currency, {
                                    maximumFractionDigits: 0
                                })
                            })
                        }) : (0, r.jsx)("div", {
                            className: de()(he({}, be().optionSelected, i || O)),
                            children: (0, I.T4)(N.amount, N.currency)
                        })]
                    }), f && (0, r.jsx)("div", {
                        className: be().planOptionSubtextContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: i ? "text-normal" : "interactive-normal",
                            className: be().planOptionSubtext,
                            children: A.format({
                                price: (0,
                                    I.T4)(N.amount, N.currency)
                            })
                        })
                    })]
                })
            }
            var Ie = n(185096),
                Oe = n(520453),
                ge = n(710431),
                Ee = n.n(ge);

            function ve(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Se(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Se(e, t, n[t])
                    }))
                }
                return e
            }

            function Pe(e, t) {
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

            function Te(e, t) {
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
                    if ("string" == typeof e) return ve(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ve(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ae(e, t) {
                var n = R.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                    r = R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                    a = function() {
                        switch (e.interval) {
                            case me.rV.YEAR:
                                return n;
                            case me.rV.MONTH:
                            default:
                                return r
                        }
                    }(),
                    i = e.skuId;
                switch (t) {
                    case me.Si.TIER_0:
                        switch (i) {
                            case me.Si.TIER_1:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                            case me.Si.TIER_2:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                            default:
                                return a
                        }
                    case me.Si.TIER_1:
                        switch (i) {
                            case me.Si.TIER_0:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                            case me.Si.TIER_2:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                            default:
                                return a
                        }
                    case me.Si.TIER_2:
                        switch (i) {
                            case me.Si.TIER_0:
                            case me.Si.TIER_1:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                            case me.Si.TIER_2:
                                return e.interval === me.rV.MONTH ? R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                    numFreeGuildSubscriptions: me.cb
                                }) : a;
                            default:
                                return a
                        }
                    default:
                        return a
                }
            }

            function Me(e) {
                var t = e.premiumSubscription,
                    n = e.skuId,
                    i = e.selectedPlanId,
                    d = e.setSelectedPlanId,
                    f = e.isGift,
                    m = void 0 !== f && f,
                    h = e.isSeasonalGift,
                    g = void 0 !== h && h,
                    T = e.selectedGiftStyle,
                    A = e.setSelectedGiftStyle,
                    M = e.priceOptions,
                    j = e.planOptions,
                    x = e.eligibleForMultiMonthPlans,
                    L = e.referralTrialOfferId,
                    Z = e.subscriptionPeriodEnd,
                    w = e.showTotal,
                    G = void 0 === w || w,
                    k = e.customGiftMessage,
                    B = e.setCustomGiftMessage,
                    U = (0, u.usePaymentContext)(),
                    F = U.activeSubscription,
                    H = U.setSelectedPlanId,
                    Y = U.selectedSkuId,
                    W = U.giftRecipient,
                    K = U.selectedPlan,
                    V = U.priceOptions,
                    X = (0, y.a8)(W);
                n = null != n ? n : Y;
                t = null != t ? t : F;
                s()(void 0 !== t, "should not be undefined");
                var z = Te((0, l.Wu)([p.Z], (function() {
                        return [null != t ? p.Z.get(t.planId) : null, null != i ? p.Z.get(i) : null]
                    })), 2),
                    J = z[0],
                    $ = z[1],
                    Q = (0, v.N)(L),
                    q = null == Q ? void 0 : Q.subscription_trial,
                    ee = null != $ ? $ : K,
                    te = a.useCallback((function(e) {
                        null != d ? d(e) : H(e)
                    }), [d, H]),
                    ne = null != M ? M : V;
                s()(null != ne, "Price option has to be set");
                var re = null != Q && me.nG[Q.trial_id].skus.includes(n);
                a.useEffect((function() {
                    x && O.ZP.trackExposure({
                        location: "5f89bb_1"
                    })
                }), [x]);
                var ae = null != (null == ee ? void 0 : ee.id) && j.includes(ee.id);
                a.useEffect((function() {
                    if (!ae)
                        if (null == J || m) te(j[0]);
                        else if (null != J) {
                        var e = j.find((function(e) {
                            return e !== J.id
                        }));
                        null != e && te(e)
                    }
                }), [ae, m, j, J, te]);
                var ie = !X && (m || !re) && ae && G,
                    se = (0, o.useRadioGroup)(),
                    oe = null != (null == ee ? void 0 : ee.id) ? (0, _.aS)(ee.id, !1, m, ne) : void 0,
                    ce = "HR" === (0, E.Z)().ipCountryCode && null != oe && oe.currency === Oe.pK.EUR,
                    ue = (0, _.Ap)(ne.paymentSourceId),
                    de = (null == q ? void 0 : q.interval) === me.rV.DAY ? R.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : R.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    fe = !m && null != q && re && null != Z;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: X ? Ee().stepBodyCustomGift : Ee().stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: X ? Ee().bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(S.Z, {
                                fromBoostCancelModal: !1,
                                className: Ee().legacyPricingNotice
                            }), (g || X) && null != T && (0, r.jsx)(le, {
                                selectedGiftStyle: T,
                                setSelectedGiftStyle: A
                            })]
                        }), (0, r.jsxs)("div", {
                            className: X ? Ee().bodyColumnRight : void 0,
                            children: [X && (0, r.jsx)(Ie.s, {
                                giftRecipient: W
                            }), function() {
                                if (X && null != B) return (0, r.jsx)(D, {
                                    sectionTitle: R.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: function(e) {
                                        return B(e)
                                    },
                                    pendingText: k,
                                    currentText: k
                                })
                            }(), null != J && !m && (0, r.jsx)("div", {
                                className: Ee().bodyText,
                                children: Ae(J, n)
                            }), X ? (0, r.jsx)(o.FormTitle, {
                                children: R.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : fe ? (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    className: Ee().trialPlanSelectHeader,
                                    children: R.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: Z,
                                        trialPeriod: de
                                    })
                                }), (0, r.jsx)("hr", {
                                    className: Ee().planSelectSeparator
                                })]
                            }) : (0, r.jsx)("div", {
                                className: Ee().selectPlanChooseTitle,
                                children: R.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            }), (0, r.jsx)("div", Pe(Ne({}, se), {
                                children: j.map((function(e) {
                                    return (0, r.jsx)(_e, {
                                        planId: e,
                                        isGift: m,
                                        premiumSubscription: m ? null : null != t ? t : null,
                                        selectPlan: te,
                                        selected: (null == ee ? void 0 : ee.id) === e,
                                        priceOptions: ne,
                                        shouldShowUpdatedPaymentModal: fe
                                    }, e)
                                }))
                            })), (0, r.jsx)("div", {
                                children: ie && null != ee && null != oe ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: Ee().selectPlanDivider
                                    }), (0, r.jsx)(N.Ji, {
                                        label: R.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(P.Z, {
                                            price: oe.amount,
                                            currency: oe.currency,
                                            intervalType: m ? null : ee.interval,
                                            intervalCount: ee.intervalCount,
                                            isPrepaidPaymentSource: ue
                                        }),
                                        className: Ee().selectPlanTotalRow
                                    })]
                                }) : null
                            }), ce && (0, r.jsx)(c.Z, {
                                message: R.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, I.T4)(7.5345 * oe.amount, Oe.pK.HRK)
                                })
                            }), !m && !fe && G && (0, r.jsx)(c.Z, {
                                message: R.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: b.Z.getArticleURL(C.BhN.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function je(e) {
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
                    m = (0,
                        u.usePaymentContext)(),
                    y = m.paymentSources,
                    b = m.selectedPlan;
                i = null != i ? i : y;
                n = null != n ? n : null == b ? void 0 : b.id;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != n && c.includes(n) ? (0, r.jsx)(xe, {
                        paymentSources: i,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: a,
                        shouldRenderUpdatedPaymentModal: f,
                        isTrial: p
                    }) : (0, r.jsx)(o.Button, {
                        disabled: !0,
                        children: R.Z.Messages.SELECT
                    }), l ? (0, r.jsx)(oe.Z, {
                        onClick: s
                    }) : null]
                })
            }

            function xe(e) {
                var t = e.onStepChange,
                    n = e.selectedPlanId,
                    a = e.isGift,
                    i = e.paymentSources,
                    s = e.shouldRenderUpdatedPaymentModal,
                    c = e.isTrial,
                    u = (0, l.e7)([m.Z], (function() {
                        return m.Z.getPremiumTypeSubscription()
                    })),
                    p = (0, ce.H)(n, a).hasEntitlements,
                    y = null != u && null != u.paymentSourceId || Object.keys(i).length > 0 || p && !c,
                    b = s ? R.Z.Messages.NEXT : R.Z.Messages.SELECT,
                    _ = d.h8.ADD_PAYMENT_STEPS;
                if (y) _ = d.h8.REVIEW;
                else if ((0, h.nI)() && function() {
                        if (g.Z.getCurrentConfig({
                                location: "5f89bb_2"
                            }).experiment === g.R.BROWSER_AUTOFILL) return f.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        }).enabled;
                        return !1
                    }()) {
                    _ = d.h8.AWAITING_BROWSER_CHECKOUT;
                    b = R.Z.Messages.CONTINUE_IN_BROWSER
                }
                return (0, r.jsx)(o.Button, {
                    onClick: function() {
                        return t(_)
                    },
                    children: b
                })
            }
        },
        111090: (e, t, n) => {
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
                                variant: "text-md/normal",
                                children: s.ZP.getName(t)
                            }), (0, r.jsx)(a.Heading, {
                                className: c().giftRecipientName,
                                variant: "text-md/normal",
                                children: s.ZP.getUserTag(t)
                            })]
                        })]
                    })
                }
        },
        16097: (e, t, n) => {
            n.d(t, {
                Z: () => F
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
                b = n(782786),
                h = n(632826),
                _ = n(837598),
                I = n(793461),
                O = n(615796),
                g = n(551778),
                E = n(386991),
                v = n(644144),
                S = n(694329),
                N = n(249052),
                P = n(100749),
                T = n(818103),
                A = n(16703),
                M = n(900547),
                j = n(882211),
                x = n(556663),
                C = n(646875),
                R = n(111090),
                L = n(185096),
                Z = n(2590),
                w = n(520453),
                G = n(473708),
                k = n(968071),
                D = n.n(k);

            function B(e, t) {
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
                    if ("string" == typeof e) return B(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e) {
                var t, n = e.selectedPlanId,
                    i = e.paymentSources,
                    k = e.priceOptions,
                    B = e.currencies,
                    F = e.onCurrencyChange,
                    H = e.isGift,
                    Y = void 0 !== H && H,
                    W = e.onPaymentSourceChange,
                    K = e.handlePaymentSourceAdd,
                    V = e.setHasAcceptedTerms,
                    X = e.legalTermsNodeRef,
                    z = e.hasLegalTermsFlash,
                    J = e.trialId,
                    $ = e.trialFooterMessageOverride,
                    Q = e.reviewWarningMessage,
                    q = e.metadata,
                    ee = e.purchaseState,
                    te = e.hideSubscriptionDetails,
                    ne = e.referralTrialOfferId,
                    re = e.isTrial,
                    ae = void 0 !== re && re,
                    ie = (0,
                        b.usePaymentContext)(),
                    se = ie.isEmbeddedIAP,
                    le = ie.activeSubscription,
                    oe = ie.selectedSkuId,
                    ce = ie.defaultPlanId,
                    ue = ie.selectedGiftStyle,
                    de = ie.setSelectedGiftStyle,
                    fe = ie.isPremium,
                    pe = ie.giftRecipient,
                    me = (0, o.e7)([g.Z], (function() {
                        return g.Z.get(n)
                    }));
                s()(null != me, "Missing plan");
                var ye = [{
                        planId: me.id,
                        quantity: 1
                    }],
                    be = ee === h.A.PURCHASING || ee === h.A.COMPLETED,
                    he = Y || be,
                    _e = U((0, P.ED)({
                        items: ye,
                        renewal: !1,
                        preventFetch: he,
                        applyEntitlements: !0,
                        paymentSourceId: k.paymentSourceId,
                        currency: k.currency,
                        trialId: J,
                        metadata: q
                    }), 2),
                    Ie = _e[0],
                    Oe = _e[1],
                    ge = U((0, P.ED)({
                        items: ye,
                        renewal: !0,
                        preventFetch: he,
                        trialId: J,
                        paymentSourceId: k.paymentSourceId,
                        currency: k.currency,
                        metadata: q
                    }), 2),
                    Ee = ge[0],
                    ve = ge[1],
                    Se = (0, v.a8)(pe),
                    Ne = null != Oe ? Oe : ve,
                    Pe = (0, o.e7)([I.Z], (function() {
                        return I.Z.enabled
                    })),
                    Te = k.paymentSourceId,
                    Ae = (0, R.H)(me.id, Y),
                    Me = Ae.hasEntitlements,
                    je = Ae.entitlements,
                    xe = (0, S.Ap)(k.paymentSourceId),
                    Ce = (0, _.sE)(J, Te, n),
                    Re = (0, T.Wt)({
                        isTrial: ae,
                        isGift: Y,
                        selectedSkuId: oe
                    }),
                    Le = Re.enabled,
                    Ze = Re.defaultToMonthlyPlan,
                    we = U(a.useState(null == Ie ? void 0 : Ie.subscriptionPeriodEnd), 2),
                    Ge = we[0],
                    ke = we[1];
                a.useEffect((function() {
                    null == Ge && ke(null == Ie ? void 0 : Ie.subscriptionPeriodEnd)
                }), [null == Ie ? void 0 : Ie.subscriptionPeriodEnd, Ge]);
                var De, Be, Ue = a.useMemo((function() {
                        return (0, S.V7)({
                            skuId: oe,
                            isPremium: fe,
                            multiMonthPlans: [],
                            currentSubscription: le,
                            isGift: Y,
                            isEligibleForTrial: ae,
                            defaultPlanId: ce,
                            defaultToMonthlyPlan: Ze
                        })
                    }), [oe, le, Y, ce, fe, ae, Ze]),
                    Fe = (0, T.$g)(Le, Ie, me);
                if (null != Ne) {
                    var He = Ne.message;
                    Ne.code === y.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (He = G.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY);
                    return (0, r.jsx)(u.FormErrorBlock, {
                        children: He
                    })
                }
                if (Y) Be = (0, r.jsx)(C.e9, {
                    paymentSourceId: k.paymentSourceId,
                    plan: me,
                    className: D().invoice,
                    isPrepaidPaymentSource: xe
                });
                else if (ae && null != Ie) Be = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(A.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(A.PO, {
                        className: D().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: D().trialPriceLine,
                            children: [(0,
                                r.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: G.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: G.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, N.T4)(0, Ie.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: D().afterTrialPriceLine,
                            children: (0, r.jsx)(C.yT, {
                                invoice: Ie,
                                plan: me
                            })
                        })]
                    })]
                });
                else {
                    if (null == Ie || null == Ee || Fe) return (0, r.jsx)("div", {
                        className: D().spinnerWrapper,
                        children: (0, r.jsx)(u.Spinner, {})
                    });
                    ae && Ie.subscriptionPeriodEnd !== Ee.subscriptionPeriodEnd && (De = Ie.subscriptionPeriodEnd);
                    Be = (0, r.jsxs)(A.PO, {
                        className: D().invoice,
                        children: [(0, r.jsx)(A.q9, {
                            children: G.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(C.Lu, {
                            invoice: Ie,
                            newPlan: me,
                            isPrepaidPaymentSource: xe,
                            referralTrialOfferId: ne
                        }), xe ? null : (0, r.jsx)(C.nd, {
                            renewalInvoice: Ee,
                            isTrial: ae,
                            priceOptions: k,
                            overrideRenewalDate: De,
                            trialFooterMessageOverride: $,
                            hideSubscriptionDetails: te
                        })]
                    })
                }
                var Ye = l.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
                    We = function(e, t, n) {
                        var r = null,
                            a = null,
                            i = null;
                        if (e && null != t) {
                            var s = S.ZP.getIntervalForInvoice(t),
                                l = s.intervalType,
                                o = s.intervalCount,
                                c = (0, N.og)((0, N.T4)(t.total, t.currency), l, o),
                                u = null != n ? n : t.subscriptionPeriodEnd;
                            r = G.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: Z.EYA.TERMS,
                                paidURL: Z.EYA.PAID_TERMS,
                                rate: c,
                                renewalDate: u
                            });
                            a = D().trialCheckbox;
                            i = D().trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: a,
                            checkboxLabelClassname: i
                        }
                    }(null != ae && ae, Ee, De),
                    Ke = We.checkboxLabel,
                    Ve = We.checkboxClassname,
                    Xe = We.checkboxLabelClassname,
                    ze = G.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: me.name
                    });
                Y && !Se ? ze = G.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : Y && Se ? ze = "" : (0, S.PV)(me.id) && (ze = S.ZP.getBillingReviewSubheader(null, me));
                return Ce ? null : (0, r.jsxs)("div", {
                    className: D().stepBody,
                    children: [null != Q && (0, r.jsxs)("div", {
                        className: D().reviewWarningMessageContainer,
                        children: [(0, r.jsx)(E.Z, {
                            color: c.Z.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(u.Text, {
                            className: D().reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: Q
                        })]
                    }), Le && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(A.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(x.O, {
                            isGift: Y,
                            selectedGiftStyle: ue,
                            setSelectedGiftStyle: de,
                            planOptions: Ue,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: n,
                            subscriptionPeriodEnd: Ge,
                            showTotal: !1
                        }), (0, r.jsx)(A.KU, {})]
                    }), !ae && (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: ze
                    }), Se && null != ue && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(j.Z, {
                            giftStyle: ue,
                            shouldAnimate: !0,
                            className: D().giftMainAnimation
                        }), (0, r.jsx)(L.s, {
                            giftRecipient: pe
                        })]
                    }), Be, (0, r.jsxs)("div", {
                        className: D().paymentSourceWrapper,
                        children: [ae ? (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: D().formTitle,
                            children: G.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: G.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(p.Z, {
                            paymentSources: Object.values(i),
                            selectedPaymentSourceId: Te,
                            prependOption: Me && !ae ? {
                                label: G.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: W,
                            onPaymentSourceAdd: K,
                            hidePersonalInformation: Pe,
                            isTrial: ae
                        }), Me && null == Te ? (0, r.jsx)("div", {
                            className: D().paymentSourceOptionalWarning,
                            children: G.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: je.length
                            })
                        }) : null, (0, r.jsxs)(d.b, {
                            currencies: B,
                            className: D().currencyWrapper,
                            children: [(0, r.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: G.Z.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.Z, {
                                selectedCurrency: k.currency,
                                currencies: B,
                                onChange: F
                            })]
                        })]
                    }), (0, r.jsx)(M.Z, {
                        isActive: z,
                        ref: X,
                        children: (0, r.jsx)(m.Z, {
                            onChange: V,
                            forceShow: !0,
                            checkboxLabel: Ke,
                            checkboxClassname: Ve,
                            checkboxLabelClassname: Xe,
                            finePrint: (0, r.jsx)(f.Z, {
                                hide: ae,
                                subscriptionPlan: me,
                                renewalInvoice: Ee,
                                isGift: Y,
                                paymentSourceType: null === (t = i[null != Te ? Te : ""]) || void 0 === t ? void 0 : t.type,
                                isEmbeddedIAP: se
                            }),
                            showPricingLink: me.currency !== w.pK.USD,
                            showWithdrawalWaiver: Ye,
                            disabled: be,
                            isTrial: ae,
                            subscriptionPlan: me,
                            isGift: Y
                        })
                    })]
                })
            }
        },
        682876: (e, t, n) => {
            n.d(t, {
                Z: () => Q
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
                b = n(54709),
                h = n(652591),
                _ = n(264628),
                I = n(644144),
                O = n(694329),
                g = n(632826),
                E = n(2590),
                v = n(203600);

            function S(e, t, n, r, a, i, s) {
                try {
                    var l = e[i](s),
                        o = l.value
                } catch (e) {
                    n(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(r, a)
            }

            function N(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

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

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
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
            var M = function(e, t) {
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

            function j(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = N((function(e) {
                    var t, n, r, a, i, l, o, u, d, S, N, P, j, x, C, R, L, Z, w, G, k, D, B, U, F, H, Y, W, K, V, X, z, J, $, Q, q, ee, te;
                    return M(this, (function(M) {
                        switch (M.label) {
                            case 0:
                                t = e.setPurchaseState, n = e.setHasAcceptedTerms, r = e.setIsSubmitting, a = e.setPurchaseError, i = e.hasRedirectURL, l = e.setHasRedirectURL, o = e.isGift, u = e.giftStyle, d = e.baseAnalyticsData, S = e.analyticsLocation, N = e.analyticsLocations, P = e.flowStartTime, j = e.subscriptionPlan, x = e.planGroup, C = e.trialId, R = e.priceOptions, L = e.paymentSource, Z = e.isPrepaidPaymentPastDue, w = e.openInvoiceId, G = e.premiumSubscription, k = e.onNext, D = e.metadata, B = e.sku, U = e.skuPricePreview, F = e.purchaseType, H = e.referralCode, Y = e.loadId, W = e.giftRecipient, K = e.customMessage;
                                t(g.A.PURCHASING);
                                n(!0);
                                r(!0);
                                f.Z.wait(p.fw);
                                a(null);
                                M.label = 1;
                            case 1:
                                M.trys.push([1, 15, 16, 17]);
                                h.default.track(E.rMx.PAYMENT_FLOW_COMPLETED, A(T({}, d), {
                                    duration_ms: Date.now() - P
                                }));
                                if (i) return [2];
                                if (F !== E.GZQ.ONE_TIME) return [3, 3];
                                s()(null != B, "SKU must exist and be fetched.");
                                s()(null != U, "SKUPricePreview must exist.");
                                return [4, (0, y.ZZ)(B.applicationId, B.id, {
                                    expectedAmount: U.amount,
                                    expectedCurrency: U.currency,
                                    paymentSource: L,
                                    loadId: Y
                                })];
                            case 2:
                                V = M.sent();
                                return [3, 14];
                            case 3:
                                s()(null != j, "Missing subscriptionPlan");
                                if (!o) return [3, 5];
                                if ("usd" === (X = (0, O.aS)(j.id, !1, !0, R)).currency && (null == L ? void 0 : L.type) === E.HeQ.GCASH) {
                                    z = new Error("Invalid USD currency for GCash");
                                    (0, _.q2)(z, {
                                        tags: {
                                            paymentSourceId: null !== (J = null == L ? void 0 : L.id) && void 0 !== J ? J : "",
                                            subscriptionPlanId: j.id,
                                            priceOptions: JSON.stringify(R)
                                        }
                                    })
                                }
                                $ = (0, I.a8)(W);
                                return [4, (0, y.ZZ)(v.RQ, j.skuId, {
                                    expectedAmount: X.amount,
                                    expectedCurrency: X.currency,
                                    paymentSource: L,
                                    subscriptionPlanId: j.id,
                                    isGift: !0,
                                    giftStyle: u,
                                    loadId: Y,
                                    recipientId: $ ? null == W ? void 0 : W.id : void 0,
                                    customMessage: $ ? K : void 0
                                })];
                            case 4:
                                V = M.sent();
                                return [3, 14];
                            case 5:
                                return Z && null != w && null != L && null != G ? E.Uk1.has(L.type) ? [4, (0, c.G)(G, w, L, R.currency)] : [3, 7] : [3, 10];
                            case 6:
                                Q = M.sent();
                                return [3, 9];
                            case 7:
                                return [4, (0, c.Mg)(G, {
                                    paymentSource: L,
                                    currency: R.currency
                                }, N, S)];
                            case 8:
                                Q = M.sent();
                                M.label = 9;
                            case 9:
                                V = Q;
                                return [3, 14];
                            case 10:
                                return null == G ? [3, 12] : [4, (0, c.Mg)(G, {
                                    items: (0, O.al)(G, j.id, 1, new Set(x)),
                                    paymentSource: L,
                                    currency: R.currency
                                }, N, S)];
                            case 11:
                                V = M.sent();
                                return [3, 14];
                            case 12:
                                return [4, (0, m.Ld)({
                                    planId: j.id,
                                    currency: R.currency,
                                    paymentSource: L,
                                    trialId: C,
                                    metadata: D,
                                    referralCode: H,
                                    loadId: Y
                                })];
                            case 13:
                                V = M.sent();
                                M.label = 14;
                            case 14:
                                if (V.redirectConfirmation) {
                                    l(null != V.redirectURL);
                                    return [2]
                                }
                                h.default.track(E.rMx.PAYMENT_FLOW_SUCCEEDED, A(T({}, d), {
                                    duration_ms: Date.now() - P,
                                    payment_source_type: null == L ? void 0 : L.type
                                }));
                                t(g.A.COMPLETED);
                                "subscription" in V ? q = null != V.subscription ? b.Z.createFromServer(V.subscription) : null : "entitlements" in V && (ee = null != V.entitlements ? V.entitlements : void 0);
                                k(q, ee);
                                return [3, 17];
                            case 15:
                                te = M.sent();
                                t(g.A.FAIL);
                                a(te);
                                h.default.track(E.rMx.PAYMENT_FLOW_FAILED, A(T({}, d), {
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
                k = n(499171),
                D = n(509897),
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

            function Q(e) {
                var t = e.premiumSubscription,
                    n = e.setPurchaseState,
                    i = e.onBack,
                    f = e.onNext,
                    p = e.legalTermsNodeRef,
                    m = e.flashLegalTerms,
                    y = e.invoiceError,
                    b = e.planError,
                    _ = e.onPurchaseError,
                    I = e.baseAnalyticsData,
                    v = e.flowStartTime,
                    S = e.isGift,
                    N = void 0 !== S && S,
                    P = e.giftStyle,
                    T = e.customGiftMessage,
                    A = e.trialId,
                    M = e.planGroup,
                    x = e.analyticsLocation,
                    F = e.purchaseTokenAuthState,
                    Y = e.openInvoiceId,
                    W = e.metadata,
                    V = e.backButtonEligible,
                    Q = e.disablePurchase,
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
                    be = (0, R.sE)(A, re.paymentSourceId, ye),
                    he = (0, l.e7)([L.Z], (function() {
                        return L.Z.popupCallbackCalled
                    })),
                    _e = (0, u.Z)().analyticsLocations,
                    Ie = null != le ? oe[le] : null,
                    Oe = J(a.useState(be), 2),
                    ge = Oe[0],
                    Ee = Oe[1],
                    ve = J(a.useState(!1), 2),
                    Se = ve[0],
                    Ne = ve[1],
                    Pe = (0, B.H)(ye, N).hasEntitlements,
                    Te = (0, O.Ap)(re.paymentSourceId),
                    Ae = Pe || be,
                    Me = (0, k.U)(),
                    je = null,
                    xe = null;
                if (se === E.GZQ.ONE_TIME) {
                    s()(null != ce, "SKU must be selected for one-time purchases");
                    var Ce;
                    je = null !== (Ce = ue[ce]) && void 0 !== Ce ? Ce : null;
                    s()(null != je, "SKU must exist and be fetched.");
                    var Re = de[ce],
                        Le = null != le ? le : w.c;
                    xe = null != Re ? Re[Le] : null
                }
                var Ze, we = (Ze = K((function() {
                    return $(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, j({
                                    setPurchaseState: n,
                                    setHasAcceptedTerms: ae,
                                    setIsSubmitting: Ee,
                                    setPurchaseError: ie,
                                    hasRedirectURL: Se,
                                    setHasRedirectURL: Ne,
                                    isGift: N,
                                    giftStyle: P,
                                    baseAnalyticsData: I,
                                    analyticsLocation: x,
                                    analyticsLocations: _e,
                                    flowStartTime: v,
                                    subscriptionPlan: ne,
                                    planGroup: M,
                                    trialId: A,
                                    priceOptions: re,
                                    paymentSource: Ie,
                                    isPrepaidPaymentPastDue: Me,
                                    openInvoiceId: Y,
                                    premiumSubscription: t,
                                    onNext: f,
                                    metadata: W,
                                    sku: je,
                                    skuPricePreview: xe,
                                    purchaseType: se,
                                    referralCode: fe,
                                    loadId: pe.loadId,
                                    giftRecipient: me,
                                    customMessage: T
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
                            return $(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!0 !== he) return [3, 6];
                                        t.label = 1;
                                    case 1:
                                        t.trys.push([1, 3, 4, 5]);
                                        return null == L.Z.redirectedPaymentId ? [2] : [4, (0, c.OP)(L.Z.redirectedPaymentId)];
                                    case 2:
                                        t.sent();
                                        h.default.track(E.rMx.PAYMENT_FLOW_SUCCEEDED, z(X({}, I), {
                                            duration_ms: Date.now() - v,
                                            payment_source_type: null == Ie ? void 0 : Ie.type
                                        }));
                                        n(g.A.COMPLETED);
                                        f();
                                        return [3, 5];
                                    case 3:
                                        e = t.sent();
                                        n(g.A.FAIL);
                                        _(e);
                                        h.default.track(E.rMx.PAYMENT_FLOW_FAILED, z(X({}, I), {
                                            payment_source_id: le,
                                            payment_source_type: null == Ie ? void 0 : Ie.type,
                                            duration_ms: Date.now() - v
                                        }));
                                        return [3, 5];
                                    case 4:
                                        Ee(!1);
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
                }), [he]);
                a.useEffect((function() {
                    be && !N && null == t && we()
                }), [be, N, t]);
                var Ge = null != Y || se === E.GZQ.ONE_TIME;
                return be ? null : (0, r.jsxs)(o.ModalFooter, {
                    align: G.Z.Align.CENTER,
                    children: [(0, r.jsx)(U.Z, {
                        legalTermsNodeRef: p,
                        invoiceError: y,
                        planError: b,
                        disablePurchase: Q,
                        flashLegalTerms: m,
                        isSubmitting: ge,
                        premiumSubscription: t,
                        isGift: N,
                        planGroup: M,
                        isPrepaid: Te,
                        isTrial: ee,
                        makePurchase: we,
                        needsPaymentSource: null == Ie && !Ae
                    }), (0, r.jsx)(C.Z, {}), V && !Ge ? (0, r.jsx)("div", {
                        className: H().back,
                        children: (0, r.jsx)(D.Z, {
                            onClick: i
                        })
                    }) : null]
                })
            }
        },
        369263: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                a = (n(667294),
                    n(294184)),
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
                    b = e.errors,
                    h = e.disabled,
                    _ = void 0 !== h && h,
                    I = e.hideDivider,
                    O = void 0 !== I && I,
                    g = e.showBorder,
                    E = void 0 !== g && g,
                    v = e.borderType,
                    S = e.hasBackground,
                    N = void 0 !== S && S,
                    P = e.forcedDivider,
                    T = void 0 !== P && P,
                    A = e.showPremiumIcon,
                    M = void 0 !== A && A;
                return (0, r.jsx)("div", {
                    className: i()(d().customizationSection, y, (t = {}, f(t, d().disabled, _), f(t, d().hideDivider, O), f(t, d().showBorder, E), f(t, d().withDivider, T),
                        t)),
                    children: (0, r.jsxs)(c.Z, {
                        className: d().customizationSectionBorder,
                        backgroundClassName: d().customizationSectionBackground,
                        isShown: E,
                        type: v,
                        hasBackground: N,
                        children: [(0, r.jsxs)(s.FormTitle, {
                            className: d().title,
                            id: l,
                            children: [n, M && (0, r.jsx)(o.Z, {}), a]
                        }), null != u ? (0, r.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: d().sectionDescription,
                            children: u
                        }) : null, m, null != b && (0, r.jsx)(p, {
                            errors: b
                        })]
                    })
                })
            }
        }
    }
]);