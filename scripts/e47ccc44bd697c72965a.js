"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79949], {
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
                Z: () => C
            });
            var r = n(785893),
                a = n(667294),
                s = n(294184),
                i = n.n(s),
                o = n(441143),
                l = n.n(o),
                c = n(202351),
                u = n(882723),
                h = n(64318),
                p = n(348592),
                f = n(116094),
                d = n(2590),
                I = n(203600),
                y = n(473708),
                b = n(205074),
                A = n.n(b);

            function v(e, t, n, r, a, s, i) {
                try {
                    var o = e[s](i),
                        l = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(l) : Promise.resolve(l).then(r, a)
            }

            function T(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var s = e.apply(t, n);

                        function i(e) {
                            v(s, r, a, i, o, "next", e)
                        }

                        function o(e) {
                            v(s, r, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function L(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function P(e, t) {
                return !t || "object" !== N(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var N = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var n, r = _(e);
                    if (t) {
                        var a = _(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return P(this, n)
                }
            }
            var g = function(e, t) {
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
                S = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && E(e, t)
                    }(a, e);
                    var t = O(a);

                    function a() {
                        m(this, a);
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
                    s.hasAcceptedNeccessaryTerms = function(e, t) {
                        return (e.isTrial || e.isGift || t.hasAcceptedTerms) && (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
                    };
                    s.renderLegalTerms = function() {
                        var e = this.props,
                            t = e.hasPreviouslyAcceptedTerms,
                            n = e.forceShow,
                            a = e.isTrial,
                            s = e.checkboxLabel,
                            o = e.checkboxClassname,
                            l = e.checkboxLabelClassname,
                            c = e.disabled,
                            h = e.isGift,
                            p = this.state.hasAcceptedTerms;
                        if (!(!n && t || a) && h) {
                            var f = y.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: y.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT,
                                paidURL: d.EYA.PAID_TERMS
                            });
                            return (0, r.jsx)("div", {
                                className: i()(A().checkboxLabel, l),
                                children: f
                            })
                        }
                        return !n && t || a ? null : (0, r.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: p,
                            onChange: this.handleToggleTermsAcceptance,
                            disabled: c,
                            className: i()(A().checkbox, o),
                            children: (0, r.jsx)("div", {
                                className: i()(A().checkboxLabel, l),
                                children: null != s ? s : y.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: d.EYA.TERMS,
                                    paidURL: d.EYA.PAID_TERMS
                                })
                            })
                        })
                    };
                    s.formatInterval = function(e) {
                        if (e === I.rV.YEAR) return y.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                        if (e === I.rV.MONTH) return y.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
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
                            b = e.checkboxClassname,
                            v = e.checkboxLabelClassname,
                            m = e.finePrint,
                            _ = e.showPricingLink,
                            P = e.showWithdrawalWaiver,
                            E = e.isTrial,
                            N = e.subscriptionPlan,
                            O = e.finePrintClassname,
                            S = this.state,
                            C = S.hasAcceptedEULA,
                            M = S.hasAcceptedWithdrawalWaiver;
                        l()(!E || null != N, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true");
                        return c || !s || null != t && !o || P ? (0, r.jsxs)("div", {
                            className: I,
                            children: [!E && (0, r.jsx)(u.FormTitle, {
                                className: A().formTitle,
                                children: P ? y.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER : y.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO
                            }), this.renderLegalTerms(), null == t || !c && o ? null : (0, r.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: C,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: h,
                                className: A().checkbox,
                                children: (0, r.jsx)("div", {
                                    className: A().checkboxLabel,
                                    children: y.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                        applicationName: a,
                                        onClick: function(e) {
                                            (0, u.openModalLazy)(T((function() {
                                                var e, a;
                                                return g(this, (function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(47007), n.e(40970), n.e(16105), n.e(55121), n.e(35855), n.e(96043), n.e(25978), n.e(95139)]).then(n.bind(n, 54415))];
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
                                                                            L(e, t, n[t])
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
                            }), null == m ? null : (0, r.jsx)("div", {
                                className: i()(A().finePrint, O),
                                children: m
                            }), P ? (0, r.jsxs)("div", {
                                className: I,
                                children: [(0, r.jsx)(u.Checkbox, {
                                    type: u.Checkbox.Types.INVERTED,
                                    value: M,
                                    onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                    disabled: h,
                                    className: i()(A().checkbox, b),
                                    children: (0, r.jsx)("div", {
                                        className: i()(A().checkboxLabel, v),
                                        children: y.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                    })
                                }), (0, r.jsx)("div", {
                                    className: A().finePrint,
                                    children: y.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                                })]
                            }) : null, _ && (0, r.jsxs)("div", {
                                className: A().finePrint,
                                children: ["*", y.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                                    documentationLink: p.Z.getArticleURL(d.BhN.LOCALIZED_PRICING)
                                })]
                            }), E && null != N && (0, r.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: y.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                    buttonText: (0, f.W_)(null, N),
                                    interval: this.formatInterval(null == N ? void 0 : N.interval),
                                    cancelSubscriptionArticle: p.Z.getArticleURL(d.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: p.Z.getArticleURL(d.BhN.PAID_TERMS)
                                })
                            })]
                        }) : null
                    };
                    return a
                }(a.Component);
            const C = c.ZP.connectStores([h.Z], (function(e) {
                var t = e.eulaId;
                return {
                    hasPreviouslyAcceptedTerms: h.Z.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && h.Z.hasAcceptedEULA(t)
                }
            }))(S)
        },
        179949: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => w
            });
            var r = n(785893),
                a = n(667294),
                s = n(202351),
                i = n(882723),
                o = n(744564),
                l = n(114126),
                c = n(161071),
                u = n(695166),
                h = n(951442),
                p = n(536713),
                f = n(784426),
                d = n(959207),
                I = n(430091),
                y = n(64318),
                b = n(840974),
                A = n(107364),
                v = n(641277),
                T = n(452723),
                m = n(717902),
                L = n(2590),
                _ = n(473708),
                P = n(451084),
                E = n.n(P);

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return O(e)
            }

            function g(e, t) {
                return !t || "object" !== C(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var C = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function M(e) {
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
                    return g(this, n)
                }
            }
            var x = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && S(e, t)
                }(n, e);
                var t = M(n);

                function n() {
                    N(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        selectedInstallationPath: e.props.defaultInstallationPath,
                        hasError: !1,
                        isInstalling: !1,
                        hasAcceptedNeccessaryTerms: !1
                    };
                    e.isUnmounted = !1;
                    e.handleChangePath = function(t, n) {
                        e.setState({
                            selectedInstallationPath: t,
                            hasError: n
                        })
                    };
                    e.install = function(t, n) {
                        var r = e.props,
                            a = r.application,
                            s = r.branchId,
                            i = r.analyticsLocation;
                        if (null == a) return null;
                        (0, h.LO)({
                            application: a,
                            branchId: s,
                            buildId: t,
                            manifestIds: n,
                            installationPath: e.state.selectedInstallationPath,
                            analyticsLocation: i
                        });
                        (0, f.uL)(L.Z5c.APPLICATION_LIBRARY);
                        e.close()
                    };
                    e.handleInstall = function() {
                        var t = e.props,
                            n = t.application,
                            r = t.buildId,
                            a = t.manifestIds,
                            s = t.hasPreviouslyAcceptedStoreTerms;
                        if (null == r || null == a) throw new Error("Unexpected missing build info for non-premium product");
                        s || (0, u.Bv)();
                        null != n && null != n.eulaId && (0, u.DC)(n.eulaId);
                        e.install(r, a)
                    };
                    e.handlePurchaseTermsChange = function(t) {
                        e.setState({
                            hasAcceptedNeccessaryTerms: t
                        })
                    };
                    e.close = function() {
                        e.props.onClose()
                    };
                    return e
                }
                var a = n.prototype;
                a.fetchInstallSize = function() {
                    var e = this.props,
                        t = e.applicationId,
                        n = e.branchId,
                        r = e.buildId,
                        a = e.manifestIds,
                        s = e.buildSizeKB;
                    null != r && null != a && null == s && o.Z.wait((function() {
                        (0, c.q)(t, n, r, a)
                    }))
                };
                a.componentDidMount = function() {
                    var e = this.props,
                        t = e.applicationId,
                        n = e.branchId,
                        r = e.buildId,
                        a = e.manifestIds;
                    null == r || null == a ? (0, l.l)(t, n) : this.fetchInstallSize()
                };
                a.componentDidUpdate = function(e) {
                    this.props.buildId === e.buildId && this.props.manifestIds === e.manifestIds || this.fetchInstallSize()
                };
                a.componentWillUnmount = function() {
                    this.isUnmounted = !0
                };
                a.renderButton = function() {
                    var e = this.props.buildId,
                        t = this.state,
                        n = t.hasError,
                        a = t.hasAcceptedNeccessaryTerms;
                    return (0, r.jsx)(i.Button, {
                        disabled: n || null == e || !a,
                        color: i.Button.Colors.GREEN,
                        onClick: this.handleInstall,
                        children: _.Z.Messages.GAME_ACTION_BUTTON_INSTALL
                    })
                };
                a.render = function() {
                    var e = this.props,
                        t = e.application,
                        n = e.buildSizeKB,
                        a = e.transitionState,
                        s = this.state,
                        o = s.selectedInstallationPath,
                        l = s.isInstalling,
                        c = null != t && t.getSplashURL(440);
                    return (0, r.jsxs)(i.ModalRoot, {
                        transitionState: a,
                        size: i.ModalSize.SMALL,
                        "aria-label": _.Z.Messages.APPLICATION_INSTALLATION_MODAL_TITLE,
                        children: [null != c ? (0, r.jsx)("div", {
                            className: E().splash,
                            style: {
                                backgroundImage: "url(".concat(c, ")")
                            }
                        }) : null, (0, r.jsxs)(i.ModalHeader, {
                            justify: A.Z.Justify.BETWEEN,
                            children: [(0, r.jsx)(A.Z.Child, {
                                grow: 1,
                                children: (0, r.jsx)(i.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: _.Z.Messages.APPLICATION_INSTALLATION_MODAL_TITLE
                                })
                            }), (0, r.jsx)(A.Z.Child, {
                                grow: 0,
                                children: (0, r.jsx)(i.ModalCloseButton, {
                                    onClick: this.close
                                })
                            })]
                        }), (0, r.jsxs)(i.ModalContent, {
                            children: [(0, r.jsxs)(A.Z, {
                                align: A.Z.Align.CENTER,
                                children: [(0, r.jsx)(v.Z, {
                                    game: t,
                                    size: v.Z.Sizes.MEDIUM,
                                    className: E().gameIcon
                                }), (0, r.jsx)("div", {
                                    className: E().gameName,
                                    children: null != t && t.name
                                }), null != n ? (0, r.jsx)("div", {
                                    className: E().installSize,
                                    children: (0, T.BU)(n, {
                                        useKibibytes: !0
                                    })
                                }) : null]
                            }), (0, r.jsx)("div", {
                                className: E().divider
                            }), (0, r.jsx)(m.Z, {
                                autoFocus: !0,
                                className: E().selector,
                                value: o,
                                requiredDiskKB: n,
                                onChange: this.handleChangePath
                            }), (0, r.jsx)(p.Z, {
                                eulaId: t.eulaId,
                                applicationName: t.name,
                                disabled: l,
                                onChange: this.handlePurchaseTermsChange,
                                className: E().terms
                            })]
                        }), (0, r.jsx)(i.ModalFooter, {
                            children: this.renderButton()
                        })]
                    })
                };
                return n
            }(a.Component);
            const w = s.ZP.connectStores([b.Z, d.Z, I.Z, y.Z], (function(e) {
                var t = e.applicationId,
                    n = e.branchId,
                    r = I.Z.getTargetBuildId(t, n);
                return {
                    application: d.Z.getGame(t),
                    defaultInstallationPath: b.Z.defaultInstallationPath,
                    buildId: r,
                    manifestIds: I.Z.getTargetManifests(t, n),
                    buildSizeKB: null != r ? I.Z.getBuildSize(r) : null,
                    hasPreviouslyAcceptedStoreTerms: y.Z.hasAcceptedStoreTerms
                }
            }))(x)
        },
        717902: (e, t, n) => {
            n.d(t, {
                Z: () => L
            });
            var r = n(785893),
                a = n(667294),
                s = n(202351),
                i = n(882723),
                o = n(980151),
                l = n(840974),
                c = n(452723),
                u = n(310126),
                h = n(473708),
                p = n(734703),
                f = n.n(p);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function I(e) {
                I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return I(e)
            }

            function y(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function v(e) {
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
                    return y(this, n)
                }
            }
            var T = "select",
                m = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && b(e, t)
                    }(n, e);
                    var t = v(n);

                    function n() {
                        d(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            newInstallationPath: null
                        };
                        e.fetchedMetadataPaths = new Set;
                        e.handleChange = function(t) {
                            t === T ? u.ZP.showOpenDialog(["openDirectory"]).then((function(t) {
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
                            value: T,
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
                            className: f().error,
                            children: h.Z.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
                        }) : this.hasEnoughDiskSpace(t) ? null : (0, r.jsx)("div", {
                            className: f().error,
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
            const L = s.ZP.connectStores([l.Z], (function() {
                return {
                    installationPaths: l.Z.installationPaths,
                    installationPathsMetadata: l.Z.installationPathsMetadata
                }
            }))(m)
        }
    }
]);
//# sourceMappingURL=e47ccc44bd697c72965a.js.map