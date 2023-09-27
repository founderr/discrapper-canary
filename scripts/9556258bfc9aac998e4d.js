(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46285], {
        497206: (e, n, r) => {
            e.exports = r.p + "5fe15d1753b3a2c9050dc9750d255163.svg"
        },
        152042: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => E
            });
            var t = r(785893),
                i = (r(667294), r(786483)),
                a = r(820610),
                s = r(264628),
                c = r(348592),
                l = r(694329),
                o = r(249052),
                u = r(530562),
                I = r(2590),
                d = r(203600),
                p = r(473708),
                _ = r(501235),
                T = r.n(_);
            const E = function(e) {
                var n = e.subscriptionPlan,
                    r = e.isGift,
                    _ = e.isEmbeddedIAP,
                    E = e.renewalInvoice,
                    f = e.paymentSourceType,
                    v = e.hide,
                    m = e.purchaseType,
                    N = e.productLine,
                    P = e.basePrice,
                    M = e.currentSubscription;
                if (v) return null;
                var h, L, b, A = null == e.planGroup ? [] : e.planGroup;
                if (null != E) {
                    var O = l.ZP.getIntervalForInvoice(E);
                    h = O.intervalType;
                    L = O.intervalCount;
                    b = (0, o.og)((0, o.T4)(E.total, E.currency), h, L)
                } else if (null != n) {
                    h = n.interval;
                    L = n.intervalCount
                }
                var S = (0, a.K)({
                        purchaseType: m || I.GZQ.SUBSCRIPTION,
                        plan: n,
                        premiumSubscription: null == M ? null : M,
                        isGift: !!r,
                        planGroup: A,
                        isPrepaidPaymentSource: !1
                    }),
                    R = "",
                    U = "";
                if (_)
                    if (null != b && null != (null == E ? void 0 : E.subscriptionPeriodEnd)) R = p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                        rate: b,
                        renewalDate: E.subscriptionPeriodEnd
                    });
                    else switch (h) {
                        case d.rV.MONTH:
                            R = 1 === L ? p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                intervalCount: L
                            });
                            break;
                        case d.rV.YEAR:
                            R = p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                            break;
                        case void 0:
                            U = p.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: S,
                                paidURL: I.EYA.PAID_TERMS
                            });
                            R = p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                            break;
                        default:
                            throw new Error("Unexpected interval: ".concat(h))
                    } else if (m === I.GZQ.ONE_TIME) {
                        U = p.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: S,
                            paidURL: I.EYA.PAID_TERMS
                        });
                        if (N === I.POd.COLLECTIBLES) R = p.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT;
                        else R = p.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT
                    } else {
                        var y = (0, i.s)("legal_fine_print", {
                            autoTrackExposure: !1
                        });
                        if (null != n && !r && y.enabled && 1 === y.bucket) {
                            var g, C = (0, a.K)({
                                purchaseType: I.GZQ.SUBSCRIPTION,
                                plan: n,
                                premiumSubscription: null == M ? null : M,
                                isGift: !1,
                                planGroup: A,
                                isPrepaidPaymentSource: !1
                            });
                            null != P && null != h && null != L && (g = (0, o.og)((0, o.T4)(P.amount, P.currency), h, L));
                            if (null == g) {
                                var x = new Error("Missing base rate for legal fine print");
                                (0, s.q2)(x, {
                                    tags: {
                                        planId: n.id
                                    }
                                })
                            }
                            R = null != M && (0, u.GY)(M, n.id, A) ? p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
                                primaryText: C,
                                rate: g,
                                paidURL: I.EYA.PAID_TERMS,
                                contactLink: I.EYA.CONTACT,
                                helpdeskArticle: c.Z.getArticleURL(I.BhN.BILLING)
                            }) : p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_V2.format({
                                primaryText: C,
                                rate: g,
                                paidURL: I.EYA.PAID_TERMS,
                                contactLink: I.EYA.CONTACT,
                                helpdeskArticle: c.Z.getArticleURL(I.BhN.BILLING)
                            })
                        } else {
                            r && (U = p.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: S,
                                paidURL: I.EYA.PAID_TERMS
                            }));
                            switch (h) {
                                case d.rV.MONTH:
                                    R = r ? p.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY;
                                    R = r ? p.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === L ? p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                                        intervalCount: L
                                    });
                                    break;
                                case d.rV.YEAR:
                                    R = r ? p.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                                    break;
                                case void 0:
                                    R = "";
                                    break;
                                default:
                                    throw new Error("Unexpected interval: ".concat(h))
                            }
                        }
                    } return (0, t.jsxs)(t.Fragment, {
                    children: ["" !== U && (0, t.jsxs)("div", {
                        children: [(0, t.jsx)("div", {
                            children: U
                        }), (0, t.jsx)("div", {
                            className: T().divider
                        })]
                    }), "" !== R && (0, t.jsx)("div", {
                        children: R
                    }), f === I.HeQ.PAYSAFE_CARD && (0, t.jsx)("div", {
                        className: T().paymentSourceNoticeCopy,
                        children: p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                    }), f === I.HeQ.SOFORT && (0,
                        t.jsxs)("div", {
                        className: T().paymentSourceNoticeCopy,
                        children: [p.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "]
                    })]
                })
            }
        },
        929400: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => c
            });
            var t = r(785893),
                i = (r(667294), r(304548)),
                a = r(691238),
                s = r.n(a);
            const c = function(e) {
                var n = e.message;
                return (0, t.jsxs)("div", {
                    className: s().warnBlock,
                    children: [(0, t.jsx)("div", {
                        className: s().warnIcon
                    }), (0, t.jsx)(i.Text, {
                        className: s().warnText,
                        variant: "text-sm/normal",
                        children: n
                    })]
                })
            }
        },
        536713: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => g
            });
            var t = r(785893),
                i = r(667294),
                a = r(294184),
                s = r.n(a),
                c = r(441143),
                l = r.n(c),
                o = r(202351),
                u = r(304548),
                I = r(786483),
                d = r(820610),
                p = r(64318),
                _ = r(348592),
                T = r(694329),
                E = r(2590),
                f = r(203600),
                v = r(473708),
                m = r(725746),
                N = r.n(m);

            function P(e, n, r, t, i, a, s) {
                try {
                    var c = e[a](s),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? n(l) : Promise.resolve(l).then(t, i)
            }

            function M(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, i) {
                        var a = e.apply(n, r);

                        function s(e) {
                            P(a, t, i, s, c, "next", e)
                        }

                        function c(e) {
                            P(a, t, i, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function h(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function L(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function b(e) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return b(e)
            }

            function A(e, n) {
                return !n || "object" !== S(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function O(e, n) {
                O = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return O(e, n)
            }
            var S = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
                var n = function() {
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
                    var r, t = b(e);
                    if (n) {
                        var i = b(this).constructor;
                        r = Reflect.construct(t, arguments, i)
                    } else r = t.apply(this, arguments);
                    return A(this, r)
                }
            }
            var U = function(e, n) {
                    var r, t, i, a, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function c(a) {
                        return function(c) {
                            return function(a) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, t && (i = 2 & a[0] ? t.return : a[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, a[1])).done) return i;
                                    (t = 0, i) && (a = [2 & a[0], i.value]);
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
                                            t = a[1];
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
                                    a = n.call(e, s)
                                } catch (e) {
                                    a = [6, e];
                                    t = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, c])
                        }
                    }
                },
                y = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && O(e, n)
                    }(i, e);
                    var n = R(i);

                    function i() {
                        h(this, i);
                        var e;
                        (e = n.apply(this, arguments)).state = {
                            hasAcceptedTerms: !e.props.forceShow && e.props.hasPreviouslyAcceptedTerms,
                            hasAcceptedEULA: !e.props.forceShow && e.props.hasPreviouslyAcceptedEULA,
                            hasAcceptedWithdrawalWaiver: !1
                        };
                        e.handleToggleTermsAcceptance = function(n, r) {
                            e.setState({
                                hasAcceptedTerms: r
                            })
                        };
                        e.handleToggleEUWithdralWaiverAcceptance = function(n, r) {
                            e.setState({
                                hasAcceptedWithdrawalWaiver: r
                            })
                        };
                        e.handleToggleEULAAcceptance = function(n, r) {
                            e.setState({
                                hasAcceptedEULA: r
                            })
                        };
                        return e
                    }
                    var a = i.prototype;
                    a.componentDidMount = function() {
                        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                    };
                    a.componentDidUpdate = function(e, n) {
                        var r = this.hasAcceptedNeccessaryTerms(e, n),
                            t = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                        t !== r && this.props.onChange(t)
                    };
                    a.canSkipTOSCheckbox = function() {
                        var e = this.props,
                            n = e.purchaseType,
                            r = e.isGift,
                            t = e.isTrial,
                            i = e.isDiscount;
                        return !!(r || t || i) || n === E.GZQ.ONE_TIME
                    };
                    a.hasAcceptedNeccessaryTerms = function(e, n) {
                        return (n.hasAcceptedTerms || this.canSkipTOSCheckbox() || this.isInCheckoutTOSExperiment()) && (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver)
                    };
                    a.isInCheckoutTOSExperiment = function() {
                        var e = this.props,
                            n = e.isTrial,
                            r = e.subscriptionPlan,
                            t = e.isGift;
                        return !n && null != r && !t && (0, I.s)("purchase_terms", {
                            autoTrackExposure: !0
                        }).enabled
                    };
                    a.renderLegalTerms = function() {
                        var e = this.props,
                            n = e.hasPreviouslyAcceptedTerms,
                            r = e.forceShow,
                            i = e.isTrial,
                            a = e.checkboxLabel,
                            c = e.checkboxClassname,
                            l = e.checkboxLabelClassname,
                            o = e.disabled,
                            p = e.subscriptionPlan,
                            _ = e.isGift,
                            T = e.currentSubscription,
                            f = e.planGroup;
                        if (this.canSkipTOSCheckbox()) return null;
                        if (!(!r && n || i || null == p)) {
                            var m = (0, I.s)("purchase_terms", {
                                autoTrackExposure: !1
                            }).bucket;
                            if (1 === m) return null;
                            if (2 === m) {
                                var P = (0, d.K)({
                                        purchaseType: E.GZQ.SUBSCRIPTION,
                                        plan: p,
                                        premiumSubscription: null == T ? null : T,
                                        isGift: !!_,
                                        planGroup: null == f ? [] : f,
                                        isPrepaidPaymentSource: !1
                                    }),
                                    M = v.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                        primaryText: P,
                                        paidURL: E.EYA.PAID_TERMS
                                    });
                                return (0, t.jsx)("div", {
                                    className: s()(N().checkboxLabel, l),
                                    children: M
                                })
                            }
                        }
                        if (r || !n) {
                            var h = this.state.hasAcceptedTerms;
                            return (0, t.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: h,
                                onChange: this.handleToggleTermsAcceptance,
                                disabled: o,
                                className: s()(N().checkbox, c),
                                children: (0, t.jsx)("div", {
                                    className: s()(N().checkboxLabel, l),
                                    children: null != a ? a : v.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                        termsURL: E.EYA.TERMS,
                                        paidURL: E.EYA.PAID_TERMS
                                    })
                                })
                            })
                        }
                        return null
                    };
                    a.formatInterval = function(e) {
                        if (e === f.rV.YEAR) return v.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                        if (e === f.rV.MONTH) return v.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                        throw new Error("Invalid interval type: ".concat(e))
                    };
                    a.render = function() {
                        var e = this.props,
                            n = e.eulaId,
                            i = e.applicationName,
                            a = e.hasPreviouslyAcceptedTerms,
                            c = e.hasPreviouslyAcceptedEULA,
                            o = e.forceShow,
                            I = e.disabled,
                            d = e.className,
                            p = e.checkboxClassname,
                            f = e.checkboxLabelClassname,
                            m = e.finePrint,
                            P = e.showPricingLink,
                            h = e.showWithdrawalWaiver,
                            b = e.isTrial,
                            A = e.isDiscount,
                            O = e.subscriptionPlan,
                            S = e.finePrintClassname,
                            R = this.state,
                            y = R.hasAcceptedEULA,
                            g = R.hasAcceptedWithdrawalWaiver;
                        l()(!b || null != O, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true");
                        if (!o && a && (null == n || c) && !h) return null;
                        var C = h ? v.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER : v.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO;
                        this.isInCheckoutTOSExperiment() && !h && (C = "");
                        return (0, t.jsxs)("div", {
                            className: d,
                            children: [!b && !A && "" !== C && (0, t.jsx)(u.FormTitle, {
                                className: N().formTitle,
                                children: C
                            }), this.renderLegalTerms(), null == n || !o && c ? null : (0, t.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: y,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: I,
                                className: N().checkbox,
                                children: (0, t.jsx)("div", {
                                    className: N().checkboxLabel,
                                    children: v.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                        applicationName: i,
                                        onClick: function(e) {
                                            (0, u.openModalLazy)(M((function() {
                                                var e, i;
                                                return U(this, (function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            return [4, Promise.all([r.e(40532), r.e(25978), r.e(95083)]).then(r.bind(r, 54415))];
                                                        case 1:
                                                            e = a.sent(), i = e.default;
                                                            return [2, function(e) {
                                                                return (0, t.jsx)(i, function(e) {
                                                                    for (var n = 1; n < arguments.length; n++) {
                                                                        var r = null != arguments[n] ? arguments[n] : {},
                                                                            t = Object.keys(r);
                                                                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                                        }))));
                                                                        t.forEach((function(n) {
                                                                            L(e, n, r[n])
                                                                        }))
                                                                    }
                                                                    return e
                                                                }({
                                                                    eulaId: n
                                                                }, e))
                                                            }]
                                                    }
                                                }))
                                            })));
                                            e.preventDefault()
                                        }
                                    })
                                })
                            }), null == m ? null : (0, t.jsx)("div", {
                                className: s()(N().finePrint, S),
                                children: m
                            }), h ? (0, t.jsxs)("div", {
                                className: d,
                                children: [(0, t.jsx)(u.Checkbox, {
                                    type: u.Checkbox.Types.INVERTED,
                                    value: g,
                                    onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                    disabled: I,
                                    className: s()(N().checkbox, p),
                                    children: (0, t.jsx)("div", {
                                        className: s()(N().checkboxLabel, f),
                                        children: v.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                    })
                                }), (0, t.jsx)("div", {
                                    className: N().finePrint,
                                    children: v.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                                })]
                            }) : null, P && (0, t.jsxs)("div", {
                                className: N().finePrint,
                                children: ["*", v.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                                    documentationLink: _.Z.getArticleURL(E.BhN.LOCALIZED_PRICING)
                                })]
                            }), b && null != O && (0, t.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: v.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                    buttonText: (0, T.W_)(null, O),
                                    interval: this.formatInterval(null == O ? void 0 : O.interval),
                                    cancelSubscriptionArticle: _.Z.getArticleURL(E.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: _.Z.getArticleURL(E.BhN.PAID_TERMS)
                                })
                            }), A && null != O && (0, t.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: v.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
                                    buttonText: (0, T.W_)(null, O),
                                    interval: this.formatInterval(null == O ? void 0 : O.interval),
                                    cancelSubscriptionArticle: _.Z.getArticleURL(E.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: _.Z.getArticleURL(E.BhN.PAID_TERMS)
                                })
                            })]
                        })
                    };
                    return i
                }(i.Component);
            const g = o.ZP.connectStores([p.Z], (function(e) {
                var n = e.eulaId;
                return {
                    hasPreviouslyAcceptedTerms: p.Z.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != n && p.Z.hasAcceptedEULA(n)
                }
            }))(y)
        },
        786483: (e, n, r) => {
            "use strict";
            r.d(n, {
                s: () => i
            });
            var t = (0, r(260561).B)({
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

            function i(e) {
                var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    autoTrackExposure: !0
                }).autoTrackExposure;
                return t.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: n
                })
            }
        },
        902954: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => s
            });
            var t = r(202351),
                i = r(711531),
                a = r(536392);

            function s() {
                var e = (0, t.e7)([a.Z], (function() {
                    return a.Z.getPremiumTypeSubscription()
                }));
                return (0, t.e7)([i.Z], (function() {
                    var n;
                    return null != (null == e ? void 0 : e.paymentSourceId) ? null === (n = i.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                }))
            }
        },
        16703: (e, n, r) => {
            "use strict";
            r.d(n, {
                PO: () => d,
                q9: () => p,
                R$: () => _,
                i$: () => T,
                KU: () => E,
                Ji: () => f,
                HE: () => v
            });
            var t = r(785893),
                i = (r(667294),
                    r(294184)),
                a = r.n(i),
                s = r(73904),
                c = r(249052),
                l = r(473708),
                o = r(846710),
                u = r.n(o);

            function I(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function d(e) {
                var n = e.children,
                    r = e.className;
                return (0, t.jsx)("div", {
                    className: a()(u().table, r),
                    children: n
                })
            }

            function p(e) {
                var n = e.children;
                return (0, t.jsx)("div", {
                    className: u().header,
                    children: n
                })
            }

            function _(e) {
                var n = e.label,
                    r = e.value,
                    i = e.className;
                return (0, t.jsxs)("div", {
                    className: a()(u().row, i),
                    children: [(0, t.jsx)("div", {
                        className: u().rowLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: u().rowAmount,
                        children: r
                    })]
                })
            }

            function T(e) {
                var n = e.label,
                    r = e.value,
                    i = e.discounts,
                    a = e.originalAmount,
                    o = e.interval,
                    I = e.currency,
                    d = e.className,
                    p = e.intervalCount,
                    T = function(e) {
                        return null != i ? i.find((function(n) {
                            return n.type === e
                        })) : null
                    },
                    E = T(s.eW.SUBSCRIPTION_PLAN),
                    f = T(s.eW.ENTITLEMENT),
                    v = null != E ? Math.floor(E.amount / a * 100) : null,
                    m = (0, c.T4)(a, I);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(_, {
                        label: n,
                        value: (0,
                            t.jsxs)(t.Fragment, {
                            children: [r, null != v ? (0, t.jsxs)("div", {
                                className: u().rowPercentDiscount,
                                children: ["-", v, "%"]
                            }) : null]
                        }),
                        className: d
                    }), null != v ? (0, t.jsxs)("div", {
                        className: u().rowDiscountOriginalPrice,
                        children: ["(", null != o && null != p ? (0, c.og)(m, o, p) : m, ")"]
                    }) : null, null != f ? (0, t.jsx)("div", {
                        className: u().entitlementDiscountRow,
                        children: l.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function E(e) {
                var n, r = e.extended,
                    i = void 0 !== r && r,
                    s = e.negativeMarginTop,
                    c = void 0 !== s && s;
                return (0, t.jsx)("div", {
                    className: a()(u().divider, (n = {}, I(n, u().dividerExtended, i), I(n, u().negativeMarginTop, c), n))
                })
            }

            function f(e) {
                var n = e.label,
                    r = e.value,
                    i = e.className;
                return (0, t.jsxs)("div", {
                    className: a()(u().totalRow, i),
                    children: [(0, t.jsx)("div", {
                        className: u().totalLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: u().totalAmount,
                        children: r
                    })]
                })
            }

            function v(e) {
                var n = e.children,
                    r = e.className;
                return (0, t.jsx)("div", {
                    className: a()(u().finePrint, r),
                    children: n
                })
            }
        },
        367095: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => I
            });
            var t = r(785893),
                i = (r(667294), r(294184)),
                a = r.n(i),
                s = r(249052),
                c = r(203600),
                l = r(473708),
                o = r(312295),
                u = r.n(o);

            function I(e) {
                var n = e.price,
                    r = e.currency,
                    i = e.intervalType,
                    o = e.className,
                    I = e.intervalCount,
                    d = void 0 === I ? 1 : I,
                    p = e.isPrepaidPaymentSource,
                    _ = void 0 !== p && p,
                    T = (0, s.T4)(n, r),
                    E = null;
                i === c.rV.YEAR ? E = l.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: T
                }) : i === c.rV.MONTH && 1 === d ? E = l.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: T
                }) : i === c.rV.MONTH && d > 1 && (E = l.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: T,
                    intervalCount: d
                }));
                return (0, t.jsx)("div", {
                    className: a()(u().pricePerInterval, o),
                    "data-testid": "PricePerInterval-".concat(r),
                    children: null == i || _ ? (0, t.jsx)("strong", {
                        children: T
                    }) : E
                })
            }
        },
        524450: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => c
            });
            var t = r(785893),
                i = (r(667294), r(249052)),
                a = r(16703),
                s = r(473708);

            function c(e) {
                var n = e.invoice;
                return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(a.R$, {
                    label: s.Z.Messages.ESTIMATED_TAX_LABEL,
                    value: (0, i.T4)(n.tax, n.currency)
                })
            }
        },
        900547: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => u
            });
            var t = r(785893),
                i = r(667294),
                a = r(294184),
                s = r.n(a),
                c = r(820794),
                l = r.n(c);

            function o(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }
            const u = i.forwardRef((function(e, n) {
                var r = e.isActive,
                    i = e.children;
                return (0, t.jsx)("div", {
                    className: s()(l().wrapper, o({}, l().wrapperActive, r)),
                    ref: n,
                    children: i
                })
            }))
        },
        646875: (e, n, r) => {
            "use strict";
            r.d(n, {
                As: () => G,
                By: () => Z,
                Lu: () => w,
                hG: () => H,
                nd: () => F,
                e9: () => X,
                yT: () => J
            });
            var t = r(785893),
                i = r(667294),
                a = r(294184),
                s = r.n(a),
                c = r(441143),
                l = r.n(c),
                o = r(202351),
                u = r(304548),
                I = r(73904),
                d = r(153686),
                p = r(19585),
                _ = r(786483),
                T = r(551778),
                E = r(718831),
                f = r(986979),
                v = r(348592),
                m = r(694329),
                N = r(249052),
                P = r(100749),
                M = r(71103),
                h = r(717035),
                L = r(16703),
                b = r(524450),
                A = r(203600),
                O = r(2590),
                S = r(473708),
                R = r(801067),
                U = r.n(R);

            function y(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function g(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function C(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        g(e, n, r[n])
                    }))
                }
                return e
            }

            function x(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function j(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, i, a = [],
                            s = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                a.push(t.value);
                                if (n && a.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return a
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var B = function(e, n) {
                var r;
                return !!(null === (r = e.discounts) || void 0 === r ? void 0 : r.some((function(e) {
                    return e.type === n
                })))
            };

            function D(e) {
                var n, r = e.invoiceItem,
                    i = e.overrideAmount,
                    a = e.showGuildSubscriptionAdjustmentTooltip,
                    s = e.currency,
                    c = e.className,
                    d = e.isPrepaidPaymentSource,
                    p = e.referralTrialOfferId,
                    _ = (0, o.e7)([T.Z], (function() {
                        return T.Z.get(r.subscriptionPlanId)
                    })),
                    E = null === (n = (0, h.N)(p)) || void 0 === n ? void 0 : n.subscription_trial;
                l()(null != _, "Missing subscriptionPlan");
                var v = (0, m.if)({
                        intervalType: null == E ? void 0 : E.interval,
                        intervalCount: null == E ? void 0 : E.interval_count
                    }),
                    P = function(e, n, r, t) {
                        var i = B(e, I.eW.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case A.Xh.PREMIUM_MONTH_LEGACY:
                            case A.Xh.PREMIUM_YEAR_LEGACY:
                            case A.Xh.PREMIUM_MONTH_TIER_0:
                            case A.Xh.PREMIUM_YEAR_TIER_0:
                            case A.Xh.PREMIUM_MONTH_TIER_1:
                            case A.Xh.PREMIUM_YEAR_TIER_1:
                            case A.Xh.PREMIUM_MONTH_TIER_2:
                            case A.Xh.PREMIUM_YEAR_TIER_2:
                            case A.Xh.PREMIUM_3_MONTH_TIER_2:
                            case A.Xh.PREMIUM_6_MONTH_TIER_2:
                                return (0, m.Gf)(e.subscriptionPlanId, i, r, t);
                            case A.Xh.PREMIUM_3_MONTH_GUILD:
                            case A.Xh.PREMIUM_6_MONTH_GUILD:
                                return S.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case A.Xh.PREMIUM_MONTH_GUILD:
                                return S.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case A.Xh.PREMIUM_YEAR_GUILD:
                                return S.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case A.rV.MONTH:
                                return 1 === n.intervalCount ? S.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                }) : S.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case A.rV.YEAR:
                                return S.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw new Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(r, _, d, v);
                !0 === a && (P = (0, t.jsxs)("div", {
                    className: U().invoiceItemLabelWithIcon,
                    children: [(0, t.jsxs)("div", {
                        children: [P, " "]
                    }), (0, t.jsx)(u.Tooltip, {
                        text: S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: U().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(f.Z, x(C({}, e), {
                                className: U().invoiceItemLabelIcon
                            }))
                        }
                    })]
                }));
                var M = (0, N.T4)(null != i ? i : r.amount, s),
                    b = d ? M : (0, N.og)(M, _.interval, _.intervalCount);
                return (0, t.jsx)(L.i$, {
                    label: P,
                    value: b,
                    originalAmount: r.subscriptionPlanPrice * r.quantity,
                    discounts: r.discounts,
                    interval: _.interval,
                    intervalCount: _.intervalCount,
                    currency: s,
                    className: c
                })
            }

            function G(e) {
                var n = e.label,
                    r = e.tooltipText,
                    i = e.tooltipAriaLabel;
                return (0, t.jsxs)("div", {
                    className: U().invoiceItemLabelWithIcon,
                    children: [n, (0, t.jsx)(u.Tooltip, {
                        clickableOnMobile: !0,
                        text: r,
                        "aria-label": i,
                        tooltipClassName: U().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(f.Z, x(C({}, e), {
                                className: U().invoiceItemLabelIcon
                            }))
                        }
                    })]
                })
            }

            function Z(e) {
                var n = e.invoice,
                    r = e.isPrepaidPaymentSource,
                    i = (0, M.j)(n.invoiceItems),
                    a = i.find((function(e) {
                        return !(0, m.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    s = i.find((function(e) {
                        return (0, m.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    c = (0, o.e7)([T.Z], (function() {
                        return null != s ? T.Z.get(s.subscriptionPlanId) : null
                    })),
                    l = null != s ? s.amount : 0,
                    u = (0, N.T4)(l, n.currency),
                    I = null != c ? (0, N.og)(u, c.interval, c.intervalCount) : 0;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null != a ? (0, t.jsx)(D, {
                        invoiceItem: a,
                        currency: n.currency,
                        isPrepaidPaymentSource: r
                    }) : null, 0 !== l && null != s && null != c ? (0, t.jsx)(L.R$, {
                        label: S.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: s.quantity,
                            planName: (0, m.Gf)(c.id, !1, r)
                        }),
                        value: r ? u : I
                    }) : null, (0, t.jsx)(b.Z, {
                        invoice: n
                    }), (0, t.jsx)(L.KU, {}), (0, t.jsx)(L.Ji, {
                        label: (n.taxInclusive ? r ? S.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : S.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : S.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function w(e) {
                var n = e.invoice,
                    r = e.newPlan,
                    i = e.isPrepaidPaymentSource,
                    a = e.referralTrialOfferId,
                    s = (0, M.j)(n.invoiceItems),
                    c = s.find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                l()(null != c, "Expected newPlanInvoiceItem");
                var o = s.find((function(e) {
                        return !(0, m.Z8)(e.subscriptionPlanId) && e.amount < 0
                    })),
                    u = s.find((function(e) {
                        return null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((function(e) {
                            return e.type === I.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION
                        }))
                    })),
                    d = B(c, I.eW.PREMIUM_TRIAL),
                    p = c.quantity * c.subscriptionPlanPrice,
                    _ = c.amount + (null != o ? o.amount : 0) - p + (null != u ? u.amount : 0),
                    T = s.filter((function(e) {
                        return e.subscriptionPlanId === A.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === A.Xh.PREMIUM_YEAR_GUILD
                    })).reduce((function(e, n) {
                        return e + n.amount
                    }), 0);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(D, {
                        invoiceItem: c,
                        currency: n.currency,
                        overrideAmount: p,
                        isPrepaidPaymentSource: i,
                        referralTrialOfferId: a
                    }), 0 === _ || d ? null : (0, t.jsx)(L.R$, {
                        label: (0, t.jsx)(G, {
                            label: S.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, m.PV)(r.id) ? (0, m.aq)(r.id) : r.name
                            }),
                            tooltipText: S.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, N.T4)(_, n.currency)
                    }), 0 !== T ? (0, t.jsx)(L.R$, {
                        label: (0, t.jsx)(G, {
                            label: S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: S.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, N.T4)(T, n.currency)
                    }) : null, (0, t.jsx)(b.Z, {
                        invoice: n
                    }), (0, t.jsx)(L.KU, {}), (0, t.jsx)(L.Ji, {
                        label: (n.taxInclusive ? i ? S.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : S.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : S.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function k(e) {
                var n = e.slice();
                n.sort((function(e, n) {
                    var r = (0, m.uZ)(e.subscriptionPlanId),
                        t = (0,
                            m.uZ)(n.subscriptionPlanId);
                    return r && !t ? -1 : !r && t ? 1 : 0
                }));
                return n
            }

            function Y(e) {
                return e.filter((function(e) {
                    var n = e.subscriptionPlanId;
                    return n !== A.Xh.NONE_MONTH && n !== A.Xh.NONE_YEAR
                }))
            }

            function H(e) {
                var n = e.proratedInvoice,
                    r = e.renewalInvoice,
                    i = (0, m.dn)(n),
                    a = i.intervalType,
                    s = i.intervalCount,
                    c = (0, m.dn)(r),
                    l = c.intervalType,
                    o = c.intervalCount;
                return a !== l || s !== o || n.subscriptionPeriodEnd.getTime() === r.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)("div", {
                    className: U().subscriptionPeriodResetNotice,
                    children: S.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function V(e) {
                var n = e.isUpdate,
                    r = e.currentInvoice,
                    i = e.newInvoice,
                    a = null != r ? (0, M.j)(r.invoiceItems) : null,
                    c = null != r ? (0, m.dn)(r) : null,
                    l = (0, m.dn)(i),
                    o = l.intervalType,
                    u = l.intervalCount,
                    I = null != c && (c.intervalType !== o || c.intervalCount !== u);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(L.KU, {
                        extended: !0
                    }), null != r ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(L.q9, {
                            children: S.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), Y(k((0, M.j)(r.invoiceItems))).map((function(e) {
                            return (0, t.jsx)(D, {
                                invoiceItem: e,
                                currency: r.currency
                            }, e.id)
                        })), (0, t.jsx)(L.KU, {
                            extended: !0
                        })]
                    }) : null, (0, t.jsx)(L.q9, {
                        children: S.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), Y(k((0, M.j)(i.invoiceItems))).map((function(e) {
                        var r = null != a && !a.some((function(n) {
                            return n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity
                        }));
                        return (0, t.jsx)(D, {
                            invoiceItem: e,
                            currency: i.currency,
                            showGuildSubscriptionAdjustmentTooltip: I && (e.subscriptionPlanId === A.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === A.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === A.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === A.Xh.PREMIUM_6_MONTH_GUILD),
                            className: s()(g({}, U().subscriptionAddedInvoiceItem, !n || r))
                        }, e.id)
                    })), (0, t.jsx)(b.Z, {
                        invoice: i
                    }), (0, t.jsx)(L.KU, {}), (0, t.jsx)(L.R$, {
                        label: S.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, N.og)((0, N.T4)(i.total, i.currency), o, u),
                        className: U().subscriptionCostRow
                    })]
                })
            }

            function W(e) {
                var n, r = e.proratedInvoice,
                    i = e.renewalInvoice,
                    a = e.isTrial,
                    s = e.isUpdate,
                    c = e.overrideRenewalDate,
                    l = e.trialFooterMessageOverride,
                    o = null === (n = (0, h.N)()) || void 0 === n ? void 0 : n.subscription_trial,
                    u = (0, m.dn)(i),
                    I = u.intervalType,
                    d = u.intervalCount,
                    p = (0, _.s)("purchase_terms", {
                        autoTrackExposure: !1
                    });
                if (null == r && p.enabled && 1 === p.bucket) return null;
                if (a) {
                    var T = (0, m.if)({
                            intervalType: null == o ? void 0 : o.interval,
                            intervalCount: null == o ? void 0 : o.interval_count
                        }),
                        E = (null == o ? void 0 : o.interval) === A.rV.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
                    return (0, t.jsx)(t.Fragment, {
                        children: null != l ? l : S.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: T,
                            days: E,
                            contactLink: O.EYA.CONTACT,
                            helpdeskArticle: v.Z.getArticleURL(O.BhN.PREMIUM_TRIAL)
                        })
                    })
                }
                var f = i.taxInclusive ? S.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : S.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, t.jsx)(t.Fragment, {
                    children: f.format({
                        rate: (0, N.og)((0,
                            N.T4)(i.subtotal, i.currency), I, d),
                        renewalDate: null != c ? c : s ? null != r ? r.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
                        contactLink: O.EYA.CONTACT,
                        helpdeskArticle: v.Z.getArticleURL(O.BhN.BILLING)
                    })
                })
            }

            function F(e) {
                var n = e.premiumSubscription,
                    r = e.proratedInvoice,
                    a = e.renewalInvoice,
                    s = e.overrideRenewalDate,
                    c = e.isUpdate,
                    l = void 0 !== c && c,
                    o = e.isTrial,
                    I = void 0 !== o && o,
                    _ = e.priceOptions,
                    T = void 0 === _ ? void 0 : _,
                    f = e.isPrepaidPaymentSource,
                    v = void 0 !== f && f,
                    m = e.trialFooterMessageOverride,
                    N = e.hideSubscriptionDetails,
                    M = void 0 !== N && N,
                    h = (0, p.Z)().analyticsLocations,
                    b = C({
                        subscriptionId: null == n ? void 0 : n.id,
                        renewal: !0,
                        preventFetch: !l,
                        analyticsLocatinons: h,
                        analyticsLocation: d.Z.SUBSCRIPTION_INVOICE_FOOTER
                    }, T),
                    A = j((0, P.ED)(b), 1)[0],
                    O = j(i.useState(!1), 2),
                    R = O[0],
                    y = O[1];
                return (0, t.jsxs)(t.Fragment, {
                    children: [v ? null : (0, t.jsx)(L.HE, {
                        children: (0, t.jsx)(W, {
                            proratedInvoice: r,
                            renewalInvoice: a,
                            isTrial: I,
                            isUpdate: l,
                            overrideRenewalDate: s,
                            trialFooterMessageOverride: m
                        })
                    }), !M && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(u.Clickable, {
                            onClick: function() {
                                return y((function(e) {
                                    return !e
                                }))
                            },
                            className: U().subscriptionDetailsToggle,
                            children: [R ? S.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : S.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, t.jsx)(E.Z, {
                                direction: R ? E.Z.Directions.UP : E.Z.Directions.DOWN,
                                className: U().subscriptionDetailsToggleCaret
                            })]
                        }), R ? (0, t.jsx)(V, {
                            isUpdate: l,
                            currentInvoice: A,
                            newInvoice: a
                        }) : null]
                    })]
                })
            }

            function X(e) {
                var n = e.plan,
                    r = e.className,
                    i = e.paymentSourceId,
                    a = e.isPrepaidPaymentSource,
                    s = void 0 !== a && a,
                    c = (0, m.aS)(n.id, !1, !0, {
                        paymentSourceId: i
                    });
                return (0, t.jsx)(L.PO, {
                    className: r,
                    children: (0, t.jsx)(L.R$, {
                        label: S.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                            planName: (0, m.Gf)(n.id, !1, s)
                        }),
                        value: (0, N.T4)(c.amount, c.currency),
                        className: U().subscriptionCostRow
                    })
                })
            }

            function J(e) {
                var n = e.invoice,
                    r = e.plan,
                    i = (0, M.j)(n.invoiceItems).find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                l()(null != i, "newPlanInvoiceItem can not be null");
                if (r.interval === A.rV.MONTH) return (0,
                    t.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: S.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                if (r.interval === A.rV.YEAR) return (0, t.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: S.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                l()(!1, "Invalid interval type")
            }
        },
        820610: (e, n, r) => {
            "use strict";
            r.d(n, {
                K: () => N,
                Z: () => M
            });
            var t = r(785893),
                i = (r(667294), r(441143)),
                a = r.n(i),
                s = r(304548),
                c = r(782786),
                l = r(709189),
                o = r(694329),
                u = r(530562),
                I = r(520453),
                d = r(473708),
                p = r(641352),
                _ = r.n(p),
                T = r(497206),
                E = r.n(T);

            function f(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function v(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        f(e, n, r[n])
                    }))
                }
                return e
            }

            function m(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var t = Object.getOwnPropertySymbols(e);
                        n && (t = t.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        r.push.apply(r, t)
                    }
                    return r
                }(Object(n)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
                }));
                return e
            }

            function N(e) {
                var n = e.purchaseType,
                    r = e.plan,
                    t = e.premiumSubscription,
                    i = e.isGift,
                    s = e.planGroup,
                    c = e.isPrepaidPaymentSource;
                if (n === I.GZ.ONE_TIME) return d.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                a()(null != r, "Subscription plan must be selected to render SubscriptionReviewButton");
                return i ? d.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : (0, o.PV)(r.id) ? c ? d.Z.Messages.BILLING_SELECT_PLAN : null != t ? (0,
                    u.R4)(t, r.id, s) ? d.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : d.Z.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, o.W_)(null, r) : d.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function P(e, n) {
                if (null != e.current) {
                    e.current.scrollIntoView({
                        behavior: "smooth"
                    });
                    n()
                }
            }

            function M(e) {
                var n = e.legalTermsNodeRef,
                    r = e.invoiceError,
                    i = e.planError,
                    a = e.disablePurchase,
                    o = e.flashLegalTerms,
                    u = e.isSubmitting,
                    I = e.premiumSubscription,
                    p = e.isGift,
                    T = e.planGroup,
                    f = e.isPrepaid,
                    M = e.isTrial,
                    h = e.makePurchase,
                    L = e.needsPaymentSource,
                    b = (0, c.usePaymentContext)(),
                    A = b.selectedPlan,
                    O = b.hasAcceptedTerms,
                    S = N({
                        purchaseType: b.purchaseType,
                        plan: A,
                        premiumSubscription: I,
                        isGift: p,
                        planGroup: T,
                        isPrepaidPaymentSource: f
                    });
                return null != r || null != i || a ? (0, t.jsx)(s.Button, {
                    color: s.Button.Colors.GREEN,
                    disabled: !0,
                    children: S
                }) : L ? (0, t.jsx)(s.Tooltip, {
                    text: d.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: function(e) {
                        return (0, t.jsx)(s.Button, m(v({}, e), {
                            color: s.Button.Colors.GREEN,
                            type: "submit",
                            "data-testid": "submitButton",
                            disabled: !0,
                            children: S
                        }))
                    }
                }) : M ? (0,
                    t.jsxs)(l.C, {
                    innerClassName: _().innerButton,
                    "data-testid": O ? "purchase" : "submitButton",
                    onClick: O ? h : function() {
                        return P(n, o)
                    },
                    color: s.Button.Colors.GREEN,
                    submitting: u,
                    children: [(0, t.jsx)("img", {
                        alt: "",
                        className: _().nitroIcon,
                        src: E()
                    }), S]
                }) : O ? (0, t.jsx)(s.Button, {
                    "data-testid": "purchase",
                    onClick: h,
                    color: s.Button.Colors.GREEN,
                    submitting: u,
                    children: S
                }) : (0, t.jsx)(s.Tooltip, {
                    text: d.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: function(e) {
                        return (0, t.jsx)(s.Button, m(v({}, e), {
                            color: s.Button.Colors.GREEN,
                            type: "submit",
                            onClick: function() {
                                return P(n, o)
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