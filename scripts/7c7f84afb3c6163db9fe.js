(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79249], {
        886664: function(e, t, n) {
            ! function(e, t) {
                "use strict";
                t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;

                function n(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }

                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? n(Object(r), !0).forEach((function(t) {
                            a(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function o(e) {
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };
                    return o(e)
                }

                function a(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                }

                function c(e, t) {
                    return i(e) || u(e, t) || s(e, t) || f()
                }

                function i(e) {
                    if (Array.isArray(e)) return e
                }

                function u(e, t) {
                    var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                    if (null != n) {
                        var r, o, a = [],
                            c = !0,
                            i = !1;
                        try {
                            for (n = n.call(e); !(c = (r = n.next()).done); c = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            i = !0;
                            o = e
                        } finally {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return a
                    }
                }

                function s(e, t) {
                    if (e) {
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                    }
                }

                function l(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function f() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function p(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                var d = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

                function m() {}

                function y() {}
                y.resetWarningCache = m;
                var h = function() {
                        function e(e, t, n, r, o, a) {
                            if (a !== d) {
                                var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                c.name = "Invariant Violation";
                                throw c
                            }
                        }
                        e.isRequired = e;

                        function t() {
                            return e
                        }
                        var n = {
                            array: e,
                            bool: e,
                            func: e,
                            number: e,
                            object: e,
                            string: e,
                            symbol: e,
                            any: e,
                            arrayOf: t,
                            element: e,
                            elementType: e,
                            instanceOf: t,
                            node: e,
                            objectOf: t,
                            oneOf: t,
                            oneOfType: t,
                            shape: t,
                            exact: t,
                            checkPropTypes: y,
                            resetWarningCache: m
                        };
                        n.PropTypes = n;
                        return n
                    },
                    v = p((function(e) {
                        e.exports = h()
                    })),
                    g = function(e) {
                        var n = t.useRef(e);
                        t.useEffect((function() {
                            n.current = e
                        }), [e]);
                        return n.current
                    },
                    b = function(e) {
                        return null !== e && "object" === o(e)
                    },
                    E = function(e) {
                        return b(e) && "function" == typeof e.then
                    },
                    S = function(e) {
                        return b(e) && "function" == typeof e.elements && "function" == typeof e.createToken && "function" == typeof e.createPaymentMethod && "function" == typeof e.confirmCardPayment
                    },
                    w = "[object Object]",
                    C = function e(t, n) {
                        if (!b(t) || !b(n)) return t === n;
                        var r = Array.isArray(t);
                        if (r !== Array.isArray(n)) return !1;
                        var o = Object.prototype.toString.call(t) === w;
                        if (o !== (Object.prototype.toString.call(n) === w)) return !1;
                        if (!o && !r) return t === n;
                        var a = Object.keys(t),
                            c = Object.keys(n);
                        if (a.length !== c.length) return !1;
                        for (var i = {}, u = 0; u < a.length; u += 1) i[a[u]] = !0;
                        for (var s = 0; s < c.length; s += 1) i[c[s]] = !0;
                        var l = Object.keys(i);
                        if (l.length !== a.length) return !1;
                        var f = t,
                            p = n,
                            d = function(t) {
                                return e(f[t], p[t])
                            };
                        return l.every(d)
                    },
                    j = function(e, t, n) {
                        return b(e) ? Object.keys(e).reduce((function(o, c) {
                            var i = !b(t) || !C(e[c], t[c]);
                            if (n.includes(c)) {
                                i && console.warn("Unsupported prop change: options.".concat(c, " is not a mutable property."));
                                return o
                            }
                            return i ? r(r({}, o || {}), {}, a({}, c, e[c])) : o
                        }), null) : null
                    },
                    k = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    O = function(e) {
                        if (null === e || S(e)) return e;
                        throw new Error(k)
                    },
                    P = function(e) {
                        if (E(e)) return {
                            tag: "async",
                            stripePromise: Promise.resolve(e).then(O)
                        };
                        var t = O(e);
                        return null === t ? {
                            tag: "empty"
                        } : {
                            tag: "sync",
                            stripe: t
                        }
                    },
                    A = t.createContext(null);
                A.displayName = "ElementsContext";
                var x = function(e, t) {
                        if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e
                    },
                    _ = t.createContext(null);
                _.displayName = "CartElementContext";
                var R = function(e, t) {
                        if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e
                    },
                    T = function(e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            a = t.useMemo((function() {
                                return P(n)
                            }), [n]),
                            i = c(t.useState(null), 2),
                            u = i[0],
                            s = i[1],
                            l = c(t.useState(null), 2),
                            f = l[0],
                            p = l[1],
                            d = c(t.useState((function() {
                                return {
                                    stripe: "sync" === a.tag ? a.stripe : null,
                                    elements: "sync" === a.tag ? a.stripe.elements(r) : null
                                }
                            })), 2),
                            m = d[0],
                            y = d[1];
                        t.useEffect((function() {
                            var e = !0,
                                t = function(e) {
                                    y((function(t) {
                                        return t.stripe ? t : {
                                            stripe: e,
                                            elements: e.elements(r)
                                        }
                                    }))
                                };
                            "async" !== a.tag || m.stripe ? "sync" !== a.tag || m.stripe || t(a.stripe) : a.stripePromise.then((function(n) {
                                n && e && t(n)
                            }));
                            return function() {
                                e = !1
                            }
                        }), [a, m, r]);
                        var h = g(n);
                        t.useEffect((function() {
                            null !== h && h !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                        }), [h, n]);
                        var v = g(r);
                        t.useEffect((function() {
                            if (m.elements) {
                                var e = j(r, v, ["clientSecret", "fonts"]);
                                e && m.elements.update(e)
                            }
                        }), [r, v, m.elements]);
                        t.useEffect((function() {
                            var e = m.stripe;
                            if (e && e._registerWrapper && e.registerAppInfo) {
                                e._registerWrapper({
                                    name: "react-stripe-js",
                                    version: "2.1.2"
                                });
                                e.registerAppInfo({
                                    name: "react-stripe-js",
                                    version: "2.1.2",
                                    url: "https://stripe.com/docs/stripe-js/react"
                                })
                            }
                        }), [m.stripe]);
                        return t.createElement(A.Provider, {
                            value: m
                        }, t.createElement(_.Provider, {
                            value: {
                                cart: u,
                                setCart: s,
                                cartState: f,
                                setCartState: p
                            }
                        }, o))
                    };
                T.propTypes = {
                    stripe: v.any,
                    options: v.object
                };
                var B = function(e) {
                        var n = t.useContext(A);
                        return x(n, e)
                    },
                    L = function(e) {
                        var n = t.useContext(_);
                        return R(n, e)
                    },
                    I = function() {
                        return B("calls useElements()").elements
                    },
                    N = function() {
                        return B("calls useStripe()").stripe
                    },
                    M = function() {
                        return L("calls useCartElement()").cart
                    },
                    F = function() {
                        return L("calls useCartElementState()").cartState
                    },
                    W = function(e) {
                        return (0, e.children)(B("mounts <ElementsConsumer>"))
                    };
                W.propTypes = {
                    children: v.func.isRequired
                };
                var q = function(e, n, r) {
                        var o = !!r,
                            a = t.useRef(r);
                        t.useEffect((function() {
                            a.current = r
                        }), [r]);
                        t.useEffect((function() {
                            if (!o || !e) return function() {};
                            var t = function() {
                                a.current && a.current.apply(a, arguments)
                            };
                            e.on(n, t);
                            return function() {
                                e.off(n, t)
                            }
                        }), [o, n, e, a])
                    },
                    D = function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    },
                    U = function(e, n) {
                        var r = "".concat(D(e), "Element"),
                            o = n ? function(e) {
                                B("mounts <".concat(r, ">"));
                                L("mounts <".concat(r, ">"));
                                var n = e.id,
                                    o = e.className;
                                return t.createElement("div", {
                                    id: n,
                                    className: o
                                })
                            } : function(n) {
                                var o, a = n.id,
                                    i = n.className,
                                    u = n.options,
                                    s = void 0 === u ? {} : u,
                                    l = n.onBlur,
                                    f = n.onFocus,
                                    p = n.onReady,
                                    d = n.onChange,
                                    m = n.onEscape,
                                    y = n.onClick,
                                    h = n.onLoadError,
                                    v = n.onLoaderStart,
                                    b = n.onNetworksChange,
                                    E = n.onCheckout,
                                    S = n.onLineItemClick,
                                    w = n.onConfirm,
                                    C = n.onCancel,
                                    k = n.onShippingAddressChange,
                                    O = n.onShippingRateChange,
                                    P = B("mounts <".concat(r, ">")).elements,
                                    A = c(t.useState(null), 2),
                                    x = A[0],
                                    _ = A[1],
                                    R = t.useRef(null),
                                    T = t.useRef(null),
                                    I = L("mounts <".concat(r, ">")),
                                    N = I.setCart,
                                    M = I.setCartState;
                                q(x, "blur", l);
                                q(x, "focus", f);
                                q(x, "escape", m);
                                q(x, "click", y);
                                q(x, "loaderror", h);
                                q(x, "loaderstart", v);
                                q(x, "networkschange", b);
                                q(x, "lineitemclick", S);
                                q(x, "confirm", w);
                                q(x, "cancel", C);
                                q(x, "shippingaddresschange", k);
                                q(x, "shippingratechange", O);
                                "cart" === e ? o = function(e) {
                                    M(e);
                                    p && p(e)
                                } : p && (o = "expressCheckout" === e ? p : function() {
                                    p(x)
                                });
                                q(x, "ready", o);
                                q(x, "change", "cart" === e ? function(e) {
                                    M(e);
                                    d && d(e)
                                } : d);
                                q(x, "checkout", "cart" === e ? function(e) {
                                    M(e);
                                    E && E(e)
                                } : E);
                                t.useLayoutEffect((function() {
                                    if (null === R.current && P && null !== T.current) {
                                        var t = P.create(e, s);
                                        "cart" === e && N && N(t);
                                        R.current = t;
                                        _(t);
                                        t.mount(T.current)
                                    }
                                }), [P, s, N]);
                                var F = g(s);
                                t.useEffect((function() {
                                    if (R.current) {
                                        var e = j(s, F, ["paymentRequest"]);
                                        e && R.current.update(e)
                                    }
                                }), [s, F]);
                                t.useLayoutEffect((function() {
                                    return function() {
                                        if (R.current && "function" == typeof R.current.destroy) try {
                                            R.current.destroy();
                                            R.current = null
                                        } catch (e) {}
                                    }
                                }), []);
                                return t.createElement("div", {
                                    id: a,
                                    className: i,
                                    ref: T
                                })
                            };
                        o.propTypes = {
                            id: v.string,
                            className: v.string,
                            onChange: v.func,
                            onBlur: v.func,
                            onFocus: v.func,
                            onReady: v.func,
                            onEscape: v.func,
                            onClick: v.func,
                            onLoadError: v.func,
                            onLoaderStart: v.func,
                            onNetworksChange: v.func,
                            onCheckout: v.func,
                            onLineItemClick: v.func,
                            onConfirm: v.func,
                            onCancel: v.func,
                            onShippingAddressChange: v.func,
                            onShippingRateChange: v.func,
                            options: v.object
                        };
                        o.displayName = r;
                        o.__elementType = e;
                        return o
                    },
                    Y = "undefined" == typeof window,
                    $ = U("auBankAccount", Y),
                    H = U("card", Y),
                    J = U("cardNumber", Y),
                    V = U("cardExpiry", Y),
                    z = U("cardCvc", Y),
                    G = U("fpxBank", Y),
                    K = U("iban", Y),
                    Q = U("idealBank", Y),
                    X = U("p24Bank", Y),
                    Z = U("epsBank", Y),
                    ee = U("payment", Y),
                    te = U("expressCheckout", Y),
                    ne = U("paymentRequestButton", Y),
                    re = U("linkAuthentication", Y),
                    oe = U("address", Y),
                    ae = U("shippingAddress", Y),
                    ce = U("cart", Y),
                    ie = U("paymentMethodMessaging", Y),
                    ue = U("affirmMessage", Y),
                    se = U("afterpayClearpayMessage", Y);
                e.AddressElement = oe;
                e.AffirmMessageElement = ue;
                e.AfterpayClearpayMessageElement = se;
                e.AuBankAccountElement = $;
                e.CardCvcElement = z;
                e.CardElement = H;
                e.CardExpiryElement = V;
                e.CardNumberElement = J;
                e.CartElement = ce;
                e.Elements = T;
                e.ElementsConsumer = W;
                e.EpsBankElement = Z;
                e.ExpressCheckoutElement = te;
                e.FpxBankElement = G;
                e.IbanElement = K;
                e.IdealBankElement = Q;
                e.LinkAuthenticationElement = re;
                e.P24BankElement = X;
                e.PaymentElement = ee;
                e.PaymentMethodMessagingElement = ie;
                e.PaymentRequestButtonElement = ne;
                e.ShippingAddressElement = ae;
                e.useCartElement = M;
                e.useCartElementState = F;
                e.useElements = I;
                e.useStripe = N;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t, n(667294))
        },
        947597: (e, t) => {
            "use strict";
            ({
                value: !0
            });

            function n(e) {
                n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                return n(e)
            }
            var r, o = "https://js.stripe.com/v3",
                a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                c = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
                i = null,
                u = function(e) {
                    if (null !== i) return i;
                    i = new Promise((function(t, n) {
                        if ("undefined" != typeof window && "undefined" != typeof document) {
                            window.Stripe && e && console.warn(c);
                            if (window.Stripe) t(window.Stripe);
                            else try {
                                var r = function() {
                                    for (var e = document.querySelectorAll('script[src^="'.concat(o, '"]')), t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        if (a.test(n.src)) return n
                                    }
                                    return null
                                }();
                                r && e ? console.warn(c) : r || (r = function(e) {
                                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                                        n = document.createElement("script");
                                    n.src = "".concat(o).concat(t);
                                    var r = document.head || document.body;
                                    if (!r) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                                    r.appendChild(n);
                                    return n
                                }(e));
                                r.addEventListener("load", (function() {
                                    window.Stripe ? t(window.Stripe) : n(new Error("Stripe.js not available"))
                                }));
                                r.addEventListener("error", (function() {
                                    n(new Error("Failed to load Stripe.js"))
                                }))
                            } catch (e) {
                                n(e);
                                return
                            }
                        } else t(null)
                    }));
                    return i
                },
                s = function(e, t, n) {
                    if (null === e) return null;
                    var r = e.apply(void 0, t);
                    ! function(e, t) {
                        e && e._registerWrapper && e._registerWrapper({
                            name: "stripe-js",
                            version: "2.0.0",
                            startTime: t
                        })
                    }(r, n);
                    return r
                },
                l = function(e) {
                    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== n(e)) throw new Error(t);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw new Error(t)
                },
                f = !1,
                p = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    f = !0;
                    var o = Date.now();
                    return u(r).then((function(e) {
                        return s(e, t, o)
                    }))
                };
            p.setLoadParameters = function(e) {
                if (f && r) {
                    var t = l(e);
                    if (Object.keys(t).reduce((function(t, n) {
                            var o;
                            return t && e[n] === (null === (o = r) || void 0 === o ? void 0 : o[n])
                        }), !0)) return
                }
                if (f) throw new Error("You cannot change load parameters after calling loadStripe");
                r = l(e)
            };
            t.loadStripe = p
        },
        797894: (e, t, n) => {
            e.exports = n(947597)
        }
    }
]);