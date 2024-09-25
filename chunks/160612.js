!(function (e, r) {
    r(t, n(470079));
})(0, function (e, t) {
    function n(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? n(Object(r), !0).forEach(function (t) {
                      a(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                  : n(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
        }
        return e;
    }
    function i(e) {
        return (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                  })(e);
    }
    function a(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n),
            e
        );
    }
    function o(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && (i[n] = e[n]);
        return i;
    }
    function s(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = o(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) {
                if (((n = a[r]), !(t.indexOf(n) >= 0))) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
        }
        return i;
    }
    function l(e, t) {
        return u(e) || c(e, t) || d(e, t) || E();
    }
    function u(e) {
        if (Array.isArray(e)) return e;
    }
    function c(e, t) {
        var n,
            r,
            i = e && (('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']);
        if (null != i) {
            var a = [],
                o = !0,
                s = !1;
            try {
                for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
            } catch (e) {
                (s = !0), (r = e);
            } finally {
                try {
                    !o && null != i.return && i.return();
                } finally {
                    if (s) throw r;
                }
            }
            return a;
        }
    }
    function d(e, t) {
        if (e) {
            if ('string' == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t);
        }
    }
    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function E() {
        throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function f(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var h,
        p,
        m,
        I,
        T = { exports: {} };
    function g() {
        return p ? h : ((p = 1), (h = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'));
    }
    function S() {
        if (I) return m;
        I = 1;
        var e = g();
        function t() {}
        function n() {}
        return (
            (n.resetWarningCache = t),
            (m = function () {
                function r(t, n, r, i, a, o) {
                    if (o !== e) {
                        var s = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                        throw ((s.name = 'Invariant Violation'), s);
                    }
                }
                function i() {
                    return r;
                }
                r.isRequired = r;
                var a = {
                    array: r,
                    bool: r,
                    func: r,
                    number: r,
                    object: r,
                    string: r,
                    symbol: r,
                    any: r,
                    arrayOf: i,
                    element: r,
                    elementType: r,
                    instanceOf: i,
                    node: r,
                    objectOf: i,
                    oneOf: i,
                    oneOfType: i,
                    shape: i,
                    exact: i,
                    checkPropTypes: n,
                    resetWarningCache: t
                };
                return (a.PropTypes = a), a;
            })
        );
    }
    T.exports = S()();
    var A = f(T.exports),
        v = function (e, n, r) {
            var i = !!r,
                a = t.useRef(r);
            t.useEffect(
                function () {
                    a.current = r;
                },
                [r]
            ),
                t.useEffect(
                    function () {
                        if (!i || !e) return function () {};
                        var t = function () {
                            a.current && a.current.apply(a, arguments);
                        };
                        return (
                            e.on(n, t),
                            function () {
                                e.off(n, t);
                            }
                        );
                    },
                    [i, n, e, a]
                );
        },
        N = function (e) {
            var n = t.useRef(e);
            return (
                t.useEffect(
                    function () {
                        n.current = e;
                    },
                    [e]
                ),
                n.current
            );
        },
        O = function (e) {
            return null !== e && 'object' === i(e);
        },
        R = function (e) {
            return O(e) && 'function' == typeof e.then;
        },
        C = function (e) {
            return O(e) && 'function' == typeof e.elements && 'function' == typeof e.createToken && 'function' == typeof e.createPaymentMethod && 'function' == typeof e.confirmCardPayment;
        },
        y = '[object Object]',
        b = function e(t, n) {
            if (!O(t) || !O(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === y;
            if (i !== (Object.prototype.toString.call(n) === y)) return !1;
            if (!i && !r) return t === n;
            var a = Object.keys(t),
                o = Object.keys(n);
            if (a.length !== o.length) return !1;
            for (var s = {}, l = 0; l < a.length; l += 1) s[a[l]] = !0;
            for (var u = 0; u < o.length; u += 1) s[o[u]] = !0;
            var c = Object.keys(s);
            if (c.length !== a.length) return !1;
            var d = t,
                _ = n,
                E = function (t) {
                    return e(d[t], _[t]);
                };
            return c.every(E);
        },
        L = function (e, t, n) {
            return O(e)
                ? Object.keys(e).reduce(function (i, o) {
                      var s = !O(t) || !b(e[o], t[o]);
                      return n.includes(o) ? (s && console.warn('Unsupported prop change: options.'.concat(o, ' is not a mutable property.')), i) : s ? r(r({}, i || {}), {}, a({}, o, e[o])) : i;
                  }, null)
                : null;
        },
        D = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        M = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
            if (null === e || C(e)) return e;
            throw Error(t);
        },
        P = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
            if (R(e))
                return {
                    tag: 'async',
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return M(e, t);
                    })
                };
            var n = M(e, t);
            return null === n
                ? { tag: 'empty' }
                : {
                      tag: 'sync',
                      stripe: n
                  };
        },
        U = function (e) {
            if (!!e && !!e._registerWrapper && !!e.registerAppInfo)
                e._registerWrapper({
                    name: 'react-stripe-js',
                    version: '2.7.0'
                }),
                    e.registerAppInfo({
                        name: 'react-stripe-js',
                        version: '2.7.0',
                        url: 'https://stripe.com/docs/stripe-js/react'
                    });
        },
        w = t.createContext(null);
    w.displayName = 'ElementsContext';
    var x = function (e, t) {
            if (!e) throw Error('Could not find Elements context; You need to wrap the part of your app that '.concat(t, ' in an <Elements> provider.'));
            return e;
        },
        G = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return P(n);
                    },
                    [n]
                ),
                o = l(
                    t.useState(function () {
                        return {
                            stripe: 'sync' === a.tag ? a.stripe : null,
                            elements: 'sync' === a.tag ? a.stripe.elements(r) : null
                        };
                    }),
                    2
                ),
                s = o[0],
                u = o[1];
            t.useEffect(
                function () {
                    var e = !0,
                        t = function (e) {
                            u(function (t) {
                                return t.stripe
                                    ? t
                                    : {
                                          stripe: e,
                                          elements: e.elements(r)
                                      };
                            });
                        };
                    return (
                        'async' !== a.tag || s.stripe
                            ? 'sync' === a.tag && !s.stripe && t(a.stripe)
                            : a.stripePromise.then(function (n) {
                                  n && e && t(n);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, s, r]
            );
            var c = N(n);
            t.useEffect(
                function () {
                    null !== c && c !== n && console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
                },
                [c, n]
            );
            var d = N(r);
            return (
                t.useEffect(
                    function () {
                        if (!!s.elements) {
                            var e = L(r, d, ['clientSecret', 'fonts']);
                            e && s.elements.update(e);
                        }
                    },
                    [r, d, s.elements]
                ),
                t.useEffect(
                    function () {
                        U(s.stripe);
                    },
                    [s.stripe]
                ),
                t.createElement(w.Provider, { value: s }, i)
            );
        };
    G.propTypes = {
        stripe: A.any,
        options: A.object
    };
    var k = function (e) {
            return x(t.useContext(w), e);
        },
        B = function () {
            return k('calls useElements()').elements;
        },
        F = function (e) {
            return (0, e.children)(k('mounts <ElementsConsumer>'));
        };
    F.propTypes = { children: A.func.isRequired };
    var Z = ['on', 'session'],
        V = t.createContext(null);
    V.displayName = 'CustomCheckoutSdkContext';
    var H = function (e, t) {
            if (!e) throw Error('Could not find CustomCheckoutProvider context; You need to wrap the part of your app that '.concat(t, ' in an <CustomCheckoutProvider> provider.'));
            return e;
        },
        Y = t.createContext(null);
    Y.displayName = 'CustomCheckoutContext';
    var j = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = s(e, Z);
            return t ? r(r({}, n), t) : r(r({}, n), e.session());
        },
        W = 'Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        K = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return P(n, W);
                    },
                    [n]
                ),
                o = l(t.useState(null), 2),
                s = o[0],
                u = o[1],
                c = l(
                    t.useState(function () {
                        return {
                            stripe: 'sync' === a.tag ? a.stripe : null,
                            customCheckoutSdk: null
                        };
                    }),
                    2
                ),
                d = c[0],
                _ = c[1],
                E = function (e, t) {
                    _(function (n) {
                        return n.stripe && n.customCheckoutSdk
                            ? n
                            : {
                                  stripe: e,
                                  customCheckoutSdk: t
                              };
                    });
                },
                f = t.useRef(!1);
            t.useEffect(
                function () {
                    var e = !0;
                    return (
                        'async' !== a.tag || d.stripe
                            ? 'sync' === a.tag &&
                              a.stripe &&
                              !f.current &&
                              ((f.current = !0),
                              a.stripe.initCustomCheckout(r).then(function (e) {
                                  e && (E(a.stripe, e), e.on('change', u));
                              }))
                            : a.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !f.current &&
                                      ((f.current = !0),
                                      t.initCustomCheckout(r).then(function (e) {
                                          e && (E(t, e), e.on('change', u));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, d, r, u]
            );
            var h = N(n);
            t.useEffect(
                function () {
                    null !== h && h !== n && console.warn('Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                },
                [h, n]
            );
            var p = N(r);
            t.useEffect(
                function () {
                    if (!!d.customCheckoutSdk) {
                        r.clientSecret && !O(p) && !b(r.clientSecret, p.clientSecret) && console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
                        var e,
                            t,
                            n = null == p ? void 0 : null === (e = p.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                            i = null == r ? void 0 : null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
                        i && !b(i, n) && d.customCheckoutSdk.changeAppearance(i);
                    }
                },
                [r, p, d.customCheckoutSdk]
            ),
                t.useEffect(
                    function () {
                        U(d.stripe);
                    },
                    [d.stripe]
                );
            var m = t.useMemo(
                function () {
                    return j(d.customCheckoutSdk, s);
                },
                [d.customCheckoutSdk, s]
            );
            return d.customCheckoutSdk ? t.createElement(V.Provider, { value: d }, t.createElement(Y.Provider, { value: m }, i)) : null;
        };
    K.propTypes = {
        stripe: A.any,
        options: A.shape({
            clientSecret: A.string.isRequired,
            elementsOptions: A.object
        }).isRequired
    };
    var z = function (e) {
            return H(t.useContext(V), e);
        },
        q = function (e) {
            var n = t.useContext(V),
                r = t.useContext(w);
            if (n && r) throw Error('You cannot wrap the part of your app that '.concat(e, ' in both <CustomCheckoutProvider> and <Elements> providers.'));
            return n ? H(n, e) : x(r, e);
        },
        Q = function () {
            z('calls useCustomCheckout()');
            var e = t.useContext(Y);
            if (!e) throw Error('Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.');
            return e;
        },
        X = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        $ = function (e, n) {
            var r = ''.concat(X(e), 'Element'),
                i = function (n) {
                    var i,
                        a = n.id,
                        o = n.className,
                        s = n.options,
                        u = void 0 === s ? {} : s,
                        c = n.onBlur,
                        d = n.onFocus,
                        _ = n.onReady,
                        E = n.onChange,
                        f = n.onEscape,
                        h = n.onClick,
                        p = n.onLoadError,
                        m = n.onLoaderStart,
                        I = n.onNetworksChange,
                        T = n.onConfirm,
                        g = n.onCancel,
                        S = n.onShippingAddressChange,
                        A = n.onShippingRateChange,
                        O = q('mounts <'.concat(r, '>')),
                        R = 'elements' in O ? O.elements : null,
                        C = 'customCheckoutSdk' in O ? O.customCheckoutSdk : null,
                        y = l(t.useState(null), 2),
                        b = y[0],
                        D = y[1],
                        M = t.useRef(null),
                        P = t.useRef(null);
                    v(b, 'blur', c),
                        v(b, 'focus', d),
                        v(b, 'escape', f),
                        v(b, 'click', h),
                        v(b, 'loaderror', p),
                        v(b, 'loaderstart', m),
                        v(b, 'networkschange', I),
                        v(b, 'confirm', T),
                        v(b, 'cancel', g),
                        v(b, 'shippingaddresschange', S),
                        v(b, 'shippingratechange', A),
                        v(b, 'change', E),
                        _ &&
                            (i =
                                'expressCheckout' === e
                                    ? _
                                    : function () {
                                          _(b);
                                      }),
                        v(b, 'ready', i),
                        t.useLayoutEffect(
                            function () {
                                if (null === M.current && null !== P.current && (R || C)) {
                                    var t = null;
                                    C ? (t = C.createElement(e, u)) : R && (t = R.create(e, u)), (M.current = t), D(t), t && t.mount(P.current);
                                }
                            },
                            [R, C, u]
                        );
                    var U = N(u);
                    return (
                        t.useEffect(
                            function () {
                                if (!!M.current) {
                                    var e = L(u, U, ['paymentRequest']);
                                    e && M.current.update(e);
                                }
                            },
                            [u, U]
                        ),
                        t.useLayoutEffect(function () {
                            return function () {
                                if (M.current && 'function' == typeof M.current.destroy)
                                    try {
                                        M.current.destroy(), (M.current = null);
                                    } catch (e) {}
                            };
                        }, []),
                        t.createElement('div', {
                            id: a,
                            className: o,
                            ref: P
                        })
                    );
                },
                a = function (e) {
                    q('mounts <'.concat(r, '>'));
                    var n = e.id,
                        i = e.className;
                    return t.createElement('div', {
                        id: n,
                        className: i
                    });
                },
                o = n ? a : i;
            return (
                (o.propTypes = {
                    id: A.string,
                    className: A.string,
                    onChange: A.func,
                    onBlur: A.func,
                    onFocus: A.func,
                    onReady: A.func,
                    onEscape: A.func,
                    onClick: A.func,
                    onLoadError: A.func,
                    onLoaderStart: A.func,
                    onNetworksChange: A.func,
                    onConfirm: A.func,
                    onCancel: A.func,
                    onShippingAddressChange: A.func,
                    onShippingRateChange: A.func,
                    options: A.object
                }),
                (o.displayName = r),
                (o.__elementType = e),
                o
            );
        },
        J = 'undefined' == typeof window,
        ee = t.createContext(null);
    ee.displayName = 'EmbeddedCheckoutProviderContext';
    var et = function () {
            var e = t.useContext(ee);
            if (!e) throw Error('<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>');
            return e;
        },
        en = 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        er = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return P(n, en);
                    },
                    [n]
                ),
                o = t.useRef(null),
                s = t.useRef(null),
                u = l(t.useState({ embeddedCheckout: null }), 2),
                c = u[0],
                d = u[1];
            t.useEffect(
                function () {
                    if (!s.current && !o.current) {
                        var e = function (e) {
                            !s.current &&
                                !o.current &&
                                ((s.current = e),
                                (o.current = s.current.initEmbeddedCheckout(r).then(function (e) {
                                    d({ embeddedCheckout: e });
                                })));
                        };
                        'async' === a.tag && !s.current && (r.clientSecret || r.fetchClientSecret)
                            ? a.stripePromise.then(function (t) {
                                  t && e(t);
                              })
                            : 'sync' === a.tag && !s.current && (r.clientSecret || r.fetchClientSecret) && e(a.stripe);
                    }
                },
                [a, r, c, s]
            ),
                t.useEffect(
                    function () {
                        return function () {
                            c.embeddedCheckout
                                ? ((o.current = null), c.embeddedCheckout.destroy())
                                : o.current &&
                                  o.current.then(function () {
                                      (o.current = null), c.embeddedCheckout && c.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [c.embeddedCheckout]
                ),
                t.useEffect(
                    function () {
                        U(s);
                    },
                    [s]
                );
            var _ = N(n);
            t.useEffect(
                function () {
                    null !== _ && _ !== n && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                },
                [_, n]
            );
            var E = N(r);
            return (
                t.useEffect(
                    function () {
                        if (null != E) {
                            if (null == r) {
                                console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.');
                                return;
                            }
                            void 0 === r.clientSecret && void 0 === r.fetchClientSecret && console.warn('Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.'), null != E.clientSecret && r.clientSecret !== E.clientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != E.fetchClientSecret && r.fetchClientSecret !== E.fetchClientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != E.onComplete && r.onComplete !== E.onComplete && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.');
                        }
                    },
                    [E, r]
                ),
                t.createElement(ee.Provider, { value: c }, i)
            );
        },
        ei = function (e) {
            var n = e.id,
                r = e.className,
                i = et().embeddedCheckout,
                a = t.useRef(!1),
                o = t.useRef(null);
            return (
                t.useLayoutEffect(
                    function () {
                        return (
                            !a.current && i && null !== o.current && (i.mount(o.current), (a.current = !0)),
                            function () {
                                if (a.current && i)
                                    try {
                                        i.unmount(), (a.current = !1);
                                    } catch (e) {}
                            }
                        );
                    },
                    [i]
                ),
                t.createElement('div', {
                    ref: o,
                    id: n,
                    className: r
                })
            );
        },
        ea = function (e) {
            var n = e.id,
                r = e.className;
            return (
                et(),
                t.createElement('div', {
                    id: n,
                    className: r
                })
            );
        },
        eo = J ? ea : ei,
        es = function () {
            return q('calls useStripe()').stripe;
        },
        el = $('auBankAccount', J),
        eu = $('card', J),
        ec = $('cardNumber', J),
        ed = $('cardExpiry', J),
        e_ = $('cardCvc', J),
        eE = $('fpxBank', J),
        ef = $('iban', J),
        eh = $('idealBank', J),
        ep = $('p24Bank', J),
        em = $('epsBank', J),
        eI = $('payment', J),
        eT = $('expressCheckout', J),
        eg = $('paymentRequestButton', J),
        eS = $('linkAuthentication', J),
        eA = $('address', J),
        ev = $('shippingAddress', J),
        eN = $('paymentMethodMessaging', J),
        eO = $('affirmMessage', J),
        eR = $('afterpayClearpayMessage', J);
    (e.AddressElement = eA), (e.AffirmMessageElement = eO), (e.AfterpayClearpayMessageElement = eR), (e.AuBankAccountElement = el), (e.CardCvcElement = e_), (e.CardElement = eu), (e.CardExpiryElement = ed), (e.CardNumberElement = ec), (e.CustomCheckoutProvider = K), (e.Elements = G), (e.ElementsConsumer = F), (e.EmbeddedCheckout = eo), (e.EmbeddedCheckoutProvider = er), (e.EpsBankElement = em), (e.ExpressCheckoutElement = eT), (e.FpxBankElement = eE), (e.IbanElement = ef), (e.IdealBankElement = eh), (e.LinkAuthenticationElement = eS), (e.P24BankElement = ep), (e.PaymentElement = eI), (e.PaymentMethodMessagingElement = eN), (e.PaymentRequestButtonElement = eg), (e.ShippingAddressElement = ev), (e.useCustomCheckout = Q), (e.useElements = B), (e.useStripe = es);
});
