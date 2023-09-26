(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [73523, 71690], {
        944505: (e, t, n) => {
            e.exports = n.p + "545be34456b41a8695d986221389ea00.svg"
        },
        237745: (e, t, n) => {
            n.g, r = function(e) {
                return function(e) {
                    var t = {};

                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var a = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        e[r].call(a.exports, a, a.exports, n);
                        a.l = !0;
                        return a.exports
                    }
                    n.m = e;
                    n.c = t;
                    n.d = function(e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: r
                        })
                    };
                    n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        });
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    };
                    n.t = function(e, t) {
                        1 & t && (e = n(e));
                        if (8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var r = Object.create(null);
                        n.r(r);
                        Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        });
                        if (2 & t && "string" != typeof e)
                            for (var a in e) n.d(r, a, function(t) {
                                return e[t]
                            }.bind(null, a));
                        return r
                    };
                    n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        n.d(t, "a", t);
                        return t
                    };
                    n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    };
                    n.p = "";
                    return n(n.s = 2)
                }([function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function(e) {
                        return function(e) {
                            return Array.from(document.scripts).filter((function(t) {
                                return t.src.indexOf(e) > -1
                            }))
                        }(e).length > 0
                    };
                    t.isAnyScriptPresent = function(e) {
                        return e.reduce((function(e, t) {
                            return e || r(t)
                        }), !1)
                    }, t.injectScript = function(e) {
                        var t = document.createElement("script");
                        t.async = !0;
                        t.defer = !0;
                        t.src = e;
                        document.head && document.head.appendChild(t)
                    }
                }, function(t, n) {
                    t.exports = e
                }, function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r, a = n(1),
                        i = (r = a) && r.__esModule ? r : {
                            default: r
                        },
                        o = n(0),
                        c = ["https://google.com/recaptcha", "https://recaptcha.net/recaptcha", "https://www.gstatic.com/recaptcha"],
                        s = function(e) {
                            ! function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                });
                                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(t, e);

                            function t(e) {
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, t);
                                var n = function(e, t) {
                                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                                n.container = null;
                                n._isAvailable = function() {
                                    return Boolean(window && window.grecaptcha && window.grecaptcha.ready)
                                };
                                n._inject = function() {
                                    n.props.inject && !(0, o.isAnyScriptPresent)(c) && (0, o.injectScript)("https://recaptcha.net/recaptcha/api.js?render=explicit")
                                };
                                n._prepare = function() {
                                    var e = n.props,
                                        t = e.explicit,
                                        r = e.onLoad;
                                    window.grecaptcha.ready((function() {
                                        n.setState({
                                            ready: !0
                                        }, (function() {
                                            t || n.renderExplicitly();
                                            r && r()
                                        }))
                                    }))
                                };
                                n._renderRecaptcha = function(e, t) {
                                    return window.grecaptcha.render(e, t)
                                };
                                n._resetRecaptcha = function() {
                                    return window.grecaptcha.reset(n.state.instanceId)
                                };
                                n._executeRecaptcha = function() {
                                    return window.grecaptcha.execute(n.state.instanceId)
                                };
                                n._stopTimer = function() {
                                    n.state.timer && clearInterval(n.state.timer)
                                };
                                n.componentDidMount = function() {
                                    n._inject();
                                    if (n._isAvailable()) n._prepare();
                                    else {
                                        var e = setInterval((function() {
                                            if (n._isAvailable()) {
                                                n._prepare();
                                                n._stopTimer()
                                            }
                                        }), 500);
                                        n.setState({
                                            timer: e
                                        })
                                    }
                                };
                                n.shouldComponentUpdate = function() {
                                    return !n.state.rendered
                                };
                                n.componentWillUnmount = function() {
                                    n._stopTimer();
                                    n.state.rendered && n._resetRecaptcha()
                                };
                                n.renderExplicitly = function() {
                                    return new Promise((function(e, t) {
                                        if (n.state.rendered) return t("This recaptcha instance has been already rendered.");
                                        if (!n.state.ready || !n.container) return t("Recaptcha is not ready for rendering yet.");
                                        var r = n._renderRecaptcha(n.container, {
                                            sitekey: n.props.sitekey,
                                            theme: n.state.invisible ? null : n.props.theme,
                                            size: n.props.size,
                                            badge: n.state.invisible ? n.props.badge : null,
                                            tabindex: n.props.tabindex,
                                            callback: n.props.onVerify,
                                            "expired-callback": n.props.onExpire,
                                            "error-callback": n.props.onError,
                                            isolated: n.state.invisible ? n.props.isolated : null,
                                            hl: n.state.invisible ? null : n.props.hl
                                        });
                                        n.setState({
                                            instanceId: r,
                                            rendered: !0
                                        }, (function() {
                                            n.props.onRender && n.props.onRender();
                                            e()
                                        }))
                                    }))
                                };
                                n.reset = function() {
                                    return new Promise((function(e, t) {
                                        if (n.state.rendered) {
                                            n._resetRecaptcha();
                                            return e()
                                        }
                                        t("This recaptcha instance did not render yet.")
                                    }))
                                };
                                n.execute = function() {
                                    return new Promise((function(e, t) {
                                        if (!n.state.invisible) return t("Manual execution is only available for invisible size.");
                                        if (n.state.rendered) {
                                            n._executeRecaptcha();
                                            e()
                                        }
                                        return t("This recaptcha instance did not render yet.")
                                    }))
                                };
                                n.render = function() {
                                    return i.default.createElement("div", {
                                        id: n.props.id,
                                        className: n.props.className,
                                        ref: function(e) {
                                            return n.container = e
                                        }
                                    })
                                };
                                n.state = {
                                    instanceId: null,
                                    ready: !1,
                                    rendered: !1,
                                    invisible: "invisible" === n.props.size,
                                    timer: null
                                };
                                return n
                            }
                            return t
                        }(a.Component);
                    s.defaultProps = {
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
                    };
                    t.default = s
                }]).default
            }, e.exports = r(n(667294));
            var r
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
                default: () => z
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
                u = "hcaptchaOnLoad",
                d = [],
                h = function(e) {
                    void 0 === e && (e = {});
                    var t = p(e.scriptLocation);
                    delete e.scriptLocation;
                    var n = s(t),
                        r = d.find((function(e) {
                            return e.scope === n.window
                        }));
                    if (n.document.getElementById(l) && r) return r.promise;
                    var a = new Promise((function(r, a) {
                        n.window.hcaptchaOnLoad = r;
                        var i = e.apihost || "https://js.hcaptcha.com";
                        delete e.apihost;
                        var o = n.document.createElement("script");
                        o.id = l;
                        o.src = i + "/1/api.js?render=explicit&onload=" + u;
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
                    d.push({
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
                            u = e.loadAsync,
                            d = e.scriptLocation;
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
                            loadAsync: u,
                            scriptLocation: d
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
            var y = n(237745),
                b = n.n(y),
                v = n(468811),
                m = n.n(v),
                O = n(125776),
                C = n(701614),
                g = n(582906),
                E = n(652591),
                _ = n(2590);

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function R(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        R(e, t, n[t])
                    }))
                }
                return e
            }

            function w(e, t) {
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

            function S(e, t) {
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

            function P(e, t) {
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
                    if ("string" == typeof e) return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            const k = function(e) {
                var t = e.captchaService,
                    n = void 0 === t ? C.hP.RECAPTCHA : t,
                    i = e.sitekey,
                    o = e.rqdata,
                    c = e.onRender,
                    s = e.onVerify,
                    p = e.onError,
                    l = e.onOpen,
                    u = e.onClose,
                    d = e.onChalExpired,
                    h = S(e, ["captchaService", "sitekey", "rqdata", "onRender", "onVerify", "onError", "onOpen", "onClose", "onChalExpired"]),
                    y = a.useRef(null),
                    v = m().v4(),
                    j = P(a.useState(!1), 2),
                    R = j[0],
                    k = j[1],
                    A = a.useCallback((function(e) {
                        E.default.track(_.rMx.CAPTCHA_EVENT, {
                            captcha_event_name: e,
                            captcha_service: n,
                            sitekey: i,
                            captcha_flow_key: v
                        })
                    }), [v, n, i]),
                    I = a.useCallback((function(e) {
                        g.Z.increment({
                            name: O.V.CAPTCHA_EVENT,
                            tags: ["event_name:".concat(e), "captcha_service:".concat(n)]
                        })
                    }), [n]),
                    T = a.useCallback((function() {
                        if (!R) {
                            A("initial-load");
                            I("initial-load");
                            k(!0)
                        }
                    }), [I, R, A]),
                    L = a.useCallback((function() {
                        if (R && null != o && "" !== o) {
                            var e;
                            null === (e = y.current) || void 0 === e || e.setData({
                                rqdata: o
                            })
                        }
                    }), [R, o, y]);
                a.useEffect((function() {
                    L()
                }), [L]);
                a.useEffect((function() {
                    T()
                }), [T]);
                var M = a.useCallback((function() {
                        A("error");
                        I("error");
                        L();
                        null == p || p()
                    }), [A, I, L, p]),
                    N = a.useCallback((function(e) {
                        A("verify");
                        I("verify");
                        s(e)
                    }), [I, s, A]),
                    D = a.useCallback((function() {
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
                        L();
                        null == u || u()
                    }), [u, A, L]),
                    H = a.useCallback((function() {
                        A("chal-expire");
                        null == d || d()
                    }), [d, A]);
                null != i && "" !== i || (i = _.OL7);
                return n === C.hP.RECAPTCHA ? (0, r.jsx)(b(), w(x({}, h), {
                    onLoad: T,
                    onRender: D,
                    onVerify: N,
                    onError: M,
                    sitekey: i
                })) : n === C.hP.HCAPTCHA ? (0, r.jsx)(f, w(x({
                    ref: y
                }, h), {
                    sitekey: i,
                    onLoad: T,
                    onError: M,
                    onVerify: N,
                    onChalExpired: H,
                    onOpen: V,
                    onClose: q
                })) : (0, r.jsx)(b(), w(x({}, h), {
                    sitekey: i,
                    onLoad: T,
                    onRender: D,
                    onVerify: N,
                    onError: M
                }))
            };
            var A = n(930948),
                I = n(571690);
            var T = n(473708),
                L = n(730255),
                M = n.n(L),
                N = n(944505),
                D = n.n(N);

            function V(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        V(e, t, n[t])
                    }))
                }
                return e
            }

            function H(e, t) {
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
            var U = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);

            function z(e) {
                var t = e.onClose,
                    n = e.onCaptchaVerify,
                    o = e.onReject,
                    c = e.transitionState,
                    s = e.headerText,
                    p = e.bodyText,
                    l = e.rqtoken,
                    u = H(e, ["onClose", "onCaptchaVerify", "onReject", "transitionState", "headerText", "bodyText", "rqtoken"]),
                    d = function(e) {
                        var t = a.useRef(!0);
                        a.useEffect((function() {
                            return function() {
                                t.current && (null == e || e(I.CaptchaError.CANCEL))
                            }
                        }), []);
                        a.useEffect((function() {
                            E.default.track(_.rMx.OPEN_MODAL, {
                                type: "Guild Join Captcha"
                            });
                            return function() {
                                t.current && E.default.track(_.rMx.MODAL_DISMISSED, {
                                    type: "Guild Join Captcha"
                                })
                            }
                        }), [t]);
                        return function() {
                            t.current = !1
                        }
                    }(o);
                a.useEffect((function() {
                    A.S.subscribe(_.CkL.LAYER_POP_ESCAPE_KEY, t)
                }), [t]);
                return null != c && U.has(c) ? (0, r.jsx)(i.ModalRoot, {
                    transitionState: c,
                    "aria-label": "CAPTCHA",
                    className: M().modal,
                    children: (0, r.jsxs)(i.ModalContent, {
                        className: M().container,
                        children: [(0, r.jsx)(i.ModalCloseButton, {
                            className: M().close,
                            onClick: t
                        }), (0, r.jsx)("div", {
                            className: M().content,
                            children: c !== i.ModalTransitionState.ENTERED ? (0, r.jsx)(i.Spinner, {
                                type: i.Spinner.Type.SPINNING_CIRCLE
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    children: (0, r.jsx)("img", {
                                        src: D(),
                                        alt: ""
                                    })
                                }), (0, r.jsx)("div", {
                                    className: M().title,
                                    "aria-hidden": !0,
                                    children: null != s ? s : T.Z.Messages.GENERIC_CAPTCHA_HEADER
                                }), (0, r.jsx)("div", {
                                    children: null != p ? p : T.Z.Messages.GENERIC_CAPTCHA_DESCRIPTION
                                }), (0, r.jsx)("div", {
                                    className: M().captchaContainer,
                                    children: (0, r.jsx)(k, q({
                                        onVerify: function(e) {
                                            d();
                                            n(e, l);
                                            t()
                                        }
                                    }, u))
                                })]
                            })
                        })]
                    })
                }) : null
            }
        }
    }
]);