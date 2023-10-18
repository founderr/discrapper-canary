"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [76156, 58635], {
        758635: (e, t, n) => {
            n.d(t, {
                W: () => a
            });
            var r = n(281110),
                o = n(744564),
                i = n(239734),
                u = n(2590);

            function a() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (i.Z.needsRefresh()) {
                    o.Z.dispatch({
                        type: "LOAD_USER_AFFINITIES"
                    });
                    return r.ZP.get({
                        url: u.ANM.USER_AFFINITIES,
                        retries: e ? 3 : 0,
                        oldFormErrors: !0
                    }).then((function(e) {
                        var t = e.body;
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_SUCCESS",
                            affinities: t
                        })
                    }), (function() {
                        o.Z.dispatch({
                            type: "LOAD_USER_AFFINITIES_FAILURE"
                        })
                    }))
                }
                return Promise.resolve()
            }
        },
        621647: (e, t, n) => {
            n.d(t, {
                x: () => s
            });
            var r = n(473903),
                o = n(775173),
                i = n(72580),
                u = n(2590);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case u.d4z.DM:
                        var a = c(e.recipients.map(r.default.getUser).filter(i.lm), 1),
                            s = a[0];
                        return null == s ? null : s.getAvatarURL(void 0, t, n);
                    case u.d4z.GROUP_DM:
                        return o.ZP.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        239734: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(202351),
                o = n(744564),
                i = n(840922);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function h(e) {
                var t = function() {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }
            var d = !1,
                y = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                v = s({}, y);

            function b() {
                v.affinityUserIds = new Set(v.userAffinities.map((function(e) {
                    return e.user_id
                })).filter((function(e) {
                    return !i.Z.isBlocked(e)
                })))
            }
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = h(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(i.Z);
                    if (null != e) {
                        v.userAffinities = e.userAffinities;
                        v.affinityUserIds = new Set(e.affinityUserIds);
                        v.lastFetched = e.lastFetched
                    }
                    this.syncWith([i.Z], b)
                };
                r.needsRefresh = function() {
                    return Date.now() - v.lastFetched > 864e5
                };
                r.getFetching = function() {
                    return d
                };
                r.getState = function() {
                    return v
                };
                r.getUserAffinities = function() {
                    return v.userAffinities
                };
                r.getUserAffinitiesUserIds = function() {
                    return v.affinityUserIds
                };
                return n
            }(r.ZP.PersistedStore);
            E.displayName = "UserAffinitiesStore";
            E.persistKey = "UserAffinitiesStore";
            E.migrations = [function(e) {
                return null
            }];
            const O = new E(o.Z, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t, n = e.affinities;
                    v.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [];
                    v.lastFetched = Date.now();
                    b();
                    d = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    d = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    d = !1
                },
                LOGOUT: function() {
                    v = s({}, y)
                }
            })
        },
        796909: (e, t, n) => {
            n.d(t, {
                Z: () => x
            });
            var r = n(730381),
                o = n.n(r),
                i = n(202351),
                u = n(575626),
                a = n(744564),
                c = n(49575),
                s = n(999790),
                f = n(996344),
                l = n(48315),
                p = n(382060),
                h = n(61209),
                d = n(567403),
                y = n(179913),
                v = n(9430),
                b = n(473903),
                E = n(102921),
                O = n(897196);

            function m(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function I(e, t) {
                return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _(e, t) {
                _ = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _(e, t)
            }
            var A, R = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
                var t = function() {
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
                    var n, r = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }! function(e) {
                e.DEFAULT = "DEFAULT";
                e.FAVORITE = "FAVORITE"
            }(A || (A = {}));
            var w = new u.Z((function(e) {
                var t = e.isRequest,
                    n = e.isFavorite;
                return t ? [] : [n ? A.FAVORITE : A.DEFAULT]
            }), (function(e) {
                return -e.lastMessageId
            }));

            function C(e) {
                var t, n, r = null !== (n = null !== (t = y.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                    i = e.isMessageRequestTimestamp;
                if (null != i) {
                    var u = o()(i).valueOf(),
                        a = E.Z.fromTimestamp(u);
                    return E.Z.compare(r, a) > 0 ? r : a
                }
                return r
            }

            function F(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: v.Z.isMessagesFavorite(e.id) && (0, c.cn)(),
                    isRequest: f.Z.isMessageRequest(e.id) || l.Z.isSpam(e.id)
                }
            }

            function P() {
                w.clear();
                Object.values(h.Z.getMutablePrivateChannels()).forEach((function(e) {
                    w.set(e.id, F(e))
                }));
                (0, c.cn)() && (0, s.x7)() && v.Z.getAddedToMessages().forEach((function(e) {
                    var t = h.Z.getChannel(e);
                    null != t && (0, p.zi)(t.type) && w.set(t.id, F(t))
                }))
            }

            function T() {
                var e = h.Z.getMutablePrivateChannels();
                for (var t in e) w.set(t, F(e[t]))
            }
            var j, Z, N, U = (j = [], Z = [], N = [], function() {
                    var e = w.values(A.FAVORITE),
                        t = w.values(A.DEFAULT);
                    if (j !== e || Z !== t) {
                        N = [];
                        e.forEach((function(e) {
                            var t = e.channelId;
                            return N.push(t)
                        }));
                        j = e;
                        t.forEach((function(e) {
                            var t = e.channelId;
                            return N.push(t)
                        }));
                        Z = t
                    }
                    return N
                }),
                L = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && _(e, t)
                    }(n, e);
                    var t = S(n);

                    function n() {
                        m(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(h.Z, d.Z, b.default, f.Z, v.Z);
                        this.syncWith([v.Z, f.Z], P)
                    };
                    r.getPrivateChannelIds = function() {
                        return U()
                    };
                    r.getSortedChannels = function() {
                        return [w.values(A.FAVORITE), w.values(A.DEFAULT)]
                    };
                    r.serializeForOverlay = function() {
                        var e = {};
                        w.values().forEach((function(t) {
                            var n = t.channelId,
                                r = t.lastMessageId;
                            e[n] = r
                        }));
                        return e
                    };
                    return n
                }(i.ZP.Store);
            L.displayName = "PrivateChannelSortStore";
            const x = new L(a.Z, {
                CONNECTION_OPEN: P,
                CONNECTION_OPEN_SUPPLEMENTAL: P,
                OVERLAY_INITIALIZE: P,
                CACHE_LOADED: T,
                CACHE_LOADED_LAZY: T,
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach((function(e) {
                        ((0, p.hv)(e.type) || w.has(e.id)) && w.set(e.id, F(e))
                    }))
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, p.hv)(t.type)) return !1;
                    if (t.id === O.V) return !1;
                    w.set(t.id, F(t))
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    return w.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message;
                    if (!w.has(t)) return !1;
                    var r = h.Z.getChannel(t);
                    return null != r && w.set(t, F(r, n.id))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild.id;
                    return w.delete(t)
                }
            })
        },
        282898: (e, t, n) => {
            n.d(t, {
                Z: () => g
            });
            var r = n(785893),
                o = n(667294),
                i = n(294184),
                u = n.n(i),
                a = n(70418),
                c = n(559968),
                s = n(926054),
                f = n(473708),
                l = n(415030),
                p = n.n(l);

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function v(e, t) {
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function O(e) {
                var t = function() {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && b(e, t)
                }(n, e);
                var t = O(n);

                function n() {
                    h(this, n);
                    var e;
                    (e = t.apply(this, arguments))._textInputRef = o.createRef();
                    e._containerRef = o.createRef();
                    e.handleClear = function() {
                        var t = e.props,
                            n = t.onClear,
                            r = t.forwardedRef,
                            o = (null != r ? r : e._textInputRef).current;
                        null != o && o.focus();
                        null != n && n()
                    };
                    return e
                }
                n.prototype.render = function() {
                    var e = this.props,
                        t = e.autoFocus,
                        n = e.label,
                        o = e.placeholder,
                        i = e.searchTerm,
                        l = e.inputClassName,
                        h = e.className,
                        d = e.onChange,
                        y = e.onFocus,
                        v = e.onBlur,
                        b = e.onKeyPress,
                        E = e.autoComplete,
                        O = e.forwardedRef,
                        m = e.closeIconClassName,
                        g = e.searchIconClassName,
                        I = e.cta,
                        _ = null != i && i.length > 0,
                        A = null != O ? O : this._textInputRef;
                    return (0, r.jsx)(a.FocusRing, {
                        focusTarget: A,
                        ringTarget: this._containerRef,
                        children: (0, r.jsxs)("div", {
                            className: u()(p().searchBox, h),
                            ref: this._containerRef,
                            children: [(0, r.jsx)(a.TextInput, {
                                inputRef: A,
                                focusProps: {
                                    enabled: !1
                                },
                                name: "search",
                                maxLength: 100,
                                className: p().searchBoxInputWrapper,
                                inputClassName: u()(p().searchBoxInput, l),
                                onChange: d,
                                onFocus: y,
                                onBlur: v,
                                onKeyPress: b,
                                value: _ ? i : "",
                                placeholder: o,
                                autoFocus: t,
                                "aria-label": n,
                                autoComplete: E ? "on" : "off"
                            }), null != I ? (0, r.jsx)(a.Text, {
                                color: "text-muted",
                                variant: "text-xs/normal",
                                className: p().cta,
                                children: I
                            }) : null, _ ? (0, r.jsx)(a.Clickable, {
                                onClick: this.handleClear,
                                className: p().clear,
                                "aria-label": f.Z.Messages.SEARCH_CLEAR,
                                children: (0, r.jsx)(c.Z, {
                                    className: u()(p().clearIcon, m)
                                })
                            }) : (0, r.jsx)(s.Z, {
                                className: u()(p().searchIcon, g),
                                "aria-label": f.Z.Messages.SEARCH
                            })]
                        })
                    })
                };
                return n
            }(o.Component);
            m.defaultProps = {
                autoComplete: !1
            };
            const g = o.forwardRef((function(e, t) {
                return (0, r.jsx)(m, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            d(e, t, n[t])
                        }))
                    }
                    return e
                }({
                    forwardedRef: t
                }, e))
            }))
        }
    }
]);