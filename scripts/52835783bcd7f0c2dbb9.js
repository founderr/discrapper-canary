(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46285], {
        497206: (e, n, t) => {
            e.exports = t.p + "5fe15d1753b3a2c9050dc9750d255163.svg"
        },
        152042: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => d
            });
            var r = t(785893),
                i = (t(667294), t(820610)),
                s = t(694329),
                a = t(249052),
                c = t(2590),
                o = t(203600),
                l = t(473708),
                u = t(501235),
                I = t.n(u);
            const d = function(e) {
                var n, t, u, d = e.subscriptionPlan,
                    _ = e.isGift,
                    p = e.isEmbeddedIAP,
                    T = e.renewalInvoice,
                    E = e.paymentSourceType,
                    v = e.hide,
                    f = e.purchaseType,
                    N = e.productLine;
                if (v) return null;
                if (null != T) {
                    var P = s.ZP.getIntervalForInvoice(T);
                    n = P.intervalType;
                    t = P.intervalCount;
                    u = (0, a.og)((0, a.T4)(T.total, T.currency), n, t)
                } else if (null != d) {
                    n = d.interval;
                    t = d.intervalCount
                }
                var m = (0, i.K)({
                        purchaseType: f || c.GZQ.SUBSCRIPTION,
                        plan: d,
                        premiumSubscription: null,
                        isGift: !!_,
                        planGroup: [],
                        isPrepaidPaymentSource: !1
                    }),
                    M = "",
                    h = "";
                if (p)
                    if (null != u && null != (null == T ? void 0 : T.subscriptionPeriodEnd)) M = l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                        rate: u,
                        renewalDate: T.subscriptionPeriodEnd
                    });
                    else switch (n) {
                        case o.rV.MONTH:
                            M = 1 === t ? l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                intervalCount: t
                            });
                            break;
                        case o.rV.YEAR:
                            M = l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                            break;
                        case void 0:
                            h = l.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: m,
                                paidURL: c.EYA.PAID_TERMS
                            });
                            M = l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                            break;
                        default:
                            throw new Error("Unexpected interval: ".concat(n))
                    } else if (f === c.GZQ.ONE_TIME) {
                        h = l.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: m,
                            paidURL: c.EYA.PAID_TERMS
                        });
                        if (N === c.POd.COLLECTIBLES) M = l.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT;
                        else M = l.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT
                    } else {
                        _ && (h = l.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                            primaryText: m,
                            paidURL: c.EYA.PAID_TERMS
                        }));
                        switch (n) {
                            case o.rV.MONTH:
                                M = _ ? l.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY;
                                M = _ ? l.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === t ? l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                                    intervalCount: t
                                });
                                break;
                            case o.rV.YEAR:
                                M = _ ? l.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                                break;
                            case void 0:
                                M = "";
                                break;
                            default:
                                throw new Error("Unexpected interval: ".concat(n))
                        }
                    } return (0, r.jsxs)(r.Fragment, {
                    children: ["" !== h && (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            children: h
                        }), (0, r.jsx)("div", {
                            className: I().divider
                        })]
                    }), "" !== M && (0, r.jsx)("div", {
                        children: M
                    }), E === c.HeQ.PAYSAFE_CARD && (0, r.jsx)("div", {
                        className: I().paymentSourceNoticeCopy,
                        children: l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                    }), E === c.HeQ.SOFORT && (0, r.jsxs)("div", {
                        className: I().paymentSourceNoticeCopy,
                        children: [l.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "]
                    })]
                })
            }
        },
        929400: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(882723)),
                s = t(691238),
                a = t.n(s);
            const c = function(e) {
                var n = e.message;
                return (0, r.jsxs)("div", {
                    className: a().warnBlock,
                    children: [(0, r.jsx)("div", {
                        className: a().warnIcon
                    }), (0, r.jsx)(i.Text, {
                        className: a().warnText,
                        variant: "text-sm/normal",
                        children: n
                    })]
                })
            }
        },
        536713: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => U
            });
            var r = t(785893),
                i = t(667294),
                s = t(294184),
                a = t.n(s),
                c = t(441143),
                o = t.n(c),
                l = t(202351),
                u = t(882723),
                I = t(64318),
                d = t(348592),
                _ = t(694329),
                p = t(2590),
                T = t(203600),
                E = t(473708),
                v = t(725746),
                f = t.n(v);

            function N(e, n, t, r, i, s, a) {
                try {
                    var c = e[s](a),
                        o = c.value
                } catch (e) {
                    t(e);
                    return
                }
                c.done ? n(o) : Promise.resolve(o).then(r, i)
            }

            function P(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, i) {
                        var s = e.apply(n, t);

                        function a(e) {
                            N(s, r, i, a, c, "next", e)
                        }

                        function c(e) {
                            N(s, r, i, a, c, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function m(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function M(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function L(e, n) {
                return !n || "object" !== b(n) && "function" != typeof n ? function(e) {
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
            var b = function(e) {
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
                    var t, r = h(e);
                    if (n) {
                        var i = h(this).constructor;
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments);
                    return L(this, t)
                }
            }
            var A = function(e, n) {
                    var t, r, i, s, a = {
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
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                    (r = 0, i) && (s = [2 & s[0], i.value]);
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
                                            r = s[1];
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
                                    r = 0
                                } finally {
                                    t = i = 0
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
                S = function(e) {
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
                        m(this, i);
                        var e;
                        (e = n.apply(this, arguments)).state = {
                            hasAcceptedTerms: !e.props.forceShow && e.props.hasPreviouslyAcceptedTerms,
                            hasAcceptedEULA: !e.props.forceShow && e.props.hasPreviouslyAcceptedEULA,
                            hasAcceptedWithdrawalWaiver: !1
                        };
                        e.handleToggleTermsAcceptance = function(n, t) {
                            e.setState({
                                hasAcceptedTerms: t
                            })
                        };
                        e.handleToggleEUWithdralWaiverAcceptance = function(n, t) {
                            e.setState({
                                hasAcceptedWithdrawalWaiver: t
                            })
                        };
                        e.handleToggleEULAAcceptance = function(n, t) {
                            e.setState({
                                hasAcceptedEULA: t
                            })
                        };
                        return e
                    }
                    var s = i.prototype;
                    s.componentDidMount = function() {
                        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                    };
                    s.componentDidUpdate = function(e, n) {
                        var t = this.hasAcceptedNeccessaryTerms(e, n),
                            r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                        r !== t && this.props.onChange(r)
                    };
                    s.canSkipTOSCheckbox = function() {
                        var e = this.props,
                            n = e.purchaseType,
                            t = e.isGift,
                            r = e.isTrial;
                        return !(!t && !r) || n === p.GZQ.ONE_TIME
                    };
                    s.hasAcceptedNeccessaryTerms = function(e, n) {
                        return (n.hasAcceptedTerms || this.canSkipTOSCheckbox()) && (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver)
                    };
                    s.renderLegalTerms = function() {
                        var e = this.props,
                            n = e.hasPreviouslyAcceptedTerms,
                            t = e.forceShow,
                            i = e.isTrial,
                            s = e.checkboxLabel,
                            c = e.checkboxClassname,
                            o = e.checkboxLabelClassname,
                            l = e.disabled,
                            I = this.state.hasAcceptedTerms;
                        return this.canSkipTOSCheckbox() || !t && n || i ? null : (0, r.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: I,
                            onChange: this.handleToggleTermsAcceptance,
                            disabled: l,
                            className: a()(f().checkbox, c),
                            children: (0, r.jsx)("div", {
                                className: a()(f().checkboxLabel, o),
                                children: null != s ? s : E.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: p.EYA.TERMS,
                                    paidURL: p.EYA.PAID_TERMS
                                })
                            })
                        })
                    };
                    s.formatInterval = function(e) {
                        if (e === T.rV.YEAR) return E.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                        if (e === T.rV.MONTH) return E.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                        throw new Error("Invalid interval type: ".concat(e))
                    };
                    s.render = function() {
                        var e = this.props,
                            n = e.eulaId,
                            i = e.applicationName,
                            s = e.hasPreviouslyAcceptedTerms,
                            c = e.hasPreviouslyAcceptedEULA,
                            l = e.forceShow,
                            I = e.disabled,
                            T = e.className,
                            v = e.checkboxClassname,
                            N = e.checkboxLabelClassname,
                            m = e.finePrint,
                            h = e.showPricingLink,
                            L = e.showWithdrawalWaiver,
                            O = e.isTrial,
                            b = e.subscriptionPlan,
                            R = e.finePrintClassname,
                            S = this.state,
                            U = S.hasAcceptedEULA,
                            y = S.hasAcceptedWithdrawalWaiver;
                        o()(!O || null != b, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true");
                        return l || !s || null != n && !c || L ? (0, r.jsxs)("div", {
                            className: T,
                            children: [!O && (0, r.jsx)(u.FormTitle, {
                                className: f().formTitle,
                                children: L ? E.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER : E.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO
                            }), this.renderLegalTerms(), null == n || !l && c ? null : (0, r.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: U,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: I,
                                className: f().checkbox,
                                children: (0, r.jsx)("div", {
                                    className: f().checkboxLabel,
                                    children: E.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                        applicationName: i,
                                        onClick: function(e) {
                                            (0, u.openModalLazy)(P((function() {
                                                var e, i;
                                                return A(this, (function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            return [4, Promise.all([t.e(40532), t.e(25978), t.e(95083)]).then(t.bind(t, 54415))];
                                                        case 1:
                                                            e = s.sent(), i = e.default;
                                                            return [2, function(e) {
                                                                return (0, r.jsx)(i, function(e) {
                                                                    for (var n = 1; n < arguments.length; n++) {
                                                                        var t = null != arguments[n] ? arguments[n] : {},
                                                                            r = Object.keys(t);
                                                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                                                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                                                                        }))));
                                                                        r.forEach((function(n) {
                                                                            M(e, n, t[n])
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
                            }), null == m ? null : (0, r.jsx)("div", {
                                className: a()(f().finePrint, R),
                                children: m
                            }), L ? (0, r.jsxs)("div", {
                                className: T,
                                children: [(0, r.jsx)(u.Checkbox, {
                                    type: u.Checkbox.Types.INVERTED,
                                    value: y,
                                    onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                    disabled: I,
                                    className: a()(f().checkbox, v),
                                    children: (0, r.jsx)("div", {
                                        className: a()(f().checkboxLabel, N),
                                        children: E.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                    })
                                }), (0, r.jsx)("div", {
                                    className: f().finePrint,
                                    children: E.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                                })]
                            }) : null, h && (0, r.jsxs)("div", {
                                className: f().finePrint,
                                children: ["*", E.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                                    documentationLink: d.Z.getArticleURL(p.BhN.LOCALIZED_PRICING)
                                })]
                            }), O && null != b && (0, r.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: E.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                    buttonText: (0, _.W_)(null, b),
                                    interval: this.formatInterval(null == b ? void 0 : b.interval),
                                    cancelSubscriptionArticle: d.Z.getArticleURL(p.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: d.Z.getArticleURL(p.BhN.PAID_TERMS)
                                })
                            })]
                        }) : null
                    };
                    return i
                }(i.Component);
            const U = l.ZP.connectStores([I.Z], (function(e) {
                var n = e.eulaId;
                return {
                    hasPreviouslyAcceptedTerms: I.Z.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != n && I.Z.hasAcceptedEULA(n)
                }
            }))(S)
        },
        902954: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => a
            });
            var r = t(202351),
                i = t(711531),
                s = t(536392);

            function a() {
                var e = (0, r.e7)([s.Z], (function() {
                    return s.Z.getPremiumTypeSubscription()
                }));
                return (0, r.e7)([i.Z], (function() {
                    var n;
                    return null != (null == e ? void 0 : e.paymentSourceId) ? null === (n = i.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                }))
            }
        },
        16703: (e, n, t) => {
            "use strict";
            t.d(n, {
                PO: () => d,
                q9: () => _,
                R$: () => p,
                i$: () => T,
                KU: () => E,
                Ji: () => v,
                HE: () => f
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                s = t.n(i),
                a = t(73904),
                c = t(249052),
                o = t(473708),
                l = t(846710),
                u = t.n(l);

            function I(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e) {
                var n = e.children,
                    t = e.className;
                return (0, r.jsx)("div", {
                    className: s()(u().table, t),
                    children: n
                })
            }

            function _(e) {
                var n = e.children;
                return (0, r.jsx)("div", {
                    className: u().header,
                    children: n
                })
            }

            function p(e) {
                var n = e.label,
                    t = e.value,
                    i = e.className;
                return (0, r.jsxs)("div", {
                    className: s()(u().row, i),
                    children: [(0, r.jsx)("div", {
                        className: u().rowLabel,
                        children: n
                    }), (0, r.jsx)("div", {
                        className: u().rowAmount,
                        children: t
                    })]
                })
            }

            function T(e) {
                var n = e.label,
                    t = e.value,
                    i = e.discounts,
                    s = e.originalAmount,
                    l = e.interval,
                    I = e.currency,
                    d = e.className,
                    _ = e.intervalCount,
                    T = function(e) {
                        return null != i ? i.find((function(n) {
                            return n.type === e
                        })) : null
                    },
                    E = T(a.eW.SUBSCRIPTION_PLAN),
                    v = T(a.eW.ENTITLEMENT),
                    f = null != E ? Math.floor(E.amount / s * 100) : null,
                    N = (0, c.T4)(s, I);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p, {
                        label: n,
                        value: (0, r.jsxs)(r.Fragment, {
                            children: [t, null != f ? (0, r.jsxs)("div", {
                                className: u().rowPercentDiscount,
                                children: ["-", f, "%"]
                            }) : null]
                        }),
                        className: d
                    }), null != f ? (0,
                        r.jsxs)("div", {
                        className: u().rowDiscountOriginalPrice,
                        children: ["(", null != l && null != _ ? (0, c.og)(N, l, _) : N, ")"]
                    }) : null, null != v ? (0, r.jsx)("div", {
                        className: u().entitlementDiscountRow,
                        children: o.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function E(e) {
                var n, t = e.extended,
                    i = void 0 !== t && t,
                    a = e.negativeMarginTop,
                    c = void 0 !== a && a;
                return (0, r.jsx)("div", {
                    className: s()(u().divider, (n = {}, I(n, u().dividerExtended, i), I(n, u().negativeMarginTop, c), n))
                })
            }

            function v(e) {
                var n = e.label,
                    t = e.value,
                    i = e.className;
                return (0, r.jsxs)("div", {
                    className: s()(u().totalRow, i),
                    children: [(0, r.jsx)("div", {
                        className: u().totalLabel,
                        children: n
                    }), (0, r.jsx)("div", {
                        className: u().totalAmount,
                        children: t
                    })]
                })
            }

            function f(e) {
                var n = e.children,
                    t = e.className;
                return (0, r.jsx)("div", {
                    className: s()(u().finePrint, t),
                    children: n
                })
            }
        },
        367095: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => I
            });
            var r = t(785893),
                i = (t(667294), t(294184)),
                s = t.n(i),
                a = t(249052),
                c = t(203600),
                o = t(473708),
                l = t(312295),
                u = t.n(l);

            function I(e) {
                var n = e.price,
                    t = e.currency,
                    i = e.intervalType,
                    l = e.className,
                    I = e.intervalCount,
                    d = void 0 === I ? 1 : I,
                    _ = e.isPrepaidPaymentSource,
                    p = void 0 !== _ && _,
                    T = (0, a.T4)(n, t),
                    E = null;
                i === c.rV.YEAR ? E = o.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: T
                }) : i === c.rV.MONTH && 1 === d ? E = o.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: T
                }) : i === c.rV.MONTH && d > 1 && (E = o.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: T,
                    intervalCount: d
                }));
                return (0, r.jsx)("div", {
                    className: s()(u().pricePerInterval, l),
                    "data-testid": "PricePerInterval-".concat(t),
                    children: null == i || p ? (0, r.jsx)("strong", {
                        children: T
                    }) : E
                })
            }
        },
        524450: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var r = t(785893),
                i = (t(667294), t(249052)),
                s = t(16703),
                a = t(473708);

            function c(e) {
                var n = e.invoice;
                return n.taxInclusive || n.tax <= 0 ? null : (0, r.jsx)(s.R$, {
                    label: a.Z.Messages.ESTIMATED_TAX_LABEL,
                    value: (0, i.T4)(n.tax, n.currency)
                })
            }
        },
        900547: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => u
            });
            var r = t(785893),
                i = t(667294),
                s = t(294184),
                a = t.n(s),
                c = t(820794),
                o = t.n(c);

            function l(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            const u = i.forwardRef((function(e, n) {
                var t = e.isActive,
                    i = e.children;
                return (0, r.jsx)("div", {
                    className: a()(o().wrapper, l({}, o().wrapperActive, t)),
                    ref: n,
                    children: i
                })
            }))
        },
        646875: (e, n, t) => {
            "use strict";
            t.d(n, {
                As: () => D,
                By: () => Z,
                Lu: () => w,
                hG: () => k,
                nd: () => W,
                e9: () => F,
                yT: () => X
            });
            var r = t(785893),
                i = t(667294),
                s = t(294184),
                a = t.n(s),
                c = t(441143),
                o = t.n(c),
                l = t(202351),
                u = t(882723),
                I = t(73904),
                d = t(153686),
                _ = t(19585),
                p = t(551778),
                T = t(718831),
                E = t(986979),
                v = t(348592),
                f = t(694329),
                N = t(249052),
                P = t(100749),
                m = t(71103),
                M = t(717035),
                h = t(16703),
                L = t(524450),
                O = t(203600),
                b = t(2590),
                R = t(473708),
                A = t(801067),
                S = t.n(A);

            function U(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function y(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        y(e, n, t[n])
                    }))
                }
                return e
            }

            function C(e, n) {
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

            function x(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, s = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done); a = !0) {
                                s.push(r.value);
                                if (n && s.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                        return s
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return U(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return U(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e, n) {
                var t;
                return !!(null === (t = e.discounts) || void 0 === t ? void 0 : t.some((function(e) {
                    return e.type === n
                })))
            };

            function B(e) {
                var n, t = e.invoiceItem,
                    i = e.overrideAmount,
                    s = e.showGuildSubscriptionAdjustmentTooltip,
                    a = e.currency,
                    c = e.className,
                    d = e.isPrepaidPaymentSource,
                    _ = e.referralTrialOfferId,
                    T = (0, l.e7)([p.Z], (function() {
                        return p.Z.get(t.subscriptionPlanId)
                    })),
                    v = null === (n = (0,
                        M.N)(_)) || void 0 === n ? void 0 : n.subscription_trial;
                o()(null != T, "Missing subscriptionPlan");
                var P = (0, f.if)({
                        intervalType: null == v ? void 0 : v.interval,
                        intervalCount: null == v ? void 0 : v.interval_count
                    }),
                    m = function(e, n, t, r) {
                        var i = j(e, I.eW.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case O.Xh.PREMIUM_MONTH_LEGACY:
                            case O.Xh.PREMIUM_YEAR_LEGACY:
                            case O.Xh.PREMIUM_MONTH_TIER_0:
                            case O.Xh.PREMIUM_YEAR_TIER_0:
                            case O.Xh.PREMIUM_MONTH_TIER_1:
                            case O.Xh.PREMIUM_YEAR_TIER_1:
                            case O.Xh.PREMIUM_MONTH_TIER_2:
                            case O.Xh.PREMIUM_YEAR_TIER_2:
                            case O.Xh.PREMIUM_3_MONTH_TIER_2:
                            case O.Xh.PREMIUM_6_MONTH_TIER_2:
                                return (0, f.Gf)(e.subscriptionPlanId, i, t, r);
                            case O.Xh.PREMIUM_3_MONTH_GUILD:
                            case O.Xh.PREMIUM_6_MONTH_GUILD:
                                return R.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case O.Xh.PREMIUM_MONTH_GUILD:
                                return R.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case O.Xh.PREMIUM_YEAR_GUILD:
                                return R.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case O.rV.MONTH:
                                return 1 === n.intervalCount ? R.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                }) : R.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case O.rV.YEAR:
                                return R.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw new Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(t, T, d, P);
                !0 === s && (m = (0, r.jsxs)("div", {
                    className: S().invoiceItemLabelWithIcon,
                    children: [(0, r.jsxs)("div", {
                        children: [m, " "]
                    }), (0, r.jsx)(u.Tooltip, {
                        text: R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: S().invoiceItemTooltip,
                        children: function(e) {
                            return (0, r.jsx)(E.Z, C(g({}, e), {
                                className: S().invoiceItemLabelIcon
                            }))
                        }
                    })]
                }));
                var L = (0, N.T4)(null != i ? i : t.amount, a),
                    b = d ? L : (0,
                        N.og)(L, T.interval, T.intervalCount);
                return (0, r.jsx)(h.i$, {
                    label: m,
                    value: b,
                    originalAmount: t.subscriptionPlanPrice * t.quantity,
                    discounts: t.discounts,
                    interval: T.interval,
                    intervalCount: T.intervalCount,
                    currency: a,
                    className: c
                })
            }

            function D(e) {
                var n = e.label,
                    t = e.tooltipText,
                    i = e.tooltipAriaLabel;
                return (0, r.jsxs)("div", {
                    className: S().invoiceItemLabelWithIcon,
                    children: [n, (0, r.jsx)(u.Tooltip, {
                        clickableOnMobile: !0,
                        text: t,
                        "aria-label": i,
                        tooltipClassName: S().invoiceItemTooltip,
                        children: function(e) {
                            return (0, r.jsx)(E.Z, C(g({}, e), {
                                className: S().invoiceItemLabelIcon
                            }))
                        }
                    })]
                })
            }

            function Z(e) {
                var n = e.invoice,
                    t = e.isPrepaidPaymentSource,
                    i = (0, m.j)(n.invoiceItems),
                    s = i.find((function(e) {
                        return !(0, f.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    a = i.find((function(e) {
                        return (0, f.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    c = (0, l.e7)([p.Z], (function() {
                        return null != a ? p.Z.get(a.subscriptionPlanId) : null
                    })),
                    o = null != a ? a.amount : 0,
                    u = (0, N.T4)(o, n.currency),
                    I = null != c ? (0, N.og)(u, c.interval, c.intervalCount) : 0;
                return (0,
                    r.jsxs)(r.Fragment, {
                    children: [null != s ? (0, r.jsx)(B, {
                        invoiceItem: s,
                        currency: n.currency,
                        isPrepaidPaymentSource: t
                    }) : null, 0 !== o && null != a && null != c ? (0, r.jsx)(h.R$, {
                        label: R.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: a.quantity,
                            planName: (0, f.Gf)(c.id, !1, t)
                        }),
                        value: t ? u : I
                    }) : null, (0, r.jsx)(L.Z, {
                        invoice: n
                    }), (0, r.jsx)(h.KU, {}), (0, r.jsx)(h.Ji, {
                        label: (n.taxInclusive ? t ? R.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : R.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : R.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === b.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function w(e) {
                var n = e.invoice,
                    t = e.newPlan,
                    i = e.isPrepaidPaymentSource,
                    s = e.referralTrialOfferId,
                    a = (0, m.j)(n.invoiceItems),
                    c = a.find((function(e) {
                        return e.subscriptionPlanId === t.id
                    }));
                o()(null != c, "Expected newPlanInvoiceItem");
                var l = a.find((function(e) {
                        return !(0, f.Z8)(e.subscriptionPlanId) && e.amount < 0
                    })),
                    u = a.find((function(e) {
                        return null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((function(e) {
                            return e.type === I.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION
                        }))
                    })),
                    d = j(c, I.eW.PREMIUM_TRIAL),
                    _ = c.quantity * c.subscriptionPlanPrice,
                    p = c.amount + (null != l ? l.amount : 0) - _ + (null != u ? u.amount : 0),
                    T = a.filter((function(e) {
                        return e.subscriptionPlanId === O.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === O.Xh.PREMIUM_YEAR_GUILD
                    })).reduce((function(e, n) {
                        return e + n.amount
                    }), 0);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(B, {
                        invoiceItem: c,
                        currency: n.currency,
                        overrideAmount: _,
                        isPrepaidPaymentSource: i,
                        referralTrialOfferId: s
                    }), 0 === p || d ? null : (0, r.jsx)(h.R$, {
                        label: (0, r.jsx)(D, {
                            label: R.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, f.PV)(t.id) ? (0, f.aq)(t.id) : t.name
                            }),
                            tooltipText: R.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, N.T4)(p, n.currency)
                    }), 0 !== T ? (0, r.jsx)(h.R$, {
                        label: (0, r.jsx)(D, {
                            label: R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: R.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, N.T4)(T, n.currency)
                    }) : null, (0, r.jsx)(L.Z, {
                        invoice: n
                    }), (0, r.jsx)(h.KU, {}), (0, r.jsx)(h.Ji, {
                        label: (n.taxInclusive ? i ? R.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : R.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : R.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === b.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function G(e) {
                var n = e.slice();
                n.sort((function(e, n) {
                    var t = (0, f.uZ)(e.subscriptionPlanId),
                        r = (0, f.uZ)(n.subscriptionPlanId);
                    return t && !r ? -1 : !t && r ? 1 : 0
                }));
                return n
            }

            function Y(e) {
                return e.filter((function(e) {
                    var n = e.subscriptionPlanId;
                    return n !== O.Xh.NONE_MONTH && n !== O.Xh.NONE_YEAR
                }))
            }

            function k(e) {
                var n = e.proratedInvoice,
                    t = e.renewalInvoice,
                    i = (0, f.dn)(n),
                    s = i.intervalType,
                    a = i.intervalCount,
                    c = (0, f.dn)(t),
                    o = c.intervalType,
                    l = c.intervalCount;
                return s !== o || a !== l || n.subscriptionPeriodEnd.getTime() === t.subscriptionPeriodStart.getTime() ? null : (0, r.jsx)("div", {
                    className: S().subscriptionPeriodResetNotice,
                    children: R.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function H(e) {
                var n = e.isUpdate,
                    t = e.currentInvoice,
                    i = e.newInvoice,
                    s = null != t ? (0, m.j)(t.invoiceItems) : null,
                    c = null != t ? (0, f.dn)(t) : null,
                    o = (0, f.dn)(i),
                    l = o.intervalType,
                    u = o.intervalCount,
                    I = null != c && (c.intervalType !== l || c.intervalCount !== u);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(h.KU, {
                        extended: !0
                    }), null != t ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(h.q9, {
                            children: R.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), Y(G((0, m.j)(t.invoiceItems))).map((function(e) {
                            return (0, r.jsx)(B, {
                                invoiceItem: e,
                                currency: t.currency
                            }, e.id)
                        })), (0, r.jsx)(h.KU, {
                            extended: !0
                        })]
                    }) : null, (0, r.jsx)(h.q9, {
                        children: R.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), Y(G((0, m.j)(i.invoiceItems))).map((function(e) {
                        var t = null != s && !s.some((function(n) {
                            return n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity
                        }));
                        return (0, r.jsx)(B, {
                            invoiceItem: e,
                            currency: i.currency,
                            showGuildSubscriptionAdjustmentTooltip: I && (e.subscriptionPlanId === O.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === O.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === O.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === O.Xh.PREMIUM_6_MONTH_GUILD),
                            className: a()(y({}, S().subscriptionAddedInvoiceItem, !n || t))
                        }, e.id)
                    })), (0, r.jsx)(L.Z, {
                        invoice: i
                    }), (0, r.jsx)(h.KU, {}), (0, r.jsx)(h.R$, {
                        label: R.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, N.og)((0, N.T4)(i.total, i.currency), l, u),
                        className: S().subscriptionCostRow
                    })]
                })
            }

            function V(e) {
                var n, t = e.proratedInvoice,
                    i = e.renewalInvoice,
                    s = e.isTrial,
                    a = e.isUpdate,
                    c = e.overrideRenewalDate,
                    o = e.trialFooterMessageOverride,
                    l = null === (n = (0, M.N)()) || void 0 === n ? void 0 : n.subscription_trial,
                    u = (0, f.dn)(i),
                    I = u.intervalType,
                    d = u.intervalCount;
                if (s) {
                    var _ = (0, f.if)({
                            intervalType: null == l ? void 0 : l.interval,
                            intervalCount: null == l ? void 0 : l.interval_count
                        }),
                        p = (null == l ? void 0 : l.interval) === O.rV.DAY && (null == l ? void 0 : l.interval_count) < 28 ? 2 : 7;
                    return (0, r.jsx)(r.Fragment, {
                        children: null != o ? o : R.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: _,
                            days: p,
                            contactLink: b.EYA.CONTACT,
                            helpdeskArticle: v.Z.getArticleURL(b.BhN.PREMIUM_TRIAL)
                        })
                    })
                }
                var T = i.taxInclusive ? R.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : R.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, r.jsx)(r.Fragment, {
                    children: T.format({
                        rate: (0, N.og)((0, N.T4)(i.subtotal, i.currency), I, d),
                        renewalDate: null != c ? c : a ? null != t ? t.subscriptionPeriodEnd : i.subscriptionPeriodStart : i.subscriptionPeriodEnd,
                        contactLink: b.EYA.CONTACT,
                        helpdeskArticle: v.Z.getArticleURL(b.BhN.BILLING)
                    })
                })
            }

            function W(e) {
                var n = e.premiumSubscription,
                    t = e.proratedInvoice,
                    s = e.renewalInvoice,
                    a = e.overrideRenewalDate,
                    c = e.isUpdate,
                    o = void 0 !== c && c,
                    l = e.isTrial,
                    I = void 0 !== l && l,
                    p = e.priceOptions,
                    E = void 0 === p ? void 0 : p,
                    v = e.isPrepaidPaymentSource,
                    f = void 0 !== v && v,
                    N = e.trialFooterMessageOverride,
                    m = e.hideSubscriptionDetails,
                    M = void 0 !== m && m,
                    L = (0, _.Z)().analyticsLocations,
                    O = g({
                        subscriptionId: null == n ? void 0 : n.id,
                        renewal: !0,
                        preventFetch: !o,
                        analyticsLocatinons: L,
                        analyticsLocation: d.Z.SUBSCRIPTION_INVOICE_FOOTER
                    }, E),
                    b = x((0, P.ED)(O), 1)[0],
                    A = x(i.useState(!1), 2),
                    U = A[0],
                    y = A[1];
                return (0, r.jsxs)(r.Fragment, {
                    children: [f ? null : (0, r.jsx)(h.HE, {
                        children: (0, r.jsx)(V, {
                            proratedInvoice: t,
                            renewalInvoice: s,
                            isTrial: I,
                            isUpdate: o,
                            overrideRenewalDate: a,
                            trialFooterMessageOverride: N
                        })
                    }), !M && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(u.Clickable, {
                            onClick: function() {
                                return y((function(e) {
                                    return !e
                                }))
                            },
                            className: S().subscriptionDetailsToggle,
                            children: [U ? R.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : R.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0,
                                r.jsx)(T.Z, {
                                direction: U ? T.Z.Directions.UP : T.Z.Directions.DOWN,
                                className: S().subscriptionDetailsToggleCaret
                            })]
                        }), U ? (0, r.jsx)(H, {
                            isUpdate: o,
                            currentInvoice: b,
                            newInvoice: s
                        }) : null]
                    })]
                })
            }

            function F(e) {
                var n = e.plan,
                    t = e.className,
                    i = e.paymentSourceId,
                    s = e.isPrepaidPaymentSource,
                    a = void 0 !== s && s,
                    c = (0, f.aS)(n.id, !1, !0, {
                        paymentSourceId: i
                    });
                return (0, r.jsx)(h.PO, {
                    className: t,
                    children: (0, r.jsx)(h.R$, {
                        label: R.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                            planName: (0, f.Gf)(n.id, !1, a)
                        }),
                        value: (0, N.T4)(c.amount, c.currency),
                        className: S().subscriptionCostRow
                    })
                })
            }

            function X(e) {
                var n = e.invoice,
                    t = e.plan,
                    i = (0, m.j)(n.invoiceItems).find((function(e) {
                        return e.subscriptionPlanId === t.id
                    }));
                o()(null != i, "newPlanInvoiceItem can not be null");
                if (t.interval === O.rV.MONTH) return (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: R.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                if (t.interval === O.rV.YEAR) return (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: R.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(i.subscriptionPlanPrice, n.currency)
                    })
                });
                o()(!1, "Invalid interval type")
            }
        },
        820610: (e, n, t) => {
            "use strict";
            t.d(n, {
                K: () => P,
                Z: () => M
            });
            var r = t(785893),
                i = (t(667294), t(441143)),
                s = t.n(i),
                a = t(882723),
                c = t(782786),
                o = t(709189),
                l = t(694329),
                u = t(530562),
                I = t(520453),
                d = t(473708),
                _ = t(641352),
                p = t.n(_),
                T = t(497206),
                E = t.n(T);

            function v(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function f(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        v(e, n, t[n])
                    }))
                }
                return e
            }

            function N(e, n) {
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

            function P(e) {
                var n = e.purchaseType,
                    t = e.plan,
                    r = e.premiumSubscription,
                    i = e.isGift,
                    a = e.planGroup,
                    c = e.isPrepaidPaymentSource;
                if (n === I.GZ.ONE_TIME) return d.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
                s()(null != t, "Subscription plan must be selected to render SubscriptionReviewButton");
                return i ? d.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : (0, l.PV)(t.id) ? c ? d.Z.Messages.BILLING_SELECT_PLAN : null != r ? (0, u.R4)(r, t.id, a) ? d.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : d.Z.Messages.BILLING_SWITCH_PLAN_CHANGE : (0, l.W_)(null, t) : d.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN
            }

            function m(e, n) {
                if (null != e.current) {
                    e.current.scrollIntoView({
                        behavior: "smooth"
                    });
                    n()
                }
            }

            function M(e) {
                var n = e.legalTermsNodeRef,
                    t = e.invoiceError,
                    i = e.planError,
                    s = e.disablePurchase,
                    l = e.flashLegalTerms,
                    u = e.isSubmitting,
                    I = e.premiumSubscription,
                    _ = e.isGift,
                    T = e.planGroup,
                    v = e.isPrepaid,
                    M = e.isTrial,
                    h = e.makePurchase,
                    L = e.needsPaymentSource,
                    O = (0, c.usePaymentContext)(),
                    b = O.selectedPlan,
                    R = O.hasAcceptedTerms,
                    A = P({
                        purchaseType: O.purchaseType,
                        plan: b,
                        premiumSubscription: I,
                        isGift: _,
                        planGroup: T,
                        isPrepaidPaymentSource: v
                    });
                return null != t || null != i || s ? (0, r.jsx)(a.Button, {
                    color: a.Button.Colors.GREEN,
                    disabled: !0,
                    children: A
                }) : L ? (0, r.jsx)(a.Tooltip, {
                    text: d.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
                    children: function(e) {
                        return (0, r.jsx)(a.Button, N(f({}, e), {
                            color: a.Button.Colors.GREEN,
                            type: "submit",
                            "data-testid": "submitButton",
                            disabled: !0,
                            children: A
                        }))
                    }
                }) : M ? (0, r.jsxs)(o.C, {
                    innerClassName: p().innerButton,
                    "data-testid": R ? "purchase" : "submitButton",
                    onClick: R ? h : function() {
                        return m(n, l)
                    },
                    color: a.Button.Colors.GREEN,
                    submitting: u,
                    children: [(0, r.jsx)("img", {
                        alt: "",
                        className: p().nitroIcon,
                        src: E()
                    }), A]
                }) : R ? (0,
                    r.jsx)(a.Button, {
                    "data-testid": "purchase",
                    onClick: h,
                    color: a.Button.Colors.GREEN,
                    submitting: u,
                    children: A
                }) : (0, r.jsx)(a.Tooltip, {
                    text: d.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
                    children: function(e) {
                        return (0, r.jsx)(a.Button, N(f({}, e), {
                            color: a.Button.Colors.GREEN,
                            type: "submit",
                            onClick: function() {
                                return m(n, l)
                            },
                            "data-testid": "submitButton",
                            children: A
                        }))
                    }
                })
            }
        }
    }
]);