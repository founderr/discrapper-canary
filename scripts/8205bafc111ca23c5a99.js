"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [46285], {
        152042: (e, n, r) => {
            r.d(n, {
                Z: () => I
            });
            var t = r(785893),
                a = (r(667294), r(116094)),
                i = r(249052),
                s = r(2590),
                c = r(203600),
                l = r(473708),
                o = r(750347),
                u = r.n(o);
            const I = function(e) {
                var n, r, o, I = e.subscriptionPlan,
                    d = e.isGift,
                    _ = e.isEmbeddedIAP,
                    T = e.renewalInvoice,
                    v = e.paymentSourceType,
                    p = e.hide,
                    E = e.purchaseType,
                    f = e.productLine;
                if (p) return null;
                if (null != T) {
                    var N = a.ZP.getIntervalForInvoice(T);
                    n = N.intervalType;
                    r = N.intervalCount;
                    o = (0, i.og)((0, i.T4)(T.total, T.currency), n, r)
                } else if (null != I) {
                    n = I.interval;
                    r = I.intervalCount
                }
                var M = "";
                if (_)
                    if (null != o && null != (null == T ? void 0 : T.subscriptionPeriodEnd)) M = l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_RATE_AND_RENEWAL.format({
                        rate: o,
                        renewalDate: T.subscriptionPeriodEnd
                    });
                    else switch (n) {
                        case c.rV.MONTH:
                            M = 1 === r ? l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MONTHLY : l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_MULTI_MONTH.format({
                                intervalCount: r
                            });
                            break;
                        case c.rV.YEAR:
                            M = l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE_SUBSCRIPTION_YEARLY;
                            break;
                        case void 0:
                            M = l.Z.Messages.EMBEDDED_ACTIVITIES_IAP_NON_REFUNDABLE.format({});
                            break;
                        default:
                            throw new Error("Unexpected interval: ".concat(n))
                    } else if (E === s.GZQ.ONE_TIME)
                        if (f === s.POd.COLLECTIBLES) M = l.Z.Messages.COLLECTIBLES_PURCHASE_DISCLAIMER_PAYMENT;
                        else M = l.Z.Messages.ONE_TIME_PURCHASE_FINE_PRINT;
                else switch (n) {
                    case c.rV.MONTH:
                        M = d ? l.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY;
                        M = d ? l.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_MONTHLY : 1 === r ? l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MONTHLY : l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_MULTI_MONTH.format({
                            intervalCount: r
                        });
                        break;
                    case c.rV.YEAR:
                        M = d ? l.Z.Messages.PREMIUM_PAYMENT_GIFT_SUBTEXT_YEARLY : l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_YEARLY;
                        break;
                    case void 0:
                        M = "";
                        break;
                    default:
                        throw new Error("Unexpected interval: ".concat(n))
                }
                return (0, t.jsxs)(t.Fragment, {
                    children: [M, v === s.HeQ.PAYSAFE_CARD && (0, t.jsx)("div", {
                        className: u().paymentSourceNoticeCopy,
                        children: l.Z.Messages.SUBSCRIPTION_PAYMENT_LEGALESE_PAYSAFECARD
                    }), v === s.HeQ.SOFORT && (0, t.jsxs)("div", {
                        className: u().paymentSourceNoticeCopy,
                        children: [l.Z.Messages.SOFORT_MANDATE_AGREEMENT, " "]
                    })]
                })
            }
        },
        929400: (e, n, r) => {
            r.d(n, {
                Z: () => c
            });
            var t = r(785893),
                a = (r(667294), r(882723)),
                i = r(460638),
                s = r.n(i);
            const c = function(e) {
                var n = e.message;
                return (0, t.jsxs)("div", {
                    className: s().warnBlock,
                    children: [(0, t.jsx)("div", {
                        className: s().warnIcon
                    }), (0, t.jsx)(a.Text, {
                        className: s().warnText,
                        variant: "text-sm/normal",
                        children: n
                    })]
                })
            }
        },
        536713: (e, n, r) => {
            r.d(n, {
                Z: () => S
            });
            var t = r(785893),
                a = r(667294),
                i = r(294184),
                s = r.n(i),
                c = r(441143),
                l = r.n(c),
                o = r(202351),
                u = r(882723),
                I = r(64318),
                d = r(348592),
                _ = r(116094),
                T = r(2590),
                v = r(203600),
                p = r(473708),
                E = r(205074),
                f = r.n(E);

            function N(e, n, r, t, a, i, s) {
                try {
                    var c = e[i](s),
                        l = c.value
                } catch (e) {
                    r(e);
                    return
                }
                c.done ? n(l) : Promise.resolve(l).then(t, a)
            }

            function M(e) {
                return function() {
                    var n = this,
                        r = arguments;
                    return new Promise((function(t, a) {
                        var i = e.apply(n, r);

                        function s(e) {
                            N(i, t, a, s, c, "next", e)
                        }

                        function c(e) {
                            N(i, t, a, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function P(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function L(e, n) {
                return !n || "object" !== A(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function R(e, n) {
                R = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return R(e, n)
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
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
                    var r, t = h(e);
                    if (n) {
                        var a = h(this).constructor;
                        r = Reflect.construct(t, arguments, a)
                    } else r = t.apply(this, arguments);
                    return L(this, r)
                }
            }
            var b = function(e, n) {
                    var r, t, a, i, s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function c(i) {
                        return function(c) {
                            return function(i) {
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (r = 1, t && (a = 2 & i[0] ? t.return : i[0] ? t.throw || ((a = t.return) && a.call(t), 0) : t.next) && !(a = a.call(t, i[1])).done) return a;
                                    (t = 0, a) && (i = [2 & i[0], a.value]);
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
                                            t = i[1];
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
                                    i = n.call(e, s)
                                } catch (e) {
                                    i = [6, e];
                                    t = 0
                                } finally {
                                    r = a = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, c])
                        }
                    }
                },
                U = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && R(e, n)
                    }(a, e);
                    var n = O(a);

                    function a() {
                        P(this, a);
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
                    var i = a.prototype;
                    i.componentDidMount = function() {
                        this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
                    };
                    i.componentDidUpdate = function(e, n) {
                        var r = this.hasAcceptedNeccessaryTerms(e, n),
                            t = this.hasAcceptedNeccessaryTerms(this.props, this.state);
                        t !== r && this.props.onChange(t)
                    };
                    i.hasAcceptedNeccessaryTerms = function(e, n) {
                        return (e.isTrial || e.isGift || n.hasAcceptedTerms) && (null == e.eulaId || n.hasAcceptedEULA) && (!e.showWithdrawalWaiver || n.hasAcceptedWithdrawalWaiver)
                    };
                    i.renderLegalTerms = function() {
                        var e = this.props,
                            n = e.hasPreviouslyAcceptedTerms,
                            r = e.forceShow,
                            a = e.isTrial,
                            i = e.checkboxLabel,
                            c = e.checkboxClassname,
                            l = e.checkboxLabelClassname,
                            o = e.disabled,
                            I = e.isGift,
                            d = this.state.hasAcceptedTerms;
                        if (!(!r && n || a) && I) {
                            var _ = p.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_V2.format({
                                primaryText: p.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT,
                                paidURL: T.EYA.PAID_TERMS
                            });
                            return (0, t.jsx)("div", {
                                className: s()(f().checkboxLabel, l),
                                children: _
                            })
                        }
                        return !r && n || a ? null : (0, t.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            value: d,
                            onChange: this.handleToggleTermsAcceptance,
                            disabled: o,
                            className: s()(f().checkbox, c),
                            children: (0, t.jsx)("div", {
                                className: s()(f().checkboxLabel, l),
                                children: null != i ? i : p.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL.format({
                                    termsURL: T.EYA.TERMS,
                                    paidURL: T.EYA.PAID_TERMS
                                })
                            })
                        })
                    };
                    i.formatInterval = function(e) {
                        if (e === v.rV.YEAR) return p.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR;
                        if (e === v.rV.MONTH) return p.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH;
                        throw new Error("Invalid interval type: ".concat(e))
                    };
                    i.render = function() {
                        var e = this.props,
                            n = e.eulaId,
                            a = e.applicationName,
                            i = e.hasPreviouslyAcceptedTerms,
                            c = e.hasPreviouslyAcceptedEULA,
                            o = e.forceShow,
                            I = e.disabled,
                            v = e.className,
                            E = e.checkboxClassname,
                            N = e.checkboxLabelClassname,
                            P = e.finePrint,
                            h = e.showPricingLink,
                            L = e.showWithdrawalWaiver,
                            R = e.isTrial,
                            A = e.subscriptionPlan,
                            O = e.finePrintClassname,
                            U = this.state,
                            S = U.hasAcceptedEULA,
                            y = U.hasAcceptedWithdrawalWaiver;
                        l()(!R || null != A, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true");
                        return o || !i || null != n && !c || L ? (0, t.jsxs)("div", {
                            className: v,
                            children: [!R && (0, t.jsx)(u.FormTitle, {
                                className: f().formTitle,
                                children: L ? p.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER : p.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO
                            }), this.renderLegalTerms(), null == n || !o && c ? null : (0, t.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: S,
                                onChange: this.handleToggleEULAAcceptance,
                                disabled: I,
                                className: f().checkbox,
                                children: (0, t.jsx)("div", {
                                    className: f().checkboxLabel,
                                    children: p.Z.Messages.BILLING_THIRD_PARTY_EULA_LABEL.format({
                                        applicationName: a,
                                        onClick: function(e) {
                                            (0, u.openModalLazy)(M((function() {
                                                var e, a;
                                                return b(this, (function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            return [4, Promise.all([r.e(40532), r.e(47007), r.e(40970), r.e(16105), r.e(55121), r.e(35855), r.e(96043), r.e(25978), r.e(95139)]).then(r.bind(r, 54415))];
                                                        case 1:
                                                            e = i.sent(), a = e.default;
                                                            return [2, function(e) {
                                                                return (0, t.jsx)(a, function(e) {
                                                                    for (var n = 1; n < arguments.length; n++) {
                                                                        var r = null != arguments[n] ? arguments[n] : {},
                                                                            t = Object.keys(r);
                                                                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                                                        }))));
                                                                        t.forEach((function(n) {
                                                                            m(e, n, r[n])
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
                            }), null == P ? null : (0, t.jsx)("div", {
                                className: s()(f().finePrint, O),
                                children: P
                            }), L ? (0, t.jsxs)("div", {
                                className: v,
                                children: [(0, t.jsx)(u.Checkbox, {
                                    type: u.Checkbox.Types.INVERTED,
                                    value: y,
                                    onChange: this.handleToggleEUWithdralWaiverAcceptance,
                                    disabled: I,
                                    className: s()(f().checkbox, E),
                                    children: (0,
                                        t.jsx)("div", {
                                        className: s()(f().checkboxLabel, N),
                                        children: p.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_CHECKBOX
                                    })
                                }), (0, t.jsx)("div", {
                                    className: f().finePrint,
                                    children: p.Z.Messages.BILLING_ONLINE_PURCHASE_WAIVER_DISCLAIMER
                                })]
                            }) : null, h && (0, t.jsxs)("div", {
                                className: f().finePrint,
                                children: ["*", p.Z.Messages.BILLING_HOW_PRICING_WORKS.format({
                                    documentationLink: d.Z.getArticleURL(T.BhN.LOCALIZED_PRICING)
                                })]
                            }), R && null != A && (0, t.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: p.Z.Messages.BILLING_TRIAL_LEGAL_COPY_V2.format({
                                    buttonText: (0, _.W_)(null, A),
                                    interval: this.formatInterval(null == A ? void 0 : A.interval),
                                    cancelSubscriptionArticle: d.Z.getArticleURL(T.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                    paidServiceTermsArticle: d.Z.getArticleURL(T.BhN.PAID_TERMS)
                                })
                            })]
                        }) : null
                    };
                    return a
                }(a.Component);
            const S = o.ZP.connectStores([I.Z], (function(e) {
                var n = e.eulaId;
                return {
                    hasPreviouslyAcceptedTerms: I.Z.hasAcceptedStoreTerms,
                    hasPreviouslyAcceptedEULA: null != n && I.Z.hasAcceptedEULA(n)
                }
            }))(U)
        },
        902954: (e, n, r) => {
            r.d(n, {
                Z: () => s
            });
            var t = r(202351),
                a = r(711531),
                i = r(536392);

            function s() {
                var e = (0, t.e7)([i.Z], (function() {
                    return i.Z.getPremiumTypeSubscription()
                }));
                return (0, t.e7)([a.Z], (function() {
                    var n;
                    return null != (null == e ? void 0 : e.paymentSourceId) ? null === (n = a.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
                }))
            }
        },
        16703: (e, n, r) => {
            r.d(n, {
                PO: () => d,
                q9: () => _,
                R$: () => T,
                i$: () => v,
                KU: () => p,
                Ji: () => E,
                HE: () => f
            });
            var t = r(785893),
                a = (r(667294), r(294184)),
                i = r.n(a),
                s = r(73904),
                c = r(249052),
                l = r(473708),
                o = r(884092),
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
                    className: i()(u().table, r),
                    children: n
                })
            }

            function _(e) {
                var n = e.children;
                return (0, t.jsx)("div", {
                    className: u().header,
                    children: n
                })
            }

            function T(e) {
                var n = e.label,
                    r = e.value,
                    a = e.className;
                return (0, t.jsxs)("div", {
                    className: i()(u().row, a),
                    children: [(0, t.jsx)("div", {
                        className: u().rowLabel,
                        children: n
                    }), (0, t.jsx)("div", {
                        className: u().rowAmount,
                        children: r
                    })]
                })
            }

            function v(e) {
                var n = e.label,
                    r = e.value,
                    a = e.discounts,
                    i = e.originalAmount,
                    o = e.interval,
                    I = e.currency,
                    d = e.className,
                    _ = e.intervalCount,
                    v = function(e) {
                        return null != a ? a.find((function(n) {
                            return n.type === e
                        })) : null
                    },
                    p = v(s.eW.SUBSCRIPTION_PLAN),
                    E = v(s.eW.ENTITLEMENT),
                    f = null != p ? Math.floor(p.amount / i * 100) : null,
                    N = (0, c.T4)(i, I);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(T, {
                        label: n,
                        value: (0, t.jsxs)(t.Fragment, {
                            children: [r, null != f ? (0, t.jsxs)("div", {
                                className: u().rowPercentDiscount,
                                children: ["-", f, "%"]
                            }) : null]
                        }),
                        className: d
                    }), null != f ? (0, t.jsxs)("div", {
                        className: u().rowDiscountOriginalPrice,
                        children: ["(", null != o && null != _ ? (0, c.og)(N, o, _) : N, ")"]
                    }) : null, null != E ? (0, t.jsx)("div", {
                        className: u().entitlementDiscountRow,
                        children: l.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
                    }) : null]
                })
            }

            function p(e) {
                var n, r = e.extended,
                    a = void 0 !== r && r,
                    s = e.negativeMarginTop,
                    c = void 0 !== s && s;
                return (0, t.jsx)("div", {
                    className: i()(u().divider, (n = {},
                        I(n, u().dividerExtended, a), I(n, u().negativeMarginTop, c), n))
                })
            }

            function E(e) {
                var n = e.label,
                    r = e.value,
                    a = e.className;
                return (0, t.jsxs)("div", {
                    className: i()(u().totalRow, a),
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
                    className: i()(u().finePrint, r),
                    children: n
                })
            }
        },
        367095: (e, n, r) => {
            r.d(n, {
                Z: () => I
            });
            var t = r(785893),
                a = (r(667294), r(294184)),
                i = r.n(a),
                s = r(249052),
                c = r(203600),
                l = r(473708),
                o = r(796122),
                u = r.n(o);

            function I(e) {
                var n = e.price,
                    r = e.currency,
                    a = e.intervalType,
                    o = e.className,
                    I = e.intervalCount,
                    d = void 0 === I ? 1 : I,
                    _ = e.isPrepaidPaymentSource,
                    T = void 0 !== _ && _,
                    v = (0, s.T4)(n, r),
                    p = null;
                a === c.rV.YEAR ? p = l.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: v
                }) : a === c.rV.MONTH && 1 === d ? p = l.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: v
                }) : a === c.rV.MONTH && d > 1 && (p = l.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: v,
                    intervalCount: d
                }));
                return (0,
                    t.jsx)("div", {
                    className: i()(u().pricePerInterval, o),
                    "data-testid": "PricePerInterval-".concat(r),
                    children: null == a || T ? (0, t.jsx)("strong", {
                        children: v
                    }) : p
                })
            }
        },
        524450: (e, n, r) => {
            r.d(n, {
                Z: () => c
            });
            var t = r(785893),
                a = (r(667294), r(249052)),
                i = r(16703),
                s = r(473708);

            function c(e) {
                var n = e.invoice;
                return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(i.R$, {
                    label: s.Z.Messages.ESTIMATED_TAX_LABEL,
                    value: (0, a.T4)(n.tax, n.currency)
                })
            }
        },
        900547: (e, n, r) => {
            r.d(n, {
                Z: () => u
            });
            var t = r(785893),
                a = r(667294),
                i = r(294184),
                s = r.n(i),
                c = r(266643),
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
            const u = a.forwardRef((function(e, n) {
                var r = e.isActive,
                    a = e.children;
                return (0, t.jsx)("div", {
                    className: s()(l().wrapper, o({}, l().wrapperActive, r)),
                    ref: n,
                    children: a
                })
            }))
        },
        646875: (e, n, r) => {
            r.d(n, {
                As: () => B,
                By: () => Z,
                Lu: () => w,
                hG: () => H,
                nd: () => F,
                e9: () => W,
                yT: () => X
            });
            var t = r(785893),
                a = r(667294),
                i = r(294184),
                s = r.n(i),
                c = r(441143),
                l = r.n(c),
                o = r(202351),
                u = r(882723),
                I = r(73904),
                d = r(153686),
                _ = r(19585),
                T = r(551778),
                v = r(718831),
                p = r(771966),
                E = r(348592),
                f = r(116094),
                N = r(249052),
                M = r(100749),
                P = r(71103),
                m = r(717035),
                h = r(16703),
                L = r(524450),
                R = r(203600),
                A = r(2590),
                O = r(473708),
                b = r(154342),
                U = r.n(b);

            function S(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t
            }

            function y(e, n, r) {
                n in e ? Object.defineProperty(e, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = r;
                return e
            }

            function g(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    t.forEach((function(n) {
                        y(e, n, r[n])
                    }))
                }
                return e
            }

            function C(e, n) {
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

            function x(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var t, a, i = [],
                            s = !0,
                            c = !1;
                        try {
                            for (r = r.call(e); !(s = (t = r.next()).done); s = !0) {
                                i.push(t.value);
                                if (n && i.length === n) break
                            }
                        } catch (e) {
                            c = !0;
                            a = e
                        } finally {
                            try {
                                s || null == r.return || r.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, n);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var j = function(e, n) {
                var r;
                return !!(null === (r = e.discounts) || void 0 === r ? void 0 : r.some((function(e) {
                    return e.type === n
                })))
            };

            function D(e) {
                var n, r = e.invoiceItem,
                    a = e.overrideAmount,
                    i = e.showGuildSubscriptionAdjustmentTooltip,
                    s = e.currency,
                    c = e.className,
                    d = e.isPrepaidPaymentSource,
                    _ = e.referralTrialOfferId,
                    v = (0, o.e7)([T.Z], (function() {
                        return T.Z.get(r.subscriptionPlanId)
                    })),
                    E = null === (n = (0, m.N)(_)) || void 0 === n ? void 0 : n.subscription_trial;
                l()(null != v, "Missing subscriptionPlan");
                var M = (0, f.if)({
                        intervalType: null == E ? void 0 : E.interval,
                        intervalCount: null == E ? void 0 : E.interval_count
                    }),
                    P = function(e, n, r, t) {
                        var a = j(e, I.eW.PREMIUM_TRIAL);
                        switch (e.subscriptionPlanId) {
                            case R.Xh.PREMIUM_MONTH_LEGACY:
                            case R.Xh.PREMIUM_YEAR_LEGACY:
                            case R.Xh.PREMIUM_MONTH_TIER_0:
                            case R.Xh.PREMIUM_YEAR_TIER_0:
                            case R.Xh.PREMIUM_MONTH_TIER_1:
                            case R.Xh.PREMIUM_YEAR_TIER_1:
                            case R.Xh.PREMIUM_MONTH_TIER_2:
                            case R.Xh.PREMIUM_YEAR_TIER_2:
                            case R.Xh.PREMIUM_3_MONTH_TIER_2:
                            case R.Xh.PREMIUM_6_MONTH_TIER_2:
                                return (0, f.Gf)(e.subscriptionPlanId, a, r, t);
                            case R.Xh.PREMIUM_3_MONTH_GUILD:
                            case R.Xh.PREMIUM_6_MONTH_GUILD:
                                return O.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity,
                                    intervalCount: n.intervalCount
                                });
                            case R.Xh.PREMIUM_MONTH_GUILD:
                                return O.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                });
                            case R.Xh.PREMIUM_YEAR_GUILD:
                                return O.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
                                    num: e.quantity
                                })
                        }
                        switch (n.interval) {
                            case R.rV.MONTH:
                                return 1 === n.intervalCount ? O.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                }) : O.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
                                    planName: n.name,
                                    intervalCount: n.intervalCount
                                });
                            case R.rV.YEAR:
                                return O.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
                                    planName: n.name
                                })
                        }
                        throw new Error("Unexpected invoice plan: ".concat(e.subscriptionPlanId))
                    }(r, v, d, M);
                !0 === i && (P = (0, t.jsxs)("div", {
                    className: U().invoiceItemLabelWithIcon,
                    children: [(0, t.jsxs)("div", {
                        children: [P, " "]
                    }), (0, t.jsx)(u.Tooltip, {
                        text: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                        "aria-label": O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
                        tooltipClassName: U().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(p.Z, C(g({}, e), {
                                className: U().invoiceItemLabelIcon
                            }))
                        }
                    })]
                }));
                var L = (0, N.T4)(null != a ? a : r.amount, s),
                    A = d ? L : (0, N.og)(L, v.interval, v.intervalCount);
                return (0, t.jsx)(h.i$, {
                    label: P,
                    value: A,
                    originalAmount: r.subscriptionPlanPrice * r.quantity,
                    discounts: r.discounts,
                    interval: v.interval,
                    intervalCount: v.intervalCount,
                    currency: s,
                    className: c
                })
            }

            function B(e) {
                var n = e.label,
                    r = e.tooltipText,
                    a = e.tooltipAriaLabel;
                return (0, t.jsxs)("div", {
                    className: U().invoiceItemLabelWithIcon,
                    children: [n, (0, t.jsx)(u.Tooltip, {
                        clickableOnMobile: !0,
                        text: r,
                        "aria-label": a,
                        tooltipClassName: U().invoiceItemTooltip,
                        children: function(e) {
                            return (0, t.jsx)(p.Z, C(g({}, e), {
                                className: U().invoiceItemLabelIcon
                            }))
                        }
                    })]
                })
            }

            function Z(e) {
                var n = e.invoice,
                    r = e.isPrepaidPaymentSource,
                    a = (0, P.j)(n.invoiceItems),
                    i = a.find((function(e) {
                        return !(0, f.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    s = a.find((function(e) {
                        return (0, f.Z8)(e.subscriptionPlanId) && e.amount >= 0
                    })),
                    c = (0, o.e7)([T.Z], (function() {
                        return null != s ? T.Z.get(s.subscriptionPlanId) : null
                    })),
                    l = null != s ? s.amount : 0,
                    u = (0, N.T4)(l, n.currency),
                    I = null != c ? (0, N.og)(u, c.interval, c.intervalCount) : 0;
                return (0, t.jsxs)(t.Fragment, {
                    children: [null != i ? (0, t.jsx)(D, {
                        invoiceItem: i,
                        currency: n.currency,
                        isPrepaidPaymentSource: r
                    }) : null, 0 !== l && null != s && null != c ? (0, t.jsx)(h.R$, {
                        label: O.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: s.quantity,
                            planName: (0, f.Gf)(c.id, !1, r)
                        }),
                        value: r ? u : I
                    }) : null, (0, t.jsx)(L.Z, {
                        invoice: n
                    }), (0,
                        t.jsx)(h.KU, {}), (0, t.jsx)(h.Ji, {
                        label: (n.taxInclusive ? r ? O.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === A.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function w(e) {
                var n = e.invoice,
                    r = e.newPlan,
                    a = e.isPrepaidPaymentSource,
                    i = e.referralTrialOfferId,
                    s = (0, P.j)(n.invoiceItems),
                    c = s.find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                l()(null != c, "Expected newPlanInvoiceItem");
                var o = s.find((function(e) {
                        return !(0, f.Z8)(e.subscriptionPlanId) && e.amount < 0
                    })),
                    u = s.find((function(e) {
                        return null == e.subscriptionPlanId && null != e.discounts && e.discounts.find((function(e) {
                            return e.type === I.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION
                        }))
                    })),
                    d = j(c, I.eW.PREMIUM_TRIAL),
                    _ = c.quantity * c.subscriptionPlanPrice,
                    T = c.amount + (null != o ? o.amount : 0) - _ + (null != u ? u.amount : 0),
                    v = s.filter((function(e) {
                        return e.subscriptionPlanId === R.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_YEAR_GUILD
                    })).reduce((function(e, n) {
                        return e + n.amount
                    }), 0);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(D, {
                        invoiceItem: c,
                        currency: n.currency,
                        overrideAmount: _,
                        isPrepaidPaymentSource: a,
                        referralTrialOfferId: i
                    }), 0 === T || d ? null : (0, t.jsx)(h.R$, {
                        label: (0, t.jsx)(B, {
                            label: O.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
                                planName: (0, f.PV)(r.id) ? (0, f.aq)(r.id) : r.name
                            }),
                            tooltipText: O.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                        }),
                        value: (0, N.T4)(T, n.currency)
                    }), 0 !== v ? (0, t.jsx)(h.R$, {
                        label: (0, t.jsx)(B, {
                            label: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                            tooltipText: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
                            tooltipAriaLabel: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
                        }),
                        value: (0, N.T4)(v, n.currency)
                    }) : null, (0, t.jsx)(L.Z, {
                        invoice: n
                    }), (0, t.jsx)(h.KU, {}), (0, t.jsx)(h.Ji, {
                        label: (n.taxInclusive ? a ? O.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: n.currency === A.pKx.USD ? (0, N.T4)(n.total, n.currency) : "".concat((0, N.T4)(n.total, n.currency), "*")
                    })]
                })
            }

            function G(e) {
                var n = e.slice();
                n.sort((function(e, n) {
                    var r = (0, f.uZ)(e.subscriptionPlanId),
                        t = (0, f.uZ)(n.subscriptionPlanId);
                    return r && !t ? -1 : !r && t ? 1 : 0
                }));
                return n
            }

            function Y(e) {
                return e.filter((function(e) {
                    var n = e.subscriptionPlanId;
                    return n !== R.Xh.NONE_MONTH && n !== R.Xh.NONE_YEAR
                }))
            }

            function H(e) {
                var n = e.proratedInvoice,
                    r = e.renewalInvoice,
                    a = (0, f.dn)(n),
                    i = a.intervalType,
                    s = a.intervalCount,
                    c = (0, f.dn)(r),
                    l = c.intervalType,
                    o = c.intervalCount;
                return i !== l || s !== o || n.subscriptionPeriodEnd.getTime() === r.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)("div", {
                    className: U().subscriptionPeriodResetNotice,
                    children: O.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
                        renewalDate: n.subscriptionPeriodEnd
                    })
                })
            }

            function k(e) {
                var n = e.isUpdate,
                    r = e.currentInvoice,
                    a = e.newInvoice,
                    i = null != r ? (0, P.j)(r.invoiceItems) : null,
                    c = null != r ? (0, f.dn)(r) : null,
                    l = (0, f.dn)(a),
                    o = l.intervalType,
                    u = l.intervalCount,
                    I = null != c && (c.intervalType !== o || c.intervalCount !== u);
                return (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(h.KU, {
                        extended: !0
                    }), null != r ? (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(h.q9, {
                            children: O.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
                        }), Y(G((0, P.j)(r.invoiceItems))).map((function(e) {
                            return (0, t.jsx)(D, {
                                invoiceItem: e,
                                currency: r.currency
                            }, e.id)
                        })), (0, t.jsx)(h.KU, {
                            extended: !0
                        })]
                    }) : null, (0, t.jsx)(h.q9, {
                        children: O.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
                    }), Y(G((0, P.j)(a.invoiceItems))).map((function(e) {
                        var r = null != i && !i.some((function(n) {
                            return n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity
                        }));
                        return (0, t.jsx)(D, {
                            invoiceItem: e,
                            currency: a.currency,
                            showGuildSubscriptionAdjustmentTooltip: I && (e.subscriptionPlanId === R.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === R.Xh.PREMIUM_6_MONTH_GUILD),
                            className: s()(y({}, U().subscriptionAddedInvoiceItem, !n || r))
                        }, e.id)
                    })), (0, t.jsx)(L.Z, {
                        invoice: a
                    }), (0, t.jsx)(h.KU, {}), (0, t.jsx)(h.R$, {
                        label: O.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
                        value: (0, N.og)((0, N.T4)(a.total, a.currency), o, u),
                        className: U().subscriptionCostRow
                    })]
                })
            }

            function V(e) {
                var n, r = e.proratedInvoice,
                    a = e.renewalInvoice,
                    i = e.isTrial,
                    s = e.isUpdate,
                    c = e.overrideRenewalDate,
                    l = e.trialFooterMessageOverride,
                    o = null === (n = (0, m.N)()) || void 0 === n ? void 0 : n.subscription_trial,
                    u = (0, f.dn)(a),
                    I = u.intervalType,
                    d = u.intervalCount;
                if (i) {
                    var _ = (0, f.if)({
                            intervalType: null == o ? void 0 : o.interval,
                            intervalCount: null == o ? void 0 : o.interval_count
                        }),
                        T = (null == o ? void 0 : o.interval) === R.rV.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
                    return (0, t.jsx)(t.Fragment, {
                        children: null != l ? l : O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
                            duration: _,
                            days: T,
                            contactLink: A.EYA.CONTACT,
                            helpdeskArticle: E.Z.getArticleURL(A.BhN.PREMIUM_TRIAL)
                        })
                    })
                }
                var v = a.taxInclusive ? O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
                return (0, t.jsx)(t.Fragment, {
                    children: v.format({
                        rate: (0, N.og)((0, N.T4)(a.subtotal, a.currency), I, d),
                        renewalDate: null != c ? c : s ? null != r ? r.subscriptionPeriodEnd : a.subscriptionPeriodStart : a.subscriptionPeriodEnd,
                        contactLink: A.EYA.CONTACT,
                        helpdeskArticle: E.Z.getArticleURL(A.BhN.BILLING)
                    })
                })
            }

            function F(e) {
                var n = e.premiumSubscription,
                    r = e.proratedInvoice,
                    i = e.renewalInvoice,
                    s = e.overrideRenewalDate,
                    c = e.isUpdate,
                    l = void 0 !== c && c,
                    o = e.isTrial,
                    I = void 0 !== o && o,
                    T = e.priceOptions,
                    p = void 0 === T ? void 0 : T,
                    E = e.isPrepaidPaymentSource,
                    f = void 0 !== E && E,
                    N = e.trialFooterMessageOverride,
                    P = e.hideSubscriptionDetails,
                    m = void 0 !== P && P,
                    L = (0, _.Z)().analyticsLocations,
                    R = g({
                        subscriptionId: null == n ? void 0 : n.id,
                        renewal: !0,
                        preventFetch: !l,
                        analyticsLocatinons: L,
                        analyticsLocation: d.Z.SUBSCRIPTION_INVOICE_FOOTER
                    }, p),
                    A = x((0, M.ED)(R), 1)[0],
                    b = x(a.useState(!1), 2),
                    S = b[0],
                    y = b[1];
                return (0, t.jsxs)(t.Fragment, {
                    children: [f ? null : (0, t.jsx)(h.HE, {
                        children: (0, t.jsx)(V, {
                            proratedInvoice: r,
                            renewalInvoice: i,
                            isTrial: I,
                            isUpdate: l,
                            overrideRenewalDate: s,
                            trialFooterMessageOverride: N
                        })
                    }), !m && (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(u.Clickable, {
                            onClick: function() {
                                return y((function(e) {
                                    return !e
                                }))
                            },
                            className: U().subscriptionDetailsToggle,
                            children: [S ? O.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : O.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS, (0, t.jsx)(v.Z, {
                                direction: S ? v.Z.Directions.UP : v.Z.Directions.DOWN,
                                className: U().subscriptionDetailsToggleCaret
                            })]
                        }), S ? (0, t.jsx)(k, {
                            isUpdate: l,
                            currentInvoice: A,
                            newInvoice: i
                        }) : null]
                    })]
                })
            }

            function W(e) {
                var n = e.plan,
                    r = e.className,
                    a = e.paymentSourceId,
                    i = e.isPrepaidPaymentSource,
                    s = void 0 !== i && i,
                    c = (0, f.aS)(n.id, !1, !0, {
                        paymentSourceId: a
                    });
                return (0, t.jsx)(h.PO, {
                    className: r,
                    children: (0,
                        t.jsx)(h.R$, {
                        label: O.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
                            planName: (0, f.Gf)(n.id, !1, s)
                        }),
                        value: (0, N.T4)(c.amount, c.currency),
                        className: U().subscriptionCostRow
                    })
                })
            }

            function X(e) {
                var n = e.invoice,
                    r = e.plan,
                    a = (0, P.j)(n.invoiceItems).find((function(e) {
                        return e.subscriptionPlanId === r.id
                    }));
                l()(null != a, "newPlanInvoiceItem can not be null");
                if (r.interval === R.rV.MONTH) return (0, t.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: O.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(a.subscriptionPlanPrice, n.currency)
                    })
                });
                if (r.interval === R.rV.YEAR) return (0, t.jsx)(u.Text, {
                    variant: "text-md/normal",
                    children: O.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL.format({
                        price: (0, N.T4)(a.subscriptionPlanPrice, n.currency)
                    })
                });
                l()(!1, "Invalid interval type")
            }
        }
    }
]);