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
                s = r(820610),
                a = r(264628),
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
                    v = e.paymentSourceType,
                    f = e.hide,
                    m = e.purchaseType,
                    N = e.productLine,
                    P = e.basePrice,
                    M = e.currentSubscription;
                if (f) return null;
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
                var R = (0, s.K)({
                        purchaseType: m || I.GZQ.SUBSCRIPTION,
                        plan: n,
                        premiumSubscription: null == M ? null : M,
                        isGift: !!r,
                        planGroup: A,
                        isPrepaidPaymentSource: !1
                    }),
                    S = "",
                    U = "";
                if (_)
                    if (null != b && null != (null == E ? void 0 : E.subscriptionPeriodEnd)) S = p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                        rate: b,
                        renewalDate: E.subscriptionPeriodEnd
                    });
                    else switch (h) {
                        case d.rV.MONTH:
                            S = 1 === L ? p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                intervalCount: L
                            });
                            break;
                        case d.rV.YEAR:
                            S = p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                            break;
                        case void 0:
                            U = p.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: R,
                                paidURL: I.EYA.PAID_TERMS
                            });
                            S = p.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                            break;
                        default:
                            throw new Error("Unexpected interval: ".concat(h))
                    } else if (m === I.GZQ.ONE_TIME) {
                        U = p.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: R,
                            paidURL: I.EYA.PAID_TERMS
                        });
                        if (N === I.POd.COLLECTIBLES) S = p.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT;
                        else S = p.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT
                    } else {
                        var y = (0, i.s)("legal_fine_print", {
                            autoTrackExposure: !1
                        });
                        if (null != n && !r && y.enabled && 1 === y.bucket) {
                            var g, C = (0, s.K)({
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
                                (0, a.q2)(x, {
                                    tags: {
                                        planId: n.id
                                    }
                                })
                            }
                            S = null != M && (0, u.GY)(M, n.id, A) ? p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PLAN_CHANGE_V2.format({
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
                                primaryText: R,
                                paidURL: I.EYA.PAID_TERMS
                            }));
                            switch (h) {
                                case d.rV.MONTH:
                                    S = r ? p.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY;
                                    S = r ? p.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === L ? p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                                        intervalCount: L
                                    });
                                    break;
                                case d.rV.YEAR:
                                    S = r ? p.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                                    break;
                                case void 0:
                                    S = "";
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
                    }), "" !== S && (0, t.jsx)("div", {
                        children: S
                    }), v === I.HeQ.PAYSAFE_CARD && (0, t.jsx)("div", {
                        className: T().paymentSourceNoticeCopy,
                        children: p.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                    }), v === I.HeQ.SOFORT && (0,
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
                s = r(691238),
                a = r.n(s);
            const c = function(e) {
                var n = e.message;
                return (0, t.jsxs)("div", {
                    className: a().warnBlock,
                    children: [(0, t.jsx)("div", {
                        className: a().warnIcon
                    }), (0, t.jsx)(i.Text, {
                        className: a().warnText,
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
                s = r(294184),
                a = r.n(s),
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
                v = r(203600),
                f = r(473708),
                m = r(725746),
                N = r.n(m);

            function P(e, n, r, t, i, s, a) {
                try {
                    var c = e[s](a),
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
                        var s = e.apply(n, r);

                        function a(e) {
                            P(s, t, i, a, c, "next", e)
                        }

                        function c(e) {
                            P(s, t, i, a, c, "throw", e)
                        }
                        a(void 0)
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
                return !n || "object" !== R(n) && "function" != typeof n ? function(e) {
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
            var R = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                    var r, t, i, s, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return s = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                        return this
                    }), s;

                    function c(s) {
                        return function(c) {
                            return function(s) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (r = 1, t && (i = 2 & s[0] ? t.return : s[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, s[1])).done) return i;
                                    (t = 0, i) && (s = [2 & s[0], i.value]);
                                    switch (s[0]) {
                                        case 0:
                                        case 1:
                                            i = s;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: s[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            t = s[1];
                                            s = [0];
                                            continue;
                                        case 7:
                                            s = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                                a.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && a.label < i[1]) {
                                                a.label = i[1];
                                                i = s;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2];
                                                a.ops.push(s);
                                                break
                                            }
                                            i[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    s = n.call(e, a)
                                } catch (e) {
                                    s = [6, e];
                                    t = 0
                                } finally {
                                    r = i = 0
                                }
                                if (5 & s[0]) throw s[1];
                                return {
                                    value: s[0] ? s[1] : void 0,
                                    done: !0
                                }
                            }([s, c])
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
                    var n = S(i);

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
                    var s = i.prototype;
                    s.componentDidMount = function() {
                        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                    };
                    s.componentDidUpdate = function(e, n) {
                        var r = this.hasAcceptedNeccessaryTerms(e, n),
                            t = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                        t !== r && this.props.onChange(t)
                    };
                    s.canSkipTOSCheckbox = function() {
                        var e = this.props,
                            n = e.purchaseType,
                            r = e.isGift,
                            t = e.isTrial,
                            i = e.isDiscount;
                        return !!(r || t || i) || n === E.GZQ.ONE_TIME
                    };
                    s.hasAcceptedNeccessaryTerms = function(e, n) {
                        return (n.hasAcceptedTerms || this.canSkipTOSCheckbox() || this.isInCheckoutTOSExperiment()) && (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver)
                    };
                    s.isInCheckoutTOSExperiment = function() {
                        var e = this.props,
                            n = e.isTrial,
                            r = e.subscriptionPlan,
                            t = e.isGift;
                        return !n && null != r && !t && (0, I.s)("purchase_terms", {
                            autoTrackExposure: !0
                        }).enabled
                    };
                    s.renderLegalTerms = function() {
                        var e = this.props,
                            n = e.hasPreviouslyAcceptedTerms,
                            r = e.forceShow,
                            i = e.isTrial,
                            s = e.checkboxLabel,
                            c = e.checkboxClassname,
                            l = e.checkboxLabelClassname,
                            o = e.disabled,
                            p = e.subscriptionPlan,
                            _ = e.isGift,
                            T = e.currentSubscription,
                            v = e.planGroup;
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
                                        planGroup: null == v ? [] : v,
                                        isPrepaidPaymentSource: !1
                                    }),
                                    M = f.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                        primaryText: P,
                                        paidURL: E.EYA.PAID_TERMS
                                    });
                                return (0, t.jsx)("div", {
                                    className: a()(N().checkboxLabel, l),
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
                                className: a()(N().checkbox, c),
                                children: (0, t.jsx)("div", {
                                    className: a()(N().checkboxLabel, l),
                                    children: null != s ? s : f.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                        termsURL: E.EYA.TERMS,
                                        paidURL: E.EYA.PAID_TERMS
                                    })
                                })
                            })
                        }
                        return null
                    };
                    s.formatInterval = function(e) {
                        if (e === v.rV.YEAR) return f.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                        if (e === v.rV.MONTH) return f.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                        throw new Error("Invalid interval type: ".concat(e))
                    };
                    s.render = function() {
                        var e = this.props,
                            n = e.eulaId,
                            i = e.applicationName,
                            s = e.hasPreviouslyAcceptedTerms,
                            c = e.hasPreviouslyAcceptedEULA,
                            o = e.forceShow,
                            I = e.disabled,
                            d = e.className,
                            p = e.checkboxClassname,
                            v = e.checkboxLabelClassname,
                            m = e.finePrint,
                            P = e.showPricingLink,
                            h = e.showWithdrawalWaiver,
                            b = e.isTrial,
                            A = e.isDiscount,
                            O = e.subscriptionPlan,
                            R = e.finePrintClassname,
                            S = this.state,
                            y = S.hasAcceptedEULA,
                            g = S.hasAcceptedWithdrawalWaiver;
                        l()(!b || null != O, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true");
                        if (!o && s && (null == n || c) && !h) return null;
                        var C = h ? f.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER : f.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO;
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
                                    children: f.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                        applicationName: i,
                                        onClick: function(e) {
                                            (0, u.openModalLazy)(M((function() {
                                                var e, i;
                                                return U(this, (function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            return [4, Promise.all([r.e(40532), r.e(25978), r.e(53686), r.e(47057)]).then(r.bind(r, 54415))];
                                                        case 1:
                                                            e = s.sent(), i = e.default;
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
                                className: a()(N().finePrint, R),
                                children: m
                            }), h ? (0, t.jsxs)("div", {
                                className: d,
                                children: [(0, t.jsx)(u.Checkbox, {
                                    type: u.Checkbox.Types.INVERTED,
                                    value: g,
                                    onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                    disabled: I,
                                    className: a()(N().checkbox, p),
                                    children: (0, t.jsx)("div", {
                                        className: a()(N().checkboxLabel, v),
                                        children: f.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                    })
                                }), (0, t.jsx)("div", {
                                    className: N().finePrint,
                                    children: f.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                                })]
                            }) : null, P && (0, t.jsxs)("div", {
                                className: N().finePrint,
                                children: ["*", f.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                                    documentationLink: _.Z.getArticleURL(E.BhN.LOCALIZED_PRICING)
                                })]
                            }), b && null != O && (0, t.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: f.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                    buttonText: (0, T.W_)(null, O),
                                    interval: this.formatInterval(null == O ? void 0 : O.interval),
                                    cancelSubscriptionArticle: _.Z.getArticleURL(E.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: _.Z.getArticleURL(E.BhN.PAID_TERMS)
                                })
                            }), A && null != O && (0, t.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: f.Z.Messages.BILLING_DISCOUNT_LEGAL_COPY.format({
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
                Z: () => a
            });
            var t = r(202351),
                i = r(711531),
                s = r(536392);

            function a() {
                var e = (0, t.e7)([s.Z], (function() {
                    return s.Z.getPremiumTypeSubscription()
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
                Ji: () => v,
                HE: () => f
            });
            var t = r(785893),
                i = (r(667294),
                    r(294184)),
                s = r.n(i),
                a = r(73904),
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
                    className: s()(u().table, r),
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
                    className: s()(u().row, i),
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
                    s = e.originalAmount,
                    o = e.interval,
                    I = e.currency,
                    d = e.className,
                    p = e.intervalCount,
                    T = function(e) {
                        return null != i ? i.find((function(n) {
                            return n.type === e
                        })) : null
                    },
                    E = T(a.eW.SUBSCRIPTION_PLAN),
                    v = T(a.eW.ENTITLEMENT),
                    f = null != E ? Math.floor(E.amount / s * 100) : null,
                    m = (0, c.T4)(s, I);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(_, {
                        label: n,
                        value: (0,
                            t.jsxs)(t.Fragment, {
                            children: [r, null != f ? (0, t.jsxs)("div", {
                                className: u().rowPercentDiscount,
                                children: ["-", f, "%"]
                            }) : null]
                        }),
                        className: d
                    }), null != f ? (0, t.jsxs)("div", {
                        className: u().rowDiscountOriginalPrice,
                        children: ["(", null != o && null != p ? (0, c.og)(m, o, p) : m, ")"]
                    }) : null, null != v ? (0, t.jsx)("div", {
                        className: u().entitlementDiscountRow,
                        children: l.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function E(e) {
                var n, r = e.extended,
                    i = void 0 !== r && r,
                    a = e.negativeMarginTop,
                    c = void 0 !== a && a;
                return (0, t.jsx)("div", {
                    className: s()(u().divider, (n = {}, I(n, u().dividerExtended, i), I(n, u().negativeMarginTop, c), n))
                })
            }

            function v(e) {
                var n = e.label,
                    r = e.value,
                    i = e.className;
                return (0, t.jsxs)("div", {
                    className: s()(u().totalRow, i),
                    children: [(0, t.jsx)("div", {
                        className: u().totalLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: u().totalAmount,
                        children: r
                    })]
                })
            }

            function f(e) {
                var n = e.children,
                    r = e.className;
                return (0, t.jsx)("div", {
                    className: s()(u().finePrint, r),
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
                s = r.n(i),
                a = r(249052),
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
                    T = (0, a.T4)(n, r),
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
                    className: s()(u().pricePerInterval, o),
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
                s = r(16703),
                a = r(473708);

            function c(e) {
                var n = e.invoice;
                return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(s.R$, {
                    label: a.Z.Messages.ESTIMATED_TAX_LABEL,
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
                s = r(294184),
                a = r.n(s),
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
                    className: a()(l().wrapper, o({}, l().wrapperActive, r)),
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
                s = r(294184),
                a = r.n(s),
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
                v = r(986979),
                f = r(348592),
                m = r(694329),
                N = r(249052),
                P = r(100749),
                M = r(71103),
                h = r(717035),
                L = r(16703),
                b = r(524450),
                A = r(203600),
                O = r(2590),
                R = r(473708),
                S = r(801067),
                U = r.n(S);

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
                        var t, i, s = [],
                            a = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(a = (t = r.next()).done); a = !0) {
                                s.push(t.value);
                                if (n && s.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return s
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
                    s = e.showGuildSubscriptionAdjustmentTooltip,
                    a = e.currency,
                    c = e.className,
                    d = e.isPrepaidPaymentSource,
                    p = e.referralTrialOfferId,
                    _ = (0, o.e7)([T.Z], (function() {
                        return T.Z.get(r.subscriptionPlanId)
                    })),
                    E = null === (n = (0, h.N)(p)) || void 0 === n ? void 0 : n.subscription_trial;
                l()(null != _, "Missing subscriptionPlan");
                var f = (0, m.if)({
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
                                return R.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case A.Xh.PREMIUM_MONTH_GUILD:
                                return R.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case A.Xh.PREMIUM_YEAR_GUILD:
                                return R.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case A.rV.MONTH:
                                return 1 === n.intervalCount ? R.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                }) : R.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case A.rV.YEAR:
                                return R.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw new Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(r, _, d, f);
                !0 === s && (P = (0, t.jsxs)("div", {
                    className: U().invoiceItemLabelWithIcon,
                    children: [(0, t.jsxs)("div", {
                        children: [P, " "]
                    }), (0, t.jsx)(u.Tooltip, {
                        text: R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: U().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(v.Z, x(C({}, e), {
                                className: U().invoiceItemLabelIcon
                            }))
                        }
                    })]
                }));
                var M = (0, N.T4)(null != i ? i : r.amount, a),
                    b = d ? M : (0, N.og)(M, _.interval, _.intervalCount);
                return (0, t.jsx)(L.i$, {
                    label: P,
                    value: b,
                    originalAmount: r.subscriptionPlanPrice * r.quantity,
                    discounts: r.discounts,
                    interval: _.interval,
                    intervalCount: _.intervalCount,
                    currency: a,
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
                            return (0, t.jsx)(v.Z, x(C({}, e), {
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
                    s = i.find((function(e) {
                        return !(0, m.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    a = i.find((function(e) {
                        return (0, m.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    c = (0, o.e7)([T.Z], (function() {
                        return null != a ? T.Z.get(a.subscriptionPlanId) : null
                    })),
                    l = null != a ? a.amount : 0,
                    u = (0, N.T4)(l, n.currency),
                    I = null != c ? (0, N.og)(u, c.interval, c.intervalCount) : 0;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null != s ? (0, t.jsx)(D, {
                        invoiceItem: s,
                        currency: n.currency,
                        isPrepaidPaymentSource: r
                    }) : null, 0 !== l && null != a && null != c ? (0, t.jsx)(L.R$, {
                        label: R.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: a.quantity,
                            planName: (0, m.Gf)(c.id, !1, r)
                        }),
                        value: r ? u : I
                    }) : null, (0, t.jsx)(b.Z, {
                        invoice: n
                    }), (0, t.jsx)(L.KU, {}), (0, t.jsx)(L.Ji, {
                        label: (n.taxInclusive ? r ? R.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : R.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : R.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function w(e) {
                var n = e.invoice,
                    r = e.newPlan,
                    i = e.isPrepaidPaymentSource,
                    s = e.referralTrialOfferId,
                    a = (0, M.j)(n.invoiceItems),
                    c = a.find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                l()(null != c, "Expected newPlanInvoiceItem");
                var o, u, d, p, _, T = a.find((function(e) {
                        return !(0, m.Z8)(e.subscriptionPlanId) && e.amount < 0
                    })),
                    E = a.find((function(e) {
                        return null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((function(e) {
                            return e.type === I.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION
                        }))
                    })),
                    v = B(c, I.eW.PREMIUM_TRIAL),
                    f = (o = c, u = I.eW.SUBSCRIPTION_PLAN, o.subscriptionPlanPrice - (null !== (_ = null === (p = null === (d = o.discounts) || void 0 === d ? void 0 : d.find((function(e) {
                        return e.type === u
                    }))) || void 0 === p ? void 0 : p.amount) && void 0 !== _ ? _ : 0)),
                    P = c.quantity * f,
                    h = c.amount + (null != T ? T.amount : 0) - P + (null != E ? E.amount : 0),
                    S = a.filter((function(e) {
                        return e.subscriptionPlanId === A.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === A.Xh.PREMIUM_YEAR_GUILD
                    })),
                    U = S.reduce((function(e, n) {
                        return e + n.amount
                    }), 0);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(D, {
                        invoiceItem: c,
                        currency: n.currency,
                        overrideAmount: P,
                        isPrepaidPaymentSource: i,
                        referralTrialOfferId: s
                    }), 0 === h || v ? null : (0, t.jsx)(L.R$, {
                        label: (0, t.jsx)(G, {
                            label: R.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, m.PV)(r.id) ? (0, m.aq)(r.id) : r.name
                            }),
                            tooltipText: R.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, N.T4)(h, n.currency)
                    }), 0 !== U ? (0, t.jsx)(L.R$, {
                        label: (0, t.jsx)(G, {
                            label: R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, N.T4)(U, n.currency)
                    }) : null, (0, t.jsx)(b.Z, {
                        invoice: n
                    }), (0, t.jsx)(L.KU, {}), (0, t.jsx)(L.Ji, {
                        label: (n.taxInclusive ? i ? R.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : R.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : R.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === O.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0,
                            N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function k(e) {
                var n = e.slice();
                n.sort((function(e, n) {
                    var r = (0, m.uZ)(e.subscriptionPlanId),
                        t = (0, m.uZ)(n.subscriptionPlanId);
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
                    s = i.intervalType,
                    a = i.intervalCount,
                    c = (0, m.dn)(r),
                    l = c.intervalType,
                    o = c.intervalCount;
                return s !== l || a !== o || n.subscriptionPeriodEnd.getTime() === r.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)("div", {
                    className: U().subscriptionPeriodResetNotice,
                    children: R.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function V(e) {
                var n = e.isUpdate,
                    r = e.currentInvoice,
                    i = e.newInvoice,
                    s = null != r ? (0, M.j)(r.invoiceItems) : null,
                    c = null != r ? (0, m.dn)(r) : null,
                    l = (0, m.dn)(i),
                    o = l.intervalType,
                    u = l.intervalCount,
                    I = null != c && (c.intervalType !== o || c.intervalCount !== u);
                return (0,
                    t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(L.KU, {
                        extended: !0
                    }), null != r ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(L.q9, {
                            children: R.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), Y(k((0, M.j)(r.invoiceItems))).map((function(e) {
                            return (0, t.jsx)(D, {
                                invoiceItem: e,
                                currency: r.currency
                            }, e.id)
                        })), (0, t.jsx)(L.KU, {
                            extended: !0
                        })]
                    }) : null, (0, t.jsx)(L.q9, {
                        children: R.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), Y(k((0, M.j)(i.invoiceItems))).map((function(e) {
                        var r = null != s && !s.some((function(n) {
                            return n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity
                        }));
                        return (0, t.jsx)(D, {
                            invoiceItem: e,
                            currency: i.currency,
                            showGuildSubscriptionAdjustmentTooltip: I && (e.subscriptionPlanId === A.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === A.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === A.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === A.Xh.PREMIUM_6_MONTH_GUILD),
                            className: a()(g({}, U().subscriptionAddedInvoiceItem, !n || r))
                        }, e.id)
                    })), (0, t.jsx)(b.Z, {
                        invoice: i
                    }), (0, t.jsx)(L.KU, {}), (0, t.jsx)(L.R$, {
                        label: R.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, N.og)((0, N.T4)(i.total, i.currency), o, u),
                        className: U().subscriptionCostRow
                    })]
                })
            }

            function W(e) {
                var n, r = e.proratedInvoice,
                    i = e.renewalInvoice,
                    s = e.isTrial,
                    a = e.isUpdate,
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
                if (s) {
                    var T = (0, m.if)({
                            intervalType: null == o ? void 0 : o.interval,
                            intervalCount: null == o ? void 0 : o.interval_count
                        }),
                        E = (null == o ? void 0 : o.interval) === A.rV.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
                    return (0, t.jsx)(t.Fragment, {
                        children: null != l ? l : R.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: T,
                            days: E,
                            contactLink: O.EYA.CONTACT,
                            helpdeskArticle: f.Z.getArticleURL(O.BhN.PREMIUM_TRIAL)
                        })
                    })
                }
                var v = i.taxInclusive ? R.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : R.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, t.jsx)(t.Fragment, {
                    children: v.format({
                        rate: (0, N.og)((0, N.T4)(i.subtotal, i.currency), I, d),
                        renewalDate: null != c ? c : a ? null != r ? r.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
                        contactLink: O.EYA.CONTACT,
                        helpdeskArticle: f.Z.getArticleURL(O.BhN.BILLING)
                    })
                })
            }

            function F(e) {
                var n = e.premiumSubscription,
                    r = e.proratedInvoice,
                    s = e.renewalInvoice,
                    a = e.overrideRenewalDate,
                    c = e.isUpdate,
                    l = void 0 !== c && c,
                    o = e.isTrial,
                    I = void 0 !== o && o,
                    _ = e.priceOptions,
                    T = void 0 === _ ? void 0 : _,
                    v = e.isPrepaidPaymentSource,
                    f = void 0 !== v && v,
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
                    S = O[0],
                    y = O[1];
                return (0, t.jsxs)(t.Fragment, {
                    children: [f ? null : (0, t.jsx)(L.HE, {
                        children: (0, t.jsx)(W, {
                            proratedInvoice: r,
                            renewalInvoice: s,
                            isTrial: I,
                            isUpdate: l,
                            overrideRenewalDate: a,
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
                            children: [S ? R.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : R.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, t.jsx)(E.Z, {
                                direction: S ? E.Z.Directions.UP : E.Z.Directions.DOWN,
                                className: U().subscriptionDetailsToggleCaret
                            })]
                        }), S ? (0, t.jsx)(V, {
                            isUpdate: l,
                            currentInvoice: A,
                            newInvoice: s
                        }) : null]
                    })]
                })
            }

            function X(e) {
                var n, r = e.plan,
                    i = e.className,
                    s = e.paymentSourceId,
                    a = e.isPrepaidPaymentSource,
                    c = void 0 !== a && a,
                    l = e.isCustomGift,
                    o = void 0 !== l && l,
                    I = (0, m.aS)(r.id, !1, !0, {
                        paymentSourceId: s
                    }),
                    d = (0, N.T4)(I.amount, I.currency);
                if (o) switch (r.interval) {
                    case A.rV.MONTH:
                        n = R.Z.Messages.GIFT_DURATION.format({
                            timeInterval: R.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                        });
                        break;
                    case A.rV.YEAR:
                        n = R.Z.Messages.GIFT_DURATION.format({
                            timeInterval: R.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                        })
                } else n = R.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                    planName: (0, m.Gf)(r.id, !1, c)
                });
                return o ? (0, t.jsxs)("div", {
                    className: i,
                    children: [(0, t.jsx)(u.FormTitle, {
                        children: R.Z.Messages.PREMIUM_GIFTING_BUTTON
                    }), (0, t.jsx)(u.Heading, {
                        variant: "text-md/normal",
                        children: "".concat(n, " - ").concat(d)
                    })]
                }) : (0, t.jsx)(L.PO, {
                    className: i,
                    children: (0, t.jsx)(L.R$, {
                        label: n,
                        value: d,
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
                if (r.interval === A.rV.MONTH) return (0, t.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: R.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                if (r.interval === A.rV.YEAR) return (0, t.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: R.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
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
                s = r.n(i),
                a = r(304548),
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

            function v(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        v(e, n, r[n])
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
                    a = e.planGroup,
                    c = e.isPrepaidPaymentSource;
                if (n === I.GZ.ONE_TIME) return d.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                s()(null != r, "Subscription plan must be selected to render SubscriptionReviewButton");
                return i ? d.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : (0, o.PV)(r.id) ? c ? d.Z.Messages.BILLING_SELECT_PLAN : null != t ? (0, u.R4)(t, r.id, a) ? d.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : d.Z.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, o.W_)(null, r) : d.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN
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
                    s = e.disablePurchase,
                    o = e.flashLegalTerms,
                    u = e.isSubmitting,
                    I = e.premiumSubscription,
                    p = e.isGift,
                    T = e.planGroup,
                    v = e.isPrepaid,
                    M = e.isTrial,
                    h = e.makePurchase,
                    L = e.needsPaymentSource,
                    b = (0, c.usePaymentContext)(),
                    A = b.selectedPlan,
                    O = b.hasAcceptedTerms,
                    R = N({
                        purchaseType: b.purchaseType,
                        plan: A,
                        premiumSubscription: I,
                        isGift: p,
                        planGroup: T,
                        isPrepaidPaymentSource: v
                    });
                return null != r || null != i || s ? (0, t.jsx)(a.Button, {
                    color: a.Button.Colors.GREEN,
                    disabled: !0,
                    children: R
                }) : L ? (0, t.jsx)(a.Tooltip, {
                    text: d.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: function(e) {
                        return (0, t.jsx)(a.Button, m(f({}, e), {
                            color: a.Button.Colors.GREEN,
                            type: "submit",
                            "data-testid": "submitButton",
                            disabled: !0,
                            children: R
                        }))
                    }
                }) : M ? (0, t.jsxs)(l.C, {
                    innerClassName: _().innerButton,
                    "data-testid": O ? "purchase" : "submitButton",
                    onClick: O ? h : function() {
                        return P(n, o)
                    },
                    color: a.Button.Colors.GREEN,
                    submitting: u,
                    children: [(0, t.jsx)("img", {
                        alt: "",
                        className: _().nitroIcon,
                        src: E()
                    }), R]
                }) : O ? (0,
                    t.jsx)(a.Button, {
                    "data-testid": "purchase",
                    onClick: h,
                    color: a.Button.Colors.GREEN,
                    submitting: u,
                    children: R
                }) : (0, t.jsx)(a.Tooltip, {
                    text: d.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: function(e) {
                        return (0, t.jsx)(a.Button, m(f({}, e), {
                            color: a.Button.Colors.GREEN,
                            type: "submit",
                            onClick: function() {
                                return P(n, o)
                            },
                            "data-testid": "submitButton",
                            children: R
                        }))
                    }
                })
            }
        }
    }
]);