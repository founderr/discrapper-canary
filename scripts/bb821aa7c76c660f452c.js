(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [67267], {
        497206: (e, t, n) => {
            e.exports = n.p + "5fe15d1753b3a2c9050dc9750d255163.svg"
        },
        161071: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => u
            });
            var r = n(281110),
                a = n(744564),
                i = n(430091),
                s = n(2590);

            function o(e, t, n, r, a, i, s) {
                try {
                    var o = e[i](s),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function s(e) {
                            o(i, r, a, s, c, "next", e)
                        }

                        function c(e) {
                            o(i, r, a, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            var l = function(e, t) {
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
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function o(i) {
                    return function(o) {
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
                        }([i, o])
                    }
                }
            };

            function u(e, t, n, r) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = c((function(e, t, n, o) {
                    var c;
                    return l(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                if (!i.Z.needsToFetchBuildSize(n)) return [2];
                                a.Z.dispatch({
                                    type: "APPLICATION_BUILD_SIZE_FETCH_START",
                                    buildId: n
                                });
                                l.label = 1;
                            case 1:
                                l.trys.push([1, 3, , 4]);
                                return [4, r.ZP.post({
                                    url: s.ANM.APPLICATION_BUILD_SIZE(e, t, n),
                                    body: {
                                        manifest_ids: o
                                    },
                                    oldFormErrors: !0
                                })];
                            case 2:
                                c = l.sent();
                                a.Z.dispatch({
                                    type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
                                    buildId: n,
                                    sizeKB: c.body.size_kb
                                });
                                return [3, 4];
                            case 3:
                                l.sent();
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
            "use strict";
            n.d(t, {
                Bv: () => a,
                DC: () => i
            });
            var r = n(744564);

            function a() {
                r.Z.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
                })
            }

            function i(e) {
                r.Z.dispatch({
                    type: "APPLICATION_STORE_ACCEPT_EULA",
                    eulaId: e
                })
            }
        },
        980151: (e, t, n) => {
            "use strict";
            n.d(t, {
                RY: () => i,
                iD: () => s,
                Tb: () => o,
                ec: () => c
            });
            var r = n(744564),
                a = n(457493);

            function i(e) {
                a.Z.queryDirectory(e, (function(t, n) {
                    null == t && null != n && r.Z.dispatch({
                        type: "INSTALLATION_LOCATION_ADD",
                        path: e,
                        metadata: n
                    })
                }))
            }

            function s(e) {
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

            function c(e) {
                var t = {},
                    n = 0,
                    i = !0,
                    s = !1,
                    o = void 0;
                try {
                    for (var c, l = function() {
                            var i = c.value;
                            if (null == i || "string" != typeof i) return "continue";
                            a.Z.queryDirectory(i, (function(a, s) {
                                ++n;
                                null == a && null != s && (t[i] = s);
                                n === e.length && r.Z.dispatch({
                                    type: "INSTALLATION_LOCATION_FETCH_METADATA",
                                    metadataPayload: t
                                })
                            }))
                        }, u = e[Symbol.iterator](); !(i = (c = u.next()).done); i = !0) l()
                } catch (e) {
                    s = !0;
                    o = e
                } finally {
                    try {
                        i || null == u.return || u.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        },
        536713: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => x
            });
            var r = n(785893),
                a = n(667294),
                i = n(294184),
                s = n.n(i),
                o = n(441143),
                c = n.n(o),
                l = n(202351),
                u = n(304548),
                p = n(786483),
                h = n(820610),
                f = n(64318),
                d = n(348592),
                b = n(116094),
                y = n(2590),
                T = n(203600),
                _ = n(473708),
                A = n(725746),
                v = n.n(A);

            function I(e, t, n, r, a, i, s) {
                try {
                    var o = e[i](s),
                        c = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(c) : Promise.resolve(c).then(r, a)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var i = e.apply(t, n);

                        function s(e) {
                            I(i, r, a, s, o, "next", e)
                        }

                        function o(e) {
                            I(i, r, a, s, o, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function O(e, t) {
                return !t || "object" !== S(t) && "function" != typeof t ? function(e) {
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
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e) {
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
                    var n, r = E(e);
                    if (t) {
                        var a = E(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
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
                        next: o(0),
                        throw: o(1),
                        return: o(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function o(i) {
                        return function(o) {
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
                            }([i, o])
                        }
                    }
                },
                M = function(e) {
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
                    var t = C(a);

                    function a() {
                        L(this, a);
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
                    var i = a.prototype;
                    i.componentDidMount = function() {
                        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                    };
                    i.componentDidUpdate = function(e, t) {
                        var n = this.hasAcceptedNeccessaryTerms(e, t),
                            r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                        r !== n && this.props.onChange(r)
                    };
                    i.canSkipTOSCheckbox = function() {
                        var e = this.props,
                            t = e.purchaseType,
                            n = e.isGift,
                            r = e.isTrial,
                            a = e.isDiscount;
                        return !!(n || r || a) || t === y.GZQ.ONE_TIME
                    };
                    i.hasAcceptedNeccessaryTerms = function(e, t) {
                        return (t.hasAcceptedTerms || this.canSkipTOSCheckbox() || this.isInCheckoutTOSExperiment()) && (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
                    };
                    i.isInCheckoutTOSExperiment = function() {
                        var e = this.props,
                            t = e.isTrial,
                            n = e.subscriptionPlan,
                            r = e.isGift;
                        return !t && null != n && !r && (0, p.s)("purchase_terms", {
                            autoTrackExposure: !0
                        }).enabled
                    };
                    i.renderLegalTerms = function() {
                        var e = this.props,
                            t = e.hasPreviouslyAcceptedTerms,
                            n = e.forceShow,
                            a = e.isTrial,
                            i = e.checkboxLabel,
                            o = e.checkboxClassname,
                            c = e.checkboxLabelClassname,
                            l = e.disabled,
                            f = e.subscriptionPlan,
                            d = e.isGift,
                            b = e.currentSubscription,
                            T = e.planGroup;
                        if (this.canSkipTOSCheckbox()) return null;
                        if (!(!n && t || a || null == f)) {
                            var A = (0, p.s)("purchase_terms", {
                                autoTrackExposure: !1
                            }).bucket;
                            if (1 === A) return null;
                            if (2 === A) {
                                var I = (0, h.K)({
                                        purchaseType: y.GZQ.SUBSCRIPTION,
                                        plan: f,
                                        premiumSubscription: null == b ? null : b,
                                        isGift: !!d,
                                        planGroup: null == T ? [] : T,
                                        isPrepaidPaymentSource: !1
                                    }),
                                    m = _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                        primaryText: I,
                                        paidURL: y.EYA.PAID_TERMS
                                    });
                                return (0, r.jsx)("div", {
                                    className: s()(v().checkboxLabel, c),
                                    children: m
                                })
                            }
                        }
                        if (n || !t) {
                            var L = this.state.hasAcceptedTerms;
                            return (0, r.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: L,
                                onChange: this.handleToggleTermsAcceptance,
                                disabled: l,
                                className: s()(v().checkbox, o),
                                children: (0, r.jsx)("div", {
                                    className: s()(v().checkboxLabel, c),
                                    children: null != i ? i : _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                        termsURL: y.EYA.TERMS,
                                        paidURL: y.EYA.PAID_TERMS
                                    })
                                })
                            })
                        }
                        return null
                    };
                    i.formatInterval = function(e) {
                        if (e === T.rV.YEAR) return _.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                        if (e === T.rV.MONTH) return _.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                        throw new Error("Invalid interval type: ".concat(e))
                    };
                    i.render = function() {
                        var e = this.props,
                            t = e.eulaId,
                            a = e.applicationName,
                            i = e.hasPreviouslyAcceptedTerms,
                            o = e.hasPreviouslyAcceptedEULA,
                            l = e.forceShow,
                            p = e.disabled,
                            h = e.className,
                            f = e.checkboxClassname,
                            T = e.checkboxLabelClassname,
                            A = e.finePrint,
                            I = e.showPricingLink,
                            L = e.showWithdrawalWaiver,
                            E = e.isTrial,
                            O = e.isDiscount,
                            N = e.subscriptionPlan,
                            S = e.finePrintClassname,
                            C = this.state,
                            M = C.hasAcceptedEULA,
                            x = C.hasAcceptedWithdrawalWaiver;
                        c()(!E || null != N, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true");
                        if (!l && i && (null == t || o) && !L) return null;
                        var R = L ? _.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER : _.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                        this.isInCheckoutTOSExperiment() && !L && (R = "");
                        return (0, r.jsxs)("div", {
                            className: h,
                            children: [!E && !O && "" !== R && (0, r.jsx)(u.FormTitle, {
                                className: v().formTitle,
                                children: R
                            }), this.renderLegalTerms(), null == t || !l && o ? null : (0, r.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: M,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: p,
                                className: v().checkbox,
                                children: (0, r.jsx)("div", {
                                    className: v().checkboxLabel,
                                    children: _.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                        applicationName: a,
                                        onClick: function(e) {
                                            (0, u.openModalLazy)(m((function() {
                                                var e, a;
                                                return g(this, (function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return [4, Promise.all([n.e(40532), n.e(25978), n.e(53686), n.e(47057)]).then(n.bind(n, 54415))];
                                                        case 1:
                                                            e = i.sent(), a = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(a, function(e) {
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
                            }), null == A ? null : (0, r.jsx)("div", {
                                className: s()(v().finePrint, S),
                                children: A
                            }), L ? (0, r.jsxs)("div", {
                                className: h,
                                children: [(0, r.jsx)(u.Checkbox, {
                                    type: u.Checkbox.Types.INVERTED,
                                    value: x,
                                    onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                    disabled: p,
                                    className: s()(v().checkbox, f),
                                    children: (0, r.jsx)("div", {
                                        className: s()(v().checkboxLabel, T),
                                        children: _.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                    })
                                }), (0, r.jsx)("div", {
                                    className: v().finePrint,
                                    children: _.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                                })]
                            }) : null, I && (0, r.jsxs)("div", {
                                className: v().finePrint,
                                children: ["*", _.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                                    documentationLink: d.Z.getArticleURL(y.BhN.LOCALIZED_PRICING)
                                })]
                            }), E && null != N && (0, r.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: _.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                    buttonText: (0, b.W_)(null, N),
                                    interval: this.formatInterval(null == N ? void 0 : N.interval),
                                    cancelSubscriptionArticle: d.Z.getArticleURL(y.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: d.Z.getArticleURL(y.BhN.PAID_TERMS)
                                })
                            }), O && null != N && (0, r.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: _.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                    buttonText: (0, b.W_)(null, N),
                                    interval: this.formatInterval(null == N ? void 0 : N.interval),
                                    cancelSubscriptionArticle: d.Z.getArticleURL(y.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: d.Z.getArticleURL(y.BhN.PAID_TERMS)
                                })
                            })]
                        })
                    };
                    return a
                }(a.Component);
            const x = l.ZP.connectStores([f.Z], (function(e) {
                var t = e.eulaId;
                return {
                    hasPreviouslyAcceptedTerms: f.Z.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != t && f.Z.hasAcceptedEULA(t)
                }
            }))(M)
        },
        717902: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                a = n(667294),
                i = n(202351),
                s = n(304548),
                o = n(980151),
                c = n(840974),
                l = n(452723),
                u = n(310126),
                p = n(473708),
                h = n(890339),
                f = n.n(h);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function y(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function T(e, t) {
                T = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return T(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function A(e) {
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
                    var n, r = b(e);
                    if (t) {
                        var a = b(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var v = "select",
                I = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && T(e, t)
                    }(n, e);
                    var t = A(n);

                    function n() {
                        d(this, n);
                        var e;
                        (e = t.apply(this, arguments)).state = {
                            newInstallationPath: null
                        };
                        e.fetchedMetadataPaths = new Set;
                        e.handleChange = function(t) {
                            t === v ? u.ZP.showOpenDialog(["openDirectory"]).then((function(t) {
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
                            i = void 0;
                        try {
                            for (var s, c = t[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) {
                                var l = s.value;
                                this.fetchedMetadataPaths.add(l)
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (a) throw i
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
                            value: v,
                            label: p.Z.Messages.APPLICATION_INSTALLATION_MODAL_SELECT_DIRECTORY
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
                            children: p.Z.Messages.APPLICATION_INSTALLATION_MODAL_NO_PERMISSION
                        }) : this.hasEnoughDiskSpace(t) ? null : (0, r.jsx)("div", {
                            className: f().error,
                            children: p.Z.Messages.APPLICATION_INSTALLATION_MODAL_NOT_ENOUGH_SPACE
                        })
                    };
                    a.renderLabel = function(e, t) {
                        var n = this.props.installationPathsMetadata,
                            r = null != t ? t : e;
                        return null != n[e] && null != n[e].availableKB ? p.Z.Messages.APPLICATION_INSTALLATION_MODAL_DIRECTORY_WITH_SPACE.format({
                            path: r,
                            size: (0, l.BU)(n[e].availableKB, {
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
                            children: [(0, r.jsx)(s.FormTitle, {
                                tag: "h5",
                                children: p.Z.Messages.APPLICATION_INSTALLATION_MODAL_LOCATION
                            }), (0, r.jsx)(s.SingleSelect, {
                                autoFocus: a,
                                options: this.getOptions(),
                                value: t,
                                onChange: this.handleChange
                            }), this.renderError()]
                        })
                    };
                    return n
                }(a.PureComponent);
            const m = i.ZP.connectStores([c.Z], (function() {
                return {
                    installationPaths: c.Z.installationPaths,
                    installationPathsMetadata: c.Z.installationPathsMetadata
                }
            }))(I)
        },
        786483: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => a
            });
            var r = (0, n(260561).B)({
                id: "2023-05_checkout_terms_of_service",
                label: "Checkout Terms of Service",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "remove-checkbox-with-ui-changes",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "remove-checkbox-only",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                }).autoTrackExposure;
                return r.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: t
                })
            }
        },
        820610: (e, t, n) => {
            "use strict";
            n.d(t, {
                K: () => v,
                Z: () => m
            });
            var r = n(785893),
                a = (n(667294), n(441143)),
                i = n.n(a),
                s = n(304548),
                o = n(782786),
                c = n(709189),
                l = n(116094),
                u = n(530562),
                p = n(520453),
                h = n(473708),
                f = n(641352),
                d = n.n(f),
                b = n(497206),
                y = n.n(b);

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        T(e, t, n[t])
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

            function v(e) {
                var t = e.purchaseType,
                    n = e.plan,
                    r = e.premiumSubscription,
                    a = e.isGift,
                    s = e.planGroup,
                    o = e.isPrepaidPaymentSource;
                if (t === p.GZ.ONE_TIME) return h.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                i()(null != n, "Subscription plan must be selected to render SubscriptionReviewButton");
                return a ? h.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : (0, l.PV)(n.id) ? o ? h.Z.Messages.BILLING_SELECT_PLAN : null != r ? (0, u.R4)(r, n.id, s) ? h.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : h.Z.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, l.W_)(null, n) : h.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function I(e, t) {
                if (null != e.current) {
                    e.current.scrollIntoView({
                        behavior: "smooth"
                    });
                    t()
                }
            }

            function m(e) {
                var t = e.legalTermsNodeRef,
                    n = e.invoiceError,
                    a = e.planError,
                    i = e.disablePurchase,
                    l = e.flashLegalTerms,
                    u = e.isSubmitting,
                    p = e.premiumSubscription,
                    f = e.isGift,
                    b = e.planGroup,
                    T = e.isPrepaid,
                    m = e.isTrial,
                    L = e.makePurchase,
                    P = e.needsPaymentSource,
                    E = (0, o.usePaymentContext)(),
                    O = E.selectedPlan,
                    N = E.hasAcceptedTerms,
                    S = v({
                        purchaseType: E.purchaseType,
                        plan: O,
                        premiumSubscription: p,
                        isGift: f,
                        planGroup: b,
                        isPrepaidPaymentSource: T
                    });
                return null != n || null != a || i ? (0, r.jsx)(s.Button, {
                    color: s.Button.Colors.GREEN,
                    disabled: !0,
                    children: S
                }) : P ? (0, r.jsx)(s.Tooltip, {
                    text: h.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: function(e) {
                        return (0, r.jsx)(s.Button, A(_({}, e), {
                            color: s.Button.Colors.GREEN,
                            type: "submit",
                            "data-testid": "submitButton",
                            disabled: !0,
                            children: S
                        }))
                    }
                }) : m ? (0, r.jsxs)(c.C, {
                    innerClassName: d().innerButton,
                    "data-testid": N ? "purchase" : "submitButton",
                    onClick: N ? L : function() {
                        return I(t, l)
                    },
                    color: s.Button.Colors.GREEN,
                    submitting: u,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        className: d().nitroIcon,
                        src: y()
                    }), S]
                }) : N ? (0,
                    r.jsx)(s.Button, {
                    "data-testid": "purchase",
                    onClick: L,
                    color: s.Button.Colors.GREEN,
                    submitting: u,
                    children: S
                }) : (0, r.jsx)(s.Tooltip, {
                    text: h.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: function(e) {
                        return (0, r.jsx)(s.Button, A(_({}, e), {
                            color: s.Button.Colors.GREEN,
                            type: "submit",
                            onClick: function() {
                                return I(t, l)
                            },
                            "data-testid": "submitButton",
                            children: S
                        }))
                    }
                })
            }
        }
    }
]);