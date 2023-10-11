"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84501], {
        184501: (e, n, t) => {
            t.r(n);
            t.d(n, {
                AddPaymentModalOld: () => oe,
                default: () => ue
            });
            var r = t(785893),
                s = t(667294),
                a = t(886664),
                i = t(294184),
                o = t.n(i),
                l = t(202351),
                u = t(304548),
                c = t(744564),
                d = t(673679),
                p = t(872589),
                f = t(933599),
                h = t(711013),
                A = t(782786),
                y = t(83471),
                S = t(393001),
                P = t(615796),
                E = t(856281),
                b = t(458823),
                g = t(669426),
                m = t(107364),
                v = t(120415),
                C = t(799105),
                N = t(100436),
                T = t(842257),
                _ = t(773262),
                O = t(64089),
                R = t(387652),
                I = t(608452),
                M = t(2590),
                B = t(473708),
                Y = t(241910),
                D = t.n(Y),
                x = t(3066),
                k = t.n(x);

            function Z(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function j(e, n, t, r, s, a, i) {
                try {
                    var o = e[a](i),
                        l = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? n(l) : Promise.resolve(l).then(r, s)
            }

            function w(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, s) {
                        var a = e.apply(n, t);

                        function i(e) {
                            j(a, r, s, i, o, "next", e)
                        }

                        function o(e) {
                            j(a, r, s, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function F(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function L(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function Q(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function H(e) {
                H = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return H(e)
            }

            function U(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        Q(e, n, t[n])
                    }))
                }
                return e
            }

            function G(e, n) {
                return !n || "object" !== W(n) && "function" != typeof n ? Z(e) : n
            }

            function V(e, n) {
                V = Object.setPrototypeOf || function(e, n) {
                    e.__proto__ = n;
                    return e
                };
                return V(e, n)
            }
            var W = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function z(e) {
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
                    var t, r = H(e);
                    if (n) {
                        var s = H(this).constructor;
                        t = Reflect.construct(r, arguments, s)
                    } else t = r.apply(this, arguments);
                    return G(this, t)
                }
            }
            var q, X = function(e, n) {
                var t, r, s, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function o(a) {
                    return function(o) {
                        return function(a) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (s = 2 & a[0] ? r.return : a[0] ? r.throw || ((s = r.return) && s.call(r),
                                        0) : r.next) && !(s = s.call(r, a[1])).done) return s;
                                (r = 0, s) && (a = [2 & a[0], s.value]);
                                switch (a[0]) {
                                    case 0:
                                    case 1:
                                        s = a;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: a[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = a[1];
                                        a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = i.trys, s = s.length > 0 && s[s.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < s[1]) {
                                            i.label = s[1];
                                            s = a;
                                            break
                                        }
                                        if (s && i.label < s[2]) {
                                            i.label = s[2];
                                            i.ops.push(a);
                                            break
                                        }
                                        s[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                a = n.call(e, i)
                            } catch (e) {
                                a = [6, e];
                                r = 0
                            } finally {
                                t = s = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, o])
                    }
                }
            };
            ! function(e) {
                e.PAYMENT_TYPE = "payment_type";
                e.CARD_INFO = "card_info";
                e.SOFORT_INFO = "sofort_info";
                e.ADDRESS = "billing_address";
                e.PAYMENT_REQUEST_INFO = "payment_request_info";
                e.PAYPAL = "paypal";
                e.PRZELEWY24_INFO = "przelewy24_info"
            }(q || (q = {}));

            function K(e) {
                switch (e) {
                    case q.PAYMENT_TYPE:
                        return B.Z.Messages.PAYMENT_SOURCE_TYPE;
                    case q.PAYMENT_REQUEST_INFO:
                        return B.Z.Messages.BILLING_STEP_PAYMENT_INFO;
                    case q.CARD_INFO:
                        return B.Z.Messages.PAYMENT_SOURCE_INFORMATION;
                    case q.ADDRESS:
                        return B.Z.Messages.BILLING_ADDRESS;
                    case q.PAYPAL:
                        return B.Z.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
                    case q.SOFORT_INFO:
                        return B.Z.Messages.PAYMENT_SOURCE_SOFORT_INFO;
                    case q.PRZELEWY24_INFO:
                        return B.Z.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
                }
            }
            var J = [q.PAYMENT_TYPE, q.CARD_INFO, q.ADDRESS],
                $ = [q.PAYMENT_TYPE, q.SOFORT_INFO, q.ADDRESS],
                ee = [q.PAYMENT_TYPE, q.PAYPAL, q.ADDRESS],
                ne = [q.PAYMENT_TYPE, q.PAYMENT_REQUEST_INFO],
                te = [q.PAYMENT_TYPE, q.ADDRESS],
                re = [q.PAYMENT_TYPE, q.PRZELEWY24_INFO, q.ADDRESS],
                se = [q.PAYMENT_TYPE, q.ADDRESS];

            function ae(e) {
                return e.hasCardError() ? q.CARD_INFO : e.hasAddressError() ? q.ADDRESS : null
            }
            var ie = function(e) {
                    ! function(e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && V(e, n)
                    }(t, e);
                    var n = z(t);

                    function t() {
                        F(this, t);
                        var e, s;
                        (e = n.apply(this, arguments)).state = {
                            type: M.HeQ.CARD,
                            step: q.PAYMENT_TYPE,
                            steps: J,
                            errorStep: null,
                            stripeToken: null,
                            stripe: null,
                            tokenSubmitting: !1,
                            paymentDetails: {
                                p24Bank: ""
                            }
                        };
                        e.STEPS_DATA = (Q(s = {}, q.PRZELEWY24_INFO, {
                            renderBody: function() {
                                var n = e.props,
                                    t = n.error,
                                    s = n.billingAddressInfo;
                                return (0, r.jsx)(O.w, {
                                    billingAddressInfo: s,
                                    onDetailsChange: e.handlePaymentDetailsChange,
                                    onP24BankChange: e.handleP24BankChange,
                                    p24BankValue: e.state.paymentDetails.p24Bank,
                                    error: t
                                })
                            },
                            renderNextButton: function() {
                                var n, t = e.props.billingAddressInfo,
                                    s = null === (n = e.state.paymentDetails) || void 0 === n ? void 0 : n.p24Bank;
                                return (0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: "" === t.name || "" === t.email || "" === s,
                                    onClick: e.handleNextClick,
                                    children: B.Z.Messages.NEXT
                                })
                            }
                        }), Q(s, q.SOFORT_INFO, {
                            renderBody: function() {
                                var n = e.props,
                                    t = n.error,
                                    s = n.billingAddressInfo;
                                return (0, r.jsx)(O.Z, {
                                    billingAddressInfo: s,
                                    onChange: e.handlePaymentDetailsChange,
                                    error: t
                                })
                            },
                            renderNextButton: function() {
                                var n = e.props.billingAddressInfo;
                                return (0, r.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: "" === n.name || "" === n.email,
                                    onClick: e.handleNextClick,
                                    children: B.Z.Messages.NEXT
                                })
                            }
                        }), Q(s, q.PAYMENT_TYPE, {
                            renderBody: function() {
                                return (0, r.jsx)(T.Z, {
                                    allowStripeRequestPayments: !v.FB,
                                    onChooseType: e.handleChooseType,
                                    onStripePaymentMethodReceived: e.handleStripePaymentMethod
                                })
                            }
                        }), Q(s, q.PAYMENT_REQUEST_INFO, {
                            renderBody: function() {
                                var n = e.props,
                                    t = n.stripePaymentMethod,
                                    s = n.submitting;
                                return (0, r.jsx)(I.k, {
                                    stripePaymentMethod: t,
                                    submitting: s
                                })
                            },
                            renderNextButton: function() {
                                var n = e.props.submitting;
                                return (0, r.jsx)(u.Button, {
                                    submitting: n,
                                    look: u.Button.Looks.OUTLINED,
                                    disabled: !0
                                })
                            }
                        }), Q(s, q.CARD_INFO, {
                            renderBody: function() {
                                var n = e.props.error,
                                    t = null != n && (null == n.code || ae(n) === q.CARD_INFO);
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [t ? (0, r.jsx)(u.FormErrorBlock, {
                                        className: D().errorBlock,
                                        children: B.Z.Messages.BILLING_ERROR_SECTION_CARD
                                    }) : null, (0, r.jsx)(N.Z, {
                                        onCardInfoChange: e.handleCardInfoChange,
                                        error: t ? n : null
                                    })]
                                })
                            },
                            renderNextButton: function() {
                                var n = e.props.isCreditCardInfoValid,
                                    t = e.state.tokenSubmitting;
                                return (0, r.jsx)(a.ElementsConsumer, {
                                    children: function(s) {
                                        var a = s.elements;
                                        return (0, r.jsx)(u.Button, {
                                            disabled: !n,
                                            onClick: function() {
                                                e.createToken(a)
                                            },
                                            type: "submit",
                                            submitting: t,
                                            children: B.Z.Messages.NEXT
                                        })
                                    }
                                })
                            }
                        }), Q(s, q.ADDRESS, {
                            renderBody: function() {
                                var n = e.props,
                                    t = n.billingAddressInfo,
                                    s = n.error,
                                    a = e.state.type;
                                return (0, r.jsx)(R.P, {
                                    billingAddressInfo: t,
                                    billingError: s,
                                    onBillingAddressChange: e.handleBillingAddressChange,
                                    paymentSourceType: a
                                })
                            },
                            renderNextButton: function() {
                                var n = e.props,
                                    t = n.submitting,
                                    s = n.isBillingAddressInfoValid,
                                    a = n.isAuthenticating;
                                return (0, r.jsx)(u.Button, {
                                    type: "submit",
                                    submitting: t,
                                    disabled: !s || a,
                                    onClick: e.handleSave,
                                    children: B.Z.Messages.SAVE
                                })
                            }
                        }), Q(s, q.PAYPAL, {
                            renderBody: function() {
                                return (0, r.jsx)(_.Z, {})
                            },
                            renderNextButton: function() {
                                var n = e.props,
                                    t = n.submitting,
                                    s = n.braintreeNonce,
                                    a = null != n.braintreeEmail && null != s;
                                return (0, r.jsx)(u.Button, {
                                    submitting: t,
                                    color: a ? u.Button.Colors.BRAND : u.Button.Colors.PRIMARY,
                                    onClick: a ? e.handleNextClick : e.handleReopenPaypal,
                                    children: a ? B.Z.Messages.NEXT : B.Z.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                                })
                            }
                        }), s);
                        e.handleChooseType = function(n) {
                            var t = e.getSteps(n),
                                r = e.getNextStep(t);
                            null != r && e.setState({
                                type: n,
                                steps: t,
                                step: r
                            })
                        };
                        e.handleCardInfoChange = function(e, n) {
                            c.Z.wait((function() {
                                return (0, f.sn)(e, n)
                            }))
                        };
                        e.handlePaymentDetailsChange = function(n) {
                            var t = e.props.billingAddressInfo;
                            t.name = n.name;
                            c.Z.wait((function() {
                                return (0, f.Ow)(U({}, t, n), !1)
                            }))
                        };
                        e.handleP24BankChange = function(n) {
                            e.setState({
                                paymentDetails: {
                                    p24Bank: n
                                }
                            })
                        };
                        e.handleBillingAddressChange = function(n, t) {
                            var r = e.props.billingAddressInfo;
                            c.Z.wait((function() {
                                return (0, f.Ow)(U({}, r, n), t)
                            }))
                        };
                        e.handleBackClick = function() {
                            var n = e.getPreviousStep();
                            if (null != n) {
                                n === q.PAYMENT_TYPE && (0, f.fw)();
                                e.setState({
                                    step: n
                                })
                            }
                        };
                        e.handleNextClick = function() {
                            var n = e.getNextStep();
                            null != n && e.setState({
                                step: n
                            })
                        };
                        e.handleClose = function() {
                            (0, f.fw)();
                            e.props.onClose()
                        };
                        e.handleStripePaymentMethod = function(n) {
                            (0, f.Xt)(n);
                            null != n ? e.handleStripePaymentRequestSave(n) : e.handleBackClick()
                        };
                        var i, o = Z(e);
                        e.handleStripePaymentRequestSave = (i = w((function(e) {
                            var n, t;
                            return X(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        r.trys.push([0, 2, , 3]);
                                        return [4, d.i6(e, void 0, o.props.analyticsLocation)];
                                    case 1:
                                        n = r.sent();
                                        null == (t = o.props.onAddPaymentSource) || t(n);
                                        o.handleClose();
                                        return [3, 3];
                                    case 2:
                                        r.sent();
                                        return [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        })), function(e) {
                            return i.apply(this, arguments)
                        });
                        var l = Z(e);
                        e.createToken = function() {
                            var e = w((function(e) {
                                var n, t;
                                return X(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            n = l.state.stripe;
                                            l.setState({
                                                tokenSubmitting: !0
                                            });
                                            r.label = 1;
                                        case 1:
                                            r.trys.push([1, 3, 4, 5]);
                                            return [4, d.qv(n, e)];
                                        case 2:
                                            t = r.sent();
                                            l.setState({
                                                stripeToken: t
                                            });
                                            l.handleNextClick();
                                            return [3, 5];
                                        case 3:
                                            r.sent();
                                            return [3, 5];
                                        case 4:
                                            l.setState({
                                                tokenSubmitting: !1
                                            });
                                            return [7];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                        e.handleSave = function() {
                            var n = e.state.type;
                            switch (n) {
                                case M.HeQ.PAYPAL:
                                    return e.handlePaypalSave();
                                case M.HeQ.CARD:
                                    return e.handleCardSave();
                                case M.HeQ.SOFORT:
                                    return e.handleSofortSave();
                                case M.HeQ.GIROPAY:
                                    return e.handleGiropaySave();
                                case M.HeQ.PRZELEWY24:
                                    return e.handlePrzelewy24Save();
                                case M.HeQ.PAYSAFE_CARD:
                                case M.HeQ.GRABPAY_MY:
                                    return e.handleAdyenPrepaidPaymentMethodSave(n);
                                default:
                                    d.SQ("user used a unsupported payment type: ".concat(n))
                            }
                        };
                        var p = Z(e);
                        e.handlePrzelewy24Save = w((function() {
                            var e, n, t, r, s, a, i, o, l;
                            return X(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        e = p.props, n = e.billingAddressInfo, t = e.isBillingAddressInfoValid, r = e.onAddPaymentSource, s = e.analyticsLocation;
                                        a = p.state, i = a.stripe, o = a.paymentDetails;
                                        if (!t) return [2];
                                        u.label = 1;
                                    case 1:
                                        u.trys.push([1, 3, , 4]);
                                        return [4, d.pF(i, o, n, s)];
                                    case 2:
                                        l = u.sent();
                                        null == r || r(l);
                                        p.handleClose();
                                        return [3, 4];
                                    case 3:
                                        u.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var h = Z(e);
                        e.handleSofortSave = w((function() {
                            var e, n, t, r, s, a, i;
                            return X(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        e = h.props, n = e.billingAddressInfo,
                                            t = e.isBillingAddressInfoValid, r = e.onAddPaymentSource, s = e.analyticsLocation;
                                        a = h.state.stripe;
                                        if (!t) return [2];
                                        o.label = 1;
                                    case 1:
                                        o.trys.push([1, 3, , 4]);
                                        return [4, d.av(a, n, s)];
                                    case 2:
                                        i = o.sent();
                                        null == r || r(i);
                                        h.handleClose();
                                        return [3, 4];
                                    case 3:
                                        o.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var A = Z(e);
                        e.handleCardSave = w((function() {
                            var e, n, t, r, s, a, i, o, l, u;
                            return X(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        e = A.props, n = e.billingAddressInfo, t = e.isCreditCardInfoValid, r = e.isBillingAddressInfoValid, s = e.onAddPaymentSource, a = e.analyticsLocation;
                                        i = A.state, o = i.stripe, l = i.stripeToken;
                                        if (!t || !r) return [2];
                                        c.label = 1;
                                    case 1:
                                        c.trys.push([1, 3, , 4]);
                                        return [4, d.f0(o, l, n, a)];
                                    case 2:
                                        u = c.sent();
                                        null == s || s(u);
                                        A.handleClose();
                                        return [3, 4];
                                    case 3:
                                        c.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var y = Z(e);
                        e.handlePaypalSave = w((function() {
                            var e, n, t, r, s, a, i;
                            return X(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        e = y.props, n = e.braintreeEmail, t = e.braintreeNonce, r = e.billingAddressInfo, s = e.onAddPaymentSource, a = e.analyticsLocation;
                                        if (null == n || null == t) return [3, 4];
                                        o.label = 1;
                                    case 1:
                                        o.trys.push([1, 3, , 4]);
                                        return [4, d.lP(t, r, a)];
                                    case 2:
                                        i = o.sent();
                                        null == s || s(i);
                                        y.handleClose();
                                        return [3, 4];
                                    case 3:
                                        o.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        var S = Z(e);
                        e.handleAdyenPrepaidPaymentMethodSave = function() {
                            var e = w((function(e) {
                                var n, t, r, s, a, i;
                                return X(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            n = S.props, t = n.billingAddressInfo, r = n.isBillingAddressInfoValid, s = n.onAddPaymentSource, a = n.analyticsLocation;
                                            if (!r) return [2];
                                            o.label = 1;
                                        case 1:
                                            o.trys.push([1, 3, , 4]);
                                            return [4, d.sF(t, e, a)];
                                        case 2:
                                            i = o.sent();
                                            null == s || s(i);
                                            S.handleClose();
                                            return [3, 4];
                                        case 3:
                                            o.sent();
                                            return [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                        var P = Z(e);
                        e.handleGiropaySave = w((function() {
                            var e, n, t, r, s, a, i;
                            return X(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        e = P.props, n = e.billingAddressInfo, t = e.isBillingAddressInfoValid, r = e.onAddPaymentSource, s = e.analyticsLocation;
                                        a = P.state.stripe;
                                        if (!t) return [2];
                                        o.label = 1;
                                    case 1:
                                        o.trys.push([1, 3, , 4]);
                                        return [4, d.GV(a, n, M.HeQ.GIROPAY, s)];
                                    case 2:
                                        i = o.sent();
                                        null == r || r(i);
                                        P.handleClose();
                                        return [3, 4];
                                    case 3:
                                        o.sent();
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }));
                        return e
                    }
                    var s = t.prototype;
                    s.componentDidMount = function() {
                        var e = this;
                        return w((function() {
                            var n;
                            return X(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        p.eI();
                                        return [4, (0, C.d2)()];
                                    case 1:
                                        n = t.sent();
                                        e.setState({
                                            stripe: n
                                        });
                                        return [2]
                                }
                            }))
                        }))()
                    };
                    s.componentWillUnmount = function() {
                        c.Z.wait((function() {
                            return p.gy()
                        }));
                        (0, f.tt)()
                    };
                    s.getSteps = function(e) {
                        switch (null != e ? e : this.state.type) {
                            case M.HeQ.PAYMENT_REQUEST:
                                return ne;
                            case M.HeQ.PAYPAL:
                                return ee;
                            case M.HeQ.SOFORT:
                                return $;
                            case M.HeQ.GIROPAY:
                                return te;
                            case M.HeQ.PRZELEWY24:
                                return re;
                            case M.HeQ.PAYSAFE_CARD:
                            case M.HeQ.GCASH:
                            case M.HeQ.GRABPAY_MY:
                            case M.HeQ.MOMO_WALLET:
                            case M.HeQ.KAKAOPAY:
                            case M.HeQ.GOPAY_WALLET:
                                return se;
                            default:
                                return J
                        }
                    };
                    s.getNextStep = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
                            n = this.state.step,
                            t = e.indexOf(n);
                        return e[t + 1]
                    };
                    s.getPreviousStep = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
                            n = this.state.step,
                            t = e.indexOf(n);
                        return e[t - 1]
                    };
                    s.preventDefault = function(e) {
                        e.preventDefault()
                    };
                    s.handleReopenPaypal = function() {
                        p.i0()
                    };
                    s.renderGenericError = function() {
                        var e = this.props.error;
                        return null == e || null != ae(e) ? null : (0, r.jsx)(u.FormErrorBlock, {
                            className: D().errorBlock,
                            children: e.message
                        })
                    };
                    s.renderFooter = function() {
                        var e = this.stepData;
                        return null == e.renderNextButton ? null : (0, r.jsx)(u.ModalFooter, {
                            children: (0, r.jsxs)(m.Z, {
                                justify: m.Z.Justify.BETWEEN,
                                children: [(0, r.jsx)(u.Button, {
                                    onClick: this.handleBackClick,
                                    color: u.Button.Colors.PRIMARY,
                                    look: u.Button.Looks.LINK,
                                    size: u.Button.Sizes.MIN,
                                    children: B.Z.Messages.BACK
                                }), e.renderNextButton()]
                            })
                        })
                    };
                    s.render = function() {
                        var e = this.state,
                            n = e.step,
                            t = e.steps,
                            s = this.props.transitionState,
                            a = t.map((function(e) {
                                return {
                                    id: e,
                                    label: K(e)
                                }
                            }));
                        return (0, r.jsx)(h.Z, {
                            stripe: this.state.stripe,
                            children: (0, r.jsx)(u.ModalRoot, {
                                transitionState: s,
                                size: u.ModalSize.SMALL,
                                className: D().modal,
                                "aria-label": B.Z.Messages.PAYMENT_SOURCES_ADD,
                                children: (0, r.jsxs)("form", {
                                    className: D().form,
                                    onSubmit: this.preventDefault,
                                    children: [(0, r.jsxs)(u.ModalHeader, {
                                        direction: m.Z.Direction.VERTICAL,
                                        align: m.Z.Align.STRETCH,
                                        separator: !1,
                                        children: [(0, r.jsxs)(m.Z, {
                                            className: D().modalTitle,
                                            justify: m.Z.Justify.BETWEEN,
                                            align: m.Z.Align.CENTER,
                                            children: [(0, r.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H4,
                                                children: B.Z.Messages.PAYMENT_SOURCES_ADD
                                            }), (0, r.jsx)(u.ModalCloseButton, {
                                                onClick: this.handleClose
                                            })]
                                        }), this.renderGenericError(), (0, r.jsx)(g.Z, {
                                            breadcrumbs: a,
                                            activeId: n
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: D().divider
                                    }), (0, r.jsx)(u.Sequencer, {
                                        fillParent: !0,
                                        className: D().sequencer,
                                        step: n,
                                        steps: t,
                                        children: (0, r.jsx)(u.ModalContent, {
                                            className: D().content,
                                            children: this.stepData.renderBody()
                                        })
                                    }), this.renderFooter()]
                                })
                            })
                        })
                    };
                    t.getDerivedStateFromProps = function(e, n) {
                        var t = e.error,
                            r = n.errorStep;
                        if (null == t) return null == r ? null : {
                            errorStep: null
                        };
                        var s = ae(t);
                        return null != s && s !== n.errorStep ? {
                            step: s,
                            errorStep: s
                        } : null
                    };
                    ! function(e, n, t) {
                        n && L(e.prototype, n);
                        t && L(e, t)
                    }(t, [{
                        key: "stepData",
                        get: function() {
                            var e = this.state.step,
                                n = this.STEPS_DATA[e];
                            if (null == n) throw new Error("Invalid step ".concat(e));
                            return n
                        }
                    }]);
                    return t
                }(s.PureComponent),
                oe = l.ZP.connectStores([E.Z, P.Z, b.Z], (function() {
                    return {
                        braintreeEmail: E.Z.braintreeEmail,
                        braintreeNonce: E.Z.braintreeNonce,
                        stripePaymentMethod: E.Z.stripePaymentMethod,
                        creditCardInfo: E.Z.getCreditCardInfo(),
                        isCreditCardInfoValid: E.Z.isCardInfoValid,
                        billingAddressInfo: E.Z.getBillingAddressInfo(),
                        isBillingAddressInfoValid: E.Z.isBillingAddressInfoValid,
                        error: E.Z.error,
                        popupCallbackCalled: E.Z.popupCallbackCalled,
                        submitting: P.Z.isBusy,
                        isAuthenticating: b.Z.isAwaitingAuthentication
                    }
                }))(ie);

            function le(e) {
                var n = e.transitionState,
                    t = e.analyticsLocation,
                    s = e.onClose,
                    a = e.onAddPaymentSource,
                    i = (0, S.fL)(),
                    l = (0, S.vP)({
                        paymentModalArgs: i,
                        initialStep: y.h8.PAYMENT_TYPE,
                        prependSteps: [],
                        appendSteps: [],
                        onReturn: function() {
                            s()
                        },
                        onComplete: function(e, n) {
                            null == a || a(n);
                            s()
                        },
                        onStepChange: function() {},
                        header: (0, r.jsxs)("div", {
                            className: o()(D().modalTitle, k().flex, k().justifyBetween, k().alignCenter),
                            children: [(0, r.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H4,
                                children: B.Z.Messages.PAYMENT_SOURCES_ADD
                            }), (0, r.jsx)(u.ModalCloseButton, {
                                onClick: s
                            })]
                        }),
                        analyticsLocation: t,
                        hideBreadcrumbs: !0
                    });
                return (0, r.jsx)(u.ModalRoot, {
                    transitionState: n,
                    size: u.ModalSize.SMALL,
                    className: D().modal,
                    "aria-label": B.Z.Messages.PAYMENT_SOURCES_ADD,
                    children: (0, r.jsx)("form", {
                        className: D().form,
                        onSubmit: function(e) {
                            e.preventDefault()
                        },
                        children: l
                    })
                })
            }

            function ue(e) {
                return (0, r.jsx)(A.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, r.jsx)(le, U({}, e))
                })
            }
        }
    }
]);