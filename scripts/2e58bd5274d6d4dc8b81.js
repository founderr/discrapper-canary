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
                    v = _.paymentSourceId,
                    E = _.setPaymentSourceId,
                    N = _.purchaseError,
                    S = _.setPurchaseError,
                    P = _.purchaseErrorBlockRef,
                    T = _.paymentAuthenticationState,
                    A = _.isGift,
                    M = _.selectedSkuId,
                    x = y(m({}, (0, l.fL)()), {
                        paymentSources: g,
                        paymentSourceId: v,
                        setPaymentSourceId: E,
                        purchaseError: N,
                        setPurchaseError: S,
                        purchaseErrorBlockRef: P,
                        paymentAuthenticationState: T
                    }),
                    j = (0, s.N)(b),
                    C = !A && null != j && null != M && f.nG[j.trial_id].skus.includes(M),
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
                    paymentModalArgs: x,
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
                O: () => xe,
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
                v = n(165666),
                E = n(344266),
                N = n(717035),
                S = n(668900),
                P = n(16703),
                T = n(367095),
                A = n(281808),
                M = n(855483),
                x = n(756510),
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
                    y = D(a.useState((0, M.JM)(p)), 2),
                    b = y[0],
                    h = y[1],
                    _ = a.useRef(!1);
                a.useEffect((function() {
                    if (void 0 === s) {
                        var e = (0, M.JM)(c);
                        m(c);
                        h(e)
                    }
                }), [s, c]);
                return (0, r.jsx)("div", {
                    className: w().body,
                    children: (0, r.jsxs)(j.Z, {
                        title: t,
                        errors: n,
                        disabled: d,
                        children: [(0, r.jsx)(x.Z, {
                            innerClassName: w().textArea,
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
                            type: A.I.CUSTOM_GIFT,
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
                            children: L.Z.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
            var U = n(386991),
                F = n(69427),
                H = n(621270),
                Y = n(882211),
                W = n(220800),
                K = n.n(W);

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
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
                    if ("string" == typeof e) return V(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var $ = a.forwardRef((function(e, t) {
                    var n, i = e.isSelected,
                        s = e.giftStyle,
                        l = e.setSelectedGiftStyle,
                        c = e.onFocus,
                        u = e.onBlur,
                        d = e.shouldAnimate,
                        f = void 0 === d || d,
                        p = J(a.useState(!1), 2),
                        m = p[0],
                        y = p[1];
                    switch (s) {
                        case F.Cj.SNOWGLOBE:
                            n = L.Z.Messages.SEASONAL_GIFTING_OPTION_SNOWGLOBE;
                            break;
                        case F.Cj.BOX:
                            n = L.Z.Messages.SEASONAL_GIFTING_OPTION_BOX;
                            break;
                        case F.Cj.CUP:
                            n = L.Z.Messages.SEASONAL_GIFTING_OPTION_CUP;
                            break;
                        default:
                            n = L.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                    }
                    var b = (0, o.useRadioItem)({
                        isSelected: i,
                        label: n
                    });
                    return (0, r.jsx)(o.Clickable, z(function(e) {
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
                    }({
                        innerRef: t,
                        className: K().clickable,
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
                        children: (0, r.jsx)(Y.Z, {
                            giftStyle: s,
                            className: i ? K().customGiftBoxHighlighted : K().customGiftBox,
                            shouldAnimate: (m || i) && f
                        })
                    }))
                })),
                Q = n(233863),
                q = n.n(Q);

            function ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function te(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        te(e, t, n[t])
                    }))
                }
                return e
            }

            function re(e, t) {
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

            function ae(e, t) {
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
                    if ("string" == typeof e) return ee(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ee(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ie = [F.Cj.BOX, F.Cj.CUP, F.Cj.SNOWGLOBE],
                se = [F.Cj.STANDARD_BOX, F.Cj.CAKE, F.Cj.COFFEE, F.Cj.CHEST],
                le = function() {
                    return (0, r.jsxs)("div", {
                        className: q().giftBoxHeaderContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: q().giftBoxHeaderText,
                            children: L.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }), (0, r.jsx)(o.Tooltip, {
                            text: L.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return (0, r.jsx)(o.Clickable, re(ne({}, e), {
                                    className: q().infoIconContainer,
                                    "aria-label": L.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                                    children: (0, r.jsx)(U.Z, {
                                        className: q().infoIcon
                                    })
                                }))
                            }
                        })]
                    })
                },
                oe = function(e) {
                    var t = e.selectedGiftStyle,
                        n = e.setSelectedGiftStyle,
                        i = (0, u.usePaymentContext)().giftRecipient,
                        s = ae(a.useState(!1), 2),
                        l = s[0],
                        c = s[1],
                        d = a.useRef(null),
                        f = (0, o.useRadioGroup)({
                            orientation: "horizontal"
                        }),
                        p = H.ZP.getCurrentConfig({
                            location: "premiumGiftSelect_GiftAnimationOptions"
                        }).enabled,
                        m = (0, y.a8)(i),
                        b = null;
                    p ? b = ie : m && (b = se);
                    return (0, r.jsxs)("div", {
                        children: [p && (0, r.jsx)(le, {}), m && null != t && (0, r.jsx)(Y.Z, {
                            giftStyle: t,
                            shouldAnimate: !0,
                            className: q().giftMainAnimation
                        }), (0, r.jsx)("div", re(ne({
                            tabIndex: null != t || l ? void 0 : 0,
                            onFocus: function(e) {
                                var t;
                                e.target === e.currentTarget && (null === (t = d.current) || void 0 === t || t.focus())
                            },
                            className: q().giftBoxOptionContainer,
                            "aria-label": L.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }, f), {
                            children: null != b && b.map((function(e, a) {
                                return (0, r.jsx)($, {
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
                            className: q().selectPlanDivider
                        })]
                    })
                },
                ce = n(509897),
                ue = n(111090),
                de = n(294184),
                fe = n.n(de),
                pe = n(795308),
                me = n(384411),
                ye = n(203600),
                be = n(736101),
                he = n.n(be);

            function _e(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ie(e) {
                var t = e.premiumSubscription,
                    n = e.planId,
                    a = e.selectPlan,
                    i = e.selected,
                    c = e.isGift,
                    d = e.priceOptions,
                    f = e.shouldShowUpdatedPaymentModal,
                    m = e.isEligibleForDiscount,
                    b = e.discountedPriceString,
                    h = (0, l.e7)([me.default], (function() {
                        return me.default.locale
                    })),
                    O = (0, l.e7)([p.Z], (function() {
                        return p.Z.get(n)
                    })),
                    g = (0, u.usePaymentContext)().giftRecipient,
                    v = (0, y.a8)(g);
                s()(null != O, "Missing subscriptionPlan");
                var E, N = null != t && t.planId === n,
                    S = N || n === ye.Xh.PREMIUM_MONTH_TIER_2 && null != t && [ye.Xh.PREMIUM_YEAR_TIER_0, ye.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    P = ye.nH[n],
                    T = (0, _.aS)(n, !1, c, d),
                    A = (0, _.Ap)(d.paymentSourceId),
                    M = null != P && !f,
                    x = O.interval === ye.rV.YEAR ? L.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : L.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    j = function() {
                        return O.interval === ye.rV.YEAR && null != t || M && !N ? O.interval === ye.rV.YEAR && null != t ? (0, r.jsxs)("span", {
                            className: he().planOptionMonthsFree,
                            children: ["(", L.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                        }) : M && !N ? null != P && (0, r.jsx)(o.Text, {
                            tag: "span",
                            variant: "eyebrow",
                            color: "always-white",
                            className: he().planOptionDiscount,
                            children: L.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                                discount: (0, I.T3)(h, P / 100)
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
                    onClick: S ? void 0 : function() {
                        return a(n)
                    },
                    className: fe()(he().planOptionClickableContainer, (E = {}, _e(E, he().selectedPlan, v && i), _e(E, he().selectionBox, v), E)),
                    children: [(0, r.jsxs)("div", {
                        className: fe()(he().planOption, _e({}, he().planOptionDisabled, S)),
                        children: [(0, r.jsxs)("div", {
                            className: he().planOptionClickable,
                            children: [!v && (0, r.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: i,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: pe.Z.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: he().planOptionCheckbox
                            }), function() {
                                var e;
                                return (0,
                                    r.jsxs)("div", {
                                    children: [(0, r.jsxs)("div", {
                                        className: fe()(he().planOptionInterval, (e = {}, _e(e, he().optionSelected, i || v), _e(e, he().updatedOptionSelected, f && (i || v)), e)),
                                        children: [(0, _.L7)(O.interval, c, A, O.intervalCount, v), v && j()]
                                    }), v && (0, r.jsx)("div", {
                                        className: he().planOneTimeCost,
                                        children: L.Z.Messages.ONE_TIME_CHARGE.format({
                                            currencyAmount: (0, I.T4)(T.amount, T.currency)
                                        })
                                    })]
                                })
                            }(), N && (0, r.jsxs)("span", {
                                className: he().planOptionCurrentPlan,
                                children: ["(", L.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !v && j()]
                        }), f ? (0, r.jsx)("div", {
                            className: fe()(_e({}, he().optionPriceSelected, i)),
                            children: L.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: m ? O.interval === ye.rV.MONTH ? b : (0, I.T4)(T.amount, T.currency) : (0, I.T4)(0, T.currency, {
                                    maximumFractionDigits: 0
                                })
                            })
                        }) : (0, r.jsx)("div", {
                            className: fe()(_e({}, he().optionSelected, i || v)),
                            children: (0, I.T4)(T.amount, T.currency)
                        })]
                    }), f && (0, r.jsx)("div", {
                        className: he().planOptionSubtextContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: i ? "text-normal" : "interactive-normal",
                            className: fe()(he().planOptionSubtext, _e({}, he().discountPlanOptionSubtext, m)),
                            children: m ? O.interval === ye.rV.MONTH ? L.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: b,
                                regularPrice: (0, I.T4)(T.amount, T.currency)
                            }) : L.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: P
                            }) : x.format({
                                price: (0, I.T4)(T.amount, T.currency)
                            })
                        })
                    })]
                })
            }
            var Oe = n(185096),
                ge = n(520453),
                ve = n(710431),
                Ee = n.n(ve);

            function Ne(e, t) {
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

            function Pe(e) {
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

            function Te(e, t) {
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

            function Ae(e, t) {
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
                    if ("string" == typeof e) return Ne(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ne(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Me(e, t) {
                var n = L.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                    r = L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                    a = function() {
                        switch (e.interval) {
                            case ye.rV.YEAR:
                                return n;
                            case ye.rV.MONTH:
                            default:
                                return r
                        }
                    }(),
                    i = e.skuId;
                switch (t) {
                    case ye.Si.TIER_0:
                        switch (i) {
                            case ye.Si.TIER_1:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                            case ye.Si.TIER_2:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                            default:
                                return a
                        }
                    case ye.Si.TIER_1:
                        switch (i) {
                            case ye.Si.TIER_0:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                            case ye.Si.TIER_2:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                            default:
                                return a
                        }
                    case ye.Si.TIER_2:
                        switch (i) {
                            case ye.Si.TIER_0:
                            case ye.Si.TIER_1:
                                return L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                            case ye.Si.TIER_2:
                                return e.interval === ye.rV.MONTH ? L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                    numFreeGuildSubscriptions: ye.cb
                                }) : a;
                            default:
                                return a
                        }
                    default:
                        return a
                }
            }

            function xe(e) {
                var t, n = e.premiumSubscription,
                    i = e.skuId,
                    d = e.selectedPlanId,
                    f = e.setSelectedPlanId,
                    m = e.isGift,
                    h = void 0 !== m && m,
                    g = e.isSeasonalGift,
                    A = void 0 !== g && g,
                    M = e.selectedGiftStyle,
                    x = e.setSelectedGiftStyle,
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
                    $ = (0, y.a8)(X);
                i = null != i ? i : V;
                n = null != n ? n : W;
                s()(void 0 !== n, "should not be undefined");
                var Q = Ae((0, l.Wu)([p.Z], (function() {
                        return [null != n ? p.Z.get(n.planId) : null, null != d ? p.Z.get(d) : null]
                    })), 2),
                    q = Q[0],
                    ee = Q[1],
                    te = (0, N.N)(w),
                    ne = null == te ? void 0 : te.subscription_trial,
                    re = (0, E.N)(),
                    ae = null == re || null === (t = re.discount) || void 0 === t ? void 0 : t.plan_ids,
                    ie = null != ee ? ee : z,
                    se = a.useCallback((function(e) {
                        null != f ? f(e) : K(e)
                    }), [f, K]),
                    le = null != j ? j : J;
                s()(null != le, "Price option has to be set");
                var ce = null != te && ye.nG[te.trial_id].skus.includes(i),
                    ue = null != re && C.some((function(e) {
                        return null == ae ? void 0 : ae.includes(e)
                    })),
                    de = (0, _.aS)(ye.Xh.PREMIUM_MONTH_TIER_2, !1, h, le);
                a.useEffect((function() {
                    Z && O.ZP.trackExposure({
                        location: "5f89bb_1"
                    })
                }), [Z]);
                var fe = null != (null == ie ? void 0 : ie.id) && C.includes(ie.id);
                a.useEffect((function() {
                    if (!fe)
                        if (null == q || h) se(C[0]);
                        else if (null != q) {
                        var e = C.find((function(e) {
                            return e !== q.id
                        }));
                        null != e && se(e)
                    }
                }), [fe, h, C, q, se]);
                var pe = !$ && (h || !ce && !ue) && fe && k,
                    me = (0, o.useRadioGroup)(),
                    be = null != (null == ie ? void 0 : ie.id) ? (0,
                        _.aS)(ie.id, !1, h, le) : void 0,
                    he = "HR" === (0, v.Z)().ipCountryCode && null != be && be.currency === ge.pK.EUR,
                    _e = (0, _.Ap)(le.paymentSourceId),
                    ve = (null == ne ? void 0 : ne.interval) === ye.rV.DAY ? L.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : L.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    Ne = !h && (ue || null != ne && ce && null != G);
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: $ ? Ee().stepBodyCustomGift : Ee().stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: $ ? Ee().bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(S.Z, {
                                fromBoostCancelModal: !1,
                                className: Ee().legacyPricingNotice
                            }), (A || $) && null != M && (0, r.jsx)(oe, {
                                selectedGiftStyle: M,
                                setSelectedGiftStyle: x
                            })]
                        }), (0, r.jsxs)("div", {
                            className: $ ? Ee().bodyColumnRight : void 0,
                            children: [$ && (0, r.jsx)(Oe.s, {
                                giftRecipient: X
                            }), function() {
                                if ($ && null != F) return (0, r.jsx)(B, {
                                    sectionTitle: L.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: function(e) {
                                        return F(e)
                                    },
                                    pendingText: U,
                                    currentText: U
                                })
                            }(), null != q && !h && (0, r.jsx)("div", {
                                className: Ee().bodyText,
                                children: Me(q, i)
                            }), function(e, t) {
                                return $ ? (0,
                                    r.jsx)(o.FormTitle, {
                                    children: L.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
                                }) : Ne ? e ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: Ee().trialPlanSelectHeader,
                                        children: L.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                            trialEnd: G,
                                            trialPeriod: ve
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: Ee().planSelectSeparator
                                    })]
                                }) : t && null != H && null != de ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: Ee().trialPlanSelectHeader,
                                        children: L.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                            discountedPrice: H,
                                            regularPrice: (0, I.T4)(de.amount, de.currency)
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: Ee().planSelectSeparator
                                    })]
                                }) : void 0 : (0, r.jsx)("div", {
                                    className: Ee().selectPlanChooseTitle,
                                    children: L.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                })
                            }(ce, ue), (0, r.jsx)("div", Te(Pe({}, me), {
                                children: C.map((function(e) {
                                    return (0, r.jsx)(Ie, {
                                        planId: e,
                                        isGift: h,
                                        premiumSubscription: h ? null : null != n ? n : null,
                                        selectPlan: se,
                                        selected: (null == ie ? void 0 : ie.id) === e,
                                        priceOptions: le,
                                        shouldShowUpdatedPaymentModal: Ne,
                                        isEligibleForDiscount: ue,
                                        discountedPriceString: H
                                    }, e)
                                }))
                            })), (0, r.jsx)("div", {
                                children: pe && null != ie && null != be ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: Ee().selectPlanDivider
                                    }), (0, r.jsx)(P.Ji, {
                                        label: L.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(T.Z, {
                                            price: be.amount,
                                            currency: be.currency,
                                            intervalType: h ? null : ie.interval,
                                            intervalCount: ie.intervalCount,
                                            isPrepaidPaymentSource: _e
                                        }),
                                        className: Ee().selectPlanTotalRow
                                    })]
                                }) : null
                            }), he && (0, r.jsx)(c.Z, {
                                message: L.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, I.T4)(7.5345 * be.amount, ge.pK.HRK)
                                })
                            }), !h && !Ne && k && (0, r.jsx)(c.Z, {
                                message: L.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: b.Z.getArticleURL(R.BhN.LOCALIZED_PRICING)
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
                    children: [null != n && c.includes(n) ? (0, r.jsx)(Ce, {
                        paymentSources: i,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: a,
                        shouldRenderUpdatedPaymentModal: f,
                        isTrial: p
                    }) : (0, r.jsx)(o.Button, {
                        disabled: !0,
                        children: L.Z.Messages.SELECT
                    }), l ? (0, r.jsx)(ce.Z, {
                        onClick: s
                    }) : null]
                })
            }

            function Ce(e) {
                var t = e.onStepChange,
                    n = e.selectedPlanId,
                    a = e.isGift,
                    i = e.paymentSources,
                    s = e.shouldRenderUpdatedPaymentModal,
                    c = e.isTrial,
                    u = (0, l.e7)([m.Z], (function() {
                        return m.Z.getPremiumTypeSubscription()
                    })),
                    p = (0, ue.H)(n, a).hasEntitlements,
                    y = null != u && null != u.paymentSourceId || Object.keys(i).length > 0 || p && !c,
                    b = s ? L.Z.Messages.NEXT : L.Z.Messages.SELECT,
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
                    b = L.Z.Messages.CONTINUE_IN_BROWSER
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
                Z: () => H
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
                v = n(386991),
                E = n(644144),
                N = n(694329),
                S = n(249052),
                P = n(100749),
                T = n(818103),
                A = n(16703),
                M = n(900547),
                x = n(882211),
                j = n(556663),
                C = n(646875),
                R = n(111090),
                L = n(185096),
                Z = n(203600),
                w = n(2590),
                G = n(520453),
                D = n(473708),
                k = n(968071),
                B = n.n(k);

            function U(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function F(e, t) {
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
                    if ("string" == typeof e) return U(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e) {
                var t, n, i = e.selectedPlanId,
                    k = e.paymentSources,
                    U = e.priceOptions,
                    H = e.currencies,
                    Y = e.onCurrencyChange,
                    W = e.isGift,
                    K = void 0 !== W && W,
                    V = e.onPaymentSourceChange,
                    X = e.handlePaymentSourceAdd,
                    z = e.setHasAcceptedTerms,
                    J = e.legalTermsNodeRef,
                    $ = e.hasLegalTermsFlash,
                    Q = e.trialId,
                    q = e.trialFooterMessageOverride,
                    ee = e.reviewWarningMessage,
                    te = e.metadata,
                    ne = e.purchaseState,
                    re = e.hideSubscriptionDetails,
                    ae = e.referralTrialOfferId,
                    ie = e.isTrial,
                    se = void 0 !== ie && ie,
                    le = e.isDiscount,
                    oe = void 0 !== le && le,
                    ce = (0,
                        b.usePaymentContext)(),
                    ue = ce.isEmbeddedIAP,
                    de = ce.activeSubscription,
                    fe = ce.selectedSkuId,
                    pe = ce.defaultPlanId,
                    me = ce.selectedGiftStyle,
                    ye = ce.setSelectedGiftStyle,
                    be = ce.isPremium,
                    he = ce.giftRecipient,
                    _e = (0, o.e7)([g.Z], (function() {
                        return g.Z.get(i)
                    }));
                s()(null != _e, "Missing plan");
                var Ie = [{
                        planId: _e.id,
                        quantity: 1
                    }],
                    Oe = ne === h.A.PURCHASING || ne === h.A.COMPLETED,
                    ge = K || Oe,
                    ve = F((0, P.ED)({
                        items: Ie,
                        renewal: !1,
                        preventFetch: ge,
                        applyEntitlements: !0,
                        paymentSourceId: U.paymentSourceId,
                        currency: U.currency,
                        trialId: Q,
                        metadata: te
                    }), 2),
                    Ee = ve[0],
                    Ne = ve[1],
                    Se = F((0, P.ED)({
                        items: Ie,
                        renewal: !0,
                        preventFetch: ge,
                        trialId: Q,
                        paymentSourceId: U.paymentSourceId,
                        currency: U.currency,
                        metadata: te
                    }), 2),
                    Pe = Se[0],
                    Te = Se[1],
                    Ae = (0, E.a8)(he),
                    Me = null != Ne ? Ne : Te,
                    xe = (0, o.e7)([I.Z], (function() {
                        return I.Z.enabled
                    })),
                    je = U.paymentSourceId,
                    Ce = (0, R.H)(_e.id, K),
                    Re = Ce.hasEntitlements,
                    Le = Ce.entitlements,
                    Ze = (0, N.Ap)(U.paymentSourceId),
                    we = (0, _.sE)(Q, je, i),
                    Ge = (0, T.Wt)({
                        isTrial: se,
                        isGift: K,
                        selectedSkuId: fe
                    }),
                    De = Ge.enabled,
                    ke = Ge.defaultToMonthlyPlan,
                    Be = F(a.useState(null == Ee ? void 0 : Ee.subscriptionPeriodEnd), 2),
                    Ue = Be[0],
                    Fe = Be[1];
                a.useEffect((function() {
                    null == Ue && Fe(null == Ee ? void 0 : Ee.subscriptionPeriodEnd)
                }), [null == Ee ? void 0 : Ee.subscriptionPeriodEnd, Ue]);
                var He, Ye, We = a.useMemo((function() {
                        return (0, N.V7)({
                            skuId: fe,
                            isPremium: be,
                            multiMonthPlans: [],
                            currentSubscription: de,
                            isGift: K,
                            isEligibleForTrial: se,
                            defaultPlanId: pe,
                            defaultToMonthlyPlan: ke
                        })
                    }), [fe, de, K, pe, be, se, ke]),
                    Ke = (0, T.$g)(De, Ee, _e),
                    Ve = null === (t = null == Ee ? void 0 : Ee.invoiceItems.find((function(e) {
                        return e.subscriptionPlanId === Z.Xh.PREMIUM_MONTH_TIER_2
                    }))) || void 0 === t ? void 0 : t.subscriptionPlanPrice;
                if (null != Me) {
                    var Xe = Me.message;
                    Me.code === y.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (Xe = D.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY);
                    return (0, r.jsx)(u.FormErrorBlock, {
                        children: Xe
                    })
                }
                if (K) Ye = (0, r.jsx)(C.e9, {
                    paymentSourceId: U.paymentSourceId,
                    plan: _e,
                    className: B().invoice,
                    isPrepaidPaymentSource: Ze
                });
                else if (se && null != Ee) Ye = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(A.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(A.PO, {
                        className: B().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: B().trialPriceLine,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: D.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: D.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, S.T4)(0, Ee.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: B().afterTrialPriceLine,
                            children: (0, r.jsx)(C.yT, {
                                invoice: Ee,
                                plan: _e
                            })
                        })]
                    })]
                });
                else if (oe && null != Ee && null != Ve) Ye = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(A.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(A.PO, {
                        className: B().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: B().trialPriceLine,
                            children: [(0, r.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: D.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: D.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, S.T4)(Ee.total, Ee.currency)
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: B().discountSubtext,
                            children: (0, r.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: D.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                    discountedPrice: (0, S.T4)(Ee.total, Ee.currency),
                                    regularPrice: (0, S.T4)(Ve, Ee.currency)
                                })
                            })
                        })]
                    })]
                });
                else {
                    if (null == Ee || null == Pe || Ke) return (0, r.jsx)("div", {
                        className: B().spinnerWrapper,
                        children: (0, r.jsx)(u.Spinner, {})
                    });
                    se && Ee.subscriptionPeriodEnd !== Pe.subscriptionPeriodEnd && (He = Ee.subscriptionPeriodEnd);
                    Ye = (0, r.jsxs)(A.PO, {
                        className: B().invoice,
                        children: [(0, r.jsx)(A.q9, {
                            children: D.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(C.Lu, {
                            invoice: Ee,
                            newPlan: _e,
                            isPrepaidPaymentSource: Ze,
                            referralTrialOfferId: ae
                        }), Ze ? null : (0, r.jsx)(C.nd, {
                            renewalInvoice: Pe,
                            isTrial: se,
                            priceOptions: U,
                            overrideRenewalDate: He,
                            trialFooterMessageOverride: q,
                            hideSubscriptionDetails: re
                        })]
                    })
                }
                var ze = l.M.EEA_COUNTRIES.has(O.Z.ipCountryCodeWithFallback),
                    Je = function(e, t, n) {
                        var r = null,
                            a = null,
                            i = null;
                        if (e && null != t) {
                            var s = N.ZP.getIntervalForInvoice(t),
                                l = s.intervalType,
                                o = s.intervalCount,
                                c = (0, S.og)((0, S.T4)(t.total, t.currency), l, o),
                                u = null != n ? n : t.subscriptionPeriodEnd;
                            r = D.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: w.EYA.TERMS,
                                paidURL: w.EYA.PAID_TERMS,
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
                    }(null != se && se, Pe, He),
                    $e = Je.checkboxLabel,
                    Qe = Je.checkboxClassname,
                    qe = Je.checkboxLabelClassname,
                    et = D.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: _e.name
                    });
                K && !Ae ? et = D.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : K && Ae ? et = "" : (0, N.PV)(_e.id) && (et = N.ZP.getBillingReviewSubheader(null, _e));
                return we ? null : (0, r.jsxs)("div", {
                    className: B().stepBody,
                    children: [null != ee && (0, r.jsxs)("div", {
                        className: B().reviewWarningMessageContainer,
                        children: [(0, r.jsx)(v.Z, {
                            color: c.Z.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(u.Text, {
                            className: B().reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: ee
                        })]
                    }), De && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(A.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(j.O, {
                            isGift: K,
                            selectedGiftStyle: me,
                            setSelectedGiftStyle: ye,
                            planOptions: We,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: i,
                            subscriptionPeriodEnd: Ue,
                            showTotal: !1
                        }), (0, r.jsx)(A.KU, {})]
                    }), !se && (0, r.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: et
                    }), Ae && null != me && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(x.Z, {
                            giftStyle: me,
                            shouldAnimate: !0,
                            className: B().giftMainAnimation
                        }), (0, r.jsx)(L.s, {
                            giftRecipient: he
                        })]
                    }), Ye, (0, r.jsxs)("div", {
                        className: B().paymentSourceWrapper,
                        children: [se ? (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: B().formTitle,
                            children: D.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: D.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(p.Z, {
                            paymentSources: Object.values(k),
                            selectedPaymentSourceId: je,
                            prependOption: Re && !se ? {
                                label: D.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: V,
                            onPaymentSourceAdd: X,
                            hidePersonalInformation: xe,
                            isTrial: se
                        }), Re && null == je ? (0, r.jsx)("div", {
                            className: B().paymentSourceOptionalWarning,
                            children: D.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: Le.length
                            })
                        }) : null, (0, r.jsxs)(d.b, {
                            currencies: H,
                            className: B().currencyWrapper,
                            children: [(0, r.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: D.Z.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.Z, {
                                selectedCurrency: U.currency,
                                currencies: H,
                                onChange: Y
                            })]
                        })]
                    }), (0, r.jsx)(M.Z, {
                        isActive: $,
                        ref: J,
                        children: (0, r.jsx)(m.Z, {
                            onChange: z,
                            forceShow: !0,
                            checkboxLabel: $e,
                            checkboxClassname: Qe,
                            checkboxLabelClassname: qe,
                            finePrint: (0, r.jsx)(f.Z, {
                                hide: se || oe,
                                subscriptionPlan: _e,
                                renewalInvoice: Pe,
                                isGift: K,
                                paymentSourceType: null === (n = k[null != je ? je : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ue
                            }),
                            showPricingLink: _e.currency !== G.pK.USD,
                            showWithdrawalWaiver: ze,
                            disabled: Oe,
                            isTrial: se,
                            isDiscount: oe,
                            subscriptionPlan: _e,
                            isGift: K
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
                v = n(2590),
                E = n(203600);

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

            function S(e) {
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
                                if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                        0) : r.next) && !(a = a.call(r, i[1])).done) return a;
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

            function x(e) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = S((function(e) {
                    var t, n, r, a, i, l, o, u, d, N, S, P, x, j, C, R, L, Z, w, G, D, k, B, U, F, H, Y, W, K, V, X, z, J, $, Q, q, ee, te;
                    return M(this, (function(M) {
                        switch (M.label) {
                            case 0:
                                t = e.setPurchaseState, n = e.setHasAcceptedTerms, r = e.setIsSubmitting, a = e.setPurchaseError, i = e.hasRedirectURL, l = e.setHasRedirectURL,
                                    o = e.isGift, u = e.giftStyle, d = e.baseAnalyticsData, N = e.analyticsLocation, S = e.analyticsLocations, P = e.flowStartTime, x = e.subscriptionPlan, j = e.planGroup, C = e.trialId, R = e.priceOptions, L = e.paymentSource, Z = e.isPrepaidPaymentPastDue, w = e.openInvoiceId, G = e.premiumSubscription, D = e.onNext, k = e.metadata, B = e.sku, U = e.skuPricePreview, F = e.purchaseType, H = e.referralCode, Y = e.loadId, W = e.giftRecipient, K = e.customMessage;
                                t(g.A.PURCHASING);
                                n(!0);
                                r(!0);
                                f.Z.wait(p.fw);
                                a(null);
                                M.label = 1;
                            case 1:
                                M.trys.push([1, 15, 16, 17]);
                                h.default.track(v.rMx.PAYMENT_FLOW_COMPLETED, A(T({}, d), {
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
                                V = M.sent();
                                return [3, 14];
                            case 3:
                                s()(null != x, "Missing subscriptionPlan");
                                if (!o) return [3, 5];
                                if ("usd" === (X = (0,
                                        O.aS)(x.id, !1, !0, R)).currency && (null == L ? void 0 : L.type) === v.HeQ.GCASH) {
                                    z = new Error("Invalid USD currency for GCash");
                                    (0, _.q2)(z, {
                                        tags: {
                                            paymentSourceId: null !== (J = null == L ? void 0 : L.id) && void 0 !== J ? J : "",
                                            subscriptionPlanId: x.id,
                                            priceOptions: JSON.stringify(R)
                                        }
                                    })
                                }
                                $ = (0, I.a8)(W);
                                return [4, (0, y.ZZ)(E.RQ, x.skuId, {
                                    expectedAmount: X.amount,
                                    expectedCurrency: X.currency,
                                    paymentSource: L,
                                    subscriptionPlanId: x.id,
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
                                return Z && null != w && null != L && null != G ? v.Uk1.has(L.type) ? [4, (0, c.G)(G, w, L, R.currency)] : [3, 7] : [3, 10];
                            case 6:
                                Q = M.sent();
                                return [3, 9];
                            case 7:
                                return [4, (0, c.Mg)(G, {
                                    paymentSource: L,
                                    currency: R.currency
                                }, S, N)];
                            case 8:
                                Q = M.sent();
                                M.label = 9;
                            case 9:
                                V = Q;
                                return [3, 14];
                            case 10:
                                return null == G ? [3, 12] : [4, (0, c.Mg)(G, {
                                    items: (0, O.al)(G, x.id, 1, new Set(j)),
                                    paymentSource: L,
                                    currency: R.currency
                                }, S, N)];
                            case 11:
                                V = M.sent();
                                return [3, 14];
                            case 12:
                                return [4, (0, m.Ld)({
                                    planId: x.id,
                                    currency: R.currency,
                                    paymentSource: L,
                                    trialId: C,
                                    metadata: k,
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
                                h.default.track(v.rMx.PAYMENT_FLOW_SUCCEEDED, A(T({}, d), {
                                    duration_ms: Date.now() - P,
                                    payment_source_type: null == L ? void 0 : L.type
                                }));
                                t(g.A.COMPLETED);
                                "subscription" in V ? q = null != V.subscription ? b.Z.createFromServer(V.subscription) : null : "entitlements" in V && (ee = null != V.entitlements ? V.entitlements : void 0);
                                D(q, ee);
                                return [3, 17];
                            case 15:
                                te = M.sent();
                                t(g.A.FAIL);
                                a(te);
                                h.default.track(v.rMx.PAYMENT_FLOW_FAILED, A(T({}, d), {
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
                    E = e.flowStartTime,
                    N = e.isGift,
                    S = void 0 !== N && N,
                    P = e.giftStyle,
                    T = e.customGiftMessage,
                    A = e.trialId,
                    M = e.planGroup,
                    j = e.analyticsLocation,
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
                    ve = Oe[1],
                    Ee = J(a.useState(!1), 2),
                    Ne = Ee[0],
                    Se = Ee[1],
                    Pe = (0, B.H)(ye, S).hasEntitlements,
                    Te = (0, O.Ap)(re.paymentSourceId),
                    Ae = Pe || be,
                    Me = (0, D.U)(),
                    xe = null,
                    je = null;
                if (se === v.GZQ.ONE_TIME) {
                    s()(null != ce, "SKU must be selected for one-time purchases");
                    var Ce;
                    xe = null !== (Ce = ue[ce]) && void 0 !== Ce ? Ce : null;
                    s()(null != xe, "SKU must exist and be fetched.");
                    var Re = de[ce],
                        Le = null != le ? le : w.c;
                    je = null != Re ? Re[Le] : null
                }
                var Ze, we = (Ze = K((function() {
                    return $(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, x({
                                    setPurchaseState: n,
                                    setHasAcceptedTerms: ae,
                                    setIsSubmitting: ve,
                                    setPurchaseError: ie,
                                    hasRedirectURL: Ne,
                                    setHasRedirectURL: Se,
                                    isGift: S,
                                    giftStyle: P,
                                    baseAnalyticsData: I,
                                    analyticsLocation: j,
                                    analyticsLocations: _e,
                                    flowStartTime: E,
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
                                    sku: xe,
                                    skuPricePreview: je,
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
                                        h.default.track(v.rMx.PAYMENT_FLOW_SUCCEEDED, z(X({}, I), {
                                            duration_ms: Date.now() - E,
                                            payment_source_type: null == Ie ? void 0 : Ie.type
                                        }));
                                        n(g.A.COMPLETED);
                                        f();
                                        return [3, 5];
                                    case 3:
                                        e = t.sent();
                                        n(g.A.FAIL);
                                        _(e);
                                        h.default.track(v.rMx.PAYMENT_FLOW_FAILED, z(X({}, I), {
                                            payment_source_id: le,
                                            payment_source_type: null == Ie ? void 0 : Ie.type,
                                            duration_ms: Date.now() - E
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
                }), [he]);
                a.useEffect((function() {
                    be && !S && null == t && we()
                }), [be, S, t]);
                var Ge = null != Y || se === v.GZQ.ONE_TIME;
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
                        isGift: S,
                        planGroup: M,
                        isPrepaid: Te,
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
                    v = void 0 !== g && g,
                    E = e.borderType,
                    N = e.hasBackground,
                    S = void 0 !== N && N,
                    P = e.forcedDivider,
                    T = void 0 !== P && P,
                    A = e.showPremiumIcon,
                    M = void 0 !== A && A;
                return (0, r.jsx)("div", {
                    className: i()(d().customizationSection, y, (t = {}, f(t, d().disabled, _), f(t, d().hideDivider, O), f(t, d().showBorder, v), f(t, d().withDivider, T),
                        t)),
                    children: (0, r.jsxs)(c.Z, {
                        className: d().customizationSectionBorder,
                        backgroundClassName: d().customizationSectionBackground,
                        isShown: v,
                        type: E,
                        hasBackground: S,
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