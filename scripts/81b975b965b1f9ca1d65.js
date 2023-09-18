(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [42745], {
        497206: (e, t, r) => {
            e.exports = r.p + "5fe15d1753b3a2c9050dc9750d255163.svg"
        },
        415324: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => l,
                Z: () => o
            });
            var n = r(785893),
                i = (r(667294), r(882723)),
                a = r(473708);

            function s(e) {
                switch (e) {
                    case "brl":
                        return a.Z.Messages.BRL_NAME;
                    case "pln":
                        return a.Z.Messages.PLN_NAME;
                    case "try":
                        return a.Z.Messages.TRY_NAME;
                    case "usd":
                        return a.Z.Messages.USD_NAME;
                    case "aud":
                        return a.Z.Messages.AUD_NAME;
                    case "pen":
                        return a.Z.Messages.PEN_NAME;
                    case "php":
                        return a.Z.Messages.PHP_NAME;
                    case "ars":
                        return a.Z.Messages.ARS_NAME;
                    case "cop":
                        return a.Z.Messages.COP_NAME;
                    case "clr":
                        return a.Z.Messages.CLR_NAME;
                    case "jpy":
                        return a.Z.Messages.JPY_NAME;
                    case "idr":
                        return a.Z.Messages.IDR_NAME;
                    case "vnd":
                        return a.Z.Messages.VND_NAME;
                    case "thb":
                        return a.Z.Messages.THB_NAME;
                    case "myr":
                        return a.Z.Messages.MYR_NAME;
                    case "krw":
                        return a.Z.Messages.KRW_NAME;
                    case "mxn":
                        return a.Z.Messages.MXN_NAME;
                    case "bgn":
                        return a.Z.Messages.BGN_NAME;
                    case "czk":
                        return a.Z.Messages.CZK_NAME;
                    case "dkk":
                        return a.Z.Messages.DKK_NAME;
                    case "huf":
                        return a.Z.Messages.HUF_NAME;
                    case "ron":
                        return a.Z.Messages.RON_NAME;
                    case "sek":
                        return a.Z.Messages.SEK_NAME;
                    case "eur":
                        return a.Z.Messages.EUR_NAME;
                    default:
                        return ""
                }
            }

            function l(e) {
                var t = e.currencies,
                    r = e.className,
                    i = e.children;
                return t.length < 2 ? null : (0, n.jsx)("div", {
                    className: r,
                    children: i
                })
            }
            const o = function(e) {
                var t = e.currencies,
                    r = e.onChange,
                    a = e.selectedCurrency,
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
                return (0, n.jsx)(i.SingleSelect, {
                    value: a,
                    options: u,
                    onChange: function(e) {
                        null != e && r(e)
                    },
                    className: l,
                    isDisabled: c
                })
            }
        },
        986304: (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => b
            });
            var n = r(441143),
                i = r.n(n),
                a = r(685269),
                s = r(717035),
                l = r(27059),
                o = r(652591),
                c = r(782786),
                u = r(83471),
                d = r(2590),
                f = r(203600);

            function p(e, t, r) {
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
                        p(e, t, r[t])
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

            function b(e) {
                var t = e.analyticsData,
                    r = e.initialPlanId,
                    n = e.breadcrumbSteps,
                    p = e.handleStepChange,
                    b = e.referralTrialOfferId,
                    h = e.onReturn,
                    I = (0,
                        c.usePaymentContext)(),
                    O = I.contextMetadata,
                    _ = I.step,
                    g = I.paymentSources,
                    v = I.paymentSourceId,
                    P = I.setPaymentSourceId,
                    S = I.purchaseError,
                    E = I.setPurchaseError,
                    N = I.purchaseErrorBlockRef,
                    T = I.paymentAuthenticationState,
                    A = I.isGift,
                    j = I.selectedSkuId,
                    x = m(y({}, (0, l.fL)()), {
                        paymentSources: g,
                        paymentSourceId: v,
                        setPaymentSourceId: P,
                        purchaseError: S,
                        setPurchaseError: E,
                        purchaseErrorBlockRef: N,
                        paymentAuthenticationState: T
                    }),
                    M = (0, s.N)(b),
                    C = !A && null != M && null != j && f.nG[M.trial_id].skus.includes(j),
                    R = null != h ? h : function() {
                        var e = Object.values(g).length < 1 && null == r ? u.h8.PLAN_SELECT : u.h8.REVIEW;
                        p(e, {
                            trackedFromStep: u.h8.PAYMENT_TYPE
                        })
                    };
                i()(_, "Step should be set here");
                var L = (0, a.Z)((function() {
                    return Date.now()
                }), [_]);
                return (0, l.vP)({
                    paymentModalArgs: x,
                    initialStep: u.h8.PAYMENT_TYPE,
                    prependSteps: [u.h8.PROMOTION_INFO],
                    appendSteps: [u.h8.REVIEW, u.h8.CONFIRM],
                    breadcrumpSteps: n,
                    currentBreadcrumpStep: _,
                    usePaymentModalStep: !0,
                    onReturn: R,
                    onComplete: function(e) {
                        p(u.h8.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: function(e) {
                        var r = e.currentStep,
                            n = e.toStep,
                            i = Date.now();
                        o.default.track(d.rMx.PAYMENT_FLOW_STEP, m(y({}, t), {
                            from_step: r,
                            to_step: n,
                            step_duration_ms: i - L,
                            flow_duration_ms: i - O.startTime
                        }))
                    },
                    isEligibleForTrial: C
                })
            }
        },
        493957: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => c
            });
            var n = r(785893),
                i = (r(667294), r(554189)),
                a = r(128059),
                s = r(149096),
                l = r(894123),
                o = r.n(l);

            function c() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(a.Z, {}), (0, n.jsx)(s.C3, {
                        children: (0, n.jsx)(i.F, {
                            className: o().awaitingAuthenticationStep
                        })
                    })]
                })
            }
        },
        806706: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => g
            });
            var n = r(785893),
                i = r(667294),
                a = r(315804),
                s = r(882723),
                l = r(107364),
                o = r(473708),
                c = r(916217),
                u = r.n(c),
                d = function(e) {
                    var t = e.className,
                        r = e.isEmailResent,
                        i = e.resendEmail;
                    return (0, n.jsx)("div", {
                        className: t,
                        children: (0, n.jsxs)("div", {
                            className: u().awaitingWrapper,
                            children: [(0, n.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, n.jsxs)("p", {
                                children: [(0, n.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, n.jsx)("br", {}), (0, n.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, n.jsx)("br", {}), (0, n.jsxs)(s.Text, {
                                    variant: "text-md/normal",
                                    children: [o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, " ", r ? o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, n.jsx)(s.Anchor, {
                                        onClick: i,
                                        children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                f = function() {
                    return (0, n.jsx)("div", {
                        children: (0, n.jsx)(s.ModalFooter, {
                            justify: l.Z.Justify.BETWEEN,
                            align: l.Z.Align.CENTER,
                            children: (0, n.jsx)(s.Button, {
                                "data-testid": "continue",
                                color: s.Button.Colors.BRAND,
                                disabled: !0,
                                children: o.Z.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                            })
                        })
                    })
                },
                p = r(128059),
                y = r(149096),
                m = r(379466),
                b = r.n(m);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function I(e, t, r, n, i, a, s) {
                try {
                    var l = e[a](s),
                        o = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(n, i)
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return h(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var _ = function(e, t) {
                var r, n, i, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                (n = 0, i) && (a = [2 & a[0], i.value]);
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
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
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
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function g() {
                var e, t, r = O(i.useState(!1), 2),
                    s = r[0],
                    l = r[1],
                    o = (t = (e = function() {
                        return _(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    l(!0);
                                    return [4, (0, a.xA)()];
                                case 1:
                                    e.sent();
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(n, i) {
                            var a = e.apply(t, r);

                            function s(e) {
                                I(a, n, i, s, l, "next", e)
                            }

                            function l(e) {
                                I(a, n, i, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }), function() {
                        return t.apply(this, arguments)
                    });
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(p.Z, {}), (0, n.jsx)(y.C3, {
                        children: (0, n.jsx)(d, {
                            className: b().body,
                            isEmailResent: s,
                            resendEmail: o
                        })
                    }), (0, n.jsx)(y.O3, {
                        children: (0, n.jsx)(f, {})
                    })]
                })
            }
        },
        837598: (e, t, r) => {
            "use strict";
            r.d(t, {
                sE: () => s
            });
            var n = r(260561),
                i = r(116094),
                a = (0, n.B)({
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
                s = function(e, t, r) {
                    var n = a.useExperiment({
                            location: "aeb070_1"
                        }, {
                            autoTrackExposure: !1
                        }).bypassCheckout,
                        s = function(e, t, r) {
                            var n = null == r || (0, i.uZ)(r);
                            return null != e && null == t && n
                        }(e, t, r);
                    return n && s
                }
        },
        471450: (e, t, r) => {
            "use strict";
            r.d(t, {
                ZP: () => s,
                aQ: () => o
            });
            var n = r(197597),
                i = r(260561),
                a = r(203600);
            const s = (0, i.B)({
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
                        newPlans: [a.Xh.PREMIUM_6_MONTH_TIER_2, a.Xh.PREMIUM_3_MONTH_TIER_2]
                    }
                }, {
                    id: 2,
                    label: "3 Month Plan Only",
                    config: {
                        newPlans: [a.Xh.PREMIUM_3_MONTH_TIER_2]
                    }
                }]
            });
            var l = new Set([n.S.US, n.S.CA]);

            function o(e) {
                return null == e || l.has(e.country)
            }
        },
        100749: (e, t, r) => {
            "use strict";
            r.d(t, {
                hz: () => g,
                ED: () => E,
                Ox: () => N,
                pV: () => T
            });
            var n = r(667294),
                i = r(202351),
                a = r(281110),
                s = r(347365),
                l = r(370459),
                o = r(536392),
                c = r(116094),
                u = r(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e, t, r, n, i, a, s) {
                try {
                    var l = e[a](s),
                        o = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(n, i)
            }

            function p(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = e.apply(t, r);

                        function s(e) {
                            f(a, n, i, s, l, "next", e)
                        }

                        function l(e) {
                            f(a, n, i, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function y(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        y(e, t, r[t])
                    }))
                }
                return e
            }

            function b(e, t) {
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

            function h(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) {
                        r = a[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O = function(e, t) {
                var r, n, i, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                (n = 0, i) && (a = [2 & a[0], i.value]);
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
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
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
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function _() {
                return (_ = p((function(e) {
                    var t, r, n, i, o, d, f, p, y, I, _, g;
                    return O(this, (function(O) {
                        switch (O.label) {
                            case 0:
                                t = e.items, r = e.paymentSourceId, n = e.trialId, i = e.code, o = e.applyEntitlements, d = void 0 !== o && o,
                                    f = e.currency, p = e.renewal, y = e.metadata;
                                t = (0, c.gB)(t);
                                I = {
                                    items: t.map((function(e) {
                                        var t = e.planId;
                                        return b(m({}, h(e, ["planId"])), {
                                            plan_id: t
                                        })
                                    })),
                                    payment_source_id: r,
                                    trial_id: n,
                                    code: i,
                                    apply_entitlements: d,
                                    currency: f,
                                    renewal: p,
                                    metadata: y
                                };
                                O.label = 1;
                            case 1:
                                O.trys.push([1, 3, , 4]);
                                return [4, a.ZP.post({
                                    url: u.ANM.BILLING_SUBSCRIPTIONS_PREVIEW,
                                    body: I,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                _ = O.sent();
                                return [2, l.Z.createInvoiceFromServer(_.body)];
                            case 3:
                                g = O.sent();
                                throw new s.HF(g);
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function g(e) {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = p((function(e) {
                    var t, r, n, i, o, d, f, p, y, I, _, g;
                    return O(this, (function(O) {
                        switch (O.label) {
                            case 0:
                                t = e.subscriptionId, r = e.items, n = e.paymentSourceId, i = e.renewal, o = e.currency, d = e.applyEntitlements, f = void 0 !== d && d, p = e.analyticsLocations, y = e.analyticsLocation;
                                null != r && (r = (0, c.gB)(r));
                                I = {
                                    items: null == r ? void 0 : r.map((function(e) {
                                        var t = e.planId;
                                        return b(m({}, h(e, ["planId"])), {
                                            plan_id: t
                                        })
                                    })),
                                    payment_source_id: n,
                                    renewal: i,
                                    apply_entitlements: f,
                                    currency: o
                                };
                                O.label = 1;
                            case 1:
                                O.trys.push([1, 3, , 4]);
                                return [4, a.ZP.patch({
                                    url: u.ANM.BILLING_SUBSCRIPTION_PREVIEW(t),
                                    query: {
                                        location: y,
                                        location_stack: p
                                    },
                                    body: I,
                                    oldFormErrors: !0
                                })];
                            case 2:
                                _ = O.sent();
                                return [2, l.Z.createInvoiceFromServer(_.body)];
                            case 3:
                                g = O.sent();
                                throw new s.HF(g);
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P() {
                return (P = p((function(e) {
                    var t, r;
                    return O(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                t = e.subscriptionId;
                                return e.preventFetch ? [2, null] : [4, a.ZP.get({
                                    url: u.ANM.BILLING_SUBSCRIPTION_INVOICE(t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                r = n.sent();
                                return [2, l.Z.createInvoiceFromServer(r.body)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(e, t) {
                var r = e.preventFetch,
                    a = void 0 !== r && r,
                    s = I((0, n.useState)(null), 2),
                    l = s[0],
                    c = s[1],
                    u = I((0, n.useState)(null), 2),
                    d = u[0],
                    f = u[1],
                    y = (0, i.e7)([o.Z], (function() {
                        return o.Z.getSubscriptions()
                    }));
                (0, n.useEffect)((function() {
                    var e = !1;

                    function r() {
                        return (r = p((function() {
                            var r, n;
                            return O(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        i.trys.push([0, 2, , 3]);
                                        f(null);
                                        c(null);
                                        return [4, t()];
                                    case 1:
                                        r = i.sent();
                                        e || c(r);
                                        return [3, 3];
                                    case 2:
                                        n = i.sent();
                                        e || f(n);
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))).apply(this, arguments)
                    }
                    a || function() {
                        r.apply(this, arguments)
                    }();
                    return function() {
                        e = !0
                    }
                }), [a, t, y]);
                return [l, d]
            }

            function E(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    e.subscriptionId;
                    var t = h(e, ["subscriptionId"]);
                    e = t
                }
                var r = (0, n.useCallback)((function() {
                    return "subscriptionId" in e ? g(e) : "items" in e ? function(e) {
                        return _.apply(this, arguments)
                    }(e) : null
                }), [JSON.stringify(e)]);
                return S(e, r)
            }

            function N(e) {
                var t = (0, n.useCallback)((function() {
                    return function(e) {
                        return P.apply(this, arguments)
                    }(e)
                }), [JSON.stringify(e)]);
                return S(e, t)
            }

            function T(e) {
                var t = e.subscriptionPlanPrice;
                e.discounts.forEach((function(r) {
                    var n = r.amount / e.quantity;
                    t -= n
                }));
                return t
            }
        },
        499171: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => f
            });
            var n = r(730381),
                i = r.n(n),
                a = r(202351),
                s = r(711531),
                l = r(551778),
                o = r(536392),
                c = r(116094),
                u = r(2590),
                d = r(520453);

            function f() {
                var e = (0,
                        a.e7)([o.Z], (function() {
                        return o.Z.getPremiumTypeSubscription()
                    })),
                    t = (0, a.e7)([l.Z], (function() {
                        return null != e && null != e.planIdFromItems ? l.Z.get(null == e ? void 0 : e.planIdFromItems) : null
                    })),
                    r = (0, a.e7)([s.Z], (function() {
                        return null != e && null != e.paymentSourceId ? s.Z.getPaymentSource(e.paymentSourceId) : null
                    }), [e]),
                    n = null != r && d.Uk.has(r.type),
                    f = (null == e ? void 0 : e.status) === u.O0b.PAST_DUE ? i()().diff(i()(e.currentPeriodStart), "days") : 0;
                return !(null == e || null == t || !(0, c.uZ)(t.id)) && (n && f >= 0 && f <= (0, c.lU)(e) && e.status === u.O0b.PAST_DUE && !e.isPurchasedExternally)
            }
        },
        668900: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => _,
                U: () => I
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                s = r(441143),
                l = r.n(s),
                o = r(265367),
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
            var p = r(902954),
                y = r(2590),
                m = r(473708),
                b = r(407156),
                h = r.n(b);

            function I() {
                var e = (0, p.Z)(),
                    t = d.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    r = f.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return null != e && ("PL" === e ? t : "TR" === e && r)
            }

            function O(e, t) {
                return "PL" === e ? t ? m.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === e ? t ? m.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : t ? m.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : m.Z.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING
            }
            const _ = function(e) {
                var t = e.fromBoostCancelModal,
                    r = e.className,
                    i = (0, p.Z)();
                if (!I()) return null;
                l()(null != i, "Subscription billing country should not be null");
                return (0, n.jsxs)("div", {
                    className: a()(h().noticeRoot, r),
                    children: [(0, n.jsx)("div", {
                        className: h().iconContainer,
                        children: (0, n.jsx)(o.Z, {
                            className: h().infoIcon
                        })
                    }), (0, n.jsx)("div", {
                        className: h().text,
                        children: O(i, t).format({
                            helpCenterLink: c.Z.getArticleURL(y.BhN.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        509897: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => o
            });
            var n = r(785893),
                i = (r(667294), r(882723)),
                a = r(473708),
                s = r(362601),
                l = r.n(s);
            const o = function(e) {
                var t = e.onClick;
                return (0, n.jsx)(i.Anchor, {
                    onClick: t,
                    className: l().link,
                    children: a.Z.Messages.BACK
                })
            }
        },
        556663: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => je,
                M: () => xe
            });
            var n = r(785893),
                i = r(667294),
                a = r(441143),
                s = r.n(a),
                l = r(202351),
                o = r(882723),
                c = r(929400),
                u = r(782786),
                d = r(83471);
            const f = (0, r(260561).B)({
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
            var p = r(551778),
                y = r(536392),
                m = r(644144),
                b = r(348592),
                h = r(120415),
                I = r(116094),
                O = r(249052),
                _ = r(471450),
                g = r(470387),
                v = r(165666),
                P = r(717035),
                S = r(668900),
                E = r(16703),
                N = r(367095),
                T = r(281808),
                A = r(855483),
                j = r(963058),
                x = r(369263),
                M = r(382060),
                C = r(2590),
                R = r(473708),
                L = r(386522),
                w = r.n(L);

            function Z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Z(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Z(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = (0, M.kt)({
                id: "1",
                type: C.d4z.DM
            });

            function D(e) {
                var t = e.sectionTitle,
                    r = e.errors,
                    a = e.onTextChange,
                    s = e.pendingText,
                    l = e.placeholder,
                    c = e.currentText,
                    u = e.disabled,
                    d = void 0 !== u && u,
                    f = G(i.useState(null != s ? s : c), 2),
                    p = f[0],
                    y = f[1],
                    m = G(i.useState((0, A.JM)(p)), 2),
                    b = m[0],
                    h = m[1],
                    I = i.useRef(!1);
                i.useEffect((function() {
                    if (void 0 === s) {
                        var e = (0, A.JM)(c);
                        y(c);
                        h(e)
                    }
                }), [s, c]);
                return (0, n.jsx)("div", {
                    className: w().body,
                    children: (0, n.jsxs)(x.Z, {
                        title: t,
                        errors: r,
                        disabled: d,
                        children: [(0, n.jsx)(j.Z, {
                            innerClassName: w().textArea,
                            maxCharacterCount: 190,
                            onChange: function(e, t, r) {
                                if (t !== p) {
                                    y(t);
                                    h(r);
                                    a(t)
                                }
                            },
                            placeholder: l,
                            channel: k,
                            textValue: p,
                            richValue: b,
                            type: T.I.CUSTOM_GIFT,
                            onBlur: function() {
                                I.current = !1
                            },
                            onFocus: function() {
                                I.current = !0
                            },
                            focused: I.current,
                            onSubmit: function() {
                                return new Promise((function(e) {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                }))
                            }
                        }), (0, n.jsx)(o.HiddenVisually, {
                            children: R.Z.Messages.MAXIMUM_LENGTH.format({
                                maxLength: 190
                            })
                        })]
                    })
                })
            }
            var B = r(386991),
                U = r(69427),
                F = r(621270),
                H = r(882211),
                W = r(685214),
                Y = r.n(W);

            function K(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function V(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function X(e, t) {
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

            function z(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return K(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return K(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var J = i.forwardRef((function(e, t) {
                    var r, a = e.isSelected,
                        s = e.giftStyle,
                        l = e.setSelectedGiftStyle,
                        c = e.onFocus,
                        u = e.onBlur,
                        d = e.shouldAnimate,
                        f = void 0 === d || d,
                        p = z(i.useState(!1), 2),
                        y = p[0],
                        m = p[1];
                    switch (s) {
                        case U.Cj.SNOWGLOBE:
                            r = R.Z.Messages.SEASONAL_GIFTING_OPTION_SNOWGLOBE;
                            break;
                        case U.Cj.BOX:
                            r = R.Z.Messages.SEASONAL_GIFTING_OPTION_BOX;
                            break;
                        case U.Cj.CUP:
                            r = R.Z.Messages.SEASONAL_GIFTING_OPTION_CUP;
                            break;
                        default:
                            r = R.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                    }
                    var b = (0, o.useRadioItem)({
                        isSelected: a,
                        label: r
                    });
                    return (0, n.jsx)(o.Clickable, X(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                V(e, t, r[t])
                            }))
                        }
                        return e
                    }({
                        innerRef: t,
                        className: Y().clickable,
                        onClick: function() {
                            return l(s)
                        }
                    }, b), {
                        onFocus: c,
                        onBlur: u,
                        onMouseEnter: function() {
                            return m(!0)
                        },
                        onMouseLeave: function() {
                            return m(!1)
                        },
                        children: (0, n.jsx)(H.Z, {
                            giftStyle: s,
                            className: a ? Y().customGiftBoxHighlighted : Y().customGiftBox,
                            shouldAnimate: (y || a) && f
                        })
                    }))
                })),
                $ = r(559293),
                Q = r.n($);

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function ee(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        ee(e, t, r[t])
                    }))
                }
                return e
            }

            function re(e, t) {
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

            function ne(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return q(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return q(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ie = [U.Cj.BOX, U.Cj.CUP, U.Cj.SNOWGLOBE],
                ae = [U.Cj.STANDARD_BOX, U.Cj.CAKE, U.Cj.COFFEE, U.Cj.CHEST],
                se = function() {
                    return (0, n.jsxs)("div", {
                        className: Q().giftBoxHeaderContainer,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: Q().giftBoxHeaderText,
                            children: R.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }), (0, n.jsx)(o.Tooltip, {
                            text: R.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                            position: "top",
                            children: function(e) {
                                return (0, n.jsx)(o.Clickable, re(te({}, e), {
                                    className: Q().infoIconContainer,
                                    "aria-label": R.Z.Messages.SEASONAL_GIFTING_INFO_TOOLTIP,
                                    children: (0, n.jsx)(B.Z, {
                                        className: Q().infoIcon
                                    })
                                }))
                            }
                        })]
                    })
                },
                le = function(e) {
                    var t = e.selectedGiftStyle,
                        r = e.setSelectedGiftStyle,
                        a = (0, u.usePaymentContext)().giftRecipient,
                        s = ne(i.useState(!1), 2),
                        l = s[0],
                        c = s[1],
                        d = i.useRef(null),
                        f = (0, o.useRadioGroup)({
                            orientation: "horizontal"
                        }),
                        p = F.ZP.getCurrentConfig({
                            location: "premiumGiftSelect_GiftAnimationOptions"
                        }).enabled,
                        y = (0, m.a8)(a),
                        b = null;
                    p ? b = ie : y && (b = ae);
                    return (0, n.jsxs)("div", {
                        children: [p && (0, n.jsx)(se, {}), y && (0, n.jsx)(H.Z, {
                            giftStyle: t,
                            shouldAnimate: !0,
                            className: Q().giftMainAnimation
                        }), (0, n.jsx)("div", re(te({
                            tabIndex: null != t || l ? void 0 : 0,
                            onFocus: function(e) {
                                var t;
                                e.target === e.currentTarget && (null === (t = d.current) || void 0 === t || t.focus())
                            },
                            className: Q().giftBoxOptionContainer,
                            "aria-label": R.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX
                        }, f), {
                            children: null != b && b.map((function(e, i) {
                                return (0, n.jsx)(J, {
                                    isSelected: t === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: r,
                                    ref: 0 === i ? d : null,
                                    onFocus: function() {
                                        return c(!0)
                                    },
                                    onBlur: function() {
                                        return c(!1)
                                    },
                                    shouldAnimate: !1
                                }, e)
                            }))
                        })), (0, n.jsx)("div", {
                            className: Q().selectPlanDivider
                        })]
                    })
                },
                oe = r(509897),
                ce = r(111090),
                ue = r(294184),
                de = r.n(ue),
                fe = r(795308),
                pe = r(384411),
                ye = r(203600),
                me = r(761088),
                be = r.n(me);

            function he(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Ie(e) {
                var t = e.premiumSubscription,
                    r = e.planId,
                    i = e.selectPlan,
                    a = e.selected,
                    c = e.isGift,
                    d = e.priceOptions,
                    f = e.shouldShowUpdatedPaymentModal,
                    y = (0, l.e7)([pe.default], (function() {
                        return pe.default.locale
                    })),
                    b = (0, l.e7)([p.Z], (function() {
                        return p.Z.get(r)
                    })),
                    h = (0, u.usePaymentContext)().giftRecipient,
                    _ = (0, m.a8)(h);
                s()(null != b, "Missing subscriptionPlan");
                var g, v = null != t && t.planId === r,
                    P = v || r === ye.Xh.PREMIUM_MONTH_TIER_2 && null != t && [ye.Xh.PREMIUM_YEAR_TIER_0, ye.Xh.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    S = ye.nH[r],
                    E = (0, I.aS)(r, !1, c, d),
                    N = (0, I.Ap)(d.paymentSourceId),
                    T = null != S && !f,
                    A = b.interval === ye.rV.YEAR ? R.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : R.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    j = function() {
                        return b.interval === ye.rV.YEAR && null != t || T && !v ? b.interval === ye.rV.YEAR && null != t ? (0, n.jsxs)("span", {
                            className: be().planOptionMonthsFree,
                            children: ["(", R.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                        }) : T && !v ? null != S && (0, n.jsx)(o.Text, {
                            tag: "span",
                            variant: "eyebrow",
                            color: "always-white",
                            className: be().planOptionDiscount,
                            children: R.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                                discount: (0, O.T3)(y, S / 100)
                            })
                        }) : void 0 : null
                    };
                return (0, n.jsxs)(o.Clickable, {
                    role: _ ? "menuitem" : "radio",
                    "aria-checked": a,
                    tabIndex: a ? 0 : -1,
                    focusProps: {
                        offset: {
                            left: -4,
                            right: -4,
                            top: 0,
                            bottom: 0
                        }
                    },
                    onClick: P ? void 0 : function() {
                        return i(r)
                    },
                    className: de()(be().planOptionClickableContainer, (g = {}, he(g, be().selectedPlan, _ && a), he(g, be().selectionBox, _), g)),
                    children: [(0, n.jsxs)("div", {
                        className: de()(be().planOption, he({}, be().planOptionDisabled, P)),
                        children: [(0, n.jsxs)("div", {
                            className: be().planOptionClickable,
                            children: [!_ && (0, n.jsx)(o.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: a,
                                shape: o.Checkbox.Shapes.ROUND,
                                color: fe.Z.unsafe_rawColors.BRAND_500.css,
                                type: o.Checkbox.Types.INVERTED,
                                className: be().planOptionCheckbox
                            }), function() {
                                var e;
                                return (0, n.jsxs)("div", {
                                    children: [(0, n.jsxs)("div", {
                                        className: de()(be().planOptionInterval, (e = {}, he(e, be().optionSelected, a || _), he(e, be().updatedOptionSelected, f && (a || _)), e)),
                                        children: [(0, I.L7)(b.interval, c, N, b.intervalCount, _), _ && j()]
                                    }), _ && (0, n.jsx)("div", {
                                        className: be().planOneTimeCost,
                                        children: R.Z.Messages.ONE_TIME_CHARGE.format({
                                            currencyAmount: (0, O.T4)(E.amount, E.currency)
                                        })
                                    })]
                                })
                            }(), v && (0, n.jsxs)("span", {
                                className: be().planOptionCurrentPlan,
                                children: ["(", R.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !_ && j()]
                        }), f ? (0, n.jsx)("div", {
                            className: de()(he({}, be().optionPriceSelected, a)),
                            children: R.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (0, O.T4)(0, E.currency, {
                                    maximumFractionDigits: 0
                                })
                            })
                        }) : (0, n.jsx)("div", {
                            className: de()(he({}, be().optionSelected, a || _)),
                            children: (0, O.T4)(E.amount, E.currency)
                        })]
                    }), f && (0, n.jsx)("div", {
                        className: be().planOptionSubtextContainer,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: a ? "text-normal" : "interactive-normal",
                            className: be().planOptionSubtext,
                            children: A.format({
                                price: (0,
                                    O.T4)(E.amount, E.currency)
                            })
                        })
                    })]
                })
            }
            var Oe = r(185096),
                _e = r(520453),
                ge = r(492010),
                ve = r.n(ge);

            function Pe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Se(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Se(e, t, r[t])
                    }))
                }
                return e
            }

            function Ne(e, t) {
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

            function Te(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Pe(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ae(e, t) {
                var r = R.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                    n = R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                    i = function() {
                        switch (e.interval) {
                            case ye.rV.YEAR:
                                return r;
                            case ye.rV.MONTH:
                            default:
                                return n
                        }
                    }(),
                    a = e.skuId;
                switch (t) {
                    case ye.Si.TIER_0:
                        switch (a) {
                            case ye.Si.TIER_1:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                            case ye.Si.TIER_2:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                            default:
                                return i
                        }
                    case ye.Si.TIER_1:
                        switch (a) {
                            case ye.Si.TIER_0:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                            case ye.Si.TIER_2:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                            default:
                                return i
                        }
                    case ye.Si.TIER_2:
                        switch (a) {
                            case ye.Si.TIER_0:
                            case ye.Si.TIER_1:
                                return R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                            case ye.Si.TIER_2:
                                return e.interval === ye.rV.MONTH ? R.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                    numFreeGuildSubscriptions: ye.cb
                                }) : i;
                            default:
                                return i
                        }
                    default:
                        return i
                }
            }

            function je(e) {
                var t = e.premiumSubscription,
                    r = e.skuId,
                    a = e.selectedPlanId,
                    d = e.setSelectedPlanId,
                    f = e.isGift,
                    y = void 0 !== f && f,
                    h = e.isSeasonalGift,
                    g = void 0 !== h && h,
                    T = e.selectedGiftStyle,
                    A = e.setSelectedGiftStyle,
                    j = e.priceOptions,
                    x = e.planOptions,
                    M = e.eligibleForMultiMonthPlans,
                    L = e.referralTrialOfferId,
                    w = e.subscriptionPeriodEnd,
                    Z = e.showPlanSelectionHeader,
                    G = void 0 !== Z && Z,
                    k = e.showTotal,
                    B = void 0 === k || k,
                    U = e.customGiftMessage,
                    F = e.setCustomGiftMessage,
                    H = (0, u.usePaymentContext)(),
                    W = H.activeSubscription,
                    Y = H.setSelectedPlanId,
                    K = H.selectedSkuId,
                    V = H.giftRecipient,
                    X = H.selectedPlan,
                    z = H.priceOptions,
                    J = (0, m.a8)(V);
                r = null != r ? r : K;
                t = null != t ? t : W;
                s()(void 0 !== t, "should not be undefined");
                var $ = Te((0, l.Wu)([p.Z], (function() {
                        return [null != t ? p.Z.get(t.planId) : null, null != a ? p.Z.get(a) : null]
                    })), 2),
                    Q = $[0],
                    q = $[1],
                    ee = (0, P.N)(L),
                    te = null == ee ? void 0 : ee.subscription_trial,
                    re = null != q ? q : X,
                    ne = i.useCallback((function(e) {
                        null != d ? d(e) : Y(e)
                    }), [d, Y]),
                    ie = null != j ? j : z;
                s()(null != ie, "Price option has to be set");
                var ae = null != ee && ye.nG[ee.trial_id].skus.includes(r);
                i.useEffect((function() {
                    M && _.ZP.trackExposure({
                        location: "5f89bb_1"
                    })
                }), [M]);
                var se = null != (null == re ? void 0 : re.id) && x.includes(re.id);
                i.useEffect((function() {
                    if (!se)
                        if (null == Q || y) ne(x[0]);
                        else if (null != Q) {
                        var e = x.find((function(e) {
                            return e !== Q.id
                        }));
                        null != e && ne(e)
                    }
                }), [se, y, x, Q, ne]);
                var oe = !J && (y || !ae) && se && B,
                    ce = (0, o.useRadioGroup)(),
                    ue = null != (null == re ? void 0 : re.id) ? (0, I.aS)(re.id, !1, y, ie) : void 0,
                    de = "HR" === (0, v.Z)().ipCountryCode && null != ue && ue.currency === _e.pK.EUR,
                    fe = (0, I.Ap)(ie.paymentSourceId),
                    pe = (null == te ? void 0 : te.interval) === ye.rV.DAY ? R.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : R.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    me = !y && null != te && ae && null != w;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("div", {
                        className: J ? ve().stepBodyCustomGift : ve().stepBody,
                        children: [(0, n.jsxs)("div", {
                            className: J ? ve().bodyColumnMiddle : void 0,
                            children: [(0, n.jsx)(S.Z, {
                                fromBoostCancelModal: !1,
                                className: ve().legacyPricingNotice
                            }), (g || J) && (0, n.jsx)(le, {
                                selectedGiftStyle: T,
                                setSelectedGiftStyle: A
                            })]
                        }), (0, n.jsxs)("div", {
                            className: J ? ve().bodyColumnRight : void 0,
                            children: [J && (0, n.jsx)(Oe.s, {
                                giftRecipient: V
                            }), function() {
                                if (J && null != F) return (0, n.jsx)(D, {
                                    sectionTitle: R.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: function(e) {
                                        return F(e)
                                    },
                                    pendingText: U,
                                    currentText: U
                                })
                            }(), null != Q && !y && (0, n.jsx)("div", {
                                className: ve().bodyText,
                                children: Ae(Q, r)
                            }), J ? (0, n.jsx)(o.FormTitle, {
                                children: R.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : me ? (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    className: ve().trialPlanSelectHeader,
                                    children: R.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: w,
                                        trialPeriod: pe
                                    })
                                }), (0, n.jsx)("hr", {
                                    className: ve().planSelectSeparator
                                })]
                            }) : (0, n.jsx)("div", {
                                className: ve().selectPlanChooseTitle,
                                children: R.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            }), G && (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(o.Text, {
                                    variant: "text-xs/bold",
                                    className: ve().trialPlanSelectHeaderCompressed,
                                    color: "interactive-normal",
                                    children: R.Z.Messages.BILLING_PLAN_SELECTION
                                }), (0, n.jsx)("hr", {
                                    className: ve().planSelectSeparator
                                })]
                            }), (0, n.jsx)("div", Ne(Ee({}, ce), {
                                children: x.map((function(e) {
                                    return (0, n.jsx)(Ie, {
                                        planId: e,
                                        isGift: y,
                                        premiumSubscription: y ? null : null != t ? t : null,
                                        selectPlan: ne,
                                        selected: (null == re ? void 0 : re.id) === e,
                                        priceOptions: ie,
                                        shouldShowUpdatedPaymentModal: me
                                    }, e)
                                }))
                            })), (0, n.jsx)("div", {
                                children: oe && null != re && null != ue ? (0, n.jsxs)("div", {
                                    children: [(0, n.jsx)("div", {
                                        className: ve().selectPlanDivider
                                    }), (0, n.jsx)(E.Ji, {
                                        label: R.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, n.jsx)(N.Z, {
                                            price: ue.amount,
                                            currency: ue.currency,
                                            intervalType: y ? null : re.interval,
                                            intervalCount: re.intervalCount,
                                            isPrepaidPaymentSource: fe
                                        }),
                                        className: ve().selectPlanTotalRow
                                    })]
                                }) : null
                            }), de && (0, n.jsx)(c.Z, {
                                message: R.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, O.T4)(7.5345 * ue.amount, _e.pK.HRK)
                                })
                            }), !y && !me && B && (0, n.jsx)(c.Z, {
                                message: R.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: b.Z.getArticleURL(C.BhN.LOCALIZED_PRICING)
                                })
                            })]
                        })]
                    })
                })
            }

            function xe(e) {
                var t = e.onStepChange,
                    r = e.selectedPlanId,
                    i = e.isGift,
                    a = e.paymentSources,
                    s = e.onBackClick,
                    l = e.showBackButton,
                    c = e.planOptions,
                    d = e.shouldRenderUpdatedPaymentModal,
                    f = void 0 !== d && d,
                    p = e.isTrial,
                    y = (0, u.usePaymentContext)(),
                    m = y.paymentSources,
                    b = y.selectedPlan;
                a = null != a ? a : m;
                r = null != r ? r : null == b ? void 0 : b.id;
                return (0, n.jsxs)(n.Fragment, {
                    children: [null != r && c.includes(r) ? (0, n.jsx)(Me, {
                        paymentSources: a,
                        onStepChange: t,
                        selectedPlanId: r,
                        isGift: i,
                        shouldRenderUpdatedPaymentModal: f,
                        isTrial: p
                    }) : (0, n.jsx)(o.Button, {
                        disabled: !0,
                        children: R.Z.Messages.SELECT
                    }), l ? (0, n.jsx)(oe.Z, {
                        onClick: s
                    }) : null]
                })
            }

            function Me(e) {
                var t = e.onStepChange,
                    r = e.selectedPlanId,
                    i = e.isGift,
                    a = e.paymentSources,
                    s = e.shouldRenderUpdatedPaymentModal,
                    c = e.isTrial,
                    u = (0, l.e7)([y.Z], (function() {
                        return y.Z.getPremiumTypeSubscription()
                    })),
                    p = (0,
                        ce.H)(r, i).hasEntitlements,
                    m = null != u && null != u.paymentSourceId || Object.keys(a).length > 0 || p && !c,
                    b = s ? R.Z.Messages.NEXT : R.Z.Messages.SELECT,
                    I = d.h8.ADD_PAYMENT_STEPS;
                if (m) I = d.h8.REVIEW;
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
                    I = d.h8.AWAITING_BROWSER_CHECKOUT;
                    b = R.Z.Messages.CONTINUE_IN_BROWSER
                }
                return (0, n.jsx)(o.Button, {
                    onClick: function() {
                        return t(I)
                    },
                    children: b
                })
            }
        },
        185096: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => u
            });
            var n = r(785893),
                i = (r(667294), r(882723)),
                a = r(657539),
                s = r(749565),
                l = r(473708),
                o = r(2808),
                c = r.n(o),
                u = function(e) {
                    var t = e.giftRecipient;
                    return null == t ? null : (0, n.jsxs)("div", {
                        className: c().content,
                        children: [(0, n.jsx)(i.FormTitle, {
                            children: l.Z.Messages.FORM_LABEL_SEND_TO
                        }), (0, n.jsxs)("div", {
                            className: c().giftRecipientInfo,
                            children: [(0, n.jsx)(a.Z, {
                                user: t,
                                className: c().giftRecipient,
                                size: i.AvatarSizes.SIZE_20
                            }), (0, n.jsx)(i.Heading, {
                                variant: "text-md/normal",
                                children: s.ZP.getName(t)
                            }), (0, n.jsx)(i.Heading, {
                                className: c().giftRecipientName,
                                variant: "text-md/normal",
                                children: s.ZP.getUserTag(t)
                            })]
                        })]
                    })
                }
        },
        932845: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => z
            });
            var n = r(785893),
                i = r(667294),
                a = r(441143),
                s = r.n(a),
                l = r(197597),
                o = r(202351),
                c = r(795308),
                u = r(882723),
                d = r(415324),
                f = r(152042),
                p = r(700812),
                y = r(536713),
                m = r(414094),
                b = r(782786),
                h = r(632826),
                I = r(837598),
                O = r(793461),
                _ = r(615796),
                g = r(551778),
                v = r(386991),
                P = r(644144),
                S = r(116094),
                E = r(249052),
                N = r(100749),
                T = r(818103),
                A = r(533151),
                j = r(16703),
                x = r(900547),
                M = r(882211),
                C = r(556663),
                R = r(646875),
                L = r(111090),
                w = r(185096),
                Z = r(621270),
                G = r(817584),
                k = r(203600),
                D = r(473708),
                B = r(810614),
                U = r.n(B);

            function F(e) {
                var t = e.subscriptionPeriodEnd,
                    r = e.isTrial,
                    a = e.currency,
                    s = (0, b.usePaymentContext)(),
                    l = s.activeSubscription,
                    o = s.selectedSkuId,
                    c = s.isGift,
                    d = s.defaultPlanId,
                    f = s.selectedGiftStyle,
                    p = s.setSelectedGiftStyle,
                    y = s.selectedPlan,
                    m = s.isPremium,
                    h = G.k.useExperiment({
                        location: "65b7f3_1"
                    }, {
                        autoTrackExposure: !1
                    }).defaultToMonthlyPlan,
                    I = Z.ZP.useExperiment({
                        location: "65b7f3_2"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    O = (0, Z.rK)();
                i.useEffect((function() {
                    O && c && Z.ZP.trackExposure({
                        location: "65b7f3_3"
                    })
                }), [O, c]);
                var _ = I && O && c && o === k.Si.TIER_2,
                    g = i.useMemo((function() {
                        return (0, S.V7)({
                            skuId: o,
                            isPremium: m,
                            multiMonthPlans: [],
                            currentSubscription: l,
                            isGift: c,
                            isEligibleForTrial: r,
                            defaultPlanId: d,
                            defaultToMonthlyPlan: h
                        })
                    }), [o, l, c, d, h, m, r]);
                return (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(j.KU, {
                        negativeMarginTop: !0
                    }), (0, n.jsx)("div", {
                        className: U().negativeMarginTop,
                        children: (0, n.jsx)(C.O, {
                            isGift: c,
                            selectedGiftStyle: f,
                            setSelectedGiftStyle: p,
                            planOptions: g,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: _,
                            referralTrialOfferId: void 0,
                            selectedPlanId: null == y ? void 0 : y.id,
                            subscriptionPeriodEnd: t,
                            showPlanSelectionHeader: !0
                        })
                    }), (0, n.jsx)("div", {
                        className: U().noMarginDivider
                    }), (0, n.jsxs)("div", {
                        className: U().totalRow,
                        children: [(0, n.jsx)(u.Heading, {
                            variant: "heading-lg/bold",
                            children: D.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                        }), (0,
                            n.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: D.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (0, E.T4)(0, a, {
                                    maximumFractionDigits: 0
                                })
                            })
                        })]
                    }), (0, n.jsx)("div", {
                        className: U().noMarginDivider
                    })]
                })
            }
            var H = r(2590),
                W = r(520453),
                Y = r(121466),
                K = r.n(Y);

            function V(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function X(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return V(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return V(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e) {
                var t, r = e.selectedPlanId,
                    a = e.paymentSources,
                    Z = e.priceOptions,
                    G = e.currencies,
                    k = e.onCurrencyChange,
                    B = e.isGift,
                    U = void 0 !== B && B,
                    Y = e.onPaymentSourceChange,
                    V = e.handlePaymentSourceAdd,
                    z = e.setHasAcceptedTerms,
                    J = e.legalTermsNodeRef,
                    $ = e.hasLegalTermsFlash,
                    Q = e.trialId,
                    q = e.trialFooterMessageOverride,
                    ee = e.reviewWarningMessage,
                    te = e.metadata,
                    re = e.purchaseState,
                    ne = e.hideSubscriptionDetails,
                    ie = e.referralTrialOfferId,
                    ae = e.isTrial,
                    se = void 0 !== ae && ae,
                    le = (0, b.usePaymentContext)(),
                    oe = le.isEmbeddedIAP,
                    ce = le.activeSubscription,
                    ue = le.selectedSkuId,
                    de = le.defaultPlanId,
                    fe = le.selectedGiftStyle,
                    pe = le.setSelectedGiftStyle,
                    ye = le.isPremium,
                    me = le.startedPaymentFlowWithPaymentSourcesRef,
                    be = le.giftRecipient,
                    he = (0, o.e7)([g.Z], (function() {
                        return g.Z.get(r)
                    }));
                s()(null != he, "Missing plan");
                var Ie = [{
                        planId: he.id,
                        quantity: 1
                    }],
                    Oe = re === h.A.PURCHASING || re === h.A.COMPLETED,
                    _e = U || Oe,
                    ge = X((0, N.ED)({
                        items: Ie,
                        renewal: !1,
                        preventFetch: _e,
                        applyEntitlements: !0,
                        paymentSourceId: Z.paymentSourceId,
                        currency: Z.currency,
                        trialId: Q,
                        metadata: te
                    }), 2),
                    ve = ge[0],
                    Pe = ge[1],
                    Se = X((0, N.ED)({
                        items: Ie,
                        renewal: !0,
                        preventFetch: _e,
                        trialId: Q,
                        paymentSourceId: Z.paymentSourceId,
                        currency: Z.currency,
                        metadata: te
                    }), 2),
                    Ee = Se[0],
                    Ne = Se[1],
                    Te = (0, P.a8)(be),
                    Ae = null != Pe ? Pe : Ne,
                    je = (0, o.e7)([O.Z], (function() {
                        return O.Z.enabled
                    })),
                    xe = Z.paymentSourceId,
                    Me = (0, L.H)(he.id, U),
                    Ce = Me.hasEntitlements,
                    Re = Me.entitlements,
                    Le = (0, S.Ap)(Z.paymentSourceId),
                    we = (0, I.sE)(Q, xe, r),
                    Ze = (0, A.F_)({
                        isTrial: se,
                        isGift: U,
                        startPaymentFlowWithPaymentSource: me.current
                    }),
                    Ge = (0, T.Wt)({
                        isTrial: se,
                        isGift: U,
                        selectedSkuId: ue
                    }),
                    ke = Ge.enabled,
                    De = Ge.defaultToMonthlyPlan,
                    Be = X(i.useState(null == ve ? void 0 : ve.subscriptionPeriodEnd), 2),
                    Ue = Be[0],
                    Fe = Be[1];
                i.useEffect((function() {
                    null == Ue && Fe(null == ve ? void 0 : ve.subscriptionPeriodEnd)
                }), [null == ve ? void 0 : ve.subscriptionPeriodEnd, Ue]);
                var He, We, Ye = i.useMemo((function() {
                        return (0, S.V7)({
                            skuId: ue,
                            isPremium: ye,
                            multiMonthPlans: [],
                            currentSubscription: ce,
                            isGift: U,
                            isEligibleForTrial: se,
                            defaultPlanId: de,
                            defaultToMonthlyPlan: De
                        })
                    }), [ue, ce, U, de, ye, se, De]),
                    Ke = (0, T.$g)(ke, ve, he);
                if (null != Ae) {
                    var Ve = Ae.message;
                    Ae.code === m.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (Ve = D.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY);
                    return (0, n.jsx)(u.FormErrorBlock, {
                        children: Ve
                    })
                }
                if (U) We = (0, n.jsx)(R.e9, {
                    paymentSourceId: Z.paymentSourceId,
                    plan: he,
                    className: K().invoice,
                    isPrepaidPaymentSource: Le
                });
                else if (Ze && null != Ue && null != Z.currency) We = (0, n.jsx)(F, {
                    subscriptionPeriodEnd: Ue,
                    isTrial: se,
                    currency: Z.currency
                });
                else if (se && null != ve) We = (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(j.KU, {
                        negativeMarginTop: !0
                    }), (0, n.jsxs)(j.PO, {
                        className: K().invoice,
                        children: [(0, n.jsxs)("div", {
                            className: K().trialPriceLine,
                            children: [(0, n.jsx)(u.Text, {
                                variant: "text-md/bold",
                                children: D.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, n.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: D.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, E.T4)(0, ve.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: K().afterTrialPriceLine,
                            children: (0, n.jsx)(R.yT, {
                                invoice: ve,
                                plan: he
                            })
                        })]
                    })]
                });
                else {
                    if (null == ve || null == Ee || Ke) return (0, n.jsx)("div", {
                        className: K().spinnerWrapper,
                        children: (0, n.jsx)(u.Spinner, {})
                    });
                    se && ve.subscriptionPeriodEnd !== Ee.subscriptionPeriodEnd && (He = ve.subscriptionPeriodEnd);
                    We = (0, n.jsxs)(j.PO, {
                        className: K().invoice,
                        children: [(0, n.jsx)(j.q9, {
                            children: D.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, n.jsx)(R.Lu, {
                            invoice: ve,
                            newPlan: he,
                            isPrepaidPaymentSource: Le,
                            referralTrialOfferId: ie
                        }), Le ? null : (0, n.jsx)(R.nd, {
                            renewalInvoice: Ee,
                            isTrial: se,
                            priceOptions: Z,
                            overrideRenewalDate: He,
                            trialFooterMessageOverride: q,
                            hideSubscriptionDetails: ne
                        })]
                    })
                }
                var Xe = l.M.EEA_COUNTRIES.has(_.Z.ipCountryCodeWithFallback),
                    ze = function(e, t, r) {
                        var n = null,
                            i = null,
                            a = null;
                        if (e && null != t) {
                            var s = S.ZP.getIntervalForInvoice(t),
                                l = s.intervalType,
                                o = s.intervalCount,
                                c = (0, E.og)((0, E.T4)(t.total, t.currency), l, o),
                                u = null != r ? r : t.subscriptionPeriodEnd;
                            n = D.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: H.EYA.TERMS,
                                paidURL: H.EYA.PAID_TERMS,
                                rate: c,
                                renewalDate: u
                            });
                            i = K().trialCheckbox;
                            a = K().trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: n,
                            checkboxClassname: i,
                            checkboxLabelClassname: a
                        }
                    }(null != se && se, Ee, He),
                    Je = ze.checkboxLabel,
                    $e = ze.checkboxClassname,
                    Qe = ze.checkboxLabelClassname,
                    qe = D.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: he.name
                    });
                U && !Te ? qe = D.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : U && Te ? qe = "" : (0, S.PV)(he.id) && (qe = S.ZP.getBillingReviewSubheader(null, he));
                return we ? null : (0, n.jsxs)("div", {
                    className: K().stepBody,
                    children: [null != ee && (0, n.jsxs)("div", {
                        className: K().reviewWarningMessageContainer,
                        children: [(0, n.jsx)(v.Z, {
                            color: c.Z.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, n.jsx)(u.Text, {
                            className: K().reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: ee
                        })]
                    }), ke && (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(j.KU, {
                            negativeMarginTop: !0
                        }), (0, n.jsx)(C.O, {
                            isGift: U,
                            selectedGiftStyle: fe,
                            setSelectedGiftStyle: pe,
                            planOptions: Ye,
                            eligibleForMultiMonthPlans: !1,
                            isSeasonalGift: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: r,
                            subscriptionPeriodEnd: Ue,
                            showPlanSelectionHeader: !1,
                            showTotal: !1
                        }), (0, n.jsx)(j.KU, {})]
                    }), !se && (0, n.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: qe
                    }), Te && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(M.Z, {
                            giftStyle: fe,
                            shouldAnimate: !0,
                            className: K().giftMainAnimation
                        }), (0, n.jsx)(w.s, {
                            giftRecipient: be
                        })]
                    }), We, (0, n.jsxs)("div", {
                        className: K().paymentSourceWrapper,
                        children: [se ? (0, n.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            className: K().formTitle,
                            children: D.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, n.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: D.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, n.jsx)(p.Z, {
                            paymentSources: Object.values(a),
                            selectedPaymentSourceId: xe,
                            prependOption: Ce && !se ? {
                                label: D.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: Y,
                            onPaymentSourceAdd: V,
                            hidePersonalInformation: je,
                            isTrial: se
                        }), Ce && null == xe ? (0, n.jsx)("div", {
                            className: K().paymentSourceOptionalWarning,
                            children: D.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: Re.length
                            })
                        }) : null, (0, n.jsxs)(d.b, {
                            currencies: G,
                            className: K().currencyWrapper,
                            children: [(0, n.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: D.Z.Messages.PAYMENT_CURRENCY
                            }), (0, n.jsx)(d.Z, {
                                selectedCurrency: Z.currency,
                                currencies: G,
                                onChange: k
                            })]
                        })]
                    }), (0, n.jsx)(x.Z, {
                        isActive: $,
                        ref: J,
                        children: (0, n.jsx)(y.Z, {
                            onChange: z,
                            forceShow: !0,
                            checkboxLabel: Je,
                            checkboxClassname: $e,
                            checkboxLabelClassname: Qe,
                            finePrint: (0, n.jsx)(f.Z, {
                                hide: se,
                                subscriptionPlan: he,
                                renewalInvoice: Ee,
                                isGift: U,
                                paymentSourceType: null === (t = a[null != xe ? xe : ""]) || void 0 === t ? void 0 : t.type,
                                isEmbeddedIAP: oe
                            }),
                            showPricingLink: he.currency !== W.pK.USD,
                            showWithdrawalWaiver: Xe,
                            disabled: Oe,
                            isTrial: se,
                            subscriptionPlan: he,
                            isGift: U
                        })
                    })]
                })
            }
        },
        619244: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => de
            });
            var n = r(785893),
                i = r(667294),
                a = r(441143),
                s = r.n(a),
                l = r(202351),
                o = r(882723),
                c = r(673679),
                u = r(19585),
                d = r(782786),
                f = r(744564),
                p = r(933599),
                y = r(665082),
                m = r(315804),
                b = r(54709),
                h = r(652591),
                I = r(264628),
                O = r(644144),
                _ = r(116094),
                g = r(632826),
                v = r(2590),
                P = r(203600);

            function S(e, t, r, n, i, a, s) {
                try {
                    var l = e[a](s),
                        o = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(n, i)
            }

            function E(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = e.apply(t, r);

                        function s(e) {
                            S(a, n, i, s, l, "next", e)
                        }

                        function l(e) {
                            S(a, n, i, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function N(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        N(e, t, r[t])
                    }))
                }
                return e
            }

            function A(e, t) {
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
            var j = function(e, t) {
                var r, n, i, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                (n = 0, i) && (a = [2 & a[0], i.value]);
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
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
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
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function x(e) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = E((function(e) {
                    var t, r, n, i, a, l, o, u, d, S, E, N, x, M, C, R, L, w, Z, G, k, D, B, U, F, H, W, Y, K, V, X, z, J, $, Q, q, ee, te;
                    return j(this, (function(j) {
                        switch (j.label) {
                            case 0:
                                t = e.setPurchaseState, r = e.setHasAcceptedTerms, n = e.setIsSubmitting, i = e.setPurchaseError, a = e.hasRedirectURL, l = e.setHasRedirectURL, o = e.isGift, u = e.giftStyle, d = e.baseAnalyticsData, S = e.analyticsLocation, E = e.analyticsLocations, N = e.flowStartTime, x = e.subscriptionPlan, M = e.planGroup, C = e.trialId, R = e.priceOptions, L = e.paymentSource, w = e.isPrepaidPaymentPastDue, Z = e.openInvoiceId, G = e.premiumSubscription, k = e.onNext, D = e.metadata, B = e.sku, U = e.skuPricePreview, F = e.purchaseType, H = e.referralCode, W = e.loadId, Y = e.giftRecipient, K = e.customMessage;
                                t(g.A.PURCHASING);
                                r(!0);
                                n(!0);
                                f.Z.wait(p.fw);
                                i(null);
                                j.label = 1;
                            case 1:
                                j.trys.push([1, 15, 16, 17]);
                                h.default.track(v.rMx.PAYMENT_FLOW_COMPLETED, A(T({}, d), {
                                    duration_ms: Date.now() - N
                                }));
                                if (a) return [2];
                                if (F !== v.GZQ.ONE_TIME) return [3, 3];
                                s()(null != B, "SKU must exist and be fetched.");
                                s()(null != U, "SKUPricePreview must exist.");
                                return [4, (0, m.ZZ)(B.applicationId, B.id, {
                                    expectedAmount: U.amount,
                                    expectedCurrency: U.currency,
                                    paymentSource: L,
                                    loadId: W
                                })];
                            case 2:
                                V = j.sent();
                                return [3, 14];
                            case 3:
                                s()(null != x, "Missing subscriptionPlan");
                                if (!o) return [3, 5];
                                if ("usd" === (X = (0, _.aS)(x.id, !1, !0, R)).currency && (null == L ? void 0 : L.type) === v.HeQ.GCASH) {
                                    z = new Error("Invalid USD currency for GCash");
                                    (0, I.q2)(z, {
                                        tags: {
                                            paymentSourceId: null !== (J = null == L ? void 0 : L.id) && void 0 !== J ? J : "",
                                            subscriptionPlanId: x.id,
                                            priceOptions: JSON.stringify(R)
                                        }
                                    })
                                }
                                $ = (0, O.a8)(Y);
                                return [4, (0, m.ZZ)(P.RQ, x.skuId, {
                                    expectedAmount: X.amount,
                                    expectedCurrency: X.currency,
                                    paymentSource: L,
                                    subscriptionPlanId: x.id,
                                    isGift: !0,
                                    giftStyle: u,
                                    loadId: W,
                                    recipientId: $ ? null == Y ? void 0 : Y.id : void 0,
                                    customMessage: $ ? K : void 0
                                })];
                            case 4:
                                V = j.sent();
                                return [3, 14];
                            case 5:
                                return w && null != Z && null != L && null != G ? v.Uk1.has(L.type) ? [4, (0, c.G)(G, Z, L, R.currency)] : [3, 7] : [3, 10];
                            case 6:
                                Q = j.sent();
                                return [3, 9];
                            case 7:
                                return [4, (0, c.Mg)(G, {
                                    paymentSource: L,
                                    currency: R.currency
                                }, E, S)];
                            case 8:
                                Q = j.sent();
                                j.label = 9;
                            case 9:
                                V = Q;
                                return [3, 14];
                            case 10:
                                return null == G ? [3, 12] : [4, (0, c.Mg)(G, {
                                    items: (0, _.al)(G, x.id, 1, new Set(M)),
                                    paymentSource: L,
                                    currency: R.currency
                                }, E, S)];
                            case 11:
                                V = j.sent();
                                return [3, 14];
                            case 12:
                                return [4, (0, y.Ld)({
                                    planId: x.id,
                                    currency: R.currency,
                                    paymentSource: L,
                                    trialId: C,
                                    metadata: D,
                                    referralCode: H,
                                    loadId: W
                                })];
                            case 13:
                                V = j.sent();
                                j.label = 14;
                            case 14:
                                if (V.redirectConfirmation) {
                                    l(null != V.redirectURL);
                                    return [2]
                                }
                                h.default.track(v.rMx.PAYMENT_FLOW_SUCCEEDED, A(T({}, d), {
                                    duration_ms: Date.now() - N,
                                    payment_source_type: null == L ? void 0 : L.type
                                }));
                                t(g.A.COMPLETED);
                                "subscription" in V ? q = null != V.subscription ? b.Z.createFromServer(V.subscription) : null : "entitlements" in V && (ee = null != V.entitlements ? V.entitlements : void 0);
                                k(q, ee);
                                return [3, 17];
                            case 15:
                                te = j.sent();
                                t(g.A.FAIL);
                                i(te);
                                h.default.track(v.rMx.PAYMENT_FLOW_FAILED, A(T({}, d), {
                                    payment_source_id: null == L ? void 0 : L.id,
                                    payment_source_type: null == L ? void 0 : L.type,
                                    duration_ms: Date.now() - N
                                }));
                                return [3, 17];
                            case 16:
                                a || n(!1);
                                return [7];
                            case 17:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var C = r(300615),
                R = r(837598),
                L = r(856281),
                w = r(909365),
                Z = r(908434),
                G = r(107364),
                k = r(533151),
                D = r(499171),
                B = r(509897),
                U = r(111090),
                F = r(709189),
                H = r(530562),
                W = r(520453),
                Y = r(473708),
                K = r(775385),
                V = r.n(K),
                X = r(497206),
                z = r.n(X);

            function J(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        J(e, t, r[t])
                    }))
                }
                return e
            }

            function Q(e, t) {
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

            function q(e, t) {
                if (null != e.current) {
                    e.current.scrollIntoView({
                        behavior: "smooth"
                    });
                    t()
                }
            }

            function ee(e) {
                var t = e.legalTermsNodeRef,
                    r = e.invoiceError,
                    i = e.planError,
                    a = e.disablePurchase,
                    l = e.flashLegalTerms,
                    c = e.isSubmitting,
                    u = e.premiumSubscription,
                    f = e.isGift,
                    p = e.planGroup,
                    y = e.isPrepaid,
                    m = e.isTrial,
                    b = e.makePurchase,
                    h = e.needsPaymentSource,
                    I = (0, d.usePaymentContext)(),
                    O = I.selectedPlan,
                    g = I.hasAcceptedTerms,
                    v = function(e) {
                        var t = e.purchaseType,
                            r = e.plan,
                            n = e.premiumSubscription,
                            i = e.isGift,
                            a = e.planGroup,
                            l = e.isPrepaidPaymentSource;
                        if (t === W.GZ.ONE_TIME) return Y.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                        s()(null != r, "Subscription plan must be selected to render SubscriptionReviewButton");
                        return i ? Y.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : (0, _.PV)(r.id) ? l ? Y.Z.Messages.BILLING_SELECT_PLAN : null != n ? (0,
                            H.R4)(n, r.id, a) ? Y.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : Y.Z.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, _.W_)(null, r) : Y.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN
                    }({
                        purchaseType: I.purchaseType,
                        plan: O,
                        premiumSubscription: u,
                        isGift: f,
                        planGroup: p,
                        isPrepaidPaymentSource: y
                    });
                return null != r || null != i || a ? (0, n.jsx)(o.Button, {
                    color: o.Button.Colors.GREEN,
                    disabled: !0,
                    children: v
                }) : h ? (0, n.jsx)(o.Tooltip, {
                    text: Y.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: function(e) {
                        return (0, n.jsx)(o.Button, Q($({}, e), {
                            color: o.Button.Colors.GREEN,
                            type: "submit",
                            "data-testid": "submitButton",
                            disabled: !0,
                            children: v
                        }))
                    }
                }) : m ? (0, n.jsxs)(F.C, {
                    innerClassName: V().innerButton,
                    "data-testid": g ? "purchase" : "submitButton",
                    onClick: g ? b : function() {
                        return q(t, l)
                    },
                    color: o.Button.Colors.GREEN,
                    submitting: c,
                    children: [(0, n.jsx)("img", {
                        alt: "",
                        className: V().nitroIcon,
                        src: z()
                    }), v]
                }) : g ? (0, n.jsx)(o.Button, {
                    "data-testid": "purchase",
                    onClick: b,
                    color: o.Button.Colors.GREEN,
                    submitting: c,
                    children: v
                }) : (0, n.jsx)(o.Tooltip, {
                    text: Y.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: function(e) {
                        return (0, n.jsx)(o.Button, Q($({}, e), {
                            color: o.Button.Colors.GREEN,
                            type: "submit",
                            onClick: function() {
                                return q(t, l)
                            },
                            "data-testid": "submitButton",
                            children: v
                        }))
                    }
                })
            }
            var te = r(82368),
                re = r.n(te);

            function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function ie(e, t, r, n, i, a, s) {
                try {
                    var l = e[a](s),
                        o = l.value
                } catch (e) {
                    r(e);
                    return
                }
                l.done ? t(o) : Promise.resolve(o).then(n, i)
            }

            function ae(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var a = e.apply(t, r);

                        function s(e) {
                            ie(a, n, i, s, l, "next", e)
                        }

                        function l(e) {
                            ie(a, n, i, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function se(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        se(e, t, r[t])
                    }))
                }
                return e
            }

            function oe(e, t) {
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

            function ce(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a = [],
                            s = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(s = (n = r.next()).done); s = !0) {
                                a.push(n.value);
                                if (t && a.length === t) break
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
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ne(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ne(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ue = function(e, t) {
                var r, n, i, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(a) {
                    return function(l) {
                        return function(a) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n),
                                        0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                                (n = 0, i) && (a = [2 & a[0], i.value]);
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
                                        n = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop();
                                        s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
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
                                a = t.call(e, s)
                            } catch (e) {
                                a = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            };

            function de(e) {
                var t = e.premiumSubscription,
                    r = e.setPurchaseState,
                    a = e.onBack,
                    f = e.onNext,
                    p = e.legalTermsNodeRef,
                    y = e.flashLegalTerms,
                    m = e.invoiceError,
                    b = e.planError,
                    I = e.onPurchaseError,
                    O = e.baseAnalyticsData,
                    P = e.flowStartTime,
                    S = e.isGift,
                    E = void 0 !== S && S,
                    N = e.giftStyle,
                    T = e.customGiftMessage,
                    A = e.trialId,
                    j = e.planGroup,
                    M = e.analyticsLocation,
                    F = e.purchaseTokenAuthState,
                    H = e.openInvoiceId,
                    W = e.metadata,
                    Y = e.backButtonEligible,
                    K = e.disablePurchase,
                    V = e.isTrial,
                    X = void 0 !== V && V,
                    z = (0, d.usePaymentContext)(),
                    J = z.selectedPlan,
                    $ = z.priceOptions,
                    Q = z.setHasAcceptedTerms,
                    q = z.setPurchaseError,
                    te = z.purchaseType,
                    ne = z.paymentSourceId,
                    ie = z.paymentSources,
                    se = z.selectedSkuId,
                    de = z.skusById,
                    fe = z.startedPaymentFlowWithPaymentSourcesRef,
                    pe = z.skuPricePreviewsById,
                    ye = z.referralCode,
                    me = z.contextMetadata,
                    be = z.giftRecipient,
                    he = (0, k.F_)({
                        isTrial: X,
                        isGift: E,
                        startPaymentFlowWithPaymentSource: fe.current
                    }),
                    Ie = null == J ? void 0 : J.id,
                    Oe = (0, R.sE)(A, $.paymentSourceId, Ie),
                    _e = (0, l.e7)([L.Z], (function() {
                        return L.Z.popupCallbackCalled
                    })),
                    ge = (0,
                        u.Z)().analyticsLocations,
                    ve = null != ne ? ie[ne] : null,
                    Pe = ce(i.useState(Oe), 2),
                    Se = Pe[0],
                    Ee = Pe[1],
                    Ne = ce(i.useState(!1), 2),
                    Te = Ne[0],
                    Ae = Ne[1],
                    je = (0, U.H)(Ie, E).hasEntitlements,
                    xe = (0, _.Ap)($.paymentSourceId),
                    Me = je || Oe,
                    Ce = (0, D.U)(),
                    Re = null,
                    Le = null;
                if (te === v.GZQ.ONE_TIME) {
                    s()(null != se, "SKU must be selected for one-time purchases");
                    var we;
                    Re = null !== (we = de[se]) && void 0 !== we ? we : null;
                    s()(null != Re, "SKU must exist and be fetched.");
                    var Ze = pe[se],
                        Ge = null != ne ? ne : Z.c;
                    Le = null != Ze ? Ze[Ge] : null
                }
                var ke, De = (ke = ae((function() {
                    return ue(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, x({
                                    setPurchaseState: r,
                                    setHasAcceptedTerms: Q,
                                    setIsSubmitting: Ee,
                                    setPurchaseError: q,
                                    hasRedirectURL: Te,
                                    setHasRedirectURL: Ae,
                                    isGift: E,
                                    giftStyle: N,
                                    baseAnalyticsData: O,
                                    analyticsLocation: M,
                                    analyticsLocations: ge,
                                    flowStartTime: P,
                                    subscriptionPlan: J,
                                    planGroup: j,
                                    trialId: A,
                                    priceOptions: $,
                                    paymentSource: ve,
                                    isPrepaidPaymentPastDue: Ce,
                                    openInvoiceId: H,
                                    premiumSubscription: t,
                                    onNext: f,
                                    metadata: W,
                                    sku: Re,
                                    skuPricePreview: Le,
                                    purchaseType: te,
                                    referralCode: ye,
                                    loadId: me.loadId,
                                    giftRecipient: be,
                                    customMessage: T
                                })];
                            case 1:
                                e.sent();
                                return [2]
                        }
                    }))
                })), function() {
                    return ke.apply(this, arguments)
                });
                i.useEffect((function() {
                    var e = function() {
                        var e = ae((function() {
                            var e;
                            return ue(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!0 !== _e) return [3, 6];
                                        t.label = 1;
                                    case 1:
                                        t.trys.push([1, 3, 4, 5]);
                                        return null == L.Z.redirectedPaymentId ? [2] : [4, (0, c.OP)(L.Z.redirectedPaymentId)];
                                    case 2:
                                        t.sent();
                                        h.default.track(v.rMx.PAYMENT_FLOW_SUCCEEDED, oe(le({}, O), {
                                            duration_ms: Date.now() - P,
                                            payment_source_type: null == ve ? void 0 : ve.type
                                        }));
                                        r(g.A.COMPLETED);
                                        f();
                                        return [3, 5];
                                    case 3:
                                        e = t.sent();
                                        r(g.A.FAIL);
                                        I(e);
                                        h.default.track(v.rMx.PAYMENT_FLOW_FAILED, oe(le({}, O), {
                                            payment_source_id: ne,
                                            payment_source_type: null == ve ? void 0 : ve.type,
                                            duration_ms: Date.now() - P
                                        }));
                                        return [3, 5];
                                    case 4:
                                        Ee(!1);
                                        (0, c.K2)();
                                        return [7];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return F !== w.I.SUCCESS ? [3, 8] : [4, De()];
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
                i.useEffect((function() {
                    Oe && !E && null == t && De()
                }), [Oe, E, t]);
                var Be = null != H || te === v.GZQ.ONE_TIME;
                return Oe ? null : (0, n.jsxs)(o.ModalFooter, {
                    align: G.Z.Align.CENTER,
                    children: [(0, n.jsx)(ee, {
                        legalTermsNodeRef: p,
                        invoiceError: m,
                        planError: b,
                        disablePurchase: K,
                        flashLegalTerms: y,
                        isSubmitting: Se,
                        premiumSubscription: t,
                        isGift: E,
                        planGroup: j,
                        isPrepaid: xe,
                        isTrial: X,
                        makePurchase: De,
                        needsPaymentSource: null == ve && !Me
                    }), (0, n.jsx)(C.Z, {}), !Y || Be || he ? null : (0, n.jsx)("div", {
                        className: re().back,
                        children: (0, n.jsx)(B.Z, {
                            onClick: a
                        })
                    })]
                })
            }
        },
        369263: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => y
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                s = r(882723),
                l = r(149258),
                o = r(102007),
                c = r(598679),
                u = r(165667),
                d = r.n(u);

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e) {
                var t = e.errors;
                return (0, n.jsx)(n.Fragment, {
                    children: t.map((function(e, t) {
                        return (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-danger",
                            className: d().errorMessage,
                            children: (r = e,
                                r.replace(/[0-9.,]+ ?kb/g, (function(e) {
                                    var t = 1024 * parseInt(e, 10);
                                    return isNaN(t) ? e : (0, l.Ng)(t)
                                })))
                        }, t);
                        var r
                    }))
                })
            }

            function y(e) {
                var t, r = e.title,
                    i = e.titleIcon,
                    l = e.titleId,
                    u = e.description,
                    y = e.children,
                    m = e.className,
                    b = e.errors,
                    h = e.disabled,
                    I = void 0 !== h && h,
                    O = e.hideDivider,
                    _ = void 0 !== O && O,
                    g = e.showBorder,
                    v = void 0 !== g && g,
                    P = e.borderType,
                    S = e.hasBackground,
                    E = void 0 !== S && S,
                    N = e.forcedDivider,
                    T = void 0 !== N && N,
                    A = e.showPremiumIcon,
                    j = void 0 !== A && A;
                return (0, n.jsx)("div", {
                    className: a()(d().customizationSection, m, (t = {}, f(t, d().disabled, I), f(t, d().hideDivider, _), f(t, d().showBorder, v), f(t, d().withDivider, T), t)),
                    children: (0, n.jsxs)(c.Z, {
                        className: d().customizationSectionBorder,
                        backgroundClassName: d().customizationSectionBackground,
                        isShown: v,
                        type: P,
                        hasBackground: E,
                        children: [(0, n.jsxs)(s.FormTitle, {
                            className: d().title,
                            id: l,
                            children: [r, j && (0, n.jsx)(o.Z, {}), i]
                        }), null != u ? (0, n.jsx)(s.FormText, {
                            type: s.FormText.Types.DESCRIPTION,
                            className: d().sectionDescription,
                            children: u
                        }) : null, y, null != b && (0, n.jsx)(p, {
                            errors: b
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=81b975b965b1f9ca1d65.js.map