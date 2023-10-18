(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [96431], {
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
                b: () => s,
                Z: () => o
            });
            var r = t(785893),
                a = (t(667294), t(70418)),
                l = t(473708);

            function i(e) {
                switch (e) {
                    case "brl":
                        return l.Z.Messages.BRL_NAME;
                    case "pln":
                        return l.Z.Messages.PLN_NAME;
                    case "try":
                        return l.Z.Messages.TRY_NAME;
                    case "usd":
                        return l.Z.Messages.USD_NAME;
                    case "aud":
                        return l.Z.Messages.AUD_NAME;
                    case "pen":
                        return l.Z.Messages.PEN_NAME;
                    case "php":
                        return l.Z.Messages.PHP_NAME;
                    case "ars":
                        return l.Z.Messages.ARS_NAME;
                    case "cop":
                        return l.Z.Messages.COP_NAME;
                    case "clr":
                        return l.Z.Messages.CLR_NAME;
                    case "jpy":
                        return l.Z.Messages.JPY_NAME;
                    case "idr":
                        return l.Z.Messages.IDR_NAME;
                    case "vnd":
                        return l.Z.Messages.VND_NAME;
                    case "thb":
                        return l.Z.Messages.THB_NAME;
                    case "myr":
                        return l.Z.Messages.MYR_NAME;
                    case "krw":
                        return l.Z.Messages.KRW_NAME;
                    case "mxn":
                        return l.Z.Messages.MXN_NAME;
                    case "bgn":
                        return l.Z.Messages.BGN_NAME;
                    case "czk":
                        return l.Z.Messages.CZK_NAME;
                    case "dkk":
                        return l.Z.Messages.DKK_NAME;
                    case "huf":
                        return l.Z.Messages.HUF_NAME;
                    case "ron":
                        return l.Z.Messages.RON_NAME;
                    case "sek":
                        return l.Z.Messages.SEK_NAME;
                    case "eur":
                        return l.Z.Messages.EUR_NAME;
                    default:
                        return ""
                }
            }

            function s(e) {
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
                    l = e.selectedCurrency,
                    s = e.className,
                    o = e.disabled,
                    u = void 0 !== o && o;
                if (n.length < 2) return null;
                var c = n.map((function(e, n) {
                    return {
                        key: n,
                        value: e,
                        label: "".concat(e.toUpperCase(), " - ").concat(i(e))
                    }
                }));
                return (0, r.jsx)(a.SingleSelect, {
                    value: l,
                    options: c,
                    onChange: function(e) {
                        null != e && t(e)
                    },
                    className: s,
                    isDisabled: u
                })
            }
        },
        986304: (e, n, t) => {
            "use strict";
            t.d(n, {
                J: () => y
            });
            var r = t(441143),
                a = t.n(r),
                l = t(685269),
                i = t(717035),
                s = t(393001),
                o = t(652591),
                u = t(782786),
                c = t(83471),
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

            function b(e, n) {
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

            function y(e) {
                var n = e.analyticsData,
                    t = e.initialPlanId,
                    r = e.breadcrumbSteps,
                    p = e.handleStepChange,
                    y = e.referralTrialOfferId,
                    v = e.onReturn,
                    _ = (0, u.usePaymentContext)(),
                    h = _.contextMetadata,
                    I = _.step,
                    E = _.paymentSources,
                    O = _.paymentSourceId,
                    N = _.setPaymentSourceId,
                    g = _.purchaseError,
                    S = _.setPurchaseError,
                    T = _.purchaseErrorBlockRef,
                    P = _.paymentAuthenticationState,
                    A = _.isGift,
                    M = _.selectedSkuId,
                    x = b(m({}, (0, s.fL)()), {
                        paymentSources: E,
                        paymentSourceId: O,
                        setPaymentSourceId: N,
                        purchaseError: g,
                        setPurchaseError: S,
                        purchaseErrorBlockRef: T,
                        paymentAuthenticationState: P
                    }),
                    C = (0, i.N)(y),
                    R = !A && null != C && null != M && f.nG[C.trial_id].skus.includes(M),
                    j = null != v ? v : function() {
                        var e = Object.values(E).length < 1 && null == t ? c.h8.PLAN_SELECT : c.h8.REVIEW;
                        p(e, {
                            trackedFromStep: c.h8.PAYMENT_TYPE
                        })
                    };
                a()(I, "Step should be set here");
                var L = (0, l.Z)((function() {
                    return Date.now()
                }), [I]);
                return (0, s.vP)({
                    paymentModalArgs: x,
                    initialStep: c.h8.PAYMENT_TYPE,
                    prependSteps: [c.h8.PROMOTION_INFO],
                    appendSteps: [c.h8.REVIEW, c.h8.CONFIRM],
                    breadcrumpSteps: r,
                    currentBreadcrumpStep: I,
                    usePaymentModalStep: !0,
                    onReturn: j,
                    onComplete: function(e) {
                        p(c.h8.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: function(e) {
                        var t = e.currentStep,
                            r = e.toStep,
                            a = Date.now();
                        o.default.track(d.rMx.PAYMENT_FLOW_STEP, b(m({}, n), {
                            from_step: t,
                            to_step: r,
                            step_duration_ms: a - L,
                            flow_duration_ms: a - h.startTime
                        }))
                    },
                    isEligibleForTrial: R
                })
            }
        },
        493957: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                a = (t(667294), t(554189)),
                l = t(128059),
                i = t(149096),
                s = t(894870),
                o = t.n(s);

            function u() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(l.Z, {}), (0, r.jsx)(i.C3, {
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
                Z: () => E
            });
            var r = t(785893),
                a = t(667294),
                l = t(315804),
                i = t(70418),
                s = t(107364),
                o = t(473708),
                u = t(547656),
                c = t.n(u),
                d = function(e) {
                    var n = e.className,
                        t = e.isEmailResent,
                        a = e.resendEmail;
                    return (0, r.jsx)("div", {
                        className: n,
                        children: (0, r.jsxs)("div", {
                            className: c().awaitingWrapper,
                            children: [(0, r.jsx)(i.Heading, {
                                variant: "heading-xl/bold",
                                children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, r.jsxs)("p", {
                                children: [(0, r.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, r.jsx)("br", {}), (0, r.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, r.jsx)("br", {}), (0, r.jsxs)(i.Text, {
                                    variant: "text-md/normal",
                                    children: [o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, " ", t ? o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, r.jsx)(i.Anchor, {
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
                        children: (0, r.jsx)(i.ModalFooter, {
                            justify: s.Z.Justify.BETWEEN,
                            align: s.Z.Align.CENTER,
                            children: (0,
                                r.jsx)(i.Button, {
                                "data-testid": "continue",
                                color: i.Button.Colors.BRAND,
                                disabled: !0,
                                children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                            })
                        })
                    })
                },
                p = t(128059),
                m = t(149096),
                b = t(757995),
                y = t.n(b);

            function v(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function _(e, n, t, r, a, l, i) {
                try {
                    var s = e[l](i),
                        o = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(o) : Promise.resolve(o).then(r, a)
            }

            function h(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var I = function(e, n) {
                var t, r, a, l, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function s(l) {
                    return function(s) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(l);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                l = n.call(e, i)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            };

            function E() {
                var e, n, t = h(a.useState(!1), 2),
                    i = t[0],
                    s = t[1],
                    o = (n = (e = function() {
                        return I(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    s(!0);
                                    return [4, (0, l.xA)()];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var n = this,
                            t = arguments;
                        return new Promise((function(r, a) {
                            var l = e.apply(n, t);

                            function i(e) {
                                _(l, r, a, i, s, "next", e)
                            }

                            function s(e) {
                                _(l, r, a, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }), function() {
                        return n.apply(this, arguments)
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(m.C3, {
                        children: (0, r.jsx)(d, {
                            className: y().body,
                            isEmailResent: i,
                            resendEmail: o
                        })
                    }), (0,
                        r.jsx)(m.O3, {
                        children: (0, r.jsx)(f, {})
                    })]
                })
            }
        },
        837598: (e, n, t) => {
            "use strict";
            t.d(n, {
                sE: () => i
            });
            var r = t(260561),
                a = t(116094),
                l = (0, r.B)({
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
                i = function(e, n, t) {
                    var r = l.useExperiment({
                            location: "aeb070_1"
                        }, {
                            autoTrackExposure: !1
                        }).bypassCheckout,
                        i = function(e, n, t) {
                            var r = null == t || (0, a.uZ)(t);
                            return null != e && null == n && r
                        }(e, n, t);
                    return r && i
                }
        },
        471450: (e, n, t) => {
            "use strict";
            t.d(n, {
                ZP: () => i,
                aQ: () => o
            });
            var r = t(197597),
                a = t(260561),
                l = t(203600);
            const i = (0, a.B)({
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
                        newPlans: [l.Xh.PREMIUM_6_MONTH_TIER_2, l.Xh.PREMIUM_3_MONTH_TIER_2]
                    }
                }, {
                    id: 2,
                    label: "3 Month Plan Only",
                    config: {
                        newPlans: [l.Xh.PREMIUM_3_MONTH_TIER_2]
                    }
                }]
            });
            var s = new Set([r.S.US, r.S.CA]);

            function o(e) {
                return null == e || s.has(e.country)
            }
        },
        499171: (e, n, t) => {
            "use strict";
            t.d(n, {
                U: () => f
            });
            var r = t(730381),
                a = t.n(r),
                l = t(202351),
                i = t(711531),
                s = t(551778),
                o = t(536392),
                u = t(116094),
                c = t(2590),
                d = t(520453);

            function f() {
                var e = (0, l.e7)([o.Z], (function() {
                        return o.Z.getPremiumTypeSubscription()
                    })),
                    n = (0, l.e7)([s.Z], (function() {
                        return null != e && null != e.planIdFromItems ? s.Z.get(null == e ? void 0 : e.planIdFromItems) : null
                    })),
                    t = (0, l.e7)([i.Z], (function() {
                        return null != e && null != e.paymentSourceId ? i.Z.getPaymentSource(e.paymentSourceId) : null
                    }), [e]),
                    r = null != t && d.Uk.has(t.type),
                    f = (null == e ? void 0 : e.status) === c.O0b.PAST_DUE ? a()().diff(a()(e.currentPeriodStart), "days") : 0;
                return !(null == e || null == n || !(0, u.uZ)(n.id)) && (r && f >= 0 && f <= (0, u.lU)(e) && e.status === c.O0b.PAST_DUE && !e.isPurchasedExternally)
            }
        },
        668900: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => I,
                U: () => _
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                l = t.n(a),
                i = t(441143),
                s = t.n(i),
                o = t(818417),
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
                f = (0, c.B)({
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
                b = t(473708),
                y = t(516178),
                v = t.n(y);

            function _() {
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

            function h(e, n) {
                return "PL" === e ? n ? b.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : b.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? n ? b.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : b.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? b.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : b.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const I = function(e) {
                var n = e.fromBoostCancelModal,
                    t = e.className,
                    a = (0, p.Z)();
                if (!_()) return null;
                s()(null != a, "Subscription billing country should not be null");
                return (0, r.jsxs)("div", {
                    className: l()(v().noticeRoot, t),
                    children: [(0, r.jsx)("div", {
                        className: v().iconContainer,
                        children: (0, r.jsx)(o.Z, {
                            className: v().infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: v().text,
                        children: h(a, n).format({
                            helpCenterLink: u.Z.getArticleURL(m.BhN.LOCALIZED_PRICING)
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
                a = (t(667294), t(70418)),
                l = t(473708),
                i = t(241387),
                s = t.n(i);
            const o = function(e) {
                var n = e.onClick;
                return (0,
                    r.jsx)(a.Anchor, {
                    onClick: n,
                    className: s().link,
                    children: l.Z.Messages.BACK
                })
            }
        },
        311556: (e, n, t) => {
            "use strict";
            t.d(n, {
                O: () => Ue,
                M: () => Fe
            });
            var r = t(785893),
                a = t(667294),
                l = t(441143),
                i = t.n(l),
                s = t(202351),
                o = t(70418),
                u = t(929400),
                c = t(73904),
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
            var b, y = t(551778),
                v = t(536392),
                _ = t(644144),
                h = t(348592),
                I = t(120415),
                E = t(116094),
                O = t(575641),
                N = t(471450);
            ! function(e) {
                e[e.NONE = 0] = "NONE";
                e[e.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL";
                e[e.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW"
            }(b || (b = {}));
            const g = (0, p.B)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: b.NONE
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: b.BROWSER_AUTOFILL
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: b.MERGE_PLAN_SELECT_TO_REVIEW
                    }
                }]
            });
            var S = t(165666),
                T = t(344266),
                P = t(717035),
                A = t(668900),
                M = t(16703),
                x = t(367095),
                C = t(281808),
                R = t(855483),
                j = t(863979),
                L = t(369263),
                Z = t(382060),
                w = t(2590),
                G = t(473708),
                D = t(22865),
                k = t.n(D);

            function B(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function U(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return l
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return B(e, n)
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
                    l = e.onTextChange,
                    i = e.pendingText,
                    s = e.placeholder,
                    u = e.currentText,
                    c = e.disabled,
                    d = void 0 !== c && c,
                    f = U(a.useState(null != i ? i : u), 2),
                    p = f[0],
                    m = f[1],
                    b = U(a.useState((0, R.JM)(p)), 2),
                    y = b[0],
                    v = b[1],
                    _ = a.useRef(!1);
                a.useEffect((function() {
                    _.current = !0
                }), []);
                a.useEffect((function() {
                    if (void 0 === i) {
                        var e = (0, R.JM)(u);
                        m(u);
                        v(e)
                    }
                }), [i, u]);
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
                                    v(t);
                                    l(n)
                                }
                            },
                            placeholder: s,
                            channel: F,
                            textValue: p,
                            richValue: y,
                            type: C.I.CUSTOM_GIFT,
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
                le = t.n(ae);

            function ie(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var se = (ie(W = {}, V.Cj.STANDARD_BOX, q()), ie(W, V.Cj.CAKE, ne()), ie(W, V.Cj.CHEST, re()), ie(W, V.Cj.COFFEE, le()), ie(W, V.Cj.SNOWGLOBE, ""), ie(W, V.Cj.BOX, ""), ie(W, V.Cj.CUP, ""), W),
                oe = a.forwardRef((function(e, n) {
                    var t = e.isSelected,
                        a = e.giftStyle,
                        l = e.setSelectedGiftStyle,
                        i = e.onFocus,
                        s = e.onBlur;
                    return (0, r.jsx)(o.Clickable, {
                        innerRef: n,
                        className: Q().clickable,
                        onClick: function() {
                            return l(a)
                        },
                        onFocus: i,
                        onBlur: s,
                        children: (0, r.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: se[a],
                            className: t ? Q().customGiftBoxHighlighted : Q().customGiftBox
                        })
                    })
                })),
                ue = t(233863),
                ce = t.n(ue);

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

            function be(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, l = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return l
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
            var ye = [V.Cj.BOX, V.Cj.CUP, V.Cj.SNOWGLOBE],
                ve = [V.Cj.STANDARD_BOX, V.Cj.CAKE, V.Cj.COFFEE, V.Cj.CHEST],
                _e = function() {
                    return (0, r.jsxs)("div", {
                        className: ce().giftBoxHeaderContainer,
                        children: [(0, r.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: ce().giftBoxHeaderText,
                            children: G.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }), (0, r.jsx)(o.Tooltip, {
                            text: G.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return (0, r.jsx)(o.Clickable, me(pe({}, e), {
                                    className: ce().infoIconContainer,
                                    "aria-label": G.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                                    children: (0, r.jsx)(Y.Z, {
                                        className: ce().infoIcon
                                    })
                                }))
                            }
                        })]
                    })
                },
                he = function(e) {
                    var n = e.selectedGiftStyle,
                        t = e.setSelectedGiftStyle,
                        l = (0, d.usePaymentContext)().giftRecipient,
                        i = be(a.useState(!1), 2),
                        s = i[0],
                        u = i[1],
                        c = a.useRef(null),
                        f = (0, o.useRadioGroup)({
                            orientation: "horizontal"
                        }),
                        p = X.ZP.getCurrentConfig({
                            location: "premiumGiftSelect_GiftAnimationOptions"
                        }).enabled,
                        m = (0, _.a8)(l),
                        b = null;
                    p ? b = ye : m && (b = ve);
                    return (0, r.jsxs)("div", {
                        children: [p && (0, r.jsx)(_e, {}), m && (0, r.jsx)("div", {
                            className: ce().giftMainAnimation,
                            children: null != n ? (0, r.jsx)(z.Z, {
                                giftStyle: n,
                                defaultAnimationState: K.SR.ACTION,
                                idleAnimationState: K.SR.LOOP,
                                shouldAnimate: !0,
                                className: ce().animation
                            }) : (0, r.jsx)(o.Spinner, {
                                className: ce().spinner
                            })
                        }), (0, r.jsx)("div", me(pe({
                            tabIndex: null != n || s ? void 0 : 0,
                            onFocus: function(e) {
                                var n;
                                e.target === e.currentTarget && (null === (n = c.current) || void 0 === n || n.focus())
                            },
                            className: ce().giftBoxOptionContainer,
                            "aria-label": G.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }, f), {
                            children: null != b && b.map((function(e, a) {
                                return (0, r.jsx)(oe, {
                                    isSelected: n === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: t,
                                    ref: 0 === a ? c : null,
                                    onFocus: function() {
                                        return u(!0)
                                    },
                                    onBlur: function() {
                                        return u(!1)
                                    }
                                }, e)
                            }))
                        })), (0, r.jsx)("div", {
                            className: ce().selectPlanDivider
                        })]
                    })
                },
                Ie = t(509897),
                Ee = t(111090),
                Oe = t(294184),
                Ne = t.n(Oe),
                ge = t(795308),
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

            function xe(e) {
                var n = e.premiumSubscription,
                    t = e.planId,
                    a = e.selectPlan,
                    l = e.selected,
                    u = e.isGift,
                    c = e.priceOptions,
                    f = e.shouldShowUpdatedPaymentModal,
                    p = e.isEligibleForDiscount,
                    m = e.discountAmountOff,
                    b = (0, s.e7)([Se.default], (function() {
                        return Se.default.locale
                    })),
                    v = (0, s.e7)([y.Z], (function() {
                        return y.Z.get(t)
                    })),
                    h = (0, d.usePaymentContext)().giftRecipient,
                    I = (0, _.a8)(h);
                i()(null != v, "Missing subscriptionPlan");
                var N, g = null != n && n.planId === t,
                    S = g || t === Te.Xh.PREMIUM_MONTH_TIER_2 && null != n && [Te.Xh.PREMIUM_YEAR_TIER_0, Te.Xh.PREMIUM_YEAR_TIER_1].includes(n.planId),
                    T = Te.nH[t],
                    P = (0, E.aS)(t, !1, u, c),
                    A = (0,
                        E.Ap)(c.paymentSourceId),
                    M = null != T && !f,
                    x = v.interval === Te.rV.YEAR ? G.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : G.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    C = function() {
                        return v.interval === Te.rV.YEAR && null != n || M && !g ? v.interval === Te.rV.YEAR && null != n ? (0, r.jsxs)("span", {
                            className: Ae().planOptionMonthsFree,
                            children: ["(", G.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                        }) : M && !g ? null != T && (0, r.jsx)(o.Text, {
                            tag: "span",
                            variant: "eyebrow",
                            color: "always-white",
                            className: Ae().planOptionDiscount,
                            children: G.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                                discount: (0, O.T3)(b, T / 100)
                            })
                        }) : void 0 : null
                    };
                return (0, r.jsxs)(o.Clickable, {
                    role: I ? "menuitem" : "radio",
                    "aria-checked": l,
                    tabIndex: l ? 0 : -1,
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
                    className: Ne()(Ae().planOptionClickableContainer, (N = {}, Me(N, Ae().selectedPlan, I && l), Me(N, Ae().selectionBox, I), N)),
                    children: [(0, r.jsxs)("div", {
                        className: Ne()(Ae().planOption, Me({}, Ae().planOptionDisabled, S)),
                        children: [(0, r.jsxs)("div", {
                            className: Ae().planOptionClickable,
                            children: [!I && (0, r.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: l,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: ge.Z.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: Ae().planOptionCheckbox
                            }), function() {
                                var e;
                                return (0, r.jsxs)("div", {
                                    children: [(0, r.jsxs)("div", {
                                        className: Ne()(Ae().planOptionInterval, (e = {}, Me(e, Ae().optionSelected, l || I), Me(e, Ae().updatedOptionSelected, f && (l || I)), e)),
                                        children: [(0, E.L7)(v.interval, u, A, v.intervalCount, I), I && C()]
                                    }), I && (0, r.jsx)("div", {
                                        className: Ae().planOneTimeCost,
                                        children: G.Z.Messages.ONE_TIME_CHARGE.format({
                                            currencyAmount: (0, O.T4)(P.amount, P.currency)
                                        })
                                    })]
                                })
                            }(), g && (0, r.jsxs)("span", {
                                className: Ae().planOptionCurrentPlan,
                                children: ["(", G.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !I && C()]
                        }), f ? (0, r.jsx)("div", {
                            className: Ne()(Me({}, Ae().optionPriceSelected, l)),
                            children: G.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: p && null != m ? v.interval === Te.rV.MONTH ? (0, O.T4)(P.amount - m, P.currency) : (0, O.T4)(P.amount, P.currency) : (0, O.T4)(0, P.currency, {
                                    maximumFractionDigits: 0
                                })
                            })
                        }) : (0, r.jsx)("div", {
                            className: Ne()(Me({}, Ae().optionSelected, l || I)),
                            children: (0, O.T4)(P.amount, P.currency)
                        })]
                    }), f && (0, r.jsx)("div", {
                        className: Ae().planOptionSubtextContainer,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: l ? "text-normal" : "interactive-normal",
                            className: Ne()(Ae().planOptionSubtext, Me({}, Ae().discountPlanOptionSubtext, p)),
                            children: p && null != m ? v.interval === Te.rV.MONTH ? G.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, O.T4)(P.amount - m, P.currency),
                                regularPrice: (0, O.T4)(P.amount, P.currency)
                            }) : G.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: T
                            }) : x.format({
                                price: (0, O.T4)(P.amount, P.currency)
                            })
                        })
                    })]
                })
            }
            var Ce = t(185096),
                Re = t(520453),
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
                        var r, a, l = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return l
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

            function Be(e, n) {
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
                    l = e.skuId;
                switch (n) {
                    case Te.Si.TIER_0:
                        switch (l) {
                            case Te.Si.TIER_1:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                            case Te.Si.TIER_2:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                            default:
                                return a
                        }
                    case Te.Si.TIER_1:
                        switch (l) {
                            case Te.Si.TIER_0:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                            case Te.Si.TIER_2:
                                return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                            default:
                                return a
                        }
                    case Te.Si.TIER_2:
                        switch (l) {
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

            function Ue(e) {
                var n, t, l, f, p = e.premiumSubscription,
                    m = e.skuId,
                    b = e.selectedPlanId,
                    v = e.setSelectedPlanId,
                    I = e.isGift,
                    g = void 0 !== I && I,
                    C = e.isSeasonalGift,
                    R = void 0 !== C && C,
                    j = e.selectedGiftStyle,
                    L = e.setSelectedGiftStyle,
                    Z = e.priceOptions,
                    D = e.planOptions,
                    k = e.eligibleForMultiMonthPlans,
                    B = e.referralTrialOfferId,
                    U = e.subscriptionPeriodEnd,
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
                    ne = (0, _.a8)($);
                m = null != m ? m : Q;
                p = null != p ? p : z;
                i()(void 0 !== p, "should not be undefined");
                var te = ke((0, s.Wu)([y.Z], (function() {
                        return [null != p ? y.Z.get(p.planId) : null, null != b ? y.Z.get(b) : null]
                    })), 2),
                    re = te[0],
                    ae = te[1],
                    le = (0, P.N)(B),
                    ie = null == le ? void 0 : le.subscription_trial,
                    se = (0, T.Ng)(),
                    oe = null == se || null === (n = se.discount) || void 0 === n ? void 0 : n.plan_ids,
                    ue = null != ae ? ae : q,
                    ce = a.useCallback((function(e) {
                        null != v ? v(e) : J(e)
                    }), [v, J]),
                    de = null != Z ? Z : ee;
                i()(null != de, "Price option has to be set");
                var fe = null != le && Te.nG[le.trial_id].skus.includes(m),
                    pe = null != se && D.some((function(e) {
                        return null == oe ? void 0 : oe.includes(e)
                    })),
                    me = (0, E.aS)(Te.Xh.PREMIUM_MONTH_TIER_2, !1, g, de);
                a.useEffect((function() {
                    k && N.ZP.trackExposure({
                        location: "5f89bb_1"
                    })
                }), [k]);
                var be = null != (null == ue ? void 0 : ue.id) && D.includes(ue.id);
                a.useEffect((function() {
                    if (!be)
                        if (null == re || g) ce(D[0]);
                        else if (null != re) {
                        var e = D.find((function(e) {
                            return e !== re.id
                        }));
                        null != e && ce(e)
                    }
                }), [be, g, D, re, ce]);
                var ye = !ne && (g || !fe && !pe) && be && W,
                    ve = (0, o.useRadioGroup)(),
                    _e = null != (null == ue ? void 0 : ue.id) ? (0, E.aS)(ue.id, !1, g, de) : void 0,
                    Ie = "HR" === (0, S.Z)().ipCountryCode && null != _e && _e.currency === Re.pK.EUR,
                    Ee = (0, E.Ap)(de.paymentSourceId),
                    Oe = (null == ie ? void 0 : ie.interval) === Te.rV.DAY ? G.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : G.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    Ne = !g && (pe || null != ie && fe && null != U),
                    ge = null === (f = null === (t = null == V ? void 0 : V.find((function(e) {
                        return e.subscriptionPlanId === Te.Xh.PREMIUM_MONTH_TIER_2
                    }))) || void 0 === t || null === (l = t.discounts) || void 0 === l ? void 0 : l.find((function(e) {
                        return e.type === c.eW.SUBSCRIPTION_PLAN
                    }))) || void 0 === f ? void 0 : f.amount;
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)("div", {
                        className: ne ? Le().stepBodyCustomGift : Le().stepBody,
                        children: [(0, r.jsxs)("div", {
                            className: ne ? Le().bodyColumnMiddle : void 0,
                            children: [(0, r.jsx)(A.Z, {
                                fromBoostCancelModal: !1,
                                className: Le().legacyPricingNotice
                            }), (R || ne) && null != j && (0, r.jsx)(he, {
                                selectedGiftStyle: j,
                                setSelectedGiftStyle: L
                            })]
                        }), (0, r.jsxs)("div", {
                            className: ne ? Le().bodyColumnRight : void 0,
                            children: [ne && (0, r.jsx)(Ce.s, {
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
                            }(), null != re && !g && (0, r.jsx)("div", {
                                className: Le().bodyText,
                                children: Be(re, m)
                            }), function(e, n) {
                                return ne ? (0, r.jsx)(o.FormTitle, {
                                    children: G.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
                                }) : Ne ? e ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: Le().trialPlanSelectHeader,
                                        children: G.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                            trialEnd: U,
                                            trialPeriod: Oe
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: Le().planSelectSeparator
                                    })]
                                }) : n && null != ge && null != me ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: Le().trialPlanSelectHeader,
                                        children: G.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                            discountedPrice: (0, O.T4)(me.amount - ge, me.currency),
                                            regularPrice: (0, O.T4)(me.amount, me.currency)
                                        })
                                    }), (0, r.jsx)("hr", {
                                        className: Le().planSelectSeparator
                                    })]
                                }) : void 0 : (0, r.jsx)("div", {
                                    className: Le().selectPlanChooseTitle,
                                    children: G.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                })
                            }(fe, pe), (0, r.jsx)("div", De(Ge({}, ve), {
                                children: D.map((function(e) {
                                    return (0, r.jsx)(xe, {
                                        planId: e,
                                        isGift: g,
                                        premiumSubscription: g ? null : null != p ? p : null,
                                        selectPlan: ce,
                                        selected: (null == ue ? void 0 : ue.id) === e,
                                        priceOptions: de,
                                        shouldShowUpdatedPaymentModal: Ne,
                                        isEligibleForDiscount: pe,
                                        discountAmountOff: ge
                                    }, e)
                                }))
                            })), (0, r.jsx)("div", {
                                children: ye && null != ue && null != _e ? (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: Le().selectPlanDivider
                                    }), (0, r.jsx)(M.Ji, {
                                        label: G.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, r.jsx)(x.Z, {
                                            price: _e.amount,
                                            currency: _e.currency,
                                            intervalType: g ? null : ue.interval,
                                            intervalCount: ue.intervalCount,
                                            isPrepaidPaymentSource: Ee
                                        }),
                                        className: Le().selectPlanTotalRow
                                    })]
                                }) : null
                            }), Ie && (0, r.jsx)(u.Z, {
                                message: G.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, O.T4)(7.5345 * _e.amount, Re.pK.HRK)
                                })
                            }), !g && !Ne && W && (0, r.jsx)(u.Z, {
                                message: G.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: h.Z.getArticleURL(w.BhN.LOCALIZED_PRICING)
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
                    l = e.paymentSources,
                    i = e.onBackClick,
                    s = e.showBackButton,
                    u = e.planOptions,
                    c = e.shouldRenderUpdatedPaymentModal,
                    f = void 0 !== c && c,
                    p = e.isTrial,
                    m = (0,
                        d.usePaymentContext)(),
                    b = m.paymentSources,
                    y = m.selectedPlan;
                l = null != l ? l : b;
                t = null != t ? t : null == y ? void 0 : y.id;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null != t && u.includes(t) ? (0, r.jsx)(He, {
                        paymentSources: l,
                        onStepChange: n,
                        selectedPlanId: t,
                        isGift: a,
                        shouldRenderUpdatedPaymentModal: f,
                        isTrial: p
                    }) : (0, r.jsx)(o.Button, {
                        disabled: !0,
                        children: G.Z.Messages.SELECT
                    }), s ? (0, r.jsx)(Ie.Z, {
                        onClick: i
                    }) : null]
                })
            }

            function He(e) {
                var n = e.onStepChange,
                    t = e.selectedPlanId,
                    a = e.isGift,
                    l = e.paymentSources,
                    i = e.shouldRenderUpdatedPaymentModal,
                    u = e.isTrial,
                    c = (0, s.e7)([v.Z], (function() {
                        return v.Z.getPremiumTypeSubscription()
                    })),
                    d = (0, Ee.H)(t, a).hasEntitlements,
                    p = null != c && null != c.paymentSourceId || Object.keys(l).length > 0 || d && !u,
                    y = i ? G.Z.Messages.NEXT : G.Z.Messages.SELECT,
                    _ = f.h8.ADD_PAYMENT_STEPS;
                if (p) _ = f.h8.REVIEW;
                else if ((0, I.nI)() && function() {
                        if (g.getCurrentConfig({
                                location: "5f89bb_2"
                            }).experiment === b.BROWSER_AUTOFILL) return m.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        }).enabled;
                        return !1
                    }()) {
                    _ = f.h8.AWAITING_BROWSER_CHECKOUT;
                    y = G.Z.Messages.CONTINUE_IN_BROWSER
                }
                return (0, r.jsx)(o.Button, {
                    onClick: function() {
                        return n(_)
                    },
                    children: y
                })
            }
        },
        185096: (e, n, t) => {
            "use strict";
            t.d(n, {
                s: () => c
            });
            var r = t(785893),
                a = (t(667294), t(70418)),
                l = t(657539),
                i = t(749565),
                s = t(473708),
                o = t(488251),
                u = t.n(o),
                c = function(e) {
                    var n = e.giftRecipient;
                    return null == n ? null : (0, r.jsxs)("div", {
                        className: u().content,
                        children: [(0, r.jsx)(a.FormTitle, {
                            children: s.Z.Messages.FORM_LABEL_SEND_TO
                        }), (0, r.jsxs)("div", {
                            className: u().giftRecipientInfo,
                            children: [(0, r.jsx)(l.Z, {
                                user: n,
                                className: u().giftRecipient,
                                size: a.AvatarSizes.SIZE_20
                            }), (0, r.jsx)(a.Heading, {
                                className: u().giftRecipientName,
                                variant: "text-md/normal",
                                children: i.ZP.getName(n)
                            }), (0, r.jsx)(a.Heading, {
                                className: u().giftRecipientTag,
                                variant: "text-md/normal",
                                children: i.ZP.getUserTag(n)
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
                l = t(441143),
                i = t.n(l),
                s = t(197597),
                o = t(202351),
                u = t(795308),
                c = t(70418),
                d = t(415324),
                f = t(152042),
                p = t(700812),
                m = t(536713),
                b = t(414094),
                y = t(782786),
                v = t(632826),
                _ = t(837598),
                h = t(268226),
                I = t(793461),
                E = t(615796),
                O = t(551778),
                N = t(386991),
                g = t(644144),
                S = t(116094),
                T = t(575641),
                P = t(467345),
                A = t(100749),
                M = t(344266),
                x = t(16703),
                C = t(900547),
                R = t(882211),
                j = t(311556),
                L = t(646875),
                Z = t(111090),
                w = t(185096),
                G = t(203600),
                D = t(2590),
                k = t(520453),
                B = t(473708),
                U = t(968071),
                F = t.n(U);

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
                        var r, a, l = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return l
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
                var n, t, l = e.selectedPlanId,
                    U = e.paymentSources,
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
                    le = e.hideSubscriptionDetails,
                    ie = e.referralTrialOfferId,
                    se = e.isTrial,
                    oe = void 0 !== se && se,
                    ue = e.isDiscount,
                    ce = void 0 !== ue && ue,
                    de = (0,
                        y.usePaymentContext)(),
                    fe = de.isEmbeddedIAP,
                    pe = de.activeSubscription,
                    me = de.selectedSkuId,
                    be = de.defaultPlanId,
                    ye = de.selectedGiftStyle,
                    ve = de.setSelectedGiftStyle,
                    _e = de.isPremium,
                    he = de.giftRecipient,
                    Ie = de.startedPaymentFlowWithPaymentSourcesRef,
                    Ee = (0, M.Ng)(),
                    Oe = null == Ee || null === (n = Ee.discount) || void 0 === n ? void 0 : n.plan_ids.some((function(e) {
                        return G.GP[e].skuId === me
                    })),
                    Ne = !X && null != Ee && null != me && Oe,
                    ge = (0, o.e7)([O.Z], (function() {
                        return O.Z.get(l)
                    }));
                i()(null != ge, "Missing plan");
                var Se, Te = [{
                        planId: ge.id,
                        quantity: 1
                    }],
                    Pe = ae === v.A.PURCHASING || ae === v.A.COMPLETED,
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
                    xe = Me[0],
                    Ce = Me[1],
                    Re = W((0, A.ED)({
                        items: Te,
                        renewal: !0,
                        preventFetch: Ae,
                        trialId: ee,
                        paymentSourceId: H.paymentSourceId,
                        currency: H.currency,
                        metadata: re
                    }), 2),
                    je = Re[0],
                    Le = Re[1],
                    Ze = W((0, A.ED)({
                        items: [{
                            planId: G.Xh.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !Ne,
                        trialId: ee,
                        paymentSourceId: H.paymentSourceId,
                        currency: H.currency,
                        metadata: re
                    }), 2),
                    we = Ze[0],
                    Ge = Ze[1],
                    De = (0, g.a8)(he),
                    ke = null !== (Se = null != Ce ? Ce : Le) && void 0 !== Se ? Se : Ge,
                    Be = (0, o.e7)([I.Z], (function() {
                        return I.Z.enabled
                    })),
                    Ue = H.paymentSourceId,
                    Fe = (0, Z.H)(ge.id, X),
                    He = Fe.hasEntitlements,
                    We = Fe.entitlements,
                    Ye = (0, S.Ap)(H.paymentSourceId),
                    Ke = (0, _.sE)(ee, Ue, l),
                    Ve = (0, h.Kp)({
                        isTrial: oe,
                        isGift: X,
                        selectedSkuId: me,
                        startedPaymentFlowWithPaymentSources: Ie.current
                    }),
                    Xe = W(a.useState(null == xe ? void 0 : xe.subscriptionPeriodEnd), 2),
                    ze = Xe[0],
                    Je = Xe[1];
                a.useEffect((function() {
                    null == ze && Je(null == xe ? void 0 : xe.subscriptionPeriodEnd)
                }), [null == xe ? void 0 : xe.subscriptionPeriodEnd, ze]);
                var Qe, $e, qe = a.useMemo((function() {
                        return (0, S.V7)({
                            skuId: me,
                            isPremium: _e,
                            multiMonthPlans: [],
                            currentSubscription: pe,
                            isGift: X,
                            isEligibleForTrial: oe,
                            defaultPlanId: be,
                            defaultToMonthlyPlan: !1
                        })
                    }), [me, pe, X, be, _e, oe]),
                    en = (0, h.$g)(Ve, xe, ge);
                if (null != ke) {
                    var nn = ke.message;
                    ke.code === b.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (nn = B.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY);
                    return (0, r.jsx)(c.FormErrorBlock, {
                        children: nn
                    })
                }
                if (X) $e = (0, r.jsx)(L.e9, {
                    paymentSourceId: H.paymentSourceId,
                    plan: ge,
                    className: F().invoice,
                    isPrepaidPaymentSource: Ye,
                    isCustomGift: De
                });
                else if (oe && null != xe) $e = (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(x.KU, {
                        negativeMarginTop: !0
                    }), (0, r.jsxs)(x.PO, {
                        className: F().invoice,
                        children: [(0, r.jsxs)("div", {
                            className: F().trialPriceLine,
                            children: [(0, r.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: B.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, r.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: B.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, T.T4)(0, xe.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: F().afterTrialPriceLine,
                            children: (0, r.jsx)(L.yT, {
                                invoice: xe,
                                plan: ge
                            })
                        })]
                    })]
                });
                else {
                    if (null == xe || null == je || en) return (0, r.jsx)("div", {
                        className: F().spinnerWrapper,
                        children: (0, r.jsx)(c.Spinner, {})
                    });
                    oe && xe.subscriptionPeriodEnd !== je.subscriptionPeriodEnd && (Qe = xe.subscriptionPeriodEnd);
                    $e = (0, r.jsxs)(x.PO, {
                        className: F().invoice,
                        children: [(0, r.jsx)(x.q9, {
                            children: B.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, r.jsx)(L.Lu, {
                            invoice: xe,
                            newPlan: ge,
                            isPrepaidPaymentSource: Ye,
                            referralTrialOfferId: ie
                        }), Ye ? null : (0, r.jsx)(L.nd, {
                            renewalInvoice: je,
                            isTrial: oe,
                            priceOptions: H,
                            overrideRenewalDate: Qe,
                            trialFooterMessageOverride: ne,
                            hideSubscriptionDetails: le
                        })]
                    })
                }
                var tn = s.M.EEA_COUNTRIES.has(E.Z.ipCountryCodeWithFallback),
                    rn = function(e, n, t) {
                        var r = null,
                            a = null,
                            l = null;
                        if (e && null != n) {
                            var i = S.ZP.getIntervalForInvoice(n),
                                s = i.intervalType,
                                o = i.intervalCount,
                                u = (0, T.og)((0, T.T4)(n.total, n.currency), s, o),
                                c = null != t ? t : n.subscriptionPeriodEnd;
                            r = B.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: D.EYA.TERMS,
                                paidURL: D.EYA.PAID_TERMS,
                                rate: u,
                                renewalDate: c
                            });
                            a = F().trialCheckbox;
                            l = F().trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: r,
                            checkboxClassname: a,
                            checkboxLabelClassname: l
                        }
                    }(null != oe && oe, je, Qe),
                    an = rn.checkboxLabel,
                    ln = rn.checkboxClassname,
                    sn = rn.checkboxLabelClassname,
                    on = B.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: ge.name
                    });
                X && !De ? on = B.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : X && De ? on = "" : (0, S.PV)(ge.id) && (on = S.ZP.getBillingReviewSubheader(null, ge));
                return Ke ? null : (0, r.jsxs)("div", {
                    className: F().stepBody,
                    children: [null != te && (0, r.jsxs)("div", {
                        className: F().reviewWarningMessageContainer,
                        children: [(0, r.jsx)(N.Z, {
                            color: u.Z.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, r.jsx)(c.Text, {
                            className: F().reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: te
                        })]
                    }), Ve && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)(x.KU, {
                            negativeMarginTop: !0
                        }), (0, r.jsx)(j.O, {
                            isGift: X,
                            selectedGiftStyle: ye,
                            setSelectedGiftStyle: ve,
                            planOptions: qe,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: l,
                            subscriptionPeriodEnd: ze,
                            showTotal: !1,
                            discountInvoiceItems: Ne ? null == we ? void 0 : we.invoiceItems : void 0
                        }), (0,
                            r.jsx)(x.KU, {})]
                    }), !oe && (0, r.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: on
                    }), De && null != ye && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(R.Z, {
                            defaultAnimationState: P.SR.LOOP,
                            giftStyle: ye,
                            shouldAnimate: !0,
                            className: F().giftMainAnimation
                        }), (0, r.jsx)(w.s, {
                            giftRecipient: he
                        })]
                    }), $e, (0, r.jsxs)("div", {
                        className: F().paymentSourceWrapper,
                        children: [oe ? (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: F().formTitle,
                            children: B.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, r.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: B.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, r.jsx)(p.Z, {
                            paymentSources: Object.values(U),
                            selectedPaymentSourceId: Ue,
                            prependOption: He && !oe ? {
                                label: B.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: z,
                            onPaymentSourceAdd: J,
                            hidePersonalInformation: Be,
                            isTrial: oe
                        }), He && null == Ue ? (0, r.jsx)("div", {
                            className: F().paymentSourceOptionalWarning,
                            children: B.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: We.length
                            })
                        }) : null, ce ? null : (0, r.jsxs)(d.b, {
                            currencies: Y,
                            className: F().currencyWrapper,
                            children: [(0, r.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: B.Z.Messages.PAYMENT_CURRENCY
                            }), (0, r.jsx)(d.Z, {
                                selectedCurrency: H.currency,
                                currencies: Y,
                                onChange: K
                            })]
                        })]
                    }), (0, r.jsx)(C.Z, {
                        isActive: q,
                        ref: $,
                        children: (0, r.jsx)(m.Z, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: an,
                            checkboxClassname: ln,
                            checkboxLabelClassname: sn,
                            finePrint: (0, r.jsx)(f.Z, {
                                hide: oe || ce,
                                subscriptionPlan: ge,
                                renewalInvoice: je,
                                isGift: X,
                                paymentSourceType: null === (t = U[null != Ue ? Ue : ""]) || void 0 === t ? void 0 : t.type,
                                isEmbeddedIAP: fe,
                                basePrice: (0, S.aS)(ge.id, !1, X, H)
                            }),
                            showPricingLink: ge.currency !== k.pK.USD,
                            showWithdrawalWaiver: tn,
                            disabled: Pe,
                            isTrial: oe,
                            isDiscount: ce,
                            subscriptionPlan: ge,
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
                l = t(441143),
                i = t.n(l),
                s = t(202351),
                o = t(70418),
                u = t(673679),
                c = t(19585),
                d = t(782786),
                f = t(744564),
                p = t(933599),
                m = t(665082),
                b = t(315804),
                y = t(54709),
                v = t(652591),
                _ = t(264628),
                h = t(644144),
                I = t(116094),
                E = t(632826),
                O = t(2590),
                N = t(203600),
                g = t(473708);

            function S(e, n, t, r, a, l, i) {
                try {
                    var s = e[l](i),
                        o = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(o) : Promise.resolve(o).then(r, a)
            }

            function T(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function i(e) {
                            S(l, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            S(l, r, a, i, s, "throw", e)
                        }
                        i(void 0)
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
            var x = function(e, n) {
                var t, r, a, l, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function s(l) {
                    return function(s) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(l);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                l = n.call(e, i)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            };

            function C(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = T((function(e) {
                    var n, t, r, a, l, s, o, c, d, S, T, P, C, R, j, L, Z, w, G, D, k, B, U, F, H, W, Y, K, V, X, z, J, Q, $, q, ee, ne, te, re;
                    return x(this, (function(x) {
                        switch (x.label) {
                            case 0:
                                n = e.setPurchaseState, t = e.setHasAcceptedTerms, r = e.setIsSubmitting, a = e.setPurchaseError, l = e.hasRedirectURL, s = e.setHasRedirectURL, o = e.isGift, c = e.giftStyle, d = e.baseAnalyticsData, S = e.analyticsLocation, T = e.analyticsLocations,
                                    P = e.flowStartTime, C = e.subscriptionPlan, R = e.planGroup, j = e.trialId, L = e.priceOptions, Z = e.paymentSource, w = e.isPrepaidPaymentPastDue, G = e.openInvoiceId, D = e.premiumSubscription, k = e.onNext, B = e.metadata, U = e.sku, F = e.skuPricePreview, H = e.purchaseType, W = e.referralCode, Y = e.loadId, K = e.giftRecipient, V = e.customMessage;
                                n(E.A.PURCHASING);
                                t(!0);
                                r(!0);
                                f.Z.wait(p.fw);
                                a(null);
                                x.label = 1;
                            case 1:
                                x.trys.push([1, 15, 16, 17]);
                                v.default.track(O.rMx.PAYMENT_FLOW_COMPLETED, M(A({}, d), {
                                    duration_ms: Date.now() - P
                                }));
                                if (l) return [2];
                                z = (0, h.a8)(K);
                                if (H !== O.GZQ.ONE_TIME) return [3, 3];
                                i()(null != U, "SKU must exist and be fetched.");
                                i()(null != F, "SKUPricePreview must exist.");
                                return [4, (0, b.ZZ)(U.applicationId, U.id, {
                                    expectedAmount: F.amount,
                                    expectedCurrency: F.currency,
                                    paymentSource: Z,
                                    loadId: Y
                                })];
                            case 2:
                                X = x.sent();
                                return [3, 14];
                            case 3:
                                i()(null != C, "Missing subscriptionPlan");
                                if (!o) return [3, 5];
                                if ("usd" === (J = (0, I.aS)(C.id, !1, !0, L)).currency && (null == Z ? void 0 : Z.type) === O.HeQ.GCASH) {
                                    Q = new Error("Invalid USD currency for GCash");
                                    (0, _.q2)(Q, {
                                        tags: {
                                            paymentSourceId: null !== ($ = null == Z ? void 0 : Z.id) && void 0 !== $ ? $ : "",
                                            subscriptionPlanId: C.id,
                                            priceOptions: JSON.stringify(L)
                                        }
                                    })
                                }
                                return [4, (0, b.ZZ)(N.RQ, C.skuId, {
                                    expectedAmount: J.amount,
                                    expectedCurrency: J.currency,
                                    paymentSource: Z,
                                    subscriptionPlanId: C.id,
                                    isGift: !0,
                                    giftStyle: c,
                                    loadId: Y,
                                    recipientId: z ? null == K ? void 0 : K.id : void 0,
                                    customMessage: z ? V : void 0
                                })];
                            case 4:
                                X = x.sent();
                                return [3, 14];
                            case 5:
                                return w && null != G && null != Z && null != D ? O.Uk1.has(Z.type) ? [4, (0, u.G)(D, G, Z, L.currency)] : [3, 7] : [3, 10];
                            case 6:
                                q = x.sent();
                                return [3, 9];
                            case 7:
                                return [4, (0, u.Mg)(D, {
                                    paymentSource: Z,
                                    currency: L.currency
                                }, T, S)];
                            case 8:
                                q = x.sent();
                                x.label = 9;
                            case 9:
                                X = q;
                                return [3, 14];
                            case 10:
                                return null == D ? [3, 12] : [4, (0, u.Mg)(D, {
                                    items: (0, I.al)(D, C.id, 1, new Set(R)),
                                    paymentSource: Z,
                                    currency: L.currency
                                }, T, S)];
                            case 11:
                                X = x.sent();
                                return [3, 14];
                            case 12:
                                return [4, (0, m.Ld)({
                                    planId: C.id,
                                    currency: L.currency,
                                    paymentSource: Z,
                                    trialId: j,
                                    metadata: B,
                                    referralCode: W,
                                    loadId: Y
                                })];
                            case 13:
                                X = x.sent();
                                x.label = 14;
                            case 14:
                                if (X.redirectConfirmation) {
                                    s(null != X.redirectURL);
                                    return [2]
                                }
                                ee = M(A({}, d), {
                                    duration_ms: Date.now() - P,
                                    payment_source_type: null == Z ? void 0 : Z.type
                                });
                                z && (ee.is_custom_message_edited = V !== g.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE);
                                v.default.track(O.rMx.PAYMENT_FLOW_SUCCEEDED, ee);
                                n(E.A.COMPLETED);
                                "subscription" in X ? ne = null != X.subscription ? y.Z.createFromServer(X.subscription) : null : "entitlements" in X && (te = null != X.entitlements ? X.entitlements : void 0);
                                k(ne, te);
                                return [3, 17];
                            case 15:
                                re = x.sent();
                                n(E.A.FAIL);
                                a(re);
                                v.default.track(O.rMx.PAYMENT_FLOW_FAILED, M(A({}, d), {
                                    payment_source_id: null == Z ? void 0 : Z.id,
                                    payment_source_type: null == Z ? void 0 : Z.type,
                                    duration_ms: Date.now() - P
                                }));
                                return [3, 17];
                            case 16:
                                l || r(!1);
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
                B = t(509897),
                U = t(111090),
                F = t(820610),
                H = t(787257),
                W = t.n(H);

            function Y(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function K(e, n, t, r, a, l, i) {
                try {
                    var s = e[l](i),
                        o = s.value
                } catch (e) {
                    t(e);
                    return
                }
                s.done ? n(o) : Promise.resolve(o).then(r, a)
            }

            function V(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var l = e.apply(n, t);

                        function i(e) {
                            K(l, r, a, i, s, "next", e)
                        }

                        function s(e) {
                            K(l, r, a, i, s, "throw", e)
                        }
                        i(void 0)
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
                        var r, a, l = [],
                            i = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                l.push(r.value);
                                if (n && l.length === n) break
                            }
                        } catch (e) {
                            s = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                        return l
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
                var t, r, a, l, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function s(l) {
                    return function(s) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a;
                                (r = 0, a) && (l = [2 & l[0], a.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        a = l;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!a || l[1] > a[0] && l[1] < a[3])) {
                                            i.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = l;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(l);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                l = n.call(e, i)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, s])
                    }
                }
            };

            function q(e) {
                var n = e.premiumSubscription,
                    t = e.setPurchaseState,
                    l = e.onBack,
                    f = e.onNext,
                    p = e.legalTermsNodeRef,
                    m = e.flashLegalTerms,
                    b = e.invoiceError,
                    y = e.planError,
                    _ = e.onPurchaseError,
                    h = e.baseAnalyticsData,
                    N = e.flowStartTime,
                    g = e.isGift,
                    S = void 0 !== g && g,
                    T = e.giftStyle,
                    P = e.customGiftMessage,
                    A = e.trialId,
                    M = e.planGroup,
                    x = e.analyticsLocation,
                    R = e.purchaseTokenAuthState,
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
                    le = ne.setPurchaseError,
                    ie = ne.purchaseType,
                    se = ne.paymentSourceId,
                    oe = ne.paymentSources,
                    ue = ne.selectedSkuId,
                    ce = ne.skusById,
                    de = ne.skuPricePreviewsById,
                    fe = ne.referralCode,
                    pe = ne.contextMetadata,
                    me = ne.giftRecipient,
                    be = null == te ? void 0 : te.id,
                    ye = (0, L.sE)(A, re.paymentSourceId, be),
                    ve = (0, s.e7)([Z.Z], (function() {
                        return Z.Z.popupCallbackCalled
                    })),
                    _e = (0, c.Z)().analyticsLocations,
                    he = null != se ? oe[se] : null,
                    Ie = Q(a.useState(ye), 2),
                    Ee = Ie[0],
                    Oe = Ie[1],
                    Ne = Q(a.useState(!1), 2),
                    ge = Ne[0],
                    Se = Ne[1],
                    Te = (0, U.H)(be, S).hasEntitlements,
                    Pe = (0, I.Ap)(re.paymentSourceId),
                    Ae = Te || ye,
                    Me = (0, k.U)(),
                    xe = null,
                    Ce = null;
                if (ie === O.GZQ.ONE_TIME) {
                    i()(null != ue, "SKU must be selected for one-time purchases");
                    var Re;
                    xe = null !== (Re = ce[ue]) && void 0 !== Re ? Re : null;
                    i()(null != xe, "SKU must exist and be fetched.");
                    var je = de[ue],
                        Le = null != se ? se : G.c;
                    Ce = null != je ? je[Le] : null
                }
                var Ze, we = (Ze = V((function() {
                    return $(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, C({
                                    setPurchaseState: t,
                                    setHasAcceptedTerms: ae,
                                    setIsSubmitting: Oe,
                                    setPurchaseError: le,
                                    hasRedirectURL: ge,
                                    setHasRedirectURL: Se,
                                    isGift: S,
                                    giftStyle: T,
                                    baseAnalyticsData: h,
                                    analyticsLocation: x,
                                    analyticsLocations: _e,
                                    flowStartTime: N,
                                    subscriptionPlan: te,
                                    planGroup: M,
                                    trialId: A,
                                    priceOptions: re,
                                    paymentSource: he,
                                    isPrepaidPaymentPastDue: Me,
                                    openInvoiceId: H,
                                    premiumSubscription: n,
                                    onNext: f,
                                    metadata: Y,
                                    sku: xe,
                                    skuPricePreview: Ce,
                                    purchaseType: ie,
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
                                        if (!0 !== ve) return [3, 6];
                                        n.label = 1;
                                    case 1:
                                        n.trys.push([1, 3, 4, 5]);
                                        return null == Z.Z.redirectedPaymentId ? [2] : [4, (0, u.OP)(Z.Z.redirectedPaymentId)];
                                    case 2:
                                        n.sent();
                                        v.default.track(O.rMx.PAYMENT_FLOW_SUCCEEDED, J(z({}, h), {
                                            duration_ms: Date.now() - N,
                                            payment_source_type: null == he ? void 0 : he.type
                                        }));
                                        t(E.A.COMPLETED);
                                        f();
                                        return [3, 5];
                                    case 3:
                                        e = n.sent();
                                        t(E.A.FAIL);
                                        _(e);
                                        v.default.track(O.rMx.PAYMENT_FLOW_FAILED, J(z({}, h), {
                                            payment_source_id: se,
                                            payment_source_type: null == he ? void 0 : he.type,
                                            duration_ms: Date.now() - N
                                        }));
                                        return [3, 5];
                                    case 4:
                                        Oe(!1);
                                        (0, u.K2)();
                                        return [7];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return R !== w.I.SUCCESS ? [3, 8] : [4, we()];
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
                }), [ve]);
                a.useEffect((function() {
                    ye && !S && null == n && we()
                }), [ye, S, n]);
                var Ge = null != H || ie === O.GZQ.ONE_TIME;
                return ye ? null : (0, r.jsxs)(o.ModalFooter, {
                    align: D.Z.Align.CENTER,
                    children: [(0, r.jsx)(F.Z, {
                        legalTermsNodeRef: p,
                        invoiceError: b,
                        planError: y,
                        disablePurchase: X,
                        flashLegalTerms: m,
                        isSubmitting: Ee,
                        premiumSubscription: n,
                        isGift: S,
                        planGroup: M,
                        isPrepaid: Pe,
                        isTrial: ee,
                        makePurchase: we,
                        needsPaymentSource: null == he && !Ae
                    }), (0, r.jsx)(j.Z, {}), K && !Ge ? (0, r.jsx)("div", {
                        className: W().back,
                        children: (0, r.jsx)(B.Z, {
                            onClick: l
                        })
                    }) : null]
                })
            }
        },
        369263: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => v
            });
            var r = t(785893),
                a = (t(667294), t(294184)),
                l = t.n(a),
                i = t(318715),
                s = t(70418),
                o = t(821),
                u = t(149258),
                c = t(102007),
                d = t(598679),
                f = t(203600),
                p = t(107159),
                m = t.n(p);

            function b(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function y(e) {
                var n = e.errors;
                return (0, r.jsx)(r.Fragment, {
                    children: n.map((function(e, n) {
                        return (0, r.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            className: m().errorMessage,
                            children: (t = e, t.replace(/[0-9.,]+ ?kb/g, (function(e) {
                                var n = 1024 * parseInt(e, 10);
                                return isNaN(n) ? e : (0, u.Ng)(n)
                            })))
                        }, n);
                        var t
                    }))
                })
            }

            function v(e) {
                var n, t = e.title,
                    a = e.titleIcon,
                    u = e.titleId,
                    p = e.description,
                    v = e.children,
                    _ = e.className,
                    h = e.errors,
                    I = e.disabled,
                    E = void 0 !== I && I,
                    O = e.hideDivider,
                    N = void 0 !== O && O,
                    g = e.showBorder,
                    S = void 0 !== g && g,
                    T = e.borderType,
                    P = e.hasBackground,
                    A = void 0 !== P && P,
                    M = e.forcedDivider,
                    x = void 0 !== M && M,
                    C = e.showPremiumIcon,
                    R = void 0 !== C && C,
                    j = (0, i.ZP)([o.Z], (function() {
                        var e = o.Z.activeSubstep;
                        return null != e && f.rN[e] === f.QD.PROFILE_CUSTOMIZATION
                    }));
                return (0, r.jsx)("div", {
                    className: l()(m().customizationSection, _, (n = {}, b(n, m().disabled, E), b(n, m().hideDivider, N), b(n, m().showBorder, S), b(n, m().withDivider, x), n)),
                    children: (0, r.jsxs)(d.Z, {
                        className: m().customizationSectionBorder,
                        backgroundClassName: m().customizationSectionBackground,
                        isShown: S && !j,
                        type: T,
                        hasBackground: A,
                        children: [(0, r.jsxs)(s.FormTitle, {
                            className: m().title,
                            id: u,
                            children: [t, R && (0, r.jsx)(c.Z, {}), a]
                        }), null != p ? (0, r.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: m().sectionDescription,
                            children: p
                        }) : null, v, null != h && (0, r.jsx)(y, {
                            errors: h
                        })]
                    })
                })
            }
        },
        852316: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        947592: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => r
            });
            const r = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        }
    }
]);