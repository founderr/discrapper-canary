"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [30144], {
        77413: (t, e, n) => {
            n.d(e, {
                Z: () => k
            });
            var r = n(785893),
                i = n(667294),
                o = n(294184),
                u = n.n(o),
                s = n(973935),
                l = n(809784),
                a = n(202351),
                c = n(874049),
                f = n(968449),
                h = n(674482),
                d = n(330484),
                p = n(775173),
                y = n(38004),
                v = n(771333),
                b = n(936957);

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function g(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function O(t) {
                O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return O(t)
            }

            function E(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                });
                e && I(t, e)
            }

            function R(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        g(t, e, n[e])
                    }))
                }
                return t
            }

            function w(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function S(t, e) {
                if (null == t) return {};
                var n, r, i = function(t, e) {
                    if (null == t) return {};
                    var n, r, i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || (i[n] = t[n])
                    }
                    return i
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
                    }
                }
                return i
            }

            function P(t, e) {
                return !e || "object" !== C(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function I(t, e) {
                I = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return I(t, e)
            }

            function U(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            s = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var C = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function A(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = O(t);
                    if (e) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return P(this, n)
                }
            }
            var j = function(t) {
                E(n, t);
                var e = A(n);

                function n() {
                    m(this, n);
                    var t;
                    (t = e.apply(this, arguments)).state = {
                        hover: !1
                    };
                    t.key = void 0;
                    t.onError = function() {
                        var e = t.getSrc();
                        null != e && (t.cancelLoadImage = (0, c.po)(e, (function(e) {
                            if (!e) {
                                t.key = Date.now();
                                t.forceUpdate()
                            }
                        })))
                    };
                    t.onMouseEnter = function(e) {
                        t.setState({
                            hover: !0
                        });
                        var n = t.props.onMouseEnter;
                        null != n && n(e)
                    };
                    t.onMouseLeave = function(e) {
                        t.setState({
                            hover: !1
                        });
                        var n = t.props.onMouseLeave;
                        null != n && n(e)
                    };
                    return t
                }
                var o = n.prototype;
                o.componentWillUnmount = function() {
                    var t;
                    null === (t = this.cancelLoadImage) || void 0 === t || t.call(this)
                };
                o.getSrc = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        e = t.src,
                        n = t.emojiId,
                        r = t.emojiName,
                        i = t.animated,
                        o = t.shouldAnimate,
                        u = t.isFocused,
                        s = t.isInteracting,
                        l = t.size,
                        a = void 0 === l ? "default" : l,
                        c = this.state.hover;
                    if (null != e) return e;
                    if (null != n) {
                        var f = b.kV[a];
                        return p.ZP.getEmojiURL({
                            id: n,
                            animated: u && !0 === i && (!0 === o || c || !0 === s),
                            size: f
                        })
                    }
                    return null != r ? y.ZP.getURL(r) : void 0
                };
                o.render = function() {
                    var t, e, n = this.props,
                        o = n.emojiName,
                        s = n.animated,
                        l = n.className,
                        a = n.size,
                        c = void 0 === a ? "default" : a,
                        f = n.alt,
                        h = (n.shouldAnimate, n.isFocused, n.emojiId),
                        d = (n.autoplay,
                            n.isInteracting, S(n, ["emojiName", "animated", "className", "size", "alt", "shouldAnimate", "isFocused", "emojiId", "autoplay", "isInteracting"])),
                        p = this.getSrc();
                    if (null == p || "" === p) return (0, r.jsx)("span", {
                        className: u()("emoji", "emoji-text"),
                        children: o
                    });
                    s && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    });
                    return (0, i.createElement)("img", R(w(R(w(R({}, d), {
                        key: this.key,
                        src: p,
                        alt: null !== (e = null != f ? f : o) && void 0 !== e ? e : void 0,
                        draggable: !1
                    }), t), {
                        className: u()("emoji", l, {
                            jumboable: "jumbo" === c
                        }),
                        onError: this.onError,
                        "data-type": "emoji"
                    }), null != h && "" !== h ? {
                        "data-id": h
                    } : {
                        "data-name": o
                    }))
                };
                return n
            }(i.PureComponent);
            j.defaultProps = {
                isInteracting: !1
            };
            var N = function(t) {
                var e = function(t) {
                        var e = s.findDOMNode(t);
                        if ((0, l.k)(e)) {
                            a.push([e, t]);
                            c.observe(e)
                        } else 0
                    },
                    n = function(t) {
                        var e = s.findDOMNode(t);
                        c.unobserve(e);
                        var n = a.findIndex((function(e) {
                            var n = U(e, 2);
                            n[0];
                            return n[1] === t
                        }));
                        if (-1 !== n) {
                            a.splice(n, 1);
                            if (-1 !== (n = u.indexOf(t))) {
                                u.splice(n, 1);
                                n < o && u.length >= o && u[o - 1].forceUpdate()
                            }
                        } else 0
                    };
                if (null == window.IntersectionObserver) return function(e) {
                    return (0, r.jsx)(t, w(R({}, e), {
                        shouldAnimate: e.animated
                    }))
                };
                var o = 100,
                    u = [],
                    a = [],
                    c = new window.IntersectionObserver((function(t) {
                        t.forEach((function(t) {
                            var e = a.find((function(e) {
                                return U(e, 1)[0] === t.target
                            }));
                            if (null != e) {
                                var n = e[1];
                                if (t.intersectionRatio >= .7) {
                                    var r, i;
                                    if (-1 !== u.indexOf(n)) {
                                        0;
                                        return
                                    }
                                    var s = Math.abs(t.intersectionRect.bottom - Number(null === (r = t.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(t.intersectionRect.top - Number(null === (i = t.rootBounds) || void 0 === i ? void 0 : i.top));
                                    s ? u.unshift(n) : u.push(n);
                                    n.forceUpdate();
                                    s && u.length > o && u[o].forceUpdate()
                                } else {
                                    var l = u.indexOf(n);
                                    if (-1 !== l) {
                                        u.splice(l, 1);
                                        n.forceUpdate();
                                        l < o && u.length >= o && u[o - 1].forceUpdate()
                                    }
                                }
                            } else 0
                        }))
                    }), {
                        threshold: .7
                    });
                return function(i) {
                    E(l, i);
                    var s = A(l);

                    function l() {
                        m(this, l);
                        return s.apply(this, arguments)
                    }
                    var a = l.prototype;
                    a.shouldAutoplay = function(t) {
                        return t.animated && t.autoplay
                    };
                    a.componentDidMount = function() {
                        this.shouldAutoplay(this.props) && e(this)
                    };
                    a.componentDidUpdate = function(t) {
                        var r = this.shouldAutoplay(t),
                            i = this.shouldAutoplay(this.props);
                        i !== r && (i ? e(this) : n(this))
                    };
                    a.componentWillUnmount = function() {
                        this.shouldAutoplay(this.props) && n(this)
                    };
                    a.render = function() {
                        var e = u.indexOf(this),
                            n = this.props,
                            i = n.autoplay,
                            s = n.allowAnimatedEmoji,
                            l = S(n, ["autoplay", "allowAnimatedEmoji"]);
                        return (0, r.jsx)(d.G.Consumer, {
                            children: function(n) {
                                return (0, r.jsx)(t, w(R({}, l), {
                                    autoplay: i || !1,
                                    shouldAnimate: -1 !== e && e < o && !n.disableAnimations && s
                                }))
                            }
                        })
                    };
                    return l
                }(i.Component)
            }(j);

            function k(t) {
                var e = f.Yk.useSetting(),
                    n = {
                        autoplay: null == t.autoplay ? e : t.autoplay,
                        allowAnimatedEmoji: e
                    },
                    i = __OVERLAY__ ? (0, a.e7)([h.Z], (function() {
                        return h.Z.isInstanceFocused()
                    })) : (0, v.n)();
                return (0, r.jsx)(N, w(R({}, t, n), {
                    isFocused: i
                }))
            }
        },
        479373: (t, e, n) => {
            n.d(e, {
                Z: () => O,
                Y: () => E
            });
            var r = n(667294),
                i = n(110251),
                o = n.n(i),
                u = n(873955),
                s = n.n(u),
                l = n(571657),
                a = n(744564),
                c = n(61209),
                f = n(715107),
                h = n(464187),
                d = n(652591),
                p = n(396043),
                y = n(930114);

            function v(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        v(t, e, n[e])
                    }))
                }
                return t
            }

            function _(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }
            var m = (0, l.Gb)({
                analyticEventConfigs: d.AnalyticEventConfigs,
                dispatcher: a.Z,
                TRACK_ACTION_NAME: "TRACK"
            });

            function g(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t.name,
                    r = t.type,
                    i = t.properties;
                if (t.type !== l.nv.MODAL || null != t.name || !(0, y.Ez)().some((function(t) {
                        var e;
                        return null === (e = t._stackContext) || void 0 === e ? void 0 : e.isSlide
                    }))) {
                    (0, y.Ps)(t);
                    var o, u, s = null !== (o = null == i ? void 0 : i.guild_id) && void 0 !== o ? o : h.Z.getGuildId(),
                        a = null !== (u = null == i ? void 0 : i.channel_id) && void 0 !== u ? u : f.Z.getChannelId(s),
                        v = (0, d.expandEventProperties)(b({
                            impression_type: r,
                            location: (0, y.k$)()
                        }, (0, p.hH)(s), (0, p.v_)(c.Z.getChannel(a)), i));
                    if (e)(0, y.dT)(null, null);
                    else {
                        if (null != n && null != r) {
                            (0, d.debugLogEvent)(n, v);
                            m(n, v)
                        }(0, y.dT)(n, v)
                    }
                }
            }

            function O(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        disableTrack: !1,
                        trackOnInitialLoad: !1
                    },
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = r.useRef(),
                    u = r.useRef();
                r.useEffect((function() {
                    var r = !o()(i.current, t);
                    r && (i.current = t);
                    var l = !o()(u.current, n);
                    l && (u.current = n);
                    if (r || l) {
                        var a = _(b({}, t), {
                            sequenceId: s()("impression_")
                        });
                        g(a, e.disableTrack);
                        return function() {
                            null != a && (0, y.dw)(a)
                        }
                    }
                }), e.trackOnInitialLoad ? [] : void 0)
            }

            function E(t, e) {
                var n = t.impressionName,
                    r = t.impressionProperties,
                    i = "function" == typeof r ? r(e.params) : r;
                O({
                    type: l.nv.PAGE,
                    name: n,
                    properties: i
                })
            }
        },
        158515: (t, e, n) => {
            n.d(e, {
                Z: () => T
            });
            var r = n(496486),
                i = n.n(r),
                o = n(120053),
                u = n.n(o),
                s = n(382060),
                l = n(848285),
                a = n(169376);

            function c(t) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return c(t)
            }

            function f(t, e) {
                return !e || "object" !== d(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t, e) {
                h = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return h(t, e)
            }
            var d = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = c(t);
                    if (e) {
                        var i = c(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            const y = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && h(t, e)
                }(n, t);
                var e = p(n);

                function n(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var r;
                    (r = e.call(this)).id = t.id;
                    r.path = t.path;
                    return r
                }
                n.fromPath = function(t) {
                    return new n({
                        id: t,
                        path: t
                    })
                };
                return n
            }(a.Z);
            var v = n(61209),
                b = n(213818),
                _ = n(5544),
                m = n(840922),
                g = n(473903),
                O = n(504275),
                E = n(607556),
                R = n(585622),
                w = n(456837),
                S = n(429750),
                P = n(499477),
                I = n(2590);

            function U(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function C(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function A(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        A(t, e, n[e])
                    }))
                }
                return t
            }

            function N(t) {
                return function(t) {
                    if (Array.isArray(t)) return U(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return U(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return U(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var k = Object.freeze({});

            function M() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return 1e3 * t * (null != e ? e : 1)
            }

            function L(t, e) {
                if (!e.frecencyBoosters) return {};
                var n = b.Z.getFrequently(),
                    r = n.reduce((function(t, e) {
                        var n = e.id,
                            r = b.Z.getScore(n);
                        return r > t ? r : t
                    }), 0),
                    i = [];
                switch (t) {
                    case P.h8.GUILD:
                        i = n.filter((function(t) {
                            return t instanceof l.Z
                        }));
                        break;
                    case P.h8.USER:
                        i = n.filter((function(t) {
                            return t instanceof s.Sf && t.type === I.d4z.DM
                        }));
                        break;
                    case P.h8.GROUP_DM:
                        i = n.filter((function(t) {
                            return t instanceof s.Sf && t.isMultiUserDM()
                        }));
                        break;
                    case P.h8.TEXT_CHANNEL:
                        i = n.filter((function(t) {
                            return t instanceof s.Sf && (0, s.r8)(t.type)
                        }));
                        break;
                    case P.h8.VOICE_CHANNEL:
                        i = n.filter((function(t) {
                            return t instanceof s.Sf && t.isGuildVocal()
                        }))
                }
                var o = {},
                    u = !0,
                    a = !1,
                    c = void 0;
                try {
                    for (var f, h = i[Symbol.iterator](); !(u = (f = h.next()).done); u = !0) {
                        var d = f.value,
                            p = d.id,
                            y = b.Z.getScore(p);
                        if (t === P.h8.USER && d instanceof s.mn) {
                            if (d.type === I.d4z.DM) o[p = d.getRecipientId()] = 1 + y / r;
                            else if (d.type === I.d4z.GROUP_DM) {
                                var _ = d.recipients.length,
                                    g = !0,
                                    O = !1,
                                    E = void 0;
                                try {
                                    for (var R, w = d.recipients[Symbol.iterator](); !(g = (R = w.next()).done); g = !0) {
                                        o[R.value] = 1 + y / r * (1 / _)
                                    }
                                } catch (t) {
                                    O = !0;
                                    E = t
                                } finally {
                                    try {
                                        g || null == w.return || w.return()
                                    } finally {
                                        if (O) throw E
                                    }
                                }
                            }
                        } else o[p] = 1 + y / r
                    }
                } catch (t) {
                    a = !0;
                    c = t
                } finally {
                    try {
                        u || null == h.return || h.return()
                    } finally {
                        if (a) throw c
                    }
                }
                var S = m.Z.getFriendIDs(),
                    U = !0,
                    C = !1,
                    A = void 0;
                try {
                    for (var j, N = S[Symbol.iterator](); !(U = (j = N.next()).done); U = !0) {
                        var k, M = j.value;
                        o[M] = (null !== (k = o[M]) && void 0 !== k ? k : 1) + .2
                    }
                } catch (t) {
                    C = !0;
                    A = t
                } finally {
                    try {
                        U || null == N.return || N.return()
                    } finally {
                        if (C) throw A
                    }
                }
                var L = v.Z.getDMUserIds(),
                    T = !0,
                    D = !1,
                    Z = void 0;
                try {
                    for (var x, G = L[Symbol.iterator](); !(T = (x = G.next()).done); T = !0) {
                        var q, Q = x.value;
                        o[Q] = (null !== (q = o[Q]) && void 0 !== q ? q : 1) + .1
                    }
                } catch (t) {
                    D = !0;
                    Z = t
                } finally {
                    try {
                        T || null == G.return || G.return()
                    } finally {
                        if (D) throw Z
                    }
                }
                return o
            }
            var T = function() {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : k,
                        u = this;
                    C(this, t);
                    this.query = "";
                    this.options = k;
                    this.results = [];
                    this._userResults = [];
                    this._groupDMResults = [];
                    this._textChannelResults = [];
                    this._voiceChannelResults = [];
                    this._guildResults = [];
                    this._applicationResults = [];
                    this._linkResults = [];
                    this._userBlacklist = null;
                    this.parseUserResults = function(t) {
                        var e = t.results;
                        if (u._include(P.h8.USER)) {
                            u._userResults = [];
                            var n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                    var l = o.value,
                                        a = l.id,
                                        c = l.score,
                                        f = l.comparator,
                                        h = g.default.getUser(a);
                                    null != h && u._userResults.push({
                                        type: P.h8.USER,
                                        record: h,
                                        score: M(c),
                                        comparator: null != f ? f : void 0
                                    })
                                }
                            } catch (t) {
                                r = !0;
                                i = t
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                            u._userResults.length > u._limit && (u._userResults.length = u._limit);
                            u.updateAllResults()
                        }
                    };
                    this.updateAllResults = function() {
                        clearTimeout(u._asyncTimeout);
                        u.results = i()(N(u._userResults).concat(N(u._groupDMResults), N(u._textChannelResults), N(u._voiceChannelResults), N(u._guildResults), N(u._linkResults))).uniqBy((function(t) {
                            return "".concat(t.type, "-").concat(t.record.id)
                        })).sort(S.Z).value();
                        u.onResultsChange(u.results, u.query)
                    };
                    this.onResultsChange = e;
                    this.setOptions(o, !0);
                    this._limit = r;
                    this.createSearchContext();
                    this.setResultTypes(n)
                }
                var e = t.prototype;
                e.createSearchContext = function() {
                    null == this.userSearchContext && (this.userSearchContext = w.Z.getSearchContext(this.parseUserResults, this._limit))
                };
                e.setLimit = function(t) {
                    var e = this.userSearchContext;
                    this._limit = t;
                    null != e && e.setLimit(t);
                    this._userResults.length > this._limit && (this._userResults.length = this._limit);
                    this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit);
                    this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit);
                    this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit);
                    this._guildResults.length > this._limit && (this._guildResults.length = this._limit);
                    this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit);
                    this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
                };
                e.setResultTypes = function(t) {
                    this.resultTypes = null != t ? new Set(t) : null;
                    this._userResults = this._include(P.h8.USER) ? this._userResults : [];
                    this._groupDMResults = this._include(P.h8.GROUP_DM) ? this._groupDMResults : [];
                    this._textChannelResults = this._include(P.h8.TEXT_CHANNEL) ? this._textChannelResults : [];
                    this._voiceChannelResults = this._include(P.h8.VOICE_CHANNEL) ? this._voiceChannelResults : [];
                    this._guildResults = this._include(P.h8.GUILD) ? this._guildResults : [];
                    this._applicationResults = this._include(P.h8.APPLICATION) ? this._applicationResults : [];
                    this._linkResults = this._include(P.h8.LINK) ? this._linkResults : []
                };
                e._include = function(t) {
                    return null == this.resultTypes || this.resultTypes.has(t)
                };
                e._isAsyncSearch = function() {
                    return this._include(P.h8.USER)
                };
                e.setOptions = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.options = e ? j({}, this.options, t) : t;
                    null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map((function(t) {
                        return t.startsWith("user:") ? t.replace("user:", "") : ""
                    })).filter((function(t) {
                        return "" !== t
                    })) : this._userBlacklist = null
                };
                e.search = function(t, e) {
                    this.query = t;
                    if ("" !== t.trim()) {
                        this.queryUsers(t, e, this._limit);
                        this._groupDMResults = this.queryGroupDMs(t, this._limit);
                        this._textChannelResults = this.queryTextChannels(t, this._limit);
                        this._voiceChannelResults = this.queryVoiceChannels(t, this._limit);
                        this._guildResults = this.queryGuilds(t, this._limit);
                        this._applicationResults = this.queryApplications(t, this._limit);
                        this._linkResults = this.queryLink(t, this._limit);
                        if (this._isAsyncSearch()) {
                            clearTimeout(this._asyncTimeout);
                            this._asyncTimeout = setTimeout(this.updateAllResults, 300)
                        } else this.updateAllResults()
                    } else {
                        this.clear();
                        this.updateAllResults()
                    }
                };
                e.clear = function() {
                    var t = this.userSearchContext;
                    null != t && t.clearQuery();
                    this.results = [];
                    this._userResults = [];
                    this._groupDMResults = [];
                    this._textChannelResults = [];
                    this._voiceChannelResults = [];
                    this._guildResults = [];
                    this._applicationResults = [];
                    this._linkResults = []
                };
                e.clean = function() {
                    this.clear();
                    this.destroy();
                    this.query = "";
                    this.updateAllResults()
                };
                e.pause = function() {
                    var t, e;
                    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
                };
                e.resume = function() {
                    var t, e;
                    null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
                };
                e.destroy = function() {
                    var t = this.userSearchContext;
                    if (null != t) {
                        t.destroy();
                        this.userSearchContext = null
                    }
                };
                e.queryTextChannels = function(t, e) {
                    if (!this._include(P.h8.TEXT_CHANNEL)) return [];
                    var n = L(P.h8.TEXT_CHANNEL, this.options),
                        r = this.options.blacklist,
                        i = null != r ? function(t) {
                            return !r.has("channel:".concat(t.id))
                        } : void 0;
                    return O.ZP.queryChannels({
                        query: t,
                        guildId: null,
                        limit: e,
                        fuzzy: !0,
                        filter: i,
                        boosters: n
                    })
                };
                e.queryVoiceChannels = function(t, e) {
                    if (!this._include(P.h8.VOICE_CHANNEL)) return [];
                    var n = this.options.voiceChannelGuildFilter,
                        r = L(P.h8.VOICE_CHANNEL, this.options);
                    return O.ZP.queryChannels({
                        query: t,
                        guildId: n,
                        limit: e,
                        fuzzy: !0,
                        type: _.Zb,
                        boosters: r
                    })
                };
                e.queryGuilds = function(t, e) {
                    if (!this._include(P.h8.GUILD)) return [];
                    var n = L(P.h8.GUILD, this.options),
                        r = this.options.blacklist,
                        i = null != r ? function(t) {
                            return !r.has("guild:".concat(t.id))
                        } : void 0;
                    return O.ZP.queryGuilds({
                        query: t,
                        limit: e,
                        fuzzy: !0,
                        filter: i,
                        boosters: n
                    })
                };
                e.queryUsers = function(t, e, n) {
                    var r = this.userSearchContext;
                    if (null != r && this._include(P.h8.USER)) {
                        var i = this.options.userFilters;
                        void 0 !== e && E.Z.requestMembers(e, t, 100);
                        r.setLimit(n);
                        r.setQuery(t, i, this._userBlacklist, L(P.h8.USER, this.options))
                    }
                };
                e.queryGroupDMs = function(t, e) {
                    if (!this._include(P.h8.GROUP_DM)) return [];
                    var n = this.options.blacklist,
                        r = L(P.h8.GROUP_DM, this.options),
                        i = null != n ? function(t) {
                            return !n.has("channel:".concat(t.id))
                        } : void 0;
                    return O.ZP.queryGroupDMs({
                        query: t,
                        limit: e,
                        fuzzy: !0,
                        filter: i,
                        boosters: r
                    })
                };
                e.queryApplications = function(t, e) {
                    return this._include(P.h8.APPLICATION) ? O.ZP.queryApplications({
                        query: t,
                        limit: e,
                        fuzzy: !0
                    }) : []
                };
                e.queryLink = function(t, e) {
                    if (!this._include(P.h8.LINK)) return [];
                    var n, r = u().sanitizeUrl(t);
                    try {
                        n = new URL(r)
                    } catch (t) {
                        return []
                    }
                    var i = n.pathname,
                        o = n.hostname,
                        s = void 0 === o ? "" : o,
                        l = n.host,
                        a = R.Z.isDiscordHostname(s) || window.location.host === l;
                    return null !== i && a && R.Z.isAppRoute(i) ? [{
                        type: P.h8.LINK,
                        record: y.fromPath(i),
                        score: 1
                    }] : []
                };
                return t
            }()
        },
        456837: (t, e, n) => {
            n.d(e, {
                Z: () => U
            });
            var r = n(496486),
                i = n.n(r),
                o = n(468811),
                u = n.n(o),
                s = n(914716),
                l = n(382060),
                a = n(61209),
                c = n(21372),
                f = n(840922),
                h = n(473903),
                d = n(72580),
                p = n(749565);

            function y(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function v(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function b(t) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return b(t)
            }

            function _(t, e) {
                return !e || "object" !== g(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function m(t, e) {
                m = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return m(t, e)
            }
            var g = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(t);
                    if (e) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var E;
            ! function(t) {
                t.UPDATE_USERS = "UPDATE_USERS";
                t.USER_RESULTS = "USER_RESULTS";
                t.QUERY_SET = "QUERY_SET";
                t.QUERY_CLEAR = "QUERY_CLEAR"
            }(E || (E = {}));

            function R(t) {
                if (null == t || f.Z.isBlocked(t.id)) return null;
                var e = {
                    id: t.id,
                    username: "0" !== t.discriminator ? "".concat(t.username, "#").concat(t.discriminator) : t.username
                };
                null != p.ZP.getGlobalName(t) && (e.globalName = t.globalName);
                t.bot && (e.isBot = !0);
                if (f.Z.isFriend(t.id)) {
                    e.isFriend = !0;
                    e.friendNickname = f.Z.getNickname(t.id)
                }
                return e
            }

            function w(t, e, n) {
                null != t && (t[e] = null != n && "" !== n ? n : null)
            }

            function S(t) {
                var e = [];
                if (null == t || !(0, l.hv)(t.type)) return e;
                var n = t.recipients;
                (void 0 === n ? [] : n).forEach((function(n) {
                    var r = R(h.default.getUser(n));
                    null != t && w(r, t.id);
                    e.push(r)
                }));
                return e
            }

            function P(t, e) {
                var n = [];
                t.forEach((function(t) {
                    var r = R(t.user);
                    if (null != r) {
                        w(r, e, t.nick);
                        n.push(r)
                    }
                }));
                return n
            }
            var I = function() {
                function t(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                        i = this;
                    y(this, t);
                    this.handleMessages = function(t) {
                        var e = t.data;
                        if (null != e && e.type === E.USER_RESULTS && e.uuid === i._uuid) {
                            !1 !== i._currentQuery && i._callback(e.payload);
                            null != i._currentQuery && (i._currentQuery = null);
                            i._setNextQuery()
                        }
                    };
                    this._worker = e;
                    this._uuid = u().v4();
                    this._callback = n;
                    this._limit = r;
                    this._currentQuery = null;
                    this._nextQuery = null;
                    this._subscribed = !1;
                    this.subscribe()
                }
                var e = t.prototype;
                e.setLimit = function(t) {
                    this._limit = t;
                    null != this._nextQuery && (this._nextQuery.limit = t)
                };
                e.subscribe = function() {
                    if (null != this._worker && !this._subscribed) {
                        this._worker.addEventListener("message", this.handleMessages, !1);
                        this._subscribed = !0;
                        this._setNextQuery()
                    }
                };
                e.unsubscribe = function() {
                    if (null != this._worker && this._subscribed) {
                        this._worker.removeEventListener("message", this.handleMessages, !1);
                        this._subscribed = !1
                    }
                };
                e.destroy = function() {
                    this.clearQuery();
                    this.unsubscribe()
                };
                e.clearQuery = function() {
                    this._currentQuery = !1;
                    this._nextQuery = null;
                    null != this._worker && this._subscribed && this._worker.postMessage({
                        uuid: this._uuid,
                        type: E.QUERY_CLEAR
                    })
                };
                e.setQuery = function(t, e, n, r) {
                    if (null != t) {
                        this._nextQuery = {
                            query: t,
                            filters: e,
                            blacklist: n,
                            boosters: null != r ? r : {},
                            limit: this._limit
                        };
                        this._setNextQuery()
                    }
                };
                e._setNextQuery = function() {
                    if ((null == this._currentQuery || !1 === this._currentQuery) && null != this._nextQuery)
                        if (null != this._worker && this._subscribed) {
                            this._currentQuery = this._nextQuery;
                            this._nextQuery = null;
                            this._worker.postMessage({
                                uuid: this._uuid,
                                type: E.QUERY_SET,
                                payload: this._currentQuery
                            })
                        } else this._subscribed || this.subscribe()
                };
                return t
            }();
            const U = new(function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && m(t, e)
                }(r, t);
                var e = O(r);

                function r() {
                    y(this, r);
                    var t;
                    (t = e.apply(this, arguments)).actions = {
                        LOGOUT: function() {
                            return t._handleLogout()
                        },
                        POST_CONNECTION_OPEN: function() {
                            return t._handleConnectionOpen()
                        },
                        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                            return t._handleConnectionOpenSupplemental(e)
                        },
                        OVERLAY_INITIALIZE: function(e) {
                            return t._handleOverlayInitialize(e)
                        },
                        CURRENT_USER_UPDATE: function(e) {
                            return t._handleCurrentUserUpdate(e)
                        },
                        GUILD_CREATE: function(e) {
                            return t._handleGuildCreate(e)
                        },
                        GUILD_MEMBERS_CHUNK: function(e) {
                            return t._handleGuildMembersChunk(e)
                        },
                        GUILD_MEMBER_ADD: function(e) {
                            return t._handleGuildMemberUpdate(e)
                        },
                        GUILD_MEMBER_UPDATE: function(e) {
                            return t._handleGuildMemberUpdate(e)
                        },
                        RELATIONSHIP_ADD: function(e) {
                            return t._handleRelationshipAdd(e)
                        },
                        RELATIONSHIP_UPDATE: function(e) {
                            return t._handleRelationshipUpdate(e)
                        },
                        RELATIONSHIP_REMOVE: function(e) {
                            return t._handleRelationshipRemove(e)
                        },
                        CHANNEL_CREATE: function(e) {
                            return t._handleDMCreate(e)
                        },
                        CHANNEL_UPDATES: function(e) {
                            return t._handleDMUpdates(e)
                        },
                        CHANNEL_RECIPIENT_ADD: function(e) {
                            return t._handleRecipientChanges(e)
                        },
                        PASSIVE_UPDATE_V1: function(e) {
                            return t._handlePassiveUpdateV1(e)
                        }
                    };
                    t._handleLogout = function() {
                        t.rebootWebworker()
                    };
                    t._handleConnectionOpen = function() {
                        setTimeout((function() {
                            var e = h.default.getCurrentUser();
                            if (null != e) {
                                var n = R(e),
                                    r = v({}, n.id, n);
                                Object.values(h.default.getUsers()).forEach((function(t) {
                                    r[t.id] = R(t)
                                }));
                                var i = c.ZP.getMutableAllGuildsAndMembers();
                                for (var o in i)
                                    for (var u in i[o]) {
                                        var s, l, a = r[u],
                                            f = null !== (l = null === (s = i[o][u]) || void 0 === s ? void 0 : s.nick) && void 0 !== l ? l : p.ZP.getGlobalName(a);
                                        null != a && (a[o] = null != f && "" !== f ? f : null)
                                    }
                                t.updateUsers(Object.values(r))
                            }
                        }), 3e3)
                    };
                    t._handleConnectionOpenSupplemental = function(e) {
                        var n = e.guilds;
                        setTimeout((function() {
                            var e = i().flatMap(n, (function(t) {
                                return P(t.members, t.id)
                            }));
                            t.updateUsers(e)
                        }), 3e3)
                    };
                    t._handleOverlayInitialize = function(e) {
                        var n = e.users,
                            r = e.guildMembers,
                            i = new Map,
                            o = !0,
                            u = !1,
                            s = void 0;
                        try {
                            for (var l, a = n[Symbol.iterator](); !(o = (l = a.next()).done); o = !0) {
                                var c = l.value;
                                i.set(c.id, R(c))
                            }
                        } catch (t) {
                            u = !0;
                            s = t
                        } finally {
                            try {
                                o || null == a.return || a.return()
                            } finally {
                                if (u) throw s
                            }
                        }
                        var f = Object.keys(r),
                            h = !0,
                            d = !1,
                            p = void 0;
                        try {
                            for (var y, v = f[Symbol.iterator](); !(h = (y = v.next()).done); h = !0) {
                                var b = y.value,
                                    _ = r[b];
                                if (null != _) {
                                    var m = Object.keys(_),
                                        g = !0,
                                        O = !1,
                                        E = void 0;
                                    try {
                                        for (var S, P = m[Symbol.iterator](); !(g = (S = P.next()).done); g = !0) {
                                            var I = S.value,
                                                U = i.get(I),
                                                C = _[I];
                                            if (null != U && null != C && null != C.nick) {
                                                w(U, b, C.nick);
                                                i.set(I, U)
                                            }
                                        }
                                    } catch (t) {
                                        O = !0;
                                        E = t
                                    } finally {
                                        try {
                                            g || null == P.return || P.return()
                                        } finally {
                                            if (O) throw E
                                        }
                                    }
                                }
                            }
                        } catch (t) {
                            d = !0;
                            p = t
                        } finally {
                            try {
                                h || null == v.return || v.return()
                            } finally {
                                if (d) throw p
                            }
                        }
                        t.updateUsers(Array.from(i.values()));
                        i.clear()
                    };
                    t._handleCurrentUserUpdate = function(e) {
                        var n = R(e.user);
                        null != n && t.updateUsers([n])
                    };
                    t._handleGuildCreate = function(e) {
                        var n = e.guild,
                            r = n.members;
                        t.updateUsers(P(r, n.id))
                    };
                    t._handleGuildMembersChunk = function(e) {
                        var n = e.members,
                            r = e.guildId;
                        t.updateUsers(P(n, r))
                    };
                    t._handleGuildMemberUpdate = function(e) {
                        var n = e.guildId,
                            r = e.user,
                            i = e.nick,
                            o = R(r);
                        if (null != o) {
                            w(o, n, i);
                            t.updateUsers([o])
                        }
                    };
                    t._handlePassiveUpdateV1 = function(e) {
                        null != e.members && t.updateUsers(P(e.members, e.guildId))
                    };
                    t._handleRelationshipAdd = function(e) {
                        var n = R(e.relationship.user);
                        t.updateUsers([n])
                    };
                    t._handleRelationshipUpdate = function(e) {
                        var n = R(h.default.getUser(e.relationship.id));
                        t.updateUsers([n])
                    };
                    t._handleRelationshipRemove = function(e) {
                        var n = R(h.default.getUser(e.relationship.id));
                        t.updateUsers([n])
                    };
                    t._handleDMCreate = function(e) {
                        var n = e.channel.id,
                            r = S(a.Z.getChannel(n));
                        if (0 !== r.length) {
                            var i = R(h.default.getCurrentUser());
                            w(i, n);
                            r.push(i);
                            t.updateUsers(r)
                        }
                    };
                    t._handleDMUpdates = function(e) {
                        var n = e.channels,
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var u, s = n[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                                var l = u.value,
                                    c = S(a.Z.getChannel(l.id));
                                if (0 !== c.length) {
                                    var f = R(h.default.getCurrentUser());
                                    w(f, l.id);
                                    c.push(f);
                                    t.updateUsers(c)
                                }
                            }
                        } catch (t) {
                            i = !0;
                            o = t
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                    };
                    t._handleRecipientChanges = function(e) {
                        var n = e.channelId,
                            r = e.user;
                        if (e.isMember) {
                            var i = R(r);
                            w(i, n);
                            t.updateUsers([i])
                        }
                    };
                    return t
                }
                var o = r.prototype;
                o._initialize = function() {
                    this.rebootWebworker()
                };
                o._terminate = function() {
                    if (null != this._worker) {
                        this._worker.terminate();
                        this._worker = null
                    }
                };
                o.rebootWebworker = function() {
                    if (null != this._worker) {
                        this._worker.terminate();
                        this._worker = null
                    }
                    this._worker = new Worker(new URL(n.p + n.u(44829), n.b))
                };
                o.updateUsers = function(t) {
                    var e = this._worker;
                    if (null != e) {
                        t = t.filter(d.lm);
                        e.postMessage({
                            type: E.UPDATE_USERS,
                            payload: t
                        })
                    }
                };
                o.getSearchContext = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    this.initialize();
                    var n = this._worker;
                    if (null == n) throw new Error("SearchContextManager: No webworker initialized");
                    return new I(n, t, e)
                };
                return r
            }(s.Z))
        },
        73457: (t, e, n) => {
            n.d(e, {
                xQ: () => i.xQ,
                h8: () => i.h8,
                a8: () => i.a8,
                o6: () => o,
                ZP: () => s,
                gJ: () => u
            });
            var r = n(158515),
                i = n(499477);

            function o(t) {
                return {
                    type: i.h8.HEADER,
                    record: new i.X5(t),
                    score: 0
                }
            }

            function u(t, e, n, r) {
                var o = n.length,
                    s = r,
                    l = e;
                if (0 === o) return 0;
                if (null == s) s = l;
                else if (s === l) return l;
                return (l += t === i.a8.UP ? -1 : 1) < 0 || l >= o ? u(t, l < 0 ? o : -1, n, s) : n[l].type === i.h8.HEADER ? u(t, l, n, s) : l
            }
            const s = r.Z
        },
        381186: (t, e, n) => {
            n.d(e, {
                CR: () => k,
                so: () => N,
                ZP: () => F
            });
            var r = n(496486),
                i = n.n(r),
                o = n(258053),
                u = n.n(o),
                s = n(940060),
                l = n(202351),
                a = n(744564),
                c = n(563135),
                f = n(177570),
                h = n(664625),
                d = n(61209),
                p = n(27851),
                y = n(21372),
                v = n(567403),
                b = n(491260),
                _ = n(436154),
                m = n(473903),
                g = n(2590),
                O = n(473708);

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function R(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function w(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function S(t) {
                S = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return S(t)
            }

            function P(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function I(t, e) {
                return !e || "object" !== A(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function U(t, e) {
                U = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return U(t, e)
            }

            function C(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (e && o.length === e) break
                            }
                        } catch (t) {
                            s = !0;
                            i = t
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return E(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function j(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = S(t);
                    if (e) {
                        var i = S(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var N, k = "everyone";
            ! function(t) {
                t.GROUP = "GROUP";
                t.MEMBER = "MEMBER"
            }(N || (N = {}));

            function M(t, e, n, r) {
                switch (e) {
                    case g.Skl.ONLINE:
                    case g.Skl.OFFLINE:
                    case g.Skl.UNKNOWN:
                        return {
                            type: N.GROUP, key: e, id: e, get title() {
                                switch (e) {
                                    case g.Skl.ONLINE:
                                        return O.Z.Messages.STATUS_ONLINE;
                                    case g.Skl.OFFLINE:
                                        return O.Z.Messages.STATUS_OFFLINE;
                                    default:
                                        return O.Z.Messages.STATUS_UNKNOWN
                                }
                            }, count: n, index: r
                        };
                    default:
                        var i = v.Z.getGuild(t),
                            o = null != i ? i.getRole(e) : null;
                        return {
                            type: N.GROUP, key: e, id: e, title: null != o ? o.name : "", count: n, index: r
                        }
                }
            }

            function L(t, e, n) {
                var r = n === h.default.getId(),
                    i = b.Z.isMobileOnline(n),
                    o = r ? _.Z.getStatus() : b.Z.getStatus(n, t),
                    u = r ? _.Z.getActivities() : b.Z.getActivities(n, t),
                    s = f.Z.getStreamForUser(n, t),
                    l = m.default.getUser(n);
                return null == l ? null : P(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable
                        }))));
                        r.forEach((function(e) {
                            w(t, e, n[e])
                        }))
                    }
                    return t
                }({
                    type: N.MEMBER
                }, y.ZP.getMember(t, n)), {
                    user: l,
                    status: o,
                    activities: u,
                    applicationStream: s,
                    isOwner: e === n,
                    isMobileOnline: i
                })
            }

            function T(t) {
                var e = d.Z.getChannel(t);
                return null == e ? k : null == e.memberListId ? function(t) {
                    if (c.ZP.canEveryone(g.Plq.VIEW_CHANNEL, t)) return k;
                    return u().v3(i()(t.permissionOverwrites).reduce((function(t, e) {
                        var n = e.id,
                            r = e.allow,
                            i = e.deny;
                        s.Z.has(r, g.Plq.VIEW_CHANNEL) ? t.push("allow:".concat(n)) : s.Z.has(i, g.Plq.VIEW_CHANNEL) && t.push("deny:".concat(n));
                        return t
                    }), []).sort().join(",")).toString()
                }(e) : e.memberListId
            }
            var D = function() {
                    function t(e, n) {
                        R(this, t);
                        this.rows = [];
                        this.groups = [];
                        this.members = {};
                        this.version = 0;
                        this.guildId = e;
                        this.listId = n;
                        this.updateOwnerId()
                    }
                    var e = t.prototype;
                    e.updateOwnerId = function() {
                        var t = v.Z.getGuild(this.guildId);
                        if (null == t) return !1;
                        var e = c.ZP.getGuildVisualOwnerId(t);
                        if (this.ownerId === e) return !1;
                        this.ownerId = e;
                        return !0
                    };
                    e.setGroups = function(t) {
                        var e = this,
                            n = 0;
                        this.groups = t.map((function(t) {
                            var r, i = n,
                                o = Math.max(0, null !== (r = t.count) && void 0 !== r ? r : 0);
                            n += o + 1;
                            return M(e.guildId, t.id, o, i)
                        }));
                        this.rows.length = n
                    };
                    e.sync = function(t, e) {
                        var n = C(t, 1)[0],
                            r = this;
                        e.forEach((function(t, e) {
                            return r.update(n + e, t)
                        }))
                    };
                    e.invalidate = function(t) {
                        for (var e = C(t, 2), n = e[0], r = e[1], i = n; i <= r; i++) {
                            var o = this.rows[i];
                            if (null == o) break;
                            delete this.rows[i];
                            o.type === N.MEMBER && delete this.members[o.user.id]
                        }
                        this.version++
                    };
                    e.insert = function(t, e) {
                        var n = e.group,
                            r = e.member;
                        if (null != n) this.rows.splice(t, 0, M(this.guildId, n.id, n.count));
                        else if (null != r) {
                            var i = L(this.guildId, this.ownerId, r.user.id);
                            if (null == i) return;
                            this.rows.splice(t, 0, i);
                            this.members[r.user.id] = i
                        }
                        this.version++
                    };
                    e.update = function(t, e) {
                        var n = e.group,
                            r = e.member,
                            i = this.rows[t];
                        null != i && i.type === N.MEMBER && delete this.members[i.user.id];
                        if (null != n) this.rows[t] = M(this.guildId, n.id, n.count);
                        else if (null != r) {
                            var o = L(this.guildId, this.ownerId, r.user.id);
                            if (null == o) return;
                            this.rows[t] = o;
                            this.members[r.user.id] = o
                        }
                        this.version++
                    };
                    e.delete = function(t) {
                        var e = this.rows[t];
                        if (null != e) {
                            e.type === N.MEMBER && delete this.members[e.user.id];
                            this.rows.splice(t, 1);
                            this.version++
                        }
                    };
                    e.rebuildMember = function(t) {
                        var e = this.members[t];
                        if (null != e) {
                            Object.assign(e, L(this.guildId, this.ownerId, t));
                            this.version++
                        }
                    };
                    e.rebuildMembers = function() {
                        var t = this;
                        i().forEach(this.members, (function(e, n) {
                            t.rebuildMember(n)
                        }))
                    };
                    return t
                }(),
                Z = new(function() {
                    function t() {
                        R(this, t);
                        this._guildLists = {}
                    }
                    var e = t.prototype;
                    e.get = function(t, e) {
                        var n = this._guildLists[t];
                        null == n && (n = this._guildLists[t] = {});
                        var r = n[e];
                        if (null == r) {
                            (r = new D(t, e)).setGroups([{
                                id: g.Skl.UNKNOWN,
                                count: 0
                            }]);
                            n[e] = r
                        }
                        return r
                    };
                    e.forEach = function(t, e) {
                        if (null == t) i().forEach(this._guildLists, (function(t) {
                            i().forEach(t, e)
                        }));
                        else {
                            var n = this._guildLists[t];
                            null != n && i().forEach(n, e)
                        }
                    };
                    e.delete = function(t) {
                        delete this._guildLists[t]
                    };
                    e.reset = function() {
                        this._guildLists = {}
                    };
                    return t
                }());

            function x() {
                Z.reset()
            }
            var G = [];

            function q() {
                var t = f.Z.getAllApplicationStreams(),
                    e = G.concat(t);
                G = t;
                e.forEach((function(t) {
                    Z.forEach(null, (function(e) {
                        return e.rebuildMember(t.ownerId)
                    }))
                }))
            }

            function Q() {
                var t = h.default.getId();
                Z.forEach(null, (function(e) {
                    return e.rebuildMember(t)
                }))
            }
            var B = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && U(t, e)
                }(n, t);
                var e = j(n);

                function n() {
                    R(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(m.default, v.Z, d.Z, y.ZP, b.Z, _.Z, h.default, p.Z, f.Z);
                    this.syncWith([_.Z], Q);
                    this.syncWith([f.Z], q)
                };
                r.getProps = function(t, e) {
                    var n = Z.get(t, T(e));
                    return {
                        listId: "".concat(n.guildId, ":").concat(n.listId),
                        groups: n.groups,
                        rows: n.rows,
                        version: n.version
                    }
                };
                return n
            }(l.ZP.Store);
            B.displayName = "ChannelMemberStore";
            const F = new B(a.Z, {
                CONNECTION_OPEN: x,
                OVERLAY_INITIALIZE: x,
                GUILD_MEMBER_LIST_UPDATE: function(t) {
                    var e = Z.get(t.guildId, t.id);
                    t.ops.forEach((function(t) {
                        switch (t.op) {
                            case "SYNC":
                                e.sync(t.range, t.items);
                                break;
                            case "INVALIDATE":
                                e.invalidate(t.range);
                                break;
                            case "INSERT":
                                e.insert(t.index, t.item);
                                break;
                            case "UPDATE":
                                e.update(t.index, t.item);
                                break;
                            case "DELETE":
                                e.delete(t.index)
                        }
                    }));
                    e.setGroups(t.groups)
                },
                GUILD_UPDATE: function(t) {
                    var e = t.guild;
                    Z.forEach(e.id, (function(t) {
                        t.updateOwnerId() && t.rebuildMembers()
                    }))
                },
                GUILD_DELETE: function(t) {
                    var e = t.guild;
                    Z.delete(e.id)
                },
                GUILD_ROLE_UPDATE: function(t) {
                    var e = t.guildId;
                    Z.forEach(e, (function(t) {
                        return t.rebuildMembers()
                    }))
                },
                GUILD_MEMBER_UPDATE: function(t) {
                    var e = t.guildId,
                        n = t.user;
                    Z.forEach(e, (function(t) {
                        return t.rebuildMember(n.id)
                    }))
                },
                CHANNEL_UPDATES: function() {
                    return !0
                }
            })
        },
        213818: (t, e, n) => {
            n.d(e, {
                Z: () => I
            });
            var r = n(202351),
                i = n(630631),
                o = n(744564),
                u = n(747864),
                s = n(61209),
                l = n(567403),
                a = n(715107),
                c = n(464187);

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function d(t) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return d(t)
            }

            function p(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function y(t, e) {
                y = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return y(t, e)
            }
            var v = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function b(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(t);
                    if (e) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var _, m, g = "selectedChannelGuildFrecency",
                O = new u.Z({
                    computeBonus: function() {
                        return 100
                    },
                    computeWeight: function(t) {
                        var e = 0;
                        0 === t ? e = 100 : t >= 1 && t < 2 ? e = 70 : t >= 2 && t < 4 ? e = 50 : t >= 4 && t < 7 ? e = 30 : t >= 7 && (e = 10);
                        return e
                    },
                    lookupKey: function(t) {
                        return null !== (m = null !== (_ = l.Z.getGuild(t)) && void 0 !== _ ? _ : s.Z.getChannel(t)) && void 0 !== m ? m : s.Z.getChannel(s.Z.getDMFromUserId(t))
                    },
                    afterCompute: function(t) {
                        __OVERLAY__ || i.Z.set(g, t)
                    },
                    numFrequentlyItems: 100,
                    maxSamples: 10
                }),
                E = null,
                R = null;

            function w(t) {
                var e = t.guildId,
                    n = t.channelId;
                if (n !== E) {
                    E = null != n ? n : null;
                    null != n && O.track(n)
                }
                if (null != e && e !== R) {
                    R = e;
                    O.track(e)
                }
                return !1
            }

            function S() {
                O.markDirty();
                return !1
            }
            var P = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && y(t, e)
                }(n, t);
                var e = b(n);

                function n() {
                    f(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.Z, a.Z);
                    var t = i.Z.get(g, null);
                    null != t && O.overwriteHistory(t)
                };
                r.getFrequently = function() {
                    return O.frequently
                };
                r.getScore = function(t) {
                    var e;
                    return null !== (e = O.getFrecency(t)) && void 0 !== e ? e : 0
                };
                r.getScoreForDM = function(t) {
                    var e = s.Z.getDMFromUserId(t);
                    return null != e ? this.getScore(e) : 0
                };
                r.getMaxScore = function() {
                    return 1e3
                };
                r.getBonusScore = function() {
                    return 100
                };
                ! function(t, e, n) {
                    e && h(t.prototype, e);
                    n && h(t, n)
                }(n, [{
                    key: "frecency",
                    get: function() {
                        return O
                    }
                }]);
                return n
            }(r.ZP.Store);
            P.displayName = "FrecencyStore";
            const I = new P(o.Z, {
                CONNECTION_OPEN: S,
                OVERLAY_INITIALIZE: S,
                VOICE_CHANNEL_SELECT: w,
                CHANNEL_SELECT: w
            })
        },
        330484: (t, e, n) => {
            n.d(e, {
                G: () => r
            });
            var r = n(667294).createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        771333: (t, e, n) => {
            n.d(e, {
                n: () => s
            });
            var r = n(667294),
                i = n(202351),
                o = n(26468),
                u = n(901654);

            function s() {
                var t = r.useContext(o.ZP).windowId;
                return (0, i.e7)([u.Z], (function() {
                    return u.Z.isFocused(t)
                }), [t])
            }
        }
    }
]);