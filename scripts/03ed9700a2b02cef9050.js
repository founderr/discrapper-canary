(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [73523, 71690], {
        944505: (e, t, n) => {
            e.exports = n.p + "545be34456b41a8695d986221389ea00.svg"
        },
        146944: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(667294);

            function a(e, t) {
                return a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, a(e, t)
            }
            var i = function(e) {
                    var t = document.createElement("script");
                    t.async = !0, t.defer = !0, t.src = e, document.head && document.head.appendChild(t)
                },
                o = function(e) {
                    return Array.from(document.scripts).reduce((function(t, n) {
                        return t || e.test(n.src)
                    }), !1)
                },
                c = /(http|https):\/\/(www)?.+\/recaptcha/,
                s = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
                p = function(e) {
                    var t, n;

                    function p() {
                        for (var t, n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(a)) || this).container = void 0, t.timer = void 0, t.state = {
                            instanceKey: Date.now(),
                            ready: !1,
                            rendered: !1,
                            invisible: "invisible" === t.props.size
                        }, t._isAvailable = function() {
                            var e;
                            return Boolean(null == (e = window.grecaptcha) ? void 0 : e.ready)
                        }, t._inject = function() {
                            t.props.inject && !o(c) && i("https://recaptcha.net/recaptcha/api.js?render=explicit" + (t.props.hl ? "&hl=" + t.props.hl : ""))
                        }, t._prepare = function() {
                            var e = t.props,
                                n = e.explicit,
                                r = e.onLoad;
                            window.grecaptcha.ready((function() {
                                t.setState({
                                    ready: !0
                                }, (function() {
                                    n || t.renderExplicitly(), r && r()
                                }))
                            }))
                        }, t._renderRecaptcha = function(e, t) {
                            return window.grecaptcha.render(e, t)
                        }, t._resetRecaptcha = function() {
                            return window.grecaptcha.reset(t.state.instanceId)
                        }, t._executeRecaptcha = function() {
                            return window.grecaptcha.execute(t.state.instanceId)
                        }, t._getResponseRecaptcha = function() {
                            return window.grecaptcha.getResponse(t.state.instanceId)
                        }, t._onVerify = function(e) {
                            return t.props.onVerify(e)
                        }, t._onExpire = function() {
                            return t.props.onExpire && t.props.onExpire()
                        }, t._onError = function() {
                            return t.props.onError && t.props.onError()
                        }, t._stopTimer = function() {
                            t.timer && clearInterval(t.timer)
                        }, t.componentDidMount = function() {
                            t._inject(),
                                t._isAvailable() ? t._prepare() : t.timer = window.setInterval((function() {
                                    t._isAvailable() && (t._prepare(), t._stopTimer())
                                }), 500)
                        }, t.componentWillUnmount = function() {
                            t._stopTimer()
                        }, t.renderExplicitly = function() {
                            return new Promise((function(e, n) {
                                if (t.state.rendered) return n(new Error("This recaptcha instance has been already rendered."));
                                if (!t.state.ready || !t.container) return n(new Error("Recaptcha is not ready for rendering yet."));
                                var r = t._renderRecaptcha(t.container, {
                                    sitekey: t.props.sitekey,
                                    theme: t.props.theme,
                                    size: t.props.size,
                                    badge: t.state.invisible ? t.props.badge : void 0,
                                    tabindex: t.props.tabindex,
                                    callback: t._onVerify,
                                    "expired-callback": t._onExpire,
                                    "error-callback": t._onError,
                                    isolated: t.state.invisible ? t.props.isolated : void 0,
                                    hl: t.state.invisible ? void 0 : t.props.hl
                                });
                                t.setState({
                                    instanceId: r,
                                    rendered: !0
                                }, (function() {
                                    t.props.onRender && t.props.onRender(), e()
                                }))
                            }))
                        }, t.reset = function() {
                            return new Promise((function(e, n) {
                                if (t.state.rendered) return t._resetRecaptcha(), e();
                                n(new Error("This recaptcha instance did not render yet."))
                            }))
                        }, t.execute = function() {
                            return new Promise((function(e, n) {
                                return t.state.invisible ? (t.state.rendered && (t._executeRecaptcha(), e()), n(new Error("This recaptcha instance did not render yet."))) : n(new Error("Manual execution is only available for invisible size."))
                            }))
                        }, t.getResponse = function() {
                            return new Promise((function(e, n) {
                                if (t.state.rendered) return e(t._getResponseRecaptcha());
                                n(new Error("This recaptcha instance did not render yet."))
                            }))
                        }, t.render = function() {
                            var e = r.createElement("div", {
                                key: t.state.instanceKey,
                                id: t.props.id,
                                className: t.props.className,
                                ref: function(e) {
                                    return t.container = e
                                }
                            });
                            return t.props.children ? t.props.children({
                                renderExplicitly: t.renderExplicitly,
                                reset: t.reset,
                                execute: t.execute,
                                getResponse: t.getResponse,
                                recaptchaComponent: e
                            }) : e
                        }, t
                    }
                    return n = e, (t = p).prototype = Object.create(n.prototype), t.prototype.constructor = t, a(t, n), p.getDerivedStateFromProps = function(e, t) {
                        var n = "invisible" === e.size;
                        return n !== t.invisible ? {
                            invisible: n
                        } : null
                    }, p.prototype.componentDidUpdate = function(e) {
                        var t = this;
                        s.reduce((function(n, r) {
                            return t.props[r] !== e[r] ? [].concat(n, [r]) : n
                        }), []).length > 0 && this.setState({
                            instanceKey: Date.now(),
                            rendered: !1
                        }, (function() {
                            t.props.explicit || t.renderExplicitly()
                        }))
                    }, p
                }(r.Component);
            p.defaultProps = {
                id: "",
                className: "g-recaptcha",
                theme: "light",
                size: "normal",
                badge: "bottomright",
                tabindex: 0,
                explicit: !1,
                inject: !0,
                isolated: !1,
                hl: ""
            }
        },
        571690: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                CaptchaError: () => r,
                extractCaptchaPropsFromResponseBody: () => a
            });
            var r;
            ! function(e) {
                e.CANCEL = "cancel";
                e.ERROR = "error";
                e.EXPIRED = "expired"
            }(r || (r = {}));

            function a(e) {
                return {
                    captchaService: e.captcha_service,
                    sitekey: e.captcha_sitekey,
                    options: {
                        rqdata: e.captcha_rqdata,
                        rqtoken: e.captcha_rqtoken
                    }
                }
            }
        },
        273523: (e, t, n) => {
            "use strict";
            n.r(t);
            n.d(t, {
                default: () => H
            });
            var r = n(785893),
                a = n(667294),
                i = n(304548);

            function o(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function c(e, t) {
                c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }

            function s(e) {
                var t = e && e.ownerDocument || document;
                return {
                    document: t,
                    window: t.defaultView || t.parentWindow || window
                }
            }

            function p(e) {
                return e || document.head
            }
            var l = "hcaptcha-api-script-id",
                d = "hcaptchaOnLoad",
                u = [],
                h = function(e) {
                    void 0 === e && (e = {});
                    var t = p(e.scriptLocation);
                    delete e.scriptLocation;
                    var n = s(t),
                        r = u.find((function(e) {
                            return e.scope === n.window
                        }));
                    if (n.document.getElementById(l) && r) return r.promise;
                    var a = new Promise((function(r, a) {
                        n.window.hcaptchaOnLoad = r;
                        var i = e.apihost || "https://js.hcaptcha.com";
                        delete e.apihost;
                        var o = n.document.createElement("script");
                        o.id = l;
                        o.src = i + "/1/api.js?render=explicit&onload=" + d;
                        o.async = void 0 === e.loadAsync || e.loadAsync;
                        delete e.loadAsync;
                        o.onerror = function(e) {
                            return a("script-error")
                        };
                        var c = function(e) {
                            return Object.entries(e).filter((function(e) {
                                e[0];
                                var t = e[1];
                                return t || !1 === t
                            })).map((function(e) {
                                var t = e[0],
                                    n = e[1];
                                return encodeURIComponent(t) + "=" + encodeURIComponent(n)
                            })).join("&")
                        }(e);
                        o.src += "" !== c ? "&" + c : "";
                        t.appendChild(o)
                    }));
                    u.push({
                        promise: a,
                        scope: n.window
                    });
                    return a
                };
            const f = function(e) {
                ! function(e, t) {
                    e.prototype = Object.create(t.prototype);
                    e.prototype.constructor = e;
                    c(e, t)
                }(t, e);

                function t(t) {
                    var n;
                    (n = e.call(this, t) || this)._hcaptcha = void 0;
                    n.renderCaptcha = n.renderCaptcha.bind(o(n));
                    n.resetCaptcha = n.resetCaptcha.bind(o(n));
                    n.removeCaptcha = n.removeCaptcha.bind(o(n));
                    n.isReady = n.isReady.bind(o(n));
                    n.loadCaptcha = n.loadCaptcha.bind(o(n));
                    n.handleOnLoad = n.handleOnLoad.bind(o(n));
                    n.handleSubmit = n.handleSubmit.bind(o(n));
                    n.handleExpire = n.handleExpire.bind(o(n));
                    n.handleError = n.handleError.bind(o(n));
                    n.handleOpen = n.handleOpen.bind(o(n));
                    n.handleClose = n.handleClose.bind(o(n));
                    n.handleChallengeExpired = n.handleChallengeExpired.bind(o(n));
                    n.ref = a.createRef();
                    n.apiScriptRequested = !1;
                    n.state = {
                        isApiReady: !1,
                        isRemoved: !1,
                        elementId: t.id,
                        captchaId: ""
                    };
                    return n
                }
                var n = t.prototype;
                n.componentDidMount = function() {
                    var e = this,
                        t = s(p(this.props.scriptLocation));
                    this._hcaptcha = t.window.hcaptcha || void 0;
                    void 0 !== this._hcaptcha ? this.setState({
                        isApiReady: !0
                    }, (function() {
                        e.renderCaptcha()
                    })) : this.loadCaptcha()
                };
                n.componentWillUnmount = function() {
                    var e = this.state.captchaId,
                        t = this._hcaptcha;
                    if (this.isReady()) {
                        t.reset(e);
                        t.remove(e)
                    }
                };
                n.shouldComponentUpdate = function(e, t) {
                    return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved
                };
                n.componentDidUpdate = function(e) {
                    var t = this;
                    ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every((function(n) {
                        return e[n] === t.props[n]
                    })) || this.removeCaptcha((function() {
                        t.renderCaptcha()
                    }))
                };
                n.loadCaptcha = function() {
                    if (!this.apiScriptRequested) {
                        var e = this.props,
                            t = e.apihost,
                            n = e.assethost,
                            r = e.endpoint,
                            a = e.host,
                            i = e.imghost,
                            o = e.languageOverride,
                            c = e.reCaptchaCompat,
                            s = e.reportapi,
                            p = e.sentry,
                            l = e.custom,
                            d = e.loadAsync,
                            u = e.scriptLocation;
                        h({
                            apihost: t,
                            assethost: n,
                            endpoint: r,
                            hl: o,
                            host: a,
                            imghost: i,
                            recaptchacompat: !1 === c ? "off" : null,
                            reportapi: s,
                            sentry: p,
                            custom: l,
                            loadAsync: d,
                            scriptLocation: u
                        }).then(this.handleOnLoad).catch(this.handleError);
                        this.apiScriptRequested = !0
                    }
                };
                n.renderCaptcha = function(e) {
                    if (this.state.isApiReady) {
                        var t = Object.assign({
                                "open-callback": this.handleOpen,
                                "close-callback": this.handleClose,
                                "error-callback": this.handleError,
                                "chalexpired-callback": this.handleChallengeExpired,
                                "expired-callback": this.handleExpire,
                                callback: this.handleSubmit
                            }, this.props, {
                                hl: this.props.hl || this.props.languageOverride,
                                languageOverride: void 0
                            }),
                            n = this._hcaptcha.render(this.ref.current, t);
                        this.setState({
                            isRemoved: !1,
                            captchaId: n
                        }, (function() {
                            e && e()
                        }))
                    }
                };
                n.resetCaptcha = function() {
                    var e = this.state.captchaId,
                        t = this._hcaptcha;
                    this.isReady() && t.reset(e)
                };
                n.removeCaptcha = function(e) {
                    var t = this.state.captchaId,
                        n = this._hcaptcha;
                    this.isReady() && this.setState({
                        isRemoved: !0
                    }, (function() {
                        n.remove(t);
                        e && e()
                    }))
                };
                n.handleOnLoad = function() {
                    var e = this;
                    this.setState({
                        isApiReady: !0
                    }, (function() {
                        var t = s(p(e.props.scriptLocation));
                        e._hcaptcha = t.window.hcaptcha;
                        e.renderCaptcha((function() {
                            var t = e.props.onLoad;
                            t && t()
                        }))
                    }))
                };
                n.handleSubmit = function(e) {
                    var t = this.props.onVerify,
                        n = this.state,
                        r = n.isRemoved,
                        a = n.captchaId,
                        i = this._hcaptcha;
                    if (void 0 !== i && !r) {
                        var o = i.getResponse(a),
                            c = i.getRespKey(a);
                        t && t(o, c)
                    }
                };
                n.handleExpire = function() {
                    var e = this.props.onExpire,
                        t = this.state.captchaId,
                        n = this._hcaptcha;
                    if (this.isReady()) {
                        n.reset(t);
                        e && e()
                    }
                };
                n.handleError = function(e) {
                    var t = this.props.onError,
                        n = this.state.captchaId,
                        r = this._hcaptcha;
                    this.isReady() && r.reset(n);
                    t && t(e)
                };
                n.isReady = function() {
                    var e = this.state,
                        t = e.isApiReady,
                        n = e.isRemoved;
                    return t && !n
                };
                n.handleOpen = function() {
                    this.isReady() && this.props.onOpen && this.props.onOpen()
                };
                n.handleClose = function() {
                    this.isReady() && this.props.onClose && this.props.onClose()
                };
                n.handleChallengeExpired = function() {
                    this.isReady() && this.props.onChalExpired && this.props.onChalExpired()
                };
                n.execute = function(e) {
                    void 0 === e && (e = null);
                    var t = this.state.captchaId,
                        n = this._hcaptcha;
                    if (this.isReady()) {
                        e && "object" != typeof e && (e = null);
                        return n.execute(t, e)
                    }
                };
                n.setData = function(e) {
                    var t = this.state.captchaId,
                        n = this._hcaptcha;
                    if (this.isReady()) {
                        e && "object" != typeof e && (e = null);
                        n.setData(t, e)
                    }
                };
                n.getResponse = function() {
                    return this._hcaptcha.getResponse(this.state.captchaId)
                };
                n.getRespKey = function() {
                    return this._hcaptcha.getRespKey(this.state.captchaId)
                };
                n.render = function() {
                    var e = this.state.elementId;
                    return a.createElement("div", {
                        ref: this.ref,
                        id: e
                    })
                };
                return t
            }(a.Component);
            var y = n(146944),
                v = n(228721),
                b = n(125776),
                m = n(701614),
                C = n(582906),
                E = n(652591),
                O = n(2590);

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function x(e, t) {
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

            function _(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (a[n] = e[n])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
            }

            function j(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, a, i = [],
                            o = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(o = (r = n.next()).done); o = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            c = !0;
                            a = e
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const k = function(e) {
                var t = e.captchaService,
                    n = void 0 === t ? m.hP.RECAPTCHA : t,
                    i = e.sitekey,
                    o = e.rqdata,
                    c = e.onRender,
                    s = e.onVerify,
                    p = e.onError,
                    l = e.onOpen,
                    d = e.onClose,
                    u = e.onChalExpired,
                    h = _(e, ["captchaService", "sitekey", "rqdata", "onRender", "onVerify", "onError", "onOpen", "onClose", "onChalExpired"]),
                    R = a.useRef(null),
                    g = (0, v.Z)(),
                    k = j(a.useState(!1), 2),
                    S = k[0],
                    P = k[1],
                    A = a.useCallback((function(e) {
                        E.default.track(O.rMx.CAPTCHA_EVENT, {
                            captcha_event_name: e,
                            captcha_service: n,
                            sitekey: i,
                            captcha_flow_key: g
                        })
                    }), [g, n, i]),
                    I = a.useCallback((function(e) {
                        C.Z.increment({
                            name: b.V.CAPTCHA_EVENT,
                            tags: ["event_name:".concat(e), "captcha_service:".concat(n)]
                        })
                    }), [n]),
                    T = a.useCallback((function() {
                        if (!S) {
                            A("initial-load");
                            I("initial-load");
                            P(!0)
                        }
                    }), [I, S, A]),
                    D = a.useCallback((function() {
                        if (S && null != o && "" !== o) {
                            var e;
                            null === (e = R.current) || void 0 === e || e.setData({
                                rqdata: o
                            })
                        }
                    }), [S, o, R]);
                a.useEffect((function() {
                    D()
                }), [D]);
                a.useEffect((function() {
                    T()
                }), [T]);
                var L = a.useCallback((function() {
                        A("error");
                        I("error");
                        D();
                        null == p || p()
                    }), [A, I, D, p]),
                    N = a.useCallback((function(e) {
                        A("verify");
                        I("verify");
                        s(e)
                    }), [I, s, A]),
                    M = a.useCallback((function() {
                        A("render");
                        null == c || c()
                    }), [c, A]),
                    V = a.useCallback((function() {
                        A("open");
                        I("open");
                        null == l || l()
                    }), [I, l, A]),
                    q = a.useCallback((function() {
                        A("close");
                        D();
                        null == d || d()
                    }), [d, A, D]),
                    H = a.useCallback((function() {
                        A("chal-expire");
                        null == u || u()
                    }), [u, A]);
                null != i && "" !== i || (i = O.OL7);
                return n === m.hP.RECAPTCHA ? (0, r.jsx)(y.Z, x(w({}, h), {
                    onLoad: T,
                    onRender: M,
                    onVerify: N,
                    onError: L,
                    sitekey: i
                })) : n === m.hP.HCAPTCHA ? (0, r.jsx)(f, x(w({
                    ref: R
                }, h), {
                    sitekey: i,
                    onLoad: T,
                    onError: L,
                    onVerify: N,
                    onChalExpired: H,
                    onOpen: V,
                    onClose: q
                })) : (0, r.jsx)(y.Z, x(w({}, h), {
                    sitekey: i,
                    onLoad: T,
                    onRender: M,
                    onVerify: N,
                    onError: L
                }))
            };
            var S = n(930948),
                P = n(571690);
            var A = n(473708),
                I = n(730255),
                T = n.n(I),
                D = n(944505),
                L = n.n(D);

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
                    }))
                }
                return e
            }

            function V(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (a[n] = e[n])
                    }
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                }
                return a
            }
            var q = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);

            function H(e) {
                var t = e.onClose,
                    n = e.onCaptchaVerify,
                    o = e.onReject,
                    c = e.transitionState,
                    s = e.headerText,
                    p = e.bodyText,
                    l = e.rqtoken,
                    d = V(e, ["onClose", "onCaptchaVerify", "onReject", "transitionState", "headerText", "bodyText", "rqtoken"]),
                    u = function(e) {
                        var t = a.useRef(!0);
                        a.useEffect((function() {
                            return function() {
                                t.current && (null == e || e(P.CaptchaError.CANCEL))
                            }
                        }), []);
                        a.useEffect((function() {
                            E.default.track(O.rMx.OPEN_MODAL, {
                                type: "Guild Join Captcha"
                            });
                            return function() {
                                t.current && E.default.track(O.rMx.MODAL_DISMISSED, {
                                    type: "Guild Join Captcha"
                                })
                            }
                        }), [t]);
                        return function() {
                            t.current = !1
                        }
                    }(o);
                a.useEffect((function() {
                    S.S.subscribe(O.CkL.LAYER_POP_ESCAPE_KEY, t)
                }), [t]);
                return null != c && q.has(c) ? (0, r.jsx)(i.ModalRoot, {
                    transitionState: c,
                    "aria-label": "CAPTCHA",
                    className: T().modal,
                    children: (0, r.jsxs)(i.ModalContent, {
                        className: T().container,
                        children: [(0, r.jsx)(i.ModalCloseButton, {
                            className: T().close,
                            onClick: t
                        }), (0, r.jsx)("div", {
                            className: T().content,
                            children: c !== i.ModalTransitionState.ENTERED ? (0, r.jsx)(i.Spinner, {
                                type: i.Spinner.Type.SPINNING_CIRCLE
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    children: (0, r.jsx)("img", {
                                        src: L(),
                                        alt: ""
                                    })
                                }), (0, r.jsx)("div", {
                                    className: T().title,
                                    "aria-hidden": !0,
                                    children: null != s ? s : A.Z.Messages.GENERIC_CAPTCHA_HEADER
                                }), (0, r.jsx)("div", {
                                    children: null != p ? p : A.Z.Messages.GENERIC_CAPTCHA_DESCRIPTION
                                }), (0, r.jsx)("div", {
                                    className: T().captchaContainer,
                                    children: (0, r.jsx)(k, M({
                                        onVerify: function(e) {
                                            u();
                                            n(e, l);
                                            t()
                                        }
                                    }, d))
                                })]
                            })
                        })]
                    })
                }) : null
            }
        }
    }
]);