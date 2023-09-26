"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [70232], {
        161071: (e, t, n) => {
            n.d(t, {
                q: () => u
            });
            var r = n(281110),
                a = n(744564),
                s = n(430091),
                i = n(2590);

            function o(e, t, n, r, a, s, i) {
                try {
                    var o = e[s](i),
                        l = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function l(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var s = e.apply(t, n);

                        function i(e) {
                            o(s, r, a, i, l, "next", e)
                        }

                        function l(e) {
                            o(s, r, a, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var c = function(e, t) {
                var n, r, a, s, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function o(s) {
                    return function(o) {
                        return function(s) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                                (r = 0, a) && (s = [2 & s[0], a.value]);
                                switch (s[0]) {
                                    case 0:
                                    case 1:
                                        a = s;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: s[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = s[1];
                                        s = [0];
                                        continue;
                                    case 7:
                                        s = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                            i.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = s;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(s);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                s = t.call(e, i)
                            } catch (e) {
                                s = [6, e];
                                r = 0
                            } finally {
                                n = a = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, o])
                    }
                }
            };

            function u(e, t, n, r) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = l((function(e, t, n, o) {
                    var l;
                    return c(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                if (!s.Z.needsToFetchBuildSize(n)) return [2];
                                a.Z.dispatch({
                                    type: "APPLICATION_BUILD_SIZE_FETCH_START",
                                    buildId: n
                                });
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, r.ZP.post({
                                    url: i.ANM.APPLICATION_BUILD_SIZE(e, t, n),
                                    body: {
                                        manifest_ids: o
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                l = c.sent();
                                a.Z.dispatch({
                                    type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                                    buildId: n,
                                    sizeKB: l.body.size_kb
                                });
                                return [3, 4];
                            case 3:
                                c.sent();
                                a.Z.dispatch({
                                    type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
                                    buildId: n
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        695166: (e, t, n) => {
            n.d(t, {
                Bv: () => a,
                DC: () => s
            });
            var r = n(744564);

            function a() {
                r.Z.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
                })
            }

            function s(e) {
                r.Z.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_EULA",
                    eulaId: e
                })
            }
        },
        980151: (e, t, n) => {
            n.d(t, {
                RY: () => s,
                iD: () => i,
                Tb: () => o,
                ec: () => l
            });
            var r = n(744564),
                a = n(457493);

            function s(e) {
                a.Z.queryDirectory(e, (function(t, n) {
                    null == t && null != n && r.Z.dispatch({
                        type: "INSTALLATION_LOCATION_ADD",
                        path: e,
                        metadata: n
                    })
                }))
            }

            function i(e) {
                r.Z.dispatch({
                    type: "INSTALLATION_LOCATION_REMOVE",
                    path: e
                })
            }

            function o(e, t) {
                var n = t.label,
                    a = t.isDefault;
                r.Z.dispatch({
                    type: "INSTALLATION_LOCATION_UPDATE",
                    path: e,
                    label: n,
                    isDefault: a
                })
            }

            function l(e) {
                var t = {},
                    n = 0,
                    s = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var l, c = function() {
                            var s = l.value;
                            if (null == s || "string" != typeof s) return "continue";
                            a.Z.queryDirectory(s, (function(a, i) {
                                ++n;
                                null == a && null != i && (t[s] = i);
                                n === e.length && r.Z.dispatch({
                                    type: "INSTALLATION_LOCATION_FETCH_METADATA",
                                    metadataPayload: t
                                })
                            }))
                        }, u = e[Symbol.iterator](); !(s = (l = u.next()).done); s = !0) c()
                } catch (e) {
                    i = !0;
                    o = e
                } finally {
                    try {
                        s || null == u.return || u.return()
                    } finally {
                        if (i) throw o
                    }
                }
            }
        },
        536713: (e, t, n) => {
            n.d(t, {
                Z: () => R
            });
            var r = n(785893),
                a = n(667294),
                s = n(294184),
                i = n.n(s),
                o = n(441143),
                l = n.n(o),
                c = n(202351),
                u = n(304548),
                h = n(64318),
                p = n(348592),
                d = n(694329),
                f = n(2590),
                I = n(203600),
                A = n(473708),
                _ = n(725746),
                P = n.n(_);

            function T(e, t, n, r, a, s, i) {
                try {
                    var o = e[s](i),
                        l = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var s = e.apply(t, n);

                        function i(e) {
                            T(s, r, a, i, o, "next", e)
                        }

                        function o(e) {
                            T(s, r, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function L(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }
            var m = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
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
                    var n, r = O(e);
                    if (t) {
                        var a = O(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return L(this, n)
                }
            }
            var S = function(e, t) {
                    var n, r, a, s, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }), s;

                    function o(s) {
                        return function(o) {
                            return function(s) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a;
                                    (r = 0, a) && (s = [2 & s[0], a.value]);
                                    switch (s[0]) {
                                        case 0:
                                        case 1:
                                            a = s;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: s[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = s[1];
                                            s = [0];
                                            continue;
                                        case 7:
                                            s = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                                i.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && i.label < a[1]) {
                                                i.label = a[1];
                                                a = s;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2];
                                                i.ops.push(s);
                                                break
                                            }
                                            a[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    s = t.call(e, i)
                                } catch (e) {
                                    s = [6, e];
                                    r = 0
                                } finally {
                                    n = a = 0
                                }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, o])
                        }
                    }
                },
                C = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && N(e, t)
                    }(a, e);
                    var t = E(a);

                    function a() {
                        v(this, a);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            hasAcceptedTerms: !e.props.forceShow && e.props.hasPreviouslyAcceptedTerms,
                            hasAcceptedEULA: !e.props.forceShow && e.props.hasPreviouslyAcceptedEULA,
                            hasAcceptedWithdrawalWaiver: !1
                        };
                        e.handleToggleTermsAcceptance = function(t, n) {
                            e.setState({
                                hasAcceptedTerms: n
                            })
                        };
                        e.handleToggleEUWithdralWaiverAcceptance = function(t, n) {
                            e.setState({
                                hasAcceptedWithdrawalWaiver: n
                            })
                        };
                        e.handleToggleEULAAcceptance = function(t, n) {
                            e.setState({
                                hasAcceptedEULA: n
                            })
                        };
                        return e
                    }
                    var s = a.prototype;
                    s.componentDidMount = function() {
                        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                    };
                    s.componentDidUpdate = function(e, t) {
                        var n = this.hasAcceptedNeccessaryTerms(e, t),
                            r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                        r !== n && this.props.onChange(r)
                    };
                    s.canSkipTOSCheckbox = function() {
                        var e = this.props,
                            t = e.purchaseType,
                            n = e.isGift,
                            r = e.isTrial,
                            a = e.isDiscount;
                        return !!(n || r || a) || t === f.GZQ.ONE_TIME
                    };
                    s.hasAcceptedNeccessaryTerms = function(e, t) {
                        return (t.hasAcceptedTerms || this.canSkipTOSCheckbox()) && (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
                    };
                    s.renderLegalTerms = function() {
                        var e = this.props,
                            t = e.hasPreviouslyAcceptedTerms,
                            n = e.forceShow,
                            a = e.isTrial,
                            s = e.isDiscount,
                            o = e.checkboxLabel,
                            l = e.checkboxClassname,
                            c = e.checkboxLabelClassname,
                            h = e.disabled,
                            p = this.state.hasAcceptedTerms;
                        return this.canSkipTOSCheckbox() || !n && t || a || s ? null : (0, r.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: p,
                            onChange: this.handleToggleTermsAcceptance,
                            disabled: h,
                            className: i()(P().checkbox, l),
                            children: (0, r.jsx)("div", {
                                className: i()(P().checkboxLabel, c),
                                children: null != o ? o : A.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: f.EYA.TERMS,
                                    paidURL: f.EYA.PAID_TERMS
                                })
                            })
                        })
                    };
                    s.formatInterval = function(e) {
                        if (e === I.rV.YEAR) return A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                        if (e === I.rV.MONTH) return A.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                        throw new Error("Invalid interval type: ".concat(e))
                    };
                    s.render = function() {
                        var e = this.props,
                            t = e.eulaId,
                            a = e.applicationName,
                            s = e.hasPreviouslyAcceptedTerms,
                            o = e.hasPreviouslyAcceptedEULA,
                            c = e.forceShow,
                            h = e.disabled,
                            I = e.className,
                            _ = e.checkboxClassname,
                            T = e.checkboxLabelClassname,
                            v = e.finePrint,
                            O = e.showPricingLink,
                            L = e.showWithdrawalWaiver,
                            N = e.isTrial,
                            m = e.isDiscount,
                            E = e.subscriptionPlan,
                            C = e.finePrintClassname,
                            R = this.state,
                            g = R.hasAcceptedEULA,
                            M = R.hasAcceptedWithdrawalWaiver;
                        l()(!N || null != E, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true");
                        return c || !s || null != t && !o || L ? (0,
                            r.jsxs)("div", {
                            className: I,
                            children: [!N && !m && (0, r.jsx)(u.FormTitle, {
                                className: P().formTitle,
                                children: L ? A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER : A.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO
                            }), this.renderLegalTerms(), null == t || !c && o ? null : (0, r.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: g,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: h,
                                className: P().checkbox,
                                children: (0, r.jsx)("div", {
                                    className: P().checkboxLabel,
                                    children: A.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                        applicationName: a,
                                        onClick: function(e) {
                                            (0, u.openModalLazy)(b((function() {
                                                var e, a;
                                                return S(this, (function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(25978), n.e(95083)]).then(n.bind(n, 54415))];
                                                        case 1:
                                                            e = s.sent(), a = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(a, function(e) {
                                                                    for (var t = 1; t < arguments.length; t++) {
                                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                                            r = Object.keys(n);
                                                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                                        }))));
                                                                        r.forEach((function(t) {
                                                                            y(e, t, n[t])
                                                                        }))
                                                                    }
                                                                    return e
                                                                }({
                                                                    eulaId: t
                                                                }, e))
                                                            }]
                                                    }
                                                }))
                                            })));
                                            e.preventDefault()
                                        }
                                    })
                                })
                            }), null == v ? null : (0, r.jsx)("div", {
                                className: i()(P().finePrint, C),
                                children: v
                            }), L ? (0, r.jsxs)("div", {
                                className: I,
                                children: [(0, r.jsx)(u.Checkbox, {
                                    type: u.Checkbox.Types.INVERTED,
                                    value: M,
                                    onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                    disabled: h,
                                    className: i()(P().checkbox, _),
                                    children: (0, r.jsx)("div", {
                                        className: i()(P().checkboxLabel, T),
                                        children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                    })
                                }), (0, r.jsx)("div", {
                                    className: P().finePrint,
                                    children: A.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                                })]
                            }) : null, O && (0, r.jsxs)("div", {
                                className: P().finePrint,
                                children: ["*", A.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                                    documentationLink: p.Z.getArticleURL(f.BhN.LOCALIZED_PRICING)
                                })]
                            }), N && null != E && (0, r.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: A.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                    buttonText: (0,
                                        d.W_)(null, E),
                                    interval: this.formatInterval(null == E ? void 0 : E.interval),
                                    cancelSubscriptionArticle: p.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: p.Z.getArticleURL(f.BhN.PAID_TERMS)
                                })
                            }), m && null != E && (0, r.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: A.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                    buttonText: (0, d.W_)(null, E),
                                    interval: this.formatInterval(null == E ? void 0 : E.interval),
                                    cancelSubscriptionArticle: p.Z.getArticleURL(f.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: p.Z.getArticleURL(f.BhN.PAID_TERMS)
                                })
                            })]
                        }) : null
                    };
                    return a
                }(a.Component);
            const R = c.ZP.connectStores([h.Z], (function(e) {
                var t = e.eulaId;
                return {
                    hasPreviouslyAcceptedTerms: h.Z.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && h.Z.hasAcceptedEULA(t)
                }
            }))(C)
        },
        446483: (e, t, n) => {
            n.d(t, {
                Z: () => l
            });
            var r = n(785893),
                a = (n(667294), n(294184)),
                s = n.n(a),
                i = n(545354),
                o = n.n(i);

            function l(e) {
                var t = e.application,
                    n = e.splashSize,
                    a = e.className,
                    i = e.overrideSplash,
                    l = null != i ? i : t.getSplashURL(n),
                    c = null != l ? "url(".concat(l, ")") : void 0;
                return (0, r.jsx)("div", {
                    className: s()(o().splashBackground, a),
                    style: {
                        backgroundImage: c
                    }
                })
            }
        },
        717902: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(785893),
                a = n(667294),
                s = n(202351),
                i = n(304548),
                o = n(980151),
                l = n(840974),
                c = n(452723),
                u = n(310126),
                h = n(473708),
                p = n(890339),
                d = n.n(p);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function A(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var P = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var a = I(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return A(this, n)
                }
            }
            var b = "select",
                v = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && _(e, t)
                    }(n, e);
                    var t = T(n);

                    function n() {
                        f(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            newInstallationPath: null
                        };
                        e.fetchedMetadataPaths = new Set;
                        e.handleChange = function(t) {
                            t === b ? u.ZP.showOpenDialog(["openDirectory"]).then((function(t) {
                                if (null != t && t.length > 0) {
                                    var n = t[0];
                                    e.setState({
                                        newInstallationPath: null != e.props.installationPaths.find((function(e) {
                                            return e.path === n
                                        })) ? null : n
                                    });
                                    e.sendChange(n)
                                }
                            })) : e.sendChange(t)
                        };
                        return e
                    }
                    var a = n.prototype;
                    a.fetchAllDirectoryMetadata = function() {
                        var e = this,
                            t = this.props.installationPaths.map((function(e) {
                                return e.path
                            })),
                            n = this.state.newInstallationPath;
                        null != n && t.push(n);
                        t = t.filter((function(t) {
                            return !e.fetchedMetadataPaths.has(t)
                        }));
                        (0, o.ec)(t);
                        var r = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var i, l = t[Symbol.iterator](); !(r = (i = l.next()).done); r = !0) {
                                var c = i.value;
                                this.fetchedMetadataPaths.add(c)
                            }
                        } catch (e) {
                            a = !0;
                            s = e
                        } finally {
                            try {
                                r || null == l.return || l.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                    };
                    a.componentDidMount = function() {
                        this.fetchAllDirectoryMetadata()
                    };
                    a.componentDidUpdate = function(e) {
                        this.fetchAllDirectoryMetadata();
                        this.props.requiredDiskKB === e.requiredDiskKB && this.props.installationPathsMetadata === e.installationPathsMetadata || this.sendChange(this.props.value)
                    };
                    a.getOptions = function() {
                        var e = this,
                            t = this.props.installationPaths,
                            n = this.state.newInstallationPath,
                            r = t.map((function(t) {
                                var n = t.path,
                                    r = t.label;
                                return {
                                    value: n,
                                    label: e.renderLabel(n, r)
                                }
                            }));
                        null != n && r.push({
                            value: n,
                            label: this.renderLabel(n)
                        });
                        r.push({
                            value: b,
                            label: h.Z.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
                        });
                        return r
                    };
                    a.hasEnoughDiskSpace = function(e) {
                        var t = this.props,
                            n = t.requiredDiskKB,
                            r = t.installationPathsMetadata,
                            a = null != r[e] ? r[e].availableKB : null;
                        return null == n || null == a || n < a
                    };
                    a.sendChange = function(e) {
                        var t = this.props,
                            n = t.installationPathsMetadata;
                        (0, t.onChange)(e, null != n[e] && !1 === n[e].hasPermission || !this.hasEnoughDiskSpace(e))
                    };
                    a.renderError = function() {
                        var e = this.props,
                            t = e.value,
                            n = e.installationPathsMetadata;
                        return null != n[t] && !1 === n[t].hasPermission ? (0, r.jsx)("div", {
                            className: d().error,
                            children: h.Z.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
                        }) : this.hasEnoughDiskSpace(t) ? null : (0, r.jsx)("div", {
                            className: d().error,
                            children: h.Z.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
                        })
                    };
                    a.renderLabel = function(e, t) {
                        var n = this.props.installationPathsMetadata,
                            r = null != t ? t : e;
                        return null != n[e] && null != n[e].availableKB ? h.Z.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
                            path: r,
                            size: (0, c.BU)(n[e].availableKB, {
                                useKibibytes: !0
                            })
                        }) : r
                    };
                    a.render = function() {
                        var e = this.props,
                            t = e.value,
                            n = e.className,
                            a = e.autoFocus;
                        return (0, r.jsxs)("div", {
                            className: n,
                            children: [(0, r.jsx)(i.FormTitle, {
                                tag: "h5",
                                children: h.Z.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
                            }), (0, r.jsx)(i.SingleSelect, {
                                autoFocus: a,
                                options: this.getOptions(),
                                value: t,
                                onChange: this.handleChange
                            }), this.renderError()]
                        })
                    };
                    return n
                }(a.PureComponent);
            const y = s.ZP.connectStores([l.Z], (function() {
                return {
                    installationPaths: l.Z.installationPaths,
                    installationPathsMetadata: l.Z.installationPathsMetadata
                }
            }))(v)
        },
        910740: (e, t, n) => {
            n.d(t, {
                Z: () => w
            });
            var r = n(785893),
                a = n(667294),
                s = n(202351),
                i = n(304548),
                o = n(744564),
                l = n(114126),
                c = n(161071),
                u = n(695166),
                h = n(951442),
                p = n(734691),
                d = n(536713),
                f = n(717902),
                I = n(784426),
                A = n(761814),
                _ = n(430091),
                P = n(64318),
                T = n(840974),
                b = n(107364),
                v = n(750203),
                y = n(709189),
                O = n(557931),
                L = n(534681),
                N = n(2590),
                m = n(473708),
                E = n(5759),
                S = n.n(E);

            function C(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function g(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function M(e, t) {
                M = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return M(e, t)
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function B(e) {
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
                    var n, r = R(e);
                    if (t) {
                        var a = R(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var U = function() {
                    return [m.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_1, m.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_2, m.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_3, m.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_TITLE_4]
                },
                x = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && M(e, t)
                    }(n, e);
                    var t = B(n);

                    function n() {
                        C(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            confirmHeaderIndex: Math.floor(Math.random() * U().length),
                            installPath: e.props.defaultInstallationPath,
                            hasInstallPathError: !1,
                            hasAcceptedNeccessaryTerms: !1
                        };
                        e.handleInstallPathChange = function(t, n) {
                            e.setState({
                                installPath: t,
                                hasInstallPathError: n
                            })
                        };
                        e.handleInventoryClick = function() {
                            p.Z.open(N.oAB.INVENTORY);
                            e.props.onClose()
                        };
                        e.handleGoToLibrary = function() {
                            (0, I.uL)(N.Z5c.APPLICATION_LIBRARY);
                            e.props.onClose()
                        };
                        e.handleInstall = function() {
                            var t = e.props,
                                n = t.application,
                                r = t.branchId,
                                a = t.buildId,
                                s = t.hasPreviouslyAcceptedStoreTerms,
                                i = t.manifestIds,
                                o = t.onClose,
                                l = e.state,
                                c = l.installPath,
                                p = l.hasInstallPathError;
                            s || (0, u.Bv)();
                            null != n.eulaId && (0, u.DC)(n.eulaId);
                            if (!p && null != a && null != i) {
                                h.LO({
                                    application: n,
                                    branchId: r,
                                    buildId: a,
                                    manifestIds: i,
                                    installationPath: c,
                                    analyticsLocation: N.Sbl.APPLICATION_STORE_PAYMENT_MODAL
                                });
                                o();
                                (0, I.uL)(N.Z5c.APPLICATION_LIBRARY)
                            }
                        };
                        e.handlePurchaseTermsChange = function(t) {
                            e.setState({
                                hasAcceptedNeccessaryTerms: t
                            })
                        };
                        return e
                    }
                    var s = n.prototype;
                    s.fetchInstallSize = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.branchId,
                            r = e.buildId,
                            a = e.manifestIds,
                            s = e.buildSizeKB;
                        null != r && null != a && null == s && o.Z.wait((function() {
                            (0, c.q)(t.id, n, r, a)
                        }))
                    };
                    s.componentDidMount = function() {
                        var e = this.props,
                            t = e.application,
                            n = e.branchId,
                            r = e.buildId,
                            a = e.manifestIds,
                            s = e.sku;
                        !e.isIAP && (0, O._f)(s) && (null == r || null == a ? o.Z.wait((function() {
                            return (0, l.l)(t.id, n)
                        })) : this.fetchInstallSize())
                    };
                    s.componentDidUpdate = function(e) {
                        this.props.buildId === e.buildId && this.props.manifestIds === e.manifestIds || this.fetchInstallSize()
                    };
                    s.getHeaderBlurb = function() {
                        var e = this.props,
                            t = e.sku,
                            n = e.application,
                            r = e.isIAP;
                        if (t.isPreorder() && null != t.preorderReleaseAt) return m.Z.Messages.APPLICATION_STORE_PREORDER_PURCHASE_CONFIRMATION_BLURB.format({
                            applicationName: n.name,
                            date: t.preorderReleaseAt.format("MMMM DD")
                        });
                        if (r || [N.epS.DURABLE, N.epS.CONSUMABLE].includes(t.type)) return m.Z.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                            applicationName: n.name,
                            itemName: t.name
                        });
                        if (t.type === N.epS.BUNDLE) return m.Z.Messages.APPLICATION_STORE_BUNDLE_PURCHASE_CONFIRMATION_BLURB.format({
                            name: t.name
                        });
                        var a = t.supportedOperatingSystems[0];
                        return m.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_UNSUPPORTED_OS.format({
                            name: n.name,
                            operatingSystem: (0, L.XK)(a)
                        })
                    };
                    s.renderInstallationHeader = function() {
                        var e = this.props.application;
                        return (0, r.jsx)("div", {
                            className: S().blurb,
                            children: m.Z.Messages.APPLICATION_STORE_PURCHASE_CONFIRMATION_BLURB.format({
                                name: e.name
                            })
                        })
                    };
                    s.renderInstallationBody = function() {
                        var e = this.props,
                            t = e.isFetchingBuild,
                            n = e.buildId,
                            s = e.buildSizeKB,
                            o = e.application,
                            l = this.state,
                            c = l.installPath,
                            u = l.hasInstallPathError,
                            h = l.hasAcceptedNeccessaryTerms;
                        return (0, r.jsxs)(a.Fragment, {
                            children: [(0, r.jsx)(f.Z, {
                                className: S().installSelector,
                                value: c,
                                requiredDiskKB: s,
                                onChange: this.handleInstallPathChange
                            }), (0, r.jsx)(d.Z, {
                                eulaId: o.eulaId,
                                applicationName: o.name,
                                onChange: this.handlePurchaseTermsChange,
                                className: S().storeTerms
                            }), (0, r.jsx)(y.C, {
                                className: S().confirmButton,
                                disabled: u || null == n || !h,
                                onClick: this.handleInstall,
                                submitting: t,
                                color: i.Button.Colors.GREEN,
                                children: m.Z.Messages.APPLICATION_STORE_PURCHASE_INSTALL_GAME
                            })]
                        })
                    };
                    s.renderGenericHeader = function() {
                        return (0, r.jsx)("div", {
                            className: S().blurb,
                            children: this.getHeaderBlurb()
                        })
                    };
                    s.renderBlurbBody = function() {
                        var e, t = this.props,
                            n = t.isIAP,
                            s = t.sku,
                            o = t.onClose;
                        if (s.isPreorder()) {
                            e = m.Z.Messages.APPLICATION_PREORDER_PURCHASE_CONFIRMATION_BUTTON;
                            o = this.handleGoToLibrary
                        } else e = n ? m.Z.Messages.APPLICATION_IAP_PURCHASE_RETURN_TO_GAME : m.Z.Messages.OKAY;
                        return (0, r.jsx)(a.Fragment, {
                            children: (0, r.jsx)(i.Button, {
                                className: S().confirmButton,
                                onClick: o,
                                children: e
                            })
                        })
                    };
                    s.renderBlurb = function() {
                        var e = this.props,
                            t = e.sku;
                        return e.isIAP || !(0, O._f)(t) || t.isPreorder() ? this.renderGenericHeader() : this.renderInstallationHeader()
                    };
                    s.renderBody = function() {
                        var e = this.props,
                            t = e.sku;
                        return e.isIAP || !(0, O._f)(t) || t.isPreorder() ? this.renderBlurbBody() : this.renderInstallationBody()
                    };
                    s.render = function() {
                        var e = this.props.application,
                            t = this.state.confirmHeaderIndex;
                        return (0, r.jsxs)(b.Z, {
                            direction: b.Z.Direction.VERTICAL,
                            align: b.Z.Align.CENTER,
                            children: [(0, r.jsx)(v.Z, {
                                game: e,
                                className: S().icon,
                                size: v.Z.Sizes.LARGE
                            }), (0, r.jsx)("div", {
                                className: S().header,
                                children: U()[t]
                            }), this.renderBlurb(), (0, r.jsx)("div", {
                                className: S().divider
                            }), this.renderBody()]
                        })
                    };
                    return n
                }(a.Component);
            const w = s.ZP.connectStores([T.Z, _.Z, A.Z, P.Z], (function(e) {
                var t, n = e.application,
                    r = A.Z.getActiveLibraryApplication(n.id);
                t = null != r ? r.id : n.id;
                var a = _.Z.getTargetBuildId(n.id, t);
                return {
                    defaultInstallationPath: T.Z.defaultInstallationPath,
                    branchId: t,
                    isFetchingBuild: _.Z.isFetching(n.id, t),
                    buildId: a,
                    manifestIds: _.Z.getTargetManifests(n.id, t),
                    buildSizeKB: null != a ? _.Z.getBuildSize(a) : null,
                    hasPreviouslyAcceptedStoreTerms: P.Z.hasAcceptedStoreTerms
                }
            }))(x)
        },
        320641: (e, t, n) => {
            n.d(t, {
                Y: () => s
            });
            var r = n(2590),
                a = n(473708);

            function s(e, t) {
                if (e) return a.Z.Messages.APPLICATION_STORE_PURCHASE_IAP;
                switch (t) {
                    case r.epS.DURABLE_PRIMARY:
                        return a.Z.Messages.APPLICATION_STORE_PURCHASE_APPLICATION;
                    case r.epS.DURABLE:
                        return a.Z.Messages.APPLICATION_STORE_PURCHASE_DLC;
                    case r.epS.CONSUMABLE:
                        return a.Z.Messages.APPLICATION_STORE_PURCHASE_CONSUMABLE;
                    case r.epS.BUNDLE:
                        return a.Z.Messages.APPLICATION_STORE_PURCHASE_BUNDLE
                }
            }
        }
    }
]);